// GENERATED FILE - DO NOT EDIT

let counter = 0;
function uid(prefix) {
  counter += 1;
  return `${prefix}_${Date.now().toString(36)}_${counter}`;
}

export const AE_NODE_LIBRARY = [
  {
    category: 'Application',
    items: [
      {
        type: 'ae_Application_get_project',
        label: 'Application Get project',
        keywords: ['application', 'project', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get project',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'project' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_version',
        label: 'Application Get version',
        keywords: ['application', 'version', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get version',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'version' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_buildName',
        label: 'Application Get buildName',
        keywords: ['application', 'buildname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get buildName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'buildName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_buildNumber',
        label: 'Application Get buildNumber',
        keywords: ['application', 'buildnumber', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get buildNumber',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'buildNumber' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_isWatchFolder',
        label: 'Application Get isWatchFolder',
        keywords: ['application', 'iswatchfolder', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get isWatchFolder',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isWatchFolder' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_isRenderEngine',
        label: 'Application Get isRenderEngine',
        keywords: ['application', 'isrenderengine', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get isRenderEngine',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isRenderEngine' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_language',
        label: 'Application Get language',
        keywords: ['application', 'language', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get language',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'language' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_settings',
        label: 'Application Get settings',
        keywords: ['application', 'settings', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get settings',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'settings' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_isoLanguage',
        label: 'Application Get isoLanguage',
        keywords: ['application', 'isolanguage', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get isoLanguage',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isoLanguage' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_memoryInUse',
        label: 'Application Get memoryInUse',
        keywords: ['application', 'memoryinuse', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get memoryInUse',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'memoryInUse' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_preferences',
        label: 'Application Get preferences',
        keywords: ['application', 'preferences', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get preferences',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'preferences' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_activeViewer',
        label: 'Application Get activeViewer',
        keywords: ['application', 'activeviewer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get activeViewer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'activeViewer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_effects',
        label: 'Application Get effects',
        keywords: ['application', 'effects', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get effects',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'effects' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_availableGPUAccelTypes',
        label: 'Application Get availableGPUAccelTypes',
        keywords: ['application', 'availablegpuacceltypes', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get availableGPUAccelTypes',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'availableGPUAccelTypes' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_disableRendering',
        label: 'Application Get disableRendering',
        keywords: ['application', 'disablerendering', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get disableRendering',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'disableRendering' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_onError',
        label: 'Application Get onError',
        keywords: ['application', 'onerror', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get onError',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'onError' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_exitCode',
        label: 'Application Get exitCode',
        keywords: ['application', 'exitcode', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get exitCode',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'exitCode' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_exitAfterLaunchAndEval',
        label: 'Application Get exitAfterLaunchAndEval',
        keywords: ['application', 'exitafterlaunchandeval', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get exitAfterLaunchAndEval',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'exitAfterLaunchAndEval' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_get_saveProjectOnCrash',
        label: 'Application Get saveProjectOnCrash',
        keywords: ['application', 'saveprojectoncrash', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application Get saveProjectOnCrash',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'saveProjectOnCrash' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_newProject',
        label: 'Application newProject',
        keywords: ['application', 'newproject'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application newProject',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_open',
        label: 'Application open',
        keywords: ['application', 'open'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application open',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_quit',
        label: 'Application quit',
        keywords: ['application', 'quit'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application quit',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_watchFolder',
        label: 'Application watchFolder',
        keywords: ['application', 'watchfolder'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application watchFolder',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'folder_object_to_watch', label: 'folder_object_to_watch', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_pauseWatchFolder',
        label: 'Application pauseWatchFolder',
        keywords: ['application', 'pausewatchfolder'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application pauseWatchFolder',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'pause', label: 'pause', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_endWatchFolder',
        label: 'Application endWatchFolder',
        keywords: ['application', 'endwatchfolder'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application endWatchFolder',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_purge',
        label: 'Application purge',
        keywords: ['application', 'purge'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application purge',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'target', label: 'target', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_beginUndoGroup',
        label: 'Application beginUndoGroup',
        keywords: ['application', 'beginundogroup'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application beginUndoGroup',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'undoString', label: 'undoString', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_endUndoGroup',
        label: 'Application endUndoGroup',
        keywords: ['application', 'endundogroup'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application endUndoGroup',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_beginSuppressDialogs',
        label: 'Application beginSuppressDialogs',
        keywords: ['application', 'beginsuppressdialogs'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application beginSuppressDialogs',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_endSuppressDialogs',
        label: 'Application endSuppressDialogs',
        keywords: ['application', 'endsuppressdialogs'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application endSuppressDialogs',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'alert', label: 'alert', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_setMemoryUsageLimits',
        label: 'Application setMemoryUsageLimits',
        keywords: ['application', 'setmemoryusagelimits'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application setMemoryUsageLimits',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'imageCachePercentage', label: 'imageCachePercentage', type: 'number' },
              { id: 'maximumMemoryPercentage', label: 'maximumMemoryPercentage', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_setSavePreferencesOnQuit',
        label: 'Application setSavePreferencesOnQuit',
        keywords: ['application', 'setsavepreferencesonquit'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application setSavePreferencesOnQuit',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'doSave', label: 'doSave', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_activate',
        label: 'Application activate',
        keywords: ['application', 'activate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application activate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_scheduleTask',
        label: 'Application scheduleTask',
        keywords: ['application', 'scheduletask'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application scheduleTask',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'stringToExecute', label: 'stringToExecute', type: 'text' },
              { id: 'delay', label: 'delay', type: 'number' },
              { id: 'repeat', label: 'repeat', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_cancelTask',
        label: 'Application cancelTask',
        keywords: ['application', 'canceltask'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application cancelTask',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'taskID', label: 'taskID', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_parseSwatchFile',
        label: 'Application parseSwatchFile',
        keywords: ['application', 'parseswatchfile'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application parseSwatchFile',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_findMenuCommandId',
        label: 'Application findMenuCommandId',
        keywords: ['application', 'findmenucommandid'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application findMenuCommandId',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'str', label: 'str', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_executeCommand',
        label: 'Application executeCommand',
        keywords: ['application', 'executecommand'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application executeCommand',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'id', label: 'id', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_getenv',
        label: 'Application getenv',
        keywords: ['application', 'getenv'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application getenv',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_setTimeout',
        label: 'Application setTimeout',
        keywords: ['application', 'settimeout'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application setTimeout',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'func', label: 'func', type: 'expr' },
              { id: 'delay', label: 'delay', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Application_cancelTimeout',
        label: 'Application cancelTimeout',
        keywords: ['application', 'canceltimeout'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Application cancelTimeout',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Application', type: 'expr' },
              { id: 'id', label: 'id', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'Preferences',
    items: [
      {
        type: 'ae_Preferences_deletePref',
        label: 'Preferences deletePref',
        keywords: ['preferences', 'deletepref'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Preferences deletePref',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Preferences', type: 'expr' },
              { id: 'section', label: 'section', type: 'text' },
              { id: 'key', label: 'key', type: 'text' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Preferences_getPrefAsBool',
        label: 'Preferences getPrefAsBool',
        keywords: ['preferences', 'getprefasbool'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Preferences getPrefAsBool',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Preferences', type: 'expr' },
              { id: 'section', label: 'section', type: 'text' },
              { id: 'key', label: 'key', type: 'text' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Preferences_getPrefAsFloat',
        label: 'Preferences getPrefAsFloat',
        keywords: ['preferences', 'getprefasfloat'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Preferences getPrefAsFloat',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Preferences', type: 'expr' },
              { id: 'section', label: 'section', type: 'text' },
              { id: 'key', label: 'key', type: 'text' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Preferences_getPrefAsLong',
        label: 'Preferences getPrefAsLong',
        keywords: ['preferences', 'getprefaslong'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Preferences getPrefAsLong',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Preferences', type: 'expr' },
              { id: 'section', label: 'section', type: 'text' },
              { id: 'key', label: 'key', type: 'text' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Preferences_getPrefAsString',
        label: 'Preferences getPrefAsString',
        keywords: ['preferences', 'getprefasstring'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Preferences getPrefAsString',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Preferences', type: 'expr' },
              { id: 'section', label: 'section', type: 'text' },
              { id: 'key', label: 'key', type: 'text' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Preferences_havePref',
        label: 'Preferences havePref',
        keywords: ['preferences', 'havepref'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Preferences havePref',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Preferences', type: 'expr' },
              { id: 'section', label: 'section', type: 'text' },
              { id: 'key', label: 'key', type: 'text' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Preferences_reload',
        label: 'Preferences reload',
        keywords: ['preferences', 'reload'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Preferences reload',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Preferences', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Preferences_savePrefAsBool',
        label: 'Preferences savePrefAsBool',
        keywords: ['preferences', 'saveprefasbool'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Preferences savePrefAsBool',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Preferences', type: 'expr' },
              { id: 'section', label: 'section', type: 'text' },
              { id: 'key', label: 'key', type: 'text' },
              { id: 'value', label: 'value', type: 'boolean' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Preferences_savePrefAsFloat',
        label: 'Preferences savePrefAsFloat',
        keywords: ['preferences', 'saveprefasfloat'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Preferences savePrefAsFloat',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Preferences', type: 'expr' },
              { id: 'section', label: 'section', type: 'text' },
              { id: 'key', label: 'key', type: 'text' },
              { id: 'value', label: 'value', type: 'number' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Preferences_savePrefAsLong',
        label: 'Preferences savePrefAsLong',
        keywords: ['preferences', 'saveprefaslong'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Preferences savePrefAsLong',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Preferences', type: 'expr' },
              { id: 'section', label: 'section', type: 'text' },
              { id: 'key', label: 'key', type: 'text' },
              { id: 'value', label: 'value', type: 'number' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Preferences_savePrefAsString',
        label: 'Preferences savePrefAsString',
        keywords: ['preferences', 'saveprefasstring'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Preferences savePrefAsString',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Preferences', type: 'expr' },
              { id: 'section', label: 'section', type: 'text' },
              { id: 'key', label: 'key', type: 'text' },
              { id: 'value', label: 'value', type: 'text' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Preferences_saveToDisk',
        label: 'Preferences saveToDisk',
        keywords: ['preferences', 'savetodisk'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Preferences saveToDisk',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Preferences', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'AVItem',
    items: [
      {
        type: 'ae_AVItem_get_proxySource',
        label: 'AVItem Get proxySource',
        keywords: ['avitem', 'proxysource', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get proxySource',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'proxySource' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_usedIn',
        label: 'AVItem Get usedIn',
        keywords: ['avitem', 'usedin', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get usedIn',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'usedIn' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_hasVideo',
        label: 'AVItem Get hasVideo',
        keywords: ['avitem', 'hasvideo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get hasVideo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasVideo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_hasAudio',
        label: 'AVItem Get hasAudio',
        keywords: ['avitem', 'hasaudio', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get hasAudio',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasAudio' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_footageMissing',
        label: 'AVItem Get footageMissing',
        keywords: ['avitem', 'footagemissing', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get footageMissing',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'footageMissing' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_isMediaReplacementCompatible',
        label: 'AVItem Get isMediaReplacementCompatible',
        keywords: ['avitem', 'ismediareplacementcompatible', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get isMediaReplacementCompatible',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMediaReplacementCompatible' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_width',
        label: 'AVItem Get width',
        keywords: ['avitem', 'width', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get width',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'width' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_height',
        label: 'AVItem Get height',
        keywords: ['avitem', 'height', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get height',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'height' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_pixelAspect',
        label: 'AVItem Get pixelAspect',
        keywords: ['avitem', 'pixelaspect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get pixelAspect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'pixelAspect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_frameRate',
        label: 'AVItem Get frameRate',
        keywords: ['avitem', 'framerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get frameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_frameDuration',
        label: 'AVItem Get frameDuration',
        keywords: ['avitem', 'frameduration', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get frameDuration',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameDuration' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_duration',
        label: 'AVItem Get duration',
        keywords: ['avitem', 'duration', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get duration',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'duration' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_useProxy',
        label: 'AVItem Get useProxy',
        keywords: ['avitem', 'useproxy', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get useProxy',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'useProxy' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_time',
        label: 'AVItem Get time',
        keywords: ['avitem', 'time', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get time',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'time' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_id',
        label: 'AVItem Get id',
        keywords: ['avitem', 'id', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get id',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'id' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_typeName',
        label: 'AVItem Get typeName',
        keywords: ['avitem', 'typename', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get typeName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'typeName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_name',
        label: 'AVItem Get name',
        keywords: ['avitem', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_comment',
        label: 'AVItem Get comment',
        keywords: ['avitem', 'comment', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get comment',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comment' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_parentFolder',
        label: 'AVItem Get parentFolder',
        keywords: ['avitem', 'parentfolder', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get parentFolder',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentFolder' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_selected',
        label: 'AVItem Get selected',
        keywords: ['avitem', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_get_label',
        label: 'AVItem Get label',
        keywords: ['avitem', 'label', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem Get label',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'label' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_setProxy',
        label: 'AVItem setProxy',
        keywords: ['avitem', 'setproxy'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem setProxy',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVItem', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_setProxyWithSequence',
        label: 'AVItem setProxyWithSequence',
        keywords: ['avitem', 'setproxywithsequence'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem setProxyWithSequence',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVItem', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' },
              { id: 'forceAlphabetical', label: 'forceAlphabetical', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_setProxyWithSolid',
        label: 'AVItem setProxyWithSolid',
        keywords: ['avitem', 'setproxywithsolid'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem setProxyWithSolid',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVItem', type: 'expr' },
              { id: 'color', label: 'color', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'pixelAspect', label: 'pixelAspect', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_setProxyWithPlaceholder',
        label: 'AVItem setProxyWithPlaceholder',
        keywords: ['avitem', 'setproxywithplaceholder'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem setProxyWithPlaceholder',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVItem', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'frameRate', label: 'frameRate', type: 'number' },
              { id: 'duration', label: 'duration', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_setProxyToNone',
        label: 'AVItem setProxyToNone',
        keywords: ['avitem', 'setproxytonone'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem setProxyToNone',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_addGuide',
        label: 'AVItem addGuide',
        keywords: ['avitem', 'addguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem addGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVItem', type: 'expr' },
              { id: 'orientationType', label: 'orientationType', type: 'number' },
              { id: 'position', label: 'position', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_removeGuide',
        label: 'AVItem removeGuide',
        keywords: ['avitem', 'removeguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem removeGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVItem', type: 'expr' },
              { id: 'guideIndex', label: 'guideIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_setGuide',
        label: 'AVItem setGuide',
        keywords: ['avitem', 'setguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem setGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVItem', type: 'expr' },
              { id: 'position', label: 'position', type: 'number' },
              { id: 'guideIndex', label: 'guideIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVItem_remove',
        label: 'AVItem remove',
        keywords: ['avitem', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVItem remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'AVLayer',
    items: [
      {
        type: 'ae_AVLayer_get_source',
        label: 'AVLayer Get source',
        keywords: ['avlayer', 'source', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get source',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'source' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_isNameFromSource',
        label: 'AVLayer Get isNameFromSource',
        keywords: ['avlayer', 'isnamefromsource', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get isNameFromSource',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isNameFromSource' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_height',
        label: 'AVLayer Get height',
        keywords: ['avlayer', 'height', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get height',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'height' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_width',
        label: 'AVLayer Get width',
        keywords: ['avlayer', 'width', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get width',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'width' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_canSetCollapseTransformation',
        label: 'AVLayer Get canSetCollapseTransformation',
        keywords: ['avlayer', 'cansetcollapsetransformation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get canSetCollapseTransformation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetCollapseTransformation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_frameBlending',
        label: 'AVLayer Get frameBlending',
        keywords: ['avlayer', 'frameblending', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get frameBlending',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameBlending' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_canSetTimeRemapEnabled',
        label: 'AVLayer Get canSetTimeRemapEnabled',
        keywords: ['avlayer', 'cansettimeremapenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get canSetTimeRemapEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetTimeRemapEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_hasAudio',
        label: 'AVLayer Get hasAudio',
        keywords: ['avlayer', 'hasaudio', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get hasAudio',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasAudio' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_audioActive',
        label: 'AVLayer Get audioActive',
        keywords: ['avlayer', 'audioactive', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get audioActive',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'audioActive' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_isTrackMatte',
        label: 'AVLayer Get isTrackMatte',
        keywords: ['avlayer', 'istrackmatte', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get isTrackMatte',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isTrackMatte' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_hasTrackMatte',
        label: 'AVLayer Get hasTrackMatte',
        keywords: ['avlayer', 'hastrackmatte', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get hasTrackMatte',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasTrackMatte' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_audioEnabled',
        label: 'AVLayer Get audioEnabled',
        keywords: ['avlayer', 'audioenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get audioEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'audioEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_motionBlur',
        label: 'AVLayer Get motionBlur',
        keywords: ['avlayer', 'motionblur', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get motionBlur',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'motionBlur' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_effectsActive',
        label: 'AVLayer Get effectsActive',
        keywords: ['avlayer', 'effectsactive', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get effectsActive',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'effectsActive' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_adjustmentLayer',
        label: 'AVLayer Get adjustmentLayer',
        keywords: ['avlayer', 'adjustmentlayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get adjustmentLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'adjustmentLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_environmentLayer',
        label: 'AVLayer Get environmentLayer',
        keywords: ['avlayer', 'environmentlayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get environmentLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'environmentLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_guideLayer',
        label: 'AVLayer Get guideLayer',
        keywords: ['avlayer', 'guidelayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get guideLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'guideLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_threeDLayer',
        label: 'AVLayer Get threeDLayer',
        keywords: ['avlayer', 'threedlayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get threeDLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'threeDLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_threeDPerChar',
        label: 'AVLayer Get threeDPerChar',
        keywords: ['avlayer', 'threedperchar', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get threeDPerChar',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'threeDPerChar' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_collapseTransformation',
        label: 'AVLayer Get collapseTransformation',
        keywords: ['avlayer', 'collapsetransformation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get collapseTransformation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'collapseTransformation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_frameBlendingType',
        label: 'AVLayer Get frameBlendingType',
        keywords: ['avlayer', 'frameblendingtype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get frameBlendingType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameBlendingType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_timeRemapEnabled',
        label: 'AVLayer Get timeRemapEnabled',
        keywords: ['avlayer', 'timeremapenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get timeRemapEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'timeRemapEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_blendingMode',
        label: 'AVLayer Get blendingMode',
        keywords: ['avlayer', 'blendingmode', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get blendingMode',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'blendingMode' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_preserveTransparency',
        label: 'AVLayer Get preserveTransparency',
        keywords: ['avlayer', 'preservetransparency', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get preserveTransparency',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'preserveTransparency' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_samplingQuality',
        label: 'AVLayer Get samplingQuality',
        keywords: ['avlayer', 'samplingquality', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get samplingQuality',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'samplingQuality' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_trackMatteType',
        label: 'AVLayer Get trackMatteType',
        keywords: ['avlayer', 'trackmattetype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get trackMatteType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'trackMatteType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_quality',
        label: 'AVLayer Get quality',
        keywords: ['avlayer', 'quality', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get quality',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'quality' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_timeRemap',
        label: 'AVLayer Get timeRemap',
        keywords: ['avlayer', 'timeremap', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get timeRemap',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'timeRemap' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_mask',
        label: 'AVLayer Get mask',
        keywords: ['avlayer', 'mask', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get mask',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'mask' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_effect',
        label: 'AVLayer Get effect',
        keywords: ['avlayer', 'effect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get effect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'effect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_layerStyle',
        label: 'AVLayer Get layerStyle',
        keywords: ['avlayer', 'layerstyle', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get layerStyle',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'layerStyle' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_geometryOption',
        label: 'AVLayer Get geometryOption',
        keywords: ['avlayer', 'geometryoption', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get geometryOption',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'geometryOption' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_materialOption',
        label: 'AVLayer Get materialOption',
        keywords: ['avlayer', 'materialoption', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get materialOption',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'materialOption' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_audio',
        label: 'AVLayer Get audio',
        keywords: ['avlayer', 'audio', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get audio',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'audio' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_index',
        label: 'AVLayer Get index',
        keywords: ['avlayer', 'index', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get index',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'index' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_time',
        label: 'AVLayer Get time',
        keywords: ['avlayer', 'time', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get time',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'time' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_hasVideo',
        label: 'AVLayer Get hasVideo',
        keywords: ['avlayer', 'hasvideo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get hasVideo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasVideo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_active',
        label: 'AVLayer Get active',
        keywords: ['avlayer', 'active', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get active',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'active' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_nullLayer',
        label: 'AVLayer Get nullLayer',
        keywords: ['avlayer', 'nulllayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get nullLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'nullLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_selectedProperties',
        label: 'AVLayer Get selectedProperties',
        keywords: ['avlayer', 'selectedproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get selectedProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selectedProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_containingComp',
        label: 'AVLayer Get containingComp',
        keywords: ['avlayer', 'containingcomp', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get containingComp',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'containingComp' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_isNameSet',
        label: 'AVLayer Get isNameSet',
        keywords: ['avlayer', 'isnameset', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get isNameSet',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isNameSet' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_name',
        label: 'AVLayer Get name',
        keywords: ['avlayer', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_parent',
        label: 'AVLayer Get parent',
        keywords: ['avlayer', 'parent', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get parent',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parent' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_startTime',
        label: 'AVLayer Get startTime',
        keywords: ['avlayer', 'starttime', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get startTime',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'startTime' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_stretch',
        label: 'AVLayer Get stretch',
        keywords: ['avlayer', 'stretch', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get stretch',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'stretch' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_inPoint',
        label: 'AVLayer Get inPoint',
        keywords: ['avlayer', 'inpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get inPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'inPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_outPoint',
        label: 'AVLayer Get outPoint',
        keywords: ['avlayer', 'outpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get outPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'outPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_enabled',
        label: 'AVLayer Get enabled',
        keywords: ['avlayer', 'enabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get enabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'enabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_solo',
        label: 'AVLayer Get solo',
        keywords: ['avlayer', 'solo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get solo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'solo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_shy',
        label: 'AVLayer Get shy',
        keywords: ['avlayer', 'shy', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get shy',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'shy' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_locked',
        label: 'AVLayer Get locked',
        keywords: ['avlayer', 'locked', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get locked',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'locked' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_comment',
        label: 'AVLayer Get comment',
        keywords: ['avlayer', 'comment', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get comment',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comment' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_label',
        label: 'AVLayer Get label',
        keywords: ['avlayer', 'label', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get label',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'label' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_autoOrient',
        label: 'AVLayer Get autoOrient',
        keywords: ['avlayer', 'autoorient', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get autoOrient',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'autoOrient' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_marker',
        label: 'AVLayer Get marker',
        keywords: ['avlayer', 'marker', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get marker',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'marker' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_transform',
        label: 'AVLayer Get transform',
        keywords: ['avlayer', 'transform', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get transform',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'transform' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_anchorPoint',
        label: 'AVLayer Get anchorPoint',
        keywords: ['avlayer', 'anchorpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get anchorPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'anchorPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_position',
        label: 'AVLayer Get position',
        keywords: ['avlayer', 'position', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get position',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'position' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_xPosition',
        label: 'AVLayer Get xPosition',
        keywords: ['avlayer', 'xposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get xPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'xPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_yPosition',
        label: 'AVLayer Get yPosition',
        keywords: ['avlayer', 'yposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get yPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'yPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_zPosition',
        label: 'AVLayer Get zPosition',
        keywords: ['avlayer', 'zposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get zPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'zPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_scale',
        label: 'AVLayer Get scale',
        keywords: ['avlayer', 'scale', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get scale',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'scale' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_orientation',
        label: 'AVLayer Get orientation',
        keywords: ['avlayer', 'orientation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get orientation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'orientation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_rotation',
        label: 'AVLayer Get rotation',
        keywords: ['avlayer', 'rotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get rotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'rotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_xRotation',
        label: 'AVLayer Get xRotation',
        keywords: ['avlayer', 'xrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get xRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'xRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_yRotation',
        label: 'AVLayer Get yRotation',
        keywords: ['avlayer', 'yrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get yRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'yRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_zRotation',
        label: 'AVLayer Get zRotation',
        keywords: ['avlayer', 'zrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get zRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'zRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_opacity',
        label: 'AVLayer Get opacity',
        keywords: ['avlayer', 'opacity', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get opacity',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'opacity' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_pointOfInterest',
        label: 'AVLayer Get pointOfInterest',
        keywords: ['avlayer', 'pointofinterest', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get pointOfInterest',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'pointOfInterest' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_numProperties',
        label: 'AVLayer Get numProperties',
        keywords: ['avlayer', 'numproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get numProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_matchName',
        label: 'AVLayer Get matchName',
        keywords: ['avlayer', 'matchname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get matchName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'matchName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_propertyIndex',
        label: 'AVLayer Get propertyIndex',
        keywords: ['avlayer', 'propertyindex', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get propertyIndex',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyIndex' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_propertyDepth',
        label: 'AVLayer Get propertyDepth',
        keywords: ['avlayer', 'propertydepth', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get propertyDepth',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyDepth' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_propertyType',
        label: 'AVLayer Get propertyType',
        keywords: ['avlayer', 'propertytype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get propertyType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_parentProperty',
        label: 'AVLayer Get parentProperty',
        keywords: ['avlayer', 'parentproperty', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get parentProperty',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentProperty' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_isModified',
        label: 'AVLayer Get isModified',
        keywords: ['avlayer', 'ismodified', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get isModified',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isModified' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_canSetEnabled',
        label: 'AVLayer Get canSetEnabled',
        keywords: ['avlayer', 'cansetenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get canSetEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_elided',
        label: 'AVLayer Get elided',
        keywords: ['avlayer', 'elided', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get elided',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'elided' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_isEffect',
        label: 'AVLayer Get isEffect',
        keywords: ['avlayer', 'iseffect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get isEffect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isEffect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_isMask',
        label: 'AVLayer Get isMask',
        keywords: ['avlayer', 'ismask', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get isMask',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMask' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_get_selected',
        label: 'AVLayer Get selected',
        keywords: ['avlayer', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_audioActiveAtTime',
        label: 'AVLayer audioActiveAtTime',
        keywords: ['avlayer', 'audioactiveattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer audioActiveAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_calculateTransformFromPoints',
        label: 'AVLayer calculateTransformFromPoints',
        keywords: ['avlayer', 'calculatetransformfrompoints'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer calculateTransformFromPoints',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'pointTopLeft', label: 'pointTopLeft', type: 'expr' },
              { id: 'pointTopRight', label: 'pointTopRight', type: 'expr' },
              { id: 'pointBottomRight', label: 'pointBottomRight', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_sourcePointToComp',
        label: 'AVLayer sourcePointToComp',
        keywords: ['avlayer', 'sourcepointtocomp'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer sourcePointToComp',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'point', label: 'point', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_compPointToSource',
        label: 'AVLayer compPointToSource',
        keywords: ['avlayer', 'comppointtosource'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer compPointToSource',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'point', label: 'point', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_openInViewer',
        label: 'AVLayer openInViewer',
        keywords: ['avlayer', 'openinviewer'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer openInViewer',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_replaceSource',
        label: 'AVLayer replaceSource',
        keywords: ['avlayer', 'replacesource'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer replaceSource',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'newSource', label: 'newSource', type: 'expr' },
              { id: 'fixExpressions', label: 'fixExpressions', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_sourceRectAtTime',
        label: 'AVLayer sourceRectAtTime',
        keywords: ['avlayer', 'sourcerectattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer sourceRectAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'timeT', label: 'timeT', type: 'number' },
              { id: 'extents', label: 'extents', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_addToMotionGraphicsTemplate',
        label: 'AVLayer addToMotionGraphicsTemplate',
        keywords: ['avlayer', 'addtomotiongraphicstemplate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer addToMotionGraphicsTemplate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'comp', label: 'comp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_addToMotionGraphicsTemplateAs',
        label: 'AVLayer addToMotionGraphicsTemplateAs',
        keywords: ['avlayer', 'addtomotiongraphicstemplateas'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer addToMotionGraphicsTemplateAs',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'comp', label: 'comp', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_canAddToMotionGraphicsTemplate',
        label: 'AVLayer canAddToMotionGraphicsTemplate',
        keywords: ['avlayer', 'canaddtomotiongraphicstemplate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer canAddToMotionGraphicsTemplate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'comp', label: 'comp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_moveToBeginning',
        label: 'AVLayer moveToBeginning',
        keywords: ['avlayer', 'movetobeginning'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer moveToBeginning',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_moveToEnd',
        label: 'AVLayer moveToEnd',
        keywords: ['avlayer', 'movetoend'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer moveToEnd',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_moveAfter',
        label: 'AVLayer moveAfter',
        keywords: ['avlayer', 'moveafter'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer moveAfter',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'layer', label: 'layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_moveBefore',
        label: 'AVLayer moveBefore',
        keywords: ['avlayer', 'movebefore'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer moveBefore',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'layer', label: 'layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_duplicate',
        label: 'AVLayer duplicate',
        keywords: ['avlayer', 'duplicate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer duplicate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_copyToComp',
        label: 'AVLayer copyToComp',
        keywords: ['avlayer', 'copytocomp'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer copyToComp',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'intoComp', label: 'intoComp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_activeAtTime',
        label: 'AVLayer activeAtTime',
        keywords: ['avlayer', 'activeattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer activeAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_setParentWithJump',
        label: 'AVLayer setParentWithJump',
        keywords: ['avlayer', 'setparentwithjump'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer setParentWithJump',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'newParent', label: 'newParent', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_applyPreset',
        label: 'AVLayer applyPreset',
        keywords: ['avlayer', 'applypreset'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer applyPreset',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'presetName', label: 'presetName', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_canAddProperty',
        label: 'AVLayer canAddProperty',
        keywords: ['avlayer', 'canaddproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer canAddProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_addProperty',
        label: 'AVLayer addProperty',
        keywords: ['avlayer', 'addproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer addProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_propertyGroup',
        label: 'AVLayer propertyGroup',
        keywords: ['avlayer', 'propertygroup'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer propertyGroup',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'countUp', label: 'countUp', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_remove',
        label: 'AVLayer remove',
        keywords: ['avlayer', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_moveTo',
        label: 'AVLayer moveTo',
        keywords: ['avlayer', 'moveto'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer moveTo',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'newIndex', label: 'newIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_property_index',
        label: 'AVLayer property (index)',
        keywords: ['avlayer', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer property (index)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_AVLayer_property_name',
        label: 'AVLayer property (name)',
        keywords: ['avlayer', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'AVLayer property (name)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'AVLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'CameraLayer',
    items: [
      {
        type: 'ae_CameraLayer_get_cameraOption',
        label: 'CameraLayer Get cameraOption',
        keywords: ['cameralayer', 'cameraoption', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get cameraOption',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'cameraOption' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_index',
        label: 'CameraLayer Get index',
        keywords: ['cameralayer', 'index', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get index',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'index' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_time',
        label: 'CameraLayer Get time',
        keywords: ['cameralayer', 'time', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get time',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'time' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_hasVideo',
        label: 'CameraLayer Get hasVideo',
        keywords: ['cameralayer', 'hasvideo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get hasVideo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasVideo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_active',
        label: 'CameraLayer Get active',
        keywords: ['cameralayer', 'active', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get active',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'active' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_nullLayer',
        label: 'CameraLayer Get nullLayer',
        keywords: ['cameralayer', 'nulllayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get nullLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'nullLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_selectedProperties',
        label: 'CameraLayer Get selectedProperties',
        keywords: ['cameralayer', 'selectedproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get selectedProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selectedProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_containingComp',
        label: 'CameraLayer Get containingComp',
        keywords: ['cameralayer', 'containingcomp', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get containingComp',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'containingComp' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_isNameSet',
        label: 'CameraLayer Get isNameSet',
        keywords: ['cameralayer', 'isnameset', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get isNameSet',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isNameSet' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_name',
        label: 'CameraLayer Get name',
        keywords: ['cameralayer', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_parent',
        label: 'CameraLayer Get parent',
        keywords: ['cameralayer', 'parent', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get parent',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parent' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_startTime',
        label: 'CameraLayer Get startTime',
        keywords: ['cameralayer', 'starttime', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get startTime',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'startTime' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_stretch',
        label: 'CameraLayer Get stretch',
        keywords: ['cameralayer', 'stretch', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get stretch',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'stretch' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_inPoint',
        label: 'CameraLayer Get inPoint',
        keywords: ['cameralayer', 'inpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get inPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'inPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_outPoint',
        label: 'CameraLayer Get outPoint',
        keywords: ['cameralayer', 'outpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get outPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'outPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_enabled',
        label: 'CameraLayer Get enabled',
        keywords: ['cameralayer', 'enabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get enabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'enabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_solo',
        label: 'CameraLayer Get solo',
        keywords: ['cameralayer', 'solo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get solo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'solo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_shy',
        label: 'CameraLayer Get shy',
        keywords: ['cameralayer', 'shy', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get shy',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'shy' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_locked',
        label: 'CameraLayer Get locked',
        keywords: ['cameralayer', 'locked', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get locked',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'locked' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_comment',
        label: 'CameraLayer Get comment',
        keywords: ['cameralayer', 'comment', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get comment',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comment' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_label',
        label: 'CameraLayer Get label',
        keywords: ['cameralayer', 'label', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get label',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'label' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_autoOrient',
        label: 'CameraLayer Get autoOrient',
        keywords: ['cameralayer', 'autoorient', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get autoOrient',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'autoOrient' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_marker',
        label: 'CameraLayer Get marker',
        keywords: ['cameralayer', 'marker', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get marker',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'marker' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_transform',
        label: 'CameraLayer Get transform',
        keywords: ['cameralayer', 'transform', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get transform',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'transform' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_anchorPoint',
        label: 'CameraLayer Get anchorPoint',
        keywords: ['cameralayer', 'anchorpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get anchorPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'anchorPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_position',
        label: 'CameraLayer Get position',
        keywords: ['cameralayer', 'position', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get position',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'position' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_xPosition',
        label: 'CameraLayer Get xPosition',
        keywords: ['cameralayer', 'xposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get xPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'xPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_yPosition',
        label: 'CameraLayer Get yPosition',
        keywords: ['cameralayer', 'yposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get yPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'yPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_zPosition',
        label: 'CameraLayer Get zPosition',
        keywords: ['cameralayer', 'zposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get zPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'zPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_scale',
        label: 'CameraLayer Get scale',
        keywords: ['cameralayer', 'scale', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get scale',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'scale' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_orientation',
        label: 'CameraLayer Get orientation',
        keywords: ['cameralayer', 'orientation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get orientation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'orientation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_rotation',
        label: 'CameraLayer Get rotation',
        keywords: ['cameralayer', 'rotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get rotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'rotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_xRotation',
        label: 'CameraLayer Get xRotation',
        keywords: ['cameralayer', 'xrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get xRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'xRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_yRotation',
        label: 'CameraLayer Get yRotation',
        keywords: ['cameralayer', 'yrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get yRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'yRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_zRotation',
        label: 'CameraLayer Get zRotation',
        keywords: ['cameralayer', 'zrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get zRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'zRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_opacity',
        label: 'CameraLayer Get opacity',
        keywords: ['cameralayer', 'opacity', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get opacity',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'opacity' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_pointOfInterest',
        label: 'CameraLayer Get pointOfInterest',
        keywords: ['cameralayer', 'pointofinterest', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get pointOfInterest',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'pointOfInterest' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_numProperties',
        label: 'CameraLayer Get numProperties',
        keywords: ['cameralayer', 'numproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get numProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_matchName',
        label: 'CameraLayer Get matchName',
        keywords: ['cameralayer', 'matchname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get matchName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'matchName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_propertyIndex',
        label: 'CameraLayer Get propertyIndex',
        keywords: ['cameralayer', 'propertyindex', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get propertyIndex',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyIndex' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_propertyDepth',
        label: 'CameraLayer Get propertyDepth',
        keywords: ['cameralayer', 'propertydepth', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get propertyDepth',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyDepth' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_propertyType',
        label: 'CameraLayer Get propertyType',
        keywords: ['cameralayer', 'propertytype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get propertyType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_parentProperty',
        label: 'CameraLayer Get parentProperty',
        keywords: ['cameralayer', 'parentproperty', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get parentProperty',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentProperty' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_isModified',
        label: 'CameraLayer Get isModified',
        keywords: ['cameralayer', 'ismodified', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get isModified',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isModified' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_canSetEnabled',
        label: 'CameraLayer Get canSetEnabled',
        keywords: ['cameralayer', 'cansetenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get canSetEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_elided',
        label: 'CameraLayer Get elided',
        keywords: ['cameralayer', 'elided', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get elided',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'elided' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_isEffect',
        label: 'CameraLayer Get isEffect',
        keywords: ['cameralayer', 'iseffect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get isEffect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isEffect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_isMask',
        label: 'CameraLayer Get isMask',
        keywords: ['cameralayer', 'ismask', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get isMask',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMask' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_get_selected',
        label: 'CameraLayer Get selected',
        keywords: ['cameralayer', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_moveToBeginning',
        label: 'CameraLayer moveToBeginning',
        keywords: ['cameralayer', 'movetobeginning'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer moveToBeginning',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_moveToEnd',
        label: 'CameraLayer moveToEnd',
        keywords: ['cameralayer', 'movetoend'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer moveToEnd',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_moveAfter',
        label: 'CameraLayer moveAfter',
        keywords: ['cameralayer', 'moveafter'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer moveAfter',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' },
              { id: 'layer', label: 'layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_moveBefore',
        label: 'CameraLayer moveBefore',
        keywords: ['cameralayer', 'movebefore'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer moveBefore',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' },
              { id: 'layer', label: 'layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_duplicate',
        label: 'CameraLayer duplicate',
        keywords: ['cameralayer', 'duplicate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer duplicate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_copyToComp',
        label: 'CameraLayer copyToComp',
        keywords: ['cameralayer', 'copytocomp'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer copyToComp',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' },
              { id: 'intoComp', label: 'intoComp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_activeAtTime',
        label: 'CameraLayer activeAtTime',
        keywords: ['cameralayer', 'activeattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer activeAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_setParentWithJump',
        label: 'CameraLayer setParentWithJump',
        keywords: ['cameralayer', 'setparentwithjump'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer setParentWithJump',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' },
              { id: 'newParent', label: 'newParent', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_applyPreset',
        label: 'CameraLayer applyPreset',
        keywords: ['cameralayer', 'applypreset'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer applyPreset',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' },
              { id: 'presetName', label: 'presetName', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_canAddProperty',
        label: 'CameraLayer canAddProperty',
        keywords: ['cameralayer', 'canaddproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer canAddProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_addProperty',
        label: 'CameraLayer addProperty',
        keywords: ['cameralayer', 'addproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer addProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_propertyGroup',
        label: 'CameraLayer propertyGroup',
        keywords: ['cameralayer', 'propertygroup'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer propertyGroup',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' },
              { id: 'countUp', label: 'countUp', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_remove',
        label: 'CameraLayer remove',
        keywords: ['cameralayer', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_moveTo',
        label: 'CameraLayer moveTo',
        keywords: ['cameralayer', 'moveto'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer moveTo',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' },
              { id: 'newIndex', label: 'newIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_property_index',
        label: 'CameraLayer property (index)',
        keywords: ['cameralayer', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer property (index)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CameraLayer_property_name',
        label: 'CameraLayer property (name)',
        keywords: ['cameralayer', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CameraLayer property (name)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CameraLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'Collection',
    items: [
      {
        type: 'ae_Collection_get_length',
        label: 'Collection Get length',
        keywords: ['collection', 'length', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Collection Get length',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Collection', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'length' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'CompItem',
    items: [
      {
        type: 'ae_CompItem_get_numLayers',
        label: 'CompItem Get numLayers',
        keywords: ['compitem', 'numlayers', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get numLayers',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numLayers' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_activeCamera',
        label: 'CompItem Get activeCamera',
        keywords: ['compitem', 'activecamera', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get activeCamera',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'activeCamera' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_layers',
        label: 'CompItem Get layers',
        keywords: ['compitem', 'layers', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get layers',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'layers' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_markerProperty',
        label: 'CompItem Get markerProperty',
        keywords: ['compitem', 'markerproperty', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get markerProperty',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'markerProperty' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_selectedLayers',
        label: 'CompItem Get selectedLayers',
        keywords: ['compitem', 'selectedlayers', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get selectedLayers',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selectedLayers' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_selectedProperties',
        label: 'CompItem Get selectedProperties',
        keywords: ['compitem', 'selectedproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get selectedProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selectedProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_renderers',
        label: 'CompItem Get renderers',
        keywords: ['compitem', 'renderers', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get renderers',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'renderers' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_motionGraphicsTemplateControllerCount',
        label: 'CompItem Get motionGraphicsTemplateControllerCount',
        keywords: ['compitem', 'motiongraphicstemplatecontrollercount', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get motionGraphicsTemplateControllerCount',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'motionGraphicsTemplateControllerCount' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_frameDuration',
        label: 'CompItem Get frameDuration',
        keywords: ['compitem', 'frameduration', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get frameDuration',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameDuration' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_workAreaStart',
        label: 'CompItem Get workAreaStart',
        keywords: ['compitem', 'workareastart', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get workAreaStart',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'workAreaStart' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_workAreaDuration',
        label: 'CompItem Get workAreaDuration',
        keywords: ['compitem', 'workareaduration', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get workAreaDuration',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'workAreaDuration' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_hideShyLayers',
        label: 'CompItem Get hideShyLayers',
        keywords: ['compitem', 'hideshylayers', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get hideShyLayers',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hideShyLayers' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_motionBlur',
        label: 'CompItem Get motionBlur',
        keywords: ['compitem', 'motionblur', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get motionBlur',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'motionBlur' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_draft3d',
        label: 'CompItem Get draft3d',
        keywords: ['compitem', 'draft3d', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get draft3d',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'draft3d' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_frameBlending',
        label: 'CompItem Get frameBlending',
        keywords: ['compitem', 'frameblending', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get frameBlending',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameBlending' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_preserveNestedFrameRate',
        label: 'CompItem Get preserveNestedFrameRate',
        keywords: ['compitem', 'preservenestedframerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get preserveNestedFrameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'preserveNestedFrameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_preserveNestedResolution',
        label: 'CompItem Get preserveNestedResolution',
        keywords: ['compitem', 'preservenestedresolution', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get preserveNestedResolution',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'preserveNestedResolution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_bgColor',
        label: 'CompItem Get bgColor',
        keywords: ['compitem', 'bgcolor', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get bgColor',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'bgColor' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_displayStartTime',
        label: 'CompItem Get displayStartTime',
        keywords: ['compitem', 'displaystarttime', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get displayStartTime',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'displayStartTime' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_resolutionFactor',
        label: 'CompItem Get resolutionFactor',
        keywords: ['compitem', 'resolutionfactor', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get resolutionFactor',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'resolutionFactor' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_shutterAngle',
        label: 'CompItem Get shutterAngle',
        keywords: ['compitem', 'shutterangle', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get shutterAngle',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'shutterAngle' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_shutterPhase',
        label: 'CompItem Get shutterPhase',
        keywords: ['compitem', 'shutterphase', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get shutterPhase',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'shutterPhase' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_motionBlurSamplesPerFrame',
        label: 'CompItem Get motionBlurSamplesPerFrame',
        keywords: ['compitem', 'motionblursamplesperframe', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get motionBlurSamplesPerFrame',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'motionBlurSamplesPerFrame' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_motionBlurAdaptiveSampleLimit',
        label: 'CompItem Get motionBlurAdaptiveSampleLimit',
        keywords: ['compitem', 'motionbluradaptivesamplelimit', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get motionBlurAdaptiveSampleLimit',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'motionBlurAdaptiveSampleLimit' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_motionGraphicsTemplateName',
        label: 'CompItem Get motionGraphicsTemplateName',
        keywords: ['compitem', 'motiongraphicstemplatename', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get motionGraphicsTemplateName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'motionGraphicsTemplateName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_renderer',
        label: 'CompItem Get renderer',
        keywords: ['compitem', 'renderer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get renderer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'renderer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_dropFrame',
        label: 'CompItem Get dropFrame',
        keywords: ['compitem', 'dropframe', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get dropFrame',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'dropFrame' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_displayStartFrame',
        label: 'CompItem Get displayStartFrame',
        keywords: ['compitem', 'displaystartframe', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get displayStartFrame',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'displayStartFrame' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_proxySource',
        label: 'CompItem Get proxySource',
        keywords: ['compitem', 'proxysource', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get proxySource',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'proxySource' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_usedIn',
        label: 'CompItem Get usedIn',
        keywords: ['compitem', 'usedin', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get usedIn',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'usedIn' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_hasVideo',
        label: 'CompItem Get hasVideo',
        keywords: ['compitem', 'hasvideo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get hasVideo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasVideo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_hasAudio',
        label: 'CompItem Get hasAudio',
        keywords: ['compitem', 'hasaudio', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get hasAudio',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasAudio' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_footageMissing',
        label: 'CompItem Get footageMissing',
        keywords: ['compitem', 'footagemissing', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get footageMissing',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'footageMissing' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_isMediaReplacementCompatible',
        label: 'CompItem Get isMediaReplacementCompatible',
        keywords: ['compitem', 'ismediareplacementcompatible', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get isMediaReplacementCompatible',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMediaReplacementCompatible' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_width',
        label: 'CompItem Get width',
        keywords: ['compitem', 'width', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get width',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'width' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_height',
        label: 'CompItem Get height',
        keywords: ['compitem', 'height', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get height',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'height' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_pixelAspect',
        label: 'CompItem Get pixelAspect',
        keywords: ['compitem', 'pixelaspect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get pixelAspect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'pixelAspect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_frameRate',
        label: 'CompItem Get frameRate',
        keywords: ['compitem', 'framerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get frameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_duration',
        label: 'CompItem Get duration',
        keywords: ['compitem', 'duration', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get duration',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'duration' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_useProxy',
        label: 'CompItem Get useProxy',
        keywords: ['compitem', 'useproxy', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get useProxy',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'useProxy' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_time',
        label: 'CompItem Get time',
        keywords: ['compitem', 'time', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get time',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'time' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_id',
        label: 'CompItem Get id',
        keywords: ['compitem', 'id', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get id',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'id' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_typeName',
        label: 'CompItem Get typeName',
        keywords: ['compitem', 'typename', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get typeName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'typeName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_name',
        label: 'CompItem Get name',
        keywords: ['compitem', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_comment',
        label: 'CompItem Get comment',
        keywords: ['compitem', 'comment', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get comment',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comment' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_parentFolder',
        label: 'CompItem Get parentFolder',
        keywords: ['compitem', 'parentfolder', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get parentFolder',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentFolder' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_selected',
        label: 'CompItem Get selected',
        keywords: ['compitem', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_get_label',
        label: 'CompItem Get label',
        keywords: ['compitem', 'label', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem Get label',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'label' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_duplicate',
        label: 'CompItem duplicate',
        keywords: ['compitem', 'duplicate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem duplicate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_layer_index',
        label: 'CompItem layer (index)',
        keywords: ['compitem', 'layer'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem layer (index)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_layer_otherLayer_relIndex',
        label: 'CompItem layer (otherLayer, relIndex)',
        keywords: ['compitem', 'layer'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem layer (otherLayer, relIndex)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'otherLayer', label: 'otherLayer', type: 'expr' },
              { id: 'relIndex', label: 'relIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_layer_name',
        label: 'CompItem layer (name)',
        keywords: ['compitem', 'layer'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem layer (name)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_openInViewer',
        label: 'CompItem openInViewer',
        keywords: ['compitem', 'openinviewer'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem openInViewer',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_saveFrameToPng',
        label: 'CompItem saveFrameToPng',
        keywords: ['compitem', 'saveframetopng'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem saveFrameToPng',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' },
              { id: 'file', label: 'file', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_ramPreviewTest',
        label: 'CompItem ramPreviewTest',
        keywords: ['compitem', 'rampreviewtest'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem ramPreviewTest',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'unknown', label: 'unknown', type: 'expr' },
              { id: 'zoom', label: 'zoom', type: 'number' },
              { id: 'exposure', label: 'exposure', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_exportAsMotionGraphicsTemplate',
        label: 'CompItem exportAsMotionGraphicsTemplate',
        keywords: ['compitem', 'exportasmotiongraphicstemplate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem exportAsMotionGraphicsTemplate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'doOverWriteFileIfExisting', label: 'doOverWriteFileIfExisting', type: 'boolean' },
              { id: 'file_path', label: 'file_path', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_openInEssentialGraphics',
        label: 'CompItem openInEssentialGraphics',
        keywords: ['compitem', 'openinessentialgraphics'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem openInEssentialGraphics',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_getMotionGraphicsTemplateControllerName',
        label: 'CompItem getMotionGraphicsTemplateControllerName',
        keywords: ['compitem', 'getmotiongraphicstemplatecontrollername'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem getMotionGraphicsTemplateControllerName',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_setMotionGraphicsControllerName',
        label: 'CompItem setMotionGraphicsControllerName',
        keywords: ['compitem', 'setmotiongraphicscontrollername'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem setMotionGraphicsControllerName',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' },
              { id: 'newName', label: 'newName', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_setProxy',
        label: 'CompItem setProxy',
        keywords: ['compitem', 'setproxy'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem setProxy',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_setProxyWithSequence',
        label: 'CompItem setProxyWithSequence',
        keywords: ['compitem', 'setproxywithsequence'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem setProxyWithSequence',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' },
              { id: 'forceAlphabetical', label: 'forceAlphabetical', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_setProxyWithSolid',
        label: 'CompItem setProxyWithSolid',
        keywords: ['compitem', 'setproxywithsolid'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem setProxyWithSolid',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'color', label: 'color', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'pixelAspect', label: 'pixelAspect', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_setProxyWithPlaceholder',
        label: 'CompItem setProxyWithPlaceholder',
        keywords: ['compitem', 'setproxywithplaceholder'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem setProxyWithPlaceholder',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'frameRate', label: 'frameRate', type: 'number' },
              { id: 'duration', label: 'duration', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_setProxyToNone',
        label: 'CompItem setProxyToNone',
        keywords: ['compitem', 'setproxytonone'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem setProxyToNone',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_addGuide',
        label: 'CompItem addGuide',
        keywords: ['compitem', 'addguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem addGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'orientationType', label: 'orientationType', type: 'number' },
              { id: 'position', label: 'position', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_removeGuide',
        label: 'CompItem removeGuide',
        keywords: ['compitem', 'removeguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem removeGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'guideIndex', label: 'guideIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_setGuide',
        label: 'CompItem setGuide',
        keywords: ['compitem', 'setguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem setGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' },
              { id: 'position', label: 'position', type: 'number' },
              { id: 'guideIndex', label: 'guideIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_CompItem_remove',
        label: 'CompItem remove',
        keywords: ['compitem', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'CompItem remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'CompItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'FileSource',
    items: [
      {
        type: 'ae_FileSource_get_file',
        label: 'FileSource Get file',
        keywords: ['filesource', 'file', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get file',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'file' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_get_missingFootagePath',
        label: 'FileSource Get missingFootagePath',
        keywords: ['filesource', 'missingfootagepath', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get missingFootagePath',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'missingFootagePath' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_get_isStill',
        label: 'FileSource Get isStill',
        keywords: ['filesource', 'isstill', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get isStill',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isStill' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_get_displayFrameRate',
        label: 'FileSource Get displayFrameRate',
        keywords: ['filesource', 'displayframerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get displayFrameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'displayFrameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_get_hasAlpha',
        label: 'FileSource Get hasAlpha',
        keywords: ['filesource', 'hasalpha', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get hasAlpha',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasAlpha' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_get_alphaMode',
        label: 'FileSource Get alphaMode',
        keywords: ['filesource', 'alphamode', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get alphaMode',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'alphaMode' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_get_premulColor',
        label: 'FileSource Get premulColor',
        keywords: ['filesource', 'premulcolor', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get premulColor',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'premulColor' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_get_invertAlpha',
        label: 'FileSource Get invertAlpha',
        keywords: ['filesource', 'invertalpha', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get invertAlpha',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'invertAlpha' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_get_fieldSeparationType',
        label: 'FileSource Get fieldSeparationType',
        keywords: ['filesource', 'fieldseparationtype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get fieldSeparationType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'fieldSeparationType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_get_highQualityFieldSeparation',
        label: 'FileSource Get highQualityFieldSeparation',
        keywords: ['filesource', 'highqualityfieldseparation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get highQualityFieldSeparation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'highQualityFieldSeparation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_get_removePulldown',
        label: 'FileSource Get removePulldown',
        keywords: ['filesource', 'removepulldown', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get removePulldown',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'removePulldown' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_get_loop',
        label: 'FileSource Get loop',
        keywords: ['filesource', 'loop', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get loop',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'loop' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_get_nativeFrameRate',
        label: 'FileSource Get nativeFrameRate',
        keywords: ['filesource', 'nativeframerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get nativeFrameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'nativeFrameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_get_conformFrameRate',
        label: 'FileSource Get conformFrameRate',
        keywords: ['filesource', 'conformframerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource Get conformFrameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'conformFrameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_reload',
        label: 'FileSource reload',
        keywords: ['filesource', 'reload'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource reload',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_guessAlphaMode',
        label: 'FileSource guessAlphaMode',
        keywords: ['filesource', 'guessalphamode'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource guessAlphaMode',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FileSource', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FileSource_guessPulldown',
        label: 'FileSource guessPulldown',
        keywords: ['filesource', 'guesspulldown'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FileSource guessPulldown',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FileSource', type: 'expr' },
              { id: 'method', label: 'method', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'FolderItem',
    items: [
      {
        type: 'ae_FolderItem_get_items',
        label: 'FolderItem Get items',
        keywords: ['folderitem', 'items', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem Get items',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FolderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'items' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FolderItem_get_numItems',
        label: 'FolderItem Get numItems',
        keywords: ['folderitem', 'numitems', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem Get numItems',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FolderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numItems' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FolderItem_get_id',
        label: 'FolderItem Get id',
        keywords: ['folderitem', 'id', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem Get id',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FolderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'id' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FolderItem_get_typeName',
        label: 'FolderItem Get typeName',
        keywords: ['folderitem', 'typename', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem Get typeName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FolderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'typeName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FolderItem_get_name',
        label: 'FolderItem Get name',
        keywords: ['folderitem', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FolderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FolderItem_get_comment',
        label: 'FolderItem Get comment',
        keywords: ['folderitem', 'comment', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem Get comment',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FolderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comment' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FolderItem_get_parentFolder',
        label: 'FolderItem Get parentFolder',
        keywords: ['folderitem', 'parentfolder', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem Get parentFolder',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FolderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentFolder' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FolderItem_get_selected',
        label: 'FolderItem Get selected',
        keywords: ['folderitem', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FolderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FolderItem_get_label',
        label: 'FolderItem Get label',
        keywords: ['folderitem', 'label', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem Get label',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FolderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'label' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FolderItem_item',
        label: 'FolderItem item',
        keywords: ['folderitem', 'item'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem item',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FolderItem', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FolderItem_addGuide',
        label: 'FolderItem addGuide',
        keywords: ['folderitem', 'addguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem addGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FolderItem', type: 'expr' },
              { id: 'orientationType', label: 'orientationType', type: 'number' },
              { id: 'position', label: 'position', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FolderItem_removeGuide',
        label: 'FolderItem removeGuide',
        keywords: ['folderitem', 'removeguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem removeGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FolderItem', type: 'expr' },
              { id: 'guideIndex', label: 'guideIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FolderItem_setGuide',
        label: 'FolderItem setGuide',
        keywords: ['folderitem', 'setguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem setGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FolderItem', type: 'expr' },
              { id: 'position', label: 'position', type: 'number' },
              { id: 'guideIndex', label: 'guideIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FolderItem_remove',
        label: 'FolderItem remove',
        keywords: ['folderitem', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FolderItem remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FolderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'FootageItem',
    items: [
      {
        type: 'ae_FootageItem_get_file',
        label: 'FootageItem Get file',
        keywords: ['footageitem', 'file', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get file',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'file' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_mainSource',
        label: 'FootageItem Get mainSource',
        keywords: ['footageitem', 'mainsource', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get mainSource',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'mainSource' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_proxySource',
        label: 'FootageItem Get proxySource',
        keywords: ['footageitem', 'proxysource', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get proxySource',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'proxySource' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_usedIn',
        label: 'FootageItem Get usedIn',
        keywords: ['footageitem', 'usedin', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get usedIn',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'usedIn' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_hasVideo',
        label: 'FootageItem Get hasVideo',
        keywords: ['footageitem', 'hasvideo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get hasVideo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasVideo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_hasAudio',
        label: 'FootageItem Get hasAudio',
        keywords: ['footageitem', 'hasaudio', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get hasAudio',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasAudio' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_footageMissing',
        label: 'FootageItem Get footageMissing',
        keywords: ['footageitem', 'footagemissing', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get footageMissing',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'footageMissing' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_isMediaReplacementCompatible',
        label: 'FootageItem Get isMediaReplacementCompatible',
        keywords: ['footageitem', 'ismediareplacementcompatible', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get isMediaReplacementCompatible',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMediaReplacementCompatible' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_width',
        label: 'FootageItem Get width',
        keywords: ['footageitem', 'width', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get width',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'width' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_height',
        label: 'FootageItem Get height',
        keywords: ['footageitem', 'height', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get height',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'height' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_pixelAspect',
        label: 'FootageItem Get pixelAspect',
        keywords: ['footageitem', 'pixelaspect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get pixelAspect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'pixelAspect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_frameRate',
        label: 'FootageItem Get frameRate',
        keywords: ['footageitem', 'framerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get frameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_frameDuration',
        label: 'FootageItem Get frameDuration',
        keywords: ['footageitem', 'frameduration', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get frameDuration',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameDuration' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_duration',
        label: 'FootageItem Get duration',
        keywords: ['footageitem', 'duration', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get duration',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'duration' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_useProxy',
        label: 'FootageItem Get useProxy',
        keywords: ['footageitem', 'useproxy', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get useProxy',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'useProxy' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_time',
        label: 'FootageItem Get time',
        keywords: ['footageitem', 'time', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get time',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'time' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_id',
        label: 'FootageItem Get id',
        keywords: ['footageitem', 'id', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get id',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'id' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_typeName',
        label: 'FootageItem Get typeName',
        keywords: ['footageitem', 'typename', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get typeName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'typeName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_name',
        label: 'FootageItem Get name',
        keywords: ['footageitem', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_comment',
        label: 'FootageItem Get comment',
        keywords: ['footageitem', 'comment', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get comment',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comment' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_parentFolder',
        label: 'FootageItem Get parentFolder',
        keywords: ['footageitem', 'parentfolder', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get parentFolder',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentFolder' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_selected',
        label: 'FootageItem Get selected',
        keywords: ['footageitem', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_get_label',
        label: 'FootageItem Get label',
        keywords: ['footageitem', 'label', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem Get label',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'label' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_openInViewer',
        label: 'FootageItem openInViewer',
        keywords: ['footageitem', 'openinviewer'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem openInViewer',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_replace',
        label: 'FootageItem replace',
        keywords: ['footageitem', 'replace'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem replace',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_replaceWithPlaceholder',
        label: 'FootageItem replaceWithPlaceholder',
        keywords: ['footageitem', 'replacewithplaceholder'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem replaceWithPlaceholder',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'frameRate', label: 'frameRate', type: 'number' },
              { id: 'duration', label: 'duration', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_replaceWithSequence',
        label: 'FootageItem replaceWithSequence',
        keywords: ['footageitem', 'replacewithsequence'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem replaceWithSequence',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' },
              { id: 'forceAlphabetical', label: 'forceAlphabetical', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_replaceWithSolid',
        label: 'FootageItem replaceWithSolid',
        keywords: ['footageitem', 'replacewithsolid'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem replaceWithSolid',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' },
              { id: 'color', label: 'color', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'pixelAspect', label: 'pixelAspect', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_setProxy',
        label: 'FootageItem setProxy',
        keywords: ['footageitem', 'setproxy'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem setProxy',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_setProxyWithSequence',
        label: 'FootageItem setProxyWithSequence',
        keywords: ['footageitem', 'setproxywithsequence'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem setProxyWithSequence',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' },
              { id: 'forceAlphabetical', label: 'forceAlphabetical', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_setProxyWithSolid',
        label: 'FootageItem setProxyWithSolid',
        keywords: ['footageitem', 'setproxywithsolid'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem setProxyWithSolid',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' },
              { id: 'color', label: 'color', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'pixelAspect', label: 'pixelAspect', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_setProxyWithPlaceholder',
        label: 'FootageItem setProxyWithPlaceholder',
        keywords: ['footageitem', 'setproxywithplaceholder'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem setProxyWithPlaceholder',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'frameRate', label: 'frameRate', type: 'number' },
              { id: 'duration', label: 'duration', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_setProxyToNone',
        label: 'FootageItem setProxyToNone',
        keywords: ['footageitem', 'setproxytonone'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem setProxyToNone',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_addGuide',
        label: 'FootageItem addGuide',
        keywords: ['footageitem', 'addguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem addGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' },
              { id: 'orientationType', label: 'orientationType', type: 'number' },
              { id: 'position', label: 'position', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_removeGuide',
        label: 'FootageItem removeGuide',
        keywords: ['footageitem', 'removeguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem removeGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' },
              { id: 'guideIndex', label: 'guideIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_setGuide',
        label: 'FootageItem setGuide',
        keywords: ['footageitem', 'setguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem setGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' },
              { id: 'position', label: 'position', type: 'number' },
              { id: 'guideIndex', label: 'guideIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageItem_remove',
        label: 'FootageItem remove',
        keywords: ['footageitem', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageItem remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'PlaceholderItem',
    items: [
      {
        type: 'ae_PlaceholderItem_get_file',
        label: 'PlaceholderItem Get file',
        keywords: ['placeholderitem', 'file', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get file',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'file' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_mainSource',
        label: 'PlaceholderItem Get mainSource',
        keywords: ['placeholderitem', 'mainsource', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get mainSource',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'mainSource' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_proxySource',
        label: 'PlaceholderItem Get proxySource',
        keywords: ['placeholderitem', 'proxysource', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get proxySource',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'proxySource' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_usedIn',
        label: 'PlaceholderItem Get usedIn',
        keywords: ['placeholderitem', 'usedin', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get usedIn',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'usedIn' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_hasVideo',
        label: 'PlaceholderItem Get hasVideo',
        keywords: ['placeholderitem', 'hasvideo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get hasVideo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasVideo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_hasAudio',
        label: 'PlaceholderItem Get hasAudio',
        keywords: ['placeholderitem', 'hasaudio', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get hasAudio',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasAudio' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_footageMissing',
        label: 'PlaceholderItem Get footageMissing',
        keywords: ['placeholderitem', 'footagemissing', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get footageMissing',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'footageMissing' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_isMediaReplacementCompatible',
        label: 'PlaceholderItem Get isMediaReplacementCompatible',
        keywords: ['placeholderitem', 'ismediareplacementcompatible', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get isMediaReplacementCompatible',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMediaReplacementCompatible' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_width',
        label: 'PlaceholderItem Get width',
        keywords: ['placeholderitem', 'width', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get width',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'width' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_height',
        label: 'PlaceholderItem Get height',
        keywords: ['placeholderitem', 'height', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get height',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'height' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_pixelAspect',
        label: 'PlaceholderItem Get pixelAspect',
        keywords: ['placeholderitem', 'pixelaspect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get pixelAspect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'pixelAspect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_frameRate',
        label: 'PlaceholderItem Get frameRate',
        keywords: ['placeholderitem', 'framerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get frameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_frameDuration',
        label: 'PlaceholderItem Get frameDuration',
        keywords: ['placeholderitem', 'frameduration', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get frameDuration',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameDuration' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_duration',
        label: 'PlaceholderItem Get duration',
        keywords: ['placeholderitem', 'duration', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get duration',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'duration' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_useProxy',
        label: 'PlaceholderItem Get useProxy',
        keywords: ['placeholderitem', 'useproxy', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get useProxy',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'useProxy' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_time',
        label: 'PlaceholderItem Get time',
        keywords: ['placeholderitem', 'time', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get time',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'time' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_id',
        label: 'PlaceholderItem Get id',
        keywords: ['placeholderitem', 'id', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get id',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'id' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_typeName',
        label: 'PlaceholderItem Get typeName',
        keywords: ['placeholderitem', 'typename', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get typeName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'typeName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_name',
        label: 'PlaceholderItem Get name',
        keywords: ['placeholderitem', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_comment',
        label: 'PlaceholderItem Get comment',
        keywords: ['placeholderitem', 'comment', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get comment',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comment' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_parentFolder',
        label: 'PlaceholderItem Get parentFolder',
        keywords: ['placeholderitem', 'parentfolder', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get parentFolder',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentFolder' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_selected',
        label: 'PlaceholderItem Get selected',
        keywords: ['placeholderitem', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_get_label',
        label: 'PlaceholderItem Get label',
        keywords: ['placeholderitem', 'label', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem Get label',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'label' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_openInViewer',
        label: 'PlaceholderItem openInViewer',
        keywords: ['placeholderitem', 'openinviewer'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem openInViewer',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_replace',
        label: 'PlaceholderItem replace',
        keywords: ['placeholderitem', 'replace'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem replace',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_replaceWithPlaceholder',
        label: 'PlaceholderItem replaceWithPlaceholder',
        keywords: ['placeholderitem', 'replacewithplaceholder'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem replaceWithPlaceholder',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'frameRate', label: 'frameRate', type: 'number' },
              { id: 'duration', label: 'duration', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_replaceWithSequence',
        label: 'PlaceholderItem replaceWithSequence',
        keywords: ['placeholderitem', 'replacewithsequence'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem replaceWithSequence',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' },
              { id: 'forceAlphabetical', label: 'forceAlphabetical', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_replaceWithSolid',
        label: 'PlaceholderItem replaceWithSolid',
        keywords: ['placeholderitem', 'replacewithsolid'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem replaceWithSolid',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' },
              { id: 'color', label: 'color', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'pixelAspect', label: 'pixelAspect', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_setProxy',
        label: 'PlaceholderItem setProxy',
        keywords: ['placeholderitem', 'setproxy'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem setProxy',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_setProxyWithSequence',
        label: 'PlaceholderItem setProxyWithSequence',
        keywords: ['placeholderitem', 'setproxywithsequence'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem setProxyWithSequence',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' },
              { id: 'forceAlphabetical', label: 'forceAlphabetical', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_setProxyWithSolid',
        label: 'PlaceholderItem setProxyWithSolid',
        keywords: ['placeholderitem', 'setproxywithsolid'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem setProxyWithSolid',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' },
              { id: 'color', label: 'color', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'pixelAspect', label: 'pixelAspect', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_setProxyWithPlaceholder',
        label: 'PlaceholderItem setProxyWithPlaceholder',
        keywords: ['placeholderitem', 'setproxywithplaceholder'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem setProxyWithPlaceholder',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'frameRate', label: 'frameRate', type: 'number' },
              { id: 'duration', label: 'duration', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_setProxyToNone',
        label: 'PlaceholderItem setProxyToNone',
        keywords: ['placeholderitem', 'setproxytonone'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem setProxyToNone',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_addGuide',
        label: 'PlaceholderItem addGuide',
        keywords: ['placeholderitem', 'addguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem addGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' },
              { id: 'orientationType', label: 'orientationType', type: 'number' },
              { id: 'position', label: 'position', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_removeGuide',
        label: 'PlaceholderItem removeGuide',
        keywords: ['placeholderitem', 'removeguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem removeGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' },
              { id: 'guideIndex', label: 'guideIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_setGuide',
        label: 'PlaceholderItem setGuide',
        keywords: ['placeholderitem', 'setguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem setGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' },
              { id: 'position', label: 'position', type: 'number' },
              { id: 'guideIndex', label: 'guideIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderItem_remove',
        label: 'PlaceholderItem remove',
        keywords: ['placeholderitem', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderItem remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'FootageSource',
    items: [
      {
        type: 'ae_FootageSource_get_file',
        label: 'FootageSource Get file',
        keywords: ['footagesource', 'file', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource Get file',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'file' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_get_isStill',
        label: 'FootageSource Get isStill',
        keywords: ['footagesource', 'isstill', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource Get isStill',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isStill' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_get_displayFrameRate',
        label: 'FootageSource Get displayFrameRate',
        keywords: ['footagesource', 'displayframerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource Get displayFrameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'displayFrameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_get_hasAlpha',
        label: 'FootageSource Get hasAlpha',
        keywords: ['footagesource', 'hasalpha', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource Get hasAlpha',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasAlpha' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_get_alphaMode',
        label: 'FootageSource Get alphaMode',
        keywords: ['footagesource', 'alphamode', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource Get alphaMode',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'alphaMode' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_get_premulColor',
        label: 'FootageSource Get premulColor',
        keywords: ['footagesource', 'premulcolor', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource Get premulColor',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'premulColor' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_get_invertAlpha',
        label: 'FootageSource Get invertAlpha',
        keywords: ['footagesource', 'invertalpha', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource Get invertAlpha',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'invertAlpha' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_get_fieldSeparationType',
        label: 'FootageSource Get fieldSeparationType',
        keywords: ['footagesource', 'fieldseparationtype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource Get fieldSeparationType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'fieldSeparationType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_get_highQualityFieldSeparation',
        label: 'FootageSource Get highQualityFieldSeparation',
        keywords: ['footagesource', 'highqualityfieldseparation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource Get highQualityFieldSeparation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'highQualityFieldSeparation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_get_removePulldown',
        label: 'FootageSource Get removePulldown',
        keywords: ['footagesource', 'removepulldown', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource Get removePulldown',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'removePulldown' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_get_loop',
        label: 'FootageSource Get loop',
        keywords: ['footagesource', 'loop', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource Get loop',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'loop' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_get_nativeFrameRate',
        label: 'FootageSource Get nativeFrameRate',
        keywords: ['footagesource', 'nativeframerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource Get nativeFrameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'nativeFrameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_get_conformFrameRate',
        label: 'FootageSource Get conformFrameRate',
        keywords: ['footagesource', 'conformframerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource Get conformFrameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'conformFrameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_guessAlphaMode',
        label: 'FootageSource guessAlphaMode',
        keywords: ['footagesource', 'guessalphamode'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource guessAlphaMode',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageSource', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_FootageSource_guessPulldown',
        label: 'FootageSource guessPulldown',
        keywords: ['footagesource', 'guesspulldown'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'FootageSource guessPulldown',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'FootageSource', type: 'expr' },
              { id: 'method', label: 'method', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'ImportOptions',
    items: [
      {
        type: 'ae_ImportOptions_get_importAs',
        label: 'ImportOptions Get importAs',
        keywords: ['importoptions', 'importas', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ImportOptions Get importAs',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ImportOptions', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'importAs' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ImportOptions_get_sequence',
        label: 'ImportOptions Get sequence',
        keywords: ['importoptions', 'sequence', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ImportOptions Get sequence',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ImportOptions', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'sequence' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ImportOptions_get_forceAlphabetical',
        label: 'ImportOptions Get forceAlphabetical',
        keywords: ['importoptions', 'forcealphabetical', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ImportOptions Get forceAlphabetical',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ImportOptions', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'forceAlphabetical' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ImportOptions_get_file',
        label: 'ImportOptions Get file',
        keywords: ['importoptions', 'file', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ImportOptions Get file',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ImportOptions', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'file' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ImportOptions_canImportAs',
        label: 'ImportOptions canImportAs',
        keywords: ['importoptions', 'canimportas'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ImportOptions canImportAs',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ImportOptions', type: 'expr' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'Item',
    items: [
      {
        type: 'ae_Item_get_id',
        label: 'Item Get id',
        keywords: ['item', 'id', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Item Get id',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Item', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'id' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Item_get_typeName',
        label: 'Item Get typeName',
        keywords: ['item', 'typename', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Item Get typeName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Item', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'typeName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Item_get_name',
        label: 'Item Get name',
        keywords: ['item', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Item Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Item', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Item_get_comment',
        label: 'Item Get comment',
        keywords: ['item', 'comment', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Item Get comment',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Item', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comment' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Item_get_parentFolder',
        label: 'Item Get parentFolder',
        keywords: ['item', 'parentfolder', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Item Get parentFolder',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Item', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentFolder' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Item_get_selected',
        label: 'Item Get selected',
        keywords: ['item', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Item Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Item', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Item_get_label',
        label: 'Item Get label',
        keywords: ['item', 'label', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Item Get label',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Item', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'label' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Item_addGuide',
        label: 'Item addGuide',
        keywords: ['item', 'addguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Item addGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Item', type: 'expr' },
              { id: 'orientationType', label: 'orientationType', type: 'number' },
              { id: 'position', label: 'position', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Item_removeGuide',
        label: 'Item removeGuide',
        keywords: ['item', 'removeguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Item removeGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Item', type: 'expr' },
              { id: 'guideIndex', label: 'guideIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Item_setGuide',
        label: 'Item setGuide',
        keywords: ['item', 'setguide'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Item setGuide',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Item', type: 'expr' },
              { id: 'position', label: 'position', type: 'number' },
              { id: 'guideIndex', label: 'guideIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Item_remove',
        label: 'Item remove',
        keywords: ['item', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Item remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Item', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'ItemCollection',
    items: [
      {
        type: 'ae_ItemCollection_get_length',
        label: 'ItemCollection Get length',
        keywords: ['itemcollection', 'length', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ItemCollection Get length',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ItemCollection', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'length' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ItemCollection_addComp',
        label: 'ItemCollection addComp',
        keywords: ['itemcollection', 'addcomp'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ItemCollection addComp',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ItemCollection', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'pixelAspect', label: 'pixelAspect', type: 'number' },
              { id: 'duration', label: 'duration', type: 'number' },
              { id: 'frameRate', label: 'frameRate', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ItemCollection_addFolder',
        label: 'ItemCollection addFolder',
        keywords: ['itemcollection', 'addfolder'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ItemCollection addFolder',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ItemCollection', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'KeyframeEase',
    items: [
      {
        type: 'ae_KeyframeEase_get_speed',
        label: 'KeyframeEase Get speed',
        keywords: ['keyframeease', 'speed', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'KeyframeEase Get speed',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'KeyframeEase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'speed' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_KeyframeEase_get_influence',
        label: 'KeyframeEase Get influence',
        keywords: ['keyframeease', 'influence', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'KeyframeEase Get influence',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'KeyframeEase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'influence' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'Layer',
    items: [
      {
        type: 'ae_Layer_get_index',
        label: 'Layer Get index',
        keywords: ['layer', 'index', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get index',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'index' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_time',
        label: 'Layer Get time',
        keywords: ['layer', 'time', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get time',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'time' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_hasVideo',
        label: 'Layer Get hasVideo',
        keywords: ['layer', 'hasvideo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get hasVideo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasVideo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_active',
        label: 'Layer Get active',
        keywords: ['layer', 'active', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get active',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'active' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_nullLayer',
        label: 'Layer Get nullLayer',
        keywords: ['layer', 'nulllayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get nullLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'nullLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_selectedProperties',
        label: 'Layer Get selectedProperties',
        keywords: ['layer', 'selectedproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get selectedProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selectedProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_containingComp',
        label: 'Layer Get containingComp',
        keywords: ['layer', 'containingcomp', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get containingComp',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'containingComp' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_isNameSet',
        label: 'Layer Get isNameSet',
        keywords: ['layer', 'isnameset', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get isNameSet',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isNameSet' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_name',
        label: 'Layer Get name',
        keywords: ['layer', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_parent',
        label: 'Layer Get parent',
        keywords: ['layer', 'parent', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get parent',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parent' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_startTime',
        label: 'Layer Get startTime',
        keywords: ['layer', 'starttime', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get startTime',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'startTime' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_stretch',
        label: 'Layer Get stretch',
        keywords: ['layer', 'stretch', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get stretch',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'stretch' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_inPoint',
        label: 'Layer Get inPoint',
        keywords: ['layer', 'inpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get inPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'inPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_outPoint',
        label: 'Layer Get outPoint',
        keywords: ['layer', 'outpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get outPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'outPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_enabled',
        label: 'Layer Get enabled',
        keywords: ['layer', 'enabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get enabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'enabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_solo',
        label: 'Layer Get solo',
        keywords: ['layer', 'solo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get solo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'solo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_shy',
        label: 'Layer Get shy',
        keywords: ['layer', 'shy', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get shy',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'shy' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_locked',
        label: 'Layer Get locked',
        keywords: ['layer', 'locked', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get locked',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'locked' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_comment',
        label: 'Layer Get comment',
        keywords: ['layer', 'comment', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get comment',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comment' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_label',
        label: 'Layer Get label',
        keywords: ['layer', 'label', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get label',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'label' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_autoOrient',
        label: 'Layer Get autoOrient',
        keywords: ['layer', 'autoorient', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get autoOrient',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'autoOrient' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_marker',
        label: 'Layer Get marker',
        keywords: ['layer', 'marker', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get marker',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'marker' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_transform',
        label: 'Layer Get transform',
        keywords: ['layer', 'transform', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get transform',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'transform' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_anchorPoint',
        label: 'Layer Get anchorPoint',
        keywords: ['layer', 'anchorpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get anchorPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'anchorPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_position',
        label: 'Layer Get position',
        keywords: ['layer', 'position', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get position',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'position' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_xPosition',
        label: 'Layer Get xPosition',
        keywords: ['layer', 'xposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get xPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'xPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_yPosition',
        label: 'Layer Get yPosition',
        keywords: ['layer', 'yposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get yPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'yPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_zPosition',
        label: 'Layer Get zPosition',
        keywords: ['layer', 'zposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get zPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'zPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_scale',
        label: 'Layer Get scale',
        keywords: ['layer', 'scale', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get scale',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'scale' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_orientation',
        label: 'Layer Get orientation',
        keywords: ['layer', 'orientation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get orientation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'orientation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_rotation',
        label: 'Layer Get rotation',
        keywords: ['layer', 'rotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get rotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'rotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_xRotation',
        label: 'Layer Get xRotation',
        keywords: ['layer', 'xrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get xRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'xRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_yRotation',
        label: 'Layer Get yRotation',
        keywords: ['layer', 'yrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get yRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'yRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_zRotation',
        label: 'Layer Get zRotation',
        keywords: ['layer', 'zrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get zRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'zRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_opacity',
        label: 'Layer Get opacity',
        keywords: ['layer', 'opacity', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get opacity',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'opacity' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_pointOfInterest',
        label: 'Layer Get pointOfInterest',
        keywords: ['layer', 'pointofinterest', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get pointOfInterest',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'pointOfInterest' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_numProperties',
        label: 'Layer Get numProperties',
        keywords: ['layer', 'numproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get numProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_matchName',
        label: 'Layer Get matchName',
        keywords: ['layer', 'matchname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get matchName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'matchName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_propertyIndex',
        label: 'Layer Get propertyIndex',
        keywords: ['layer', 'propertyindex', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get propertyIndex',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyIndex' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_propertyDepth',
        label: 'Layer Get propertyDepth',
        keywords: ['layer', 'propertydepth', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get propertyDepth',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyDepth' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_propertyType',
        label: 'Layer Get propertyType',
        keywords: ['layer', 'propertytype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get propertyType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_parentProperty',
        label: 'Layer Get parentProperty',
        keywords: ['layer', 'parentproperty', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get parentProperty',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentProperty' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_isModified',
        label: 'Layer Get isModified',
        keywords: ['layer', 'ismodified', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get isModified',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isModified' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_canSetEnabled',
        label: 'Layer Get canSetEnabled',
        keywords: ['layer', 'cansetenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get canSetEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_elided',
        label: 'Layer Get elided',
        keywords: ['layer', 'elided', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get elided',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'elided' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_isEffect',
        label: 'Layer Get isEffect',
        keywords: ['layer', 'iseffect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get isEffect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isEffect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_isMask',
        label: 'Layer Get isMask',
        keywords: ['layer', 'ismask', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get isMask',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMask' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_get_selected',
        label: 'Layer Get selected',
        keywords: ['layer', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_moveToBeginning',
        label: 'Layer moveToBeginning',
        keywords: ['layer', 'movetobeginning'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer moveToBeginning',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_moveToEnd',
        label: 'Layer moveToEnd',
        keywords: ['layer', 'movetoend'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer moveToEnd',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_moveAfter',
        label: 'Layer moveAfter',
        keywords: ['layer', 'moveafter'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer moveAfter',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' },
              { id: 'layer', label: 'layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_moveBefore',
        label: 'Layer moveBefore',
        keywords: ['layer', 'movebefore'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer moveBefore',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' },
              { id: 'layer', label: 'layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_duplicate',
        label: 'Layer duplicate',
        keywords: ['layer', 'duplicate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer duplicate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_copyToComp',
        label: 'Layer copyToComp',
        keywords: ['layer', 'copytocomp'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer copyToComp',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' },
              { id: 'intoComp', label: 'intoComp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_activeAtTime',
        label: 'Layer activeAtTime',
        keywords: ['layer', 'activeattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer activeAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_setParentWithJump',
        label: 'Layer setParentWithJump',
        keywords: ['layer', 'setparentwithjump'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer setParentWithJump',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' },
              { id: 'newParent', label: 'newParent', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_applyPreset',
        label: 'Layer applyPreset',
        keywords: ['layer', 'applypreset'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer applyPreset',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' },
              { id: 'presetName', label: 'presetName', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_canAddProperty',
        label: 'Layer canAddProperty',
        keywords: ['layer', 'canaddproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer canAddProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_addProperty',
        label: 'Layer addProperty',
        keywords: ['layer', 'addproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer addProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_propertyGroup',
        label: 'Layer propertyGroup',
        keywords: ['layer', 'propertygroup'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer propertyGroup',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' },
              { id: 'countUp', label: 'countUp', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_remove',
        label: 'Layer remove',
        keywords: ['layer', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_moveTo',
        label: 'Layer moveTo',
        keywords: ['layer', 'moveto'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer moveTo',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' },
              { id: 'newIndex', label: 'newIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_property_index',
        label: 'Layer property (index)',
        keywords: ['layer', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer property (index)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Layer_property_name',
        label: 'Layer property (name)',
        keywords: ['layer', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Layer property (name)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Layer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'LayerCollection',
    items: [
      {
        type: 'ae_LayerCollection_get_length',
        label: 'LayerCollection Get length',
        keywords: ['layercollection', 'length', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LayerCollection Get length',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LayerCollection', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'length' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LayerCollection_add',
        label: 'LayerCollection add',
        keywords: ['layercollection', 'add'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LayerCollection add',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LayerCollection', type: 'expr' },
              { id: 'item', label: 'item', type: 'expr' },
              { id: 'duration', label: 'duration', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LayerCollection_addNull',
        label: 'LayerCollection addNull',
        keywords: ['layercollection', 'addnull'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LayerCollection addNull',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LayerCollection', type: 'expr' },
              { id: 'duration', label: 'duration', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LayerCollection_addSolid',
        label: 'LayerCollection addSolid',
        keywords: ['layercollection', 'addsolid'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LayerCollection addSolid',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LayerCollection', type: 'expr' },
              { id: 'color', label: 'color', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'pixelAspect', label: 'pixelAspect', type: 'number' },
              { id: 'duration', label: 'duration', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LayerCollection_addBoxText',
        label: 'LayerCollection addBoxText',
        keywords: ['layercollection', 'addboxtext'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LayerCollection addBoxText',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LayerCollection', type: 'expr' },
              { id: 'size', label: 'size', type: 'expr' },
              { id: 'sourceText', label: 'sourceText', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LayerCollection_addText',
        label: 'LayerCollection addText',
        keywords: ['layercollection', 'addtext'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LayerCollection addText',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LayerCollection', type: 'expr' },
              { id: 'sourceText', label: 'sourceText', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LayerCollection_addCamera',
        label: 'LayerCollection addCamera',
        keywords: ['layercollection', 'addcamera'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LayerCollection addCamera',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LayerCollection', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'centerPoint', label: 'centerPoint', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LayerCollection_addLight',
        label: 'LayerCollection addLight',
        keywords: ['layercollection', 'addlight'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LayerCollection addLight',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LayerCollection', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'centerPoint', label: 'centerPoint', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LayerCollection_addShape',
        label: 'LayerCollection addShape',
        keywords: ['layercollection', 'addshape'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LayerCollection addShape',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LayerCollection', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LayerCollection_byName',
        label: 'LayerCollection byName',
        keywords: ['layercollection', 'byname'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LayerCollection byName',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LayerCollection', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LayerCollection_precompose',
        label: 'LayerCollection precompose',
        keywords: ['layercollection', 'precompose'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LayerCollection precompose',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LayerCollection', type: 'expr' },
              { id: 'layerIndicies', label: 'layerIndicies', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'moveAllAttributes', label: 'moveAllAttributes', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'LightLayer',
    items: [
      {
        type: 'ae_LightLayer_get_lightOption',
        label: 'LightLayer Get lightOption',
        keywords: ['lightlayer', 'lightoption', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get lightOption',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'lightOption' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_lightType',
        label: 'LightLayer Get lightType',
        keywords: ['lightlayer', 'lighttype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get lightType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'lightType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_index',
        label: 'LightLayer Get index',
        keywords: ['lightlayer', 'index', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get index',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'index' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_time',
        label: 'LightLayer Get time',
        keywords: ['lightlayer', 'time', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get time',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'time' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_hasVideo',
        label: 'LightLayer Get hasVideo',
        keywords: ['lightlayer', 'hasvideo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get hasVideo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasVideo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_active',
        label: 'LightLayer Get active',
        keywords: ['lightlayer', 'active', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get active',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'active' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_nullLayer',
        label: 'LightLayer Get nullLayer',
        keywords: ['lightlayer', 'nulllayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get nullLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'nullLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_selectedProperties',
        label: 'LightLayer Get selectedProperties',
        keywords: ['lightlayer', 'selectedproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get selectedProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selectedProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_containingComp',
        label: 'LightLayer Get containingComp',
        keywords: ['lightlayer', 'containingcomp', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get containingComp',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'containingComp' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_isNameSet',
        label: 'LightLayer Get isNameSet',
        keywords: ['lightlayer', 'isnameset', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get isNameSet',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isNameSet' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_name',
        label: 'LightLayer Get name',
        keywords: ['lightlayer', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_parent',
        label: 'LightLayer Get parent',
        keywords: ['lightlayer', 'parent', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get parent',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parent' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_startTime',
        label: 'LightLayer Get startTime',
        keywords: ['lightlayer', 'starttime', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get startTime',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'startTime' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_stretch',
        label: 'LightLayer Get stretch',
        keywords: ['lightlayer', 'stretch', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get stretch',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'stretch' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_inPoint',
        label: 'LightLayer Get inPoint',
        keywords: ['lightlayer', 'inpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get inPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'inPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_outPoint',
        label: 'LightLayer Get outPoint',
        keywords: ['lightlayer', 'outpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get outPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'outPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_enabled',
        label: 'LightLayer Get enabled',
        keywords: ['lightlayer', 'enabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get enabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'enabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_solo',
        label: 'LightLayer Get solo',
        keywords: ['lightlayer', 'solo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get solo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'solo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_shy',
        label: 'LightLayer Get shy',
        keywords: ['lightlayer', 'shy', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get shy',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'shy' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_locked',
        label: 'LightLayer Get locked',
        keywords: ['lightlayer', 'locked', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get locked',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'locked' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_comment',
        label: 'LightLayer Get comment',
        keywords: ['lightlayer', 'comment', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get comment',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comment' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_label',
        label: 'LightLayer Get label',
        keywords: ['lightlayer', 'label', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get label',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'label' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_autoOrient',
        label: 'LightLayer Get autoOrient',
        keywords: ['lightlayer', 'autoorient', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get autoOrient',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'autoOrient' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_marker',
        label: 'LightLayer Get marker',
        keywords: ['lightlayer', 'marker', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get marker',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'marker' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_transform',
        label: 'LightLayer Get transform',
        keywords: ['lightlayer', 'transform', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get transform',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'transform' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_anchorPoint',
        label: 'LightLayer Get anchorPoint',
        keywords: ['lightlayer', 'anchorpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get anchorPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'anchorPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_position',
        label: 'LightLayer Get position',
        keywords: ['lightlayer', 'position', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get position',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'position' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_xPosition',
        label: 'LightLayer Get xPosition',
        keywords: ['lightlayer', 'xposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get xPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'xPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_yPosition',
        label: 'LightLayer Get yPosition',
        keywords: ['lightlayer', 'yposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get yPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'yPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_zPosition',
        label: 'LightLayer Get zPosition',
        keywords: ['lightlayer', 'zposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get zPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'zPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_scale',
        label: 'LightLayer Get scale',
        keywords: ['lightlayer', 'scale', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get scale',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'scale' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_orientation',
        label: 'LightLayer Get orientation',
        keywords: ['lightlayer', 'orientation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get orientation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'orientation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_rotation',
        label: 'LightLayer Get rotation',
        keywords: ['lightlayer', 'rotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get rotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'rotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_xRotation',
        label: 'LightLayer Get xRotation',
        keywords: ['lightlayer', 'xrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get xRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'xRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_yRotation',
        label: 'LightLayer Get yRotation',
        keywords: ['lightlayer', 'yrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get yRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'yRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_zRotation',
        label: 'LightLayer Get zRotation',
        keywords: ['lightlayer', 'zrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get zRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'zRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_opacity',
        label: 'LightLayer Get opacity',
        keywords: ['lightlayer', 'opacity', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get opacity',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'opacity' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_pointOfInterest',
        label: 'LightLayer Get pointOfInterest',
        keywords: ['lightlayer', 'pointofinterest', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get pointOfInterest',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'pointOfInterest' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_numProperties',
        label: 'LightLayer Get numProperties',
        keywords: ['lightlayer', 'numproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get numProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_matchName',
        label: 'LightLayer Get matchName',
        keywords: ['lightlayer', 'matchname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get matchName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'matchName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_propertyIndex',
        label: 'LightLayer Get propertyIndex',
        keywords: ['lightlayer', 'propertyindex', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get propertyIndex',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyIndex' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_propertyDepth',
        label: 'LightLayer Get propertyDepth',
        keywords: ['lightlayer', 'propertydepth', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get propertyDepth',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyDepth' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_propertyType',
        label: 'LightLayer Get propertyType',
        keywords: ['lightlayer', 'propertytype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get propertyType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_parentProperty',
        label: 'LightLayer Get parentProperty',
        keywords: ['lightlayer', 'parentproperty', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get parentProperty',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentProperty' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_isModified',
        label: 'LightLayer Get isModified',
        keywords: ['lightlayer', 'ismodified', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get isModified',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isModified' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_canSetEnabled',
        label: 'LightLayer Get canSetEnabled',
        keywords: ['lightlayer', 'cansetenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get canSetEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_elided',
        label: 'LightLayer Get elided',
        keywords: ['lightlayer', 'elided', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get elided',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'elided' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_isEffect',
        label: 'LightLayer Get isEffect',
        keywords: ['lightlayer', 'iseffect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get isEffect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isEffect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_isMask',
        label: 'LightLayer Get isMask',
        keywords: ['lightlayer', 'ismask', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get isMask',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMask' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_get_selected',
        label: 'LightLayer Get selected',
        keywords: ['lightlayer', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_moveToBeginning',
        label: 'LightLayer moveToBeginning',
        keywords: ['lightlayer', 'movetobeginning'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer moveToBeginning',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_moveToEnd',
        label: 'LightLayer moveToEnd',
        keywords: ['lightlayer', 'movetoend'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer moveToEnd',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_moveAfter',
        label: 'LightLayer moveAfter',
        keywords: ['lightlayer', 'moveafter'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer moveAfter',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' },
              { id: 'layer', label: 'layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_moveBefore',
        label: 'LightLayer moveBefore',
        keywords: ['lightlayer', 'movebefore'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer moveBefore',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' },
              { id: 'layer', label: 'layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_duplicate',
        label: 'LightLayer duplicate',
        keywords: ['lightlayer', 'duplicate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer duplicate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_copyToComp',
        label: 'LightLayer copyToComp',
        keywords: ['lightlayer', 'copytocomp'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer copyToComp',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' },
              { id: 'intoComp', label: 'intoComp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_activeAtTime',
        label: 'LightLayer activeAtTime',
        keywords: ['lightlayer', 'activeattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer activeAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_setParentWithJump',
        label: 'LightLayer setParentWithJump',
        keywords: ['lightlayer', 'setparentwithjump'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer setParentWithJump',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' },
              { id: 'newParent', label: 'newParent', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_applyPreset',
        label: 'LightLayer applyPreset',
        keywords: ['lightlayer', 'applypreset'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer applyPreset',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' },
              { id: 'presetName', label: 'presetName', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_canAddProperty',
        label: 'LightLayer canAddProperty',
        keywords: ['lightlayer', 'canaddproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer canAddProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_addProperty',
        label: 'LightLayer addProperty',
        keywords: ['lightlayer', 'addproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer addProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_propertyGroup',
        label: 'LightLayer propertyGroup',
        keywords: ['lightlayer', 'propertygroup'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer propertyGroup',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' },
              { id: 'countUp', label: 'countUp', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_remove',
        label: 'LightLayer remove',
        keywords: ['lightlayer', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_moveTo',
        label: 'LightLayer moveTo',
        keywords: ['lightlayer', 'moveto'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer moveTo',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' },
              { id: 'newIndex', label: 'newIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_property_index',
        label: 'LightLayer property (index)',
        keywords: ['lightlayer', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer property (index)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_LightLayer_property_name',
        label: 'LightLayer property (name)',
        keywords: ['lightlayer', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'LightLayer property (name)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'LightLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'MarkerValue',
    items: [
      {
        type: 'ae_MarkerValue_get_comment',
        label: 'MarkerValue Get comment',
        keywords: ['markervalue', 'comment', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MarkerValue Get comment',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MarkerValue', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comment' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MarkerValue_get_chapter',
        label: 'MarkerValue Get chapter',
        keywords: ['markervalue', 'chapter', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MarkerValue Get chapter',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MarkerValue', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'chapter' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MarkerValue_get_cuePointName',
        label: 'MarkerValue Get cuePointName',
        keywords: ['markervalue', 'cuepointname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MarkerValue Get cuePointName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MarkerValue', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'cuePointName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MarkerValue_get_duration',
        label: 'MarkerValue Get duration',
        keywords: ['markervalue', 'duration', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MarkerValue Get duration',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MarkerValue', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'duration' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MarkerValue_get_eventCuePoint',
        label: 'MarkerValue Get eventCuePoint',
        keywords: ['markervalue', 'eventcuepoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MarkerValue Get eventCuePoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MarkerValue', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'eventCuePoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MarkerValue_get_url',
        label: 'MarkerValue Get url',
        keywords: ['markervalue', 'url', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MarkerValue Get url',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MarkerValue', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'url' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MarkerValue_get_frameTarget',
        label: 'MarkerValue Get frameTarget',
        keywords: ['markervalue', 'frametarget', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MarkerValue Get frameTarget',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MarkerValue', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameTarget' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MarkerValue_get_label',
        label: 'MarkerValue Get label',
        keywords: ['markervalue', 'label', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MarkerValue Get label',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MarkerValue', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'label' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MarkerValue_get_protectedRegion',
        label: 'MarkerValue Get protectedRegion',
        keywords: ['markervalue', 'protectedregion', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MarkerValue Get protectedRegion',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MarkerValue', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'protectedRegion' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MarkerValue_getParameters',
        label: 'MarkerValue getParameters',
        keywords: ['markervalue', 'getparameters'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MarkerValue getParameters',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'MarkerValue', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MarkerValue_setParameters',
        label: 'MarkerValue setParameters',
        keywords: ['markervalue', 'setparameters'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MarkerValue setParameters',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'MarkerValue', type: 'expr' },
              { id: 'keyValuePairs', label: 'keyValuePairs', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'MaskPropertyGroup',
    items: [
      {
        type: 'ae_MaskPropertyGroup_get_maskMode',
        label: 'MaskPropertyGroup Get maskMode',
        keywords: ['maskpropertygroup', 'maskmode', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get maskMode',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'maskMode' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_inverted',
        label: 'MaskPropertyGroup Get inverted',
        keywords: ['maskpropertygroup', 'inverted', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get inverted',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'inverted' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_rotoBezier',
        label: 'MaskPropertyGroup Get rotoBezier',
        keywords: ['maskpropertygroup', 'rotobezier', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get rotoBezier',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'rotoBezier' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_maskMotionBlur',
        label: 'MaskPropertyGroup Get maskMotionBlur',
        keywords: ['maskpropertygroup', 'maskmotionblur', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get maskMotionBlur',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'maskMotionBlur' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_locked',
        label: 'MaskPropertyGroup Get locked',
        keywords: ['maskpropertygroup', 'locked', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get locked',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'locked' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_color',
        label: 'MaskPropertyGroup Get color',
        keywords: ['maskpropertygroup', 'color', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get color',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'color' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_maskShape',
        label: 'MaskPropertyGroup Get maskShape',
        keywords: ['maskpropertygroup', 'maskshape', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get maskShape',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'maskShape' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_maskPath',
        label: 'MaskPropertyGroup Get maskPath',
        keywords: ['maskpropertygroup', 'maskpath', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get maskPath',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'maskPath' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_maskFeather',
        label: 'MaskPropertyGroup Get maskFeather',
        keywords: ['maskpropertygroup', 'maskfeather', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get maskFeather',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'maskFeather' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_maskFeatherFalloff',
        label: 'MaskPropertyGroup Get maskFeatherFalloff',
        keywords: ['maskpropertygroup', 'maskfeatherfalloff', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get maskFeatherFalloff',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'maskFeatherFalloff' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_maskOpacity',
        label: 'MaskPropertyGroup Get maskOpacity',
        keywords: ['maskpropertygroup', 'maskopacity', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get maskOpacity',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'maskOpacity' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_maskExpansion',
        label: 'MaskPropertyGroup Get maskExpansion',
        keywords: ['maskpropertygroup', 'maskexpansion', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get maskExpansion',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'maskExpansion' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_numProperties',
        label: 'MaskPropertyGroup Get numProperties',
        keywords: ['maskpropertygroup', 'numproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get numProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_matchName',
        label: 'MaskPropertyGroup Get matchName',
        keywords: ['maskpropertygroup', 'matchname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get matchName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'matchName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_propertyIndex',
        label: 'MaskPropertyGroup Get propertyIndex',
        keywords: ['maskpropertygroup', 'propertyindex', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get propertyIndex',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyIndex' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_propertyDepth',
        label: 'MaskPropertyGroup Get propertyDepth',
        keywords: ['maskpropertygroup', 'propertydepth', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get propertyDepth',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyDepth' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_propertyType',
        label: 'MaskPropertyGroup Get propertyType',
        keywords: ['maskpropertygroup', 'propertytype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get propertyType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_parentProperty',
        label: 'MaskPropertyGroup Get parentProperty',
        keywords: ['maskpropertygroup', 'parentproperty', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get parentProperty',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentProperty' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_isModified',
        label: 'MaskPropertyGroup Get isModified',
        keywords: ['maskpropertygroup', 'ismodified', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get isModified',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isModified' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_canSetEnabled',
        label: 'MaskPropertyGroup Get canSetEnabled',
        keywords: ['maskpropertygroup', 'cansetenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get canSetEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_active',
        label: 'MaskPropertyGroup Get active',
        keywords: ['maskpropertygroup', 'active', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get active',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'active' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_elided',
        label: 'MaskPropertyGroup Get elided',
        keywords: ['maskpropertygroup', 'elided', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get elided',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'elided' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_isEffect',
        label: 'MaskPropertyGroup Get isEffect',
        keywords: ['maskpropertygroup', 'iseffect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get isEffect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isEffect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_isMask',
        label: 'MaskPropertyGroup Get isMask',
        keywords: ['maskpropertygroup', 'ismask', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get isMask',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMask' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_name',
        label: 'MaskPropertyGroup Get name',
        keywords: ['maskpropertygroup', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_enabled',
        label: 'MaskPropertyGroup Get enabled',
        keywords: ['maskpropertygroup', 'enabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get enabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'enabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_get_selected',
        label: 'MaskPropertyGroup Get selected',
        keywords: ['maskpropertygroup', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_canAddProperty',
        label: 'MaskPropertyGroup canAddProperty',
        keywords: ['maskpropertygroup', 'canaddproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup canAddProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_addProperty',
        label: 'MaskPropertyGroup addProperty',
        keywords: ['maskpropertygroup', 'addproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup addProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_propertyGroup',
        label: 'MaskPropertyGroup propertyGroup',
        keywords: ['maskpropertygroup', 'propertygroup'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup propertyGroup',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' },
              { id: 'countUp', label: 'countUp', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_remove',
        label: 'MaskPropertyGroup remove',
        keywords: ['maskpropertygroup', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_moveTo',
        label: 'MaskPropertyGroup moveTo',
        keywords: ['maskpropertygroup', 'moveto'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup moveTo',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' },
              { id: 'newIndex', label: 'newIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_duplicate',
        label: 'MaskPropertyGroup duplicate',
        keywords: ['maskpropertygroup', 'duplicate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup duplicate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_property_index',
        label: 'MaskPropertyGroup property (index)',
        keywords: ['maskpropertygroup', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup property (index)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_MaskPropertyGroup_property_name',
        label: 'MaskPropertyGroup property (name)',
        keywords: ['maskpropertygroup', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'MaskPropertyGroup property (name)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'MaskPropertyGroup', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'OMCollection',
    items: [
      {
        type: 'ae_OMCollection_get_length',
        label: 'OMCollection Get length',
        keywords: ['omcollection', 'length', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'OMCollection Get length',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'OMCollection', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'length' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'OutputModule',
    items: [
      {
        type: 'ae_OutputModule_get_name',
        label: 'OutputModule Get name',
        keywords: ['outputmodule', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'OutputModule Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'OutputModule', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_OutputModule_get_templates',
        label: 'OutputModule Get templates',
        keywords: ['outputmodule', 'templates', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'OutputModule Get templates',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'OutputModule', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'templates' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_OutputModule_get_file',
        label: 'OutputModule Get file',
        keywords: ['outputmodule', 'file', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'OutputModule Get file',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'OutputModule', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'file' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_OutputModule_get_postRenderAction',
        label: 'OutputModule Get postRenderAction',
        keywords: ['outputmodule', 'postrenderaction', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'OutputModule Get postRenderAction',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'OutputModule', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'postRenderAction' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_OutputModule_get_includeSourceXMP',
        label: 'OutputModule Get includeSourceXMP',
        keywords: ['outputmodule', 'includesourcexmp', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'OutputModule Get includeSourceXMP',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'OutputModule', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'includeSourceXMP' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_OutputModule_remove',
        label: 'OutputModule remove',
        keywords: ['outputmodule', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'OutputModule remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'OutputModule', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_OutputModule_saveAsTemplate',
        label: 'OutputModule saveAsTemplate',
        keywords: ['outputmodule', 'saveastemplate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'OutputModule saveAsTemplate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'OutputModule', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_OutputModule_applyTemplate',
        label: 'OutputModule applyTemplate',
        keywords: ['outputmodule', 'applytemplate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'OutputModule applyTemplate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'OutputModule', type: 'expr' },
              { id: 'templateName', label: 'templateName', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_OutputModule_getSetting',
        label: 'OutputModule getSetting',
        keywords: ['outputmodule', 'getsetting'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'OutputModule getSetting',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'OutputModule', type: 'expr' },
              { id: 'key', label: 'key', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_OutputModule_getSettings',
        label: 'OutputModule getSettings',
        keywords: ['outputmodule', 'getsettings'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'OutputModule getSettings',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'OutputModule', type: 'expr' },
              { id: 'format', label: 'format', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_OutputModule_setSetting',
        label: 'OutputModule setSetting',
        keywords: ['outputmodule', 'setsetting'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'OutputModule setSetting',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'OutputModule', type: 'expr' },
              { id: 'key', label: 'key', type: 'text' },
              { id: 'value', label: 'value', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_OutputModule_setSettings',
        label: 'OutputModule setSettings',
        keywords: ['outputmodule', 'setsettings'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'OutputModule setSettings',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'OutputModule', type: 'expr' },
              { id: 'settings', label: 'settings', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'PlaceholderSource',
    items: [
      {
        type: 'ae_PlaceholderSource_get_file',
        label: 'PlaceholderSource Get file',
        keywords: ['placeholdersource', 'file', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource Get file',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'file' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_get_isStill',
        label: 'PlaceholderSource Get isStill',
        keywords: ['placeholdersource', 'isstill', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource Get isStill',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isStill' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_get_displayFrameRate',
        label: 'PlaceholderSource Get displayFrameRate',
        keywords: ['placeholdersource', 'displayframerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource Get displayFrameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'displayFrameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_get_hasAlpha',
        label: 'PlaceholderSource Get hasAlpha',
        keywords: ['placeholdersource', 'hasalpha', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource Get hasAlpha',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasAlpha' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_get_alphaMode',
        label: 'PlaceholderSource Get alphaMode',
        keywords: ['placeholdersource', 'alphamode', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource Get alphaMode',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'alphaMode' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_get_premulColor',
        label: 'PlaceholderSource Get premulColor',
        keywords: ['placeholdersource', 'premulcolor', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource Get premulColor',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'premulColor' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_get_invertAlpha',
        label: 'PlaceholderSource Get invertAlpha',
        keywords: ['placeholdersource', 'invertalpha', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource Get invertAlpha',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'invertAlpha' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_get_fieldSeparationType',
        label: 'PlaceholderSource Get fieldSeparationType',
        keywords: ['placeholdersource', 'fieldseparationtype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource Get fieldSeparationType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'fieldSeparationType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_get_highQualityFieldSeparation',
        label: 'PlaceholderSource Get highQualityFieldSeparation',
        keywords: ['placeholdersource', 'highqualityfieldseparation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource Get highQualityFieldSeparation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'highQualityFieldSeparation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_get_removePulldown',
        label: 'PlaceholderSource Get removePulldown',
        keywords: ['placeholdersource', 'removepulldown', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource Get removePulldown',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'removePulldown' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_get_loop',
        label: 'PlaceholderSource Get loop',
        keywords: ['placeholdersource', 'loop', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource Get loop',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'loop' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_get_nativeFrameRate',
        label: 'PlaceholderSource Get nativeFrameRate',
        keywords: ['placeholdersource', 'nativeframerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource Get nativeFrameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'nativeFrameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_get_conformFrameRate',
        label: 'PlaceholderSource Get conformFrameRate',
        keywords: ['placeholdersource', 'conformframerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource Get conformFrameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'conformFrameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_guessAlphaMode',
        label: 'PlaceholderSource guessAlphaMode',
        keywords: ['placeholdersource', 'guessalphamode'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource guessAlphaMode',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderSource', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PlaceholderSource_guessPulldown',
        label: 'PlaceholderSource guessPulldown',
        keywords: ['placeholdersource', 'guesspulldown'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PlaceholderSource guessPulldown',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PlaceholderSource', type: 'expr' },
              { id: 'method', label: 'method', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'Project',
    items: [
      {
        type: 'ae_Project_get_file',
        label: 'Project Get file',
        keywords: ['project', 'file', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get file',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'file' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_rootFolder',
        label: 'Project Get rootFolder',
        keywords: ['project', 'rootfolder', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get rootFolder',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'rootFolder' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_items',
        label: 'Project Get items',
        keywords: ['project', 'items', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get items',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'items' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_activeItem',
        label: 'Project Get activeItem',
        keywords: ['project', 'activeitem', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get activeItem',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'activeItem' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_numItems',
        label: 'Project Get numItems',
        keywords: ['project', 'numitems', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get numItems',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numItems' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_selection',
        label: 'Project Get selection',
        keywords: ['project', 'selection', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get selection',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selection' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_renderQueue',
        label: 'Project Get renderQueue',
        keywords: ['project', 'renderqueue', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get renderQueue',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'renderQueue' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_bitsPerChannel',
        label: 'Project Get bitsPerChannel',
        keywords: ['project', 'bitsperchannel', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get bitsPerChannel',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'bitsPerChannel' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_transparencyGridThumbnails',
        label: 'Project Get transparencyGridThumbnails',
        keywords: ['project', 'transparencygridthumbnails', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get transparencyGridThumbnails',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'transparencyGridThumbnails' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_displayStartFrame',
        label: 'Project Get displayStartFrame',
        keywords: ['project', 'displaystartframe', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get displayStartFrame',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'displayStartFrame' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_gpuAccelType',
        label: 'Project Get gpuAccelType',
        keywords: ['project', 'gpuacceltype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get gpuAccelType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'gpuAccelType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_linearBlending',
        label: 'Project Get linearBlending',
        keywords: ['project', 'linearblending', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get linearBlending',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'linearBlending' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_xmpPacket',
        label: 'Project Get xmpPacket',
        keywords: ['project', 'xmppacket', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get xmpPacket',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'xmpPacket' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_framesCountType',
        label: 'Project Get framesCountType',
        keywords: ['project', 'framescounttype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get framesCountType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'framesCountType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_feetFramesFilmType',
        label: 'Project Get feetFramesFilmType',
        keywords: ['project', 'feetframesfilmtype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get feetFramesFilmType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'feetFramesFilmType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_framesUseFeetFrames',
        label: 'Project Get framesUseFeetFrames',
        keywords: ['project', 'framesusefeetframes', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get framesUseFeetFrames',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'framesUseFeetFrames' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_footageTimecodeDisplayStartType',
        label: 'Project Get footageTimecodeDisplayStartType',
        keywords: ['project', 'footagetimecodedisplaystarttype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get footageTimecodeDisplayStartType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'footageTimecodeDisplayStartType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_timeDisplayType',
        label: 'Project Get timeDisplayType',
        keywords: ['project', 'timedisplaytype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get timeDisplayType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'timeDisplayType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_toolType',
        label: 'Project Get toolType',
        keywords: ['project', 'tooltype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get toolType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'toolType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_workingGamma',
        label: 'Project Get workingGamma',
        keywords: ['project', 'workinggamma', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get workingGamma',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'workingGamma' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_workingSpace',
        label: 'Project Get workingSpace',
        keywords: ['project', 'workingspace', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get workingSpace',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'workingSpace' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_linearizeWorkingSpace',
        label: 'Project Get linearizeWorkingSpace',
        keywords: ['project', 'linearizeworkingspace', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get linearizeWorkingSpace',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'linearizeWorkingSpace' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_compensateForSceneReferredProfiles',
        label: 'Project Get compensateForSceneReferredProfiles',
        keywords: ['project', 'compensateforscenereferredprofiles', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get compensateForSceneReferredProfiles',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'compensateForSceneReferredProfiles' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_get_expressionEngine',
        label: 'Project Get expressionEngine',
        keywords: ['project', 'expressionengine', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project Get expressionEngine',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'expressionEngine' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_item',
        label: 'Project item',
        keywords: ['project', 'item'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project item',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_itemByID',
        label: 'Project itemByID',
        keywords: ['project', 'itembyid'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project itemByID',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'id', label: 'id', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_consolidateFootage',
        label: 'Project consolidateFootage',
        keywords: ['project', 'consolidatefootage'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project consolidateFootage',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_removeUnusedFootage',
        label: 'Project removeUnusedFootage',
        keywords: ['project', 'removeunusedfootage'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project removeUnusedFootage',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_reduceProject',
        label: 'Project reduceProject',
        keywords: ['project', 'reduceproject'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project reduceProject',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'array_of_items', label: 'array_of_items', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_close',
        label: 'Project close',
        keywords: ['project', 'close'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project close',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'closeOptions', label: 'closeOptions', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_save',
        label: 'Project save',
        keywords: ['project', 'save'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project save',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'file', label: 'file', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_saveWithDialog',
        label: 'Project saveWithDialog',
        keywords: ['project', 'savewithdialog'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project saveWithDialog',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_importPlaceholder',
        label: 'Project importPlaceholder',
        keywords: ['project', 'importplaceholder'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project importPlaceholder',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' },
              { id: 'width', label: 'width', type: 'number' },
              { id: 'height', label: 'height', type: 'number' },
              { id: 'frameRate', label: 'frameRate', type: 'number' },
              { id: 'duration', label: 'duration', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_importFile',
        label: 'Project importFile',
        keywords: ['project', 'importfile'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project importFile',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'importOptions', label: 'importOptions', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_importFileWithDialog',
        label: 'Project importFileWithDialog',
        keywords: ['project', 'importfilewithdialog'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project importFileWithDialog',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_showWindow',
        label: 'Project showWindow',
        keywords: ['project', 'showwindow'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project showWindow',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'doShow', label: 'doShow', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_autoFixExpressions',
        label: 'Project autoFixExpressions',
        keywords: ['project', 'autofixexpressions'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project autoFixExpressions',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'oldText', label: 'oldText', type: 'text' },
              { id: 'newText', label: 'newText', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_newTeamProject',
        label: 'Project newTeamProject',
        keywords: ['project', 'newteamproject'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project newTeamProject',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'teamProjectName', label: 'teamProjectName', type: 'text' },
              { id: 'description', label: 'description', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_openTeamProject',
        label: 'Project openTeamProject',
        keywords: ['project', 'openteamproject'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project openTeamProject',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'teamProjectName', label: 'teamProjectName', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_shareTeamProject',
        label: 'Project shareTeamProject',
        keywords: ['project', 'shareteamproject'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project shareTeamProject',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'comment', label: 'comment', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_syncTeamProject',
        label: 'Project syncTeamProject',
        keywords: ['project', 'syncteamproject'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project syncTeamProject',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_closeTeamProject',
        label: 'Project closeTeamProject',
        keywords: ['project', 'closeteamproject'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project closeTeamProject',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_convertTeamProjectToProject',
        label: 'Project convertTeamProjectToProject',
        keywords: ['project', 'convertteamprojecttoproject'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project convertTeamProjectToProject',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'project_file', label: 'project_file', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_listTeamProjects',
        label: 'Project listTeamProjects',
        keywords: ['project', 'listteamprojects'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project listTeamProjects',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_isTeamProjectOpen',
        label: 'Project isTeamProjectOpen',
        keywords: ['project', 'isteamprojectopen'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project isTeamProjectOpen',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'teamProjectName', label: 'teamProjectName', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_isAnyTeamProjectOpen',
        label: 'Project isAnyTeamProjectOpen',
        keywords: ['project', 'isanyteamprojectopen'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project isAnyTeamProjectOpen',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_isTeamProjectEnabled',
        label: 'Project isTeamProjectEnabled',
        keywords: ['project', 'isteamprojectenabled'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project isTeamProjectEnabled',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_isLoggedInToTeamProject',
        label: 'Project isLoggedInToTeamProject',
        keywords: ['project', 'isloggedintoteamproject'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project isLoggedInToTeamProject',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_isSyncCommandEnabled',
        label: 'Project isSyncCommandEnabled',
        keywords: ['project', 'issynccommandenabled'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project isSyncCommandEnabled',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_isShareCommandEnabled',
        label: 'Project isShareCommandEnabled',
        keywords: ['project', 'issharecommandenabled'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project isShareCommandEnabled',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_isResolveCommandEnabled',
        label: 'Project isResolveCommandEnabled',
        keywords: ['project', 'isresolvecommandenabled'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project isResolveCommandEnabled',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_resolveConflict',
        label: 'Project resolveConflict',
        keywords: ['project', 'resolveconflict'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project resolveConflict',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'ResolveType', label: 'ResolveType', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_listColorProfiles',
        label: 'Project listColorProfiles',
        keywords: ['project', 'listcolorprofiles'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project listColorProfiles',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Project_setDefaultImportFolder',
        label: 'Project setDefaultImportFolder',
        keywords: ['project', 'setdefaultimportfolder'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Project setDefaultImportFolder',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Project', type: 'expr' },
              { id: 'folder', label: 'folder', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'Property',
    items: [
      {
        type: 'ae_Property_get_propertyValueType',
        label: 'Property Get propertyValueType',
        keywords: ['property', 'propertyvaluetype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get propertyValueType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyValueType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_value',
        label: 'Property Get value',
        keywords: ['property', 'value', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get value',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'value' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_hasMin',
        label: 'Property Get hasMin',
        keywords: ['property', 'hasmin', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get hasMin',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasMin' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_hasMax',
        label: 'Property Get hasMax',
        keywords: ['property', 'hasmax', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get hasMax',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasMax' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_minValue',
        label: 'Property Get minValue',
        keywords: ['property', 'minvalue', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get minValue',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'minValue' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_maxValue',
        label: 'Property Get maxValue',
        keywords: ['property', 'maxvalue', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get maxValue',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'maxValue' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_isSpatial',
        label: 'Property Get isSpatial',
        keywords: ['property', 'isspatial', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get isSpatial',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isSpatial' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_canVaryOverTime',
        label: 'Property Get canVaryOverTime',
        keywords: ['property', 'canvaryovertime', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get canVaryOverTime',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canVaryOverTime' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_canSetExpression',
        label: 'Property Get canSetExpression',
        keywords: ['property', 'cansetexpression', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get canSetExpression',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetExpression' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_isTimeVarying',
        label: 'Property Get isTimeVarying',
        keywords: ['property', 'istimevarying', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get isTimeVarying',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isTimeVarying' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_numKeys',
        label: 'Property Get numKeys',
        keywords: ['property', 'numkeys', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get numKeys',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numKeys' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_unitsText',
        label: 'Property Get unitsText',
        keywords: ['property', 'unitstext', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get unitsText',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'unitsText' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_expressionError',
        label: 'Property Get expressionError',
        keywords: ['property', 'expressionerror', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get expressionError',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'expressionError' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_selectedKeys',
        label: 'Property Get selectedKeys',
        keywords: ['property', 'selectedkeys', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get selectedKeys',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selectedKeys' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_propertyIndex',
        label: 'Property Get propertyIndex',
        keywords: ['property', 'propertyindex', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get propertyIndex',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyIndex' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_isSeparationFollower',
        label: 'Property Get isSeparationFollower',
        keywords: ['property', 'isseparationfollower', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get isSeparationFollower',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isSeparationFollower' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_isSeparationLeader',
        label: 'Property Get isSeparationLeader',
        keywords: ['property', 'isseparationleader', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get isSeparationLeader',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isSeparationLeader' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_separationDimension',
        label: 'Property Get separationDimension',
        keywords: ['property', 'separationdimension', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get separationDimension',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'separationDimension' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_separationLeader',
        label: 'Property Get separationLeader',
        keywords: ['property', 'separationleader', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get separationLeader',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'separationLeader' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_isDropdownEffect',
        label: 'Property Get isDropdownEffect',
        keywords: ['property', 'isdropdowneffect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get isDropdownEffect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isDropdownEffect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_alternateSource',
        label: 'Property Get alternateSource',
        keywords: ['property', 'alternatesource', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get alternateSource',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'alternateSource' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_canSetAlternateSource',
        label: 'Property Get canSetAlternateSource',
        keywords: ['property', 'cansetalternatesource', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get canSetAlternateSource',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetAlternateSource' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_expression',
        label: 'Property Get expression',
        keywords: ['property', 'expression', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get expression',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'expression' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_expressionEnabled',
        label: 'Property Get expressionEnabled',
        keywords: ['property', 'expressionenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get expressionEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'expressionEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_dimensionsSeparated',
        label: 'Property Get dimensionsSeparated',
        keywords: ['property', 'dimensionsseparated', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get dimensionsSeparated',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'dimensionsSeparated' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_matchName',
        label: 'Property Get matchName',
        keywords: ['property', 'matchname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get matchName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'matchName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_propertyDepth',
        label: 'Property Get propertyDepth',
        keywords: ['property', 'propertydepth', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get propertyDepth',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyDepth' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_propertyType',
        label: 'Property Get propertyType',
        keywords: ['property', 'propertytype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get propertyType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_parentProperty',
        label: 'Property Get parentProperty',
        keywords: ['property', 'parentproperty', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get parentProperty',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentProperty' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_isModified',
        label: 'Property Get isModified',
        keywords: ['property', 'ismodified', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get isModified',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isModified' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_canSetEnabled',
        label: 'Property Get canSetEnabled',
        keywords: ['property', 'cansetenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get canSetEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_active',
        label: 'Property Get active',
        keywords: ['property', 'active', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get active',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'active' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_elided',
        label: 'Property Get elided',
        keywords: ['property', 'elided', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get elided',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'elided' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_isEffect',
        label: 'Property Get isEffect',
        keywords: ['property', 'iseffect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get isEffect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isEffect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_isMask',
        label: 'Property Get isMask',
        keywords: ['property', 'ismask', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get isMask',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMask' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_name',
        label: 'Property Get name',
        keywords: ['property', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_enabled',
        label: 'Property Get enabled',
        keywords: ['property', 'enabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get enabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'enabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_get_selected',
        label: 'Property Get selected',
        keywords: ['property', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_valueAtTime',
        label: 'Property valueAtTime',
        keywords: ['property', 'valueattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property valueAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' },
              { id: 'preExpression', label: 'preExpression', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setValue',
        label: 'Property setValue',
        keywords: ['property', 'setvalue'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setValue',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'newValue', label: 'newValue', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setValueAtTime',
        label: 'Property setValueAtTime',
        keywords: ['property', 'setvalueattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setValueAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' },
              { id: 'newValue', label: 'newValue', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setValuesAtTimes',
        label: 'Property setValuesAtTimes',
        keywords: ['property', 'setvaluesattimes'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setValuesAtTimes',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'times', label: 'times', type: 'expr' },
              { id: 'newValues', label: 'newValues', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setValueAtKey',
        label: 'Property setValueAtKey',
        keywords: ['property', 'setvalueatkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setValueAtKey',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' },
              { id: 'newValue', label: 'newValue', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_nearestKeyIndex',
        label: 'Property nearestKeyIndex',
        keywords: ['property', 'nearestkeyindex'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property nearestKeyIndex',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keyTime_keyIndex',
        label: 'Property keyTime (keyIndex)',
        keywords: ['property', 'keytime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keyTime (keyIndex)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keyTime_markerComment',
        label: 'Property keyTime (markerComment)',
        keywords: ['property', 'keytime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keyTime (markerComment)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'markerComment', label: 'markerComment', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keyValue_keyIndex',
        label: 'Property keyValue (keyIndex)',
        keywords: ['property', 'keyvalue'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keyValue (keyIndex)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keyValue_markerComment',
        label: 'Property keyValue (markerComment)',
        keywords: ['property', 'keyvalue'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keyValue (markerComment)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'markerComment', label: 'markerComment', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_addKey',
        label: 'Property addKey',
        keywords: ['property', 'addkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property addKey',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_removeKey',
        label: 'Property removeKey',
        keywords: ['property', 'removekey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property removeKey',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_isInterpolationTypeValid',
        label: 'Property isInterpolationTypeValid',
        keywords: ['property', 'isinterpolationtypevalid'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property isInterpolationTypeValid',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setInterpolationTypeAtKey',
        label: 'Property setInterpolationTypeAtKey',
        keywords: ['property', 'setinterpolationtypeatkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setInterpolationTypeAtKey',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' },
              { id: 'inType', label: 'inType', type: 'expr' },
              { id: 'outType', label: 'outType', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keyInInterpolationType',
        label: 'Property keyInInterpolationType',
        keywords: ['property', 'keyininterpolationtype'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keyInInterpolationType',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keyOutInterpolationType',
        label: 'Property keyOutInterpolationType',
        keywords: ['property', 'keyoutinterpolationtype'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keyOutInterpolationType',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setSpatialTangentsAtKey_keyIndex_inTangent_outTangent',
        label: 'Property setSpatialTangentsAtKey (keyIndex, inTangent, outTangent)',
        keywords: ['property', 'setspatialtangentsatkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setSpatialTangentsAtKey (keyIndex, inTangent, outTangent)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' },
              { id: 'inTangent', label: 'inTangent', type: 'expr' },
              { id: 'outTangent', label: 'outTangent', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setSpatialTangentsAtKey_keyIndex_inTangent_outTangent',
        label: 'Property setSpatialTangentsAtKey (keyIndex, inTangent, outTangent)',
        keywords: ['property', 'setspatialtangentsatkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setSpatialTangentsAtKey (keyIndex, inTangent, outTangent)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' },
              { id: 'inTangent', label: 'inTangent', type: 'expr' },
              { id: 'outTangent', label: 'outTangent', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keyInSpatialTangent',
        label: 'Property keyInSpatialTangent',
        keywords: ['property', 'keyinspatialtangent'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keyInSpatialTangent',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keyOutSpatialTangent',
        label: 'Property keyOutSpatialTangent',
        keywords: ['property', 'keyoutspatialtangent'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keyOutSpatialTangent',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setTemporalEaseAtKey_keyIndex_inTemporalEase_outTemporalEase',
        label: 'Property setTemporalEaseAtKey (keyIndex, inTemporalEase, outTemporalEase)',
        keywords: ['property', 'settemporaleaseatkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setTemporalEaseAtKey (keyIndex, inTemporalEase, outTemporalEase)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' },
              { id: 'inTemporalEase', label: 'inTemporalEase', type: 'expr' },
              { id: 'outTemporalEase', label: 'outTemporalEase', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setTemporalEaseAtKey_keyIndex_inTemporalEase_outTemporalEase',
        label: 'Property setTemporalEaseAtKey (keyIndex, inTemporalEase, outTemporalEase)',
        keywords: ['property', 'settemporaleaseatkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setTemporalEaseAtKey (keyIndex, inTemporalEase, outTemporalEase)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' },
              { id: 'inTemporalEase', label: 'inTemporalEase', type: 'expr' },
              { id: 'outTemporalEase', label: 'outTemporalEase', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setTemporalEaseAtKey_keyIndex_inTemporalEase_outTemporalEase',
        label: 'Property setTemporalEaseAtKey (keyIndex, inTemporalEase, outTemporalEase)',
        keywords: ['property', 'settemporaleaseatkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setTemporalEaseAtKey (keyIndex, inTemporalEase, outTemporalEase)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' },
              { id: 'inTemporalEase', label: 'inTemporalEase', type: 'expr' },
              { id: 'outTemporalEase', label: 'outTemporalEase', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keyInTemporalEase',
        label: 'Property keyInTemporalEase',
        keywords: ['property', 'keyintemporalease'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keyInTemporalEase',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keyOutTemporalEase',
        label: 'Property keyOutTemporalEase',
        keywords: ['property', 'keyouttemporalease'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keyOutTemporalEase',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setTemporalContinuousAtKey',
        label: 'Property setTemporalContinuousAtKey',
        keywords: ['property', 'settemporalcontinuousatkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setTemporalContinuousAtKey',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' },
              { id: 'newVal', label: 'newVal', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keyTemporalContinuous',
        label: 'Property keyTemporalContinuous',
        keywords: ['property', 'keytemporalcontinuous'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keyTemporalContinuous',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setTemporalAutoBezierAtKey',
        label: 'Property setTemporalAutoBezierAtKey',
        keywords: ['property', 'settemporalautobezieratkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setTemporalAutoBezierAtKey',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' },
              { id: 'newVal', label: 'newVal', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keyTemporalAutoBezier',
        label: 'Property keyTemporalAutoBezier',
        keywords: ['property', 'keytemporalautobezier'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keyTemporalAutoBezier',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setSpatialContinuousAtKey',
        label: 'Property setSpatialContinuousAtKey',
        keywords: ['property', 'setspatialcontinuousatkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setSpatialContinuousAtKey',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' },
              { id: 'newVal', label: 'newVal', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keySpatialContinuous',
        label: 'Property keySpatialContinuous',
        keywords: ['property', 'keyspatialcontinuous'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keySpatialContinuous',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setSpatialAutoBezierAtKey',
        label: 'Property setSpatialAutoBezierAtKey',
        keywords: ['property', 'setspatialautobezieratkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setSpatialAutoBezierAtKey',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' },
              { id: 'newVal', label: 'newVal', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keySpatialAutoBezier',
        label: 'Property keySpatialAutoBezier',
        keywords: ['property', 'keyspatialautobezier'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keySpatialAutoBezier',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setRovingAtKey',
        label: 'Property setRovingAtKey',
        keywords: ['property', 'setrovingatkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setRovingAtKey',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' },
              { id: 'newVal', label: 'newVal', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keyRoving',
        label: 'Property keyRoving',
        keywords: ['property', 'keyroving'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keyRoving',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setSelectedAtKey',
        label: 'Property setSelectedAtKey',
        keywords: ['property', 'setselectedatkey'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setSelectedAtKey',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' },
              { id: 'onOff', label: 'onOff', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_keySelected',
        label: 'Property keySelected',
        keywords: ['property', 'keyselected'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property keySelected',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'keyIndex', label: 'keyIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_getSeparationFollower',
        label: 'Property getSeparationFollower',
        keywords: ['property', 'getseparationfollower'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property getSeparationFollower',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'dim', label: 'dim', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_addToMotionGraphicsTemplate',
        label: 'Property addToMotionGraphicsTemplate',
        keywords: ['property', 'addtomotiongraphicstemplate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property addToMotionGraphicsTemplate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'comp', label: 'comp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_addToMotionGraphicsTemplateAs',
        label: 'Property addToMotionGraphicsTemplateAs',
        keywords: ['property', 'addtomotiongraphicstemplateas'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property addToMotionGraphicsTemplateAs',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'comp', label: 'comp', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_canAddToMotionGraphicsTemplate',
        label: 'Property canAddToMotionGraphicsTemplate',
        keywords: ['property', 'canaddtomotiongraphicstemplate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property canAddToMotionGraphicsTemplate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'comp', label: 'comp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setPropertyParameters',
        label: 'Property setPropertyParameters',
        keywords: ['property', 'setpropertyparameters'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setPropertyParameters',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'items', label: 'items', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_setAlternateSource',
        label: 'Property setAlternateSource',
        keywords: ['property', 'setalternatesource'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property setAlternateSource',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'newSource', label: 'newSource', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_propertyGroup',
        label: 'Property propertyGroup',
        keywords: ['property', 'propertygroup'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property propertyGroup',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'countUp', label: 'countUp', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_remove',
        label: 'Property remove',
        keywords: ['property', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_moveTo',
        label: 'Property moveTo',
        keywords: ['property', 'moveto'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property moveTo',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'newIndex', label: 'newIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_duplicate',
        label: 'Property duplicate',
        keywords: ['property', 'duplicate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property duplicate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_property_index',
        label: 'Property property (index)',
        keywords: ['property', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property property (index)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Property_property_name',
        label: 'Property property (name)',
        keywords: ['property', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Property property (name)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Property', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'PropertyBase',
    items: [
      {
        type: 'ae_PropertyBase_get_matchName',
        label: 'PropertyBase Get matchName',
        keywords: ['propertybase', 'matchname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get matchName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'matchName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_get_propertyIndex',
        label: 'PropertyBase Get propertyIndex',
        keywords: ['propertybase', 'propertyindex', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get propertyIndex',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyIndex' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_get_propertyDepth',
        label: 'PropertyBase Get propertyDepth',
        keywords: ['propertybase', 'propertydepth', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get propertyDepth',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyDepth' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_get_propertyType',
        label: 'PropertyBase Get propertyType',
        keywords: ['propertybase', 'propertytype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get propertyType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_get_parentProperty',
        label: 'PropertyBase Get parentProperty',
        keywords: ['propertybase', 'parentproperty', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get parentProperty',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentProperty' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_get_isModified',
        label: 'PropertyBase Get isModified',
        keywords: ['propertybase', 'ismodified', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get isModified',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isModified' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_get_canSetEnabled',
        label: 'PropertyBase Get canSetEnabled',
        keywords: ['propertybase', 'cansetenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get canSetEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_get_active',
        label: 'PropertyBase Get active',
        keywords: ['propertybase', 'active', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get active',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'active' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_get_elided',
        label: 'PropertyBase Get elided',
        keywords: ['propertybase', 'elided', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get elided',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'elided' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_get_isEffect',
        label: 'PropertyBase Get isEffect',
        keywords: ['propertybase', 'iseffect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get isEffect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isEffect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_get_isMask',
        label: 'PropertyBase Get isMask',
        keywords: ['propertybase', 'ismask', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get isMask',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMask' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_get_name',
        label: 'PropertyBase Get name',
        keywords: ['propertybase', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_get_enabled',
        label: 'PropertyBase Get enabled',
        keywords: ['propertybase', 'enabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get enabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'enabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_get_selected',
        label: 'PropertyBase Get selected',
        keywords: ['propertybase', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_propertyGroup',
        label: 'PropertyBase propertyGroup',
        keywords: ['propertybase', 'propertygroup'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase propertyGroup',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyBase', type: 'expr' },
              { id: 'countUp', label: 'countUp', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_remove',
        label: 'PropertyBase remove',
        keywords: ['propertybase', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_moveTo',
        label: 'PropertyBase moveTo',
        keywords: ['propertybase', 'moveto'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase moveTo',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyBase', type: 'expr' },
              { id: 'newIndex', label: 'newIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_duplicate',
        label: 'PropertyBase duplicate',
        keywords: ['propertybase', 'duplicate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase duplicate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyBase', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_property_index',
        label: 'PropertyBase property (index)',
        keywords: ['propertybase', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase property (index)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyBase', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyBase_property_name',
        label: 'PropertyBase property (name)',
        keywords: ['propertybase', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyBase property (name)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyBase', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'PropertyGroup',
    items: [
      {
        type: 'ae_PropertyGroup_get_numProperties',
        label: 'PropertyGroup Get numProperties',
        keywords: ['propertygroup', 'numproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get numProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_matchName',
        label: 'PropertyGroup Get matchName',
        keywords: ['propertygroup', 'matchname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get matchName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'matchName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_propertyIndex',
        label: 'PropertyGroup Get propertyIndex',
        keywords: ['propertygroup', 'propertyindex', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get propertyIndex',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyIndex' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_propertyDepth',
        label: 'PropertyGroup Get propertyDepth',
        keywords: ['propertygroup', 'propertydepth', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get propertyDepth',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyDepth' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_propertyType',
        label: 'PropertyGroup Get propertyType',
        keywords: ['propertygroup', 'propertytype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get propertyType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_parentProperty',
        label: 'PropertyGroup Get parentProperty',
        keywords: ['propertygroup', 'parentproperty', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get parentProperty',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentProperty' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_isModified',
        label: 'PropertyGroup Get isModified',
        keywords: ['propertygroup', 'ismodified', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get isModified',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isModified' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_canSetEnabled',
        label: 'PropertyGroup Get canSetEnabled',
        keywords: ['propertygroup', 'cansetenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get canSetEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_active',
        label: 'PropertyGroup Get active',
        keywords: ['propertygroup', 'active', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get active',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'active' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_elided',
        label: 'PropertyGroup Get elided',
        keywords: ['propertygroup', 'elided', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get elided',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'elided' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_isEffect',
        label: 'PropertyGroup Get isEffect',
        keywords: ['propertygroup', 'iseffect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get isEffect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isEffect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_isMask',
        label: 'PropertyGroup Get isMask',
        keywords: ['propertygroup', 'ismask', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get isMask',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMask' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_name',
        label: 'PropertyGroup Get name',
        keywords: ['propertygroup', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_enabled',
        label: 'PropertyGroup Get enabled',
        keywords: ['propertygroup', 'enabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get enabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'enabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_get_selected',
        label: 'PropertyGroup Get selected',
        keywords: ['propertygroup', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_canAddProperty',
        label: 'PropertyGroup canAddProperty',
        keywords: ['propertygroup', 'canaddproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup canAddProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyGroup', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_addProperty',
        label: 'PropertyGroup addProperty',
        keywords: ['propertygroup', 'addproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup addProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyGroup', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_propertyGroup',
        label: 'PropertyGroup propertyGroup',
        keywords: ['propertygroup', 'propertygroup'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup propertyGroup',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyGroup', type: 'expr' },
              { id: 'countUp', label: 'countUp', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_remove',
        label: 'PropertyGroup remove',
        keywords: ['propertygroup', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_moveTo',
        label: 'PropertyGroup moveTo',
        keywords: ['propertygroup', 'moveto'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup moveTo',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyGroup', type: 'expr' },
              { id: 'newIndex', label: 'newIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_duplicate',
        label: 'PropertyGroup duplicate',
        keywords: ['propertygroup', 'duplicate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup duplicate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyGroup', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_property_index',
        label: 'PropertyGroup property (index)',
        keywords: ['propertygroup', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup property (index)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyGroup', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_PropertyGroup_property_name',
        label: 'PropertyGroup property (name)',
        keywords: ['propertygroup', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'PropertyGroup property (name)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'PropertyGroup', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'RenderQueue',
    items: [
      {
        type: 'ae_RenderQueue_get_rendering',
        label: 'RenderQueue Get rendering',
        keywords: ['renderqueue', 'rendering', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueue Get rendering',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueue', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'rendering' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueue_get_numItems',
        label: 'RenderQueue Get numItems',
        keywords: ['renderqueue', 'numitems', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueue Get numItems',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueue', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numItems' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueue_get_canQueueInAME',
        label: 'RenderQueue Get canQueueInAME',
        keywords: ['renderqueue', 'canqueueiname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueue Get canQueueInAME',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueue', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canQueueInAME' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueue_get_items',
        label: 'RenderQueue Get items',
        keywords: ['renderqueue', 'items', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueue Get items',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueue', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'items' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueue_showWindow',
        label: 'RenderQueue showWindow',
        keywords: ['renderqueue', 'showwindow'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueue showWindow',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueue', type: 'expr' },
              { id: 'doShow', label: 'doShow', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueue_render',
        label: 'RenderQueue render',
        keywords: ['renderqueue', 'render'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueue render',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueue', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueue_pauseRendering',
        label: 'RenderQueue pauseRendering',
        keywords: ['renderqueue', 'pauserendering'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueue pauseRendering',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueue', type: 'expr' },
              { id: 'pause', label: 'pause', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueue_queueInAME',
        label: 'RenderQueue queueInAME',
        keywords: ['renderqueue', 'queueiname'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueue queueInAME',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueue', type: 'expr' },
              { id: 'render_immediately_in_AME', label: 'render_immediately_in_AME', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueue_stopRendering',
        label: 'RenderQueue stopRendering',
        keywords: ['renderqueue', 'stoprendering'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueue stopRendering',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueue', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueue_item',
        label: 'RenderQueue item',
        keywords: ['renderqueue', 'item'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueue item',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueue', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'RenderQueueItem',
    items: [
      {
        type: 'ae_RenderQueueItem_get_numOutputModules',
        label: 'RenderQueueItem Get numOutputModules',
        keywords: ['renderqueueitem', 'numoutputmodules', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem Get numOutputModules',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numOutputModules' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_get_startTime',
        label: 'RenderQueueItem Get startTime',
        keywords: ['renderqueueitem', 'starttime', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem Get startTime',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'startTime' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_get_elapsedSeconds',
        label: 'RenderQueueItem Get elapsedSeconds',
        keywords: ['renderqueueitem', 'elapsedseconds', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem Get elapsedSeconds',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'elapsedSeconds' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_get_comp',
        label: 'RenderQueueItem Get comp',
        keywords: ['renderqueueitem', 'comp', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem Get comp',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comp' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_get_outputModules',
        label: 'RenderQueueItem Get outputModules',
        keywords: ['renderqueueitem', 'outputmodules', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem Get outputModules',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'outputModules' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_get_templates',
        label: 'RenderQueueItem Get templates',
        keywords: ['renderqueueitem', 'templates', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem Get templates',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'templates' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_get_status',
        label: 'RenderQueueItem Get status',
        keywords: ['renderqueueitem', 'status', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem Get status',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'status' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_get_render',
        label: 'RenderQueueItem Get render',
        keywords: ['renderqueueitem', 'render', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem Get render',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'render' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_get_timeSpanStart',
        label: 'RenderQueueItem Get timeSpanStart',
        keywords: ['renderqueueitem', 'timespanstart', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem Get timeSpanStart',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'timeSpanStart' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_get_timeSpanDuration',
        label: 'RenderQueueItem Get timeSpanDuration',
        keywords: ['renderqueueitem', 'timespanduration', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem Get timeSpanDuration',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'timeSpanDuration' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_get_skipFrames',
        label: 'RenderQueueItem Get skipFrames',
        keywords: ['renderqueueitem', 'skipframes', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem Get skipFrames',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'skipFrames' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_get_onStatus',
        label: 'RenderQueueItem Get onStatus',
        keywords: ['renderqueueitem', 'onstatus', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem Get onStatus',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'onStatus' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_get_logType',
        label: 'RenderQueueItem Get logType',
        keywords: ['renderqueueitem', 'logtype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem Get logType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'logType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_getSetting',
        label: 'RenderQueueItem getSetting',
        keywords: ['renderqueueitem', 'getsetting'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem getSetting',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueueItem', type: 'expr' },
              { id: 'key', label: 'key', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_getSettings',
        label: 'RenderQueueItem getSettings',
        keywords: ['renderqueueitem', 'getsettings'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem getSettings',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueueItem', type: 'expr' },
              { id: 'format', label: 'format', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_setSetting',
        label: 'RenderQueueItem setSetting',
        keywords: ['renderqueueitem', 'setsetting'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem setSetting',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueueItem', type: 'expr' },
              { id: 'key', label: 'key', type: 'text' },
              { id: 'value', label: 'value', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_setSettings',
        label: 'RenderQueueItem setSettings',
        keywords: ['renderqueueitem', 'setsettings'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem setSettings',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueueItem', type: 'expr' },
              { id: 'settings', label: 'settings', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_outputModule',
        label: 'RenderQueueItem outputModule',
        keywords: ['renderqueueitem', 'outputmodule'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem outputModule',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueueItem', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_remove',
        label: 'RenderQueueItem remove',
        keywords: ['renderqueueitem', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_saveAsTemplate',
        label: 'RenderQueueItem saveAsTemplate',
        keywords: ['renderqueueitem', 'saveastemplate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem saveAsTemplate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueueItem', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_applyTemplate',
        label: 'RenderQueueItem applyTemplate',
        keywords: ['renderqueueitem', 'applytemplate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem applyTemplate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueueItem', type: 'expr' },
              { id: 'templateName', label: 'templateName', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RenderQueueItem_duplicate',
        label: 'RenderQueueItem duplicate',
        keywords: ['renderqueueitem', 'duplicate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RenderQueueItem duplicate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RenderQueueItem', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'RQItemCollection',
    items: [
      {
        type: 'ae_RQItemCollection_get_length',
        label: 'RQItemCollection Get length',
        keywords: ['rqitemcollection', 'length', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RQItemCollection Get length',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'RQItemCollection', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'length' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_RQItemCollection_add',
        label: 'RQItemCollection add',
        keywords: ['rqitemcollection', 'add'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'RQItemCollection add',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'RQItemCollection', type: 'expr' },
              { id: 'comp', label: 'comp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'Settings',
    items: [
      {
        type: 'ae_Settings_saveSetting',
        label: 'Settings saveSetting',
        keywords: ['settings', 'savesetting'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Settings saveSetting',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Settings', type: 'expr' },
              { id: 'sectionName', label: 'sectionName', type: 'text' },
              { id: 'keyName', label: 'keyName', type: 'text' },
              { id: 'value', label: 'value', type: 'text' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Settings_getSetting',
        label: 'Settings getSetting',
        keywords: ['settings', 'getsetting'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Settings getSetting',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Settings', type: 'expr' },
              { id: 'sectionName', label: 'sectionName', type: 'text' },
              { id: 'keyName', label: 'keyName', type: 'text' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Settings_haveSetting',
        label: 'Settings haveSetting',
        keywords: ['settings', 'havesetting'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Settings haveSetting',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Settings', type: 'expr' },
              { id: 'sectionName', label: 'sectionName', type: 'text' },
              { id: 'keyName', label: 'keyName', type: 'text' },
              { id: 'type', label: 'type', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'Shape',
    items: [
      {
        type: 'ae_Shape_get_closed',
        label: 'Shape Get closed',
        keywords: ['shape', 'closed', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Shape Get closed',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Shape', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'closed' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Shape_get_vertices',
        label: 'Shape Get vertices',
        keywords: ['shape', 'vertices', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Shape Get vertices',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Shape', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'vertices' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Shape_get_inTangents',
        label: 'Shape Get inTangents',
        keywords: ['shape', 'intangents', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Shape Get inTangents',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Shape', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'inTangents' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Shape_get_outTangents',
        label: 'Shape Get outTangents',
        keywords: ['shape', 'outtangents', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Shape Get outTangents',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Shape', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'outTangents' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Shape_get_featherSegLocs',
        label: 'Shape Get featherSegLocs',
        keywords: ['shape', 'featherseglocs', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Shape Get featherSegLocs',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Shape', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'featherSegLocs' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Shape_get_featherRelSegLocs',
        label: 'Shape Get featherRelSegLocs',
        keywords: ['shape', 'featherrelseglocs', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Shape Get featherRelSegLocs',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Shape', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'featherRelSegLocs' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Shape_get_featherRadii',
        label: 'Shape Get featherRadii',
        keywords: ['shape', 'featherradii', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Shape Get featherRadii',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Shape', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'featherRadii' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Shape_get_featherInterps',
        label: 'Shape Get featherInterps',
        keywords: ['shape', 'featherinterps', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Shape Get featherInterps',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Shape', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'featherInterps' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Shape_get_featherTensions',
        label: 'Shape Get featherTensions',
        keywords: ['shape', 'feathertensions', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Shape Get featherTensions',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Shape', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'featherTensions' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Shape_get_featherTypes',
        label: 'Shape Get featherTypes',
        keywords: ['shape', 'feathertypes', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Shape Get featherTypes',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Shape', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'featherTypes' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Shape_get_featherRelCornerAngles',
        label: 'Shape Get featherRelCornerAngles',
        keywords: ['shape', 'featherrelcornerangles', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Shape Get featherRelCornerAngles',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Shape', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'featherRelCornerAngles' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'ShapeLayer',
    items: [
      {
        type: 'ae_ShapeLayer_get_source',
        label: 'ShapeLayer Get source',
        keywords: ['shapelayer', 'source', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get source',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'source' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_isNameFromSource',
        label: 'ShapeLayer Get isNameFromSource',
        keywords: ['shapelayer', 'isnamefromsource', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get isNameFromSource',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isNameFromSource' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_height',
        label: 'ShapeLayer Get height',
        keywords: ['shapelayer', 'height', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get height',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'height' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_width',
        label: 'ShapeLayer Get width',
        keywords: ['shapelayer', 'width', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get width',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'width' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_canSetCollapseTransformation',
        label: 'ShapeLayer Get canSetCollapseTransformation',
        keywords: ['shapelayer', 'cansetcollapsetransformation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get canSetCollapseTransformation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetCollapseTransformation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_frameBlending',
        label: 'ShapeLayer Get frameBlending',
        keywords: ['shapelayer', 'frameblending', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get frameBlending',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameBlending' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_canSetTimeRemapEnabled',
        label: 'ShapeLayer Get canSetTimeRemapEnabled',
        keywords: ['shapelayer', 'cansettimeremapenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get canSetTimeRemapEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetTimeRemapEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_hasAudio',
        label: 'ShapeLayer Get hasAudio',
        keywords: ['shapelayer', 'hasaudio', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get hasAudio',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasAudio' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_audioActive',
        label: 'ShapeLayer Get audioActive',
        keywords: ['shapelayer', 'audioactive', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get audioActive',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'audioActive' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_isTrackMatte',
        label: 'ShapeLayer Get isTrackMatte',
        keywords: ['shapelayer', 'istrackmatte', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get isTrackMatte',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isTrackMatte' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_hasTrackMatte',
        label: 'ShapeLayer Get hasTrackMatte',
        keywords: ['shapelayer', 'hastrackmatte', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get hasTrackMatte',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasTrackMatte' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_audioEnabled',
        label: 'ShapeLayer Get audioEnabled',
        keywords: ['shapelayer', 'audioenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get audioEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'audioEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_motionBlur',
        label: 'ShapeLayer Get motionBlur',
        keywords: ['shapelayer', 'motionblur', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get motionBlur',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'motionBlur' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_effectsActive',
        label: 'ShapeLayer Get effectsActive',
        keywords: ['shapelayer', 'effectsactive', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get effectsActive',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'effectsActive' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_adjustmentLayer',
        label: 'ShapeLayer Get adjustmentLayer',
        keywords: ['shapelayer', 'adjustmentlayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get adjustmentLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'adjustmentLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_environmentLayer',
        label: 'ShapeLayer Get environmentLayer',
        keywords: ['shapelayer', 'environmentlayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get environmentLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'environmentLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_guideLayer',
        label: 'ShapeLayer Get guideLayer',
        keywords: ['shapelayer', 'guidelayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get guideLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'guideLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_threeDLayer',
        label: 'ShapeLayer Get threeDLayer',
        keywords: ['shapelayer', 'threedlayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get threeDLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'threeDLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_threeDPerChar',
        label: 'ShapeLayer Get threeDPerChar',
        keywords: ['shapelayer', 'threedperchar', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get threeDPerChar',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'threeDPerChar' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_collapseTransformation',
        label: 'ShapeLayer Get collapseTransformation',
        keywords: ['shapelayer', 'collapsetransformation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get collapseTransformation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'collapseTransformation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_frameBlendingType',
        label: 'ShapeLayer Get frameBlendingType',
        keywords: ['shapelayer', 'frameblendingtype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get frameBlendingType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameBlendingType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_timeRemapEnabled',
        label: 'ShapeLayer Get timeRemapEnabled',
        keywords: ['shapelayer', 'timeremapenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get timeRemapEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'timeRemapEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_blendingMode',
        label: 'ShapeLayer Get blendingMode',
        keywords: ['shapelayer', 'blendingmode', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get blendingMode',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'blendingMode' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_preserveTransparency',
        label: 'ShapeLayer Get preserveTransparency',
        keywords: ['shapelayer', 'preservetransparency', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get preserveTransparency',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'preserveTransparency' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_samplingQuality',
        label: 'ShapeLayer Get samplingQuality',
        keywords: ['shapelayer', 'samplingquality', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get samplingQuality',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'samplingQuality' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_trackMatteType',
        label: 'ShapeLayer Get trackMatteType',
        keywords: ['shapelayer', 'trackmattetype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get trackMatteType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'trackMatteType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_quality',
        label: 'ShapeLayer Get quality',
        keywords: ['shapelayer', 'quality', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get quality',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'quality' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_timeRemap',
        label: 'ShapeLayer Get timeRemap',
        keywords: ['shapelayer', 'timeremap', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get timeRemap',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'timeRemap' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_mask',
        label: 'ShapeLayer Get mask',
        keywords: ['shapelayer', 'mask', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get mask',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'mask' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_effect',
        label: 'ShapeLayer Get effect',
        keywords: ['shapelayer', 'effect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get effect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'effect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_layerStyle',
        label: 'ShapeLayer Get layerStyle',
        keywords: ['shapelayer', 'layerstyle', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get layerStyle',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'layerStyle' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_geometryOption',
        label: 'ShapeLayer Get geometryOption',
        keywords: ['shapelayer', 'geometryoption', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get geometryOption',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'geometryOption' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_materialOption',
        label: 'ShapeLayer Get materialOption',
        keywords: ['shapelayer', 'materialoption', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get materialOption',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'materialOption' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_audio',
        label: 'ShapeLayer Get audio',
        keywords: ['shapelayer', 'audio', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get audio',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'audio' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_index',
        label: 'ShapeLayer Get index',
        keywords: ['shapelayer', 'index', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get index',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'index' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_time',
        label: 'ShapeLayer Get time',
        keywords: ['shapelayer', 'time', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get time',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'time' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_hasVideo',
        label: 'ShapeLayer Get hasVideo',
        keywords: ['shapelayer', 'hasvideo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get hasVideo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasVideo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_active',
        label: 'ShapeLayer Get active',
        keywords: ['shapelayer', 'active', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get active',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'active' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_nullLayer',
        label: 'ShapeLayer Get nullLayer',
        keywords: ['shapelayer', 'nulllayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get nullLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'nullLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_selectedProperties',
        label: 'ShapeLayer Get selectedProperties',
        keywords: ['shapelayer', 'selectedproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get selectedProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selectedProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_containingComp',
        label: 'ShapeLayer Get containingComp',
        keywords: ['shapelayer', 'containingcomp', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get containingComp',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'containingComp' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_isNameSet',
        label: 'ShapeLayer Get isNameSet',
        keywords: ['shapelayer', 'isnameset', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get isNameSet',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isNameSet' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_name',
        label: 'ShapeLayer Get name',
        keywords: ['shapelayer', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_parent',
        label: 'ShapeLayer Get parent',
        keywords: ['shapelayer', 'parent', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get parent',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parent' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_startTime',
        label: 'ShapeLayer Get startTime',
        keywords: ['shapelayer', 'starttime', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get startTime',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'startTime' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_stretch',
        label: 'ShapeLayer Get stretch',
        keywords: ['shapelayer', 'stretch', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get stretch',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'stretch' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_inPoint',
        label: 'ShapeLayer Get inPoint',
        keywords: ['shapelayer', 'inpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get inPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'inPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_outPoint',
        label: 'ShapeLayer Get outPoint',
        keywords: ['shapelayer', 'outpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get outPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'outPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_enabled',
        label: 'ShapeLayer Get enabled',
        keywords: ['shapelayer', 'enabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get enabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'enabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_solo',
        label: 'ShapeLayer Get solo',
        keywords: ['shapelayer', 'solo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get solo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'solo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_shy',
        label: 'ShapeLayer Get shy',
        keywords: ['shapelayer', 'shy', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get shy',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'shy' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_locked',
        label: 'ShapeLayer Get locked',
        keywords: ['shapelayer', 'locked', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get locked',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'locked' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_comment',
        label: 'ShapeLayer Get comment',
        keywords: ['shapelayer', 'comment', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get comment',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comment' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_label',
        label: 'ShapeLayer Get label',
        keywords: ['shapelayer', 'label', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get label',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'label' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_autoOrient',
        label: 'ShapeLayer Get autoOrient',
        keywords: ['shapelayer', 'autoorient', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get autoOrient',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'autoOrient' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_marker',
        label: 'ShapeLayer Get marker',
        keywords: ['shapelayer', 'marker', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get marker',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'marker' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_transform',
        label: 'ShapeLayer Get transform',
        keywords: ['shapelayer', 'transform', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get transform',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'transform' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_anchorPoint',
        label: 'ShapeLayer Get anchorPoint',
        keywords: ['shapelayer', 'anchorpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get anchorPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'anchorPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_position',
        label: 'ShapeLayer Get position',
        keywords: ['shapelayer', 'position', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get position',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'position' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_xPosition',
        label: 'ShapeLayer Get xPosition',
        keywords: ['shapelayer', 'xposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get xPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'xPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_yPosition',
        label: 'ShapeLayer Get yPosition',
        keywords: ['shapelayer', 'yposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get yPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'yPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_zPosition',
        label: 'ShapeLayer Get zPosition',
        keywords: ['shapelayer', 'zposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get zPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'zPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_scale',
        label: 'ShapeLayer Get scale',
        keywords: ['shapelayer', 'scale', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get scale',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'scale' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_orientation',
        label: 'ShapeLayer Get orientation',
        keywords: ['shapelayer', 'orientation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get orientation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'orientation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_rotation',
        label: 'ShapeLayer Get rotation',
        keywords: ['shapelayer', 'rotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get rotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'rotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_xRotation',
        label: 'ShapeLayer Get xRotation',
        keywords: ['shapelayer', 'xrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get xRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'xRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_yRotation',
        label: 'ShapeLayer Get yRotation',
        keywords: ['shapelayer', 'yrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get yRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'yRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_zRotation',
        label: 'ShapeLayer Get zRotation',
        keywords: ['shapelayer', 'zrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get zRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'zRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_opacity',
        label: 'ShapeLayer Get opacity',
        keywords: ['shapelayer', 'opacity', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get opacity',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'opacity' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_pointOfInterest',
        label: 'ShapeLayer Get pointOfInterest',
        keywords: ['shapelayer', 'pointofinterest', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get pointOfInterest',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'pointOfInterest' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_numProperties',
        label: 'ShapeLayer Get numProperties',
        keywords: ['shapelayer', 'numproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get numProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_matchName',
        label: 'ShapeLayer Get matchName',
        keywords: ['shapelayer', 'matchname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get matchName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'matchName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_propertyIndex',
        label: 'ShapeLayer Get propertyIndex',
        keywords: ['shapelayer', 'propertyindex', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get propertyIndex',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyIndex' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_propertyDepth',
        label: 'ShapeLayer Get propertyDepth',
        keywords: ['shapelayer', 'propertydepth', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get propertyDepth',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyDepth' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_propertyType',
        label: 'ShapeLayer Get propertyType',
        keywords: ['shapelayer', 'propertytype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get propertyType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_parentProperty',
        label: 'ShapeLayer Get parentProperty',
        keywords: ['shapelayer', 'parentproperty', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get parentProperty',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentProperty' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_isModified',
        label: 'ShapeLayer Get isModified',
        keywords: ['shapelayer', 'ismodified', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get isModified',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isModified' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_canSetEnabled',
        label: 'ShapeLayer Get canSetEnabled',
        keywords: ['shapelayer', 'cansetenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get canSetEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_elided',
        label: 'ShapeLayer Get elided',
        keywords: ['shapelayer', 'elided', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get elided',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'elided' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_isEffect',
        label: 'ShapeLayer Get isEffect',
        keywords: ['shapelayer', 'iseffect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get isEffect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isEffect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_isMask',
        label: 'ShapeLayer Get isMask',
        keywords: ['shapelayer', 'ismask', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get isMask',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMask' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_get_selected',
        label: 'ShapeLayer Get selected',
        keywords: ['shapelayer', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_audioActiveAtTime',
        label: 'ShapeLayer audioActiveAtTime',
        keywords: ['shapelayer', 'audioactiveattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer audioActiveAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_calculateTransformFromPoints',
        label: 'ShapeLayer calculateTransformFromPoints',
        keywords: ['shapelayer', 'calculatetransformfrompoints'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer calculateTransformFromPoints',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'pointTopLeft', label: 'pointTopLeft', type: 'expr' },
              { id: 'pointTopRight', label: 'pointTopRight', type: 'expr' },
              { id: 'pointBottomRight', label: 'pointBottomRight', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_sourcePointToComp',
        label: 'ShapeLayer sourcePointToComp',
        keywords: ['shapelayer', 'sourcepointtocomp'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer sourcePointToComp',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'point', label: 'point', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_compPointToSource',
        label: 'ShapeLayer compPointToSource',
        keywords: ['shapelayer', 'comppointtosource'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer compPointToSource',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'point', label: 'point', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_openInViewer',
        label: 'ShapeLayer openInViewer',
        keywords: ['shapelayer', 'openinviewer'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer openInViewer',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_replaceSource',
        label: 'ShapeLayer replaceSource',
        keywords: ['shapelayer', 'replacesource'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer replaceSource',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'newSource', label: 'newSource', type: 'expr' },
              { id: 'fixExpressions', label: 'fixExpressions', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_sourceRectAtTime',
        label: 'ShapeLayer sourceRectAtTime',
        keywords: ['shapelayer', 'sourcerectattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer sourceRectAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'timeT', label: 'timeT', type: 'number' },
              { id: 'extents', label: 'extents', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_addToMotionGraphicsTemplate',
        label: 'ShapeLayer addToMotionGraphicsTemplate',
        keywords: ['shapelayer', 'addtomotiongraphicstemplate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer addToMotionGraphicsTemplate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'comp', label: 'comp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_addToMotionGraphicsTemplateAs',
        label: 'ShapeLayer addToMotionGraphicsTemplateAs',
        keywords: ['shapelayer', 'addtomotiongraphicstemplateas'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer addToMotionGraphicsTemplateAs',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'comp', label: 'comp', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_canAddToMotionGraphicsTemplate',
        label: 'ShapeLayer canAddToMotionGraphicsTemplate',
        keywords: ['shapelayer', 'canaddtomotiongraphicstemplate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer canAddToMotionGraphicsTemplate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'comp', label: 'comp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_moveToBeginning',
        label: 'ShapeLayer moveToBeginning',
        keywords: ['shapelayer', 'movetobeginning'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer moveToBeginning',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_moveToEnd',
        label: 'ShapeLayer moveToEnd',
        keywords: ['shapelayer', 'movetoend'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer moveToEnd',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_moveAfter',
        label: 'ShapeLayer moveAfter',
        keywords: ['shapelayer', 'moveafter'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer moveAfter',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'layer', label: 'layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_moveBefore',
        label: 'ShapeLayer moveBefore',
        keywords: ['shapelayer', 'movebefore'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer moveBefore',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'layer', label: 'layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_duplicate',
        label: 'ShapeLayer duplicate',
        keywords: ['shapelayer', 'duplicate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer duplicate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_copyToComp',
        label: 'ShapeLayer copyToComp',
        keywords: ['shapelayer', 'copytocomp'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer copyToComp',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'intoComp', label: 'intoComp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_activeAtTime',
        label: 'ShapeLayer activeAtTime',
        keywords: ['shapelayer', 'activeattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer activeAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_setParentWithJump',
        label: 'ShapeLayer setParentWithJump',
        keywords: ['shapelayer', 'setparentwithjump'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer setParentWithJump',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'newParent', label: 'newParent', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_applyPreset',
        label: 'ShapeLayer applyPreset',
        keywords: ['shapelayer', 'applypreset'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer applyPreset',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'presetName', label: 'presetName', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_canAddProperty',
        label: 'ShapeLayer canAddProperty',
        keywords: ['shapelayer', 'canaddproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer canAddProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_addProperty',
        label: 'ShapeLayer addProperty',
        keywords: ['shapelayer', 'addproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer addProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_propertyGroup',
        label: 'ShapeLayer propertyGroup',
        keywords: ['shapelayer', 'propertygroup'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer propertyGroup',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'countUp', label: 'countUp', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_remove',
        label: 'ShapeLayer remove',
        keywords: ['shapelayer', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_moveTo',
        label: 'ShapeLayer moveTo',
        keywords: ['shapelayer', 'moveto'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer moveTo',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'newIndex', label: 'newIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_property_index',
        label: 'ShapeLayer property (index)',
        keywords: ['shapelayer', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer property (index)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ShapeLayer_property_name',
        label: 'ShapeLayer property (name)',
        keywords: ['shapelayer', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ShapeLayer property (name)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'ShapeLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'SolidSource',
    items: [
      {
        type: 'ae_SolidSource_get_color',
        label: 'SolidSource Get color',
        keywords: ['solidsource', 'color', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get color',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'color' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_get_file',
        label: 'SolidSource Get file',
        keywords: ['solidsource', 'file', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get file',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'file' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_get_isStill',
        label: 'SolidSource Get isStill',
        keywords: ['solidsource', 'isstill', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get isStill',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isStill' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_get_displayFrameRate',
        label: 'SolidSource Get displayFrameRate',
        keywords: ['solidsource', 'displayframerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get displayFrameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'displayFrameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_get_hasAlpha',
        label: 'SolidSource Get hasAlpha',
        keywords: ['solidsource', 'hasalpha', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get hasAlpha',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasAlpha' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_get_alphaMode',
        label: 'SolidSource Get alphaMode',
        keywords: ['solidsource', 'alphamode', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get alphaMode',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'alphaMode' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_get_premulColor',
        label: 'SolidSource Get premulColor',
        keywords: ['solidsource', 'premulcolor', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get premulColor',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'premulColor' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_get_invertAlpha',
        label: 'SolidSource Get invertAlpha',
        keywords: ['solidsource', 'invertalpha', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get invertAlpha',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'invertAlpha' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_get_fieldSeparationType',
        label: 'SolidSource Get fieldSeparationType',
        keywords: ['solidsource', 'fieldseparationtype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get fieldSeparationType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'fieldSeparationType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_get_highQualityFieldSeparation',
        label: 'SolidSource Get highQualityFieldSeparation',
        keywords: ['solidsource', 'highqualityfieldseparation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get highQualityFieldSeparation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'highQualityFieldSeparation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_get_removePulldown',
        label: 'SolidSource Get removePulldown',
        keywords: ['solidsource', 'removepulldown', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get removePulldown',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'removePulldown' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_get_loop',
        label: 'SolidSource Get loop',
        keywords: ['solidsource', 'loop', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get loop',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'loop' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_get_nativeFrameRate',
        label: 'SolidSource Get nativeFrameRate',
        keywords: ['solidsource', 'nativeframerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get nativeFrameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'nativeFrameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_get_conformFrameRate',
        label: 'SolidSource Get conformFrameRate',
        keywords: ['solidsource', 'conformframerate', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource Get conformFrameRate',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'conformFrameRate' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_guessAlphaMode',
        label: 'SolidSource guessAlphaMode',
        keywords: ['solidsource', 'guessalphamode'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource guessAlphaMode',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'SolidSource', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_SolidSource_guessPulldown',
        label: 'SolidSource guessPulldown',
        keywords: ['solidsource', 'guesspulldown'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'SolidSource guessPulldown',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'SolidSource', type: 'expr' },
              { id: 'method', label: 'method', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'System',
    items: [
      {
        type: 'ae_System_get_userName',
        label: 'System Get userName',
        keywords: ['system', 'username', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'System Get userName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'System', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'userName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_System_get_machineName',
        label: 'System Get machineName',
        keywords: ['system', 'machinename', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'System Get machineName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'System', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'machineName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_System_get_osName',
        label: 'System Get osName',
        keywords: ['system', 'osname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'System Get osName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'System', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'osName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_System_get_osVersion',
        label: 'System Get osVersion',
        keywords: ['system', 'osversion', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'System Get osVersion',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'System', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'osVersion' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_System_callSystem',
        label: 'System callSystem',
        keywords: ['system', 'callsystem'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'System callSystem',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'System', type: 'expr' },
              { id: 'cmdLineToExecute', label: 'cmdLineToExecute', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'TextDocument',
    items: [
      {
        type: 'ae_TextDocument_get_pointText',
        label: 'TextDocument Get pointText',
        keywords: ['textdocument', 'pointtext', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get pointText',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'pointText' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_boxText',
        label: 'TextDocument Get boxText',
        keywords: ['textdocument', 'boxtext', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get boxText',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'boxText' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_fontLocation',
        label: 'TextDocument Get fontLocation',
        keywords: ['textdocument', 'fontlocation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get fontLocation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'fontLocation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_fontStyle',
        label: 'TextDocument Get fontStyle',
        keywords: ['textdocument', 'fontstyle', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get fontStyle',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'fontStyle' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_fontFamily',
        label: 'TextDocument Get fontFamily',
        keywords: ['textdocument', 'fontfamily', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get fontFamily',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'fontFamily' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_fauxBold',
        label: 'TextDocument Get fauxBold',
        keywords: ['textdocument', 'fauxbold', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get fauxBold',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'fauxBold' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_fauxItalic',
        label: 'TextDocument Get fauxItalic',
        keywords: ['textdocument', 'fauxitalic', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get fauxItalic',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'fauxItalic' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_allCaps',
        label: 'TextDocument Get allCaps',
        keywords: ['textdocument', 'allcaps', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get allCaps',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'allCaps' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_smallCaps',
        label: 'TextDocument Get smallCaps',
        keywords: ['textdocument', 'smallcaps', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get smallCaps',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'smallCaps' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_superscript',
        label: 'TextDocument Get superscript',
        keywords: ['textdocument', 'superscript', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get superscript',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'superscript' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_subscript',
        label: 'TextDocument Get subscript',
        keywords: ['textdocument', 'subscript', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get subscript',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'subscript' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_verticalScale',
        label: 'TextDocument Get verticalScale',
        keywords: ['textdocument', 'verticalscale', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get verticalScale',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'verticalScale' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_horizontalScale',
        label: 'TextDocument Get horizontalScale',
        keywords: ['textdocument', 'horizontalscale', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get horizontalScale',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'horizontalScale' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_baselineShift',
        label: 'TextDocument Get baselineShift',
        keywords: ['textdocument', 'baselineshift', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get baselineShift',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'baselineShift' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_tsume',
        label: 'TextDocument Get tsume',
        keywords: ['textdocument', 'tsume', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get tsume',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'tsume' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_boxTextPos',
        label: 'TextDocument Get boxTextPos',
        keywords: ['textdocument', 'boxtextpos', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get boxTextPos',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'boxTextPos' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_baselineLocs',
        label: 'TextDocument Get baselineLocs',
        keywords: ['textdocument', 'baselinelocs', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get baselineLocs',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'baselineLocs' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_text',
        label: 'TextDocument Get text',
        keywords: ['textdocument', 'text', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get text',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'text' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_applyFill',
        label: 'TextDocument Get applyFill',
        keywords: ['textdocument', 'applyfill', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get applyFill',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'applyFill' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_applyStroke',
        label: 'TextDocument Get applyStroke',
        keywords: ['textdocument', 'applystroke', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get applyStroke',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'applyStroke' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_fillColor',
        label: 'TextDocument Get fillColor',
        keywords: ['textdocument', 'fillcolor', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get fillColor',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'fillColor' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_font',
        label: 'TextDocument Get font',
        keywords: ['textdocument', 'font', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get font',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'font' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_fontSize',
        label: 'TextDocument Get fontSize',
        keywords: ['textdocument', 'fontsize', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get fontSize',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'fontSize' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_justification',
        label: 'TextDocument Get justification',
        keywords: ['textdocument', 'justification', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get justification',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'justification' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_leading',
        label: 'TextDocument Get leading',
        keywords: ['textdocument', 'leading', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get leading',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'leading' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_strokeColor',
        label: 'TextDocument Get strokeColor',
        keywords: ['textdocument', 'strokecolor', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get strokeColor',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'strokeColor' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_strokeOverFill',
        label: 'TextDocument Get strokeOverFill',
        keywords: ['textdocument', 'strokeoverfill', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get strokeOverFill',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'strokeOverFill' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_strokeWidth',
        label: 'TextDocument Get strokeWidth',
        keywords: ['textdocument', 'strokewidth', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get strokeWidth',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'strokeWidth' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_tracking',
        label: 'TextDocument Get tracking',
        keywords: ['textdocument', 'tracking', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get tracking',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'tracking' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_get_boxTextSize',
        label: 'TextDocument Get boxTextSize',
        keywords: ['textdocument', 'boxtextsize', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument Get boxTextSize',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'boxTextSize' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_resetCharStyle',
        label: 'TextDocument resetCharStyle',
        keywords: ['textdocument', 'resetcharstyle'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument resetCharStyle',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextDocument_resetParagraphStyle',
        label: 'TextDocument resetParagraphStyle',
        keywords: ['textdocument', 'resetparagraphstyle'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextDocument resetParagraphStyle',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextDocument', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'TextLayer',
    items: [
      {
        type: 'ae_TextLayer_get_source',
        label: 'TextLayer Get source',
        keywords: ['textlayer', 'source', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get source',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'source' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_text',
        label: 'TextLayer Get text',
        keywords: ['textlayer', 'text', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get text',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'text' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_sourceText',
        label: 'TextLayer Get sourceText',
        keywords: ['textlayer', 'sourcetext', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get sourceText',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'sourceText' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_isNameFromSource',
        label: 'TextLayer Get isNameFromSource',
        keywords: ['textlayer', 'isnamefromsource', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get isNameFromSource',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isNameFromSource' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_height',
        label: 'TextLayer Get height',
        keywords: ['textlayer', 'height', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get height',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'height' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_width',
        label: 'TextLayer Get width',
        keywords: ['textlayer', 'width', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get width',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'width' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_canSetCollapseTransformation',
        label: 'TextLayer Get canSetCollapseTransformation',
        keywords: ['textlayer', 'cansetcollapsetransformation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get canSetCollapseTransformation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetCollapseTransformation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_frameBlending',
        label: 'TextLayer Get frameBlending',
        keywords: ['textlayer', 'frameblending', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get frameBlending',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameBlending' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_canSetTimeRemapEnabled',
        label: 'TextLayer Get canSetTimeRemapEnabled',
        keywords: ['textlayer', 'cansettimeremapenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get canSetTimeRemapEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetTimeRemapEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_hasAudio',
        label: 'TextLayer Get hasAudio',
        keywords: ['textlayer', 'hasaudio', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get hasAudio',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasAudio' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_audioActive',
        label: 'TextLayer Get audioActive',
        keywords: ['textlayer', 'audioactive', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get audioActive',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'audioActive' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_isTrackMatte',
        label: 'TextLayer Get isTrackMatte',
        keywords: ['textlayer', 'istrackmatte', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get isTrackMatte',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isTrackMatte' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_hasTrackMatte',
        label: 'TextLayer Get hasTrackMatte',
        keywords: ['textlayer', 'hastrackmatte', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get hasTrackMatte',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasTrackMatte' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_audioEnabled',
        label: 'TextLayer Get audioEnabled',
        keywords: ['textlayer', 'audioenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get audioEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'audioEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_motionBlur',
        label: 'TextLayer Get motionBlur',
        keywords: ['textlayer', 'motionblur', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get motionBlur',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'motionBlur' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_effectsActive',
        label: 'TextLayer Get effectsActive',
        keywords: ['textlayer', 'effectsactive', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get effectsActive',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'effectsActive' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_adjustmentLayer',
        label: 'TextLayer Get adjustmentLayer',
        keywords: ['textlayer', 'adjustmentlayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get adjustmentLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'adjustmentLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_environmentLayer',
        label: 'TextLayer Get environmentLayer',
        keywords: ['textlayer', 'environmentlayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get environmentLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'environmentLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_guideLayer',
        label: 'TextLayer Get guideLayer',
        keywords: ['textlayer', 'guidelayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get guideLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'guideLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_threeDLayer',
        label: 'TextLayer Get threeDLayer',
        keywords: ['textlayer', 'threedlayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get threeDLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'threeDLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_threeDPerChar',
        label: 'TextLayer Get threeDPerChar',
        keywords: ['textlayer', 'threedperchar', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get threeDPerChar',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'threeDPerChar' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_collapseTransformation',
        label: 'TextLayer Get collapseTransformation',
        keywords: ['textlayer', 'collapsetransformation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get collapseTransformation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'collapseTransformation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_frameBlendingType',
        label: 'TextLayer Get frameBlendingType',
        keywords: ['textlayer', 'frameblendingtype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get frameBlendingType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'frameBlendingType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_timeRemapEnabled',
        label: 'TextLayer Get timeRemapEnabled',
        keywords: ['textlayer', 'timeremapenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get timeRemapEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'timeRemapEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_blendingMode',
        label: 'TextLayer Get blendingMode',
        keywords: ['textlayer', 'blendingmode', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get blendingMode',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'blendingMode' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_preserveTransparency',
        label: 'TextLayer Get preserveTransparency',
        keywords: ['textlayer', 'preservetransparency', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get preserveTransparency',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'preserveTransparency' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_samplingQuality',
        label: 'TextLayer Get samplingQuality',
        keywords: ['textlayer', 'samplingquality', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get samplingQuality',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'samplingQuality' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_trackMatteType',
        label: 'TextLayer Get trackMatteType',
        keywords: ['textlayer', 'trackmattetype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get trackMatteType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'trackMatteType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_quality',
        label: 'TextLayer Get quality',
        keywords: ['textlayer', 'quality', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get quality',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'quality' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_timeRemap',
        label: 'TextLayer Get timeRemap',
        keywords: ['textlayer', 'timeremap', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get timeRemap',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'timeRemap' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_mask',
        label: 'TextLayer Get mask',
        keywords: ['textlayer', 'mask', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get mask',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'mask' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_effect',
        label: 'TextLayer Get effect',
        keywords: ['textlayer', 'effect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get effect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'effect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_layerStyle',
        label: 'TextLayer Get layerStyle',
        keywords: ['textlayer', 'layerstyle', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get layerStyle',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'layerStyle' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_geometryOption',
        label: 'TextLayer Get geometryOption',
        keywords: ['textlayer', 'geometryoption', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get geometryOption',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'geometryOption' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_materialOption',
        label: 'TextLayer Get materialOption',
        keywords: ['textlayer', 'materialoption', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get materialOption',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'materialOption' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_audio',
        label: 'TextLayer Get audio',
        keywords: ['textlayer', 'audio', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get audio',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'audio' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_index',
        label: 'TextLayer Get index',
        keywords: ['textlayer', 'index', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get index',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'index' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_time',
        label: 'TextLayer Get time',
        keywords: ['textlayer', 'time', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get time',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'time' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_hasVideo',
        label: 'TextLayer Get hasVideo',
        keywords: ['textlayer', 'hasvideo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get hasVideo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'hasVideo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_active',
        label: 'TextLayer Get active',
        keywords: ['textlayer', 'active', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get active',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'active' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_nullLayer',
        label: 'TextLayer Get nullLayer',
        keywords: ['textlayer', 'nulllayer', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get nullLayer',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'nullLayer' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_selectedProperties',
        label: 'TextLayer Get selectedProperties',
        keywords: ['textlayer', 'selectedproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get selectedProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selectedProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_containingComp',
        label: 'TextLayer Get containingComp',
        keywords: ['textlayer', 'containingcomp', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get containingComp',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'containingComp' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_isNameSet',
        label: 'TextLayer Get isNameSet',
        keywords: ['textlayer', 'isnameset', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get isNameSet',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isNameSet' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_name',
        label: 'TextLayer Get name',
        keywords: ['textlayer', 'name', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get name',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'name' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_parent',
        label: 'TextLayer Get parent',
        keywords: ['textlayer', 'parent', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get parent',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parent' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_startTime',
        label: 'TextLayer Get startTime',
        keywords: ['textlayer', 'starttime', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get startTime',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'startTime' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_stretch',
        label: 'TextLayer Get stretch',
        keywords: ['textlayer', 'stretch', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get stretch',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'stretch' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_inPoint',
        label: 'TextLayer Get inPoint',
        keywords: ['textlayer', 'inpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get inPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'inPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_outPoint',
        label: 'TextLayer Get outPoint',
        keywords: ['textlayer', 'outpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get outPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'outPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_enabled',
        label: 'TextLayer Get enabled',
        keywords: ['textlayer', 'enabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get enabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'enabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_solo',
        label: 'TextLayer Get solo',
        keywords: ['textlayer', 'solo', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get solo',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'solo' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_shy',
        label: 'TextLayer Get shy',
        keywords: ['textlayer', 'shy', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get shy',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'shy' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_locked',
        label: 'TextLayer Get locked',
        keywords: ['textlayer', 'locked', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get locked',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'locked' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_comment',
        label: 'TextLayer Get comment',
        keywords: ['textlayer', 'comment', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get comment',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'comment' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_label',
        label: 'TextLayer Get label',
        keywords: ['textlayer', 'label', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get label',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'label' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_autoOrient',
        label: 'TextLayer Get autoOrient',
        keywords: ['textlayer', 'autoorient', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get autoOrient',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'autoOrient' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_marker',
        label: 'TextLayer Get marker',
        keywords: ['textlayer', 'marker', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get marker',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'marker' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_transform',
        label: 'TextLayer Get transform',
        keywords: ['textlayer', 'transform', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get transform',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'transform' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_anchorPoint',
        label: 'TextLayer Get anchorPoint',
        keywords: ['textlayer', 'anchorpoint', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get anchorPoint',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'anchorPoint' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_position',
        label: 'TextLayer Get position',
        keywords: ['textlayer', 'position', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get position',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'position' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_xPosition',
        label: 'TextLayer Get xPosition',
        keywords: ['textlayer', 'xposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get xPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'xPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_yPosition',
        label: 'TextLayer Get yPosition',
        keywords: ['textlayer', 'yposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get yPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'yPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_zPosition',
        label: 'TextLayer Get zPosition',
        keywords: ['textlayer', 'zposition', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get zPosition',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'zPosition' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_scale',
        label: 'TextLayer Get scale',
        keywords: ['textlayer', 'scale', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get scale',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'scale' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_orientation',
        label: 'TextLayer Get orientation',
        keywords: ['textlayer', 'orientation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get orientation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'orientation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_rotation',
        label: 'TextLayer Get rotation',
        keywords: ['textlayer', 'rotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get rotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'rotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_xRotation',
        label: 'TextLayer Get xRotation',
        keywords: ['textlayer', 'xrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get xRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'xRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_yRotation',
        label: 'TextLayer Get yRotation',
        keywords: ['textlayer', 'yrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get yRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'yRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_zRotation',
        label: 'TextLayer Get zRotation',
        keywords: ['textlayer', 'zrotation', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get zRotation',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'zRotation' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_opacity',
        label: 'TextLayer Get opacity',
        keywords: ['textlayer', 'opacity', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get opacity',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'opacity' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_pointOfInterest',
        label: 'TextLayer Get pointOfInterest',
        keywords: ['textlayer', 'pointofinterest', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get pointOfInterest',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'pointOfInterest' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_numProperties',
        label: 'TextLayer Get numProperties',
        keywords: ['textlayer', 'numproperties', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get numProperties',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'numProperties' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_matchName',
        label: 'TextLayer Get matchName',
        keywords: ['textlayer', 'matchname', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get matchName',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'matchName' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_propertyIndex',
        label: 'TextLayer Get propertyIndex',
        keywords: ['textlayer', 'propertyindex', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get propertyIndex',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyIndex' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_propertyDepth',
        label: 'TextLayer Get propertyDepth',
        keywords: ['textlayer', 'propertydepth', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get propertyDepth',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyDepth' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_propertyType',
        label: 'TextLayer Get propertyType',
        keywords: ['textlayer', 'propertytype', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get propertyType',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'propertyType' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_parentProperty',
        label: 'TextLayer Get parentProperty',
        keywords: ['textlayer', 'parentproperty', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get parentProperty',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'parentProperty' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_isModified',
        label: 'TextLayer Get isModified',
        keywords: ['textlayer', 'ismodified', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get isModified',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isModified' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_canSetEnabled',
        label: 'TextLayer Get canSetEnabled',
        keywords: ['textlayer', 'cansetenabled', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get canSetEnabled',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'canSetEnabled' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_elided',
        label: 'TextLayer Get elided',
        keywords: ['textlayer', 'elided', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get elided',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'elided' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_isEffect',
        label: 'TextLayer Get isEffect',
        keywords: ['textlayer', 'iseffect', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get isEffect',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isEffect' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_isMask',
        label: 'TextLayer Get isMask',
        keywords: ['textlayer', 'ismask', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get isMask',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'isMask' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_get_selected',
        label: 'TextLayer Get selected',
        keywords: ['textlayer', 'selected', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer Get selected',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'selected' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_audioActiveAtTime',
        label: 'TextLayer audioActiveAtTime',
        keywords: ['textlayer', 'audioactiveattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer audioActiveAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_calculateTransformFromPoints',
        label: 'TextLayer calculateTransformFromPoints',
        keywords: ['textlayer', 'calculatetransformfrompoints'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer calculateTransformFromPoints',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'pointTopLeft', label: 'pointTopLeft', type: 'expr' },
              { id: 'pointTopRight', label: 'pointTopRight', type: 'expr' },
              { id: 'pointBottomRight', label: 'pointBottomRight', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_sourcePointToComp',
        label: 'TextLayer sourcePointToComp',
        keywords: ['textlayer', 'sourcepointtocomp'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer sourcePointToComp',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'point', label: 'point', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_compPointToSource',
        label: 'TextLayer compPointToSource',
        keywords: ['textlayer', 'comppointtosource'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer compPointToSource',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'point', label: 'point', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_openInViewer',
        label: 'TextLayer openInViewer',
        keywords: ['textlayer', 'openinviewer'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer openInViewer',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_replaceSource',
        label: 'TextLayer replaceSource',
        keywords: ['textlayer', 'replacesource'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer replaceSource',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'newSource', label: 'newSource', type: 'expr' },
              { id: 'fixExpressions', label: 'fixExpressions', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_sourceRectAtTime',
        label: 'TextLayer sourceRectAtTime',
        keywords: ['textlayer', 'sourcerectattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer sourceRectAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'timeT', label: 'timeT', type: 'number' },
              { id: 'extents', label: 'extents', type: 'boolean' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_addToMotionGraphicsTemplate',
        label: 'TextLayer addToMotionGraphicsTemplate',
        keywords: ['textlayer', 'addtomotiongraphicstemplate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer addToMotionGraphicsTemplate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'comp', label: 'comp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_addToMotionGraphicsTemplateAs',
        label: 'TextLayer addToMotionGraphicsTemplateAs',
        keywords: ['textlayer', 'addtomotiongraphicstemplateas'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer addToMotionGraphicsTemplateAs',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'comp', label: 'comp', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_canAddToMotionGraphicsTemplate',
        label: 'TextLayer canAddToMotionGraphicsTemplate',
        keywords: ['textlayer', 'canaddtomotiongraphicstemplate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer canAddToMotionGraphicsTemplate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'comp', label: 'comp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_moveToBeginning',
        label: 'TextLayer moveToBeginning',
        keywords: ['textlayer', 'movetobeginning'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer moveToBeginning',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_moveToEnd',
        label: 'TextLayer moveToEnd',
        keywords: ['textlayer', 'movetoend'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer moveToEnd',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_moveAfter',
        label: 'TextLayer moveAfter',
        keywords: ['textlayer', 'moveafter'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer moveAfter',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'layer', label: 'layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_moveBefore',
        label: 'TextLayer moveBefore',
        keywords: ['textlayer', 'movebefore'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer moveBefore',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'layer', label: 'layer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_duplicate',
        label: 'TextLayer duplicate',
        keywords: ['textlayer', 'duplicate'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer duplicate',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_copyToComp',
        label: 'TextLayer copyToComp',
        keywords: ['textlayer', 'copytocomp'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer copyToComp',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'intoComp', label: 'intoComp', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_activeAtTime',
        label: 'TextLayer activeAtTime',
        keywords: ['textlayer', 'activeattime'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer activeAtTime',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'time', label: 'time', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_setParentWithJump',
        label: 'TextLayer setParentWithJump',
        keywords: ['textlayer', 'setparentwithjump'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer setParentWithJump',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'newParent', label: 'newParent', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_applyPreset',
        label: 'TextLayer applyPreset',
        keywords: ['textlayer', 'applypreset'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer applyPreset',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'presetName', label: 'presetName', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_canAddProperty',
        label: 'TextLayer canAddProperty',
        keywords: ['textlayer', 'canaddproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer canAddProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_addProperty',
        label: 'TextLayer addProperty',
        keywords: ['textlayer', 'addproperty'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer addProperty',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_propertyGroup',
        label: 'TextLayer propertyGroup',
        keywords: ['textlayer', 'propertygroup'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer propertyGroup',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'countUp', label: 'countUp', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_remove',
        label: 'TextLayer remove',
        keywords: ['textlayer', 'remove'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer remove',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_moveTo',
        label: 'TextLayer moveTo',
        keywords: ['textlayer', 'moveto'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer moveTo',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'newIndex', label: 'newIndex', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_property_index',
        label: 'TextLayer property (index)',
        keywords: ['textlayer', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer property (index)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'index', label: 'index', type: 'number' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_TextLayer_property_name',
        label: 'TextLayer property (name)',
        keywords: ['textlayer', 'property'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'TextLayer property (name)',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'TextLayer', type: 'expr' },
              { id: 'name', label: 'name', type: 'text' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'View',
    items: [
      {
        type: 'ae_View_get_active',
        label: 'View Get active',
        keywords: ['view', 'active', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'View Get active',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'View', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'active' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_View_get_options',
        label: 'View Get options',
        keywords: ['view', 'options', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'View Get options',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'View', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'options' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_View_setActive',
        label: 'View setActive',
        keywords: ['view', 'setactive'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'View setActive',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'View', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'Viewer',
    items: [
      {
        type: 'ae_Viewer_get_type',
        label: 'Viewer Get type',
        keywords: ['viewer', 'type', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Viewer Get type',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Viewer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'type' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Viewer_get_active',
        label: 'Viewer Get active',
        keywords: ['viewer', 'active', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Viewer Get active',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Viewer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'active' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Viewer_get_views',
        label: 'Viewer Get views',
        keywords: ['viewer', 'views', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Viewer Get views',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Viewer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'views' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Viewer_get_activeViewIndex',
        label: 'Viewer Get activeViewIndex',
        keywords: ['viewer', 'activeviewindex', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Viewer Get activeViewIndex',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Viewer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'activeViewIndex' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Viewer_get_guidesLocked',
        label: 'Viewer Get guidesLocked',
        keywords: ['viewer', 'guideslocked', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Viewer Get guidesLocked',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Viewer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'guidesLocked' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Viewer_get_guidesSnap',
        label: 'Viewer Get guidesSnap',
        keywords: ['viewer', 'guidessnap', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Viewer Get guidesSnap',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Viewer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'guidesSnap' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Viewer_get_guidesVisibility',
        label: 'Viewer Get guidesVisibility',
        keywords: ['viewer', 'guidesvisibility', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Viewer Get guidesVisibility',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Viewer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'guidesVisibility' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Viewer_get_rulers',
        label: 'Viewer Get rulers',
        keywords: ['viewer', 'rulers', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Viewer Get rulers',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Viewer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'rulers' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Viewer_get_maximized',
        label: 'Viewer Get maximized',
        keywords: ['viewer', 'maximized', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Viewer Get maximized',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'Viewer', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'maximized' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_Viewer_setActive',
        label: 'Viewer setActive',
        keywords: ['viewer', 'setactive'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Viewer setActive',
            category: 'action',
            themeColor: '#2b5c7a',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'target', label: 'Viewer', type: 'expr' }
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'result', label: 'Result' }
            ],
            values: {}
          }
        })
      }
    ]
  },
  {
    category: 'ViewOptions',
    items: [
      {
        type: 'ae_ViewOptions_get_channels',
        label: 'ViewOptions Get channels',
        keywords: ['viewoptions', 'channels', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ViewOptions Get channels',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ViewOptions', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'channels' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ViewOptions_get_checkerboards',
        label: 'ViewOptions Get checkerboards',
        keywords: ['viewoptions', 'checkerboards', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ViewOptions Get checkerboards',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ViewOptions', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'checkerboards' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ViewOptions_get_exposure',
        label: 'ViewOptions Get exposure',
        keywords: ['viewoptions', 'exposure', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ViewOptions Get exposure',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ViewOptions', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'exposure' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ViewOptions_get_fastPreview',
        label: 'ViewOptions Get fastPreview',
        keywords: ['viewoptions', 'fastpreview', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ViewOptions Get fastPreview',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ViewOptions', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'fastPreview' }
            ],
            values: {}
          }
        })
      },
      {
        type: 'ae_ViewOptions_get_zoom',
        label: 'ViewOptions Get zoom',
        keywords: ['viewoptions', 'zoom', 'get'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'ViewOptions Get zoom',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'target', label: 'ViewOptions', type: 'expr' }
            ],
            outputs: [
              { id: 'value', label: 'zoom' }
            ],
            values: {}
          }
        })
      }
    ]
  }];
