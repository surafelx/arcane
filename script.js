(() => {
  var e = {
      156: function (e, s, r) {
        var n, t;
        !(function (a, o) {
          "use strict";
          (n = function () {
            var e = function () {},
              s = "undefined",
              r =
                typeof window !== s &&
                typeof window.navigator !== s &&
                /Trident\/|MSIE /.test(window.navigator.userAgent),
              n = ["trace", "debug", "info", "warn", "error"],
              t = {},
              a = null;
            function o(e, s) {
              var r = e[s];
              if ("function" == typeof r.bind) return r.bind(e);
              try {
                return Function.prototype.bind.call(r, e);
              } catch (s) {
                return function () {
                  return Function.prototype.apply.apply(r, [e, arguments]);
                };
              }
            }
            function i() {
              console.log &&
                (console.log.apply
                  ? console.log.apply(console, arguments)
                  : Function.prototype.apply.apply(console.log, [
                      console,
                      arguments,
                    ])),
                console.trace && console.trace();
            }
            function g(n) {
              return (
                "debug" === n && (n = "log"),
                typeof console !== s &&
                  ("trace" === n && r
                    ? i
                    : void 0 !== console[n]
                    ? o(console, n)
                    : void 0 !== console.log
                    ? o(console, "log")
                    : e)
              );
            }
            function l() {
              for (var r = this.getLevel(), t = 0; t < n.length; t++) {
                var a = n[t];
                this[a] = t < r ? e : this.methodFactory(a, r, this.name);
              }
              if (
                ((this.log = this.debug),
                typeof console === s && r < this.levels.SILENT)
              )
                return "No console available for logging";
            }
            function m(e) {
              return function () {
                typeof console !== s &&
                  (l.call(this), this[e].apply(this, arguments));
              };
            }
            function c(e, s, r) {
              return g(e) || m.apply(this, arguments);
            }
            function A(e, r) {
              var o,
                i,
                g,
                m = this,
                A = "loglevel";
              function d(e) {
                var r = (n[e] || "silent").toUpperCase();
                if (typeof window !== s && A) {
                  try {
                    return void (window.localStorage[A] = r);
                  } catch (e) {}
                  try {
                    window.document.cookie =
                      encodeURIComponent(A) + "=" + r + ";";
                  } catch (e) {}
                }
              }
              function u() {
                var e;
                if (typeof window !== s && A) {
                  try {
                    e = window.localStorage[A];
                  } catch (e) {}
                  if (typeof e === s)
                    try {
                      var r = window.document.cookie,
                        n = encodeURIComponent(A),
                        t = r.indexOf(n + "=");
                      -1 !== t &&
                        (e = /^([^;]+)/.exec(r.slice(t + n.length + 1))[1]);
                    } catch (e) {}
                  return void 0 === m.levels[e] && (e = void 0), e;
                }
              }
              function f() {
                if (typeof window !== s && A) {
                  try {
                    window.localStorage.removeItem(A);
                  } catch (e) {}
                  try {
                    window.document.cookie =
                      encodeURIComponent(A) +
                      "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                  } catch (e) {}
                }
              }
              function p(e) {
                var s = e;
                if (
                  ("string" == typeof s &&
                    void 0 !== m.levels[s.toUpperCase()] &&
                    (s = m.levels[s.toUpperCase()]),
                  "number" == typeof s && s >= 0 && s <= m.levels.SILENT)
                )
                  return s;
                throw new TypeError(
                  "log.setLevel() called with invalid level: " + e
                );
              }
              "string" == typeof e
                ? (A += ":" + e)
                : "symbol" == typeof e && (A = void 0),
                (m.name = e),
                (m.levels = {
                  TRACE: 0,
                  DEBUG: 1,
                  INFO: 2,
                  WARN: 3,
                  ERROR: 4,
                  SILENT: 5,
                }),
                (m.methodFactory = r || c),
                (m.getLevel = function () {
                  return null != g ? g : null != i ? i : o;
                }),
                (m.setLevel = function (e, s) {
                  return (g = p(e)), !1 !== s && d(g), l.call(m);
                }),
                (m.setDefaultLevel = function (e) {
                  (i = p(e)), u() || m.setLevel(e, !1);
                }),
                (m.resetLevel = function () {
                  (g = null), f(), l.call(m);
                }),
                (m.enableAll = function (e) {
                  m.setLevel(m.levels.TRACE, e);
                }),
                (m.disableAll = function (e) {
                  m.setLevel(m.levels.SILENT, e);
                }),
                (m.rebuild = function () {
                  if ((a !== m && (o = p(a.getLevel())), l.call(m), a === m))
                    for (var e in t) t[e].rebuild();
                }),
                (o = p(a ? a.getLevel() : "WARN"));
              var h = u();
              null != h && (g = p(h)), l.call(m);
            }
            (a = new A()).getLogger = function (e) {
              if (("symbol" != typeof e && "string" != typeof e) || "" === e)
                throw new TypeError(
                  "You must supply a name when creating a logger."
                );
              var s = t[e];
              return s || (s = t[e] = new A(e, a.methodFactory)), s;
            };
            var d = typeof window !== s ? window.log : void 0;
            return (
              (a.noConflict = function () {
                return (
                  typeof window !== s && window.log === a && (window.log = d), a
                );
              }),
              (a.getLoggers = function () {
                return t;
              }),
              (a.default = a),
              a
            );
          }),
            void 0 === (t = "function" == typeof n ? n.call(s, r, s, e) : n) ||
              (e.exports = t);
        })();
      },
    },
    s = {};
  function r(n) {
    var t = s[n];
    if (void 0 !== t) return t.exports;
    var a = (s[n] = {
      exports: {},
    });
    return e[n].call(a.exports, a, a.exports, r), a.exports;
  }
  (r.n = (e) => {
    var s = e && e.__esModule ? () => e.default : () => e;
    return (
      r.d(s, {
        a: s,
      }),
      s
    );
  }),
    (r.d = (e, s) => {
      for (var n in s)
        r.o(s, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: s[n],
          });
    }),
    (r.o = (e, s) => Object.prototype.hasOwnProperty.call(e, s)),
    (() => {
      "use strict";
      const e = {
        randomUUID:
          "undefined" != typeof crypto &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto),
      };
      let s;
      const n = new Uint8Array(16);
      function t() {
        if (
          !s &&
          ((s =
            "undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
          !s)
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return s(n);
      }
      const a = [];
      for (let e = 0; e < 256; ++e) a.push((e + 256).toString(16).slice(1));
      function o(e, s = 0) {
        return (
          a[e[s + 0]] +
          a[e[s + 1]] +
          a[e[s + 2]] +
          a[e[s + 3]] +
          "-" +
          a[e[s + 4]] +
          a[e[s + 5]] +
          "-" +
          a[e[s + 6]] +
          a[e[s + 7]] +
          "-" +
          a[e[s + 8]] +
          a[e[s + 9]] +
          "-" +
          a[e[s + 10]] +
          a[e[s + 11]] +
          a[e[s + 12]] +
          a[e[s + 13]] +
          a[e[s + 14]] +
          a[e[s + 15]]
        );
      }
      const i = function (s, r, n) {
        if (e.randomUUID && !r && !s) return e.randomUUID();
        const a = (s = s || {}).random || (s.rng || t)();
        if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), r)) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) r[n + e] = a[e];
          return r;
        }
        return o(a);
      };
      var g = r(156),
        l = r.n(g);
      l().setLevel("error");
      const m = l();
      class c {
        targetWindow;
        NAMESPACE =
          "cldmemdnllncchfahbcnjijheaolemfk__webcrx_window_communication";
        globalListener;
        listeners = {};
        responseListeners = new Map();
        constructor(e, s) {
          (this.targetWindow = s),
            window.addEventListener("message", (s) => {
              if (s.data.namespace !== this.NAMESPACE) return;
              const { type: r } = s.data;
              "response" === r
                ? this.handleResponse(s.data)
                : "message" === r &&
                  s.data.target === e &&
                  this.handleMessage(s.data);
            });
        }
        onAll(e) {
          this.globalListener = e;
        }
        on(e, s) {
          this.listeners[e] = s;
        }
        send(e, s, r) {
          return new Promise((n) => {
            const t = i();
            this.responseListeners.set(t, n);
            const a = {
              type: "message",
              target: e,
              name: s,
              uuid: t,
              data: r,
            };
            this.postMessage(a);
          });
        }
        postMessage(e) {
          this.targetWindow.postMessage(
            {
              namespace: this.NAMESPACE,
              ...e,
            },
            "*"
          );
        }
        async handleMessage(e) {
          const { name: s } = e,
            r = this.listeners[s];
          if ("function" == typeof this.globalListener) {
            const s = await Promise.resolve(
              this.globalListener(e.name, e.data, r)
            );
            return void this.postMessage({
              type: "response",
              response: s,
              responseFor: e.uuid,
            });
          }
          if ("function" != typeof r)
            return void m.warn(`Listener for message "${s}" not found.`, {
              message: e,
              ...this.listeners,
            });
          const n = await Promise.resolve(r(e.data));
          this.postMessage({
            type: "response",
            response: n,
            responseFor: e.uuid,
          });
        }
        handleResponse(e) {
          const { response: s, responseFor: r } = e,
            n = this.responseListeners.get(r);
          "function" == typeof n && (n(s), this.responseListeners.delete(r));
        }
      }
      class A {
        message;
        messageTarget;
        registerEvents;
        listeners = [];
        constructor(e, s, r) {
          (this.message = e),
            (this.messageTarget = s),
            (this.registerEvents = r),
            e.on("chrome: runtime on message", (r) => {
              const { responseId: n } = r,
                t = (...r) => {
                  const t = {
                    responseId: n,
                    args: r,
                  };
                  e.send(s, "chrome: runtime message response", t);
                };
              this.listeners.forEach((e) => e(r.message, r.sender, t));
            });
        }
        findCallbackIndex(e) {
          let s = null;
          return (
            this.listeners.forEach((r, n) => {
              r === e && (s = n);
            }),
            s
          );
        }
        assign(e) {
          switch (e) {
            case "addListener":
              return (e) => {
                this.listeners.push(e),
                  this.registerEvents &&
                    this.message.send(
                      this.messageTarget,
                      "chrome: add runtime message listener"
                    );
              };
            case "removeListener":
              return (e) => {
                const s = this.findCallbackIndex(e);
                s && this.listeners.splice(s, 1);
              };
            case "hasListener":
              return (e) => null !== this.findCallbackIndex(e);
            case "hasListeners":
              return () => this.listeners.length > 0;
            default:
              return () => {};
          }
        }
      }
      class d {
        message;
        messageTarget;
        registerEvents;
        listeners = {};
        runtimeOnMessage;
        constructor(e, s, r) {
          (this.message = e),
            (this.messageTarget = s),
            (this.registerEvents = r),
            (this.runtimeOnMessage = new A(e, s, r)),
            e.on("chrome: listener result", ({ event: e, args: s }) => {
              this.listeners[e]?.forEach((e) => e(...s));
            });
        }
        findCallbackIndex(e, s) {
          let r = null;
          return (
            this.listeners[e]?.forEach((e, n) => {
              e === s && (r = n);
            }),
            r
          );
        }
        assign(e, s) {
          if ("runtime.onMessage" === e || "extension.onMessage" === e)
            return this.runtimeOnMessage.assign(s);
          switch (s) {
            case "addListener":
              return (
                void 0 === this.listeners[e] && (this.listeners[e] = []),
                (s) => {
                  this.listeners[e]?.push(s),
                    this.registerEvents &&
                      this.message.send(
                        this.messageTarget,
                        "chrome: add listener",
                        {
                          event: e,
                        }
                      );
                }
              );
            case "removeListener":
              return (s) => {
                if (void 0 === this.listeners[e]) return;
                const r = this.findCallbackIndex(e, s);
                r && this.listeners[e]?.splice(r, 1);
              };
            case "hasListener":
              return (s) => null !== this.findCallbackIndex(e, s);
            case "hasListeners":
              return () =>
                void 0 !== this.listeners[e] &&
                (this.listeners[e]?.length ?? 0) > 0;
            default:
              return () => {};
          }
        }
      }
      class u {
        message;
        messageTarget;
        constructor(e, s) {
          (this.message = e), (this.messageTarget = s);
        }
        assign(e) {
          return (...s) => {
            let r = null;
            "function" == typeof s[s.length - 1] && (r = s.pop());
            const n = {
              path: e,
              args: s,
              hasCallback: null !== r,
            };
            r
              ? this.message
                  .send(this.messageTarget, "chrome: call method", n)
                  .then(r)
              : this.message.send(this.messageTarget, "chrome: call method", n);
          };
        }
      }
      const f = [
        "addListener",
        "removeListener",
        "hasListener",
        "hasListeners",
        "dispatch",
        "dispatchToListener",
      ];
      let p, h;
      function b(e, s, r = "") {
        let n, t;
        const a = Object.keys(e);
        for (let o = 0; o < a.length; o += 1) {
          const i = a[o];
          if (
            ((t = r + (r ? "." : "") + i),
            (n = e[i]),
            null === n || "object" != typeof n || Array.isArray(n))
          ) {
            if (void 0 === s[i])
              if ("[Function]" === n)
                if (f.includes(i)) {
                  const e = t.replace(`.${i}`, "");
                  s[i] = p.assign(e, i);
                } else s[i] = h.assign(t);
              else s[i] = n;
          } else void 0 === s[i] && (s[i] = {}), b(n, s[i], t);
        }
      }
      const x = function (e, s, r, n, t, a, o, i, g) {
        (p = new d(e, s, r)), (h = new u(e, s));
        const l =
          {
            ...window.chrome,
          } || {};
        (l.tabs = {}),
          (l.windows = {}),
          (l.i18n = {
            getUILanguage: () => a,
            getMessage(e, s) {
              let r = i[e]?.message ?? "";
              if (s) {
                let e = 0;
                r = r.replace(/\$(\w+)\$/g, (r) => s[e++] || r);
              }
              return r;
            },
          });
        const m =
          {
            ...window.chrome.runtime,
          } || {};
        return (
          (m.onMessage = {}),
          (m.sendMessage = void 0),
          (m.getManifest = () => o),
          (m.getURL = (e) => g?.[e] ?? `${t}${e}`),
          (l.runtime = m),
          b(n, l),
          l
        );
      };
      (async () => {
        const e = "webcrx";
        if (document.documentElement.hasAttribute(e)) return;
        document.documentElement.toggleAttribute(e);
        const s = new c("sandbox", window),
          r = await s.send(
            "content/bridge",
            "main: get sandbox content script",
            {
              url: window.location.href,
            }
          );
        if (r.css) {
          const e = document.createElement("style");
          (e.textContent = r.css), document.head.appendChild(e);
        }
        if (
          ((window.webcrx_chrome = x(
            s,
            "content/bridge",
            !0,
            r.apiSchema,
            r.appUrl,
            r.uiLanguage,
            r.manifest,
            r.locale,
            r.webAccessibleResources
          )),
          r.js)
        ) {
          const e = document.createElement("script"),
            s = URL.createObjectURL(
              new Blob(
                [
                  `\n        (() => {\n            const chrome = window.webcrx_chrome;\n\n            if (!globalThis.chrome) globalThis.chrome = {};\n            if (!globalThis.chrome.runtime) globalThis.chrome.runtime = {};\n            if (!globalThis.chrome.runtime.id) globalThis.chrome.runtime.id = 'webcrx';\n            (function(a,b){if("function"==typeof define&&define.amd)define("webextension-polyfill",["module"],b);else if("undefined"!=typeof exports)b(module);else{var c={exports:{}};b(c),a.browser=c.exports}})("undefined"==typeof globalThis?"undefined"==typeof self?this:self:globalThis,function(a){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");a.exports=(a=>{const b={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(b).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class c extends WeakMap{constructor(a,b=void 0){super(b),this.createItem=a}get(a){return this.has(a)||this.set(a,this.createItem(a)),super.get(a)}}const d=a=>a&&"object"==typeof a&&"function"==typeof a.then,e=(b,c)=>(...d)=>{a.runtime.lastError?b.reject(a.runtime.lastError):c.singleCallbackArg||1>=d.length&&!1!==c.singleCallbackArg?b.resolve(d[0]):b.resolve(d)},f=a=>1==a?"argument":"arguments",g=(a,b)=>function(c,...d){if(d.length<b.minArgs)throw new Error(\`Expected at least \${b.minArgs} \${f(b.minArgs)} for \${a}(), got \${d.length}\`);if(d.length>b.maxArgs)throw new Error(\`Expected at most \${b.maxArgs} \${f(b.maxArgs)} for \${a}(), got \${d.length}\`);return new Promise((f,g)=>{if(b.fallbackToNoCallback)try{c[a](...d,e({resolve:f,reject:g},b))}catch(e){console.warn(\`\${a} API method doesn't seem to support the callback parameter, \`+"falling back to call it without a callback: ",e),c[a](...d),b.fallbackToNoCallback=!1,b.noCallback=!0,f()}else b.noCallback?(c[a](...d),f()):c[a](...d,e({resolve:f,reject:g},b))})},h=(a,b,c)=>new Proxy(b,{apply(b,d,e){return c.call(d,a,...e)}});let i=Function.call.bind(Object.prototype.hasOwnProperty);const j=(a,b={},c={})=>{let d=Object.create(null),e={has(b,c){return c in a||c in d},get(e,f,k){if(f in d)return d[f];if(!(f in a))return;let l=a[f];if("function"==typeof l){if("function"==typeof b[f])l=h(a,a[f],b[f]);else if(i(c,f)){let b=g(f,c[f]);l=h(a,a[f],b)}else l=l.bind(a);}else if("object"==typeof l&&null!==l&&(i(b,f)||i(c,f)))l=j(l,b[f],c[f]);else if(i(c,"*"))l=j(l,b[f],c["*"]);else return Object.defineProperty(d,f,{configurable:!0,enumerable:!0,get(){return a[f]},set(b){a[f]=b}}),l;return d[f]=l,l},set(b,c,e,f){return c in d?d[c]=e:a[c]=e,!0},defineProperty(a,b,c){return Reflect.defineProperty(d,b,c)},deleteProperty(a,b){return Reflect.deleteProperty(d,b)}},f=Object.create(a);return new Proxy(f,e)},k=a=>({addListener(b,c,...d){b.addListener(a.get(c),...d)},hasListener(b,c){return b.hasListener(a.get(c))},removeListener(b,c){b.removeListener(a.get(c))}});let l=!1;const m=new c(a=>"function"==typeof a?function(b,c,e){let f,g,h=!1,i=new Promise(a=>{f=function(b){l||(console.warn("Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",new Error().stack),l=!0),h=!0,a(b)}});try{g=a(b,c,f)}catch(a){g=Promise.reject(a)}const j=!0!==g&&d(g);if(!0!==g&&!j&&!h)return!1;const k=a=>{a.then(a=>{e(a)},a=>{let b;b=a&&(a instanceof Error||"string"==typeof a.message)?a.message:"An unexpected error occurred",e({__mozWebExtensionPolyfillReject__:!0,message:b})}).catch(a=>{console.error("Failed to send onMessage rejected reply",a)})};return j?k(g):k(i),!0}:a),n=({reject:b,resolve:c},d)=>{a.runtime.lastError?a.runtime.lastError.message==="The message port closed before a response was received."?c():b(a.runtime.lastError):d&&d.__mozWebExtensionPolyfillReject__?b(new Error(d.message)):c(d)},o=(a,b,c,...d)=>{if(d.length<b.minArgs)throw new Error(\`Expected at least \${b.minArgs} \${f(b.minArgs)} for \${a}(), got \${d.length}\`);if(d.length>b.maxArgs)throw new Error(\`Expected at most \${b.maxArgs} \${f(b.maxArgs)} for \${a}(), got \${d.length}\`);return new Promise((a,b)=>{const e=n.bind(null,{resolve:a,reject:b});d.push(e),c.sendMessage(...d)})},p={runtime:{onMessage:k(m),onMessageExternal:k(m),sendMessage:o.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:o.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},q={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return b.privacy={network:{"*":q},services:{"*":q},websites:{"*":q}},j(a,p,b)})(chrome)}else a.exports=browser});\n            ${r.js}\n        })();\n    `,
                ],
                {
                  type: "application/javascript",
                }
              )
            );
          (e.src = s),
            document.head.appendChild(e),
            (e.onload = () => URL.revokeObjectURL(s)),
            (e.onerror = () => URL.revokeObjectURL(s));
        }
      })();
    })();
})();
