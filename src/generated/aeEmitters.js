// GENERATED FILE - DO NOT EDIT
import { ir } from '../compiler/ir';

export const AE_NODE_EMITTERS = {
  'Application Set availableGPUAccelTypes': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.availableGPUAccelTypes = ${value};`)];
  },
  'Application Set disableRendering': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.disableRendering = ${value};`)];
  },
  'Application Set onError': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.onError = ${value};`)];
  },
  'Application Set exitCode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.exitCode = ${value};`)];
  },
  'Application Set exitAfterLaunchAndEval': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.exitAfterLaunchAndEval = ${value};`)];
  },
  'Application Set saveProjectOnCrash': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.saveProjectOnCrash = ${value};`)];
  },
  'Application newProject': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.newProject()`)];
  },
  'Application open': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.open(${arg0})`)];
  },
  'Application quit': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    
    return [ir.raw(`${target}.quit();`)];
  },
  'Application watchFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'folder_object_to_watch', type: 'expr' });
    return [ir.raw(`${target}.watchFolder(${arg0});`)];
  },
  'Application pauseWatchFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'pause', type: 'boolean' });
    return [ir.raw(`${target}.pauseWatchFolder(${arg0});`)];
  },
  'Application endWatchFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    
    return [ir.raw(`${target}.endWatchFolder();`)];
  },
  'Application purge': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'target', type: 'expr' });
    return [ir.raw(`${target}.purge(${arg0});`)];
  },
  'Application beginUndoGroup': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'undoString', type: 'text' });
    return [ir.raw(`${target}.beginUndoGroup(${arg0});`)];
  },
  'Application endUndoGroup': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    
    return [ir.raw(`${target}.endUndoGroup();`)];
  },
  'Application beginSuppressDialogs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    
    return [ir.raw(`${target}.beginSuppressDialogs();`)];
  },
  'Application endSuppressDialogs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'alert', type: 'boolean' });
    return [ir.raw(`${target}.endSuppressDialogs(${arg0});`)];
  },
  'Application setMemoryUsageLimits': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'imageCachePercentage', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'maximumMemoryPercentage', type: 'number' });
    return [ir.raw(`${target}.setMemoryUsageLimits(${arg0}, ${arg1});`)];
  },
  'Application setSavePreferencesOnQuit': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'doSave', type: 'boolean' });
    return [ir.raw(`${target}.setSavePreferencesOnQuit(${arg0});`)];
  },
  'Application activate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    
    return [ir.raw(`${target}.activate();`)];
  },
  'Application scheduleTask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'stringToExecute', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'delay', type: 'number' });
    const arg2 = ctx.resolveInput(node, { id: 'repeat', type: 'boolean' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.scheduleTask(${arg0}, ${arg1}, ${arg2})`)];
  },
  'Application cancelTask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'taskID', type: 'number' });
    return [ir.raw(`${target}.cancelTask(${arg0});`)];
  },
  'Application parseSwatchFile': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.parseSwatchFile(${arg0})`)];
  },
  'Application findMenuCommandId': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'str', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.findMenuCommandId(${arg0})`)];
  },
  'Application executeCommand': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'id', type: 'number' });
    return [ir.raw(`${target}.executeCommand(${arg0});`)];
  },
  'Application getenv': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.getenv(${arg0})`)];
  },
  'Application setTimeout': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'func', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'delay', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.setTimeout(${arg0}, ${arg1})`)];
  },
  'Application cancelTimeout': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    const arg0 = ctx.resolveInput(node, { id: 'id', type: 'number' });
    return [ir.raw(`${target}.cancelTimeout(${arg0});`)];
  },
  'Preferences deletePref': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'preferences' });
    const arg0 = ctx.resolveInput(node, { id: 'section', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    return [ir.raw(`${target}.deletePref(${arg0}, ${arg1}, ${arg2});`)];
  },
  'Preferences getPrefAsBool': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'preferences' });
    const arg0 = ctx.resolveInput(node, { id: 'section', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.getPrefAsBool(${arg0}, ${arg1}, ${arg2})`)];
  },
  'Preferences getPrefAsFloat': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'preferences' });
    const arg0 = ctx.resolveInput(node, { id: 'section', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.getPrefAsFloat(${arg0}, ${arg1}, ${arg2})`)];
  },
  'Preferences getPrefAsLong': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'preferences' });
    const arg0 = ctx.resolveInput(node, { id: 'section', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.getPrefAsLong(${arg0}, ${arg1}, ${arg2})`)];
  },
  'Preferences getPrefAsString': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'preferences' });
    const arg0 = ctx.resolveInput(node, { id: 'section', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.getPrefAsString(${arg0}, ${arg1}, ${arg2})`)];
  },
  'Preferences havePref': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'preferences' });
    const arg0 = ctx.resolveInput(node, { id: 'section', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.havePref(${arg0}, ${arg1}, ${arg2})`)];
  },
  'Preferences reload': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'preferences' });
    
    return [ir.raw(`${target}.reload();`)];
  },
  'Preferences savePrefAsBool': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'preferences' });
    const arg0 = ctx.resolveInput(node, { id: 'section', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    const arg3 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    return [ir.raw(`${target}.savePrefAsBool(${arg0}, ${arg1}, ${arg2}, ${arg3});`)];
  },
  'Preferences savePrefAsFloat': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'preferences' });
    const arg0 = ctx.resolveInput(node, { id: 'section', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'value', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    return [ir.raw(`${target}.savePrefAsFloat(${arg0}, ${arg1}, ${arg2}, ${arg3});`)];
  },
  'Preferences savePrefAsLong': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'preferences' });
    const arg0 = ctx.resolveInput(node, { id: 'section', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'value', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    return [ir.raw(`${target}.savePrefAsLong(${arg0}, ${arg1}, ${arg2}, ${arg3});`)];
  },
  'Preferences savePrefAsString': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'preferences' });
    const arg0 = ctx.resolveInput(node, { id: 'section', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'value', type: 'text' });
    const arg3 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    return [ir.raw(`${target}.savePrefAsString(${arg0}, ${arg1}, ${arg2}, ${arg3});`)];
  },
  'Preferences saveToDisk': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'preferences' });
    
    return [ir.raw(`${target}.saveToDisk();`)];
  },
  'AVItem Set width': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.width = ${value};`)];
  },
  'AVItem Set height': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.height = ${value};`)];
  },
  'AVItem Set pixelAspect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.pixelAspect = ${value};`)];
  },
  'AVItem Set frameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.frameRate = ${value};`)];
  },
  'AVItem Set frameDuration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.frameDuration = ${value};`)];
  },
  'AVItem Set duration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.duration = ${value};`)];
  },
  'AVItem Set useProxy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.useProxy = ${value};`)];
  },
  'AVItem Set time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.time = ${value};`)];
  },
  'AVItem Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'AVItem Set comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.comment = ${value};`)];
  },
  'AVItem Set parentFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.parentFolder = ${value};`)];
  },
  'AVItem Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'AVItem Set label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.label = ${value};`)];
  },
  'AVItem setProxy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    return [ir.raw(`${target}.setProxy(${arg0});`)];
  },
  'AVItem setProxyWithSequence': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'forceAlphabetical', type: 'boolean' });
    return [ir.raw(`${target}.setProxyWithSequence(${arg0}, ${arg1});`)];
  },
  'AVItem setProxyWithSolid': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const arg0 = ctx.resolveInput(node, { id: 'color', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'pixelAspect', type: 'number' });
    return [ir.raw(`${target}.setProxyWithSolid(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4});`)];
  },
  'AVItem setProxyWithPlaceholder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg2 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'frameRate', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'duration', type: 'number' });
    return [ir.raw(`${target}.setProxyWithPlaceholder(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4});`)];
  },
  'AVItem setProxyToNone': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    
    return [ir.raw(`${target}.setProxyToNone();`)];
  },
  'AVItem addGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const arg0 = ctx.resolveInput(node, { id: 'orientationType', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'position', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addGuide(${arg0}, ${arg1})`)];
  },
  'AVItem removeGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const arg0 = ctx.resolveInput(node, { id: 'guideIndex', type: 'number' });
    return [ir.raw(`${target}.removeGuide(${arg0});`)];
  },
  'AVItem setGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    const arg0 = ctx.resolveInput(node, { id: 'position', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'guideIndex', type: 'number' });
    return [ir.raw(`${target}.setGuide(${arg0}, ${arg1});`)];
  },
  'AVItem remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'AVLayer Set audioEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.audioEnabled = ${value};`)];
  },
  'AVLayer Set motionBlur': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.motionBlur = ${value};`)];
  },
  'AVLayer Set effectsActive': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.effectsActive = ${value};`)];
  },
  'AVLayer Set adjustmentLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.adjustmentLayer = ${value};`)];
  },
  'AVLayer Set environmentLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.environmentLayer = ${value};`)];
  },
  'AVLayer Set guideLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.guideLayer = ${value};`)];
  },
  'AVLayer Set threeDLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.threeDLayer = ${value};`)];
  },
  'AVLayer Set threeDPerChar': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.threeDPerChar = ${value};`)];
  },
  'AVLayer Set collapseTransformation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.collapseTransformation = ${value};`)];
  },
  'AVLayer Set frameBlendingType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.frameBlendingType = ${value};`)];
  },
  'AVLayer Set timeRemapEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.timeRemapEnabled = ${value};`)];
  },
  'AVLayer Set blendingMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.blendingMode = ${value};`)];
  },
  'AVLayer Set preserveTransparency': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.preserveTransparency = ${value};`)];
  },
  'AVLayer Set samplingQuality': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.samplingQuality = ${value};`)];
  },
  'AVLayer Set trackMatteType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.trackMatteType = ${value};`)];
  },
  'AVLayer Set quality': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.quality = ${value};`)];
  },
  'AVLayer Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'AVLayer Set parent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.parent = ${value};`)];
  },
  'AVLayer Set startTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.startTime = ${value};`)];
  },
  'AVLayer Set stretch': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.stretch = ${value};`)];
  },
  'AVLayer Set inPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.inPoint = ${value};`)];
  },
  'AVLayer Set outPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.outPoint = ${value};`)];
  },
  'AVLayer Set enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.enabled = ${value};`)];
  },
  'AVLayer Set solo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.solo = ${value};`)];
  },
  'AVLayer Set shy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.shy = ${value};`)];
  },
  'AVLayer Set locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.locked = ${value};`)];
  },
  'AVLayer Set comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.comment = ${value};`)];
  },
  'AVLayer Set label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.label = ${value};`)];
  },
  'AVLayer Set autoOrient': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.autoOrient = ${value};`)];
  },
  'AVLayer Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'AVLayer audioActiveAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.audioActiveAtTime(${arg0})`)];
  },
  'AVLayer calculateTransformFromPoints': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'pointTopLeft', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'pointTopRight', type: 'expr' });
    const arg2 = ctx.resolveInput(node, { id: 'pointBottomRight', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.calculateTransformFromPoints(${arg0}, ${arg1}, ${arg2})`)];
  },
  'AVLayer sourcePointToComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'point', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.sourcePointToComp(${arg0})`)];
  },
  'AVLayer compPointToSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'point', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.compPointToSource(${arg0})`)];
  },
  'AVLayer openInViewer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.openInViewer()`)];
  },
  'AVLayer replaceSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newSource', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'fixExpressions', type: 'boolean' });
    return [ir.raw(`${target}.replaceSource(${arg0}, ${arg1});`)];
  },
  'AVLayer sourceRectAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'timeT', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'extents', type: 'boolean' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.sourceRectAtTime(${arg0}, ${arg1})`)];
  },
  'AVLayer addToMotionGraphicsTemplate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'comp', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addToMotionGraphicsTemplate(${arg0})`)];
  },
  'AVLayer addToMotionGraphicsTemplateAs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'comp', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addToMotionGraphicsTemplateAs(${arg0}, ${arg1})`)];
  },
  'AVLayer canAddToMotionGraphicsTemplate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'comp', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.canAddToMotionGraphicsTemplate(${arg0})`)];
  },
  'AVLayer moveToBeginning': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.moveToBeginning();`)];
  },
  'AVLayer moveToEnd': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.moveToEnd();`)];
  },
  'AVLayer moveAfter': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'layer', type: 'expr' });
    return [ir.raw(`${target}.moveAfter(${arg0});`)];
  },
  'AVLayer moveBefore': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'layer', type: 'expr' });
    return [ir.raw(`${target}.moveBefore(${arg0});`)];
  },
  'AVLayer duplicate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.duplicate()`)];
  },
  'AVLayer copyToComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'intoComp', type: 'expr' });
    return [ir.raw(`${target}.copyToComp(${arg0});`)];
  },
  'AVLayer activeAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.activeAtTime(${arg0})`)];
  },
  'AVLayer setParentWithJump': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newParent', type: 'expr' });
    return [ir.raw(`${target}.setParentWithJump(${arg0});`)];
  },
  'AVLayer applyPreset': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'presetName', type: 'expr' });
    return [ir.raw(`${target}.applyPreset(${arg0});`)];
  },
  'AVLayer canAddProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.canAddProperty(${arg0})`)];
  },
  'AVLayer addProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addProperty(${arg0})`)];
  },
  'AVLayer propertyGroup': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'countUp', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.propertyGroup(${arg0})`)];
  },
  'AVLayer remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'AVLayer moveTo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newIndex', type: 'number' });
    return [ir.raw(`${target}.moveTo(${arg0});`)];
  },
  'AVLayer property (index)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'AVLayer property (name)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'CameraLayer Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'CameraLayer Set parent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.parent = ${value};`)];
  },
  'CameraLayer Set startTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.startTime = ${value};`)];
  },
  'CameraLayer Set stretch': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.stretch = ${value};`)];
  },
  'CameraLayer Set inPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.inPoint = ${value};`)];
  },
  'CameraLayer Set outPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.outPoint = ${value};`)];
  },
  'CameraLayer Set enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.enabled = ${value};`)];
  },
  'CameraLayer Set solo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.solo = ${value};`)];
  },
  'CameraLayer Set shy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.shy = ${value};`)];
  },
  'CameraLayer Set locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.locked = ${value};`)];
  },
  'CameraLayer Set comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.comment = ${value};`)];
  },
  'CameraLayer Set label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.label = ${value};`)];
  },
  'CameraLayer Set autoOrient': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.autoOrient = ${value};`)];
  },
  'CameraLayer Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'CameraLayer moveToBeginning': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.moveToBeginning();`)];
  },
  'CameraLayer moveToEnd': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.moveToEnd();`)];
  },
  'CameraLayer moveAfter': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'layer', type: 'expr' });
    return [ir.raw(`${target}.moveAfter(${arg0});`)];
  },
  'CameraLayer moveBefore': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'layer', type: 'expr' });
    return [ir.raw(`${target}.moveBefore(${arg0});`)];
  },
  'CameraLayer duplicate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.duplicate()`)];
  },
  'CameraLayer copyToComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'intoComp', type: 'expr' });
    return [ir.raw(`${target}.copyToComp(${arg0});`)];
  },
  'CameraLayer activeAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.activeAtTime(${arg0})`)];
  },
  'CameraLayer setParentWithJump': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newParent', type: 'expr' });
    return [ir.raw(`${target}.setParentWithJump(${arg0});`)];
  },
  'CameraLayer applyPreset': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'presetName', type: 'expr' });
    return [ir.raw(`${target}.applyPreset(${arg0});`)];
  },
  'CameraLayer canAddProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.canAddProperty(${arg0})`)];
  },
  'CameraLayer addProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addProperty(${arg0})`)];
  },
  'CameraLayer propertyGroup': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'countUp', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.propertyGroup(${arg0})`)];
  },
  'CameraLayer remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'CameraLayer moveTo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newIndex', type: 'number' });
    return [ir.raw(`${target}.moveTo(${arg0});`)];
  },
  'CameraLayer property (index)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'CameraLayer property (name)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'CompItem Set frameDuration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.frameDuration = ${value};`)];
  },
  'CompItem Set workAreaStart': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.workAreaStart = ${value};`)];
  },
  'CompItem Set workAreaDuration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.workAreaDuration = ${value};`)];
  },
  'CompItem Set hideShyLayers': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.hideShyLayers = ${value};`)];
  },
  'CompItem Set motionBlur': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.motionBlur = ${value};`)];
  },
  'CompItem Set draft3d': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.draft3d = ${value};`)];
  },
  'CompItem Set frameBlending': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.frameBlending = ${value};`)];
  },
  'CompItem Set preserveNestedFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.preserveNestedFrameRate = ${value};`)];
  },
  'CompItem Set preserveNestedResolution': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.preserveNestedResolution = ${value};`)];
  },
  'CompItem Set bgColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.bgColor = ${value};`)];
  },
  'CompItem Set displayStartTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.displayStartTime = ${value};`)];
  },
  'CompItem Set resolutionFactor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.resolutionFactor = ${value};`)];
  },
  'CompItem Set shutterAngle': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.shutterAngle = ${value};`)];
  },
  'CompItem Set shutterPhase': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.shutterPhase = ${value};`)];
  },
  'CompItem Set motionBlurSamplesPerFrame': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.motionBlurSamplesPerFrame = ${value};`)];
  },
  'CompItem Set motionBlurAdaptiveSampleLimit': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.motionBlurAdaptiveSampleLimit = ${value};`)];
  },
  'CompItem Set motionGraphicsTemplateName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.motionGraphicsTemplateName = ${value};`)];
  },
  'CompItem Set renderer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.renderer = ${value};`)];
  },
  'CompItem Set dropFrame': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.dropFrame = ${value};`)];
  },
  'CompItem Set displayStartFrame': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.displayStartFrame = ${value};`)];
  },
  'CompItem Set width': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.width = ${value};`)];
  },
  'CompItem Set height': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.height = ${value};`)];
  },
  'CompItem Set pixelAspect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.pixelAspect = ${value};`)];
  },
  'CompItem Set frameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.frameRate = ${value};`)];
  },
  'CompItem Set duration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.duration = ${value};`)];
  },
  'CompItem Set useProxy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.useProxy = ${value};`)];
  },
  'CompItem Set time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.time = ${value};`)];
  },
  'CompItem Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'CompItem Set comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.comment = ${value};`)];
  },
  'CompItem Set parentFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.parentFolder = ${value};`)];
  },
  'CompItem Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'CompItem Set label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.label = ${value};`)];
  },
  'CompItem duplicate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.duplicate()`)];
  },
  'CompItem layer (index)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.layer(${arg0})`)];
  },
  'CompItem layer (otherLayer, relIndex)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'otherLayer', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'relIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.layer(${arg0}, ${arg1})`)];
  },
  'CompItem layer (name)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.layer(${arg0})`)];
  },
  'CompItem openInViewer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.openInViewer()`)];
  },
  'CompItem saveFrameToPng': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    return [ir.raw(`${target}.saveFrameToPng(${arg0}, ${arg1});`)];
  },
  'CompItem ramPreviewTest': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'unknown', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'zoom', type: 'number' });
    const arg2 = ctx.resolveInput(node, { id: 'exposure', type: 'number' });
    return [ir.raw(`${target}.ramPreviewTest(${arg0}, ${arg1}, ${arg2});`)];
  },
  'CompItem exportAsMotionGraphicsTemplate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'doOverWriteFileIfExisting', type: 'boolean' });
    const arg1 = ctx.resolveInput(node, { id: 'file_path', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.exportAsMotionGraphicsTemplate(${arg0}, ${arg1})`)];
  },
  'CompItem openInEssentialGraphics': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    
    return [ir.raw(`${target}.openInEssentialGraphics();`)];
  },
  'CompItem getMotionGraphicsTemplateControllerName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.getMotionGraphicsTemplateControllerName(${arg0})`)];
  },
  'CompItem setMotionGraphicsControllerName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'newName', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.setMotionGraphicsControllerName(${arg0}, ${arg1})`)];
  },
  'CompItem setProxy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    return [ir.raw(`${target}.setProxy(${arg0});`)];
  },
  'CompItem setProxyWithSequence': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'forceAlphabetical', type: 'boolean' });
    return [ir.raw(`${target}.setProxyWithSequence(${arg0}, ${arg1});`)];
  },
  'CompItem setProxyWithSolid': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'color', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'pixelAspect', type: 'number' });
    return [ir.raw(`${target}.setProxyWithSolid(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4});`)];
  },
  'CompItem setProxyWithPlaceholder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg2 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'frameRate', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'duration', type: 'number' });
    return [ir.raw(`${target}.setProxyWithPlaceholder(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4});`)];
  },
  'CompItem setProxyToNone': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    
    return [ir.raw(`${target}.setProxyToNone();`)];
  },
  'CompItem addGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'orientationType', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'position', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addGuide(${arg0}, ${arg1})`)];
  },
  'CompItem removeGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'guideIndex', type: 'number' });
    return [ir.raw(`${target}.removeGuide(${arg0});`)];
  },
  'CompItem setGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    const arg0 = ctx.resolveInput(node, { id: 'position', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'guideIndex', type: 'number' });
    return [ir.raw(`${target}.setGuide(${arg0}, ${arg1});`)];
  },
  'CompItem remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'FileSource Set hasAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.hasAlpha = ${value};`)];
  },
  'FileSource Set alphaMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.alphaMode = ${value};`)];
  },
  'FileSource Set premulColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.premulColor = ${value};`)];
  },
  'FileSource Set invertAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.invertAlpha = ${value};`)];
  },
  'FileSource Set fieldSeparationType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.fieldSeparationType = ${value};`)];
  },
  'FileSource Set highQualityFieldSeparation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.highQualityFieldSeparation = ${value};`)];
  },
  'FileSource Set removePulldown': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.removePulldown = ${value};`)];
  },
  'FileSource Set loop': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.loop = ${value};`)];
  },
  'FileSource Set nativeFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.nativeFrameRate = ${value};`)];
  },
  'FileSource Set conformFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.conformFrameRate = ${value};`)];
  },
  'FileSource reload': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    
    return [ir.raw(`${target}.reload();`)];
  },
  'FileSource guessAlphaMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    
    return [ir.raw(`${target}.guessAlphaMode();`)];
  },
  'FileSource guessPulldown': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    const arg0 = ctx.resolveInput(node, { id: 'method', type: 'expr' });
    return [ir.raw(`${target}.guessPulldown(${arg0});`)];
  },
  'FolderItem Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'FolderItem Set comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.comment = ${value};`)];
  },
  'FolderItem Set parentFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.parentFolder = ${value};`)];
  },
  'FolderItem Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'FolderItem Set label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.label = ${value};`)];
  },
  'FolderItem item': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.item(${arg0})`)];
  },
  'FolderItem addGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'orientationType', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'position', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addGuide(${arg0}, ${arg1})`)];
  },
  'FolderItem removeGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'guideIndex', type: 'number' });
    return [ir.raw(`${target}.removeGuide(${arg0});`)];
  },
  'FolderItem setGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'position', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'guideIndex', type: 'number' });
    return [ir.raw(`${target}.setGuide(${arg0}, ${arg1});`)];
  },
  'FolderItem remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'FootageItem Set width': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.width = ${value};`)];
  },
  'FootageItem Set height': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.height = ${value};`)];
  },
  'FootageItem Set pixelAspect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.pixelAspect = ${value};`)];
  },
  'FootageItem Set frameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.frameRate = ${value};`)];
  },
  'FootageItem Set frameDuration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.frameDuration = ${value};`)];
  },
  'FootageItem Set duration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.duration = ${value};`)];
  },
  'FootageItem Set useProxy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.useProxy = ${value};`)];
  },
  'FootageItem Set time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.time = ${value};`)];
  },
  'FootageItem Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'FootageItem Set comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.comment = ${value};`)];
  },
  'FootageItem Set parentFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.parentFolder = ${value};`)];
  },
  'FootageItem Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'FootageItem Set label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.label = ${value};`)];
  },
  'FootageItem openInViewer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.openInViewer()`)];
  },
  'FootageItem replace': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    return [ir.raw(`${target}.replace(${arg0});`)];
  },
  'FootageItem replaceWithPlaceholder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg2 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'frameRate', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'duration', type: 'number' });
    return [ir.raw(`${target}.replaceWithPlaceholder(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4});`)];
  },
  'FootageItem replaceWithSequence': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'forceAlphabetical', type: 'boolean' });
    return [ir.raw(`${target}.replaceWithSequence(${arg0}, ${arg1});`)];
  },
  'FootageItem replaceWithSolid': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const arg0 = ctx.resolveInput(node, { id: 'color', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'pixelAspect', type: 'number' });
    return [ir.raw(`${target}.replaceWithSolid(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4});`)];
  },
  'FootageItem setProxy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    return [ir.raw(`${target}.setProxy(${arg0});`)];
  },
  'FootageItem setProxyWithSequence': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'forceAlphabetical', type: 'boolean' });
    return [ir.raw(`${target}.setProxyWithSequence(${arg0}, ${arg1});`)];
  },
  'FootageItem setProxyWithSolid': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const arg0 = ctx.resolveInput(node, { id: 'color', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'pixelAspect', type: 'number' });
    return [ir.raw(`${target}.setProxyWithSolid(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4});`)];
  },
  'FootageItem setProxyWithPlaceholder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg2 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'frameRate', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'duration', type: 'number' });
    return [ir.raw(`${target}.setProxyWithPlaceholder(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4});`)];
  },
  'FootageItem setProxyToNone': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    
    return [ir.raw(`${target}.setProxyToNone();`)];
  },
  'FootageItem addGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const arg0 = ctx.resolveInput(node, { id: 'orientationType', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'position', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addGuide(${arg0}, ${arg1})`)];
  },
  'FootageItem removeGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const arg0 = ctx.resolveInput(node, { id: 'guideIndex', type: 'number' });
    return [ir.raw(`${target}.removeGuide(${arg0});`)];
  },
  'FootageItem setGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    const arg0 = ctx.resolveInput(node, { id: 'position', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'guideIndex', type: 'number' });
    return [ir.raw(`${target}.setGuide(${arg0}, ${arg1});`)];
  },
  'FootageItem remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'PlaceholderItem Set width': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.width = ${value};`)];
  },
  'PlaceholderItem Set height': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.height = ${value};`)];
  },
  'PlaceholderItem Set pixelAspect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.pixelAspect = ${value};`)];
  },
  'PlaceholderItem Set frameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.frameRate = ${value};`)];
  },
  'PlaceholderItem Set frameDuration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.frameDuration = ${value};`)];
  },
  'PlaceholderItem Set duration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.duration = ${value};`)];
  },
  'PlaceholderItem Set useProxy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.useProxy = ${value};`)];
  },
  'PlaceholderItem Set time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.time = ${value};`)];
  },
  'PlaceholderItem Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'PlaceholderItem Set comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.comment = ${value};`)];
  },
  'PlaceholderItem Set parentFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.parentFolder = ${value};`)];
  },
  'PlaceholderItem Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'PlaceholderItem Set label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.label = ${value};`)];
  },
  'PlaceholderItem openInViewer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.openInViewer()`)];
  },
  'PlaceholderItem replace': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    return [ir.raw(`${target}.replace(${arg0});`)];
  },
  'PlaceholderItem replaceWithPlaceholder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg2 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'frameRate', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'duration', type: 'number' });
    return [ir.raw(`${target}.replaceWithPlaceholder(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4});`)];
  },
  'PlaceholderItem replaceWithSequence': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'forceAlphabetical', type: 'boolean' });
    return [ir.raw(`${target}.replaceWithSequence(${arg0}, ${arg1});`)];
  },
  'PlaceholderItem replaceWithSolid': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'color', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'pixelAspect', type: 'number' });
    return [ir.raw(`${target}.replaceWithSolid(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4});`)];
  },
  'PlaceholderItem setProxy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    return [ir.raw(`${target}.setProxy(${arg0});`)];
  },
  'PlaceholderItem setProxyWithSequence': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'forceAlphabetical', type: 'boolean' });
    return [ir.raw(`${target}.setProxyWithSequence(${arg0}, ${arg1});`)];
  },
  'PlaceholderItem setProxyWithSolid': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'color', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'pixelAspect', type: 'number' });
    return [ir.raw(`${target}.setProxyWithSolid(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4});`)];
  },
  'PlaceholderItem setProxyWithPlaceholder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg2 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'frameRate', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'duration', type: 'number' });
    return [ir.raw(`${target}.setProxyWithPlaceholder(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4});`)];
  },
  'PlaceholderItem setProxyToNone': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    
    return [ir.raw(`${target}.setProxyToNone();`)];
  },
  'PlaceholderItem addGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'orientationType', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'position', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addGuide(${arg0}, ${arg1})`)];
  },
  'PlaceholderItem removeGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'guideIndex', type: 'number' });
    return [ir.raw(`${target}.removeGuide(${arg0});`)];
  },
  'PlaceholderItem setGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    const arg0 = ctx.resolveInput(node, { id: 'position', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'guideIndex', type: 'number' });
    return [ir.raw(`${target}.setGuide(${arg0}, ${arg1});`)];
  },
  'PlaceholderItem remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'FootageSource Set hasAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.hasAlpha = ${value};`)];
  },
  'FootageSource Set alphaMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.alphaMode = ${value};`)];
  },
  'FootageSource Set premulColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.premulColor = ${value};`)];
  },
  'FootageSource Set invertAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.invertAlpha = ${value};`)];
  },
  'FootageSource Set fieldSeparationType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.fieldSeparationType = ${value};`)];
  },
  'FootageSource Set highQualityFieldSeparation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.highQualityFieldSeparation = ${value};`)];
  },
  'FootageSource Set removePulldown': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.removePulldown = ${value};`)];
  },
  'FootageSource Set loop': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.loop = ${value};`)];
  },
  'FootageSource Set nativeFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.nativeFrameRate = ${value};`)];
  },
  'FootageSource Set conformFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.conformFrameRate = ${value};`)];
  },
  'FootageSource guessAlphaMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    
    return [ir.raw(`${target}.guessAlphaMode();`)];
  },
  'FootageSource guessPulldown': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    const arg0 = ctx.resolveInput(node, { id: 'method', type: 'expr' });
    return [ir.raw(`${target}.guessPulldown(${arg0});`)];
  },
  'ImportOptions Set importAs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'importoptions' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.importAs = ${value};`)];
  },
  'ImportOptions Set sequence': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'importoptions' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.sequence = ${value};`)];
  },
  'ImportOptions Set forceAlphabetical': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'importoptions' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.forceAlphabetical = ${value};`)];
  },
  'ImportOptions Set file': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'importoptions' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.file = ${value};`)];
  },
  'ImportOptions canImportAs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'importoptions' });
    const arg0 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.canImportAs(${arg0})`)];
  },
  'Item Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'Item Set comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.comment = ${value};`)];
  },
  'Item Set parentFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.parentFolder = ${value};`)];
  },
  'Item Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'Item Set label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.label = ${value};`)];
  },
  'Item addGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    const arg0 = ctx.resolveInput(node, { id: 'orientationType', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'position', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addGuide(${arg0}, ${arg1})`)];
  },
  'Item removeGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    const arg0 = ctx.resolveInput(node, { id: 'guideIndex', type: 'number' });
    return [ir.raw(`${target}.removeGuide(${arg0});`)];
  },
  'Item setGuide': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    const arg0 = ctx.resolveInput(node, { id: 'position', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'guideIndex', type: 'number' });
    return [ir.raw(`${target}.setGuide(${arg0}, ${arg1});`)];
  },
  'Item remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'ItemCollection addComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'itemcollection' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg2 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'pixelAspect', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'duration', type: 'number' });
    const arg5 = ctx.resolveInput(node, { id: 'frameRate', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addComp(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4}, ${arg5})`)];
  },
  'ItemCollection addFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'itemcollection' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addFolder(${arg0})`)];
  },
  'KeyframeEase Set speed': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'keyframeease' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.speed = ${value};`)];
  },
  'KeyframeEase Set influence': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'keyframeease' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.influence = ${value};`)];
  },
  'Layer Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'Layer Set parent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.parent = ${value};`)];
  },
  'Layer Set startTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.startTime = ${value};`)];
  },
  'Layer Set stretch': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.stretch = ${value};`)];
  },
  'Layer Set inPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.inPoint = ${value};`)];
  },
  'Layer Set outPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.outPoint = ${value};`)];
  },
  'Layer Set enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.enabled = ${value};`)];
  },
  'Layer Set solo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.solo = ${value};`)];
  },
  'Layer Set shy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.shy = ${value};`)];
  },
  'Layer Set locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.locked = ${value};`)];
  },
  'Layer Set comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.comment = ${value};`)];
  },
  'Layer Set label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.label = ${value};`)];
  },
  'Layer Set autoOrient': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.autoOrient = ${value};`)];
  },
  'Layer Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'Layer moveToBeginning': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.moveToBeginning();`)];
  },
  'Layer moveToEnd': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.moveToEnd();`)];
  },
  'Layer moveAfter': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'layer', type: 'expr' });
    return [ir.raw(`${target}.moveAfter(${arg0});`)];
  },
  'Layer moveBefore': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'layer', type: 'expr' });
    return [ir.raw(`${target}.moveBefore(${arg0});`)];
  },
  'Layer duplicate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.duplicate()`)];
  },
  'Layer copyToComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'intoComp', type: 'expr' });
    return [ir.raw(`${target}.copyToComp(${arg0});`)];
  },
  'Layer activeAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.activeAtTime(${arg0})`)];
  },
  'Layer setParentWithJump': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newParent', type: 'expr' });
    return [ir.raw(`${target}.setParentWithJump(${arg0});`)];
  },
  'Layer applyPreset': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'presetName', type: 'expr' });
    return [ir.raw(`${target}.applyPreset(${arg0});`)];
  },
  'Layer canAddProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.canAddProperty(${arg0})`)];
  },
  'Layer addProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addProperty(${arg0})`)];
  },
  'Layer propertyGroup': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'countUp', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.propertyGroup(${arg0})`)];
  },
  'Layer remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'Layer moveTo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newIndex', type: 'number' });
    return [ir.raw(`${target}.moveTo(${arg0});`)];
  },
  'Layer property (index)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'Layer property (name)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'LayerCollection add': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'layercollection' });
    const arg0 = ctx.resolveInput(node, { id: 'item', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'duration', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.add(${arg0}, ${arg1})`)];
  },
  'LayerCollection addNull': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'layercollection' });
    const arg0 = ctx.resolveInput(node, { id: 'duration', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addNull(${arg0})`)];
  },
  'LayerCollection addSolid': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'layercollection' });
    const arg0 = ctx.resolveInput(node, { id: 'color', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'pixelAspect', type: 'number' });
    const arg5 = ctx.resolveInput(node, { id: 'duration', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addSolid(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4}, ${arg5})`)];
  },
  'LayerCollection addBoxText': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'layercollection' });
    const arg0 = ctx.resolveInput(node, { id: 'size', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'sourceText', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addBoxText(${arg0}, ${arg1})`)];
  },
  'LayerCollection addText': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'layercollection' });
    const arg0 = ctx.resolveInput(node, { id: 'sourceText', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addText(${arg0})`)];
  },
  'LayerCollection addCamera': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'layercollection' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'centerPoint', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addCamera(${arg0}, ${arg1})`)];
  },
  'LayerCollection addLight': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'layercollection' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'centerPoint', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addLight(${arg0}, ${arg1})`)];
  },
  'LayerCollection addShape': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'layercollection' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addShape()`)];
  },
  'LayerCollection byName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'layercollection' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.byName(${arg0})`)];
  },
  'LayerCollection precompose': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'layercollection' });
    const arg0 = ctx.resolveInput(node, { id: 'layerIndicies', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'moveAllAttributes', type: 'boolean' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.precompose(${arg0}, ${arg1}, ${arg2})`)];
  },
  'LightLayer Set lightType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.lightType = ${value};`)];
  },
  'LightLayer Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'LightLayer Set parent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.parent = ${value};`)];
  },
  'LightLayer Set startTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.startTime = ${value};`)];
  },
  'LightLayer Set stretch': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.stretch = ${value};`)];
  },
  'LightLayer Set inPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.inPoint = ${value};`)];
  },
  'LightLayer Set outPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.outPoint = ${value};`)];
  },
  'LightLayer Set enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.enabled = ${value};`)];
  },
  'LightLayer Set solo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.solo = ${value};`)];
  },
  'LightLayer Set shy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.shy = ${value};`)];
  },
  'LightLayer Set locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.locked = ${value};`)];
  },
  'LightLayer Set comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.comment = ${value};`)];
  },
  'LightLayer Set label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.label = ${value};`)];
  },
  'LightLayer Set autoOrient': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.autoOrient = ${value};`)];
  },
  'LightLayer Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'LightLayer moveToBeginning': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.moveToBeginning();`)];
  },
  'LightLayer moveToEnd': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.moveToEnd();`)];
  },
  'LightLayer moveAfter': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'layer', type: 'expr' });
    return [ir.raw(`${target}.moveAfter(${arg0});`)];
  },
  'LightLayer moveBefore': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'layer', type: 'expr' });
    return [ir.raw(`${target}.moveBefore(${arg0});`)];
  },
  'LightLayer duplicate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.duplicate()`)];
  },
  'LightLayer copyToComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'intoComp', type: 'expr' });
    return [ir.raw(`${target}.copyToComp(${arg0});`)];
  },
  'LightLayer activeAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.activeAtTime(${arg0})`)];
  },
  'LightLayer setParentWithJump': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newParent', type: 'expr' });
    return [ir.raw(`${target}.setParentWithJump(${arg0});`)];
  },
  'LightLayer applyPreset': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'presetName', type: 'expr' });
    return [ir.raw(`${target}.applyPreset(${arg0});`)];
  },
  'LightLayer canAddProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.canAddProperty(${arg0})`)];
  },
  'LightLayer addProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addProperty(${arg0})`)];
  },
  'LightLayer propertyGroup': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'countUp', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.propertyGroup(${arg0})`)];
  },
  'LightLayer remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'LightLayer moveTo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newIndex', type: 'number' });
    return [ir.raw(`${target}.moveTo(${arg0});`)];
  },
  'LightLayer property (index)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'LightLayer property (name)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'MarkerValue Set comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.comment = ${value};`)];
  },
  'MarkerValue Set chapter': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.chapter = ${value};`)];
  },
  'MarkerValue Set cuePointName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.cuePointName = ${value};`)];
  },
  'MarkerValue Set duration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.duration = ${value};`)];
  },
  'MarkerValue Set eventCuePoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.eventCuePoint = ${value};`)];
  },
  'MarkerValue Set url': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.url = ${value};`)];
  },
  'MarkerValue Set frameTarget': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.frameTarget = ${value};`)];
  },
  'MarkerValue Set label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.label = ${value};`)];
  },
  'MarkerValue Set protectedRegion': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.protectedRegion = ${value};`)];
  },
  'MarkerValue getParameters': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.getParameters()`)];
  },
  'MarkerValue setParameters': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    const arg0 = ctx.resolveInput(node, { id: 'keyValuePairs', type: 'expr' });
    return [ir.raw(`${target}.setParameters(${arg0});`)];
  },
  'MaskPropertyGroup Set maskMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.maskMode = ${value};`)];
  },
  'MaskPropertyGroup Set inverted': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.inverted = ${value};`)];
  },
  'MaskPropertyGroup Set rotoBezier': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.rotoBezier = ${value};`)];
  },
  'MaskPropertyGroup Set maskMotionBlur': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.maskMotionBlur = ${value};`)];
  },
  'MaskPropertyGroup Set locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.locked = ${value};`)];
  },
  'MaskPropertyGroup Set color': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.color = ${value};`)];
  },
  'MaskPropertyGroup Set maskShape': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.maskShape = ${value};`)];
  },
  'MaskPropertyGroup Set maskPath': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.maskPath = ${value};`)];
  },
  'MaskPropertyGroup Set maskFeather': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.maskFeather = ${value};`)];
  },
  'MaskPropertyGroup Set maskFeatherFalloff': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.maskFeatherFalloff = ${value};`)];
  },
  'MaskPropertyGroup Set maskOpacity': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.maskOpacity = ${value};`)];
  },
  'MaskPropertyGroup Set maskExpansion': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.maskExpansion = ${value};`)];
  },
  'MaskPropertyGroup Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'MaskPropertyGroup Set enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.enabled = ${value};`)];
  },
  'MaskPropertyGroup Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'MaskPropertyGroup canAddProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.canAddProperty(${arg0})`)];
  },
  'MaskPropertyGroup addProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addProperty(${arg0})`)];
  },
  'MaskPropertyGroup propertyGroup': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const arg0 = ctx.resolveInput(node, { id: 'countUp', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.propertyGroup(${arg0})`)];
  },
  'MaskPropertyGroup remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'MaskPropertyGroup moveTo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const arg0 = ctx.resolveInput(node, { id: 'newIndex', type: 'number' });
    return [ir.raw(`${target}.moveTo(${arg0});`)];
  },
  'MaskPropertyGroup duplicate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.duplicate()`)];
  },
  'MaskPropertyGroup property (index)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'MaskPropertyGroup property (name)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'OutputModule Set file': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.file = ${value};`)];
  },
  'OutputModule Set postRenderAction': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.postRenderAction = ${value};`)];
  },
  'OutputModule Set includeSourceXMP': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.includeSourceXMP = ${value};`)];
  },
  'OutputModule remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'OutputModule saveAsTemplate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    return [ir.raw(`${target}.saveAsTemplate(${arg0});`)];
  },
  'OutputModule applyTemplate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    const arg0 = ctx.resolveInput(node, { id: 'templateName', type: 'text' });
    return [ir.raw(`${target}.applyTemplate(${arg0});`)];
  },
  'OutputModule getSetting': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    const arg0 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.getSetting(${arg0})`)];
  },
  'OutputModule getSettings': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    const arg0 = ctx.resolveInput(node, { id: 'format', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.getSettings(${arg0})`)];
  },
  'OutputModule setSetting': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    const arg0 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.setSetting(${arg0}, ${arg1});`)];
  },
  'OutputModule setSettings': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    const arg0 = ctx.resolveInput(node, { id: 'settings', type: 'expr' });
    return [ir.raw(`${target}.setSettings(${arg0});`)];
  },
  'PlaceholderSource Set hasAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.hasAlpha = ${value};`)];
  },
  'PlaceholderSource Set alphaMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.alphaMode = ${value};`)];
  },
  'PlaceholderSource Set premulColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.premulColor = ${value};`)];
  },
  'PlaceholderSource Set invertAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.invertAlpha = ${value};`)];
  },
  'PlaceholderSource Set fieldSeparationType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.fieldSeparationType = ${value};`)];
  },
  'PlaceholderSource Set highQualityFieldSeparation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.highQualityFieldSeparation = ${value};`)];
  },
  'PlaceholderSource Set removePulldown': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.removePulldown = ${value};`)];
  },
  'PlaceholderSource Set loop': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.loop = ${value};`)];
  },
  'PlaceholderSource Set nativeFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.nativeFrameRate = ${value};`)];
  },
  'PlaceholderSource Set conformFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.conformFrameRate = ${value};`)];
  },
  'PlaceholderSource guessAlphaMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    
    return [ir.raw(`${target}.guessAlphaMode();`)];
  },
  'PlaceholderSource guessPulldown': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    const arg0 = ctx.resolveInput(node, { id: 'method', type: 'expr' });
    return [ir.raw(`${target}.guessPulldown(${arg0});`)];
  },
  'Project Set bitsPerChannel': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.bitsPerChannel = ${value};`)];
  },
  'Project Set transparencyGridThumbnails': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.transparencyGridThumbnails = ${value};`)];
  },
  'Project Set displayStartFrame': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.displayStartFrame = ${value};`)];
  },
  'Project Set gpuAccelType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.gpuAccelType = ${value};`)];
  },
  'Project Set linearBlending': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.linearBlending = ${value};`)];
  },
  'Project Set xmpPacket': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.xmpPacket = ${value};`)];
  },
  'Project Set framesCountType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.framesCountType = ${value};`)];
  },
  'Project Set feetFramesFilmType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.feetFramesFilmType = ${value};`)];
  },
  'Project Set framesUseFeetFrames': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.framesUseFeetFrames = ${value};`)];
  },
  'Project Set footageTimecodeDisplayStartType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.footageTimecodeDisplayStartType = ${value};`)];
  },
  'Project Set timeDisplayType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.timeDisplayType = ${value};`)];
  },
  'Project Set toolType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.toolType = ${value};`)];
  },
  'Project Set workingGamma': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.workingGamma = ${value};`)];
  },
  'Project Set workingSpace': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.workingSpace = ${value};`)];
  },
  'Project Set linearizeWorkingSpace': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.linearizeWorkingSpace = ${value};`)];
  },
  'Project Set compensateForSceneReferredProfiles': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.compensateForSceneReferredProfiles = ${value};`)];
  },
  'Project Set expressionEngine': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.expressionEngine = ${value};`)];
  },
  'Project item': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.item(${arg0})`)];
  },
  'Project itemByID': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'id', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.itemByID(${arg0})`)];
  },
  'Project consolidateFootage': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.consolidateFootage()`)];
  },
  'Project removeUnusedFootage': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.removeUnusedFootage()`)];
  },
  'Project reduceProject': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'array_of_items', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.reduceProject(${arg0})`)];
  },
  'Project close': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'closeOptions', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.close(${arg0})`)];
  },
  'Project save': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'file', type: 'expr' });
    return [ir.raw(`${target}.save(${arg0});`)];
  },
  'Project saveWithDialog': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.saveWithDialog()`)];
  },
  'Project importPlaceholder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'width', type: 'number' });
    const arg2 = ctx.resolveInput(node, { id: 'height', type: 'number' });
    const arg3 = ctx.resolveInput(node, { id: 'frameRate', type: 'number' });
    const arg4 = ctx.resolveInput(node, { id: 'duration', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.importPlaceholder(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4})`)];
  },
  'Project importFile': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'importOptions', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.importFile(${arg0})`)];
  },
  'Project importFileWithDialog': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.importFileWithDialog()`)];
  },
  'Project showWindow': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'doShow', type: 'boolean' });
    return [ir.raw(`${target}.showWindow(${arg0});`)];
  },
  'Project autoFixExpressions': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'oldText', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'newText', type: 'text' });
    return [ir.raw(`${target}.autoFixExpressions(${arg0}, ${arg1});`)];
  },
  'Project newTeamProject': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'teamProjectName', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'description', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.newTeamProject(${arg0}, ${arg1})`)];
  },
  'Project openTeamProject': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'teamProjectName', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.openTeamProject(${arg0})`)];
  },
  'Project shareTeamProject': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'comment', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.shareTeamProject(${arg0})`)];
  },
  'Project syncTeamProject': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.syncTeamProject()`)];
  },
  'Project closeTeamProject': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.closeTeamProject()`)];
  },
  'Project convertTeamProjectToProject': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'project_file', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.convertTeamProjectToProject(${arg0})`)];
  },
  'Project listTeamProjects': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.listTeamProjects()`)];
  },
  'Project isTeamProjectOpen': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'teamProjectName', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.isTeamProjectOpen(${arg0})`)];
  },
  'Project isAnyTeamProjectOpen': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.isAnyTeamProjectOpen()`)];
  },
  'Project isTeamProjectEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.isTeamProjectEnabled()`)];
  },
  'Project isLoggedInToTeamProject': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.isLoggedInToTeamProject()`)];
  },
  'Project isSyncCommandEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.isSyncCommandEnabled()`)];
  },
  'Project isShareCommandEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.isShareCommandEnabled()`)];
  },
  'Project isResolveCommandEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.isResolveCommandEnabled()`)];
  },
  'Project resolveConflict': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'ResolveType', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.resolveConflict(${arg0})`)];
  },
  'Project listColorProfiles': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.listColorProfiles()`)];
  },
  'Project setDefaultImportFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    const arg0 = ctx.resolveInput(node, { id: 'folder', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.setDefaultImportFolder(${arg0})`)];
  },
  'Property Set expression': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.expression = ${value};`)];
  },
  'Property Set expressionEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.expressionEnabled = ${value};`)];
  },
  'Property Set dimensionsSeparated': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.dimensionsSeparated = ${value};`)];
  },
  'Property Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'Property Set enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.enabled = ${value};`)];
  },
  'Property Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'Property valueAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'preExpression', type: 'boolean' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.valueAtTime(${arg0}, ${arg1})`)];
  },
  'Property setValue': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'newValue', type: 'expr' });
    return [ir.raw(`${target}.setValue(${arg0});`)];
  },
  'Property setValueAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'newValue', type: 'expr' });
    return [ir.raw(`${target}.setValueAtTime(${arg0}, ${arg1});`)];
  },
  'Property setValuesAtTimes': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'times', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'newValues', type: 'expr' });
    return [ir.raw(`${target}.setValuesAtTimes(${arg0}, ${arg1});`)];
  },
  'Property setValueAtKey': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'newValue', type: 'expr' });
    return [ir.raw(`${target}.setValueAtKey(${arg0}, ${arg1});`)];
  },
  'Property nearestKeyIndex': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.nearestKeyIndex(${arg0})`)];
  },
  'Property keyTime (keyIndex)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keyTime(${arg0})`)];
  },
  'Property keyTime (markerComment)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'markerComment', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keyTime(${arg0})`)];
  },
  'Property keyValue (keyIndex)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keyValue(${arg0})`)];
  },
  'Property keyValue (markerComment)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'markerComment', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keyValue(${arg0})`)];
  },
  'Property addKey': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addKey(${arg0})`)];
  },
  'Property removeKey': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    return [ir.raw(`${target}.removeKey(${arg0});`)];
  },
  'Property isInterpolationTypeValid': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.isInterpolationTypeValid(${arg0})`)];
  },
  'Property setInterpolationTypeAtKey': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'inType', type: 'expr' });
    const arg2 = ctx.resolveInput(node, { id: 'outType', type: 'expr' });
    return [ir.raw(`${target}.setInterpolationTypeAtKey(${arg0}, ${arg1}, ${arg2});`)];
  },
  'Property keyInInterpolationType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keyInInterpolationType(${arg0})`)];
  },
  'Property keyOutInterpolationType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keyOutInterpolationType(${arg0})`)];
  },
  'Property setSpatialTangentsAtKey (keyIndex, inTangent, outTangent)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'inTangent', type: 'expr' });
    const arg2 = ctx.resolveInput(node, { id: 'outTangent', type: 'expr' });
    return [ir.raw(`${target}.setSpatialTangentsAtKey(${arg0}, ${arg1}, ${arg2});`)];
  },
  'Property setSpatialTangentsAtKey (keyIndex, inTangent, outTangent)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'inTangent', type: 'expr' });
    const arg2 = ctx.resolveInput(node, { id: 'outTangent', type: 'expr' });
    return [ir.raw(`${target}.setSpatialTangentsAtKey(${arg0}, ${arg1}, ${arg2});`)];
  },
  'Property keyInSpatialTangent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keyInSpatialTangent(${arg0})`)];
  },
  'Property keyOutSpatialTangent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keyOutSpatialTangent(${arg0})`)];
  },
  'Property setTemporalEaseAtKey (keyIndex, inTemporalEase, outTemporalEase)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'inTemporalEase', type: 'expr' });
    const arg2 = ctx.resolveInput(node, { id: 'outTemporalEase', type: 'expr' });
    return [ir.raw(`${target}.setTemporalEaseAtKey(${arg0}, ${arg1}, ${arg2});`)];
  },
  'Property setTemporalEaseAtKey (keyIndex, inTemporalEase, outTemporalEase)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'inTemporalEase', type: 'expr' });
    const arg2 = ctx.resolveInput(node, { id: 'outTemporalEase', type: 'expr' });
    return [ir.raw(`${target}.setTemporalEaseAtKey(${arg0}, ${arg1}, ${arg2});`)];
  },
  'Property setTemporalEaseAtKey (keyIndex, inTemporalEase, outTemporalEase)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'inTemporalEase', type: 'expr' });
    const arg2 = ctx.resolveInput(node, { id: 'outTemporalEase', type: 'expr' });
    return [ir.raw(`${target}.setTemporalEaseAtKey(${arg0}, ${arg1}, ${arg2});`)];
  },
  'Property keyInTemporalEase': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keyInTemporalEase(${arg0})`)];
  },
  'Property keyOutTemporalEase': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keyOutTemporalEase(${arg0})`)];
  },
  'Property setTemporalContinuousAtKey': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'newVal', type: 'boolean' });
    return [ir.raw(`${target}.setTemporalContinuousAtKey(${arg0}, ${arg1});`)];
  },
  'Property keyTemporalContinuous': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keyTemporalContinuous(${arg0})`)];
  },
  'Property setTemporalAutoBezierAtKey': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'newVal', type: 'boolean' });
    return [ir.raw(`${target}.setTemporalAutoBezierAtKey(${arg0}, ${arg1});`)];
  },
  'Property keyTemporalAutoBezier': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keyTemporalAutoBezier(${arg0})`)];
  },
  'Property setSpatialContinuousAtKey': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'newVal', type: 'boolean' });
    return [ir.raw(`${target}.setSpatialContinuousAtKey(${arg0}, ${arg1});`)];
  },
  'Property keySpatialContinuous': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keySpatialContinuous(${arg0})`)];
  },
  'Property setSpatialAutoBezierAtKey': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'newVal', type: 'boolean' });
    return [ir.raw(`${target}.setSpatialAutoBezierAtKey(${arg0}, ${arg1});`)];
  },
  'Property keySpatialAutoBezier': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keySpatialAutoBezier(${arg0})`)];
  },
  'Property setRovingAtKey': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'newVal', type: 'boolean' });
    return [ir.raw(`${target}.setRovingAtKey(${arg0}, ${arg1});`)];
  },
  'Property keyRoving': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keyRoving(${arg0})`)];
  },
  'Property setSelectedAtKey': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'onOff', type: 'boolean' });
    return [ir.raw(`${target}.setSelectedAtKey(${arg0}, ${arg1});`)];
  },
  'Property keySelected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'keyIndex', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.keySelected(${arg0})`)];
  },
  'Property getSeparationFollower': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'dim', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.getSeparationFollower(${arg0})`)];
  },
  'Property addToMotionGraphicsTemplate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'comp', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addToMotionGraphicsTemplate(${arg0})`)];
  },
  'Property addToMotionGraphicsTemplateAs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'comp', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addToMotionGraphicsTemplateAs(${arg0}, ${arg1})`)];
  },
  'Property canAddToMotionGraphicsTemplate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'comp', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.canAddToMotionGraphicsTemplate(${arg0})`)];
  },
  'Property setPropertyParameters': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'items', type: 'expr' });
    return [ir.raw(`${target}.setPropertyParameters(${arg0});`)];
  },
  'Property setAlternateSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'newSource', type: 'expr' });
    return [ir.raw(`${target}.setAlternateSource(${arg0});`)];
  },
  'Property propertyGroup': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'countUp', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.propertyGroup(${arg0})`)];
  },
  'Property remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'Property moveTo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'newIndex', type: 'number' });
    return [ir.raw(`${target}.moveTo(${arg0});`)];
  },
  'Property duplicate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.duplicate()`)];
  },
  'Property property (index)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'Property property (name)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'PropertyBase Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'PropertyBase Set enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.enabled = ${value};`)];
  },
  'PropertyBase Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'PropertyBase propertyGroup': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    const arg0 = ctx.resolveInput(node, { id: 'countUp', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.propertyGroup(${arg0})`)];
  },
  'PropertyBase remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'PropertyBase moveTo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    const arg0 = ctx.resolveInput(node, { id: 'newIndex', type: 'number' });
    return [ir.raw(`${target}.moveTo(${arg0});`)];
  },
  'PropertyBase duplicate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.duplicate()`)];
  },
  'PropertyBase property (index)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'PropertyBase property (name)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'PropertyGroup Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'PropertyGroup Set enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.enabled = ${value};`)];
  },
  'PropertyGroup Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'PropertyGroup canAddProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.canAddProperty(${arg0})`)];
  },
  'PropertyGroup addProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addProperty(${arg0})`)];
  },
  'PropertyGroup propertyGroup': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    const arg0 = ctx.resolveInput(node, { id: 'countUp', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.propertyGroup(${arg0})`)];
  },
  'PropertyGroup remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'PropertyGroup moveTo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    const arg0 = ctx.resolveInput(node, { id: 'newIndex', type: 'number' });
    return [ir.raw(`${target}.moveTo(${arg0});`)];
  },
  'PropertyGroup duplicate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.duplicate()`)];
  },
  'PropertyGroup property (index)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'PropertyGroup property (name)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'RenderQueue showWindow': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueue' });
    const arg0 = ctx.resolveInput(node, { id: 'doShow', type: 'boolean' });
    return [ir.raw(`${target}.showWindow(${arg0});`)];
  },
  'RenderQueue render': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueue' });
    
    return [ir.raw(`${target}.render();`)];
  },
  'RenderQueue pauseRendering': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueue' });
    const arg0 = ctx.resolveInput(node, { id: 'pause', type: 'boolean' });
    return [ir.raw(`${target}.pauseRendering(${arg0});`)];
  },
  'RenderQueue queueInAME': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueue' });
    const arg0 = ctx.resolveInput(node, { id: 'render_immediately_in_AME', type: 'boolean' });
    return [ir.raw(`${target}.queueInAME(${arg0});`)];
  },
  'RenderQueue stopRendering': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueue' });
    
    return [ir.raw(`${target}.stopRendering();`)];
  },
  'RenderQueue item': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueue' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.item(${arg0})`)];
  },
  'RenderQueueItem Set render': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.render = ${value};`)];
  },
  'RenderQueueItem Set timeSpanStart': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.timeSpanStart = ${value};`)];
  },
  'RenderQueueItem Set timeSpanDuration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.timeSpanDuration = ${value};`)];
  },
  'RenderQueueItem Set skipFrames': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.skipFrames = ${value};`)];
  },
  'RenderQueueItem Set onStatus': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.onStatus = ${value};`)];
  },
  'RenderQueueItem Set logType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.logType = ${value};`)];
  },
  'RenderQueueItem getSetting': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    const arg0 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.getSetting(${arg0})`)];
  },
  'RenderQueueItem getSettings': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    const arg0 = ctx.resolveInput(node, { id: 'format', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.getSettings(${arg0})`)];
  },
  'RenderQueueItem setSetting': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    const arg0 = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.setSetting(${arg0}, ${arg1});`)];
  },
  'RenderQueueItem setSettings': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    const arg0 = ctx.resolveInput(node, { id: 'settings', type: 'expr' });
    return [ir.raw(`${target}.setSettings(${arg0});`)];
  },
  'RenderQueueItem outputModule': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.outputModule(${arg0})`)];
  },
  'RenderQueueItem remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'RenderQueueItem saveAsTemplate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    return [ir.raw(`${target}.saveAsTemplate(${arg0});`)];
  },
  'RenderQueueItem applyTemplate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    const arg0 = ctx.resolveInput(node, { id: 'templateName', type: 'text' });
    return [ir.raw(`${target}.applyTemplate(${arg0});`)];
  },
  'RenderQueueItem duplicate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.duplicate()`)];
  },
  'RQItemCollection add': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'rqitemcollection' });
    const arg0 = ctx.resolveInput(node, { id: 'comp', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.add(${arg0})`)];
  },
  'Settings saveSetting': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'settings' });
    const arg0 = ctx.resolveInput(node, { id: 'sectionName', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'keyName', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'value', type: 'text' });
    const arg3 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    return [ir.raw(`${target}.saveSetting(${arg0}, ${arg1}, ${arg2}, ${arg3});`)];
  },
  'Settings getSetting': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'settings' });
    const arg0 = ctx.resolveInput(node, { id: 'sectionName', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'keyName', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.getSetting(${arg0}, ${arg1}, ${arg2})`)];
  },
  'Settings haveSetting': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'settings' });
    const arg0 = ctx.resolveInput(node, { id: 'sectionName', type: 'text' });
    const arg1 = ctx.resolveInput(node, { id: 'keyName', type: 'text' });
    const arg2 = ctx.resolveInput(node, { id: 'type', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.haveSetting(${arg0}, ${arg1}, ${arg2})`)];
  },
  'Shape Set closed': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.closed = ${value};`)];
  },
  'Shape Set vertices': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.vertices = ${value};`)];
  },
  'Shape Set inTangents': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.inTangents = ${value};`)];
  },
  'Shape Set outTangents': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.outTangents = ${value};`)];
  },
  'Shape Set featherSegLocs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.featherSegLocs = ${value};`)];
  },
  'Shape Set featherRelSegLocs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.featherRelSegLocs = ${value};`)];
  },
  'Shape Set featherRadii': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.featherRadii = ${value};`)];
  },
  'Shape Set featherInterps': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.featherInterps = ${value};`)];
  },
  'Shape Set featherTensions': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.featherTensions = ${value};`)];
  },
  'Shape Set featherTypes': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.featherTypes = ${value};`)];
  },
  'Shape Set featherRelCornerAngles': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.featherRelCornerAngles = ${value};`)];
  },
  'ShapeLayer Set audioEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.audioEnabled = ${value};`)];
  },
  'ShapeLayer Set motionBlur': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.motionBlur = ${value};`)];
  },
  'ShapeLayer Set effectsActive': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.effectsActive = ${value};`)];
  },
  'ShapeLayer Set adjustmentLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.adjustmentLayer = ${value};`)];
  },
  'ShapeLayer Set environmentLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.environmentLayer = ${value};`)];
  },
  'ShapeLayer Set guideLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.guideLayer = ${value};`)];
  },
  'ShapeLayer Set threeDLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.threeDLayer = ${value};`)];
  },
  'ShapeLayer Set threeDPerChar': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.threeDPerChar = ${value};`)];
  },
  'ShapeLayer Set collapseTransformation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.collapseTransformation = ${value};`)];
  },
  'ShapeLayer Set frameBlendingType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.frameBlendingType = ${value};`)];
  },
  'ShapeLayer Set timeRemapEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.timeRemapEnabled = ${value};`)];
  },
  'ShapeLayer Set blendingMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.blendingMode = ${value};`)];
  },
  'ShapeLayer Set preserveTransparency': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.preserveTransparency = ${value};`)];
  },
  'ShapeLayer Set samplingQuality': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.samplingQuality = ${value};`)];
  },
  'ShapeLayer Set trackMatteType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.trackMatteType = ${value};`)];
  },
  'ShapeLayer Set quality': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.quality = ${value};`)];
  },
  'ShapeLayer Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'ShapeLayer Set parent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.parent = ${value};`)];
  },
  'ShapeLayer Set startTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.startTime = ${value};`)];
  },
  'ShapeLayer Set stretch': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.stretch = ${value};`)];
  },
  'ShapeLayer Set inPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.inPoint = ${value};`)];
  },
  'ShapeLayer Set outPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.outPoint = ${value};`)];
  },
  'ShapeLayer Set enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.enabled = ${value};`)];
  },
  'ShapeLayer Set solo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.solo = ${value};`)];
  },
  'ShapeLayer Set shy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.shy = ${value};`)];
  },
  'ShapeLayer Set locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.locked = ${value};`)];
  },
  'ShapeLayer Set comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.comment = ${value};`)];
  },
  'ShapeLayer Set label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.label = ${value};`)];
  },
  'ShapeLayer Set autoOrient': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.autoOrient = ${value};`)];
  },
  'ShapeLayer Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'ShapeLayer audioActiveAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.audioActiveAtTime(${arg0})`)];
  },
  'ShapeLayer calculateTransformFromPoints': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'pointTopLeft', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'pointTopRight', type: 'expr' });
    const arg2 = ctx.resolveInput(node, { id: 'pointBottomRight', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.calculateTransformFromPoints(${arg0}, ${arg1}, ${arg2})`)];
  },
  'ShapeLayer sourcePointToComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'point', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.sourcePointToComp(${arg0})`)];
  },
  'ShapeLayer compPointToSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'point', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.compPointToSource(${arg0})`)];
  },
  'ShapeLayer openInViewer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.openInViewer()`)];
  },
  'ShapeLayer replaceSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newSource', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'fixExpressions', type: 'boolean' });
    return [ir.raw(`${target}.replaceSource(${arg0}, ${arg1});`)];
  },
  'ShapeLayer sourceRectAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'timeT', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'extents', type: 'boolean' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.sourceRectAtTime(${arg0}, ${arg1})`)];
  },
  'ShapeLayer addToMotionGraphicsTemplate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'comp', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addToMotionGraphicsTemplate(${arg0})`)];
  },
  'ShapeLayer addToMotionGraphicsTemplateAs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'comp', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addToMotionGraphicsTemplateAs(${arg0}, ${arg1})`)];
  },
  'ShapeLayer canAddToMotionGraphicsTemplate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'comp', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.canAddToMotionGraphicsTemplate(${arg0})`)];
  },
  'ShapeLayer moveToBeginning': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.moveToBeginning();`)];
  },
  'ShapeLayer moveToEnd': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.moveToEnd();`)];
  },
  'ShapeLayer moveAfter': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'layer', type: 'expr' });
    return [ir.raw(`${target}.moveAfter(${arg0});`)];
  },
  'ShapeLayer moveBefore': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'layer', type: 'expr' });
    return [ir.raw(`${target}.moveBefore(${arg0});`)];
  },
  'ShapeLayer duplicate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.duplicate()`)];
  },
  'ShapeLayer copyToComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'intoComp', type: 'expr' });
    return [ir.raw(`${target}.copyToComp(${arg0});`)];
  },
  'ShapeLayer activeAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.activeAtTime(${arg0})`)];
  },
  'ShapeLayer setParentWithJump': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newParent', type: 'expr' });
    return [ir.raw(`${target}.setParentWithJump(${arg0});`)];
  },
  'ShapeLayer applyPreset': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'presetName', type: 'expr' });
    return [ir.raw(`${target}.applyPreset(${arg0});`)];
  },
  'ShapeLayer canAddProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.canAddProperty(${arg0})`)];
  },
  'ShapeLayer addProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addProperty(${arg0})`)];
  },
  'ShapeLayer propertyGroup': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'countUp', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.propertyGroup(${arg0})`)];
  },
  'ShapeLayer remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'ShapeLayer moveTo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newIndex', type: 'number' });
    return [ir.raw(`${target}.moveTo(${arg0});`)];
  },
  'ShapeLayer property (index)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'ShapeLayer property (name)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'SolidSource Set color': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.color = ${value};`)];
  },
  'SolidSource Set hasAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.hasAlpha = ${value};`)];
  },
  'SolidSource Set alphaMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.alphaMode = ${value};`)];
  },
  'SolidSource Set premulColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.premulColor = ${value};`)];
  },
  'SolidSource Set invertAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.invertAlpha = ${value};`)];
  },
  'SolidSource Set fieldSeparationType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.fieldSeparationType = ${value};`)];
  },
  'SolidSource Set highQualityFieldSeparation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.highQualityFieldSeparation = ${value};`)];
  },
  'SolidSource Set removePulldown': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.removePulldown = ${value};`)];
  },
  'SolidSource Set loop': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.loop = ${value};`)];
  },
  'SolidSource Set nativeFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.nativeFrameRate = ${value};`)];
  },
  'SolidSource Set conformFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.conformFrameRate = ${value};`)];
  },
  'SolidSource guessAlphaMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    
    return [ir.raw(`${target}.guessAlphaMode();`)];
  },
  'SolidSource guessPulldown': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    const arg0 = ctx.resolveInput(node, { id: 'method', type: 'expr' });
    return [ir.raw(`${target}.guessPulldown(${arg0});`)];
  },
  'System callSystem': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'system' });
    const arg0 = ctx.resolveInput(node, { id: 'cmdLineToExecute', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.callSystem(${arg0})`)];
  },
  'TextDocument Set text': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.text = ${value};`)];
  },
  'TextDocument Set applyFill': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.applyFill = ${value};`)];
  },
  'TextDocument Set applyStroke': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.applyStroke = ${value};`)];
  },
  'TextDocument Set fillColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.fillColor = ${value};`)];
  },
  'TextDocument Set font': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.font = ${value};`)];
  },
  'TextDocument Set fontSize': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.fontSize = ${value};`)];
  },
  'TextDocument Set justification': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.justification = ${value};`)];
  },
  'TextDocument Set leading': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.leading = ${value};`)];
  },
  'TextDocument Set strokeColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.strokeColor = ${value};`)];
  },
  'TextDocument Set strokeOverFill': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.strokeOverFill = ${value};`)];
  },
  'TextDocument Set strokeWidth': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.strokeWidth = ${value};`)];
  },
  'TextDocument Set tracking': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.tracking = ${value};`)];
  },
  'TextDocument Set boxTextSize': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.boxTextSize = ${value};`)];
  },
  'TextDocument resetCharStyle': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    
    return [ir.raw(`${target}.resetCharStyle();`)];
  },
  'TextDocument resetParagraphStyle': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    
    return [ir.raw(`${target}.resetParagraphStyle();`)];
  },
  'TextLayer Set audioEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.audioEnabled = ${value};`)];
  },
  'TextLayer Set motionBlur': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.motionBlur = ${value};`)];
  },
  'TextLayer Set effectsActive': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.effectsActive = ${value};`)];
  },
  'TextLayer Set adjustmentLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.adjustmentLayer = ${value};`)];
  },
  'TextLayer Set environmentLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.environmentLayer = ${value};`)];
  },
  'TextLayer Set guideLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.guideLayer = ${value};`)];
  },
  'TextLayer Set threeDLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.threeDLayer = ${value};`)];
  },
  'TextLayer Set threeDPerChar': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.threeDPerChar = ${value};`)];
  },
  'TextLayer Set collapseTransformation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.collapseTransformation = ${value};`)];
  },
  'TextLayer Set frameBlendingType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.frameBlendingType = ${value};`)];
  },
  'TextLayer Set timeRemapEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.timeRemapEnabled = ${value};`)];
  },
  'TextLayer Set blendingMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.blendingMode = ${value};`)];
  },
  'TextLayer Set preserveTransparency': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.preserveTransparency = ${value};`)];
  },
  'TextLayer Set samplingQuality': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.samplingQuality = ${value};`)];
  },
  'TextLayer Set trackMatteType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.trackMatteType = ${value};`)];
  },
  'TextLayer Set quality': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.quality = ${value};`)];
  },
  'TextLayer Set name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.name = ${value};`)];
  },
  'TextLayer Set parent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.parent = ${value};`)];
  },
  'TextLayer Set startTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.startTime = ${value};`)];
  },
  'TextLayer Set stretch': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.stretch = ${value};`)];
  },
  'TextLayer Set inPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.inPoint = ${value};`)];
  },
  'TextLayer Set outPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.outPoint = ${value};`)];
  },
  'TextLayer Set enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.enabled = ${value};`)];
  },
  'TextLayer Set solo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.solo = ${value};`)];
  },
  'TextLayer Set shy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.shy = ${value};`)];
  },
  'TextLayer Set locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.locked = ${value};`)];
  },
  'TextLayer Set comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'text' });
    return [ir.raw(`${target}.comment = ${value};`)];
  },
  'TextLayer Set label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.label = ${value};`)];
  },
  'TextLayer Set autoOrient': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.autoOrient = ${value};`)];
  },
  'TextLayer Set selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.selected = ${value};`)];
  },
  'TextLayer audioActiveAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.audioActiveAtTime(${arg0})`)];
  },
  'TextLayer calculateTransformFromPoints': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'pointTopLeft', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'pointTopRight', type: 'expr' });
    const arg2 = ctx.resolveInput(node, { id: 'pointBottomRight', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.calculateTransformFromPoints(${arg0}, ${arg1}, ${arg2})`)];
  },
  'TextLayer sourcePointToComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'point', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.sourcePointToComp(${arg0})`)];
  },
  'TextLayer compPointToSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'point', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.compPointToSource(${arg0})`)];
  },
  'TextLayer openInViewer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.openInViewer()`)];
  },
  'TextLayer replaceSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newSource', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'fixExpressions', type: 'boolean' });
    return [ir.raw(`${target}.replaceSource(${arg0}, ${arg1});`)];
  },
  'TextLayer sourceRectAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'timeT', type: 'number' });
    const arg1 = ctx.resolveInput(node, { id: 'extents', type: 'boolean' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.sourceRectAtTime(${arg0}, ${arg1})`)];
  },
  'TextLayer addToMotionGraphicsTemplate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'comp', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addToMotionGraphicsTemplate(${arg0})`)];
  },
  'TextLayer addToMotionGraphicsTemplateAs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'comp', type: 'expr' });
    const arg1 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addToMotionGraphicsTemplateAs(${arg0}, ${arg1})`)];
  },
  'TextLayer canAddToMotionGraphicsTemplate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'comp', type: 'expr' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.canAddToMotionGraphicsTemplate(${arg0})`)];
  },
  'TextLayer moveToBeginning': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.moveToBeginning();`)];
  },
  'TextLayer moveToEnd': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.moveToEnd();`)];
  },
  'TextLayer moveAfter': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'layer', type: 'expr' });
    return [ir.raw(`${target}.moveAfter(${arg0});`)];
  },
  'TextLayer moveBefore': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'layer', type: 'expr' });
    return [ir.raw(`${target}.moveBefore(${arg0});`)];
  },
  'TextLayer duplicate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.duplicate()`)];
  },
  'TextLayer copyToComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'intoComp', type: 'expr' });
    return [ir.raw(`${target}.copyToComp(${arg0});`)];
  },
  'TextLayer activeAtTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.activeAtTime(${arg0})`)];
  },
  'TextLayer setParentWithJump': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newParent', type: 'expr' });
    return [ir.raw(`${target}.setParentWithJump(${arg0});`)];
  },
  'TextLayer applyPreset': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'presetName', type: 'expr' });
    return [ir.raw(`${target}.applyPreset(${arg0});`)];
  },
  'TextLayer canAddProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.canAddProperty(${arg0})`)];
  },
  'TextLayer addProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.addProperty(${arg0})`)];
  },
  'TextLayer propertyGroup': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'countUp', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.propertyGroup(${arg0})`)];
  },
  'TextLayer remove': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    
    return [ir.raw(`${target}.remove();`)];
  },
  'TextLayer moveTo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'newIndex', type: 'number' });
    return [ir.raw(`${target}.moveTo(${arg0});`)];
  },
  'TextLayer property (index)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'index', type: 'number' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'TextLayer property (name)': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    const arg0 = ctx.resolveInput(node, { id: 'name', type: 'text' });
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.property(${arg0})`)];
  },
  'View setActive': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'view' });
    
    return [ir.raw(`${target}.setActive();`)];
  },
  'Viewer Set activeViewIndex': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.activeViewIndex = ${value};`)];
  },
  'Viewer Set guidesLocked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.guidesLocked = ${value};`)];
  },
  'Viewer Set guidesSnap': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.guidesSnap = ${value};`)];
  },
  'Viewer Set guidesVisibility': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.guidesVisibility = ${value};`)];
  },
  'Viewer Set rulers': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.rulers = ${value};`)];
  },
  'Viewer Set maximized': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.maximized = ${value};`)];
  },
  'Viewer setActive': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${target}.setActive()`)];
  },
  'ViewOptions Set channels': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewoptions' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.channels = ${value};`)];
  },
  'ViewOptions Set checkerboards': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewoptions' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'boolean' });
    return [ir.raw(`${target}.checkerboards = ${value};`)];
  },
  'ViewOptions Set exposure': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewoptions' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.exposure = ${value};`)];
  },
  'ViewOptions Set fastPreview': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewoptions' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${target}.fastPreview = ${value};`)];
  },
  'ViewOptions Set zoom': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewoptions' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${target}.zoom = ${value};`)];
  }
};

export const AE_DATA_EMITTERS = {
  'Application Get project': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.project`;
  },
  'Application Get version': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.version`;
  },
  'Application Get buildName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.buildName`;
  },
  'Application Get buildNumber': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.buildNumber`;
  },
  'Application Get isWatchFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.isWatchFolder`;
  },
  'Application Get isRenderEngine': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.isRenderEngine`;
  },
  'Application Get language': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.language`;
  },
  'Application Get settings': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.settings`;
  },
  'Application Get isoLanguage': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.isoLanguage`;
  },
  'Application Get memoryInUse': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.memoryInUse`;
  },
  'Application Get preferences': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.preferences`;
  },
  'Application Get activeViewer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.activeViewer`;
  },
  'Application Get effects': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.effects`;
  },
  'Application Get availableGPUAccelTypes': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.availableGPUAccelTypes`;
  },
  'Application Get disableRendering': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.disableRendering`;
  },
  'Application Get onError': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.onError`;
  },
  'Application Get exitCode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.exitCode`;
  },
  'Application Get exitAfterLaunchAndEval': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.exitAfterLaunchAndEval`;
  },
  'Application Get saveProjectOnCrash': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app' });
    return `${target}.saveProjectOnCrash`;
  },
  'AVItem Get proxySource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.proxySource`;
  },
  'AVItem Get usedIn': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.usedIn`;
  },
  'AVItem Get hasVideo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.hasVideo`;
  },
  'AVItem Get hasAudio': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.hasAudio`;
  },
  'AVItem Get footageMissing': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.footageMissing`;
  },
  'AVItem Get isMediaReplacementCompatible': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.isMediaReplacementCompatible`;
  },
  'AVItem Get width': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.width`;
  },
  'AVItem Get height': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.height`;
  },
  'AVItem Get pixelAspect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.pixelAspect`;
  },
  'AVItem Get frameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.frameRate`;
  },
  'AVItem Get frameDuration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.frameDuration`;
  },
  'AVItem Get duration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.duration`;
  },
  'AVItem Get useProxy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.useProxy`;
  },
  'AVItem Get time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.time`;
  },
  'AVItem Get id': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.id`;
  },
  'AVItem Get typeName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.typeName`;
  },
  'AVItem Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.name`;
  },
  'AVItem Get comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.comment`;
  },
  'AVItem Get parentFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.parentFolder`;
  },
  'AVItem Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.selected`;
  },
  'AVItem Get label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'avitem' });
    return `${target}.label`;
  },
  'AVLayer Get source': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.source`;
  },
  'AVLayer Get isNameFromSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isNameFromSource`;
  },
  'AVLayer Get height': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.height`;
  },
  'AVLayer Get width': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.width`;
  },
  'AVLayer Get canSetCollapseTransformation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.canSetCollapseTransformation`;
  },
  'AVLayer Get frameBlending': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.frameBlending`;
  },
  'AVLayer Get canSetTimeRemapEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.canSetTimeRemapEnabled`;
  },
  'AVLayer Get hasAudio': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.hasAudio`;
  },
  'AVLayer Get audioActive': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.audioActive`;
  },
  'AVLayer Get isTrackMatte': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isTrackMatte`;
  },
  'AVLayer Get hasTrackMatte': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.hasTrackMatte`;
  },
  'AVLayer Get audioEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.audioEnabled`;
  },
  'AVLayer Get motionBlur': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.motionBlur`;
  },
  'AVLayer Get effectsActive': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.effectsActive`;
  },
  'AVLayer Get adjustmentLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.adjustmentLayer`;
  },
  'AVLayer Get environmentLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.environmentLayer`;
  },
  'AVLayer Get guideLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.guideLayer`;
  },
  'AVLayer Get threeDLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.threeDLayer`;
  },
  'AVLayer Get threeDPerChar': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.threeDPerChar`;
  },
  'AVLayer Get collapseTransformation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.collapseTransformation`;
  },
  'AVLayer Get frameBlendingType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.frameBlendingType`;
  },
  'AVLayer Get timeRemapEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.timeRemapEnabled`;
  },
  'AVLayer Get blendingMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.blendingMode`;
  },
  'AVLayer Get preserveTransparency': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.preserveTransparency`;
  },
  'AVLayer Get samplingQuality': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.samplingQuality`;
  },
  'AVLayer Get trackMatteType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.trackMatteType`;
  },
  'AVLayer Get quality': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.quality`;
  },
  'AVLayer Get timeRemap': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.timeRemap`;
  },
  'AVLayer Get mask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.mask`;
  },
  'AVLayer Get effect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.effect`;
  },
  'AVLayer Get layerStyle': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.layerStyle`;
  },
  'AVLayer Get geometryOption': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.geometryOption`;
  },
  'AVLayer Get materialOption': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.materialOption`;
  },
  'AVLayer Get audio': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.audio`;
  },
  'AVLayer Get index': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.index`;
  },
  'AVLayer Get time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.time`;
  },
  'AVLayer Get hasVideo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.hasVideo`;
  },
  'AVLayer Get active': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.active`;
  },
  'AVLayer Get nullLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.nullLayer`;
  },
  'AVLayer Get selectedProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.selectedProperties`;
  },
  'AVLayer Get containingComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.containingComp`;
  },
  'AVLayer Get isNameSet': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isNameSet`;
  },
  'AVLayer Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.name`;
  },
  'AVLayer Get parent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.parent`;
  },
  'AVLayer Get startTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.startTime`;
  },
  'AVLayer Get stretch': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.stretch`;
  },
  'AVLayer Get inPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.inPoint`;
  },
  'AVLayer Get outPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.outPoint`;
  },
  'AVLayer Get enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.enabled`;
  },
  'AVLayer Get solo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.solo`;
  },
  'AVLayer Get shy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.shy`;
  },
  'AVLayer Get locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.locked`;
  },
  'AVLayer Get comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.comment`;
  },
  'AVLayer Get label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.label`;
  },
  'AVLayer Get autoOrient': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.autoOrient`;
  },
  'AVLayer Get marker': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.marker`;
  },
  'AVLayer Get transform': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.transform`;
  },
  'AVLayer Get anchorPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.anchorPoint`;
  },
  'AVLayer Get position': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.position`;
  },
  'AVLayer Get xPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.xPosition`;
  },
  'AVLayer Get yPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.yPosition`;
  },
  'AVLayer Get zPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.zPosition`;
  },
  'AVLayer Get scale': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.scale`;
  },
  'AVLayer Get orientation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.orientation`;
  },
  'AVLayer Get rotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.rotation`;
  },
  'AVLayer Get xRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.xRotation`;
  },
  'AVLayer Get yRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.yRotation`;
  },
  'AVLayer Get zRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.zRotation`;
  },
  'AVLayer Get opacity': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.opacity`;
  },
  'AVLayer Get pointOfInterest': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.pointOfInterest`;
  },
  'AVLayer Get numProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.numProperties`;
  },
  'AVLayer Get matchName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.matchName`;
  },
  'AVLayer Get propertyIndex': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyIndex`;
  },
  'AVLayer Get propertyDepth': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyDepth`;
  },
  'AVLayer Get propertyType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyType`;
  },
  'AVLayer Get parentProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.parentProperty`;
  },
  'AVLayer Get isModified': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isModified`;
  },
  'AVLayer Get canSetEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.canSetEnabled`;
  },
  'AVLayer Get elided': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.elided`;
  },
  'AVLayer Get isEffect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isEffect`;
  },
  'AVLayer Get isMask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isMask`;
  },
  'AVLayer Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.selected`;
  },
  'CameraLayer Get cameraOption': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.cameraOption`;
  },
  'CameraLayer Get index': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.index`;
  },
  'CameraLayer Get time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.time`;
  },
  'CameraLayer Get hasVideo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.hasVideo`;
  },
  'CameraLayer Get active': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.active`;
  },
  'CameraLayer Get nullLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.nullLayer`;
  },
  'CameraLayer Get selectedProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.selectedProperties`;
  },
  'CameraLayer Get containingComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.containingComp`;
  },
  'CameraLayer Get isNameSet': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isNameSet`;
  },
  'CameraLayer Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.name`;
  },
  'CameraLayer Get parent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.parent`;
  },
  'CameraLayer Get startTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.startTime`;
  },
  'CameraLayer Get stretch': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.stretch`;
  },
  'CameraLayer Get inPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.inPoint`;
  },
  'CameraLayer Get outPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.outPoint`;
  },
  'CameraLayer Get enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.enabled`;
  },
  'CameraLayer Get solo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.solo`;
  },
  'CameraLayer Get shy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.shy`;
  },
  'CameraLayer Get locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.locked`;
  },
  'CameraLayer Get comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.comment`;
  },
  'CameraLayer Get label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.label`;
  },
  'CameraLayer Get autoOrient': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.autoOrient`;
  },
  'CameraLayer Get marker': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.marker`;
  },
  'CameraLayer Get transform': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.transform`;
  },
  'CameraLayer Get anchorPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.anchorPoint`;
  },
  'CameraLayer Get position': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.position`;
  },
  'CameraLayer Get xPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.xPosition`;
  },
  'CameraLayer Get yPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.yPosition`;
  },
  'CameraLayer Get zPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.zPosition`;
  },
  'CameraLayer Get scale': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.scale`;
  },
  'CameraLayer Get orientation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.orientation`;
  },
  'CameraLayer Get rotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.rotation`;
  },
  'CameraLayer Get xRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.xRotation`;
  },
  'CameraLayer Get yRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.yRotation`;
  },
  'CameraLayer Get zRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.zRotation`;
  },
  'CameraLayer Get opacity': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.opacity`;
  },
  'CameraLayer Get pointOfInterest': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.pointOfInterest`;
  },
  'CameraLayer Get numProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.numProperties`;
  },
  'CameraLayer Get matchName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.matchName`;
  },
  'CameraLayer Get propertyIndex': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyIndex`;
  },
  'CameraLayer Get propertyDepth': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyDepth`;
  },
  'CameraLayer Get propertyType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyType`;
  },
  'CameraLayer Get parentProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.parentProperty`;
  },
  'CameraLayer Get isModified': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isModified`;
  },
  'CameraLayer Get canSetEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.canSetEnabled`;
  },
  'CameraLayer Get elided': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.elided`;
  },
  'CameraLayer Get isEffect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isEffect`;
  },
  'CameraLayer Get isMask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isMask`;
  },
  'CameraLayer Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.selected`;
  },
  'Collection Get length': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'collection' });
    return `${target}.length`;
  },
  'CompItem Get numLayers': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.numLayers`;
  },
  'CompItem Get activeCamera': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.activeCamera`;
  },
  'CompItem Get layers': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.layers`;
  },
  'CompItem Get markerProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.markerProperty`;
  },
  'CompItem Get selectedLayers': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.selectedLayers`;
  },
  'CompItem Get selectedProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.selectedProperties`;
  },
  'CompItem Get renderers': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.renderers`;
  },
  'CompItem Get motionGraphicsTemplateControllerCount': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.motionGraphicsTemplateControllerCount`;
  },
  'CompItem Get frameDuration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.frameDuration`;
  },
  'CompItem Get workAreaStart': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.workAreaStart`;
  },
  'CompItem Get workAreaDuration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.workAreaDuration`;
  },
  'CompItem Get hideShyLayers': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.hideShyLayers`;
  },
  'CompItem Get motionBlur': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.motionBlur`;
  },
  'CompItem Get draft3d': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.draft3d`;
  },
  'CompItem Get frameBlending': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.frameBlending`;
  },
  'CompItem Get preserveNestedFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.preserveNestedFrameRate`;
  },
  'CompItem Get preserveNestedResolution': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.preserveNestedResolution`;
  },
  'CompItem Get bgColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.bgColor`;
  },
  'CompItem Get displayStartTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.displayStartTime`;
  },
  'CompItem Get resolutionFactor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.resolutionFactor`;
  },
  'CompItem Get shutterAngle': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.shutterAngle`;
  },
  'CompItem Get shutterPhase': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.shutterPhase`;
  },
  'CompItem Get motionBlurSamplesPerFrame': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.motionBlurSamplesPerFrame`;
  },
  'CompItem Get motionBlurAdaptiveSampleLimit': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.motionBlurAdaptiveSampleLimit`;
  },
  'CompItem Get motionGraphicsTemplateName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.motionGraphicsTemplateName`;
  },
  'CompItem Get renderer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.renderer`;
  },
  'CompItem Get dropFrame': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.dropFrame`;
  },
  'CompItem Get displayStartFrame': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.displayStartFrame`;
  },
  'CompItem Get proxySource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.proxySource`;
  },
  'CompItem Get usedIn': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.usedIn`;
  },
  'CompItem Get hasVideo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.hasVideo`;
  },
  'CompItem Get hasAudio': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.hasAudio`;
  },
  'CompItem Get footageMissing': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.footageMissing`;
  },
  'CompItem Get isMediaReplacementCompatible': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.isMediaReplacementCompatible`;
  },
  'CompItem Get width': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.width`;
  },
  'CompItem Get height': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.height`;
  },
  'CompItem Get pixelAspect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.pixelAspect`;
  },
  'CompItem Get frameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.frameRate`;
  },
  'CompItem Get duration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.duration`;
  },
  'CompItem Get useProxy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.useProxy`;
  },
  'CompItem Get time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.time`;
  },
  'CompItem Get id': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.id`;
  },
  'CompItem Get typeName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.typeName`;
  },
  'CompItem Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.name`;
  },
  'CompItem Get comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.comment`;
  },
  'CompItem Get parentFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.parentFolder`;
  },
  'CompItem Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.selected`;
  },
  'CompItem Get label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'activeComp' });
    return `${target}.label`;
  },
  'FileSource Get file': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.file`;
  },
  'FileSource Get missingFootagePath': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.missingFootagePath`;
  },
  'FileSource Get isStill': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.isStill`;
  },
  'FileSource Get displayFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.displayFrameRate`;
  },
  'FileSource Get hasAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.hasAlpha`;
  },
  'FileSource Get alphaMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.alphaMode`;
  },
  'FileSource Get premulColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.premulColor`;
  },
  'FileSource Get invertAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.invertAlpha`;
  },
  'FileSource Get fieldSeparationType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.fieldSeparationType`;
  },
  'FileSource Get highQualityFieldSeparation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.highQualityFieldSeparation`;
  },
  'FileSource Get removePulldown': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.removePulldown`;
  },
  'FileSource Get loop': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.loop`;
  },
  'FileSource Get nativeFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.nativeFrameRate`;
  },
  'FileSource Get conformFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'filesource' });
    return `${target}.conformFrameRate`;
  },
  'FolderItem Get items': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    return `${target}.items`;
  },
  'FolderItem Get numItems': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    return `${target}.numItems`;
  },
  'FolderItem Get id': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    return `${target}.id`;
  },
  'FolderItem Get typeName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    return `${target}.typeName`;
  },
  'FolderItem Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    return `${target}.name`;
  },
  'FolderItem Get comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    return `${target}.comment`;
  },
  'FolderItem Get parentFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    return `${target}.parentFolder`;
  },
  'FolderItem Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    return `${target}.selected`;
  },
  'FolderItem Get label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'folderitem' });
    return `${target}.label`;
  },
  'FootageItem Get file': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.file`;
  },
  'FootageItem Get mainSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.mainSource`;
  },
  'FootageItem Get proxySource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.proxySource`;
  },
  'FootageItem Get usedIn': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.usedIn`;
  },
  'FootageItem Get hasVideo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.hasVideo`;
  },
  'FootageItem Get hasAudio': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.hasAudio`;
  },
  'FootageItem Get footageMissing': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.footageMissing`;
  },
  'FootageItem Get isMediaReplacementCompatible': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.isMediaReplacementCompatible`;
  },
  'FootageItem Get width': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.width`;
  },
  'FootageItem Get height': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.height`;
  },
  'FootageItem Get pixelAspect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.pixelAspect`;
  },
  'FootageItem Get frameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.frameRate`;
  },
  'FootageItem Get frameDuration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.frameDuration`;
  },
  'FootageItem Get duration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.duration`;
  },
  'FootageItem Get useProxy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.useProxy`;
  },
  'FootageItem Get time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.time`;
  },
  'FootageItem Get id': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.id`;
  },
  'FootageItem Get typeName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.typeName`;
  },
  'FootageItem Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.name`;
  },
  'FootageItem Get comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.comment`;
  },
  'FootageItem Get parentFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.parentFolder`;
  },
  'FootageItem Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.selected`;
  },
  'FootageItem Get label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footageitem' });
    return `${target}.label`;
  },
  'PlaceholderItem Get file': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.file`;
  },
  'PlaceholderItem Get mainSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.mainSource`;
  },
  'PlaceholderItem Get proxySource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.proxySource`;
  },
  'PlaceholderItem Get usedIn': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.usedIn`;
  },
  'PlaceholderItem Get hasVideo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.hasVideo`;
  },
  'PlaceholderItem Get hasAudio': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.hasAudio`;
  },
  'PlaceholderItem Get footageMissing': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.footageMissing`;
  },
  'PlaceholderItem Get isMediaReplacementCompatible': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.isMediaReplacementCompatible`;
  },
  'PlaceholderItem Get width': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.width`;
  },
  'PlaceholderItem Get height': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.height`;
  },
  'PlaceholderItem Get pixelAspect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.pixelAspect`;
  },
  'PlaceholderItem Get frameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.frameRate`;
  },
  'PlaceholderItem Get frameDuration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.frameDuration`;
  },
  'PlaceholderItem Get duration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.duration`;
  },
  'PlaceholderItem Get useProxy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.useProxy`;
  },
  'PlaceholderItem Get time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.time`;
  },
  'PlaceholderItem Get id': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.id`;
  },
  'PlaceholderItem Get typeName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.typeName`;
  },
  'PlaceholderItem Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.name`;
  },
  'PlaceholderItem Get comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.comment`;
  },
  'PlaceholderItem Get parentFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.parentFolder`;
  },
  'PlaceholderItem Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.selected`;
  },
  'PlaceholderItem Get label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholderitem' });
    return `${target}.label`;
  },
  'FootageSource Get file': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    return `${target}.file`;
  },
  'FootageSource Get isStill': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    return `${target}.isStill`;
  },
  'FootageSource Get displayFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    return `${target}.displayFrameRate`;
  },
  'FootageSource Get hasAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    return `${target}.hasAlpha`;
  },
  'FootageSource Get alphaMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    return `${target}.alphaMode`;
  },
  'FootageSource Get premulColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    return `${target}.premulColor`;
  },
  'FootageSource Get invertAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    return `${target}.invertAlpha`;
  },
  'FootageSource Get fieldSeparationType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    return `${target}.fieldSeparationType`;
  },
  'FootageSource Get highQualityFieldSeparation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    return `${target}.highQualityFieldSeparation`;
  },
  'FootageSource Get removePulldown': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    return `${target}.removePulldown`;
  },
  'FootageSource Get loop': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    return `${target}.loop`;
  },
  'FootageSource Get nativeFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    return `${target}.nativeFrameRate`;
  },
  'FootageSource Get conformFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'footagesource' });
    return `${target}.conformFrameRate`;
  },
  'ImportOptions Get importAs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'importoptions' });
    return `${target}.importAs`;
  },
  'ImportOptions Get sequence': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'importoptions' });
    return `${target}.sequence`;
  },
  'ImportOptions Get forceAlphabetical': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'importoptions' });
    return `${target}.forceAlphabetical`;
  },
  'ImportOptions Get file': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'importoptions' });
    return `${target}.file`;
  },
  'Item Get id': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    return `${target}.id`;
  },
  'Item Get typeName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    return `${target}.typeName`;
  },
  'Item Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    return `${target}.name`;
  },
  'Item Get comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    return `${target}.comment`;
  },
  'Item Get parentFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    return `${target}.parentFolder`;
  },
  'Item Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    return `${target}.selected`;
  },
  'Item Get label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'item' });
    return `${target}.label`;
  },
  'ItemCollection Get length': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'itemcollection' });
    return `${target}.length`;
  },
  'KeyframeEase Get speed': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'keyframeease' });
    return `${target}.speed`;
  },
  'KeyframeEase Get influence': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'keyframeease' });
    return `${target}.influence`;
  },
  'Layer Get index': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.index`;
  },
  'Layer Get time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.time`;
  },
  'Layer Get hasVideo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.hasVideo`;
  },
  'Layer Get active': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.active`;
  },
  'Layer Get nullLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.nullLayer`;
  },
  'Layer Get selectedProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.selectedProperties`;
  },
  'Layer Get containingComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.containingComp`;
  },
  'Layer Get isNameSet': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isNameSet`;
  },
  'Layer Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.name`;
  },
  'Layer Get parent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.parent`;
  },
  'Layer Get startTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.startTime`;
  },
  'Layer Get stretch': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.stretch`;
  },
  'Layer Get inPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.inPoint`;
  },
  'Layer Get outPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.outPoint`;
  },
  'Layer Get enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.enabled`;
  },
  'Layer Get solo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.solo`;
  },
  'Layer Get shy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.shy`;
  },
  'Layer Get locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.locked`;
  },
  'Layer Get comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.comment`;
  },
  'Layer Get label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.label`;
  },
  'Layer Get autoOrient': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.autoOrient`;
  },
  'Layer Get marker': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.marker`;
  },
  'Layer Get transform': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.transform`;
  },
  'Layer Get anchorPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.anchorPoint`;
  },
  'Layer Get position': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.position`;
  },
  'Layer Get xPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.xPosition`;
  },
  'Layer Get yPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.yPosition`;
  },
  'Layer Get zPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.zPosition`;
  },
  'Layer Get scale': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.scale`;
  },
  'Layer Get orientation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.orientation`;
  },
  'Layer Get rotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.rotation`;
  },
  'Layer Get xRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.xRotation`;
  },
  'Layer Get yRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.yRotation`;
  },
  'Layer Get zRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.zRotation`;
  },
  'Layer Get opacity': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.opacity`;
  },
  'Layer Get pointOfInterest': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.pointOfInterest`;
  },
  'Layer Get numProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.numProperties`;
  },
  'Layer Get matchName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.matchName`;
  },
  'Layer Get propertyIndex': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyIndex`;
  },
  'Layer Get propertyDepth': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyDepth`;
  },
  'Layer Get propertyType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyType`;
  },
  'Layer Get parentProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.parentProperty`;
  },
  'Layer Get isModified': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isModified`;
  },
  'Layer Get canSetEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.canSetEnabled`;
  },
  'Layer Get elided': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.elided`;
  },
  'Layer Get isEffect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isEffect`;
  },
  'Layer Get isMask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isMask`;
  },
  'Layer Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.selected`;
  },
  'LayerCollection Get length': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'layercollection' });
    return `${target}.length`;
  },
  'LightLayer Get lightOption': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.lightOption`;
  },
  'LightLayer Get lightType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.lightType`;
  },
  'LightLayer Get index': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.index`;
  },
  'LightLayer Get time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.time`;
  },
  'LightLayer Get hasVideo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.hasVideo`;
  },
  'LightLayer Get active': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.active`;
  },
  'LightLayer Get nullLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.nullLayer`;
  },
  'LightLayer Get selectedProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.selectedProperties`;
  },
  'LightLayer Get containingComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.containingComp`;
  },
  'LightLayer Get isNameSet': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isNameSet`;
  },
  'LightLayer Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.name`;
  },
  'LightLayer Get parent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.parent`;
  },
  'LightLayer Get startTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.startTime`;
  },
  'LightLayer Get stretch': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.stretch`;
  },
  'LightLayer Get inPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.inPoint`;
  },
  'LightLayer Get outPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.outPoint`;
  },
  'LightLayer Get enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.enabled`;
  },
  'LightLayer Get solo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.solo`;
  },
  'LightLayer Get shy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.shy`;
  },
  'LightLayer Get locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.locked`;
  },
  'LightLayer Get comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.comment`;
  },
  'LightLayer Get label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.label`;
  },
  'LightLayer Get autoOrient': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.autoOrient`;
  },
  'LightLayer Get marker': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.marker`;
  },
  'LightLayer Get transform': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.transform`;
  },
  'LightLayer Get anchorPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.anchorPoint`;
  },
  'LightLayer Get position': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.position`;
  },
  'LightLayer Get xPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.xPosition`;
  },
  'LightLayer Get yPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.yPosition`;
  },
  'LightLayer Get zPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.zPosition`;
  },
  'LightLayer Get scale': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.scale`;
  },
  'LightLayer Get orientation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.orientation`;
  },
  'LightLayer Get rotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.rotation`;
  },
  'LightLayer Get xRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.xRotation`;
  },
  'LightLayer Get yRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.yRotation`;
  },
  'LightLayer Get zRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.zRotation`;
  },
  'LightLayer Get opacity': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.opacity`;
  },
  'LightLayer Get pointOfInterest': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.pointOfInterest`;
  },
  'LightLayer Get numProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.numProperties`;
  },
  'LightLayer Get matchName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.matchName`;
  },
  'LightLayer Get propertyIndex': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyIndex`;
  },
  'LightLayer Get propertyDepth': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyDepth`;
  },
  'LightLayer Get propertyType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyType`;
  },
  'LightLayer Get parentProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.parentProperty`;
  },
  'LightLayer Get isModified': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isModified`;
  },
  'LightLayer Get canSetEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.canSetEnabled`;
  },
  'LightLayer Get elided': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.elided`;
  },
  'LightLayer Get isEffect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isEffect`;
  },
  'LightLayer Get isMask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isMask`;
  },
  'LightLayer Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.selected`;
  },
  'MarkerValue Get comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    return `${target}.comment`;
  },
  'MarkerValue Get chapter': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    return `${target}.chapter`;
  },
  'MarkerValue Get cuePointName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    return `${target}.cuePointName`;
  },
  'MarkerValue Get duration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    return `${target}.duration`;
  },
  'MarkerValue Get eventCuePoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    return `${target}.eventCuePoint`;
  },
  'MarkerValue Get url': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    return `${target}.url`;
  },
  'MarkerValue Get frameTarget': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    return `${target}.frameTarget`;
  },
  'MarkerValue Get label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    return `${target}.label`;
  },
  'MarkerValue Get protectedRegion': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'markervalue' });
    return `${target}.protectedRegion`;
  },
  'MaskPropertyGroup Get maskMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.maskMode`;
  },
  'MaskPropertyGroup Get inverted': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.inverted`;
  },
  'MaskPropertyGroup Get rotoBezier': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.rotoBezier`;
  },
  'MaskPropertyGroup Get maskMotionBlur': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.maskMotionBlur`;
  },
  'MaskPropertyGroup Get locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.locked`;
  },
  'MaskPropertyGroup Get color': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.color`;
  },
  'MaskPropertyGroup Get maskShape': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.maskShape`;
  },
  'MaskPropertyGroup Get maskPath': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.maskPath`;
  },
  'MaskPropertyGroup Get maskFeather': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.maskFeather`;
  },
  'MaskPropertyGroup Get maskFeatherFalloff': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.maskFeatherFalloff`;
  },
  'MaskPropertyGroup Get maskOpacity': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.maskOpacity`;
  },
  'MaskPropertyGroup Get maskExpansion': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.maskExpansion`;
  },
  'MaskPropertyGroup Get numProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.numProperties`;
  },
  'MaskPropertyGroup Get matchName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.matchName`;
  },
  'MaskPropertyGroup Get propertyIndex': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.propertyIndex`;
  },
  'MaskPropertyGroup Get propertyDepth': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.propertyDepth`;
  },
  'MaskPropertyGroup Get propertyType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.propertyType`;
  },
  'MaskPropertyGroup Get parentProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.parentProperty`;
  },
  'MaskPropertyGroup Get isModified': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.isModified`;
  },
  'MaskPropertyGroup Get canSetEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.canSetEnabled`;
  },
  'MaskPropertyGroup Get active': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.active`;
  },
  'MaskPropertyGroup Get elided': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.elided`;
  },
  'MaskPropertyGroup Get isEffect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.isEffect`;
  },
  'MaskPropertyGroup Get isMask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.isMask`;
  },
  'MaskPropertyGroup Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.name`;
  },
  'MaskPropertyGroup Get enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.enabled`;
  },
  'MaskPropertyGroup Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'maskpropertygroup' });
    return `${target}.selected`;
  },
  'OMCollection Get length': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'omcollection' });
    return `${target}.length`;
  },
  'OutputModule Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    return `${target}.name`;
  },
  'OutputModule Get templates': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    return `${target}.templates`;
  },
  'OutputModule Get file': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    return `${target}.file`;
  },
  'OutputModule Get postRenderAction': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    return `${target}.postRenderAction`;
  },
  'OutputModule Get includeSourceXMP': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'outputmodule' });
    return `${target}.includeSourceXMP`;
  },
  'PlaceholderSource Get file': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    return `${target}.file`;
  },
  'PlaceholderSource Get isStill': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    return `${target}.isStill`;
  },
  'PlaceholderSource Get displayFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    return `${target}.displayFrameRate`;
  },
  'PlaceholderSource Get hasAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    return `${target}.hasAlpha`;
  },
  'PlaceholderSource Get alphaMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    return `${target}.alphaMode`;
  },
  'PlaceholderSource Get premulColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    return `${target}.premulColor`;
  },
  'PlaceholderSource Get invertAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    return `${target}.invertAlpha`;
  },
  'PlaceholderSource Get fieldSeparationType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    return `${target}.fieldSeparationType`;
  },
  'PlaceholderSource Get highQualityFieldSeparation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    return `${target}.highQualityFieldSeparation`;
  },
  'PlaceholderSource Get removePulldown': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    return `${target}.removePulldown`;
  },
  'PlaceholderSource Get loop': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    return `${target}.loop`;
  },
  'PlaceholderSource Get nativeFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    return `${target}.nativeFrameRate`;
  },
  'PlaceholderSource Get conformFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'placeholdersource' });
    return `${target}.conformFrameRate`;
  },
  'Project Get file': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.file`;
  },
  'Project Get rootFolder': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.rootFolder`;
  },
  'Project Get items': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.items`;
  },
  'Project Get activeItem': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.activeItem`;
  },
  'Project Get numItems': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.numItems`;
  },
  'Project Get selection': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.selection`;
  },
  'Project Get renderQueue': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.renderQueue`;
  },
  'Project Get bitsPerChannel': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.bitsPerChannel`;
  },
  'Project Get transparencyGridThumbnails': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.transparencyGridThumbnails`;
  },
  'Project Get displayStartFrame': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.displayStartFrame`;
  },
  'Project Get gpuAccelType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.gpuAccelType`;
  },
  'Project Get linearBlending': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.linearBlending`;
  },
  'Project Get xmpPacket': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.xmpPacket`;
  },
  'Project Get framesCountType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.framesCountType`;
  },
  'Project Get feetFramesFilmType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.feetFramesFilmType`;
  },
  'Project Get framesUseFeetFrames': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.framesUseFeetFrames`;
  },
  'Project Get footageTimecodeDisplayStartType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.footageTimecodeDisplayStartType`;
  },
  'Project Get timeDisplayType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.timeDisplayType`;
  },
  'Project Get toolType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.toolType`;
  },
  'Project Get workingGamma': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.workingGamma`;
  },
  'Project Get workingSpace': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.workingSpace`;
  },
  'Project Get linearizeWorkingSpace': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.linearizeWorkingSpace`;
  },
  'Project Get compensateForSceneReferredProfiles': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.compensateForSceneReferredProfiles`;
  },
  'Project Get expressionEngine': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'app.project' });
    return `${target}.expressionEngine`;
  },
  'Property Get propertyValueType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.propertyValueType`;
  },
  'Property Get value': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.value`;
  },
  'Property Get hasMin': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.hasMin`;
  },
  'Property Get hasMax': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.hasMax`;
  },
  'Property Get minValue': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.minValue`;
  },
  'Property Get maxValue': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.maxValue`;
  },
  'Property Get isSpatial': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.isSpatial`;
  },
  'Property Get canVaryOverTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.canVaryOverTime`;
  },
  'Property Get canSetExpression': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.canSetExpression`;
  },
  'Property Get isTimeVarying': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.isTimeVarying`;
  },
  'Property Get numKeys': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.numKeys`;
  },
  'Property Get unitsText': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.unitsText`;
  },
  'Property Get expressionError': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.expressionError`;
  },
  'Property Get selectedKeys': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.selectedKeys`;
  },
  'Property Get propertyIndex': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.propertyIndex`;
  },
  'Property Get isSeparationFollower': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.isSeparationFollower`;
  },
  'Property Get isSeparationLeader': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.isSeparationLeader`;
  },
  'Property Get separationDimension': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.separationDimension`;
  },
  'Property Get separationLeader': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.separationLeader`;
  },
  'Property Get isDropdownEffect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.isDropdownEffect`;
  },
  'Property Get alternateSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.alternateSource`;
  },
  'Property Get canSetAlternateSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.canSetAlternateSource`;
  },
  'Property Get expression': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.expression`;
  },
  'Property Get expressionEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.expressionEnabled`;
  },
  'Property Get dimensionsSeparated': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.dimensionsSeparated`;
  },
  'Property Get matchName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.matchName`;
  },
  'Property Get propertyDepth': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.propertyDepth`;
  },
  'Property Get propertyType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.propertyType`;
  },
  'Property Get parentProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.parentProperty`;
  },
  'Property Get isModified': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.isModified`;
  },
  'Property Get canSetEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.canSetEnabled`;
  },
  'Property Get active': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.active`;
  },
  'Property Get elided': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.elided`;
  },
  'Property Get isEffect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.isEffect`;
  },
  'Property Get isMask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.isMask`;
  },
  'Property Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.name`;
  },
  'Property Get enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.enabled`;
  },
  'Property Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'property' });
    return `${target}.selected`;
  },
  'PropertyBase Get matchName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.matchName`;
  },
  'PropertyBase Get propertyIndex': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.propertyIndex`;
  },
  'PropertyBase Get propertyDepth': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.propertyDepth`;
  },
  'PropertyBase Get propertyType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.propertyType`;
  },
  'PropertyBase Get parentProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.parentProperty`;
  },
  'PropertyBase Get isModified': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.isModified`;
  },
  'PropertyBase Get canSetEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.canSetEnabled`;
  },
  'PropertyBase Get active': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.active`;
  },
  'PropertyBase Get elided': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.elided`;
  },
  'PropertyBase Get isEffect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.isEffect`;
  },
  'PropertyBase Get isMask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.isMask`;
  },
  'PropertyBase Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.name`;
  },
  'PropertyBase Get enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.enabled`;
  },
  'PropertyBase Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertybase' });
    return `${target}.selected`;
  },
  'PropertyGroup Get numProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.numProperties`;
  },
  'PropertyGroup Get matchName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.matchName`;
  },
  'PropertyGroup Get propertyIndex': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.propertyIndex`;
  },
  'PropertyGroup Get propertyDepth': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.propertyDepth`;
  },
  'PropertyGroup Get propertyType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.propertyType`;
  },
  'PropertyGroup Get parentProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.parentProperty`;
  },
  'PropertyGroup Get isModified': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.isModified`;
  },
  'PropertyGroup Get canSetEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.canSetEnabled`;
  },
  'PropertyGroup Get active': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.active`;
  },
  'PropertyGroup Get elided': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.elided`;
  },
  'PropertyGroup Get isEffect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.isEffect`;
  },
  'PropertyGroup Get isMask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.isMask`;
  },
  'PropertyGroup Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.name`;
  },
  'PropertyGroup Get enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.enabled`;
  },
  'PropertyGroup Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'propertygroup' });
    return `${target}.selected`;
  },
  'RenderQueue Get rendering': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueue' });
    return `${target}.rendering`;
  },
  'RenderQueue Get numItems': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueue' });
    return `${target}.numItems`;
  },
  'RenderQueue Get canQueueInAME': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueue' });
    return `${target}.canQueueInAME`;
  },
  'RenderQueue Get items': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueue' });
    return `${target}.items`;
  },
  'RenderQueueItem Get numOutputModules': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    return `${target}.numOutputModules`;
  },
  'RenderQueueItem Get startTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    return `${target}.startTime`;
  },
  'RenderQueueItem Get elapsedSeconds': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    return `${target}.elapsedSeconds`;
  },
  'RenderQueueItem Get comp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    return `${target}.comp`;
  },
  'RenderQueueItem Get outputModules': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    return `${target}.outputModules`;
  },
  'RenderQueueItem Get templates': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    return `${target}.templates`;
  },
  'RenderQueueItem Get status': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    return `${target}.status`;
  },
  'RenderQueueItem Get render': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    return `${target}.render`;
  },
  'RenderQueueItem Get timeSpanStart': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    return `${target}.timeSpanStart`;
  },
  'RenderQueueItem Get timeSpanDuration': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    return `${target}.timeSpanDuration`;
  },
  'RenderQueueItem Get skipFrames': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    return `${target}.skipFrames`;
  },
  'RenderQueueItem Get onStatus': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    return `${target}.onStatus`;
  },
  'RenderQueueItem Get logType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'renderqueueitem' });
    return `${target}.logType`;
  },
  'RQItemCollection Get length': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'rqitemcollection' });
    return `${target}.length`;
  },
  'Shape Get closed': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    return `${target}.closed`;
  },
  'Shape Get vertices': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    return `${target}.vertices`;
  },
  'Shape Get inTangents': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    return `${target}.inTangents`;
  },
  'Shape Get outTangents': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    return `${target}.outTangents`;
  },
  'Shape Get featherSegLocs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    return `${target}.featherSegLocs`;
  },
  'Shape Get featherRelSegLocs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    return `${target}.featherRelSegLocs`;
  },
  'Shape Get featherRadii': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    return `${target}.featherRadii`;
  },
  'Shape Get featherInterps': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    return `${target}.featherInterps`;
  },
  'Shape Get featherTensions': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    return `${target}.featherTensions`;
  },
  'Shape Get featherTypes': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    return `${target}.featherTypes`;
  },
  'Shape Get featherRelCornerAngles': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'shape' });
    return `${target}.featherRelCornerAngles`;
  },
  'ShapeLayer Get source': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.source`;
  },
  'ShapeLayer Get isNameFromSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isNameFromSource`;
  },
  'ShapeLayer Get height': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.height`;
  },
  'ShapeLayer Get width': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.width`;
  },
  'ShapeLayer Get canSetCollapseTransformation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.canSetCollapseTransformation`;
  },
  'ShapeLayer Get frameBlending': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.frameBlending`;
  },
  'ShapeLayer Get canSetTimeRemapEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.canSetTimeRemapEnabled`;
  },
  'ShapeLayer Get hasAudio': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.hasAudio`;
  },
  'ShapeLayer Get audioActive': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.audioActive`;
  },
  'ShapeLayer Get isTrackMatte': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isTrackMatte`;
  },
  'ShapeLayer Get hasTrackMatte': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.hasTrackMatte`;
  },
  'ShapeLayer Get audioEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.audioEnabled`;
  },
  'ShapeLayer Get motionBlur': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.motionBlur`;
  },
  'ShapeLayer Get effectsActive': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.effectsActive`;
  },
  'ShapeLayer Get adjustmentLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.adjustmentLayer`;
  },
  'ShapeLayer Get environmentLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.environmentLayer`;
  },
  'ShapeLayer Get guideLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.guideLayer`;
  },
  'ShapeLayer Get threeDLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.threeDLayer`;
  },
  'ShapeLayer Get threeDPerChar': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.threeDPerChar`;
  },
  'ShapeLayer Get collapseTransformation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.collapseTransformation`;
  },
  'ShapeLayer Get frameBlendingType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.frameBlendingType`;
  },
  'ShapeLayer Get timeRemapEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.timeRemapEnabled`;
  },
  'ShapeLayer Get blendingMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.blendingMode`;
  },
  'ShapeLayer Get preserveTransparency': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.preserveTransparency`;
  },
  'ShapeLayer Get samplingQuality': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.samplingQuality`;
  },
  'ShapeLayer Get trackMatteType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.trackMatteType`;
  },
  'ShapeLayer Get quality': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.quality`;
  },
  'ShapeLayer Get timeRemap': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.timeRemap`;
  },
  'ShapeLayer Get mask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.mask`;
  },
  'ShapeLayer Get effect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.effect`;
  },
  'ShapeLayer Get layerStyle': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.layerStyle`;
  },
  'ShapeLayer Get geometryOption': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.geometryOption`;
  },
  'ShapeLayer Get materialOption': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.materialOption`;
  },
  'ShapeLayer Get audio': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.audio`;
  },
  'ShapeLayer Get index': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.index`;
  },
  'ShapeLayer Get time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.time`;
  },
  'ShapeLayer Get hasVideo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.hasVideo`;
  },
  'ShapeLayer Get active': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.active`;
  },
  'ShapeLayer Get nullLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.nullLayer`;
  },
  'ShapeLayer Get selectedProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.selectedProperties`;
  },
  'ShapeLayer Get containingComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.containingComp`;
  },
  'ShapeLayer Get isNameSet': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isNameSet`;
  },
  'ShapeLayer Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.name`;
  },
  'ShapeLayer Get parent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.parent`;
  },
  'ShapeLayer Get startTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.startTime`;
  },
  'ShapeLayer Get stretch': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.stretch`;
  },
  'ShapeLayer Get inPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.inPoint`;
  },
  'ShapeLayer Get outPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.outPoint`;
  },
  'ShapeLayer Get enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.enabled`;
  },
  'ShapeLayer Get solo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.solo`;
  },
  'ShapeLayer Get shy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.shy`;
  },
  'ShapeLayer Get locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.locked`;
  },
  'ShapeLayer Get comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.comment`;
  },
  'ShapeLayer Get label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.label`;
  },
  'ShapeLayer Get autoOrient': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.autoOrient`;
  },
  'ShapeLayer Get marker': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.marker`;
  },
  'ShapeLayer Get transform': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.transform`;
  },
  'ShapeLayer Get anchorPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.anchorPoint`;
  },
  'ShapeLayer Get position': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.position`;
  },
  'ShapeLayer Get xPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.xPosition`;
  },
  'ShapeLayer Get yPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.yPosition`;
  },
  'ShapeLayer Get zPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.zPosition`;
  },
  'ShapeLayer Get scale': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.scale`;
  },
  'ShapeLayer Get orientation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.orientation`;
  },
  'ShapeLayer Get rotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.rotation`;
  },
  'ShapeLayer Get xRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.xRotation`;
  },
  'ShapeLayer Get yRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.yRotation`;
  },
  'ShapeLayer Get zRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.zRotation`;
  },
  'ShapeLayer Get opacity': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.opacity`;
  },
  'ShapeLayer Get pointOfInterest': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.pointOfInterest`;
  },
  'ShapeLayer Get numProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.numProperties`;
  },
  'ShapeLayer Get matchName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.matchName`;
  },
  'ShapeLayer Get propertyIndex': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyIndex`;
  },
  'ShapeLayer Get propertyDepth': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyDepth`;
  },
  'ShapeLayer Get propertyType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyType`;
  },
  'ShapeLayer Get parentProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.parentProperty`;
  },
  'ShapeLayer Get isModified': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isModified`;
  },
  'ShapeLayer Get canSetEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.canSetEnabled`;
  },
  'ShapeLayer Get elided': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.elided`;
  },
  'ShapeLayer Get isEffect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isEffect`;
  },
  'ShapeLayer Get isMask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isMask`;
  },
  'ShapeLayer Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.selected`;
  },
  'SolidSource Get color': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.color`;
  },
  'SolidSource Get file': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.file`;
  },
  'SolidSource Get isStill': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.isStill`;
  },
  'SolidSource Get displayFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.displayFrameRate`;
  },
  'SolidSource Get hasAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.hasAlpha`;
  },
  'SolidSource Get alphaMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.alphaMode`;
  },
  'SolidSource Get premulColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.premulColor`;
  },
  'SolidSource Get invertAlpha': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.invertAlpha`;
  },
  'SolidSource Get fieldSeparationType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.fieldSeparationType`;
  },
  'SolidSource Get highQualityFieldSeparation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.highQualityFieldSeparation`;
  },
  'SolidSource Get removePulldown': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.removePulldown`;
  },
  'SolidSource Get loop': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.loop`;
  },
  'SolidSource Get nativeFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.nativeFrameRate`;
  },
  'SolidSource Get conformFrameRate': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'solidsource' });
    return `${target}.conformFrameRate`;
  },
  'System Get userName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'system' });
    return `${target}.userName`;
  },
  'System Get machineName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'system' });
    return `${target}.machineName`;
  },
  'System Get osName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'system' });
    return `${target}.osName`;
  },
  'System Get osVersion': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'system' });
    return `${target}.osVersion`;
  },
  'TextDocument Get pointText': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.pointText`;
  },
  'TextDocument Get boxText': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.boxText`;
  },
  'TextDocument Get fontLocation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.fontLocation`;
  },
  'TextDocument Get fontStyle': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.fontStyle`;
  },
  'TextDocument Get fontFamily': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.fontFamily`;
  },
  'TextDocument Get fauxBold': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.fauxBold`;
  },
  'TextDocument Get fauxItalic': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.fauxItalic`;
  },
  'TextDocument Get allCaps': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.allCaps`;
  },
  'TextDocument Get smallCaps': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.smallCaps`;
  },
  'TextDocument Get superscript': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.superscript`;
  },
  'TextDocument Get subscript': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.subscript`;
  },
  'TextDocument Get verticalScale': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.verticalScale`;
  },
  'TextDocument Get horizontalScale': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.horizontalScale`;
  },
  'TextDocument Get baselineShift': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.baselineShift`;
  },
  'TextDocument Get tsume': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.tsume`;
  },
  'TextDocument Get boxTextPos': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.boxTextPos`;
  },
  'TextDocument Get baselineLocs': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.baselineLocs`;
  },
  'TextDocument Get text': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.text`;
  },
  'TextDocument Get applyFill': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.applyFill`;
  },
  'TextDocument Get applyStroke': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.applyStroke`;
  },
  'TextDocument Get fillColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.fillColor`;
  },
  'TextDocument Get font': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.font`;
  },
  'TextDocument Get fontSize': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.fontSize`;
  },
  'TextDocument Get justification': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.justification`;
  },
  'TextDocument Get leading': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.leading`;
  },
  'TextDocument Get strokeColor': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.strokeColor`;
  },
  'TextDocument Get strokeOverFill': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.strokeOverFill`;
  },
  'TextDocument Get strokeWidth': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.strokeWidth`;
  },
  'TextDocument Get tracking': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.tracking`;
  },
  'TextDocument Get boxTextSize': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'textdocument' });
    return `${target}.boxTextSize`;
  },
  'TextLayer Get source': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.source`;
  },
  'TextLayer Get text': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.text`;
  },
  'TextLayer Get sourceText': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.sourceText`;
  },
  'TextLayer Get isNameFromSource': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isNameFromSource`;
  },
  'TextLayer Get height': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.height`;
  },
  'TextLayer Get width': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.width`;
  },
  'TextLayer Get canSetCollapseTransformation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.canSetCollapseTransformation`;
  },
  'TextLayer Get frameBlending': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.frameBlending`;
  },
  'TextLayer Get canSetTimeRemapEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.canSetTimeRemapEnabled`;
  },
  'TextLayer Get hasAudio': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.hasAudio`;
  },
  'TextLayer Get audioActive': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.audioActive`;
  },
  'TextLayer Get isTrackMatte': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isTrackMatte`;
  },
  'TextLayer Get hasTrackMatte': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.hasTrackMatte`;
  },
  'TextLayer Get audioEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.audioEnabled`;
  },
  'TextLayer Get motionBlur': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.motionBlur`;
  },
  'TextLayer Get effectsActive': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.effectsActive`;
  },
  'TextLayer Get adjustmentLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.adjustmentLayer`;
  },
  'TextLayer Get environmentLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.environmentLayer`;
  },
  'TextLayer Get guideLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.guideLayer`;
  },
  'TextLayer Get threeDLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.threeDLayer`;
  },
  'TextLayer Get threeDPerChar': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.threeDPerChar`;
  },
  'TextLayer Get collapseTransformation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.collapseTransformation`;
  },
  'TextLayer Get frameBlendingType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.frameBlendingType`;
  },
  'TextLayer Get timeRemapEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.timeRemapEnabled`;
  },
  'TextLayer Get blendingMode': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.blendingMode`;
  },
  'TextLayer Get preserveTransparency': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.preserveTransparency`;
  },
  'TextLayer Get samplingQuality': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.samplingQuality`;
  },
  'TextLayer Get trackMatteType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.trackMatteType`;
  },
  'TextLayer Get quality': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.quality`;
  },
  'TextLayer Get timeRemap': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.timeRemap`;
  },
  'TextLayer Get mask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.mask`;
  },
  'TextLayer Get effect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.effect`;
  },
  'TextLayer Get layerStyle': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.layerStyle`;
  },
  'TextLayer Get geometryOption': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.geometryOption`;
  },
  'TextLayer Get materialOption': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.materialOption`;
  },
  'TextLayer Get audio': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.audio`;
  },
  'TextLayer Get index': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.index`;
  },
  'TextLayer Get time': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.time`;
  },
  'TextLayer Get hasVideo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.hasVideo`;
  },
  'TextLayer Get active': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.active`;
  },
  'TextLayer Get nullLayer': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.nullLayer`;
  },
  'TextLayer Get selectedProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.selectedProperties`;
  },
  'TextLayer Get containingComp': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.containingComp`;
  },
  'TextLayer Get isNameSet': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isNameSet`;
  },
  'TextLayer Get name': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.name`;
  },
  'TextLayer Get parent': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.parent`;
  },
  'TextLayer Get startTime': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.startTime`;
  },
  'TextLayer Get stretch': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.stretch`;
  },
  'TextLayer Get inPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.inPoint`;
  },
  'TextLayer Get outPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.outPoint`;
  },
  'TextLayer Get enabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.enabled`;
  },
  'TextLayer Get solo': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.solo`;
  },
  'TextLayer Get shy': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.shy`;
  },
  'TextLayer Get locked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.locked`;
  },
  'TextLayer Get comment': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.comment`;
  },
  'TextLayer Get label': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.label`;
  },
  'TextLayer Get autoOrient': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.autoOrient`;
  },
  'TextLayer Get marker': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.marker`;
  },
  'TextLayer Get transform': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.transform`;
  },
  'TextLayer Get anchorPoint': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.anchorPoint`;
  },
  'TextLayer Get position': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.position`;
  },
  'TextLayer Get xPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.xPosition`;
  },
  'TextLayer Get yPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.yPosition`;
  },
  'TextLayer Get zPosition': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.zPosition`;
  },
  'TextLayer Get scale': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.scale`;
  },
  'TextLayer Get orientation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.orientation`;
  },
  'TextLayer Get rotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.rotation`;
  },
  'TextLayer Get xRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.xRotation`;
  },
  'TextLayer Get yRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.yRotation`;
  },
  'TextLayer Get zRotation': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.zRotation`;
  },
  'TextLayer Get opacity': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.opacity`;
  },
  'TextLayer Get pointOfInterest': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.pointOfInterest`;
  },
  'TextLayer Get numProperties': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.numProperties`;
  },
  'TextLayer Get matchName': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.matchName`;
  },
  'TextLayer Get propertyIndex': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyIndex`;
  },
  'TextLayer Get propertyDepth': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyDepth`;
  },
  'TextLayer Get propertyType': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.propertyType`;
  },
  'TextLayer Get parentProperty': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.parentProperty`;
  },
  'TextLayer Get isModified': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isModified`;
  },
  'TextLayer Get canSetEnabled': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.canSetEnabled`;
  },
  'TextLayer Get elided': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.elided`;
  },
  'TextLayer Get isEffect': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isEffect`;
  },
  'TextLayer Get isMask': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.isMask`;
  },
  'TextLayer Get selected': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'targetLayer' });
    return `${target}.selected`;
  },
  'View Get active': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'view' });
    return `${target}.active`;
  },
  'View Get options': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'view' });
    return `${target}.options`;
  },
  'Viewer Get type': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    return `${target}.type`;
  },
  'Viewer Get active': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    return `${target}.active`;
  },
  'Viewer Get views': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    return `${target}.views`;
  },
  'Viewer Get activeViewIndex': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    return `${target}.activeViewIndex`;
  },
  'Viewer Get guidesLocked': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    return `${target}.guidesLocked`;
  },
  'Viewer Get guidesSnap': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    return `${target}.guidesSnap`;
  },
  'Viewer Get guidesVisibility': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    return `${target}.guidesVisibility`;
  },
  'Viewer Get rulers': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    return `${target}.rulers`;
  },
  'Viewer Get maximized': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewer' });
    return `${target}.maximized`;
  },
  'ViewOptions Get channels': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewoptions' });
    return `${target}.channels`;
  },
  'ViewOptions Get checkerboards': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewoptions' });
    return `${target}.checkerboards`;
  },
  'ViewOptions Get exposure': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewoptions' });
    return `${target}.exposure`;
  },
  'ViewOptions Get fastPreview': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewoptions' });
    return `${target}.fastPreview`;
  },
  'ViewOptions Get zoom': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'viewoptions' });
    return `${target}.zoom`;
  }
};
