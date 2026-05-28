import { Project, SyntaxKind, TypeFormatFlags } from 'ts-morph';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_CLASSES = [
  'Application',      'Preferences',     'AVItem',
  'AVLayer',          'CameraLayer',     'Collection',
  'CompItem',         'FileSource',      'FolderItem',
  'FootageItem',      'PlaceholderItem', 'FootageSource',
  'ImportOptions',    'Item',            'ItemCollection',
  'KeyframeEase',     'Layer',           'LayerCollection',
  'LightLayer',       'MarkerValue',     'MaskPropertyGroup',
  'OMCollection',     'OutputModule',    'PlaceholderSource',
  'Project',          'Property',        'PropertyBase',
  'PropertyGroup',    'RenderQueue',     'RenderQueueItem',
  'RQItemCollection', 'Settings',        'Shape',
  'ShapeLayer',       'SolidSource',     'System',
  'TextDocument',     'TextLayer',       'View',
  'Viewer',           'ViewOptions'
];

const DEFAULT_TARGETS = {
    'Application': 'app',
    'Project': 'app.project',
    'CompItem': 'activeComp',
    'Layer': 'targetLayer',
    'AVLayer': 'targetLayer',
    'TextLayer': 'targetLayer',
    'ShapeLayer': 'targetLayer',
    'CameraLayer': 'targetLayer',
    'LightLayer': 'targetLayer',
    'System': 'system'
};

const project = new Project();
const sourceFile = project.addSourceFileAtPath('node_modules/types-for-after-effects/index.d.ts');

const nodeLibrary = [];
const nodeEmitters = [];
const dataEmitters = [];

function mapTypeToPortType(typeNode) {
    if (!typeNode) return 'expr';
    const text = typeNode.getText();
    if (text === 'string') return 'text';
    if (text === 'number') return 'number';
    if (text === 'boolean') return 'boolean';
    return 'expr';
}

function generateNodes() {
    for (const className of TARGET_CLASSES) {
        const classDef = sourceFile.getClass(className);
        if (!classDef) {
            console.warn(`Class ${className} not found`);
            continue;
        }

        const items = [];

        const defaultTarget = DEFAULT_TARGETS[className] || className.toLowerCase();

        const properties = [];
        const methods = [];
        const seenProps = new Set();
        const seenMethods = new Set();

        let currentClass = classDef;
        while (currentClass) {
            for (const p of currentClass.getProperties()) {
                if (!seenProps.has(p.getName())) {
                    seenProps.add(p.getName());
                    properties.push(p);
                }
            }
            for (const m of currentClass.getMethods()) {
                const sig = `${m.getName()}(${m.getParameters().map(param => param.getTypeNode()?.getText() || 'any').join(',')})`;
                if (!seenMethods.has(sig)) {
                    seenMethods.add(sig);
                    methods.push(m);
                }
            }
            currentClass = currentClass.getBaseClass();
        }

        // Properties (Data nodes)
        for (const prop of properties) {
            const propName = prop.getName();
            const label = `${className} Get ${propName}`;
            
            items.push(`
      {
        type: 'ae_${className}_get_${propName}',
        label: '${label}',
        keywords: ['${className.toLowerCase()}', '${propName.toLowerCase()}', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: '${label}',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: '${className}', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: '${propName}' }
            ],
            values: {}
          }
        })
      }`);

            dataEmitters.push(`
  '${label}': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: '${defaultTarget}' });
    return \`\${target}.${propName}\`;
  }`);

            // Writable properties also get a "Set <prop>" action node so the
            // graph can assign them (e.g. `property.expression = ...`). The AE
            // typings mark read-only members `readonly`; skip those.
            const isWritable = !prop.isReadonly();
            if (isWritable) {
                const setLabel = `${className} Set ${propName}`;
                const valuePortType = mapTypeToPortType(prop.getTypeNode());

                items.push(`
      {
        type: 'ae_${className}_set_${propName}',
        label: '${setLabel}',
        keywords: ['${className.toLowerCase()}', '${propName.toLowerCase()}', 'set'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: '${setLabel}',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: '${className}', type: 'expr' },
              { id: 'value', label: '${propName}', type: '${valuePortType}' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }`);

                nodeEmitters.push(`
  '${setLabel}': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: '${defaultTarget}' });
    const value = ctx.resolveInput(node, { id: 'value', type: '${valuePortType}' });
    return [ir.raw(\`\${target}.${propName} = \${value};\`)];
  }`);
            }
        }

        // Methods (Execution nodes)
        const methodCounts = {};
        for (const m of methods) {
            methodCounts[m.getName()] = (methodCounts[m.getName()] || 0) + 1;
        }

        for (const method of methods) {
            const methodName = method.getName();
            const params = method.getParameters();
            
            let label = `${className} ${methodName}`;
            let typeId = `ae_${className}_${methodName}`;
            if (methodCounts[methodName] > 1) {
                const paramNames = params.map(p => p.getName()).join(', ');
                label += ` (${paramNames})`;
                typeId += `_${params.map(p => p.getName()).join('_')}`;
            }
            
            const inputsStr = params.map(p => {
                const portType = mapTypeToPortType(p.getTypeNode());
                return `{ id: '${p.getName()}', label: '${p.getName()}', type: '${portType}' }`;
            });
            inputsStr.unshift(`{ id: 'exec_in', label: 'Execution', type: 'exec' }`);
            inputsStr.splice(1, 0, `{ id: 'target', label: '${className}', type: 'expr' }`);

            const returnType = method.getReturnType().getText();
            const hasReturn = returnType !== 'void';
            const outputsStr = [`{ id: 'exec_out', label: 'Execution' }`];
            if (hasReturn) {
                outputsStr.push(`{ id: 'result', label: 'Result' }`);
            }

            items.push(`
      {
        type: '${typeId}',
        label: '${label}',
        keywords: ['${className.toLowerCase()}', '${methodName.toLowerCase()}'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: '${label}',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              ${inputsStr.join(',\n              ')}
            ],
            outputs: [
              ${outputsStr.join(',\n              ')}
            ],
            values: {}
          }
        })
      }`);

            const emitArgs = params.map(p => {
                const portType = mapTypeToPortType(p.getTypeNode());
                return `ctx.resolveInput(node, { id: '${p.getName()}', type: '${portType}' })`;
            });

            if (hasReturn) {
                nodeEmitters.push(`
  '${label}': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: '${defaultTarget}' });
    ${emitArgs.map((arg, i) => `const arg${i} = ${arg};`).join('\n    ')}
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, \`\${target}.${methodName}(${emitArgs.map((_, i) => `\${arg${i}}`).join(', ')})\`)];
  }`);
            } else {
                nodeEmitters.push(`
  '${label}': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: '${defaultTarget}' });
    ${emitArgs.map((arg, i) => `const arg${i} = ${arg};`).join('\n    ')}
    return [ir.raw(\`\${target}.${methodName}(${emitArgs.map((_, i) => `\${arg${i}}`).join(', ')});\`)];
  }`);
            }
        }

        nodeLibrary.push(`
  {
    category: '${className}',
    items: [${items.join(',')}\n    ]
  }`);
    }

    const outDir = path.join(__dirname, '../src/generated');
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    const libraryCode = `// GENERATED FILE - DO NOT EDIT\n\nlet counter = 0;\nfunction uid(prefix) {\n  counter += 1;\n  return \`\${prefix}_\${Date.now().toString(36)}_\${counter}\`;\n}\n\nexport const AE_NODE_LIBRARY = [${nodeLibrary.join(',')}];\n`;
    fs.writeFileSync(path.join(outDir, 'aeNodeLibrary.js'), libraryCode);

    const emittersCode = `// GENERATED FILE - DO NOT EDIT\nimport { ir } from '../compiler/ir';\n\nexport const AE_NODE_EMITTERS = {${nodeEmitters.join(',')}\n};\n\nexport const AE_DATA_EMITTERS = {${dataEmitters.join(',')}\n};\n`;
    fs.writeFileSync(path.join(outDir, 'aeEmitters.js'), emittersCode);

    console.log('Successfully generated AE nodes and emitters.');
}

generateNodes();
