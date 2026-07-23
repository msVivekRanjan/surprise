// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cVgJb":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
//jshint esversion:8
var _openDateJs = require("./ext/openDate.js");
var _setPageJs = require("./ext/setPage.js");
var _setPageJsDefault = parcelHelpers.interopDefault(_setPageJs);
var _pagesJs = require("./pages.js");
var _animationJs = require("./animation.js");
/******************************************************* SETUP ************************************************************/ // if (process.env.OPEN_DATE) {
//   const status = isBDay();
//   if (status === "IS_EARLY") setPage(soon);
//   if (status === "IS_LATE") setPage(late);
//   if (status === "ON_TIME") animate();
// } else {
//   animate();
// }
(0, _animationJs.animate)();

},{"./ext/openDate.js":"aJFva","./ext/setPage.js":"8pMf8","./pages.js":"cXZuu","./animation.js":"3h5E3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aJFva":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBDay", ()=>isBDay);
const isBDay = function() {
    const startTime = new Date("undefinedT00:00").getTime();
    const endTime = startTime + 86400000;
    const localTime = Date.now();
    if (localTime < startTime) return "IS_EARLY";
    if (localTime > endTime) return "IS_LATE";
    return "ON_TIME";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8pMf8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(page) {
    document.title = page.title;
    document.body.innerHTML = page.body;
    document.body.classList.add("page-404");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cXZuu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "soon", ()=>soon);
parcelHelpers.export(exports, "late", ()=>late);
const soon = {
    title: "Come Back Later...",
    body: `<br />
    <h1>Hi, you come to early</h1>
    <br /><br /><br />
    <p>
        I know this page is very interesting for you, especially for your special day but.<br />
        You need to be patience until the time has come, right ?
    </p>`
};
const late = {
    title: "See you next time...",
    body: `<br />
    <h1>The party was over</h1>
    <br /><br /><br />
    <p>
        Yes, my gift for you is kinda simple, cheap, and weird ? &#128534<br>
        B-but. It's only for you. &#128150
    </p>
`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3h5E3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
//jshint esversion:8
"use strict";
// ======================== DOM REFERENCES ========================
const button = document.querySelector(".btn"), darkroom = document.querySelector(".darkroom"), giftroom = document.querySelector(".giftroom"), hallway = document.querySelector(".hallway"), room = document.querySelector(".empty-room"), flash = document.querySelector(".flash");
const blackText = document.querySelectorAll(".bb-text"), giftText = document.querySelectorAll(".gift-text"), hallText = document.querySelectorAll(".hall-text"), roomText = document.querySelectorAll(".room-text"), CTAtext = document.querySelector(".btn-ref");
const frames = document.querySelectorAll(".frame"), msgWindow = document.querySelector(".scroll"), msg = document.querySelector(".text");
const light = document.querySelector(".switch-aud"), blast = document.querySelector(".blast-aud"), door = document.querySelector(".door-aud"), haunt = document.querySelector(".haunt-aud"), music = document.querySelector(".hbd-aud");
// ======================== PASSWORD GATE ========================
/**
 * Shows the password gate and calls `onSuccess` after the correct
 * password is entered and the gate finishes fading out.
 */ const initPasswordGate = (onSuccess)=>{
    const gate = document.getElementById("passwordGate");
    const input = document.getElementById("passwordInput");
    const btn = document.getElementById("passwordBtn");
    const toggleBtn = document.getElementById("togglePassword");
    const errorMsg = document.getElementById("passwordError");
    const PASSWORD = "140470";
    // Show / hide password toggle
    if (toggleBtn) toggleBtn.addEventListener("click", ()=>{
        const isHidden = input.type === "password";
        input.type = isHidden ? "text" : "password";
        toggleBtn.innerHTML = isHidden ? "\uD83D\uDE48" : "\uD83D\uDC41\uFE0F";
    });
    const unlock = ()=>{
        if (input.value === PASSWORD) {
            gate.classList.add("gate-unlocking");
            setTimeout(()=>{
                gate.style.display = "none";
                if (typeof onSuccess === "function") onSuccess();
            }, 800);
        } else {
            errorMsg.classList.add("visible");
            input.classList.add("shake");
            setTimeout(()=>{
                input.classList.remove("shake");
                input.value = "";
                input.focus();
            }, 600);
        }
    };
    btn.addEventListener("click", unlock);
    input.addEventListener("keydown", (e)=>{
        if (e.key === "Enter") unlock();
        errorMsg.classList.remove("visible");
    });
};
// ======================== PASSWORD INTRO ========================
/**
 * Shows a short cinematic intro ("User identified — It's Mrunmayee! But hey…")
 * before the dark-room experience begins, then calls `onDone`.
 */ const showPasswordIntro = (onDone)=>{
    const intro = document.getElementById("passwordIntro");
    if (!intro) {
        onDone();
        return;
    }
    intro.style.display = "flex";
    const lines = intro.querySelectorAll(".intro-line");
    const revealLines = async ()=>{
        // Staggered reveal
        for(let i = 0; i < lines.length; i++){
            await delay(i === 0 ? 300 : 900);
            lines[i].classList.add("intro-visible");
        }
        await delay(1800);
        // Fade out whole overlay
        intro.style.transition = "opacity 1s ease";
        intro.style.opacity = "0";
        await delay(1000);
        intro.style.display = "none";
        onDone();
    };
    revealLines();
};
// ======================== CORE HELPERS ========================
const readMsg = (text)=>{
    for(let i = 0; i < text.length; i++)setTimeout(()=>{
        text[i].classList.add("read");
        if (i === text.length - 1) {
            button.style.display = "inline-block";
            CTAtext.style.display = "block";
        }
    }, 5000 * i);
};
const transition = (currentScene)=>{
    currentScene.classList.add("fade-in");
    currentScene.style.opacity = "0";
    button.style.display = "none";
    CTAtext.style.display = "none";
};
// ======================== SCROLL ANIMATION ========================
/**
 * Animates the scroll container using scrollTop (so users can also scroll manually).
 * Returns the total duration in seconds so callers can schedule fade-out.
 */ const animateScroll = (container)=>{
    // Speed factor: 0.4 = ~2.5× faster than original
    const rawReadTime = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--readTime")) || 120;
    const SPEED_FACTOR = 0.38;
    const durationMs = rawReadTime * SPEED_FACTOR * 1000; // total ms for auto-scroll
    const durationSeconds = rawReadTime * SPEED_FACTOR;
    // Make the container manually scrollable too
    container.style.overflowY = "auto";
    let startTime = null;
    let cancelled = false;
    const maxScroll = ()=>container.scrollHeight - container.clientHeight;
    const tick = (timestamp)=>{
        if (cancelled) return;
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // Only push scrollTop forward — never override manual scroll-back
        const target = progress * maxScroll();
        if (target > container.scrollTop) container.scrollTop = target;
        if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    // Return controller
    return {
        durationSeconds,
        cancel: ()=>{
            cancelled = true;
        }
    };
};
// ======================== ENDING SEQUENCE ========================
// --- Confetti ---
const launchConfetti = ()=>{
    const canvas = document.getElementById("confettiCanvas");
    if (!canvas) return;
    canvas.style.display = "block";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    const COLORS = [
        "rgba(255, 180, 200, 0.85)",
        "rgba(200, 160, 255, 0.85)",
        "rgba(255, 220, 160, 0.8)",
        "rgba(255, 160, 180, 0.8)",
        "rgba(200, 140, 255, 0.75)",
        "rgba(255, 200, 220, 0.7)", 
    ];
    const pieces = Array.from({
        length: 120
    }, ()=>({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 8 + 4,
            h: Math.random() * 4 + 3,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            rotation: Math.random() * Math.PI * 2,
            speed: Math.random() * 2 + 0.8,
            drift: Math.random() * 1.2 - 0.6,
            spin: (Math.random() - 0.5) * 0.1,
            opacity: Math.random() * 0.4 + 0.5
        }));
    let running = true;
    const tick = ()=>{
        if (!running) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach((p)=>{
            p.y += p.speed;
            p.x += p.drift;
            p.rotation += p.spin;
            ctx.save();
            ctx.globalAlpha = p.opacity;
            ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
            ctx.rotate(p.rotation);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
            if (p.y > canvas.height) {
                p.y = -p.h;
                p.x = Math.random() * canvas.width;
            }
        });
        requestAnimationFrame(tick);
    };
    tick();
    canvas._stopConfetti = ()=>{
        running = false;
        canvas.style.transition = "opacity 2s ease";
        canvas.style.opacity = "0";
        setTimeout(()=>{
            canvas.style.display = "none";
        }, 2100);
    };
};
// --- Rising Balloons ---
const launchBalloons = ()=>{
    const container = document.getElementById("risingBalloons");
    if (!container) return;
    container.style.display = "block";
    const BALLOON_COLORS = [
        "#ffb3c6",
        "#d4a8e8",
        "#ffcba4",
        "#f9a8d4",
        "#c4b5fd"
    ];
    for(let i = 0; i < 10; i++){
        const b = document.createElement("div");
        b.className = "rising-balloon";
        b.style.cssText = `
      left: ${5 + Math.random() * 90}%;
      animation-delay: ${Math.random() * 3}s;
      animation-duration: ${6 + Math.random() * 4}s;
      background: ${BALLOON_COLORS[i % BALLOON_COLORS.length]};
      width: ${38 + Math.random() * 28}px;
      height: ${48 + Math.random() * 36}px;
    `;
        container.appendChild(b);
    }
    container._dismiss = ()=>{
        container.style.transition = "opacity 2s ease";
        container.style.opacity = "0";
        setTimeout(()=>{
            container.style.display = "none";
        }, 2100);
    };
};
// --- Particle Background (warm romantic tones) ---
const startParticles = (canvasId)=>{
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    // Warm rose/amber particles
    const PARTICLE_COLORS = [
        [
            255,
            182,
            193
        ],
        [
            221,
            160,
            221
        ],
        [
            255,
            218,
            185
        ],
        [
            255,
            192,
            203
        ],
        [
            216,
            191,
            216
        ]
    ];
    const stars = Array.from({
        length: 90
    }, ()=>{
        const c = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 0.4,
            speed: Math.random() * 0.25 + 0.05,
            opacity: Math.random() * 0.45 + 0.15,
            pulse: Math.random() * Math.PI * 2,
            color: c
        };
    });
    const tick = ()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach((s)=>{
            s.pulse += 0.012;
            s.opacity = 0.15 + 0.35 * (0.5 + 0.5 * Math.sin(s.pulse));
            s.y -= s.speed;
            if (s.y < 0) {
                s.y = canvas.height;
                s.x = Math.random() * canvas.width;
            }
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${s.color[0]},${s.color[1]},${s.color[2]},${s.opacity.toFixed(2)})`;
            ctx.fill();
        });
        requestAnimationFrame(tick);
    };
    tick();
};
// --- Typewriter helper ---
const typewriterReveal = (el, text, speed = 40)=>{
    return new Promise((resolve)=>{
        el.textContent = "";
        let i = 0;
        const interval = setInterval(()=>{
            el.textContent += text[i];
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                resolve();
            }
        }, speed);
    });
};
const fadeIn = (el, duration = 800)=>{
    return new Promise((resolve)=>{
        el.style.transition = `opacity ${duration}ms ease`;
        el.style.opacity = "1";
        setTimeout(resolve, duration);
    });
};
const fadeOut = (el, duration = 800)=>{
    return new Promise((resolve)=>{
        el.style.transition = `opacity ${duration}ms ease`;
        el.style.opacity = "0";
        setTimeout(resolve, duration);
    });
};
const delay = (ms)=>new Promise((r)=>setTimeout(r, ms));
// --- Calm Ending ---
const showCalmEnding = async ()=>{
    const screen = document.getElementById("calmEnding");
    if (!screen) return;
    screen.style.display = "flex";
    startParticles("particleCanvas");
    // Fade in the screen itself
    await delay(100);
    fadeIn(screen, 1400);
    const container = document.getElementById("endingTextContainer");
    container.style.opacity = "1";
    // Reveal lines one by one
    const headLines = [
        "endLine0",
        "endLine1"
    ];
    for (const id of headLines){
        const el = document.getElementById(id);
        if (!el) continue;
        el.style.opacity = "0";
        el.style.transition = "opacity 1.1s ease, transform 1.1s ease";
        el.style.transform = "translateY(14px)";
        await delay(200);
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        await delay(700);
    }
    await delay(300);
    const paras = [
        "endPara0",
        "endPara1",
        "endPara2",
        "endPara3",
        "endPara4",
        "endPara5",
        "endPara6",
        "endPara7",
        "endPara8",
        "endPara9",
        "endPara10"
    ];
    for (const id1 of paras){
        const el = document.getElementById(id1);
        if (!el) continue;
        el.style.opacity = "0";
        el.style.transition = "opacity 1.5s ease, transform 1.3s ease";
        el.style.transform = "translateY(16px)";
        await delay(150);
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        await delay(1200);
    }
    await delay(500);
    const lastBtn = document.getElementById("lastClickBtn");
    if (lastBtn) {
        lastBtn.style.opacity = "0";
        lastBtn.style.transition = "opacity 1.5s ease";
        lastBtn.style.display = "inline-block";
        await delay(200);
        lastBtn.style.opacity = "1";
        lastBtn.addEventListener("click", ()=>triggerFinalFade(screen), {
            once: true
        });
    }
};
// --- Final Fade to Black ---
const triggerFinalFade = async (calmScreen)=>{
    await fadeOut(calmScreen, 1500);
    calmScreen.style.display = "none";
    const blackScreen = document.getElementById("fadeBlack");
    const loveLetter = document.getElementById("loveLetter");
    blackScreen.style.display = "flex";
    await delay(200);
    await fadeIn(blackScreen, 1300);
    const loveLines = [
        {
            id: "loveLine0",
            text: "Before you go..."
        },
        {
            id: "loveLine1",
            text: "Thank you..."
        },
        {
            id: "loveLine2",
            text: "for giving me one more reason..."
        },
        {
            id: "loveLine3",
            text: "to look forward to every tomorrow."
        },
        {
            id: "loveLine4",
            text: "I love you."
        },
        {
            id: "loveLine5",
            text: "See you outside this website. \u2764\uFE0F"
        }, 
    ];
    loveLetter.style.opacity = "1";
    for (const { id , text  } of loveLines){
        const el = document.getElementById(id);
        if (!el) continue;
        await delay(700);
        await typewriterReveal(el, text, 42);
        await delay(300);
    }
    await delay(3500);
    await fadeOut(loveLetter, 1200);
    loveLetter.style.display = "none";
    const closing = document.getElementById("closingScreen");
    closing.style.display = "flex";
    closing.style.opacity = "0";
    await delay(400);
    await fadeIn(closing, 1400);
    await delay(2800);
    const badge = document.getElementById("achievementBadge");
    if (badge) badge.classList.add("badge-in");
};
// --- Master Trigger (skips popup — Continue is on the card itself) ---
const triggerEndingSequence = ()=>{
    const confettiCanvas = document.getElementById("confettiCanvas");
    const balloonCont = document.getElementById("risingBalloons");
    launchConfetti();
    launchBalloons();
    // After a brief beat, stop celebrations and go into calm ending
    setTimeout(()=>{
        if (confettiCanvas && confettiCanvas._stopConfetti) confettiCanvas._stopConfetti();
        if (balloonCont && balloonCont._dismiss) balloonCont._dismiss();
        showCalmEnding();
    }, 2000);
};
// ======================== CARD CONTINUE BUTTON ========================
/**
 * Shows the Continue button on the birthday card (frame[0]).
 * Clicking it hides the card, fires confetti, and transitions to the ending.
 */ const showCardContinue = ()=>{
    const btn = document.getElementById("cardContinueBtn");
    if (!btn) return;
    btn.style.display = "inline-block";
    btn.style.opacity = "0";
    btn.style.transition = "opacity 1.4s ease";
    requestAnimationFrame(()=>{
        setTimeout(()=>{
            btn.style.opacity = "1";
        }, 100);
    });
    btn.addEventListener("click", ()=>{
        // Fade out the entire content area
        const contentEl = document.querySelector(".content");
        if (contentEl) {
            contentEl.style.transition = "opacity 1.2s ease";
            contentEl.style.opacity = "0";
            setTimeout(()=>{
                contentEl.style.display = "none";
            }, 1300);
        }
        triggerEndingSequence();
    }, {
        once: true
    });
};
// ======================== MAIN ANIMATION ========================
// Factored out so it only starts after password + intro
const startMainFlow = ()=>{
    CTAtext.innerHTML = "Click the Light Bulb.";
    readMsg(blackText);
    button.addEventListener("click", function() {
        // ── Dark Room → Empty Room ──────────────────────────────────
        if (button.classList.contains("switch")) {
            light.play();
            transition(darkroom);
            CTAtext.innerHTML = "Click the Door";
            setTimeout(function() {
                button.classList.add("door-out");
                button.classList.remove("switch");
                darkroom.style.display = "none";
                readMsg(roomText);
            }, 4000);
        // ── Empty Room → Hallway ────────────────────────────────────
        } else if (button.classList.contains("door-out")) {
            door.play();
            transition(room);
            setTimeout(function() {
                haunt.play();
                haunt.loop = true;
                button.classList.add("door-in");
                button.classList.remove("door-out");
                room.style.display = "none";
                readMsg(hallText);
            }, 4000);
        // ── Hallway → Gift Room ─────────────────────────────────────
        } else if (button.classList.contains("door-in")) {
            door.play();
            transition(hallway);
            CTAtext.innerHTML = "Click the Gift";
            setTimeout(function() {
                button.classList.add("gift");
                button.classList.remove("door-in");
                hallway.style.display = "none";
                readMsg(giftText);
            }, 4000);
        // ── Gift → Scroll / Card ────────────────────────────────────
        } else if (button.classList.contains("gift")) {
            haunt.pause();
            blast.play();
            giftroom.style.display = "none";
            transition(flash);
            music.loop = true;
            music.play();
            // Hide button & CTA
            button.style.display = "none";
            CTAtext.style.display = "none";
            // ── Scroll message frame ────────────────────────────────
            frames[1].style.display = "flex";
            setTimeout(()=>{
                frames[1].classList.add("appear");
                frames[1].style.opacity = "1";
                flash.style.display = "none";
                // JS-based smooth scroll (user can also scroll manually)
                const ctrl = animateScroll(msgWindow);
                // Fade out scroll frame when auto-scroll finishes
                setTimeout(()=>{
                    msgWindow.style.transition = "opacity 2s ease";
                    msgWindow.style.opacity = "0";
                }, ctrl.durationSeconds * 1000);
                // Show birthday card frame 3s after scroll fades
                setTimeout(()=>{
                    frames[1].style.display = "none";
                    frames[0].style.display = "flex";
                    frames[0].classList.add("appear");
                    frames[0].style.opacity = "1";
                    // Show Continue button after card settles
                    setTimeout(showCardContinue, 2500);
                }, (ctrl.durationSeconds + 3) * 1000);
            }, 1500);
        }
    });
};
const animate = function() {
    // Gate → Intro → Main flow (sequentially)
    initPasswordGate(()=>{
        showPasswordIntro(()=>{
            startMainFlow();
        });
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cVgJb","ebWYT"], "ebWYT", "parcelRequire6baf")

//# sourceMappingURL=index.739bf03c.js.map
