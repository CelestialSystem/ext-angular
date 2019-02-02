"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidateOptions = getValidateOptions;
exports.getDefaultOptions = getDefaultOptions;
exports.getDefaultVars = getDefaultVars;
exports.extractFromSource = extractFromSource;
exports._toProd = _toProd;
exports._toDev = _toDev;
exports._getAllComponents = _getAllComponents;
exports._writeFilesToProdFolder = _writeFilesToProdFolder;

function getValidateOptions() {
  return {
    "type": "object",
    "properties": {
      "framework": {
        "type": ["string"]
      },
      "toolkit": {
        "type": ["string"]
      },
      "port": {
        "type": ["integer"]
      },
      "emit": {
        "type": ["boolean"]
      },
      "browser": {
        "type": ["boolean"]
      },
      "watch": {
        "type": ["string"]
      },
      "profile": {
        "type": ["string"]
      },
      "environment": {
        "type": ["string"]
      },
      "verbose": {
        "type": ["string"]
      },
      "theme": {
        "type": ["string"]
      },
      "treeshake": {
        "type": ["boolean"]
      },
      "packages": {
        "type": ["string", "array"]
      }
    },
    "additionalProperties": false // "errorMessage": {
    //   "option": "should be {Boolean} (https:/github.com/org/repo#anchor)"
    // }

  };
}

function getDefaultOptions() {
  return {
    port: 1962,
    emit: true,
    browser: true,
    watch: 'yes',
    profile: '',
    treeshake: false,
    environment: 'development',
    verbose: 'no',
    toolkit: 'modern',
    packages: null
  };
}

function getDefaultVars() {
  return {
    watchStarted: false,
    firstTime: true,
    firstCompile: true,
    browserCount: 0,
    manifest: null,
    extPath: 'ext-angular',
    pluginErrors: [],
    deps: [],
    usedExtComponents: [],
    rebuild: true
  };
}

function toXtype(str) {
  return str.toLowerCase().replace(/_/g, '-');
}

function extractFromSource(module, options, compilation, extComponents) {
  try {
    var js = module._source._value;

    const logv = require('./pluginUtil').logv; //logv(options,'HOOK succeedModule, FUNCTION extractFromSource: ' + module.resource)


    var statements = [];

    var generate = require("@babel/generator").default;

    var parse = require("babylon").parse;

    var traverse = require("ast-traverse");

    var ast = parse(js, {
      plugins: ['typescript', 'flow', 'doExpressions', 'objectRestSpread', 'classProperties', 'exportDefaultFrom', 'exportExtensions', 'asyncGenerators', 'functionBind', 'functionSent', 'dynamicImport'],
      sourceType: 'module'
    });
    traverse(ast, {
      pre: function (node) {
        if (node.type === 'CallExpression' && node.callee && node.callee.object && node.callee.object.name === 'Ext') {
          statements.push(generate(node).code);
        }

        if (node.type === 'StringLiteral') {
          let code = node.value;

          for (var i = 0; i < code.length; ++i) {
            if (code.charAt(i) == '<') {
              if (code.substr(i, 4) == '<!--') {
                i += 4;
                i += code.substr(i).indexOf('-->') + 3;
              } else if (code.charAt(i + 1) !== '/') {
                var start = code.substring(i);
                var spaceEnd = start.indexOf(' ');
                var newlineEnd = start.indexOf('\n');
                var tagEnd = start.indexOf('>');
                var end = Math.min(spaceEnd, newlineEnd, tagEnd);

                if (end >= 0) {
                  var xtype = toXtype(start.substring(1, end));

                  if (extComponents.includes(xtype)) {
                    var type = {
                      xtype: xtype
                    };
                    let config = JSON.stringify(type);
                    statements.push(`Ext.create(${config})`);
                  }

                  i += end;
                }
              }
            }
          }
        }
      }
    });
    return statements;
  } catch (e) {
    console.log(e);
    compilation.errors.push('extractFromSource: ' + e);
    return [];
  }
}

function changeIt(o) {
  const path = require('path');

  const fsx = require('fs-extra');

  const wherePath = path.resolve(process.cwd(), o.where);
  var js = fsx.readFileSync(wherePath).toString();
  var newJs = js.replace(o.from, o.to);
  fsx.writeFileSync(wherePath, newJs, 'utf-8', () => {
    return;
  });
}

function _toProd(vars, options) {
  const log = require('./pluginUtil').log;

  const logv = require('./pluginUtil').logv;

  logv(options, 'FUNCTION _toProd');

  try {
    const fsx = require('fs-extra');

    const fs = require('fs');

    const mkdirp = require('mkdirp');

    const path = require('path');

    const pathExtAngularProd = path.resolve(process.cwd(), `src/app/ext-angular-prod`);

    if (!fs.existsSync(pathExtAngularProd)) {
      mkdirp.sync(pathExtAngularProd);

      const t = require('./artifacts').extAngularModule('', '', '');

      fsx.writeFileSync(`${pathExtAngularProd}/ext-angular.module.ts`, t, 'utf-8', () => {
        return;
      });
    }

    var o = {};
    o.where = 'src/app/app.module.ts';
    o.from = `import { ExtAngularModule } from '@sencha/ext-angular'`;
    o.to = `import { ExtAngularModule } from './ext-angular-prod/ext-angular.module'`;
    changeIt(o);
    o = {};
    o.where = 'src/main.ts';
    o.from = `bootstrapModule( AppModule );`;
    o.to = `enableProdMode();bootstrapModule(AppModule);`;
    changeIt(o);
  } catch (e) {
    console.log(e);
    return [];
  }
}

function _toDev(vars, options) {
  const log = require('./pluginUtil').log;

  const logv = require('./pluginUtil').logv;

  logv(options, 'FUNCTION _toProd');

  try {
    const path = require('path');

    const pathExtAngularProd = path.resolve(process.cwd(), `src/app/ext-angular-prod`);

    require('rimraf').sync(pathExtAngularProd);

    var o = {};
    o.where = 'src/app/app.module.ts';
    o.from = `import { ExtAngularModule } from './ext-angular-prod/ext-angular.module'`;
    o.to = `import { ExtAngularModule } from '@sencha/ext-angular'`;
    changeIt(o);
    o = {};
    o.where = 'src/main.ts';
    o.from = `enableProdMode();bootstrapModule(AppModule);`;
    o.to = `bootstrapModule( AppModule );`;
    changeIt(o);
  } catch (e) {
    console.log(e);
    return [];
  }
}

function _getAllComponents(vars, options) {
  const log = require('./pluginUtil').log;

  const logv = require('./pluginUtil').logv;

  logv(options, 'FUNCTION _getAllComponents');

  try {
    const path = require('path');

    const fsx = require('fs-extra');

    var extComponents = [];
    const packageLibPath = path.resolve(process.cwd(), 'node_modules/@sencha/ext-angular/src/lib');
    var files = fsx.readdirSync(packageLibPath);
    files.forEach(fileName => {
      if (fileName && fileName.substr(0, 4) == 'ext-') {
        var end = fileName.substr(4).indexOf('.component');

        if (end >= 0) {
          extComponents.push(fileName.substring(4, end + 4));
        }
      }
    });
    return extComponents;
  } catch (e) {
    console.log(e);
    return [];
  }
}

function _writeFilesToProdFolder(vars, options) {
  const log = require('./pluginUtil').log;

  const logv = require('./pluginUtil').logv;

  logv(options, 'FUNCTION _writeFilesToProdFolder');

  try {
    const path = require('path');

    const fsx = require('fs-extra');

    const packageLibPath = path.resolve(process.cwd(), 'node_modules/@sencha/ext-angular/src/lib');
    const pathToExtAngularProd = path.resolve(process.cwd(), `src/app/ext-angular-prod`);
    const string = 'Ext.create({\"xtype\":\"';
    vars.deps.forEach(code => {
      var index = code.indexOf(string);

      if (index >= 0) {
        code = code.substring(index + string.length);
        var end = code.indexOf('\"');
        vars.usedExtComponents.push(code.substr(0, end));
      }
    });
    vars.usedExtComponents = [...new Set(vars.usedExtComponents)];
    var writeToPathWritten = false;
    var moduleVars = {
      imports: '',
      exports: '',
      declarations: ''
    };
    vars.usedExtComponents.forEach(xtype => {
      var capclassname = xtype.charAt(0).toUpperCase() + xtype.replace(/-/g, "_").slice(1);
      moduleVars.imports = moduleVars.imports + `import { Ext${capclassname}Component } from './ext-${xtype}.component';\n`;
      moduleVars.exports = moduleVars.exports + `    Ext${capclassname}Component,\n`;
      moduleVars.declarations = moduleVars.declarations + `    Ext${capclassname}Component,\n`;
      var classFile = `ext-${xtype}.component.ts`;
      const contents = fsx.readFileSync(`${packageLibPath}/${classFile}`).toString();
      fsx.writeFileSync(`${pathToExtAngularProd}/${classFile}`, contents, 'utf-8', () => {
        return;
      });
      writeToPathWritten = true;
    });

    if (writeToPathWritten) {
      var t = require('./artifacts').extAngularModule(moduleVars.imports, moduleVars.exports, moduleVars.declarations);

      fsx.writeFileSync(`${pathToExtAngularProd}/ext-angular.module.ts`, t, 'utf-8', () => {
        return;
      });
    }

    const baseContent = fsx.readFileSync(`${packageLibPath}/base.ts`).toString();
    fsx.writeFileSync(`${pathToExtAngularProd}/base.ts`, baseContent, 'utf-8', () => {
      return;
    });
  } catch (e) {
    console.log(e);
    return [];
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hbmd1bGFyVXRpbC5qcyJdLCJuYW1lcyI6WyJnZXRWYWxpZGF0ZU9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInBvcnQiLCJlbWl0IiwiYnJvd3NlciIsIndhdGNoIiwicHJvZmlsZSIsInRyZWVzaGFrZSIsImVudmlyb25tZW50IiwidmVyYm9zZSIsInRvb2xraXQiLCJwYWNrYWdlcyIsImdldERlZmF1bHRWYXJzIiwid2F0Y2hTdGFydGVkIiwiZmlyc3RUaW1lIiwiZmlyc3RDb21waWxlIiwiYnJvd3NlckNvdW50IiwibWFuaWZlc3QiLCJleHRQYXRoIiwicGx1Z2luRXJyb3JzIiwiZGVwcyIsInVzZWRFeHRDb21wb25lbnRzIiwicmVidWlsZCIsInRvWHR5cGUiLCJzdHIiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJleHRyYWN0RnJvbVNvdXJjZSIsIm1vZHVsZSIsIm9wdGlvbnMiLCJjb21waWxhdGlvbiIsImV4dENvbXBvbmVudHMiLCJqcyIsIl9zb3VyY2UiLCJfdmFsdWUiLCJsb2d2IiwicmVxdWlyZSIsInN0YXRlbWVudHMiLCJnZW5lcmF0ZSIsImRlZmF1bHQiLCJwYXJzZSIsInRyYXZlcnNlIiwiYXN0IiwicGx1Z2lucyIsInNvdXJjZVR5cGUiLCJwcmUiLCJub2RlIiwidHlwZSIsImNhbGxlZSIsIm9iamVjdCIsIm5hbWUiLCJwdXNoIiwiY29kZSIsInZhbHVlIiwiaSIsImxlbmd0aCIsImNoYXJBdCIsInN1YnN0ciIsImluZGV4T2YiLCJzdGFydCIsInN1YnN0cmluZyIsInNwYWNlRW5kIiwibmV3bGluZUVuZCIsInRhZ0VuZCIsImVuZCIsIk1hdGgiLCJtaW4iLCJ4dHlwZSIsImluY2x1ZGVzIiwiY29uZmlnIiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwiY2hhbmdlSXQiLCJvIiwicGF0aCIsImZzeCIsIndoZXJlUGF0aCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwid2hlcmUiLCJyZWFkRmlsZVN5bmMiLCJ0b1N0cmluZyIsIm5ld0pzIiwiZnJvbSIsInRvIiwid3JpdGVGaWxlU3luYyIsIl90b1Byb2QiLCJ2YXJzIiwiZnMiLCJta2RpcnAiLCJwYXRoRXh0QW5ndWxhclByb2QiLCJleGlzdHNTeW5jIiwic3luYyIsInQiLCJleHRBbmd1bGFyTW9kdWxlIiwiX3RvRGV2IiwiX2dldEFsbENvbXBvbmVudHMiLCJwYWNrYWdlTGliUGF0aCIsImZpbGVzIiwicmVhZGRpclN5bmMiLCJmb3JFYWNoIiwiZmlsZU5hbWUiLCJfd3JpdGVGaWxlc1RvUHJvZEZvbGRlciIsInBhdGhUb0V4dEFuZ3VsYXJQcm9kIiwic3RyaW5nIiwiaW5kZXgiLCJTZXQiLCJ3cml0ZVRvUGF0aFdyaXR0ZW4iLCJtb2R1bGVWYXJzIiwiaW1wb3J0cyIsImV4cG9ydHMiLCJkZWNsYXJhdGlvbnMiLCJjYXBjbGFzc25hbWUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2xhc3NGaWxlIiwiY29udGVudHMiLCJiYXNlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRU8sU0FBU0Esa0JBQVQsR0FBOEI7QUFDbkMsU0FBTztBQUNMLFlBQVEsUUFESDtBQUVMLGtCQUFjO0FBQ1osbUJBQWU7QUFBQyxnQkFBUSxDQUFFLFFBQUY7QUFBVCxPQURIO0FBRVosaUJBQWU7QUFBQyxnQkFBUSxDQUFFLFFBQUY7QUFBVCxPQUZIO0FBR1osY0FBZTtBQUFDLGdCQUFRLENBQUUsU0FBRjtBQUFULE9BSEg7QUFJWixjQUFlO0FBQUMsZ0JBQVEsQ0FBRSxTQUFGO0FBQVQsT0FKSDtBQUtaLGlCQUFlO0FBQUMsZ0JBQVEsQ0FBRSxTQUFGO0FBQVQsT0FMSDtBQU1aLGVBQWU7QUFBQyxnQkFBUSxDQUFFLFFBQUY7QUFBVCxPQU5IO0FBT1osaUJBQWU7QUFBQyxnQkFBUSxDQUFFLFFBQUY7QUFBVCxPQVBIO0FBUVoscUJBQWU7QUFBQyxnQkFBUSxDQUFFLFFBQUY7QUFBVCxPQVJIO0FBU1osaUJB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O0FBQU8sT0FBM0Y7QUFDRDs7QUFFRCxVQUFNd0IsV0FBVyxHQUFHM0MsR0FBRyxDQUFDTSxZQUFKLENBQWtCLEdBQUVpQixjQUFlLFVBQW5DLEVBQThDaEIsUUFBOUMsRUFBcEI7QUFDQVAsSUFBQUEsR0FBRyxDQUFDVyxhQUFKLENBQW1CLEdBQUVrQixvQkFBcUIsVUFBMUMsRUFBcURjLFdBQXJELEVBQWtFLE9BQWxFLEVBQTJFLE1BQUk7QUFBQztBQUFPLEtBQXZGO0FBRUQsR0E1Q0QsQ0E2Q0EsT0FBT2xELENBQVAsRUFBVTtBQUNSQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLFdBQU8sRUFBUDtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsaWRhdGVPcHRpb25zKCkge1xuICByZXR1cm4ge1xuICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICBcImZyYW1ld29ya1wiOiAgIHtcInR5cGVcIjogWyBcInN0cmluZ1wiIF19LFxuICAgICAgXCJ0b29sa2l0XCI6ICAgICB7XCJ0eXBlXCI6IFsgXCJzdHJpbmdcIiBdfSxcbiAgICAgIFwicG9ydFwiOiAgICAgICAge1widHlwZVwiOiBbIFwiaW50ZWdlclwiIF19LFxuICAgICAgXCJlbWl0XCI6ICAgICAgICB7XCJ0eXBlXCI6IFsgXCJib29sZWFuXCIgXX0sXG4gICAgICBcImJyb3dzZXJcIjogICAgIHtcInR5cGVcIjogWyBcImJvb2xlYW5cIiBdfSxcbiAgICAgIFwid2F0Y2hcIjogICAgICAge1widHlwZVwiOiBbIFwic3RyaW5nXCIgXX0sXG4gICAgICBcInByb2ZpbGVcIjogICAgIHtcInR5cGVcIjogWyBcInN0cmluZ1wiIF19LFxuICAgICAgXCJlbnZpcm9ubWVudFwiOiB7XCJ0eXBlXCI6IFsgXCJzdHJpbmdcIiBdfSxcbiAgICAgIFwidmVyYm9zZVwiOiAgICAge1widHlwZVwiOiBbIFwic3RyaW5nXCIgXX0sXG4gICAgICBcInRoZW1lXCI6ICAgICAgIHtcInR5cGVcIjogWyBcInN0cmluZ1wiIF19LFxuICAgICAgXCJ0cmVlc2hha2VcIjoge1widHlwZVwiOiBbIFwiYm9vbGVhblwiIF19LFxuICAgICAgXCJwYWNrYWdlc1wiOiAgICB7XCJ0eXBlXCI6IFsgXCJzdHJpbmdcIiwgXCJhcnJheVwiIF19XG4gICAgfSxcbiAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlXG4gICAgLy8gXCJlcnJvck1lc3NhZ2VcIjoge1xuICAgIC8vICAgXCJvcHRpb25cIjogXCJzaG91bGQgYmUge0Jvb2xlYW59IChodHRwczovZ2l0aHViLmNvbS9vcmcvcmVwbyNhbmNob3IpXCJcbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4ge1xuICAgIHBvcnQ6IDE5NjIsXG4gICAgZW1pdDogdHJ1ZSxcbiAgICBicm93c2VyOiB0cnVlLFxuICAgIHdhdGNoOiAneWVzJyxcbiAgICBwcm9maWxlOiAnJywgXG4gICAgdHJlZXNoYWtlOiBmYWxzZSxcbiAgICBlbnZpcm9ubWVudDogJ2RldmVsb3BtZW50JywgXG4gICAgdmVyYm9zZTogJ25vJyxcbiAgICB0b29sa2l0OiAnbW9kZXJuJyxcbiAgICBwYWNrYWdlczogbnVsbFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0VmFycygpIHtcbiAgcmV0dXJuIHtcbiAgICB3YXRjaFN0YXJ0ZWQgOiBmYWxzZSxcbiAgICBmaXJzdFRpbWUgOiB0cnVlLFxuICAgIGZpcnN0Q29tcGlsZTogdHJ1ZSxcbiAgICBicm93c2VyQ291bnQgOiAwLFxuICAgIG1hbmlmZXN0OiBudWxsLFxuICAgIGV4dFBhdGg6ICdleHQtYW5ndWxhcicsXG4gICAgcGx1Z2luRXJyb3JzOiBbXSxcbiAgICBkZXBzOiBbXSxcbiAgICB1c2VkRXh0Q29tcG9uZW50czogW10sXG4gICAgcmVidWlsZDogdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvWHR5cGUoc3RyKSB7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9fL2csICctJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RGcm9tU291cmNlKG1vZHVsZSwgb3B0aW9ucywgY29tcGlsYXRpb24sIGV4dENvbXBvbmVudHMpIHtcbiAgdHJ5IHtcbiAgICB2YXIganMgPSBtb2R1bGUuX3NvdXJjZS5fdmFsdWVcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIC8vbG9ndihvcHRpb25zLCdIT09LIHN1Y2NlZWRNb2R1bGUsIEZVTkNUSU9OIGV4dHJhY3RGcm9tU291cmNlOiAnICsgbW9kdWxlLnJlc291cmNlKVxuXG4gICAgdmFyIHN0YXRlbWVudHMgPSBbXVxuXG4gICAgdmFyIGdlbmVyYXRlID0gcmVxdWlyZShcIkBiYWJlbC9nZW5lcmF0b3JcIikuZGVmYXVsdFxuICAgIHZhciBwYXJzZSA9IHJlcXVpcmUoXCJiYWJ5bG9uXCIpLnBhcnNlXG4gICAgdmFyIHRyYXZlcnNlID0gcmVxdWlyZShcImFzdC10cmF2ZXJzZVwiKVxuXG4gICAgdmFyIGFzdCA9IHBhcnNlKGpzLCB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgICd0eXBlc2NyaXB0JyxcbiAgICAgICAgJ2Zsb3cnLFxuICAgICAgICAnZG9FeHByZXNzaW9ucycsXG4gICAgICAgICdvYmplY3RSZXN0U3ByZWFkJyxcbiAgICAgICAgJ2NsYXNzUHJvcGVydGllcycsXG4gICAgICAgICdleHBvcnREZWZhdWx0RnJvbScsXG4gICAgICAgICdleHBvcnRFeHRlbnNpb25zJyxcbiAgICAgICAgJ2FzeW5jR2VuZXJhdG9ycycsXG4gICAgICAgICdmdW5jdGlvbkJpbmQnLFxuICAgICAgICAnZnVuY3Rpb25TZW50JyxcbiAgICAgICAgJ2R5bmFtaWNJbXBvcnQnXG4gICAgICBdLFxuICAgICAgc291cmNlVHlwZTogJ21vZHVsZSdcbiAgICB9KVxuXG4gICAgdHJhdmVyc2UoYXN0LCB7XG4gICAgICBwcmU6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdDYWxsRXhwcmVzc2lvbicgJiYgbm9kZS5jYWxsZWUgJiYgbm9kZS5jYWxsZWUub2JqZWN0ICYmIG5vZGUuY2FsbGVlLm9iamVjdC5uYW1lID09PSAnRXh0Jykge1xuICAgICAgICAgIHN0YXRlbWVudHMucHVzaChnZW5lcmF0ZShub2RlKS5jb2RlKVxuICAgICAgICB9XG4gICAgICAgIGlmKG5vZGUudHlwZSA9PT0gJ1N0cmluZ0xpdGVyYWwnKSB7XG4gICAgICAgICAgbGV0IGNvZGUgPSBub2RlLnZhbHVlXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2RlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoY29kZS5jaGFyQXQoaSkgPT0gJzwnKSB7XG4gICAgICAgICAgICAgIGlmIChjb2RlLnN1YnN0cihpLCA0KSA9PSAnPCEtLScpIHtcbiAgICAgICAgICAgICAgICBpICs9IDRcbiAgICAgICAgICAgICAgICBpICs9IGNvZGUuc3Vic3RyKGkpLmluZGV4T2YoJy0tPicpICsgM1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUuY2hhckF0KGkrMSkgIT09ICcvJykge1xuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGNvZGUuc3Vic3RyaW5nKGkpXG4gICAgICAgICAgICAgICAgdmFyIHNwYWNlRW5kID0gc3RhcnQuaW5kZXhPZignICcpXG4gICAgICAgICAgICAgICAgdmFyIG5ld2xpbmVFbmQgPSBzdGFydC5pbmRleE9mKCdcXG4nKVxuICAgICAgICAgICAgICAgIHZhciB0YWdFbmQgPSBzdGFydC5pbmRleE9mKCc+JylcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gTWF0aC5taW4oc3BhY2VFbmQsIG5ld2xpbmVFbmQsIHRhZ0VuZClcbiAgICAgICAgICAgICAgICBpZiAoZW5kID49IDApIHtcbiAgICAgICAgICAgICAgICAgIHZhciB4dHlwZSA9IHRvWHR5cGUoc3RhcnQuc3Vic3RyaW5nKDEsIGVuZCkpXG4gICAgICAgICAgICAgICAgICBpZihleHRDb21wb25lbnRzLmluY2x1ZGVzKHh0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHt4dHlwZTogeHR5cGV9XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSBKU09OLnN0cmluZ2lmeSh0eXBlKVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2goYEV4dC5jcmVhdGUoJHtjb25maWd9KWApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpICs9IGVuZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gc3RhdGVtZW50c1xuICB9XG4gIGNhdGNoKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdleHRyYWN0RnJvbVNvdXJjZTogJyArIGUpXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlSXQobykge1xuICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gIGNvbnN0IGZzeCA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcbiAgY29uc3Qgd2hlcmVQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIG8ud2hlcmUpXG4gIHZhciBqcyA9IGZzeC5yZWFkRmlsZVN5bmMod2hlcmVQYXRoKS50b1N0cmluZygpXG4gIHZhciBuZXdKcyA9IGpzLnJlcGxhY2Uoby5mcm9tLG8udG8pO1xuICBmc3gud3JpdGVGaWxlU3luYyh3aGVyZVBhdGgsIG5ld0pzLCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfdG9Qcm9kKHZhcnMsIG9wdGlvbnMpIHtcbiAgY29uc3QgbG9nID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nXG4gIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX3RvUHJvZCcpXG4gIHRyeSB7XG4gICAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG4gICAgY29uc3QgcGF0aEV4dEFuZ3VsYXJQcm9kID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGBzcmMvYXBwL2V4dC1hbmd1bGFyLXByb2RgKTtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMocGF0aEV4dEFuZ3VsYXJQcm9kKSkge1xuICAgICAgbWtkaXJwLnN5bmMocGF0aEV4dEFuZ3VsYXJQcm9kKVxuICAgICAgY29uc3QgdCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuZXh0QW5ndWxhck1vZHVsZSgnJywgJycsICcnKVxuICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7cGF0aEV4dEFuZ3VsYXJQcm9kfS9leHQtYW5ndWxhci5tb2R1bGUudHNgLCB0LCAndXRmLTgnLCAoKSA9PiB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSlcbiAgICB9XG5cbiAgICB2YXIgbyA9IHt9XG4gICAgby53aGVyZSA9ICdzcmMvYXBwL2FwcC5tb2R1bGUudHMnXG4gICAgby5mcm9tID0gYGltcG9ydCB7IEV4dEFuZ3VsYXJNb2R1bGUgfSBmcm9tICdAc2VuY2hhL2V4dC1hbmd1bGFyJ2BcbiAgICBvLnRvID0gYGltcG9ydCB7IEV4dEFuZ3VsYXJNb2R1bGUgfSBmcm9tICcuL2V4dC1hbmd1bGFyLXByb2QvZXh0LWFuZ3VsYXIubW9kdWxlJ2BcbiAgICBjaGFuZ2VJdChvKVxuXG4gICAgbyA9IHt9XG4gICAgby53aGVyZSA9ICdzcmMvbWFpbi50cydcbiAgICBvLmZyb20gPSBgYm9vdHN0cmFwTW9kdWxlKCBBcHBNb2R1bGUgKTtgXG4gICAgby50byA9IGBlbmFibGVQcm9kTW9kZSgpO2Jvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO2BcbiAgICBjaGFuZ2VJdChvKVxuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX3RvRGV2KHZhcnMsIG9wdGlvbnMpIHtcbiAgY29uc3QgbG9nID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nXG4gIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX3RvUHJvZCcpXG4gIHRyeSB7XG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgIGNvbnN0IHBhdGhFeHRBbmd1bGFyUHJvZCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBgc3JjL2FwcC9leHQtYW5ndWxhci1wcm9kYCk7XG4gICAgcmVxdWlyZSgncmltcmFmJykuc3luYyhwYXRoRXh0QW5ndWxhclByb2QpO1xuXG4gICAgdmFyIG8gPSB7fVxuICAgIG8ud2hlcmUgPSAnc3JjL2FwcC9hcHAubW9kdWxlLnRzJ1xuICAgIG8uZnJvbSA9IGBpbXBvcnQgeyBFeHRBbmd1bGFyTW9kdWxlIH0gZnJvbSAnLi9leHQtYW5ndWxhci1wcm9kL2V4dC1hbmd1bGFyLm1vZHVsZSdgXG4gICAgby50byA9IGBpbXBvcnQgeyBFeHRBbmd1bGFyTW9kdWxlIH0gZnJvbSAnQHNlbmNoYS9leHQtYW5ndWxhcidgXG4gICAgY2hhbmdlSXQobylcblxuICAgIG8gPSB7fVxuICAgIG8ud2hlcmUgPSAnc3JjL21haW4udHMnXG4gICAgby5mcm9tID0gYGVuYWJsZVByb2RNb2RlKCk7Ym9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7YFxuICAgIG8udG8gPSBgYm9vdHN0cmFwTW9kdWxlKCBBcHBNb2R1bGUgKTtgXG4gICAgY2hhbmdlSXQobylcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEFsbENvbXBvbmVudHModmFycywgb3B0aW9ucykge1xuICBjb25zdCBsb2cgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2dcbiAgY29uc3QgbG9ndiA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3ZcbiAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBfZ2V0QWxsQ29tcG9uZW50cycpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuXG4gICAgdmFyIGV4dENvbXBvbmVudHMgPSBbXVxuICAgIGNvbnN0IHBhY2thZ2VMaWJQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvQHNlbmNoYS9leHQtYW5ndWxhci9zcmMvbGliJylcbiAgICB2YXIgZmlsZXMgPSBmc3gucmVhZGRpclN5bmMocGFja2FnZUxpYlBhdGgpXG4gICAgZmlsZXMuZm9yRWFjaCgoZmlsZU5hbWUpID0+IHtcbiAgICAgIGlmIChmaWxlTmFtZSAmJiBmaWxlTmFtZS5zdWJzdHIoMCwgNCkgPT0gJ2V4dC0nKSB7XG4gICAgICAgIHZhciBlbmQgPSBmaWxlTmFtZS5zdWJzdHIoNCkuaW5kZXhPZignLmNvbXBvbmVudCcpXG4gICAgICAgIGlmIChlbmQgPj0gMCkge1xuICAgICAgICAgIGV4dENvbXBvbmVudHMucHVzaChmaWxlTmFtZS5zdWJzdHJpbmcoNCwgZW5kICsgNCkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBleHRDb21wb25lbnRzXG5cbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF93cml0ZUZpbGVzVG9Qcm9kRm9sZGVyKHZhcnMsIG9wdGlvbnMpIHtcbiAgY29uc3QgbG9nID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nXG4gIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX3dyaXRlRmlsZXNUb1Byb2RGb2xkZXInKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgIGNvbnN0IGZzeCA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcblxuICAgIGNvbnN0IHBhY2thZ2VMaWJQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvQHNlbmNoYS9leHQtYW5ndWxhci9zcmMvbGliJylcbiAgICBjb25zdCBwYXRoVG9FeHRBbmd1bGFyUHJvZCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBgc3JjL2FwcC9leHQtYW5ndWxhci1wcm9kYClcbiAgICBjb25zdCBzdHJpbmcgPSAnRXh0LmNyZWF0ZSh7XFxcInh0eXBlXFxcIjpcXFwiJ1xuXG4gICAgdmFycy5kZXBzLmZvckVhY2goY29kZSA9PiB7XG4gICAgICB2YXIgaW5kZXggPSBjb2RlLmluZGV4T2Yoc3RyaW5nKVxuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgY29kZSA9IGNvZGUuc3Vic3RyaW5nKGluZGV4ICsgc3RyaW5nLmxlbmd0aClcbiAgICAgICAgdmFyIGVuZCA9IGNvZGUuaW5kZXhPZignXFxcIicpXG4gICAgICAgIHZhcnMudXNlZEV4dENvbXBvbmVudHMucHVzaChjb2RlLnN1YnN0cigwLCBlbmQpKVxuICAgICAgfVxuICAgIH0pXG4gICAgdmFycy51c2VkRXh0Q29tcG9uZW50cyA9IFsuLi5uZXcgU2V0KHZhcnMudXNlZEV4dENvbXBvbmVudHMpXVxuXG4gICAgdmFyIHdyaXRlVG9QYXRoV3JpdHRlbiA9IGZhbHNlXG4gICAgdmFyIG1vZHVsZVZhcnMgPSB7XG4gICAgICBpbXBvcnRzOiAnJyxcbiAgICAgIGV4cG9ydHM6ICcnLFxuICAgICAgZGVjbGFyYXRpb25zOiAnJ1xuICAgIH1cbiAgICB2YXJzLnVzZWRFeHRDb21wb25lbnRzLmZvckVhY2goeHR5cGUgPT4ge1xuICAgICAgdmFyIGNhcGNsYXNzbmFtZSA9IHh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgeHR5cGUucmVwbGFjZSgvLS9nLCBcIl9cIikuc2xpY2UoMSlcbiAgICAgIG1vZHVsZVZhcnMuaW1wb3J0cyA9IG1vZHVsZVZhcnMuaW1wb3J0cyArIGBpbXBvcnQgeyBFeHQke2NhcGNsYXNzbmFtZX1Db21wb25lbnQgfSBmcm9tICcuL2V4dC0ke3h0eXBlfS5jb21wb25lbnQnO1xcbmBcbiAgICAgIG1vZHVsZVZhcnMuZXhwb3J0cyA9IG1vZHVsZVZhcnMuZXhwb3J0cyArIGAgICAgRXh0JHtjYXBjbGFzc25hbWV9Q29tcG9uZW50LFxcbmBcbiAgICAgIG1vZHVsZVZhcnMuZGVjbGFyYXRpb25zID0gbW9kdWxlVmFycy5kZWNsYXJhdGlvbnMgKyBgICAgIEV4dCR7Y2FwY2xhc3NuYW1lfUNvbXBvbmVudCxcXG5gXG4gICAgICB2YXIgY2xhc3NGaWxlID0gYGV4dC0ke3h0eXBlfS5jb21wb25lbnQudHNgXG4gICAgICBjb25zdCBjb250ZW50cyA9IGZzeC5yZWFkRmlsZVN5bmMoYCR7cGFja2FnZUxpYlBhdGh9LyR7Y2xhc3NGaWxlfWApLnRvU3RyaW5nKClcbiAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3BhdGhUb0V4dEFuZ3VsYXJQcm9kfS8ke2NsYXNzRmlsZX1gLCBjb250ZW50cywgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgd3JpdGVUb1BhdGhXcml0dGVuID0gdHJ1ZVxuICAgIH0pXG4gICAgaWYgKHdyaXRlVG9QYXRoV3JpdHRlbikge1xuICAgICAgdmFyIHQgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmV4dEFuZ3VsYXJNb2R1bGUoXG4gICAgICAgIG1vZHVsZVZhcnMuaW1wb3J0cywgbW9kdWxlVmFycy5leHBvcnRzLCBtb2R1bGVWYXJzLmRlY2xhcmF0aW9uc1xuICAgICAgKVxuICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7cGF0aFRvRXh0QW5ndWxhclByb2R9L2V4dC1hbmd1bGFyLm1vZHVsZS50c2AsIHQsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICB9XG5cbiAgICBjb25zdCBiYXNlQ29udGVudCA9IGZzeC5yZWFkRmlsZVN5bmMoYCR7cGFja2FnZUxpYlBhdGh9L2Jhc2UudHNgKS50b1N0cmluZygpXG4gICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7cGF0aFRvRXh0QW5ndWxhclByb2R9L2Jhc2UudHNgLCBiYXNlQ29udGVudCwgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuXG4gIH1cbiAgY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIHJldHVybiBbXVxuICB9XG59Il19