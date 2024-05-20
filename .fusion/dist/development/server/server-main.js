
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  if (false) {
    throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);
  } else {
    console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');
    process.env.NODE_ENV = 'development';
  }
} else {
  process.env.NODE_ENV = 'development';
}
  
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/fusion-cli/build/modern-browser-versions.js":
/***/ ((module) => {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
/* eslint-env node */

module.exports = {
  chrome: 61,
  safari: 12,
  firefox: 60,
  android: 61,
  ios: 12,
  edge: 80
};

/***/ }),

/***/ "./node_modules/fusion-cli/build/server-error.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
const path = __webpack_require__("path");
const {
  readFileSync
} = __webpack_require__("fs");
const {
  codeFrameColumns
} = __webpack_require__("@babel/code-frame");
const AnsiToHtml = __webpack_require__("ansi-to-html");
const chalk = __webpack_require__("chalk");
function parseCodeFrame(error /*: Error */) {
  const stackLines = (error.stack || '').split('\n');
  const secondLine = stackLines.length > 1 ? stackLines[1] : '';
  const match = secondLine.match(/at (.+) \((.+):(\d+):(\d+)\)/);
  const [, functionName, file, line, column] = match || [];
  if (!(line && column && file)) {
    return {};
  }
  let fileContents;
  try {
    fileContents = readFileSync(file, 'utf-8');
  } catch (e) {
    // Errors could originate in node internals that do not exist in filesystem
    return {};
  }
  const srcLines = fileContents.split('\n');
  const errorLineNumber = parseInt(line) - 1;
  if (srcLines.length <= errorLineNumber) {
    // This may happen if sourcemaps reference the wrong file
    return {};
  }
  const whitespace = (srcLines[errorLineNumber] || '').search(/\S/);
  const padding = whitespace === -1 ? 0 : whitespace;
  const codeFrame = codeFrameColumns(fileContents, {
    start: {
      line: parseInt(line),
      column: parseInt(column) + padding
    }
  }, {
    highlightCode: true,
    linesAbove: 2,
    linesBelow: 2,
    message: error.message
  });
  return {
    codeFrame,
    file,
    line,
    column,
    functionName
  };
}
function renderTerminalError(error /*: Error */) {
  const {
    codeFrame,
    file,
    line,
    column
  } = parseCodeFrame(error);
  if (!file) {
    return chalk.red(error.stack);
  }
  const location = chalk.blue(`${path.relative(process.cwd(), file)} ${line}:${column}`);
  return [location, codeFrame, '', chalk.red(error.stack)].join('\n');
}
module.exports.renderTerminalError = renderTerminalError;
function renderHtmlError(error /*: any */ = {}) {
  let displayError;
  let {
    link
  } = error;
  if (error instanceof Error) {
    displayError = error;
  } else if (typeof error === 'string') {
    displayError = new Error(error);
  } else {
    displayError = new Error(error.message);
    displayError.stack = error.stack;
    displayError.name = error.name;
  }
  const {
    codeFrame,
    file,
    line,
    column,
    functionName
  } = parseCodeFrame(error);
  let displayCodeFrame;
  if (file) {
    const ansi = new AnsiToHtml({
      fg: '#ccc'
    });
    const htmlCodeFrame = ansi.toHtml(codeFrame);
    const relativeFile = path.relative(process.cwd(), file);
    displayCodeFrame = `
      <p>
        <b>${escapeHtml(functionName)}</b>
        <br>
        <span style="color:rgb(100, 149, 237);">${relativeFile} ${line}:${column}</span>
      </p>
      <pre style="background-color: #111;padding: 0 5px;white-space:break-spaces;">${htmlCodeFrame}</pre>
    `;
  }
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Server error</title>
        <style>
          html {
            background-color: #222;
            color: white;
            line-height: 2;
            font-family: monospace;
          }
          a { color: white; }
          @media (prefers-color-scheme: light) {
            html {
              background-color: rgb(240, 233, 231);
              color: rgb(47, 79, 79);
            }
            a { color: rgb(47, 79, 79); }
          }
        </style>
      </head>
      <body>
        <div style="width:1200px;margin:20px auto;">
          <h1 style="color:rgb(232,59,70);font-size:large;">${displayError.message}</h1>
          ${displayCodeFrame ? displayCodeFrame : ''}
          <pre style="white-space:break-spaces;">${escapeHtml(displayError.stack)}</pre>
          <p>
          ${link ? `<br>For help with this error, visit <a target="_blank" href="${link}">this troubleshooting document</a>` : ''}
          </p>
        <div>
      </body>
    </html>
  `;
}
module.exports.renderHtmlError = renderHtmlError;
function escapeHtml(str = '') {
  return (str || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/***/ }),

/***/ "./node_modules/fusion-cli/entries/server-entry.js":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   start: () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var source_map_support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("source-map-support");
/* harmony import */ var source_map_support__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/fusion-cli/build/loaders/i18n-manifest-loader.js!");
/* harmony import */ var _SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plugins_critical_chunk_ids_plugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/fusion-cli/plugins/critical-chunk-ids-plugin.js");
/* harmony import */ var _plugins_assets_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/fusion-cli/plugins/assets-plugin.js");
/* harmony import */ var _plugins_context_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/fusion-cli/plugins/context-plugin.js");
/* harmony import */ var _plugins_server_error_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/fusion-cli/plugins/server-error-plugin.js");
/* harmony import */ var _plugins_ssr_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/fusion-cli/plugins/ssr-plugin.js");
/* harmony import */ var _plugins_ssr_module_scripts_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/fusion-cli/plugins/ssr-module-scripts-plugin.js");
/* harmony import */ var _lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/fusion-cli/lib/strip-prefix.js");
/* harmony import */ var _lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _FUSION_ENTRY_PATH___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/main.js");
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
/* global __webpack_hash__ */

/* eslint-disable import/first */

source_map_support__WEBPACK_IMPORTED_MODULE_0___default().install();

// $FlowFixMe[cannot-resolve-module]
 // eslint-disable-line










// $FlowFixMe[cannot-resolve-module]
 // eslint-disable-line import/no-unresolved

let prefix = process.env.ROUTE_PREFIX;
let AssetsPlugin;
let server = null;
const state = {
  serve: null
};
function getInitialize() {
  return typeof _FUSION_ENTRY_PATH___WEBPACK_IMPORTED_MODULE_11__["default"] === 'function' ? _FUSION_ENTRY_PATH___WEBPACK_IMPORTED_MODULE_11__["default"] : () => {
    throw new Error('App should export a function');
  };
}
let initialReloadOptions;
async function start({
  port,
  dir = '.',
  useModuleScripts = false
} /*: any */) {
  AssetsPlugin = (0,_plugins_assets_plugin__WEBPACK_IMPORTED_MODULE_5__["default"])(dir);
  // TODO(#21): support https.createServer(credentials, listener);
  server = http__WEBPACK_IMPORTED_MODULE_2___default().createServer();
  initialReloadOptions = {
    useModuleScripts
  };
  await reload(initialReloadOptions);
  server.on('request', (req, res) => {
    if (prefix) _lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_10___default()(req, prefix);
    // $FlowFixMe[not-a-function]
    state.serve(req, res).catch(e => {
      // $FlowFixMe[prop-missing]
      state.app.onerror(e);
    });
  });
  return new Promise(resolve => {
    server && server.listen(port, () => {
      resolve(server);
    });
  });
}
let prevApp = null;
async function reload({
  useModuleScripts
} /* : { useModuleScripts?: boolean } */) {
  if (prevApp) {
    await prevApp.cleanup();
    prevApp = null;
  }
  const initialize = getInitialize();
  const app = await initialize();
  if (!(app instanceof (fusion_core__WEBPACK_IMPORTED_MODULE_3___default()))) {
    throw new Error('Application entry point did not return an App');
  }
  reverseRegister(app, _plugins_context_plugin__WEBPACK_IMPORTED_MODULE_6__["default"]);
  app.register(AssetsPlugin);
  app.register(fusion_core__WEBPACK_IMPORTED_MODULE_3__.SSRBodyTemplateToken, useModuleScripts ? _plugins_ssr_module_scripts_plugin__WEBPACK_IMPORTED_MODULE_9__.SSRModuleScriptsBodyTemplate : _plugins_ssr_plugin__WEBPACK_IMPORTED_MODULE_8__.SSRBodyTemplate);
  app.register(fusion_core__WEBPACK_IMPORTED_MODULE_3__.SSRShellTemplateToken, (0,_plugins_ssr_plugin__WEBPACK_IMPORTED_MODULE_8__.getSSRShellTemplate)(Boolean(useModuleScripts)));
  app.register(fusion_core__WEBPACK_IMPORTED_MODULE_3__.CriticalChunkIdsToken, _plugins_critical_chunk_ids_plugin_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
  if (prefix) {
    app.register(fusion_core__WEBPACK_IMPORTED_MODULE_3__.RoutePrefixToken, prefix);
  }
  if (server) {
    app.register(fusion_core__WEBPACK_IMPORTED_MODULE_3__.HttpServerToken, /*#__PURE__*/(0,fusion_core__WEBPACK_IMPORTED_MODULE_3__.createPlugin)({
      provides: () => server
    }));
  }
  if (true) {
    reverseRegister(app, _plugins_server_error_plugin__WEBPACK_IMPORTED_MODULE_7__["default"]);
  }
  state.serve = app.callback();
  // $FlowFixMe[prop-missing]
  state.app = prevApp = app;
}
function reverseRegister(app, token, plugin) {
  app.register(token, plugin);
  const entries = Array.from(app.taskMap.entries());
  entries.unshift(entries.pop());
  app.taskMap = new Map(entries);
}
if (true) {
  let hasFailedUpdate = false;

  // $FlowFixMe[cannot-resolve-name]
  let latestServerBuildHash = __webpack_require__.h();
  const isUpToDate = () => {
    return latestServerBuildHash === __webpack_require__.h();
  };
  let needReload = false;
  let reloadPromise = Promise.resolve();
  const checkForUpdate = () => {
    return module.hot
    // $FlowFixMe[prop-missing]
    .check(true).then(function (updatedModules) {
      if (updatedModules && updatedModules.length) {
        console.log('[HMR] Updated modules');
        updatedModules.forEach(function (m) {
          // Do not output internal modules
          if (m.includes('/fusion-cli/')) {
            return;
          }
          console.log('[HMR]  - ', m);
        });
      }
      if (!isUpToDate()) {
        return checkForUpdate();
      }
      if (needReload) {
        needReload = false;
        const curReloadPromise = reloadPromise = reloadPromise.then(function () {
          function skip() {
            return curReloadPromise !== reloadPromise || !isUpToDate();
          }
          if (skip()) {
            return false;
          }
          return reload(initialReloadOptions).then(function () {
            return !skip();
          });
        });
        return curReloadPromise;
      }
      return true;
    });
  };
  const onProcessMessage = data => {
    if (hasFailedUpdate) {
      return;
    }
    if (data.event === 'update') {
      latestServerBuildHash = data.serverBuildHash;

      // $FlowFixMe[prop-missing]
      if (module.hot.status() === 'idle') {
        checkForUpdate().then(isReady => {
          if (!isReady) {
            return;
          }

          // $FlowFixMe[not-a-function]
          process.send({
            event: 'ready',
            serverBuildHash: latestServerBuildHash
          });
        }).catch(function (err) {
          if (hasFailedUpdate) {
            return;
          }
          hasFailedUpdate = true;
          process.off('message', onProcessMessage);
          process.nextTick(() => {
            // $FlowFixMe[not-a-function]
            process.send({
              event: 'update-failed'
            });
          });
          global.__DEV_RUNTIME_LOG_ERROR__(err);
        });
      }
    }
  };
  process.on('message', onProcessMessage);
  const onAcceptReload = () => {
    // Defer reload until everything is up-to-date
    needReload = true;
  };
  module.hot.accept("./src/main.js", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _FUSION_ENTRY_PATH___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/main.js");
(onAcceptReload)(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  module.hot.accept("./node_modules/fusion-cli/build/loaders/i18n-manifest-loader.js!", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/fusion-cli/build/loaders/i18n-manifest-loader.js!");
/* harmony import */ _SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_1__);
(onAcceptReload)(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  module.hot.accept("./node_modules/fusion-cli/plugins/ssr-plugin.js", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _plugins_ssr_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/fusion-cli/plugins/ssr-plugin.js");
(onAcceptReload)(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  module.hot.accept("./node_modules/fusion-cli/plugins/ssr-module-scripts-plugin.js", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _plugins_ssr_module_scripts_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/fusion-cli/plugins/ssr-module-scripts-plugin.js");
(onAcceptReload)(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  module.hot.accept("./node_modules/fusion-cli/plugins/assets-plugin.js", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _plugins_assets_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/fusion-cli/plugins/assets-plugin.js");
(onAcceptReload)(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  module.hot.accept("./node_modules/fusion-cli/plugins/critical-chunk-ids-plugin.js", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _plugins_critical_chunk_ids_plugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/fusion-cli/plugins/critical-chunk-ids-plugin.js");
(onAcceptReload)(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  module.hot.accept("./node_modules/fusion-cli/plugins/context-plugin.js", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _plugins_context_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/fusion-cli/plugins/context-plugin.js");
(onAcceptReload)(__WEBPACK_OUTDATED_DEPENDENCIES__); });

  // $FlowFixMe[prop-missing]
  module.hot.decline();
}

/***/ }),

/***/ "./node_modules/fusion-cli/entries/server-public-path.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_2__);
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
/*::
declare var __webpack_public_path__: string;
*/




const {
  prefix,
  cdnUrl,
  dangerouslyExposeSourceMaps
} = (0,fusion_core__WEBPACK_IMPORTED_MODULE_2__.getEnv)();
if (typeof prefix === 'string' && prefix !== '') {
  assert__WEBPACK_IMPORTED_MODULE_0___default()(prefix.startsWith('/'), 'ROUTE_PREFIX must start with /');
}
if (typeof cdnUrl === 'string' && cdnUrl !== '') {
  assert__WEBPACK_IMPORTED_MODULE_0___default()(new url__WEBPACK_IMPORTED_MODULE_1__.URL(cdnUrl), 'CDN_URL must be valid absolute URL');
}
let assetBasePath = '/_static/';
if (prefix) {
  assetBasePath = prefix + assetBasePath;
}

// eslint-disable-next-line
__webpack_require__.p = cdnUrl && !dangerouslyExposeSourceMaps ? cdnUrl + '/' : assetBasePath;

/***/ }),

/***/ "./node_modules/fusion-cli/get-compilation-metadata.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/*
This is where webpack-related things should be defined
*/

// custom loaders: see build/compiler.js
// $FlowFixMe
const chunkUrlMap = __webpack_require__("./node_modules/fusion-cli/build/loaders/chunk-url-map-loader.js!"); // eslint-disable-line import/no-unresolved, import/no-extraneous-dependencies
// $FlowFixMe
const syncChunks = __webpack_require__("./node_modules/fusion-cli/build/loaders/sync-chunk-ids-loader.js!"); // eslint-disable-line import/no-unresolved, import/no-extraneous-dependencies

module.exports = () => {
  return {
    syncChunks,
    chunkUrlMap
  };
};

/***/ }),

/***/ "./node_modules/fusion-cli/lib/strip-prefix.js":
/***/ ((module) => {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
/* eslint-env node */

module.exports = function stripPrefix(req /*: any */, prefix /*: string */) {
  if (req.url.indexOf(prefix) === 0) {
    req.url = req.url.slice(prefix.length);
    if (req.url === '' || req.url.indexOf('?') === 0) {
      req.url = `/${req.url}`;
    }
  }
};

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/assets-plugin.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SECRET_CHUNK_MANIFEST_LOADER___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js!");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var koa_mount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("koa-mount");
/* harmony import */ var koa_mount__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_mount__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("koa-static");
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vary");
/* harmony import */ var vary__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vary__WEBPACK_IMPORTED_MODULE_5__);
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
/*::
import type {AssetsDepsType, AssetsType} from './types.js';
*/


// $FlowFixMe
 // eslint-disable-line





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(dir /*: string */) {
  /* eslint-disable-next-line */
  return /*#__PURE__*/(0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.createPlugin) /*:: <AssetsDepsType, AssetsType> */({
    deps: {
      RouteTags: fusion_core__WEBPACK_IMPORTED_MODULE_0__.RouteTagsToken
    },
    middleware: ({
      RouteTags
    }) => {
      const {
        baseAssetPath,
        env,
        dangerouslyExposeSourceMaps
      } = (0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.getEnv)();
      const denyList = new Set();
      for (let chunk of _SECRET_CHUNK_MANIFEST_LOADER___WEBPACK_IMPORTED_MODULE_1__.chunks.values()) {
        if (false) {}
      }
      const assetMiddleware = koa_static__WEBPACK_IMPORTED_MODULE_4___default()(path__WEBPACK_IMPORTED_MODULE_2___default().resolve(dir, `.fusion/dist/${env}/client`), {
        // setting defer here tells the `serve` middleware to `await next` first before
        // setting the response. This allows composition with user middleware
        defer: true,
        setHeaders: res => {
          if (false) {}
          res.setHeader('Timing-Allow-Origin', '*');
          vary__WEBPACK_IMPORTED_MODULE_5___default()(res, 'Accept-Encoding');
        }
      });
      return koa_mount__WEBPACK_IMPORTED_MODULE_3___default()(baseAssetPath, (ctx, next) => {
        RouteTags.from(ctx).name = 'static_asset';
        if (denyList.has(ctx.url)) {
          return next();
        }
        return assetMiddleware(ctx, next);
      });
    }
  });
}

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/context-plugin.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/*
This is where new ctx properties should be initialized
*/

/*::
import type {ContextDepsType, ContextType} from './types';
*/
const getCompilationMetaData = __webpack_require__("./node_modules/fusion-cli/get-compilation-metadata.js");
const {
  createPlugin
} = __webpack_require__("fusion-core");

/* eslint-disable-next-line */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlugin /*:: <ContextDepsType, ContextType> */({
  middleware: () => {
    const compilationMetaData = getCompilationMetaData();
    return function middleware(ctx, next) {
      // webpack-related things
      ctx.syncChunks = compilationMetaData.syncChunks;
      ctx.chunkUrlMap = compilationMetaData.chunkUrlMap;
      return next();
    };
  }
}));

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/critical-chunk-ids-plugin.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SECRET_CHUNK_MANIFEST_LOADER___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js!");
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/*::
import type {CriticalChunkIdsDepsType, CriticalChunkIdsType} from './types.js';
*/


// $FlowFixMe
 // eslint-disable-line

/* eslint-disable-next-line */
var _default = /*#__PURE__*/(0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.createPlugin) /*:: <CriticalChunkIdsDepsType, CriticalChunkIdsType> */({
  provides: () => {
    return {
      from: (0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.memoize)(() => {
        const chunkIds = new Set();
        for (const chunkId of _SECRET_CHUNK_MANIFEST_LOADER___WEBPACK_IMPORTED_MODULE_1__.initialChunkIds) {
          chunkIds.add(chunkId);
        }
        return chunkIds;
      })
    };
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/server-error-plugin.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _build_server_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/fusion-cli/build/server-error.js");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_1__);
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/*::
import type {ServerErrorDepsType, ServerErrorType} from './types.js';
*/




/* eslint-disable-next-line */
var _default = /*#__PURE__*/(0,fusion_core__WEBPACK_IMPORTED_MODULE_1__.createPlugin) /*:: <ServerErrorDepsType, ServerErrorType> */({
  middleware: () => async function middleware(ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.status = err.statusCode || err.status || 500;
      ctx.body = _build_server_error__WEBPACK_IMPORTED_MODULE_0__.renderHtmlError(err);
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/ssr-module-scripts-plugin.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSRModuleScriptsBodyTemplate: () => (/* binding */ SSRModuleScriptsBodyTemplate)
/* harmony export */ });
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SECRET_CHUNK_MANIFEST_LOADER___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js!");
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
/* eslint-env node */
/* global __webpack_public_path__ */


 // eslint-disable-line

/*::
import type {SSRBodyTemplateDepsType, SSRBodyTemplateType} from './types.js';
declare var __webpack_public_path__: string;
*/

/* eslint-disable-next-line */
const SSRModuleScriptsBodyTemplate = /*#__PURE__*/(0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.createPlugin) /*:: <SSRBodyTemplateDepsType,SSRBodyTemplateType> */({
  deps: {
    criticalChunkIds: fusion_core__WEBPACK_IMPORTED_MODULE_0__.CriticalChunkIdsToken.optional,
    routePrefix: fusion_core__WEBPACK_IMPORTED_MODULE_0__.RoutePrefixToken.optional
  },
  provides: ({
    criticalChunkIds,
    routePrefix
  }) => {
    const {
      dangerouslyExposeSourceMaps
    } = (0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.getEnv)();
    return ctx => {
      const {
        htmlAttrs,
        bodyAttrs,
        title,
        head,
        body
      } = ctx.template;
      const safeAttrs = Object.keys(htmlAttrs).map(attrKey => {
        return ` ${(0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.escape)(attrKey)}="${(0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.escape)(htmlAttrs[attrKey])}"`;
      }).join('');
      const safeBodyAttrs = Object.keys(bodyAttrs).map(attrKey => {
        return ` ${(0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.escape)(attrKey)}="${(0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.escape)(bodyAttrs[attrKey])}"`;
      }).join('');
      const safeTitle = (0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.escape)(title);
      // $FlowFixMe
      const safeHead = head.map(fusion_core__WEBPACK_IMPORTED_MODULE_0__.consumeSanitizedHTML).join('');
      // $FlowFixMe
      const safeBody = body.map(fusion_core__WEBPACK_IMPORTED_MODULE_0__.consumeSanitizedHTML).join('');
      const coreGlobals = [`<script nonce="${ctx.nonce}">`, `window.performance && window.performance.mark && window.performance.mark('firstRenderStart');`, routePrefix && `__ROUTE_PREFIX__ = ${JSON.stringify(routePrefix)};`, `__FUSION_ASSET_PATH__ = ${JSON.stringify(__webpack_require__.p)};`,
      // consumed in src/entries/client-public-path.js
      `__NONCE__ = ${JSON.stringify(ctx.nonce)}`,
      // consumed in src/entries/client-public-path.js
      `</script>`].filter(Boolean).join('');
      const tokenCriticalChunkIds = criticalChunkIds ? criticalChunkIds.from(ctx) : new Set();
      const allCriticalChunkIds = new Set([..._SECRET_CHUNK_MANIFEST_LOADER___WEBPACK_IMPORTED_MODULE_1__.initialChunkIds,
      // For now, take union of both ctx and token
      ...ctx.preloadChunks, ...tokenCriticalChunkIds,
      // runtime chunk must be last script
      ..._SECRET_CHUNK_MANIFEST_LOADER___WEBPACK_IMPORTED_MODULE_1__.runtimeChunkIds]);
      const legacyUrls = [];
      const modernUrls = [];
      for (let chunkId of allCriticalChunkIds) {
        const url = _SECRET_CHUNK_MANIFEST_LOADER___WEBPACK_IMPORTED_MODULE_1__.chunks.get(chunkId);
        if (url.includes('client-legacy')) {
          legacyUrls.push(url);
        } else {
          modernUrls.push(url);
        }
      }
      const devNoModuleLegacyBrowserWarningScript =  true && legacyUrls.length === 0 ? `
              <script nomodule defer nonce="${ctx.nonce}">
              document.body.innerHTML='<div style="padding:20vmin;font-family:sans-serif;font-size:16px;background:papayawhip">
<p>You are using a legacy browser but only the modern bundle has been built (legacy bundles are skipped by default when using <code style="display:inline">fusion dev</code>)
 or when using using <code style="display:inline">fusion build</code> with the --modernBuildOnly flag.</p>
<p>Please use a modern browser, <pre><code style="display:inline">fusion dev --forceLegacyBuild</code></pre> or
<pre><code style="display:inline">fusion build</code></pre> with no --modernBuildOnly flag to build the legacy bundle.</p>
<p>For more information, see the docs on <a href="https://github.com/fusionjs/fusion-cli/blob/master/docs/progressively-enhanced-bundles.md">progressively enhanced bundles</a>.</p>
</div>';
              </script>
              ` : '';
      const criticalChunkScripts = [];
      const preloadHints = [];
      const crossoriginAttr = process.env.CDN_URL ? ' crossorigin="anonymous"' : '';
      for (let url of modernUrls) {
        if (false) {}
        preloadHints.push(`<link rel="modulepreload" href="${url}" nonce="${ctx.nonce}"${crossoriginAttr} as="script"/>`);
        criticalChunkScripts.push(`<script type="module" src="${url}" nonce="${ctx.nonce}"${crossoriginAttr}></script>`);
      }
      for (let url of legacyUrls) {
        if (false) {}
        criticalChunkScripts.push(`<script defer nomodule src="${url}" nonce="${ctx.nonce}"${crossoriginAttr}></script>`);
      }
      return ['<!doctype html>', `<html${safeAttrs}>`, `<head>`, `<meta charset="utf-8" />`, `<title>${safeTitle}</title>`, `${getSafariNoModuleSupportScript({
        nonce: ctx.nonce
      })}`, `${devNoModuleLegacyBrowserWarningScript}`, `${preloadHints.join('')}${coreGlobals}${criticalChunkScripts.join('')}${safeHead}`, `</head>`, `<body${safeBodyAttrs}>${ctx.rendered}${safeBody}</body>`, '</html>'].join('');
    };
  }
});
function addWithMap(url) {
  if (url.endsWith('-with-map.js')) {
    return url;
  } else {
    return url.replace(/\.js$/, '-with-map.js');
  }
}
function getSafariNoModuleSupportScript({
  nonce
} /*: { nonce: string } */) {
  return [`<script nomodule nonce="${nonce}">`, `(function() {`, `var check = document.createElement('script');`, `if (!('noModule' in check) && 'onbeforeload' in check) {`, `var support = false;`, `document.addEventListener('beforeload', function(e) {`, `if (e.target === check) {`, `support = true;`, `} else if (!e.target.hasAttribute('nomodule') || !support) {`, `return;`, `}`, `e.preventDefault();`, `}, true);`, `check.type = 'module';`, `check.src = '.';`, `document.head.appendChild(check);`, `check.remove();`, `}`, `}());`, `</script>`].join('');
}

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/ssr-plugin.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSRBodyTemplate: () => (/* binding */ SSRBodyTemplate),
/* harmony export */   getSSRShellTemplate: () => (/* binding */ getSSRShellTemplate)
/* harmony export */ });
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SECRET_CHUNK_MANIFEST_LOADER___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js!");
/* harmony import */ var _build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/fusion-cli/build/modern-browser-versions.js");
/* harmony import */ var _build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2__);
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
/* eslint-env node */
/* global __webpack_public_path__ */


 // eslint-disable-line



/*::
import type {
  SSRBodyTemplateDepsType,
  SSRBodyTemplateType,
  SSRShellTemplateDepsType,
  SSRShellTemplateType,
} from './types.js';
declare var __webpack_public_path__: string;
*/

function getSSRTemplateContents(ctx /*: any */, criticalChunkIds /*: any */, routePrefix /*: any */, emitScripts /*: boolean */)
/*: {
start: string,
end: string,
scripts: Array<string>
} */
{
  const {
    dangerouslyExposeSourceMaps
  } = (0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.getEnv)();
  const {
    htmlAttrs,
    bodyAttrs,
    title,
    head,
    body
  } = ctx.template;
  const safeAttrs = Object.keys(htmlAttrs).map(attrKey => {
    return ` ${(0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.escape)(attrKey)}="${(0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.escape)(htmlAttrs[attrKey])}"`;
  }).join('');
  const safeBodyAttrs = Object.keys(bodyAttrs).map(attrKey => {
    return ` ${(0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.escape)(attrKey)}="${(0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.escape)(bodyAttrs[attrKey])}"`;
  }).join('');
  const safeTitle = (0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.escape)(title);
  // $FlowFixMe
  const safeHead = head.map(fusion_core__WEBPACK_IMPORTED_MODULE_0__.consumeSanitizedHTML).join('');
  // $FlowFixMe
  const safeBody = body.map(fusion_core__WEBPACK_IMPORTED_MODULE_0__.consumeSanitizedHTML).join('');
  const coreGlobals = [`<script nonce="${ctx.nonce}">`, `window.performance && window.performance.mark && window.performance.mark('firstRenderStart');`, routePrefix && `__ROUTE_PREFIX__ = ${JSON.stringify(routePrefix)};`, `__FUSION_ASSET_PATH__ = ${JSON.stringify(__webpack_require__.p)};`,
  // consumed in src/entries/client-public-path.js
  `__NONCE__ = ${JSON.stringify(ctx.nonce)}`,
  // consumed in src/entries/client-public-path.js
  `</script>`].filter(Boolean).join('');
  const tokenCriticalChunkIds = criticalChunkIds ? criticalChunkIds.from(ctx) : new Set();
  const allCriticalChunkIds = new Set([..._SECRET_CHUNK_MANIFEST_LOADER___WEBPACK_IMPORTED_MODULE_1__.initialChunkIds,
  // For now, take union of both ctx and token
  ...ctx.preloadChunks,
  // Set in fusion-react
  ...tokenCriticalChunkIds,
  // Same as initial
  // runtime chunk must be last script
  ..._SECRET_CHUNK_MANIFEST_LOADER___WEBPACK_IMPORTED_MODULE_1__.runtimeChunkIds]);
  const legacyUrls = [];
  const modernUrls = [];
  for (let chunkId of allCriticalChunkIds) {
    const url = _SECRET_CHUNK_MANIFEST_LOADER___WEBPACK_IMPORTED_MODULE_1__.chunks.get(chunkId);
    if (url.includes('client-legacy')) {
      legacyUrls.push(url);
    } else {
      modernUrls.push(url);
    }
  }
  const isModernBrowser = checkModuleSupport(ctx.useragent.browser);
  if (true) {
    if (!isModernBrowser && legacyUrls.length === 0) {
      const warningMessage = `<!DOCTYPE html>
<html>
<head>
</head>
<body style="padding:20vmin;font-family:sans-serif;font-size:16px;background:papayawhip">
<p>You are using a legacy browser but only the modern bundle has been built (legacy bundles are skipped by default when using <code style="display:inline">fusion dev</code>)
 or when using using <code style="display:inline">fusion build</code> with the --modernBuildOnly flag.</p>
<p>Please use a modern browser, <pre><code style="display:inline">fusion dev --forceLegacyBuild</code></pre> or
<pre><code style="display:inline">fusion build</code></pre> with no --modernBuildOnly flag to build the legacy bundle.</p>
<p>For more information, see the docs on <a href="https://github.com/fusionjs/fusion-cli/blob/master/docs/progressively-enhanced-bundles.md">progressively enhanced bundles</a>.</p>
</body>
</html>`;
      return {
        start: warningMessage,
        end: '',
        scripts: []
      };
    }
  }
  const criticalChunkUrls = isModernBrowser || legacyUrls.length === 0 ? modernUrls : legacyUrls;
  let criticalChunkScripts = [];
  let preloadHints = [];
  if (emitScripts) {
    for (let url of criticalChunkUrls) {
      if (false) {}
      const crossoriginAttr = process.env.CDN_URL ? ' crossorigin="anonymous"' : '';
      preloadHints.push(`<link rel="preload" href="${url}" nonce="${ctx.nonce}"${crossoriginAttr} as="script"/>`);
      criticalChunkScripts.push(`<script defer src="${url}" nonce="${ctx.nonce}"${crossoriginAttr}></script>`);
    }
  }
  const start = ['<!doctype html>', `<html${safeAttrs}>`, `<head>`, `<meta charset="utf-8" />`, `<title>${safeTitle}</title>`, `${preloadHints.join('')}${coreGlobals}${criticalChunkScripts.join('')}${safeHead}`, `</head>`, `<body${safeBodyAttrs}>`].join('');
  const end = [`${safeBody}</body>`, '</html>'].join('');
  return {
    start,
    end,
    scripts: criticalChunkUrls
  };
}
const SSRBodyTemplate = /*#__PURE__*/(0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.createPlugin) /*:: <SSRBodyTemplateDepsType,SSRBodyTemplateType> */({
  deps: {
    criticalChunkIds: fusion_core__WEBPACK_IMPORTED_MODULE_0__.CriticalChunkIdsToken.optional,
    routePrefix: fusion_core__WEBPACK_IMPORTED_MODULE_0__.RoutePrefixToken.optional
  },
  provides: ({
    criticalChunkIds,
    routePrefix
  }) => {
    return ctx => {
      const template = getSSRTemplateContents(ctx, criticalChunkIds, routePrefix, true);
      return [template.start, ctx.rendered, template.end].join('');
    };
  }
});
const getSSRShellTemplate = (useModuleScripts /*: boolean */) => /*#__PURE__*/(0,fusion_core__WEBPACK_IMPORTED_MODULE_0__.createPlugin) /*:: <SSRShellTemplateDepsType,SSRShellTemplateType> */({
  deps: {
    criticalChunkIds: fusion_core__WEBPACK_IMPORTED_MODULE_0__.CriticalChunkIdsToken.optional,
    routePrefix: fusion_core__WEBPACK_IMPORTED_MODULE_0__.RoutePrefixToken.optional
  },
  provides: ({
    criticalChunkIds,
    routePrefix
  }) => {
    return ctx => {
      const shell = getSSRTemplateContents(ctx, criticalChunkIds, routePrefix, false);
      return {
        start: shell.start,
        end: shell.end,
        scripts: shell.scripts,
        useModuleScripts
      };
    };
  }
});

const embeddedBrowserVersions = {
  ios_webkit: 605 // mobile safari v13
};

/*
Safari 10.1 and 11 have some ES6 bugs:
- https://github.com/mishoo/UglifyJS2/issues/1753
- https://github.com/mishoo/UglifyJS2/issues/2344
- https://github.com/terser-js/terser/issues/117
Rather than enable terser workarounds that reduces minification for compliant browsers,
Safari 10.1 and 11 should be treated as legacy.
*/
function checkModuleSupport({
  name,
  version
}) {
  if (typeof version !== 'string') {
    return false;
  }
  if (name === 'Chrome' || name === 'Chrome Headless' || name === 'Chromium') {
    if (majorVersion(version) >= (_build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2___default().chrome)) return true;
  } else if (name === 'Chrome WebView') {
    if (majorVersion(version) >= (_build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2___default().android)) return true;
  } else if (name === 'WebKit') {
    if (majorVersion(version) >= embeddedBrowserVersions.ios_webkit) return true;
  } else if (name === 'Safari') {
    if (majorVersion(version) >= (_build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2___default().safari)) return true;
  } else if (name === 'Mobile Safari') {
    if (majorVersion(version) >= (_build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2___default().ios)) return true;
  } else if (name === 'Firefox') {
    if (majorVersion(version) >= (_build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2___default().firefox)) return true;
  } else if (name === 'Edge') {
    if (majorVersion(version) >= (_build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2___default().edge)) return true;
  }
  return false;
}
function majorVersion(version) {
  return parseInt(version.split('.')[0], 10);
}
function addWithMap(url) {
  if (url.endsWith('-with-map.js')) {
    return url;
  } else {
    return url.replace(/\.js$/, '-with-map.js');
  }
}

/***/ }),

/***/ "./src/images/pair.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pair)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\src\\images\\pair.js";

function Pair({
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    ...props,
    width: "200",
    height: "63",
    viewBox: "0 0 200 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M191.868 62.6502H175.015L136.815 60.1734L98.6342 62.6502H85.1307L55.3836 60.9795L27.4821 62.6502H8.14018C6.86562 62.6498 5.60896 62.3511 4.47132 61.7782C3.33367 61.2053 2.34682 60.3742 1.59016 59.3518C0.833509 58.3293 0.328187 57.1441 0.114863 55.8914C-0.0984614 54.6388 -0.0138289 53.3537 0.361946 52.1396L3.64041 41.5705C8.22188 26.7307 22.2847 16.5772 38.2057 16.5772H161.803C177.724 16.5772 191.784 26.7307 196.368 41.5705L199.638 52.1396C200.014 53.353 200.098 54.6373 199.885 55.8894C199.673 57.1414 199.168 58.3261 198.412 59.3484C197.657 60.3707 196.671 61.202 195.534 61.7754C194.398 62.3489 193.142 62.6485 191.868 62.6502Z",
      fill: "#276EF1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M61.5676 25.2355V37.3813H51.0493V25.4255C52.8111 27.0419 61.5676 25.2355 61.5676 25.2355Z",
      fill: "#C78982"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M51.0493 27.1233V22.932H61.5676V31.9119C59.8582 31.9119 58.6704 31.9119 57.2669 31.4253C54.9981 30.6526 52.6917 29.0279 51.0493 27.1233Z",
      fill: "#99644D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M45.9568 13.3883C45.9568 13.1106 45.9693 12.837 45.9903 12.5676C46.0227 12.1862 46.0765 11.8069 46.1516 11.4316C46.1516 11.3898 46.1516 11.3459 46.1516 11.3042C46.1516 5.84108 50.0355 1.33654 55.0548 0.684974C55.4715 0.630072 55.8913 0.602169 56.3117 0.60144C61.9217 0.60144 66.4718 5.40462 66.4718 11.3042C66.4718 11.3439 66.4718 11.3835 66.4718 11.4232C66.5872 12.0083 66.6516 12.6022 66.6645 13.1983C66.6645 13.263 66.6645 13.3257 66.6645 13.3904C66.6645 13.3904 66.698 13.8081 66.6792 14.5453C66.6666 15.0235 66.6394 15.4976 66.5891 15.9716C66.5765 16.099 66.5639 16.2243 66.543 16.3496C66.4815 16.8592 66.3992 17.3638 66.2958 17.8636C66.1157 18.7393 65.8714 19.6007 65.5647 20.4407C65.0228 21.9364 64.2936 23.358 63.3944 24.6716L63.3525 24.7364C63.1996 24.9556 63.0446 25.1749 62.8791 25.3879C62.2942 26.1684 61.6491 26.9023 60.9497 27.5828L60.8931 27.635C58.0609 30.7675 54.7489 30.9032 51.7302 27.635C51.713 27.6166 51.6949 27.5992 51.6757 27.5828C50.6445 26.575 49.7309 25.454 48.9524 24.2414C48.4644 23.4873 48.031 22.6994 47.6557 21.8837C47.1922 20.8823 46.8193 19.8416 46.5412 18.7742C46.2546 17.6897 46.0708 16.5808 45.9924 15.4621C45.9672 15.1572 45.9526 14.8481 45.9442 14.5411C45.9442 14.4304 45.9442 14.3323 45.9442 14.2258C45.9316 13.6932 45.9568 13.3883 45.9568 13.3883Z",
      fill: "#C78982"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M55.593 19.5176C55.5936 19.5086 55.5936 19.4995 55.593 19.4904C55.593 19.4904 55.593 19.5051 55.593 19.5176Z",
      fill: "#C78982"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M55.593 19.5176C55.5936 19.5086 55.5936 19.4995 55.593 19.4904C55.593 19.4904 55.593 19.5051 55.593 19.5176Z",
      fill: "#C78982"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M44.9888 31.0682C46.1493 31.5318 47.7582 31.9035 51.0492 31.9035V26.9396C50.934 26.8143 50.8167 26.6869 50.7057 26.5616C50.5946 26.4363 50.4815 26.3047 50.3726 26.1773C50.2636 26.0499 50.1736 25.9392 50.0772 25.816C50.0562 25.7931 50.0395 25.7701 50.0206 25.7471C49.9437 25.6615 49.8737 25.5701 49.8111 25.4735C48.726 23.5063 48.3762 22.8736 47.9048 19.9332C47.4628 17.1724 47.7582 14.6184 50.2678 13.5951C53.7432 12.1646 56.2424 8.89005 57.3485 5.30854C57.3485 8.97984 59.944 12.1332 62.4578 13.6765C64.9235 15.1906 64.4815 18.0954 64.2867 19.9415C63.9766 22.8652 62.5144 25.4715 61.5633 26.9479V39.5928L61.7728 39.6387C69.1048 41.2551 75.3455 34.2091 72.8358 27.1609L66.2265 7.95656C65.3173 4.41891 62.6988 1.60174 59.391 0.505365C58.7988 0.306361 58.1883 0.166452 57.5684 0.0876971C57.1517 0.0321896 56.7319 0.0035893 56.3115 0.0020752C52.1741 0.0020752 48.5123 2.71692 46.9726 6.47593C46.8343 6.81633 46.694 7.14628 46.5536 7.47624L41.9743 21.2321C40.8367 24.1913 40.378 29.2367 44.9888 31.0682Z",
      fill: "black"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M72.2682 39.4341C72.2682 39.4341 71.5874 36.4102 72.2158 34.9985L72.551 34.2467L64.7141 37.6277L72.2682 39.4341Z",
      fill: "black"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M74.5915 62.6502C74.5906 62.6446 74.5906 62.639 74.5915 62.6335H38.0214C38.0214 62.6335 38.0214 62.6439 38.0214 62.6502H27.4822V62.6209L31.7683 48.4495L32.6502 45.5258C33.4882 42.0111 36.9531 39.3986 40.5856 38.7784L49.0677 36.7548C49.6322 36.6193 50.1345 36.2985 50.494 35.844C50.8534 35.3894 51.0491 34.8276 51.0494 34.2488V31.9056H61.5656V34.2488C61.5663 34.8284 61.7628 35.3909 62.1235 35.8456C62.4842 36.3002 62.988 36.6205 63.5537 36.7548L72.0379 38.7825C75.6683 39.409 79.1353 42.0153 79.9732 45.53L85.1308 62.6502H74.5915Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M74.3904 62.6335H66.2016L40.043 36.4478H48.2255L74.3904 62.6335Z",
      fill: "#276EF1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M60.3107 13.334C59.8086 13.3348 59.3128 13.4467 58.8593 13.6615C58.4057 13.8764 58.0057 14.1889 57.688 14.5766L57.4973 14.8084C57.2333 15.1301 57.089 15.533 57.0888 15.9486C57.0888 16.0533 57.0471 16.1537 56.9729 16.2277C56.8986 16.3017 56.7979 16.3433 56.6929 16.3433H55.5617C55.4581 16.3411 55.3596 16.2986 55.2871 16.2248C55.2147 16.151 55.1741 16.0519 55.1741 15.9486C55.171 15.5317 55.0229 15.1287 54.7551 14.8084L54.5666 14.5787C54.2492 14.1883 53.8486 13.8733 53.3939 13.6566C52.9391 13.4398 52.4416 13.3268 51.9376 13.3257H47.7834C47.7768 13.3257 47.7704 13.3283 47.7657 13.333C47.761 13.3377 47.7583 13.3441 47.7583 13.3507V17.0262C47.7589 18.0051 48.1493 18.9437 48.8438 19.6356C49.5384 20.3276 50.4801 20.7163 51.462 20.7163C52.2841 20.7162 53.0827 20.443 53.7318 19.9401C54.3808 19.4371 54.8434 18.733 55.0463 17.9388C55.1095 17.6719 55.2562 17.432 55.4653 17.2538C55.6493 17.1033 55.8799 17.0211 56.1179 17.0211C56.3558 17.0211 56.5865 17.1033 56.7704 17.2538C56.9797 17.4327 57.1264 17.6734 57.1894 17.9409C57.3887 18.7188 57.8372 19.4107 58.4666 19.9115C59.0961 20.4124 59.8722 20.695 60.6773 20.7163C62.7848 20.779 64.4921 19.0122 64.4921 16.9114V13.3654C64.4921 13.3587 64.4894 13.3523 64.4847 13.3476C64.48 13.3429 64.4736 13.3403 64.4669 13.3403L60.3107 13.334Z",
      fill: "black"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M57.3947 23.8342C57.2276 23.7323 57.0322 23.6863 56.837 23.7028C56.6418 23.7193 56.457 23.7976 56.3095 23.9261C56.162 23.7976 55.9772 23.7193 55.7821 23.7028C55.5869 23.6863 55.3915 23.7323 55.2244 23.8342L53.5715 24.8512L53.8774 25.1144C54.5527 25.6959 55.4151 26.016 56.3074 26.0165C57.1998 26.016 58.0622 25.6959 58.7375 25.1144L59.0433 24.8512L57.3947 23.8342Z",
      fill: "#99644D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M144.401 41.1946H129.249L129.251 33.7538L129.249 21.1423H144.401V41.1946Z",
      fill: "#FFAFA1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M98.6343 62.6084L102.26 49.8111C103.66 44.8178 107.479 41.0045 112.261 39.8309L123.626 37.0346C126.93 36.2222 129.27 36.4645 129.261 32.8579V32.4236H131.272C131.529 32.4235 131.784 32.4688 132.024 32.5572C132.311 32.6611 132.575 32.8208 132.799 33.0271L136.664 36.5689L140.892 32.9749C141.102 32.7946 141.342 32.6532 141.602 32.5572C141.843 32.4696 142.098 32.4244 142.354 32.4236H144.415V32.8579C144.415 36.4603 146.745 36.216 150.051 37.0346L161.415 39.8309C166.198 41.0066 170.017 44.8178 171.416 49.8111L175.021 62.6084H98.6343Z",
      fill: "black"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M146.158 14.2822L145.783 21.9923C147.074 21.7083 148.297 20.2068 148.659 18.9391L149.432 16.2034C149.525 15.7986 149.506 15.3765 149.378 14.9814C149.25 14.5864 149.018 14.233 148.706 13.9585C148.518 13.8104 148.303 13.7012 148.073 13.6372C147.842 13.5732 147.602 13.5558 147.365 13.586C147.127 13.6161 146.899 13.6933 146.692 13.8128C146.485 13.9324 146.304 14.0919 146.16 14.2822H146.158Z",
      fill: "#FFAFA1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M127.474 14.2822L127.849 21.9923C126.559 21.7083 125.335 20.2068 124.973 18.9391L124.2 16.2034C124.108 15.7981 124.128 15.3756 124.257 14.9805C124.386 14.5854 124.62 14.2323 124.933 13.9585C125.12 13.8104 125.335 13.7012 125.566 13.6372C125.796 13.5732 126.037 13.5558 126.274 13.586C126.511 13.6161 126.74 13.6933 126.947 13.8128C127.153 13.9324 127.334 14.0919 127.478 14.2822H127.474Z",
      fill: "#FFAFA1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M147.997 13.6953L147.658 15.4537C147.597 15.7711 147.503 16.1575 147.386 16.5919C146.353 20.4093 143.439 28.0276 143.439 28.0276C142.892 29.3293 141.972 30.4409 140.793 31.2226C139.615 32.0044 138.231 32.4215 136.815 32.4215C135.399 32.4215 134.015 32.0044 132.837 31.2226C131.658 30.4409 130.738 29.3293 130.191 28.0276C130.191 28.0276 127.277 20.4072 126.244 16.5919C126.127 16.1575 126.035 15.7732 125.972 15.4537L125.633 13.7016C124.292 6.78919 129.42 0.208834 136.474 0H136.815H137.157C144.206 0.208834 149.338 6.78919 147.997 13.6953Z",
      fill: "#FFAFA1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M148.207 11.1476C148.031 5.25844 143.452 0.196308 137.437 0.0187988H137.106H136.817H136.53H136.197C130.17 0.196308 125.601 5.25844 125.423 11.1476C125.397 12.2944 125.538 13.4391 125.842 14.5453L126.632 17.4878H127.977L127.608 16.6524C126.738 14.6695 126.691 12.4239 127.476 10.4062C127.763 9.64847 127.949 8.8565 128.029 8.05055L128.117 7.26116C128.245 6.77088 128.492 6.3196 128.837 5.94724C129.182 5.57487 129.613 5.29291 130.093 5.12628C130.573 4.95965 131.086 4.91351 131.588 4.99193C132.09 5.07034 132.565 5.27091 132.971 5.57587C134.075 6.40777 135.42 6.85791 136.804 6.85791C138.187 6.85791 139.533 6.40777 140.636 5.57587C141.169 5.16978 141.82 4.94962 142.49 4.94937C143.177 4.94733 143.844 5.17299 144.388 5.59078C144.931 6.00858 145.32 6.59476 145.492 7.25698L145.578 8.04637C145.66 8.85226 145.847 9.64411 146.133 10.402C146.918 12.4199 146.87 14.6651 146.001 16.6482L145.633 17.4836H146.977L147.767 14.5411C148.078 13.4371 148.226 12.294 148.207 11.1476Z",
      fill: "#7C4F40"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M146.988 17.4877L144.545 26.6033C144.068 28.2803 143.055 29.7563 141.66 30.8073C140.266 31.8583 138.565 32.427 136.816 32.427C135.068 32.427 133.367 31.8583 131.972 30.8073C130.577 29.7563 129.564 28.2803 129.087 26.6033L126.643 17.4877H127.985L129.797 21.6206C130.403 23.3058 132.632 23.1847 133.765 22.5728L134.813 22.0048C135.425 21.674 136.111 21.5007 136.808 21.5007C137.505 21.5007 138.191 21.674 138.803 22.0048L139.851 22.5728C140.984 23.1847 143.213 23.3058 143.818 21.6206L145.63 17.4877H146.988Z",
      fill: "#7C4F40"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M144.637 11.8388L143.577 11.6947L143.489 11.6759L142.767 11.5589C142.117 11.4529 141.457 11.4311 140.802 11.4942C140.274 11.5467 139.769 11.7339 139.335 12.038C138.901 12.342 138.554 12.7524 138.325 13.2296C138.259 13.3673 138.147 13.4776 138.007 13.5416C137.868 13.6056 137.711 13.6193 137.563 13.5805C137.075 13.4461 136.559 13.4461 136.071 13.5805C135.923 13.6193 135.766 13.6056 135.627 13.5416C135.488 13.4776 135.375 13.3673 135.309 13.2296C135.081 12.7524 134.733 12.342 134.299 12.038C133.865 11.7339 133.36 11.5467 132.833 11.4942C132.178 11.4311 131.517 11.4529 130.868 11.5589L130.145 11.6759L130.057 11.6947L128.993 11.8367C128.613 11.8817 128.266 12.0748 128.028 12.3737C127.79 12.6725 127.681 13.053 127.723 13.4322C127.737 13.5384 127.766 13.6419 127.811 13.7392C128.034 14.1984 128.229 14.6705 128.396 15.153C128.482 15.4075 128.59 15.6542 128.718 15.8902C128.972 16.3614 129.313 16.7802 129.724 17.1244C130.136 17.4859 130.621 17.7536 131.147 17.9087C131.673 18.0638 132.227 18.1026 132.77 18.0224C133.455 17.9199 134.092 17.6093 134.594 17.1328C135.096 16.6563 135.439 16.0372 135.575 15.3597C135.602 15.2092 135.619 15.0572 135.627 14.9045C135.633 14.7592 135.685 14.6197 135.777 14.5067C135.869 14.3938 135.995 14.3135 136.136 14.278C136.58 14.1694 137.044 14.1694 137.487 14.278C137.629 14.3135 137.755 14.3938 137.847 14.5067C137.938 14.6197 137.991 14.7592 137.997 14.9045C138.004 15.0572 138.022 15.2092 138.049 15.3597C138.186 16.0368 138.528 16.6555 139.03 17.1315C139.532 17.6076 140.169 17.9179 140.854 18.0203C141.397 18.1014 141.952 18.0632 142.478 17.9085C143.005 17.7538 143.492 17.4861 143.904 17.1244C144.315 16.7823 144.657 16.3656 144.912 15.8964C145.04 15.6605 145.148 15.4138 145.234 15.1592C145.401 14.6768 145.596 14.2047 145.819 13.7454C145.864 13.6482 145.893 13.5447 145.907 13.4385C145.95 13.0586 145.841 12.6771 145.603 12.3772C145.365 12.0774 145.018 11.8838 144.637 11.8388ZM135.055 15.2449C134.942 15.807 134.658 16.3208 134.242 16.7162C133.825 17.1115 133.297 17.3693 132.728 17.4543C132.278 17.5198 131.819 17.487 131.383 17.3583C130.946 17.2296 130.543 17.008 130.202 16.7088C129.86 16.425 129.576 16.0792 129.364 15.6897C129.155 15.2983 129.013 14.8747 128.945 14.4367C128.922 14.3029 128.914 14.1671 128.919 14.0315C128.94 13.5851 129.114 13.1593 129.412 12.8252C129.71 12.4912 130.113 12.269 130.556 12.1959L131.155 12.0998C131.694 12.0116 132.243 11.9934 132.787 12.0455C133.143 12.0801 133.489 12.1895 133.8 12.3665C134.111 12.5436 134.381 12.7844 134.592 13.073C134.754 13.2985 134.866 13.5554 134.921 13.8269C134.967 14.0357 135.02 14.3343 135.06 14.562C135.098 14.7881 135.097 15.0192 135.055 15.2449ZM144.719 14.0357C144.725 14.1713 144.716 14.307 144.694 14.4409C144.625 14.8789 144.484 15.3025 144.275 15.6939C144.063 16.0834 143.778 16.4292 143.437 16.713C143.095 17.0121 142.692 17.2337 142.256 17.3625C141.82 17.4912 141.361 17.5239 140.911 17.4585C140.342 17.3735 139.813 17.1157 139.397 16.7203C138.98 16.325 138.696 15.8112 138.583 15.249C138.543 15.0232 138.543 14.792 138.583 14.5662C138.621 14.3385 138.675 14.0357 138.721 13.8311C138.777 13.5596 138.889 13.3027 139.05 13.0772C139.262 12.7896 139.532 12.5498 139.842 12.3734C140.153 12.1971 140.498 12.0882 140.854 12.0539C141.398 12.0017 141.946 12.02 142.486 12.1082L143.085 12.2042C143.527 12.2774 143.931 12.4995 144.229 12.8336C144.526 13.1677 144.7 13.5935 144.721 14.0399L144.719 14.0357Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M159.804 37.1161L135.717 61.274L135.583 61.4076L135.623 61.416H127.439L127.401 61.4076L127.516 61.2907L127.533 61.274L151.624 37.1161H159.804Z",
      fill: "#276EF1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M164.235 62.2325C164.105 61.8733 163.973 61.5162 163.83 61.1633C161.626 55.6993 157.806 51.0331 152.878 47.7843C147.951 44.5355 142.148 42.8577 136.242 42.9737C130.335 43.0897 124.604 44.994 119.808 48.4339C115.013 51.8737 111.38 56.6862 109.393 62.2325C109.345 62.3724 109.295 62.5123 109.249 62.6502H114.597C114.658 62.5103 114.718 62.3703 114.781 62.2325C116.608 58.1099 119.562 54.5829 123.304 52.0548C127.047 49.5267 131.428 48.0995 135.946 47.9363C140.464 47.7731 144.937 48.8806 148.853 51.1321C152.77 53.3836 155.971 56.6883 158.093 60.6683C158.367 61.1779 158.623 61.7 158.855 62.2325C158.918 62.3724 158.979 62.5123 159.037 62.6502H164.379L164.235 62.2325Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M119.313 59.9645C118.018 60.4219 116.642 60.6725 115.37 61.2363C115.332 61.2531 114.532 62.2074 114.017 62.4204C113.827 62.4923 113.633 62.5543 113.437 62.6063H105.74L105.753 62.362C105.762 62.2605 105.762 62.1585 105.753 62.0571L105.648 61.0755C105.632 60.9438 105.632 60.8105 105.648 60.6788C105.674 60.4378 105.752 60.2054 105.878 59.998C106.003 59.7905 106.173 59.613 106.375 59.478H106.387L106.773 59.2127C107.277 58.8627 107.684 58.3915 107.956 57.8428L108.331 57.0785C108.42 56.858 108.556 56.659 108.728 56.4948C108.9 56.3306 109.106 56.2049 109.331 56.1262H109.362L109.481 56.0928L109.993 55.9466C110.499 55.7984 110.957 55.5171 111.317 55.1321L111.627 54.8063C111.804 54.6157 112.023 54.4689 112.267 54.3775C112.511 54.2861 112.773 54.2528 113.032 54.2801C113.17 54.295 113.305 54.3273 113.435 54.3761C113.563 54.4241 113.686 54.488 113.799 54.5662L115.544 55.4704C116.038 55.731 116.467 56.0977 116.801 56.5438L119.313 59.9645Z",
      fill: "#FFAFA1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M169.376 62.5165L169.353 62.6084H158.112L157.975 62.5625C157.452 62.3808 156.343 61.3324 155.813 61.1675L158.229 57.9786C158.563 57.5324 158.992 57.1657 159.486 56.9052L161.231 56.0009C161.345 55.9227 161.468 55.8589 161.597 55.8109C161.907 55.6939 162.245 55.6724 162.568 55.7491C162.89 55.8258 163.182 55.9972 163.405 56.2411L163.715 56.5668C164.076 56.9451 164.532 57.2204 165.035 57.3646L165.546 57.5108L165.666 57.5442H165.697C165.922 57.6232 166.127 57.749 166.299 57.9132C166.471 58.0774 166.605 58.2762 166.694 58.4965L167.071 59.2608C167.343 59.8103 167.75 60.2818 168.255 60.6307L168.638 60.896H168.651C168.852 61.0312 169.022 61.2088 169.147 61.4163C169.272 61.6237 169.35 61.856 169.376 62.0968C169.394 62.2361 169.394 62.3772 169.376 62.5165Z",
      fill: "#FFAFA1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M174.519 62.6502L98.7808 62.6356L103.48 62.4956C104.288 62.4706 105.095 62.4253 105.901 62.3599C107.517 62.2294 109.126 62.0147 110.719 61.7167C111.376 61.5956 112.031 61.4563 112.684 61.299C114.654 60.8453 116.593 60.2677 118.489 59.5699L118.521 59.5573C119.163 59.3207 119.801 59.0701 120.435 58.8055C120.815 58.6482 121.194 58.4853 121.571 58.3169L121.659 58.2793C122.793 57.7753 123.939 57.3284 125.099 56.9386L125.275 56.8801L125.543 56.7903C125.725 56.7297 125.909 56.6713 126.092 56.617C126.65 56.4415 127.216 56.28 127.79 56.1325C133.939 54.5234 140.39 54.4517 146.573 55.9236C147.898 56.2381 149.205 56.6208 150.49 57.0701C151.036 57.2595 151.58 57.4627 152.122 57.6799C152.315 57.7551 152.508 57.8324 152.698 57.9138L154.726 58.7492C155.605 59.1125 156.49 59.4508 157.383 59.7641C158.029 59.9896 158.679 60.1985 159.331 60.3906C160.494 60.7428 161.667 61.0498 162.848 61.3115C163.38 61.4299 163.914 61.5385 164.449 61.6373C165.672 61.8657 166.901 62.0446 168.135 62.174C168.747 62.2388 169.361 62.291 169.975 62.3327H170.149L174.519 62.6502Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M138.166 23.8259C137.942 23.7539 137.706 23.7235 137.471 23.7361C137.033 23.757 136.597 23.757 136.159 23.7361C135.924 23.7235 135.688 23.7539 135.464 23.8259L133.409 24.5213L133.79 24.703C134.741 25.1281 135.773 25.3419 136.815 25.3295C137.857 25.3419 138.889 25.1281 139.84 24.703L140.221 24.5213L138.166 23.8259Z",
      fill: "#FFAFA1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "./src/main.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fusion-react");
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fusion-plugin-styletron-react");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fusion-plugin-react-helmet-async");
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/root.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const app = new (fusion_react__WEBPACK_IMPORTED_MODULE_0___default())(_root_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
  app.register((fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2___default()));
  app.register((fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default()));
  app.register((fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3___default()));
  return app;
});

/***/ }),

/***/ "./src/pages/home.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fusion-plugin-react-helmet-async");
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_pair__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/images/pair.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\src\\pages\\home.js";





// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const css = (0,fusion_core__WEBPACK_IMPORTED_MODULE_3__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./src/pages/home.css?assetUrl=true"));
const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const onSubmit = data => {
    console.log(data); // You can handle form submission here
    setFormData(data); // Update formData state with form data
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
        rel: "stylesheet",
        href: css
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
      children: "Uber"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "container form",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "container border",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_images_pair__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          children: ["Uber Insurance quote in ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 37
          }, undefined), " under 2 minutes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Compare all Uber approved Private Hire motor insurance providers in one place. All Private Hire motor policies must be purchased online. All providers after automatic uploads of your insurance certificate directly to your uber account, which will help streamline your verification process."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
          onSubmit: handleSubmit(onSubmit),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "fields",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "licField",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                className: "labelName",
                htmlFor: "name",
                children: "Driving License Number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                placeholder: "xxx-xx-xxx/xxxxx",
                type: "text",
                id: "name",
                name: "license",
                className: `inputFields ${errors.license ? "error" : ""}`,
                ...register("license", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9]{3}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{3}\/[a-zA-Z0-9]{5}$/,
                    message: "Invalid format (xxx-xx-xxx/xxxxx)"
                  }
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, undefined), errors.license && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                className: "errorMessage",
                children: errors.license.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              htmlFor: "selectField",
              className: "labelName",
              children: "Title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
              id: "selectField",
              className: `inputFields ${errors.title ? "error" : ""}`,
              name: "title",
              ...register("title", {
                required: true
              }),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                value: "",
                disabled: true,
                selected: true,
                hidden: true,
                children: "e.g Mrs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                value: "Mr",
                children: "Mr"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                value: "Ms",
                children: "Ms"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                value: "Mrs",
                children: "Mrs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, undefined), errors.title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              className: "errorField",
              children: "This field is required"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "nameFields",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "firstName",
                  children: "First Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                  placeholder: "Enter your First Name",
                  type: "text",
                  id: "firstName",
                  name: "firstName",
                  className: `inputFields ${errors.firstName ? "error" : ""}`,
                  ...register("firstName", {
                    required: true
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, undefined), errors.firstName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "lastName",
                  children: "Last Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                  placeholder: "Enter Your Last Name",
                  type: "text",
                  id: "lastName",
                  name: "lastName",
                  className: `inputFields ${errors.lastName ? "error" : ""}`,
                  ...register("lastName", {
                    required: true
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, undefined), errors.lastName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                htmlFor: "dob",
                className: "labelName",
                children: "Date of Birth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "dobFields",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
                    id: "day",
                    className: `inputFields text-padding ${errors.day ? "error" : ""}`,
                    name: "day",
                    defaultValue: "",
                    ...register("day", {
                      required: true
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                      value: "",
                      disabled: true,
                      hidden: true,
                      children: "Day"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 23
                    }, undefined), Array.from({
                      length: 31
                    }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                      value: i + 1,
                      children: i + 1
                    }, i, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 25
                    }, undefined))]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 21
                  }, undefined), errors.day && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                    className: "errorField",
                    children: "This field is required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
                    id: "month",
                    className: `inputFields text-padding ${errors.month ? "error" : ""}`,
                    name: "month",
                    defaultValue: "",
                    ...register("month", {
                      required: true
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                      value: "",
                      disabled: true,
                      hidden: true,
                      children: "Month"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 23
                    }, undefined), Array.from({
                      length: 12
                    }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                      value: i + 1,
                      children: i + 1
                    }, i + 1, false, {
                      fileName: _jsxFileName,
                      lineNumber: 164,
                      columnNumber: 25
                    }, undefined))]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 21
                  }, undefined), errors.month && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                    className: "errorField",
                    children: "This field is required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
                    id: "year",
                    defaultValue: "",
                    className: `inputFields text-padding ${errors.year ? "error" : ""}`,
                    name: "year",
                    ...register("year", {
                      required: true
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                      value: "",
                      disabled: true,
                      hidden: true,
                      children: "Year"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 23
                    }, undefined), Array.from({
                      length: 100
                    }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                      value: new Date().getFullYear() - i,
                      children: new Date().getFullYear() - i
                    }, new Date().getFullYear() - i, false, {
                      fileName: _jsxFileName,
                      lineNumber: 187,
                      columnNumber: 25
                    }, undefined))]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 21
                  }, undefined), errors.year && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                    className: "errorField",
                    children: "This field is required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
                type: "submit",
                children: "Get Started"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/pages/pageNotFound.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\src\\pages\\pageNotFound.js";



const PageNotFound = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__.NotFound, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: "404"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageNotFound);

/***/ }),

/***/ "./src/root.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/pages/home.js");
/* harmony import */ var _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/pages/pageNotFound.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\src\\root.js";





const root = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__.Switch, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: true,
    path: "/",
    component: _pages_home_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
    component: _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);

/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js!":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chunks: () => (/* binding */ chunks),
/* harmony export */   initialChunkIds: () => (/* binding */ initialChunkIds),
/* harmony export */   runtimeChunkIds: () => (/* binding */ runtimeChunkIds)
/* harmony export */ });
const chunks = new Map([["main", __webpack_require__.p + "client-main.js"], ["runtime", __webpack_require__.p + "client-runtime.js"], ["vendor", __webpack_require__.p + "client-vendor.js"]]);
const runtimeChunkIds = new Set(["runtime"]);
const initialChunkIds = new Set(["main","vendor"]);

/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/chunk-url-map-loader.js!":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = new Map(
    [["main",[["es5","client-main.js"]]],["runtime",[["es5","client-runtime.js"]]],["vendor",[["es5","client-vendor.js"]]]].map(entry => { //[number, Map<string,string>]
      entry[1] = new Map(
        entry[1].map(group => {
          group[1] = __webpack_require__.p + group[1];
          return group;
        })
      );
      return entry;
    })
  );

/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/file-loader.js!./src/pages/home.css?assetUrl=true":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32d8e1c2de3058f6.css";

/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/i18n-manifest-loader.js!":
/***/ (() => {



/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/sync-chunk-ids-loader.js!":
/***/ ((module) => {

module.exports = ["runtime","vendor","main"];

/***/ }),

/***/ "@babel/code-frame":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\@babel\\code-frame\\lib\\index.js");

/***/ }),

/***/ "ansi-to-html":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\ansi-to-html\\lib\\ansi_to_html.js");

/***/ }),

/***/ "chalk":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\chalk\\source\\index.js");

/***/ }),

/***/ "fusion-core":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\fusion-core\\dist-node-cjs\\index.js");

/***/ }),

/***/ "fusion-plugin-react-helmet-async":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\fusion-plugin-react-helmet-async\\dist-node-cjs\\index.js");

/***/ }),

/***/ "fusion-plugin-react-router":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\fusion-plugin-react-router\\dist\\index.js");

/***/ }),

/***/ "fusion-plugin-styletron-react":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\fusion-plugin-styletron-react\\dist-node-cjs\\index.js");

/***/ }),

/***/ "fusion-react":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\fusion-react\\dist-node-cjs\\index.js");

/***/ }),

/***/ "koa-mount":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\koa-mount\\index.js");

/***/ }),

/***/ "koa-static":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\koa-static\\index.js");

/***/ }),

/***/ "react-hook-form":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\react-hook-form\\dist\\index.cjs.js");

/***/ }),

/***/ "react":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\react\\index.js");

/***/ }),

/***/ "react/jsx-dev-runtime":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\react\\jsx-dev-runtime.js");

/***/ }),

/***/ "source-map-support":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\source-map-support\\source-map-support.js");

/***/ }),

/***/ "vary":
/***/ ((module) => {

"use strict";
module.exports = require("C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\node_modules\\vary\\index.js");

/***/ }),

/***/ "assert":
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "fs":
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "path":
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "url":
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("a40ae9facbcd72b6")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/fusion-cli/entries/server-public-path.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/fusion-cli/entries/server-entry.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=server-main.js.map