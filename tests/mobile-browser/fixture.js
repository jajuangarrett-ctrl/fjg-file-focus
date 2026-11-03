(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = /* @__PURE__ */ Symbol.for("react.element");
      var n = /* @__PURE__ */ Symbol.for("react.portal");
      var p2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var q = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u2 = /* @__PURE__ */ Symbol.for("react.context");
      var v2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var x = /* @__PURE__ */ Symbol.for("react.memo");
      var y2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z && a[z] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D = {};
      function E(a, b2, e) {
        this.props = a;
        this.context = b2;
        this.refs = D;
        this.updater = e || B;
      }
      E.prototype.isReactComponent = {};
      E.prototype.setState = function(a, b2) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b2, "setState");
      };
      E.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E.prototype;
      function G(a, b2, e) {
        this.props = a;
        this.context = b2;
        this.refs = D;
        this.updater = e || B;
      }
      var H = G.prototype = new F();
      H.constructor = G;
      C(H, E.prototype);
      H.isPureReactComponent = true;
      var I = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a, b2, e) {
        var d, c2 = {}, k = null, h2 = null;
        if (null != b2) for (d in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k = "" + b2.key), b2) J.call(b2, d) && !L.hasOwnProperty(d) && (c2[d] = b2[d]);
        var g2 = arguments.length - 2;
        if (1 === g2) c2.children = e;
        else if (1 < g2) {
          for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
          c2.children = f2;
        }
        if (a && a.defaultProps) for (d in g2 = a.defaultProps, g2) void 0 === c2[d] && (c2[d] = g2[d]);
        return { $$typeof: l, type: a, key: k, ref: h2, props: c2, _owner: K.current };
      }
      function N(a, b2) {
        return { $$typeof: l, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l;
      }
      function escape(a) {
        var b2 = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b2[a2];
        });
      }
      var P = /\/+/g;
      function Q(a, b2) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
      }
      function R(a, b2, e, d, c2) {
        var k = typeof a;
        if ("undefined" === k || "boolean" === k) a = null;
        var h2 = false;
        if (null === a) h2 = true;
        else switch (k) {
          case "string":
          case "number":
            h2 = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h2 = true;
            }
        }
        if (h2) return h2 = a, c2 = c2(h2), a = "" === d ? "." + Q(h2, 0) : d, I(c2) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c2, b2, e, "", function(a2) {
          return a2;
        })) : null != c2 && (O(c2) && (c2 = N(c2, e + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P, "$&/") + "/") + a)), b2.push(c2)), 1;
        h2 = 0;
        d = "" === d ? "." : d + ":";
        if (I(a)) for (var g2 = 0; g2 < a.length; g2++) {
          k = a[g2];
          var f2 = d + Q(k, g2);
          h2 += R(k, b2, e, f2, c2);
        }
        else if (f2 = A(a), "function" === typeof f2) for (a = f2.call(a), g2 = 0; !(k = a.next()).done; ) k = k.value, f2 = d + Q(k, g2++), h2 += R(k, b2, e, f2, c2);
        else if ("object" === k) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
        return h2;
      }
      function S(a, b2, e) {
        if (null == a) return a;
        var d = [], c2 = 0;
        R(a, d, "", "", function(a2) {
          return b2.call(e, a2, c2++);
        });
        return d;
      }
      function T(a) {
        if (-1 === a._status) {
          var b2 = a._result;
          b2 = b2();
          b2.then(function(b3) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
          }, function(b3) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
          });
          -1 === a._status && (a._status = 0, a._result = b2);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      exports.Children = { map: S, forEach: function(a, b2, e) {
        S(a, function() {
          b2.apply(this, arguments);
        }, e);
      }, count: function(a) {
        var b2 = 0;
        S(a, function() {
          b2++;
        });
        return b2;
      }, toArray: function(a) {
        return S(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E;
      exports.Fragment = p2;
      exports.Profiler = r;
      exports.PureComponent = G;
      exports.StrictMode = q;
      exports.Suspense = w2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.cloneElement = function(a, b2, e) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c2 = a.key, k = a.ref, h2 = a._owner;
        if (null != b2) {
          void 0 !== b2.ref && (k = b2.ref, h2 = K.current);
          void 0 !== b2.key && (c2 = "" + b2.key);
          if (a.type && a.type.defaultProps) var g2 = a.type.defaultProps;
          for (f2 in b2) J.call(b2, f2) && !L.hasOwnProperty(f2) && (d[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
        }
        var f2 = arguments.length - 2;
        if (1 === f2) d.children = e;
        else if (1 < f2) {
          g2 = Array(f2);
          for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
          d.children = g2;
        }
        return { $$typeof: l, type: a.type, key: c2, ref: k, props: d, _owner: h2 };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u2, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M;
      exports.createFactory = function(a) {
        var b2 = M.bind(null, a);
        b2.type = a;
        return b2;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v2, render: a };
      };
      exports.isValidElement = O;
      exports.lazy = function(a) {
        return { $$typeof: y2, _payload: { _status: -1, _result: a }, _init: T };
      };
      exports.memo = function(a, b2) {
        return { $$typeof: x, type: a, compare: void 0 === b2 ? null : b2 };
      };
      exports.startTransition = function(a) {
        var b2 = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b2;
        }
      };
      exports.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.");
      };
      exports.useCallback = function(a, b2) {
        return U.current.useCallback(a, b2);
      };
      exports.useContext = function(a) {
        return U.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b2) {
        return U.current.useEffect(a, b2);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a, b2, e) {
        return U.current.useImperativeHandle(a, b2, e);
      };
      exports.useInsertionEffect = function(a, b2) {
        return U.current.useInsertionEffect(a, b2);
      };
      exports.useLayoutEffect = function(a, b2) {
        return U.current.useLayoutEffect(a, b2);
      };
      exports.useMemo = function(a, b2) {
        return U.current.useMemo(a, b2);
      };
      exports.useReducer = function(a, b2, e) {
        return U.current.useReducer(a, b2, e);
      };
      exports.useRef = function(a) {
        return U.current.useRef(a);
      };
      exports.useState = function(a) {
        return U.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b2, e) {
        return U.current.useSyncExternalStore(a, b2, e);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.2.0";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f2(a, b2) {
        var c2 = a.length;
        a.push(b2);
        a: for (; 0 < c2; ) {
          var d = c2 - 1 >>> 1, e = a[d];
          if (0 < g2(e, b2)) a[d] = b2, a[c2] = e, c2 = d;
          else break a;
        }
      }
      function h2(a) {
        return 0 === a.length ? null : a[0];
      }
      function k(a) {
        if (0 === a.length) return null;
        var b2 = a[0], c2 = a.pop();
        if (c2 !== b2) {
          a[0] = c2;
          a: for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
            var m2 = 2 * (d + 1) - 1, C = a[m2], n = m2 + 1, x = a[n];
            if (0 > g2(C, c2)) n < e && 0 > g2(x, C) ? (a[d] = x, a[n] = c2, d = n) : (a[d] = C, a[m2] = c2, d = m2);
            else if (n < e && 0 > g2(x, c2)) a[d] = x, a[n] = c2, d = n;
            else break a;
          }
        }
        return b2;
      }
      function g2(a, b2) {
        var c2 = a.sortIndex - b2.sortIndex;
        return 0 !== c2 ? c2 : a.id - b2.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        p2 = Date, q = p2.now();
        exports.unstable_now = function() {
          return p2.now() - q;
        };
      }
      var l;
      var p2;
      var q;
      var r = [];
      var t = [];
      var u2 = 1;
      var v2 = null;
      var y2 = 3;
      var z = false;
      var A = false;
      var B = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E = "function" === typeof clearTimeout ? clearTimeout : null;
      var F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a) {
        for (var b2 = h2(t); null !== b2; ) {
          if (null === b2.callback) k(t);
          else if (b2.startTime <= a) k(t), b2.sortIndex = b2.expirationTime, f2(r, b2);
          else break;
          b2 = h2(t);
        }
      }
      function H(a) {
        B = false;
        G(a);
        if (!A) if (null !== h2(r)) A = true, I(J);
        else {
          var b2 = h2(t);
          null !== b2 && K(H, b2.startTime - a);
        }
      }
      function J(a, b2) {
        A = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c2 = y2;
        try {
          G(b2);
          for (v2 = h2(r); null !== v2 && (!(v2.expirationTime > b2) || a && !M()); ) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e = d(v2.expirationTime <= b2);
              b2 = exports.unstable_now();
              "function" === typeof e ? v2.callback = e : v2 === h2(r) && k(r);
              G(b2);
            } else k(r);
            v2 = h2(r);
          }
          if (null !== v2) var w2 = true;
          else {
            var m2 = h2(t);
            null !== m2 && K(H, m2.startTime - b2);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c2, z = false;
        }
      }
      var N = false;
      var O = null;
      var L = -1;
      var P = 5;
      var Q = -1;
      function M() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (null !== O) {
          var a = exports.unstable_now();
          Q = a;
          var b2 = true;
          try {
            b2 = O(true, a);
          } finally {
            b2 ? S() : (N = false, O = null);
          }
        } else N = false;
      }
      var S;
      if ("function" === typeof F) S = function() {
        F(R);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S = function() {
          U.postMessage(null);
        };
      } else S = function() {
        D(R, 0);
      };
      var T;
      var U;
      function I(a) {
        O = a;
        N || (N = true, S());
      }
      function K(a, b2) {
        L = D(function() {
          a(exports.unstable_now());
        }, b2);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A || z || (A = true, I(J));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h2(r);
      };
      exports.unstable_next = function(a) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b2 = 3;
            break;
          default:
            b2 = y2;
        }
        var c2 = y2;
        y2 = b2;
        try {
          return a();
        } finally {
          y2 = c2;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b2) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c2 = y2;
        y2 = a;
        try {
          return b2();
        } finally {
          y2 = c2;
        }
      };
      exports.unstable_scheduleCallback = function(a, b2, c2) {
        var d = exports.unstable_now();
        "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d + c2 : d) : c2 = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c2 + e;
        a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e, sortIndex: -1 };
        c2 > d ? (a.sortIndex = c2, f2(t, a), null === h2(r) && a === h2(t) && (B ? (E(L), L = -1) : B = true, K(H, c2 - d))) : (a.sortIndex = e, f2(r, a), A || z || (A = true, I(J)));
        return a;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a) {
        var b2 = y2;
        return function() {
          var c2 = y2;
          y2 = b2;
          try {
            return a.apply(this, arguments);
          } finally {
            y2 = c2;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca = require_scheduler();
      function p2(a) {
        for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
        return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a, b2) {
        ha(a, b2);
        ha(a + "Capture", b2);
      }
      function ha(a, b2) {
        ea[a] = b2;
        for (a = 0; a < b2.length; a++) da.add(b2[a]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a) {
        if (ja.call(ma, a)) return true;
        if (ja.call(la, a)) return false;
        if (ka.test(a)) return ma[a] = true;
        la[a] = true;
        return false;
      }
      function pa(a, b2, c2, d) {
        if (null !== c2 && 0 === c2.type) return false;
        switch (typeof b2) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c2) return !c2.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa(a, b2, c2, d) {
        if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d)) return true;
        if (d) return false;
        if (null !== c2) switch (c2.type) {
          case 3:
            return !b2;
          case 4:
            return false === b2;
          case 5:
            return isNaN(b2);
          case 6:
            return isNaN(b2) || 1 > b2;
        }
        return false;
      }
      function v2(a, b2, c2, d, e, f2, g2) {
        this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c2;
        this.propertyName = a;
        this.type = b2;
        this.sanitizeURL = f2;
        this.removeEmptyString = g2;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z[a] = new v2(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b2 = a[0];
        z[b2] = new v2(b2, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z[a] = new v2(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z[a] = new v2(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z[a] = new v2(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z[a] = new v2(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z[a] = new v2(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z[a] = new v2(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z[a] = new v2(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b2 = a.replace(
          ra,
          sa
        );
        z[b2] = new v2(b2, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b2 = a.replace(ra, sa);
        z[b2] = new v2(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b2 = a.replace(ra, sa);
        z[b2] = new v2(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z[a] = new v2(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z[a] = new v2(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta(a, b2, c2, d) {
        var e = z.hasOwnProperty(b2) ? z[b2] : null;
        if (null !== e ? 0 !== e.type : d || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e, d) && (c2 = null), d || null === e ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e.mustUseProperty ? a[e.propertyName] = null === c2 ? 3 === e.type ? false : "" : c2 : (b2 = e.attributeName, d = e.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e = e.type, c2 = 3 === e || 4 === e && true === c2 ? "" : "" + c2, d ? a.setAttributeNS(d, b2, c2) : a.setAttribute(b2, c2)));
      }
      var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = /* @__PURE__ */ Symbol.for("react.element");
      var wa = /* @__PURE__ */ Symbol.for("react.portal");
      var ya = /* @__PURE__ */ Symbol.for("react.fragment");
      var za = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var Aa = /* @__PURE__ */ Symbol.for("react.profiler");
      var Ba = /* @__PURE__ */ Symbol.for("react.provider");
      var Ca = /* @__PURE__ */ Symbol.for("react.context");
      var Da = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var Ea = /* @__PURE__ */ Symbol.for("react.suspense");
      var Fa = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var Ga = /* @__PURE__ */ Symbol.for("react.memo");
      var Ha = /* @__PURE__ */ Symbol.for("react.lazy");
      var Ia = /* @__PURE__ */ Symbol.for("react.offscreen");
      var Ja = Symbol.iterator;
      function Ka(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja && a[Ja] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A = Object.assign;
      var La;
      function Ma(a) {
        if (void 0 === La) try {
          throw Error();
        } catch (c2) {
          var b2 = c2.stack.trim().match(/\n( *(at )?)/);
          La = b2 && b2[1] || "";
        }
        return "\n" + La + a;
      }
      var Na = false;
      function Oa(a, b2) {
        if (!a || Na) return "";
        Na = true;
        var c2 = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b2) if (b2 = function() {
            throw Error();
          }, Object.defineProperty(b2.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b2, []);
            } catch (l) {
              var d = l;
            }
            Reflect.construct(a, [], b2);
          } else {
            try {
              b2.call();
            } catch (l) {
              d = l;
            }
            a.call(b2.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l) {
              d = l;
            }
            a();
          }
        } catch (l) {
          if (l && d && "string" === typeof l.stack) {
            for (var e = l.stack.split("\n"), f2 = d.stack.split("\n"), g2 = e.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e[g2] !== f2[h2]; ) h2--;
            for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e[g2] !== f2[h2]) {
              if (1 !== g2 || 1 !== h2) {
                do
                  if (g2--, h2--, 0 > h2 || e[g2] !== f2[h2]) {
                    var k = "\n" + e[g2].replace(" at new ", " at ");
                    a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                    return k;
                  }
                while (1 <= g2 && 0 <= h2);
              }
              break;
            }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c2;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
      }
      function Pa(a) {
        switch (a.tag) {
          case 5:
            return Ma(a.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa(a.type, false), a;
          case 11:
            return a = Oa(a.type.render, false), a;
          case 1:
            return a = Oa(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca:
            return (a.displayName || "Context") + ".Consumer";
          case Ba:
            return (a._context.displayName || "Context") + ".Provider";
          case Da:
            var b2 = a.render;
            a = a.displayName;
            a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga:
            return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
          case Ha:
            b2 = a._payload;
            a = a._init;
            try {
              return Qa(a(b2));
            } catch (c2) {
            }
        }
        return null;
      }
      function Ra(a) {
        var b2 = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b2.displayName || "Context") + ".Consumer";
          case 10:
            return (b2._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b2;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b2);
          case 8:
            return b2 === za ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b2) return b2.displayName || b2.name || null;
            if ("string" === typeof b2) return b2;
        }
        return null;
      }
      function Sa(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta(a) {
        var b2 = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
      }
      function Ua(a) {
        var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d = "" + a[b2];
        if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
          var e = c2.get, f2 = c2.set;
          Object.defineProperty(a, b2, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f2.call(this, a2);
          } });
          Object.defineProperty(a, b2, { enumerable: c2.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b2];
          } };
        }
      }
      function Va(a) {
        a._valueTracker || (a._valueTracker = Ua(a));
      }
      function Wa(a) {
        if (!a) return false;
        var b2 = a._valueTracker;
        if (!b2) return true;
        var c2 = b2.getValue();
        var d = "";
        a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c2 ? (b2.setValue(a), true) : false;
      }
      function Xa(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b2) {
          return a.body;
        }
      }
      function Ya(a, b2) {
        var c2 = b2.checked;
        return A({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
      }
      function Za(a, b2) {
        var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d = null != b2.checked ? b2.checked : b2.defaultChecked;
        c2 = Sa(null != b2.value ? b2.value : c2);
        a._wrapperState = { initialChecked: d, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
      }
      function ab(a, b2) {
        b2 = b2.checked;
        null != b2 && ta(a, "checked", b2, false);
      }
      function bb(a, b2) {
        ab(a, b2);
        var c2 = Sa(b2.value), d = b2.type;
        if (null != c2) if ("number" === d) {
          if (0 === c2 && "" === a.value || a.value != c2) a.value = "" + c2;
        } else a.value !== "" + c2 && (a.value = "" + c2);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
        null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
      }
      function db(a, b2, c2) {
        if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
          var d = b2.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b2.value && null !== b2.value)) return;
          b2 = "" + a._wrapperState.initialValue;
          c2 || b2 === a.value || (a.value = b2);
          a.defaultValue = b2;
        }
        c2 = a.name;
        "" !== c2 && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c2 && (a.name = c2);
      }
      function cb(a, b2, c2) {
        if ("number" !== b2 || Xa(a.ownerDocument) !== a) null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
      }
      var eb = Array.isArray;
      function fb(a, b2, c2, d) {
        a = a.options;
        if (b2) {
          b2 = {};
          for (var e = 0; e < c2.length; e++) b2["$" + c2[e]] = true;
          for (c2 = 0; c2 < a.length; c2++) e = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e && (a[c2].selected = e), e && d && (a[c2].defaultSelected = true);
        } else {
          c2 = "" + Sa(c2);
          b2 = null;
          for (e = 0; e < a.length; e++) {
            if (a[e].value === c2) {
              a[e].selected = true;
              d && (a[e].defaultSelected = true);
              return;
            }
            null !== b2 || a[e].disabled || (b2 = a[e]);
          }
          null !== b2 && (b2.selected = true);
        }
      }
      function gb(a, b2) {
        if (null != b2.dangerouslySetInnerHTML) throw Error(p2(91));
        return A({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b2) {
        var c2 = b2.value;
        if (null == c2) {
          c2 = b2.children;
          b2 = b2.defaultValue;
          if (null != c2) {
            if (null != b2) throw Error(p2(92));
            if (eb(c2)) {
              if (1 < c2.length) throw Error(p2(93));
              c2 = c2[0];
            }
            b2 = c2;
          }
          null == b2 && (b2 = "");
          c2 = b2;
        }
        a._wrapperState = { initialValue: Sa(c2) };
      }
      function ib(a, b2) {
        var c2 = Sa(b2.value), d = Sa(b2.defaultValue);
        null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b2 = a.textContent;
        b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b2) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = (function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b2, c2, d, e);
          });
        } : a;
      })(function(a, b2) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b2;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
          for (b2 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b2.firstChild; ) a.appendChild(b2.firstChild);
        }
      });
      function ob(a, b2) {
        if (b2) {
          var c2 = a.firstChild;
          if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
            c2.nodeValue = b2;
            return;
          }
        }
        a.textContent = b2;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b2) {
          b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b2] = pb[a];
        });
      });
      function rb(a, b2, c2) {
        return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
      }
      function sb(a, b2) {
        a = a.style;
        for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
          var d = 0 === c2.indexOf("--"), e = rb(c2, b2[c2], d);
          "float" === c2 && (c2 = "cssFloat");
          d ? a.setProperty(c2, e) : a[c2] = e;
        }
      }
      var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b2) {
        if (b2) {
          if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p2(137, a));
          if (null != b2.dangerouslySetInnerHTML) {
            if (null != b2.children) throw Error(p2(60));
            if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p2(61));
          }
          if (null != b2.style && "object" !== typeof b2.style) throw Error(p2(62));
        }
      }
      function vb(a, b2) {
        if (-1 === a.indexOf("-")) return "string" === typeof b2.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p2(280));
          var b2 = a.stateNode;
          b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b2 = Ab;
          Ab = zb = null;
          Bb(a);
          if (b2) for (a = 0; a < b2.length; a++) Bb(b2[a]);
        }
      }
      function Gb(a, b2) {
        return a(b2);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b2, c2) {
        if (Ib) return a(b2, c2);
        Ib = true;
        try {
          return Gb(a, b2, c2);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b2) {
        var c2 = a.stateNode;
        if (null === c2) return null;
        var d = Db(c2);
        if (null === d) return null;
        c2 = d[b2];
        a: switch (b2) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c2 && "function" !== typeof c2) throw Error(p2(231, b2, typeof c2));
        return c2;
      }
      var Lb = false;
      if (ia) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b2, c2, d, e, f2, g2, h2, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b2.apply(c2, l);
        } catch (m2) {
          this.onError(m2);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b2, c2, d, e, f2, g2, h2, k) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b2, c2, d, e, f2, g2, h2, k) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p2(198));
          Qb || (Qb = true, Rb = l);
        }
      }
      function Vb(a) {
        var b2 = a, c2 = a;
        if (a.alternate) for (; b2.return; ) b2 = b2.return;
        else {
          a = b2;
          do
            b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
          while (a);
        }
        return 3 === b2.tag ? c2 : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b2 = a.memoizedState;
          null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
          if (null !== b2) return b2.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p2(188));
      }
      function Yb(a) {
        var b2 = a.alternate;
        if (!b2) {
          b2 = Vb(a);
          if (null === b2) throw Error(p2(188));
          return b2 !== a ? null : a;
        }
        for (var c2 = a, d = b2; ; ) {
          var e = c2.return;
          if (null === e) break;
          var f2 = e.alternate;
          if (null === f2) {
            d = e.return;
            if (null !== d) {
              c2 = d;
              continue;
            }
            break;
          }
          if (e.child === f2.child) {
            for (f2 = e.child; f2; ) {
              if (f2 === c2) return Xb(e), a;
              if (f2 === d) return Xb(e), b2;
              f2 = f2.sibling;
            }
            throw Error(p2(188));
          }
          if (c2.return !== d.return) c2 = e, d = f2;
          else {
            for (var g2 = false, h2 = e.child; h2; ) {
              if (h2 === c2) {
                g2 = true;
                c2 = e;
                d = f2;
                break;
              }
              if (h2 === d) {
                g2 = true;
                d = e;
                c2 = f2;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g2) {
              for (h2 = f2.child; h2; ) {
                if (h2 === c2) {
                  g2 = true;
                  c2 = f2;
                  d = e;
                  break;
                }
                if (h2 === d) {
                  g2 = true;
                  d = f2;
                  c2 = e;
                  break;
                }
                h2 = h2.sibling;
              }
              if (!g2) throw Error(p2(189));
            }
          }
          if (c2.alternate !== d) throw Error(p2(190));
        }
        if (3 !== c2.tag) throw Error(p2(188));
        return c2.stateNode.current === c2 ? a : b2;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b2 = $b(a);
          if (null !== b2) return b2;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b2) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b2) {
        var c2 = a.pendingLanes;
        if (0 === c2) return 0;
        var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
        if (0 !== g2) {
          var h2 = g2 & ~e;
          0 !== h2 ? d = tc(h2) : (f2 &= g2, 0 !== f2 && (d = tc(f2)));
        } else g2 = c2 & ~e, 0 !== g2 ? d = tc(g2) : 0 !== f2 && (d = tc(f2));
        if (0 === d) return 0;
        if (0 !== b2 && b2 !== d && 0 === (b2 & e) && (e = d & -d, f2 = b2 & -b2, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b2;
        0 !== (d & 4) && (d |= c2 & 16);
        b2 = a.entangledLanes;
        if (0 !== b2) for (a = a.entanglements, b2 &= d; 0 < b2; ) c2 = 31 - oc(b2), e = 1 << c2, d |= a[c2], b2 &= ~e;
        return d;
      }
      function vc(a, b2) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b2 + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b2 + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a, b2) {
        for (var c2 = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
          var g2 = 31 - oc(f2), h2 = 1 << g2, k = e[g2];
          if (-1 === k) {
            if (0 === (h2 & c2) || 0 !== (h2 & d)) e[g2] = vc(h2, b2);
          } else k <= b2 && (a.expiredLanes |= h2);
          f2 &= ~h2;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a);
        return b2;
      }
      function Ac(a, b2, c2) {
        a.pendingLanes |= b2;
        536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b2 = 31 - oc(b2);
        a[b2] = c2;
      }
      function Bc(a, b2) {
        var c2 = a.pendingLanes & ~b2;
        a.pendingLanes = b2;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b2;
        a.mutableReadLanes &= b2;
        a.entangledLanes &= b2;
        b2 = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c2; ) {
          var e = 31 - oc(c2), f2 = 1 << e;
          b2[e] = 0;
          d[e] = -1;
          a[e] = -1;
          c2 &= ~f2;
        }
      }
      function Cc(a, b2) {
        var c2 = a.entangledLanes |= b2;
        for (a = a.entanglements; c2; ) {
          var d = 31 - oc(c2), e = 1 << d;
          e & b2 | a[d] & b2 && (a[d] |= b2);
          c2 &= ~e;
        }
      }
      var C = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b2) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b2.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b2.pointerId);
        }
      }
      function Tc(a, b2, c2, d, e, f2) {
        if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
        a.eventSystemFlags |= d;
        b2 = a.targetContainers;
        null !== e && -1 === b2.indexOf(e) && b2.push(e);
        return a;
      }
      function Uc(a, b2, c2, d, e) {
        switch (b2) {
          case "focusin":
            return Lc = Tc(Lc, a, b2, c2, d, e), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b2, c2, d, e), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b2, c2, d, e), true;
          case "pointerover":
            var f2 = e.pointerId;
            Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d, e));
            return true;
          case "gotpointercapture":
            return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d, e)), true;
        }
        return false;
      }
      function Vc(a) {
        var b2 = Wc(a.target);
        if (null !== b2) {
          var c2 = Vb(b2);
          if (null !== c2) {
            if (b2 = c2.tag, 13 === b2) {
              if (b2 = Wb(c2), null !== b2) {
                a.blockedOn = b2;
                Ic(a.priority, function() {
                  Gc(c2);
                });
                return;
              }
            } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn) return false;
        for (var b2 = a.targetContainers; 0 < b2.length; ) {
          var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
          if (null === c2) {
            c2 = a.nativeEvent;
            var d = new c2.constructor(c2.type, c2);
            wb = d;
            c2.target.dispatchEvent(d);
            wb = null;
          } else return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
          b2.shift();
        }
        return true;
      }
      function Zc(a, b2, c2) {
        Xc(a) && c2.delete(b2);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a, b2) {
        a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b2(b3) {
          return ad(b3, a);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a);
          for (var c2 = 1; c2 < Kc.length; c2++) {
            var d = Kc[c2];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a);
        null !== Mc && ad(Mc, a);
        null !== Nc && ad(Nc, a);
        Oc.forEach(b2);
        Pc.forEach(b2);
        for (c2 = 0; c2 < Qc.length; c2++) d = Qc[c2], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a, b2, c2, d) {
        var e = C, f2 = cd.transition;
        cd.transition = null;
        try {
          C = 1, fd(a, b2, c2, d);
        } finally {
          C = e, cd.transition = f2;
        }
      }
      function gd(a, b2, c2, d) {
        var e = C, f2 = cd.transition;
        cd.transition = null;
        try {
          C = 4, fd(a, b2, c2, d);
        } finally {
          C = e, cd.transition = f2;
        }
      }
      function fd(a, b2, c2, d) {
        if (dd) {
          var e = Yc(a, b2, c2, d);
          if (null === e) hd(a, b2, d, id, c2), Sc(a, d);
          else if (Uc(e, a, b2, c2, d)) d.stopPropagation();
          else if (Sc(a, d), b2 & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e; ) {
              var f2 = Cb(e);
              null !== f2 && Ec(f2);
              f2 = Yc(a, b2, c2, d);
              null === f2 && hd(a, b2, d, id, c2);
              if (f2 === e) break;
              e = f2;
            }
            null !== e && d.stopPropagation();
          } else hd(a, b2, d, null, c2);
        }
      }
      var id = null;
      function Yc(a, b2, c2, d) {
        id = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a) if (b2 = Vb(a), null === b2) a = null;
        else if (c2 = b2.tag, 13 === c2) {
          a = Wb(b2);
          if (null !== a) return a;
          a = null;
        } else if (3 === c2) {
          if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
          a = null;
        } else b2 !== a && (a = null);
        id = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md) return md;
        var a, b2 = ld, c2 = b2.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
        for (a = 0; a < c2 && b2[a] === e[a]; a++) ;
        var g2 = c2 - a;
        for (d = 1; d <= g2 && b2[c2 - d] === e[f2 - d]; d++) ;
        return md = e.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b2 = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b2(b3, d, e, f2, g2) {
          this._reactName = b3;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f2;
          this.target = g2;
          this.currentTarget = null;
          for (var c2 in a) a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
          this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A(b2.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b2;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a) {
        var b2 = this.nativeEvent;
        return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A({}, ud, { key: function(a) {
        if (a.key) {
          var b2 = Md[a.key] || a.key;
          if ("Unidentified" !== b2) return b2;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = ia && "CompositionEvent" in window;
      var be = null;
      ia && "documentMode" in document && (be = document.documentMode);
      var ce = ia && "TextEvent" in window && !be;
      var de = ia && (!ae || be && 8 < be && 11 >= be);
      var ee = String.fromCharCode(32);
      var fe = false;
      function ge(a, b2) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b2.keyCode);
          case "keydown":
            return 229 !== b2.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie = false;
      function je(a, b2) {
        switch (a) {
          case "compositionend":
            return he(b2);
          case "keypress":
            if (32 !== b2.which) return null;
            fe = true;
            return ee;
          case "textInput":
            return a = b2.data, a === ee && fe ? null : a;
          default:
            return null;
        }
      }
      function ke(a, b2) {
        if (ie) return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
              if (b2.char && 1 < b2.char.length) return b2.char;
              if (b2.which) return String.fromCharCode(b2.which);
            }
            return null;
          case "compositionend":
            return de && "ko" !== b2.locale ? null : b2.data;
          default:
            return null;
        }
      }
      var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me(a) {
        var b2 = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b2 ? !!le[a.type] : "textarea" === b2 ? true : false;
      }
      function ne(a, b2, c2, d) {
        Eb(d);
        b2 = oe(b2, "onChange");
        0 < b2.length && (c2 = new td("onChange", "change", null, c2, d), a.push({ event: c2, listeners: b2 }));
      }
      var pe = null;
      var qe = null;
      function re(a) {
        se(a, 0);
      }
      function te(a) {
        var b2 = ue(a);
        if (Wa(b2)) return a;
      }
      function ve(a, b2) {
        if ("change" === a) return b2;
      }
      var we = false;
      if (ia) {
        if (ia) {
          ye = "oninput" in document;
          if (!ye) {
            ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = "function" === typeof ze.oninput;
          }
          xe = ye;
        } else xe = false;
        we = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye;
      var ze;
      function Ae() {
        pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
      }
      function Be(a) {
        if ("value" === a.propertyName && te(qe)) {
          var b2 = [];
          ne(b2, qe, a, xb(a));
          Jb(re, b2);
        }
      }
      function Ce(a, b2, c2) {
        "focusin" === a ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
      }
      function De(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
      }
      function Ee(a, b2) {
        if ("click" === a) return te(b2);
      }
      function Fe(a, b2) {
        if ("input" === a || "change" === a) return te(b2);
      }
      function Ge(a, b2) {
        return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
      }
      var He = "function" === typeof Object.is ? Object.is : Ge;
      function Ie(a, b2) {
        if (He(a, b2)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2) return false;
        var c2 = Object.keys(a), d = Object.keys(b2);
        if (c2.length !== d.length) return false;
        for (d = 0; d < c2.length; d++) {
          var e = c2[d];
          if (!ja.call(b2, e) || !He(a[e], b2[e])) return false;
        }
        return true;
      }
      function Je(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke(a, b2) {
        var c2 = Je(a);
        a = 0;
        for (var d; c2; ) {
          if (3 === c2.nodeType) {
            d = a + c2.textContent.length;
            if (a <= b2 && d >= b2) return { node: c2, offset: b2 - a };
            a = d;
          }
          a: {
            for (; c2; ) {
              if (c2.nextSibling) {
                c2 = c2.nextSibling;
                break a;
              }
              c2 = c2.parentNode;
            }
            c2 = void 0;
          }
          c2 = Je(c2);
        }
      }
      function Le(a, b2) {
        return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
      }
      function Me() {
        for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
          try {
            var c2 = "string" === typeof b2.contentWindow.location.href;
          } catch (d) {
            c2 = false;
          }
          if (c2) a = b2.contentWindow;
          else break;
          b2 = Xa(a.document);
        }
        return b2;
      }
      function Ne(a) {
        var b2 = a && a.nodeName && a.nodeName.toLowerCase();
        return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
      }
      function Oe(a) {
        var b2 = Me(), c2 = a.focusedElem, d = a.selectionRange;
        if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
          if (null !== d && Ne(c2)) {
            if (b2 = d.start, a = d.end, void 0 === a && (a = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
            else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e = c2.textContent.length, f2 = Math.min(d.start, e);
              d = void 0 === d.end ? f2 : Math.min(d.end, e);
              !a.extend && f2 > d && (e = d, d = f2, f2 = e);
              e = Ke(c2, f2);
              var g2 = Ke(
                c2,
                d
              );
              e && g2 && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
            }
          }
          b2 = [];
          for (a = c2; a = a.parentNode; ) 1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c2.focus && c2.focus();
          for (c2 = 0; c2 < b2.length; c2++) a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe = null;
      var Re = null;
      var Se = null;
      var Te = false;
      function Ue(a, b2, c2) {
        var d = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
        Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d }), b2.target = Qe)));
      }
      function Ve(a, b2) {
        var c2 = {};
        c2[a.toLowerCase()] = b2.toLowerCase();
        c2["Webkit" + a] = "webkit" + b2;
        c2["Moz" + a] = "moz" + b2;
        return c2;
      }
      var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
      var Xe = {};
      var Ye = {};
      ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
      function Ze(a) {
        if (Xe[a]) return Xe[a];
        if (!We[a]) return a;
        var b2 = We[a], c2;
        for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye) return Xe[a] = b2[c2];
        return a;
      }
      var $e = Ze("animationend");
      var af = Ze("animationiteration");
      var bf = Ze("animationstart");
      var cf = Ze("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b2) {
        df.set(a, b2);
        fa(b2, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b2, c2) {
        var d = a.type || "unknown-event";
        a.currentTarget = c2;
        Ub(d, b2, void 0, a);
        a.currentTarget = null;
      }
      function se(a, b2) {
        b2 = 0 !== (b2 & 4);
        for (var c2 = 0; c2 < a.length; c2++) {
          var d = a[c2], e = d.event;
          d = d.listeners;
          a: {
            var f2 = void 0;
            if (b2) for (var g2 = d.length - 1; 0 <= g2; g2--) {
              var h2 = d[g2], k = h2.instance, l = h2.currentTarget;
              h2 = h2.listener;
              if (k !== f2 && e.isPropagationStopped()) break a;
              nf(e, h2, l);
              f2 = k;
            }
            else for (g2 = 0; g2 < d.length; g2++) {
              h2 = d[g2];
              k = h2.instance;
              l = h2.currentTarget;
              h2 = h2.listener;
              if (k !== f2 && e.isPropagationStopped()) break a;
              nf(e, h2, l);
              f2 = k;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D(a, b2) {
        var c2 = b2[of];
        void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c2.has(d) || (pf(b2, a, 2, false), c2.add(d));
      }
      function qf(a, b2, c2) {
        var d = 0;
        b2 && (d |= 4);
        pf(c2, a, d, b2);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da.forEach(function(b3) {
            "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
          });
          var b2 = 9 === a.nodeType ? a : a.ownerDocument;
          null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
        }
      }
      function pf(a, b2, c2, d) {
        switch (jd(b2)) {
          case 1:
            var e = ed;
            break;
          case 4:
            e = gd;
            break;
          default:
            e = fd;
        }
        c2 = e.bind(null, b2, c2, a);
        e = void 0;
        !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e = true);
        d ? void 0 !== e ? a.addEventListener(b2, c2, { capture: true, passive: e }) : a.addEventListener(b2, c2, true) : void 0 !== e ? a.addEventListener(b2, c2, { passive: e }) : a.addEventListener(b2, c2, false);
      }
      function hd(a, b2, c2, d, e) {
        var f2 = d;
        if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g2 = d.tag;
          if (3 === g2 || 4 === g2) {
            var h2 = d.stateNode.containerInfo;
            if (h2 === e || 8 === h2.nodeType && h2.parentNode === e) break;
            if (4 === g2) for (g2 = d.return; null !== g2; ) {
              var k = g2.tag;
              if (3 === k || 4 === k) {
                if (k = g2.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
              }
              g2 = g2.return;
            }
            for (; null !== h2; ) {
              g2 = Wc(h2);
              if (null === g2) return;
              k = g2.tag;
              if (5 === k || 6 === k) {
                d = f2 = g2;
                continue a;
              }
              h2 = h2.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f2, e2 = xb(c2), g3 = [];
          a: {
            var h3 = df.get(a);
            if (void 0 !== h3) {
              var k2 = td, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c2)) break a;
                case "keydown":
                case "keyup":
                  k2 = Rd;
                  break;
                case "focusin":
                  n = "focus";
                  k2 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k2 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Fd;
                  break;
                case "click":
                  if (2 === c2.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Vd;
                  break;
                case $e:
                case af:
                case bf:
                  k2 = Hd;
                  break;
                case cf:
                  k2 = Xd;
                  break;
                case "scroll":
                  k2 = vd;
                  break;
                case "wheel":
                  k2 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Td;
              }
              var t = 0 !== (b2 & 4), J = !t && "scroll" === a, x = t ? null !== h3 ? h3 + "Capture" : null : h3;
              t = [];
              for (var w2 = d2, u2; null !== w2; ) {
                u2 = w2;
                var F = u2.stateNode;
                5 === u2.tag && null !== F && (u2 = F, null !== x && (F = Kb(w2, x), null != F && t.push(tf(w2, F, u2))));
                if (J) break;
                w2 = w2.return;
              }
              0 < t.length && (h3 = new k2(h3, n, null, c2, e2), g3.push({ event: h3, listeners: t }));
            }
          }
          if (0 === (b2 & 7)) {
            a: {
              h3 = "mouseover" === a || "pointerover" === a;
              k2 = "mouseout" === a || "pointerout" === a;
              if (h3 && c2 !== wb && (n = c2.relatedTarget || c2.fromElement) && (Wc(n) || n[uf])) break a;
              if (k2 || h3) {
                h3 = e2.window === e2 ? e2 : (h3 = e2.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
                if (k2) {
                  if (n = c2.relatedTarget || c2.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k2 = null, n = d2;
                if (k2 !== n) {
                  t = Bd;
                  F = "onMouseLeave";
                  x = "onMouseEnter";
                  w2 = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w2 = "pointer";
                  J = null == k2 ? h3 : ue(k2);
                  u2 = null == n ? h3 : ue(n);
                  h3 = new t(F, w2 + "leave", k2, c2, e2);
                  h3.target = J;
                  h3.relatedTarget = u2;
                  F = null;
                  Wc(e2) === d2 && (t = new t(x, w2 + "enter", n, c2, e2), t.target = u2, t.relatedTarget = J, F = t);
                  J = F;
                  if (k2 && n) b: {
                    t = k2;
                    x = n;
                    w2 = 0;
                    for (u2 = t; u2; u2 = vf(u2)) w2++;
                    u2 = 0;
                    for (F = x; F; F = vf(F)) u2++;
                    for (; 0 < w2 - u2; ) t = vf(t), w2--;
                    for (; 0 < u2 - w2; ) x = vf(x), u2--;
                    for (; w2--; ) {
                      if (t === x || null !== x && t === x.alternate) break b;
                      t = vf(t);
                      x = vf(x);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k2 && wf(g3, h3, k2, t, false);
                  null !== n && null !== J && wf(g3, J, n, t, true);
                }
              }
            }
            a: {
              h3 = d2 ? ue(d2) : window;
              k2 = h3.nodeName && h3.nodeName.toLowerCase();
              if ("select" === k2 || "input" === k2 && "file" === h3.type) var na = ve;
              else if (me(h3)) if (we) na = Fe;
              else {
                na = De;
                var xa = Ce;
              }
              else (k2 = h3.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
              if (na && (na = na(a, d2))) {
                ne(g3, na, c2, e2);
                break a;
              }
              xa && xa(a, h3, d2);
              "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
            }
            xa = d2 ? ue(d2) : window;
            switch (a) {
              case "focusin":
                if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
                break;
              case "focusout":
                Se = Re = Qe = null;
                break;
              case "mousedown":
                Te = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te = false;
                Ue(g3, c2, e2);
                break;
              case "selectionchange":
                if (Pe) break;
              case "keydown":
              case "keyup":
                Ue(g3, c2, e2);
            }
            var $a;
            if (ae) b: {
              switch (a) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
            else ie ? ge(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
            ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e2), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
            if ($a = ce ? je(a, c2) : ke(a, c2)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c2, e2), g3.push({ event: e2, listeners: d2 }), e2.data = $a);
          }
          se(g3, b2);
        });
      }
      function tf(a, b2, c2) {
        return { instance: a, listener: b2, currentTarget: c2 };
      }
      function oe(a, b2) {
        for (var c2 = b2 + "Capture", d = []; null !== a; ) {
          var e = a, f2 = e.stateNode;
          5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c2), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b2), null != f2 && d.push(tf(a, f2, e)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b2, c2, d, e) {
        for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d; ) {
          var h2 = c2, k = h2.alternate, l = h2.stateNode;
          if (null !== k && k === d) break;
          5 === h2.tag && null !== l && (h2 = l, e ? (k = Kb(c2, f2), null != k && g2.unshift(tf(c2, k, h2))) : e || (k = Kb(c2, f2), null != k && g2.push(tf(c2, k, h2))));
          c2 = c2.return;
        }
        0 !== g2.length && a.push({ event: b2, listeners: g2 });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b2, c2) {
        b2 = zf(b2);
        if (zf(a) !== b2 && c2) throw Error(p2(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b2) {
        return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b2) {
        var c2 = b2, d = 0;
        do {
          var e = c2.nextSibling;
          a.removeChild(c2);
          if (e && 8 === e.nodeType) if (c2 = e.data, "/$" === c2) {
            if (0 === d) {
              a.removeChild(e);
              bd(b2);
              return;
            }
            d--;
          } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d++;
          c2 = e;
        } while (c2);
        bd(b2);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b2 = a.nodeType;
          if (1 === b2 || 3 === b2) break;
          if (8 === b2) {
            b2 = a.data;
            if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
            if ("/$" === b2) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b2 = 0; a; ) {
          if (8 === a.nodeType) {
            var c2 = a.data;
            if ("$" === c2 || "$!" === c2 || "$?" === c2) {
              if (0 === b2) return a;
              b2--;
            } else "/$" === c2 && b2++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b2 = a[Of];
        if (b2) return b2;
        for (var c2 = a.parentNode; c2; ) {
          if (b2 = c2[uf] || c2[Of]) {
            c2 = b2.alternate;
            if (null !== b2.child || null !== c2 && null !== c2.child) for (a = Mf(a); null !== a; ) {
              if (c2 = a[Of]) return c2;
              a = Mf(a);
            }
            return b2;
          }
          a = c2;
          c2 = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p2(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G(a, b2) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b2;
      }
      var Vf = {};
      var H = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b2) {
        var c2 = a.type.contextTypes;
        if (!c2) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b2) return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f2;
        for (f2 in c2) e[f2] = b2[f2];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E(Wf);
        E(H);
      }
      function ag(a, b2, c2) {
        if (H.current !== Vf) throw Error(p2(168));
        G(H, b2);
        G(Wf, c2);
      }
      function bg(a, b2, c2) {
        var d = a.stateNode;
        b2 = b2.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c2;
        d = d.getChildContext();
        for (var e in d) if (!(e in b2)) throw Error(p2(108, Ra(a) || "Unknown", e));
        return A({}, c2, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H.current;
        G(H, a);
        G(Wf, Wf.current);
        return true;
      }
      function dg(a, b2, c2) {
        var d = a.stateNode;
        if (!d) throw Error(p2(169));
        c2 ? (a = bg(a, b2, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
        G(Wf, c2);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b2 = C;
          try {
            var c2 = eg;
            for (C = 1; a < c2.length; a++) {
              var d = c2[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
          } finally {
            C = b2, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b2) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b2;
      }
      function ug(a, b2, c2) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e = 32 - oc(d) - 1;
        d &= ~(1 << e);
        c2 += 1;
        var f2 = 32 - oc(b2) + e;
        if (30 < f2) {
          var g2 = e - e % 5;
          f2 = (d & (1 << g2) - 1).toString(32);
          d >>= g2;
          e -= g2;
          rg = 1 << 32 - oc(b2) + e | c2 << e | d;
          sg = f2 + a;
        } else rg = 1 << f2 | c2 << e | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I = false;
      var zg = null;
      function Ag(a, b2) {
        var c2 = Bg(5, null, null, 0);
        c2.elementType = "DELETED";
        c2.stateNode = b2;
        c2.return = a;
        b2 = a.deletions;
        null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
      }
      function Cg(a, b2) {
        switch (a.tag) {
          case 5:
            var c2 = a.type;
            b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
            return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
          case 6:
            return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
          case 13:
            return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I) {
          var b2 = yg;
          if (b2) {
            var c2 = b2;
            if (!Cg(a, b2)) {
              if (Dg(a)) throw Error(p2(418));
              b2 = Lf(c2.nextSibling);
              var d = xg;
              b2 && Cg(a, b2) ? Ag(d, c2) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p2(418));
            a.flags = a.flags & -4097 | 2;
            I = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I) return Fg(a), I = true, false;
        var b2;
        (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
        if (b2 && (b2 = yg)) {
          if (Dg(a)) throw Hg(), Error(p2(418));
          for (; b2; ) Ag(a, b2), b2 = Lf(b2.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p2(317));
          a: {
            a = a.nextSibling;
            for (b2 = 0; a; ) {
              if (8 === a.nodeType) {
                var c2 = a.data;
                if ("/$" === c2) {
                  if (0 === b2) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b2--;
                } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a, b2) {
        if (a && a.defaultProps) {
          b2 = A({}, b2);
          a = a.defaultProps;
          for (var c2 in a) void 0 === b2[c2] && (b2[c2] = a[c2]);
          return b2;
        }
        return b2;
      }
      var Mg = Uf(null);
      var Ng = null;
      var Og = null;
      var Pg = null;
      function Qg() {
        Pg = Og = Ng = null;
      }
      function Rg(a) {
        var b2 = Mg.current;
        E(Mg);
        a._currentValue = b2;
      }
      function Sg(a, b2, c2) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d && (d.childLanes |= b2)) : null !== d && (d.childLanes & b2) !== b2 && (d.childLanes |= b2);
          if (a === c2) break;
          a = a.return;
        }
      }
      function Tg(a, b2) {
        Ng = a;
        Pg = Og = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (Ug = true), a.firstContext = null);
      }
      function Vg(a) {
        var b2 = a._currentValue;
        if (Pg !== a) if (a = { context: a, memoizedValue: b2, next: null }, null === Og) {
          if (null === Ng) throw Error(p2(308));
          Og = a;
          Ng.dependencies = { lanes: 0, firstContext: a };
        } else Og = Og.next = a;
        return b2;
      }
      var Wg = null;
      function Xg(a) {
        null === Wg ? Wg = [a] : Wg.push(a);
      }
      function Yg(a, b2, c2, d) {
        var e = b2.interleaved;
        null === e ? (c2.next = c2, Xg(b2)) : (c2.next = e.next, e.next = c2);
        b2.interleaved = c2;
        return Zg(a, d);
      }
      function Zg(a, b2) {
        a.lanes |= b2;
        var c2 = a.alternate;
        null !== c2 && (c2.lanes |= b2);
        c2 = a;
        for (a = a.return; null !== a; ) a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
        return 3 === c2.tag ? c2.stateNode : null;
      }
      var $g = false;
      function ah(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function bh(a, b2) {
        a = a.updateQueue;
        b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function ch(a, b2) {
        return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
      }
      function dh(a, b2, c2) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K & 2)) {
          var e = d.pending;
          null === e ? b2.next = b2 : (b2.next = e.next, e.next = b2);
          d.pending = b2;
          return Zg(a, c2);
        }
        e = d.interleaved;
        null === e ? (b2.next = b2, Xg(d)) : (b2.next = e.next, e.next = b2);
        d.interleaved = b2;
        return Zg(a, c2);
      }
      function eh(a, b2, c2) {
        b2 = b2.updateQueue;
        if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
          var d = b2.lanes;
          d &= a.pendingLanes;
          c2 |= d;
          b2.lanes = c2;
          Cc(a, c2);
        }
      }
      function fh(a, b2) {
        var c2 = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c2 === d)) {
          var e = null, f2 = null;
          c2 = c2.firstBaseUpdate;
          if (null !== c2) {
            do {
              var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
              null === f2 ? e = f2 = g2 : f2 = f2.next = g2;
              c2 = c2.next;
            } while (null !== c2);
            null === f2 ? e = f2 = b2 : f2 = f2.next = b2;
          } else e = f2 = b2;
          c2 = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
          a.updateQueue = c2;
          return;
        }
        a = c2.lastBaseUpdate;
        null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
        c2.lastBaseUpdate = b2;
      }
      function gh(a, b2, c2, d) {
        var e = a.updateQueue;
        $g = false;
        var f2 = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h2 = e.shared.pending;
        if (null !== h2) {
          e.shared.pending = null;
          var k = h2, l = k.next;
          k.next = null;
          null === g2 ? f2 = l : g2.next = l;
          g2 = k;
          var m2 = a.alternate;
          null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l : h2.next = l, m2.lastBaseUpdate = k));
        }
        if (null !== f2) {
          var q = e.baseState;
          g2 = 0;
          m2 = l = k = null;
          h2 = f2;
          do {
            var r = h2.lane, y2 = h2.eventTime;
            if ((d & r) === r) {
              null !== m2 && (m2 = m2.next = {
                eventTime: y2,
                lane: 0,
                tag: h2.tag,
                payload: h2.payload,
                callback: h2.callback,
                next: null
              });
              a: {
                var n = a, t = h2;
                r = b2;
                y2 = c2;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q = n.call(y2, q, r);
                      break a;
                    }
                    q = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y2, q, r) : n;
                    if (null === r || void 0 === r) break a;
                    q = A({}, q, r);
                    break a;
                  case 2:
                    $g = true;
                }
              }
              null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h2] : r.push(h2));
            } else y2 = { eventTime: y2, lane: r, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l = m2 = y2, k = q) : m2 = m2.next = y2, g2 |= r;
            h2 = h2.next;
            if (null === h2) if (h2 = e.shared.pending, null === h2) break;
            else r = h2, h2 = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
          } while (1);
          null === m2 && (k = q);
          e.baseState = k;
          e.firstBaseUpdate = l;
          e.lastBaseUpdate = m2;
          b2 = e.shared.interleaved;
          if (null !== b2) {
            e = b2;
            do
              g2 |= e.lane, e = e.next;
            while (e !== b2);
          } else null === f2 && (e.shared.lanes = 0);
          hh |= g2;
          a.lanes = g2;
          a.memoizedState = q;
        }
      }
      function ih(a, b2, c2) {
        a = b2.effects;
        b2.effects = null;
        if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
          var d = a[b2], e = d.callback;
          if (null !== e) {
            d.callback = null;
            d = c2;
            if ("function" !== typeof e) throw Error(p2(191, e));
            e.call(d);
          }
        }
      }
      var jh = new aa.Component().refs;
      function kh(a, b2, c2, d) {
        b2 = a.memoizedState;
        c2 = c2(d, b2);
        c2 = null === c2 || void 0 === c2 ? b2 : A({}, b2, c2);
        a.memoizedState = c2;
        0 === a.lanes && (a.updateQueue.baseState = c2);
      }
      var nh = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b2, c2) {
        a = a._reactInternals;
        var d = L(), e = lh(a), f2 = ch(d, e);
        f2.payload = b2;
        void 0 !== c2 && null !== c2 && (f2.callback = c2);
        b2 = dh(a, f2, e);
        null !== b2 && (mh(b2, a, e, d), eh(b2, a, e));
      }, enqueueReplaceState: function(a, b2, c2) {
        a = a._reactInternals;
        var d = L(), e = lh(a), f2 = ch(d, e);
        f2.tag = 1;
        f2.payload = b2;
        void 0 !== c2 && null !== c2 && (f2.callback = c2);
        b2 = dh(a, f2, e);
        null !== b2 && (mh(b2, a, e, d), eh(b2, a, e));
      }, enqueueForceUpdate: function(a, b2) {
        a = a._reactInternals;
        var c2 = L(), d = lh(a), e = ch(c2, d);
        e.tag = 2;
        void 0 !== b2 && null !== b2 && (e.callback = b2);
        b2 = dh(a, e, d);
        null !== b2 && (mh(b2, a, d, c2), eh(b2, a, d));
      } };
      function oh(a, b2, c2, d, e, f2, g2) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d) || !Ie(e, f2) : true;
      }
      function ph(a, b2, c2) {
        var d = false, e = Vf;
        var f2 = b2.contextType;
        "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e = Zf(b2) ? Xf : H.current, d = b2.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
        b2 = new b2(c2, f2);
        a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
        b2.updater = nh;
        a.stateNode = b2;
        b2._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
        return b2;
      }
      function qh(a, b2, c2, d) {
        a = b2.state;
        "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d);
        "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d);
        b2.state !== a && nh.enqueueReplaceState(b2, b2.state, null);
      }
      function rh(a, b2, c2, d) {
        var e = a.stateNode;
        e.props = c2;
        e.state = a.memoizedState;
        e.refs = jh;
        ah(a);
        var f2 = b2.contextType;
        "object" === typeof f2 && null !== f2 ? e.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H.current, e.context = Yf(a, f2));
        e.state = a.memoizedState;
        f2 = b2.getDerivedStateFromProps;
        "function" === typeof f2 && (kh(a, b2, f2, c2), e.state = a.memoizedState);
        "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b2 = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b2 !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c2, e, d), e.state = a.memoizedState);
        "function" === typeof e.componentDidMount && (a.flags |= 4194308);
      }
      function sh(a, b2, c2) {
        a = c2.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c2._owner) {
            c2 = c2._owner;
            if (c2) {
              if (1 !== c2.tag) throw Error(p2(309));
              var d = c2.stateNode;
            }
            if (!d) throw Error(p2(147, a));
            var e = d, f2 = "" + a;
            if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
            b2 = function(a2) {
              var b3 = e.refs;
              b3 === jh && (b3 = e.refs = {});
              null === a2 ? delete b3[f2] : b3[f2] = a2;
            };
            b2._stringRef = f2;
            return b2;
          }
          if ("string" !== typeof a) throw Error(p2(284));
          if (!c2._owner) throw Error(p2(290, a));
        }
        return a;
      }
      function th(a, b2) {
        a = Object.prototype.toString.call(b2);
        throw Error(p2(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
      }
      function uh(a) {
        var b2 = a._init;
        return b2(a._payload);
      }
      function vh(a) {
        function b2(b3, c3) {
          if (a) {
            var d2 = b3.deletions;
            null === d2 ? (b3.deletions = [c3], b3.flags |= 16) : d2.push(c3);
          }
        }
        function c2(c3, d2) {
          if (!a) return null;
          for (; null !== d2; ) b2(c3, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b3) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
          return a2;
        }
        function e(a2, b3) {
          a2 = wh(a2, b3);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f2(b3, c3, d2) {
          b3.index = d2;
          if (!a) return b3.flags |= 1048576, c3;
          d2 = b3.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c3 ? (b3.flags |= 2, c3) : d2;
          b3.flags |= 2;
          return c3;
        }
        function g2(b3) {
          a && null === b3.alternate && (b3.flags |= 2);
          return b3;
        }
        function h2(a2, b3, c3, d2) {
          if (null === b3 || 6 !== b3.tag) return b3 = xh(c3, a2.mode, d2), b3.return = a2, b3;
          b3 = e(b3, c3);
          b3.return = a2;
          return b3;
        }
        function k(a2, b3, c3, d2) {
          var f3 = c3.type;
          if (f3 === ya) return m2(a2, b3, c3.props.children, d2, c3.key);
          if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type)) return d2 = e(b3, c3.props), d2.ref = sh(a2, b3, c3), d2.return = a2, d2;
          d2 = yh(c3.type, c3.key, c3.props, null, a2.mode, d2);
          d2.ref = sh(a2, b3, c3);
          d2.return = a2;
          return d2;
        }
        function l(a2, b3, c3, d2) {
          if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = zh(c3, a2.mode, d2), b3.return = a2, b3;
          b3 = e(b3, c3.children || []);
          b3.return = a2;
          return b3;
        }
        function m2(a2, b3, c3, d2, f3) {
          if (null === b3 || 7 !== b3.tag) return b3 = Ah(c3, a2.mode, d2, f3), b3.return = a2, b3;
          b3 = e(b3, c3);
          b3.return = a2;
          return b3;
        }
        function q(a2, b3, c3) {
          if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = xh("" + b3, a2.mode, c3), b3.return = a2, b3;
          if ("object" === typeof b3 && null !== b3) {
            switch (b3.$$typeof) {
              case va:
                return c3 = yh(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = sh(a2, null, b3), c3.return = a2, c3;
              case wa:
                return b3 = zh(b3, a2.mode, c3), b3.return = a2, b3;
              case Ha:
                var d2 = b3._init;
                return q(a2, d2(b3._payload), c3);
            }
            if (eb(b3) || Ka(b3)) return b3 = Ah(b3, a2.mode, c3, null), b3.return = a2, b3;
            th(a2, b3);
          }
          return null;
        }
        function r(a2, b3, c3, d2) {
          var e2 = null !== b3 ? b3.key : null;
          if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e2 ? null : h2(a2, b3, "" + c3, d2);
          if ("object" === typeof c3 && null !== c3) {
            switch (c3.$$typeof) {
              case va:
                return c3.key === e2 ? k(a2, b3, c3, d2) : null;
              case wa:
                return c3.key === e2 ? l(a2, b3, c3, d2) : null;
              case Ha:
                return e2 = c3._init, r(
                  a2,
                  b3,
                  e2(c3._payload),
                  d2
                );
            }
            if (eb(c3) || Ka(c3)) return null !== e2 ? null : m2(a2, b3, c3, d2, null);
            th(a2, c3);
          }
          return null;
        }
        function y2(a2, b3, c3, d2, e2) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c3) || null, h2(b3, a2, "" + d2, e2);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va:
                return a2 = a2.get(null === d2.key ? c3 : d2.key) || null, k(b3, a2, d2, e2);
              case wa:
                return a2 = a2.get(null === d2.key ? c3 : d2.key) || null, l(b3, a2, d2, e2);
              case Ha:
                var f3 = d2._init;
                return y2(a2, b3, c3, f3(d2._payload), e2);
            }
            if (eb(d2) || Ka(d2)) return a2 = a2.get(c3) || null, m2(b3, a2, d2, e2, null);
            th(b3, d2);
          }
          return null;
        }
        function n(e2, g3, h3, k2) {
          for (var l2 = null, m3 = null, u2 = g3, w2 = g3 = 0, x = null; null !== u2 && w2 < h3.length; w2++) {
            u2.index > w2 ? (x = u2, u2 = null) : x = u2.sibling;
            var n2 = r(e2, u2, h3[w2], k2);
            if (null === n2) {
              null === u2 && (u2 = x);
              break;
            }
            a && u2 && null === n2.alternate && b2(e2, u2);
            g3 = f2(n2, g3, w2);
            null === m3 ? l2 = n2 : m3.sibling = n2;
            m3 = n2;
            u2 = x;
          }
          if (w2 === h3.length) return c2(e2, u2), I && tg(e2, w2), l2;
          if (null === u2) {
            for (; w2 < h3.length; w2++) u2 = q(e2, h3[w2], k2), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l2 = u2 : m3.sibling = u2, m3 = u2);
            I && tg(e2, w2);
            return l2;
          }
          for (u2 = d(e2, u2); w2 < h3.length; w2++) x = y2(u2, e2, w2, h3[w2], k2), null !== x && (a && null !== x.alternate && u2.delete(null === x.key ? w2 : x.key), g3 = f2(x, g3, w2), null === m3 ? l2 = x : m3.sibling = x, m3 = x);
          a && u2.forEach(function(a2) {
            return b2(e2, a2);
          });
          I && tg(e2, w2);
          return l2;
        }
        function t(e2, g3, h3, k2) {
          var l2 = Ka(h3);
          if ("function" !== typeof l2) throw Error(p2(150));
          h3 = l2.call(h3);
          if (null == h3) throw Error(p2(151));
          for (var u2 = l2 = null, m3 = g3, w2 = g3 = 0, x = null, n2 = h3.next(); null !== m3 && !n2.done; w2++, n2 = h3.next()) {
            m3.index > w2 ? (x = m3, m3 = null) : x = m3.sibling;
            var t2 = r(e2, m3, n2.value, k2);
            if (null === t2) {
              null === m3 && (m3 = x);
              break;
            }
            a && m3 && null === t2.alternate && b2(e2, m3);
            g3 = f2(t2, g3, w2);
            null === u2 ? l2 = t2 : u2.sibling = t2;
            u2 = t2;
            m3 = x;
          }
          if (n2.done) return c2(
            e2,
            m3
          ), I && tg(e2, w2), l2;
          if (null === m3) {
            for (; !n2.done; w2++, n2 = h3.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g3 = f2(n2, g3, w2), null === u2 ? l2 = n2 : u2.sibling = n2, u2 = n2);
            I && tg(e2, w2);
            return l2;
          }
          for (m3 = d(e2, m3); !n2.done; w2++, n2 = h3.next()) n2 = y2(m3, e2, w2, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m3.delete(null === n2.key ? w2 : n2.key), g3 = f2(n2, g3, w2), null === u2 ? l2 = n2 : u2.sibling = n2, u2 = n2);
          a && m3.forEach(function(a2) {
            return b2(e2, a2);
          });
          I && tg(e2, w2);
          return l2;
        }
        function J(a2, d2, f3, h3) {
          "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
          if ("object" === typeof f3 && null !== f3) {
            switch (f3.$$typeof) {
              case va:
                a: {
                  for (var k2 = f3.key, l2 = d2; null !== l2; ) {
                    if (l2.key === k2) {
                      k2 = f3.type;
                      if (k2 === ya) {
                        if (7 === l2.tag) {
                          c2(a2, l2.sibling);
                          d2 = e(l2, f3.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && uh(k2) === l2.type) {
                        c2(a2, l2.sibling);
                        d2 = e(l2, f3.props);
                        d2.ref = sh(a2, l2, f3);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c2(a2, l2);
                      break;
                    } else b2(a2, l2);
                    l2 = l2.sibling;
                  }
                  f3.type === ya ? (d2 = Ah(f3.props.children, a2.mode, h3, f3.key), d2.return = a2, a2 = d2) : (h3 = yh(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = sh(a2, d2, f3), h3.return = a2, a2 = h3);
                }
                return g2(a2);
              case wa:
                a: {
                  for (l2 = f3.key; null !== d2; ) {
                    if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                      c2(a2, d2.sibling);
                      d2 = e(d2, f3.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c2(a2, d2);
                      break;
                    }
                    else b2(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = zh(f3, a2.mode, h3);
                  d2.return = a2;
                  a2 = d2;
                }
                return g2(a2);
              case Ha:
                return l2 = f3._init, J(a2, d2, l2(f3._payload), h3);
            }
            if (eb(f3)) return n(a2, d2, f3, h3);
            if (Ka(f3)) return t(a2, d2, f3, h3);
            th(a2, f3);
          }
          return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c2(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c2(a2, d2), d2 = xh(f3, a2.mode, h3), d2.return = a2, a2 = d2), g2(a2)) : c2(a2, d2);
        }
        return J;
      }
      var Bh = vh(true);
      var Ch = vh(false);
      var Dh = {};
      var Eh = Uf(Dh);
      var Fh = Uf(Dh);
      var Gh = Uf(Dh);
      function Hh(a) {
        if (a === Dh) throw Error(p2(174));
        return a;
      }
      function Ih(a, b2) {
        G(Gh, b2);
        G(Fh, a);
        G(Eh, Dh);
        a = b2.nodeType;
        switch (a) {
          case 9:
          case 11:
            b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
        }
        E(Eh);
        G(Eh, b2);
      }
      function Jh() {
        E(Eh);
        E(Fh);
        E(Gh);
      }
      function Kh(a) {
        Hh(Gh.current);
        var b2 = Hh(Eh.current);
        var c2 = lb(b2, a.type);
        b2 !== c2 && (G(Fh, a), G(Eh, c2));
      }
      function Lh(a) {
        Fh.current === a && (E(Eh), E(Fh));
      }
      var M = Uf(0);
      function Mh(a) {
        for (var b2 = a; null !== b2; ) {
          if (13 === b2.tag) {
            var c2 = b2.memoizedState;
            if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
          } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
            if (0 !== (b2.flags & 128)) return b2;
          } else if (null !== b2.child) {
            b2.child.return = b2;
            b2 = b2.child;
            continue;
          }
          if (b2 === a) break;
          for (; null === b2.sibling; ) {
            if (null === b2.return || b2.return === a) return null;
            b2 = b2.return;
          }
          b2.sibling.return = b2.return;
          b2 = b2.sibling;
        }
        return null;
      }
      var Nh = [];
      function Oh() {
        for (var a = 0; a < Nh.length; a++) Nh[a]._workInProgressVersionPrimary = null;
        Nh.length = 0;
      }
      var Ph = ua.ReactCurrentDispatcher;
      var Qh = ua.ReactCurrentBatchConfig;
      var Rh = 0;
      var N = null;
      var O = null;
      var P = null;
      var Sh = false;
      var Th = false;
      var Uh = 0;
      var Vh = 0;
      function Q() {
        throw Error(p2(321));
      }
      function Wh(a, b2) {
        if (null === b2) return false;
        for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++) if (!He(a[c2], b2[c2])) return false;
        return true;
      }
      function Xh(a, b2, c2, d, e, f2) {
        Rh = f2;
        N = b2;
        b2.memoizedState = null;
        b2.updateQueue = null;
        b2.lanes = 0;
        Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
        a = c2(d, e);
        if (Th) {
          f2 = 0;
          do {
            Th = false;
            Uh = 0;
            if (25 <= f2) throw Error(p2(301));
            f2 += 1;
            P = O = null;
            b2.updateQueue = null;
            Ph.current = $h;
            a = c2(d, e);
          } while (Th);
        }
        Ph.current = ai;
        b2 = null !== O && null !== O.next;
        Rh = 0;
        P = O = N = null;
        Sh = false;
        if (b2) throw Error(p2(300));
        return a;
      }
      function bi() {
        var a = 0 !== Uh;
        Uh = 0;
        return a;
      }
      function ci() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === P ? N.memoizedState = P = a : P = P.next = a;
        return P;
      }
      function di() {
        if (null === O) {
          var a = N.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = O.next;
        var b2 = null === P ? N.memoizedState : P.next;
        if (null !== b2) P = b2, O = a;
        else {
          if (null === a) throw Error(p2(310));
          O = a;
          a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
          null === P ? N.memoizedState = P = a : P = P.next = a;
        }
        return P;
      }
      function ei(a, b2) {
        return "function" === typeof b2 ? b2(a) : b2;
      }
      function fi(a) {
        var b2 = di(), c2 = b2.queue;
        if (null === c2) throw Error(p2(311));
        c2.lastRenderedReducer = a;
        var d = O, e = d.baseQueue, f2 = c2.pending;
        if (null !== f2) {
          if (null !== e) {
            var g2 = e.next;
            e.next = f2.next;
            f2.next = g2;
          }
          d.baseQueue = e = f2;
          c2.pending = null;
        }
        if (null !== e) {
          f2 = e.next;
          d = d.baseState;
          var h2 = g2 = null, k = null, l = f2;
          do {
            var m2 = l.lane;
            if ((Rh & m2) === m2) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
              var q = {
                lane: m2,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              null === k ? (h2 = k = q, g2 = d) : k = k.next = q;
              N.lanes |= m2;
              hh |= m2;
            }
            l = l.next;
          } while (null !== l && l !== f2);
          null === k ? g2 = d : k.next = h2;
          He(d, b2.memoizedState) || (Ug = true);
          b2.memoizedState = d;
          b2.baseState = g2;
          b2.baseQueue = k;
          c2.lastRenderedState = d;
        }
        a = c2.interleaved;
        if (null !== a) {
          e = a;
          do
            f2 = e.lane, N.lanes |= f2, hh |= f2, e = e.next;
          while (e !== a);
        } else null === e && (c2.lanes = 0);
        return [b2.memoizedState, c2.dispatch];
      }
      function gi(a) {
        var b2 = di(), c2 = b2.queue;
        if (null === c2) throw Error(p2(311));
        c2.lastRenderedReducer = a;
        var d = c2.dispatch, e = c2.pending, f2 = b2.memoizedState;
        if (null !== e) {
          c2.pending = null;
          var g2 = e = e.next;
          do
            f2 = a(f2, g2.action), g2 = g2.next;
          while (g2 !== e);
          He(f2, b2.memoizedState) || (Ug = true);
          b2.memoizedState = f2;
          null === b2.baseQueue && (b2.baseState = f2);
          c2.lastRenderedState = f2;
        }
        return [f2, d];
      }
      function hi() {
      }
      function ii(a, b2) {
        var c2 = N, d = di(), e = b2(), f2 = !He(d.memoizedState, e);
        f2 && (d.memoizedState = e, Ug = true);
        d = d.queue;
        ji(ki.bind(null, c2, d, a), [a]);
        if (d.getSnapshot !== b2 || f2 || null !== P && P.memoizedState.tag & 1) {
          c2.flags |= 2048;
          li(9, mi.bind(null, c2, d, e, b2), void 0, null);
          if (null === R) throw Error(p2(349));
          0 !== (Rh & 30) || ni(c2, b2, e);
        }
        return e;
      }
      function ni(a, b2, c2) {
        a.flags |= 16384;
        a = { getSnapshot: b2, value: c2 };
        b2 = N.updateQueue;
        null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
      }
      function mi(a, b2, c2, d) {
        b2.value = c2;
        b2.getSnapshot = d;
        oi(b2) && pi(a);
      }
      function ki(a, b2, c2) {
        return c2(function() {
          oi(b2) && pi(a);
        });
      }
      function oi(a) {
        var b2 = a.getSnapshot;
        a = a.value;
        try {
          var c2 = b2();
          return !He(a, c2);
        } catch (d) {
          return true;
        }
      }
      function pi(a) {
        var b2 = Zg(a, 1);
        null !== b2 && mh(b2, a, 1, -1);
      }
      function qi(a) {
        var b2 = ci();
        "function" === typeof a && (a = a());
        b2.memoizedState = b2.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
        b2.queue = a;
        a = a.dispatch = ri.bind(null, N, a);
        return [b2.memoizedState, a];
      }
      function li(a, b2, c2, d) {
        a = { tag: a, create: b2, destroy: c2, deps: d, next: null };
        b2 = N.updateQueue;
        null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d = c2.next, c2.next = a, a.next = d, b2.lastEffect = a));
        return a;
      }
      function si() {
        return di().memoizedState;
      }
      function ti(a, b2, c2, d) {
        var e = ci();
        N.flags |= a;
        e.memoizedState = li(1 | b2, c2, void 0, void 0 === d ? null : d);
      }
      function ui(a, b2, c2, d) {
        var e = di();
        d = void 0 === d ? null : d;
        var f2 = void 0;
        if (null !== O) {
          var g2 = O.memoizedState;
          f2 = g2.destroy;
          if (null !== d && Wh(d, g2.deps)) {
            e.memoizedState = li(b2, c2, f2, d);
            return;
          }
        }
        N.flags |= a;
        e.memoizedState = li(1 | b2, c2, f2, d);
      }
      function vi(a, b2) {
        return ti(8390656, 8, a, b2);
      }
      function ji(a, b2) {
        return ui(2048, 8, a, b2);
      }
      function wi(a, b2) {
        return ui(4, 2, a, b2);
      }
      function xi(a, b2) {
        return ui(4, 4, a, b2);
      }
      function yi(a, b2) {
        if ("function" === typeof b2) return a = a(), b2(a), function() {
          b2(null);
        };
        if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
          b2.current = null;
        };
      }
      function zi(a, b2, c2) {
        c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
        return ui(4, 4, yi.bind(null, b2, a), c2);
      }
      function Ai() {
      }
      function Bi(a, b2) {
        var c2 = di();
        b2 = void 0 === b2 ? null : b2;
        var d = c2.memoizedState;
        if (null !== d && null !== b2 && Wh(b2, d[1])) return d[0];
        c2.memoizedState = [a, b2];
        return a;
      }
      function Ci(a, b2) {
        var c2 = di();
        b2 = void 0 === b2 ? null : b2;
        var d = c2.memoizedState;
        if (null !== d && null !== b2 && Wh(b2, d[1])) return d[0];
        a = a();
        c2.memoizedState = [a, b2];
        return a;
      }
      function Di(a, b2, c2) {
        if (0 === (Rh & 21)) return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c2;
        He(c2, b2) || (c2 = yc(), N.lanes |= c2, hh |= c2, a.baseState = true);
        return b2;
      }
      function Ei(a, b2) {
        var c2 = C;
        C = 0 !== c2 && 4 > c2 ? c2 : 4;
        a(true);
        var d = Qh.transition;
        Qh.transition = {};
        try {
          a(false), b2();
        } finally {
          C = c2, Qh.transition = d;
        }
      }
      function Fi() {
        return di().memoizedState;
      }
      function Gi(a, b2, c2) {
        var d = lh(a);
        c2 = { lane: d, action: c2, hasEagerState: false, eagerState: null, next: null };
        if (Hi(a)) Ii(b2, c2);
        else if (c2 = Yg(a, b2, c2, d), null !== c2) {
          var e = L();
          mh(c2, a, d, e);
          Ji(c2, b2, d);
        }
      }
      function ri(a, b2, c2) {
        var d = lh(a), e = { lane: d, action: c2, hasEagerState: false, eagerState: null, next: null };
        if (Hi(a)) Ii(b2, e);
        else {
          var f2 = a.alternate;
          if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
            var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
            e.hasEagerState = true;
            e.eagerState = h2;
            if (He(h2, g2)) {
              var k = b2.interleaved;
              null === k ? (e.next = e, Xg(b2)) : (e.next = k.next, k.next = e);
              b2.interleaved = e;
              return;
            }
          } catch (l) {
          } finally {
          }
          c2 = Yg(a, b2, e, d);
          null !== c2 && (e = L(), mh(c2, a, d, e), Ji(c2, b2, d));
        }
      }
      function Hi(a) {
        var b2 = a.alternate;
        return a === N || null !== b2 && b2 === N;
      }
      function Ii(a, b2) {
        Th = Sh = true;
        var c2 = a.pending;
        null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
        a.pending = b2;
      }
      function Ji(a, b2, c2) {
        if (0 !== (c2 & 4194240)) {
          var d = b2.lanes;
          d &= a.pendingLanes;
          c2 |= d;
          b2.lanes = c2;
          Cc(a, c2);
        }
      }
      var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false };
      var Yh = { readContext: Vg, useCallback: function(a, b2) {
        ci().memoizedState = [a, void 0 === b2 ? null : b2];
        return a;
      }, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b2, c2) {
        c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
        return ti(
          4194308,
          4,
          yi.bind(null, b2, a),
          c2
        );
      }, useLayoutEffect: function(a, b2) {
        return ti(4194308, 4, a, b2);
      }, useInsertionEffect: function(a, b2) {
        return ti(4, 2, a, b2);
      }, useMemo: function(a, b2) {
        var c2 = ci();
        b2 = void 0 === b2 ? null : b2;
        a = a();
        c2.memoizedState = [a, b2];
        return a;
      }, useReducer: function(a, b2, c2) {
        var d = ci();
        b2 = void 0 !== c2 ? c2(b2) : b2;
        d.memoizedState = d.baseState = b2;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
        d.queue = a;
        a = a.dispatch = Gi.bind(null, N, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b2 = ci();
        a = { current: a };
        return b2.memoizedState = a;
      }, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
        return ci().memoizedState = a;
      }, useTransition: function() {
        var a = qi(false), b2 = a[0];
        a = Ei.bind(null, a[1]);
        ci().memoizedState = a;
        return [b2, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b2, c2) {
        var d = N, e = ci();
        if (I) {
          if (void 0 === c2) throw Error(p2(407));
          c2 = c2();
        } else {
          c2 = b2();
          if (null === R) throw Error(p2(349));
          0 !== (Rh & 30) || ni(d, b2, c2);
        }
        e.memoizedState = c2;
        var f2 = { value: c2, getSnapshot: b2 };
        e.queue = f2;
        vi(ki.bind(
          null,
          d,
          f2,
          a
        ), [a]);
        d.flags |= 2048;
        li(9, mi.bind(null, d, f2, c2, b2), void 0, null);
        return c2;
      }, useId: function() {
        var a = ci(), b2 = R.identifierPrefix;
        if (I) {
          var c2 = sg;
          var d = rg;
          c2 = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c2;
          b2 = ":" + b2 + "R" + c2;
          c2 = Uh++;
          0 < c2 && (b2 += "H" + c2.toString(32));
          b2 += ":";
        } else c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
        return a.memoizedState = b2;
      }, unstable_isNewReconciler: false };
      var Zh = {
        readContext: Vg,
        useCallback: Bi,
        useContext: Vg,
        useEffect: ji,
        useImperativeHandle: zi,
        useInsertionEffect: wi,
        useLayoutEffect: xi,
        useMemo: Ci,
        useReducer: fi,
        useRef: si,
        useState: function() {
          return fi(ei);
        },
        useDebugValue: Ai,
        useDeferredValue: function(a) {
          var b2 = di();
          return Di(b2, O.memoizedState, a);
        },
        useTransition: function() {
          var a = fi(ei)[0], b2 = di().memoizedState;
          return [a, b2];
        },
        useMutableSource: hi,
        useSyncExternalStore: ii,
        useId: Fi,
        unstable_isNewReconciler: false
      };
      var $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
        return gi(ei);
      }, useDebugValue: Ai, useDeferredValue: function(a) {
        var b2 = di();
        return null === O ? b2.memoizedState = a : Di(b2, O.memoizedState, a);
      }, useTransition: function() {
        var a = gi(ei)[0], b2 = di().memoizedState;
        return [a, b2];
      }, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
      function Ki(a, b2) {
        try {
          var c2 = "", d = b2;
          do
            c2 += Pa(d), d = d.return;
          while (d);
          var e = c2;
        } catch (f2) {
          e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
        }
        return { value: a, source: b2, stack: e, digest: null };
      }
      function Li(a, b2, c2) {
        return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
      }
      function Mi(a, b2) {
        try {
          console.error(b2.value);
        } catch (c2) {
          setTimeout(function() {
            throw c2;
          });
        }
      }
      var Ni = "function" === typeof WeakMap ? WeakMap : Map;
      function Oi(a, b2, c2) {
        c2 = ch(-1, c2);
        c2.tag = 3;
        c2.payload = { element: null };
        var d = b2.value;
        c2.callback = function() {
          Pi || (Pi = true, Qi = d);
          Mi(a, b2);
        };
        return c2;
      }
      function Ri(a, b2, c2) {
        c2 = ch(-1, c2);
        c2.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b2.value;
          c2.payload = function() {
            return d(e);
          };
          c2.callback = function() {
            Mi(a, b2);
          };
        }
        var f2 = a.stateNode;
        null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
          Mi(a, b2);
          "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
          var c3 = b2.stack;
          this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
        });
        return c2;
      }
      function Ti(a, b2, c2) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Ni();
          var e = /* @__PURE__ */ new Set();
          d.set(b2, e);
        } else e = d.get(b2), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b2, e));
        e.has(c2) || (e.add(c2), a = Ui.bind(null, a, b2, c2), b2.then(a, a));
      }
      function Vi(a) {
        do {
          var b2;
          if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
          if (b2) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Wi(a, b2, c2, d, e) {
        if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e;
        return a;
      }
      var Xi = ua.ReactCurrentOwner;
      var Ug = false;
      function Yi(a, b2, c2, d) {
        b2.child = null === a ? Ch(b2, null, c2, d) : Bh(b2, a.child, c2, d);
      }
      function Zi(a, b2, c2, d, e) {
        c2 = c2.render;
        var f2 = b2.ref;
        Tg(b2, e);
        d = Xh(a, b2, c2, d, f2, e);
        c2 = bi();
        if (null !== a && !Ug) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, $i(a, b2, e);
        I && c2 && vg(b2);
        b2.flags |= 1;
        Yi(a, b2, d, e);
        return b2.child;
      }
      function aj(a, b2, c2, d, e) {
        if (null === a) {
          var f2 = c2.type;
          if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, cj(a, b2, f2, d, e);
          a = yh(c2.type, null, d, b2, b2.mode, e);
          a.ref = b2.ref;
          a.return = b2;
          return b2.child = a;
        }
        f2 = a.child;
        if (0 === (a.lanes & e)) {
          var g2 = f2.memoizedProps;
          c2 = c2.compare;
          c2 = null !== c2 ? c2 : Ie;
          if (c2(g2, d) && a.ref === b2.ref) return $i(a, b2, e);
        }
        b2.flags |= 1;
        a = wh(f2, d);
        a.ref = b2.ref;
        a.return = b2;
        return b2.child = a;
      }
      function cj(a, b2, c2, d, e) {
        if (null !== a) {
          var f2 = a.memoizedProps;
          if (Ie(f2, d) && a.ref === b2.ref) if (Ug = false, b2.pendingProps = d = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (Ug = true);
          else return b2.lanes = a.lanes, $i(a, b2, e);
        }
        return dj(a, b2, c2, d, e);
      }
      function ej(a, b2, c2) {
        var d = b2.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c2;
        else {
          if (0 === (c2 & 1073741824)) return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G(fj, gj), gj |= a, null;
          b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f2 ? f2.baseLanes : c2;
          G(fj, gj);
          gj |= d;
        }
        else null !== f2 ? (d = f2.baseLanes | c2, b2.memoizedState = null) : d = c2, G(fj, gj), gj |= d;
        Yi(a, b2, e, c2);
        return b2.child;
      }
      function hj(a, b2) {
        var c2 = b2.ref;
        if (null === a && null !== c2 || null !== a && a.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
      }
      function dj(a, b2, c2, d, e) {
        var f2 = Zf(c2) ? Xf : H.current;
        f2 = Yf(b2, f2);
        Tg(b2, e);
        c2 = Xh(a, b2, c2, d, f2, e);
        d = bi();
        if (null !== a && !Ug) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, $i(a, b2, e);
        I && d && vg(b2);
        b2.flags |= 1;
        Yi(a, b2, c2, e);
        return b2.child;
      }
      function ij(a, b2, c2, d, e) {
        if (Zf(c2)) {
          var f2 = true;
          cg(b2);
        } else f2 = false;
        Tg(b2, e);
        if (null === b2.stateNode) jj(a, b2), ph(b2, c2, d), rh(b2, c2, d, e), d = true;
        else if (null === a) {
          var g2 = b2.stateNode, h2 = b2.memoizedProps;
          g2.props = h2;
          var k = g2.context, l = c2.contextType;
          "object" === typeof l && null !== l ? l = Vg(l) : (l = Zf(c2) ? Xf : H.current, l = Yf(b2, l));
          var m2 = c2.getDerivedStateFromProps, q = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
          q || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d || k !== l) && qh(b2, g2, d, l);
          $g = false;
          var r = b2.memoizedState;
          g2.state = r;
          gh(b2, d, g2, e);
          k = b2.memoizedState;
          h2 !== d || r !== k || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d), k = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d, r, k, l)) ? (q || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d, b2.memoizedState = k), g2.props = d, g2.state = k, g2.context = l, d = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d = false);
        } else {
          g2 = b2.stateNode;
          bh(a, b2);
          h2 = b2.memoizedProps;
          l = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
          g2.props = l;
          q = b2.pendingProps;
          r = g2.context;
          k = c2.contextType;
          "object" === typeof k && null !== k ? k = Vg(k) : (k = Zf(c2) ? Xf : H.current, k = Yf(b2, k));
          var y2 = c2.getDerivedStateFromProps;
          (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q || r !== k) && qh(b2, g2, d, k);
          $g = false;
          r = b2.memoizedState;
          g2.state = r;
          gh(b2, d, g2, e);
          var n = b2.memoizedState;
          h2 !== q || r !== n || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d), n = b2.memoizedState), (l = $g || oh(b2, c2, l, d, r, n, k) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d, n, k), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d, b2.memoizedState = n), g2.props = d, g2.state = n, g2.context = k, d = l) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b2.flags |= 1024), d = false);
        }
        return kj(a, b2, c2, d, f2, e);
      }
      function kj(a, b2, c2, d, e, f2) {
        hj(a, b2);
        var g2 = 0 !== (b2.flags & 128);
        if (!d && !g2) return e && dg(b2, c2, false), $i(a, b2, f2);
        d = b2.stateNode;
        Xi.current = b2;
        var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d.render();
        b2.flags |= 1;
        null !== a && g2 ? (b2.child = Bh(b2, a.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a, b2, h2, f2);
        b2.memoizedState = d.state;
        e && dg(b2, c2, true);
        return b2.child;
      }
      function lj(a) {
        var b2 = a.stateNode;
        b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
        Ih(a, b2.containerInfo);
      }
      function mj(a, b2, c2, d, e) {
        Ig();
        Jg(e);
        b2.flags |= 256;
        Yi(a, b2, c2, d);
        return b2.child;
      }
      var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function oj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function pj(a, b2, c2) {
        var d = b2.pendingProps, e = M.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
        (h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
        if (h2) f2 = true, b2.flags &= -129;
        else if (null === a || null !== a.memoizedState) e |= 1;
        G(M, e & 1);
        if (null === a) {
          Eg(b2);
          a = b2.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
          g2 = d.children;
          a = d.fallback;
          return f2 ? (d = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d, 0, null), a = Ah(a, d, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a) : rj(b2, g2);
        }
        e = a.memoizedState;
        if (null !== e && (h2 = e.dehydrated, null !== h2)) return sj(a, b2, g2, d, h2, e, c2);
        if (f2) {
          f2 = d.fallback;
          g2 = b2.mode;
          e = a.child;
          h2 = e.sibling;
          var k = { mode: "hidden", children: d.children };
          0 === (g2 & 1) && b2.child !== e ? (d = b2.child, d.childLanes = 0, d.pendingProps = k, b2.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
          null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
          f2.return = b2;
          d.return = b2;
          d.sibling = f2;
          b2.child = d;
          d = f2;
          f2 = b2.child;
          g2 = a.child.memoizedState;
          g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
          f2.memoizedState = g2;
          f2.childLanes = a.childLanes & ~c2;
          b2.memoizedState = nj;
          return d;
        }
        f2 = a.child;
        a = f2.sibling;
        d = wh(f2, { mode: "visible", children: d.children });
        0 === (b2.mode & 1) && (d.lanes = c2);
        d.return = b2;
        d.sibling = null;
        null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
        b2.child = d;
        b2.memoizedState = null;
        return d;
      }
      function rj(a, b2) {
        b2 = qj({ mode: "visible", children: b2 }, a.mode, 0, null);
        b2.return = a;
        return a.child = b2;
      }
      function tj(a, b2, c2, d) {
        null !== d && Jg(d);
        Bh(b2, a.child, null, c2);
        a = rj(b2, b2.pendingProps.children);
        a.flags |= 2;
        b2.memoizedState = null;
        return a;
      }
      function sj(a, b2, c2, d, e, f2, g2) {
        if (c2) {
          if (b2.flags & 256) return b2.flags &= -257, d = Li(Error(p2(422))), tj(a, b2, g2, d);
          if (null !== b2.memoizedState) return b2.child = a.child, b2.flags |= 128, null;
          f2 = d.fallback;
          e = b2.mode;
          d = qj({ mode: "visible", children: d.children }, e, 0, null);
          f2 = Ah(f2, e, g2, null);
          f2.flags |= 2;
          d.return = b2;
          f2.return = b2;
          d.sibling = f2;
          b2.child = d;
          0 !== (b2.mode & 1) && Bh(b2, a.child, null, g2);
          b2.child.memoizedState = oj(g2);
          b2.memoizedState = nj;
          return f2;
        }
        if (0 === (b2.mode & 1)) return tj(a, b2, g2, null);
        if ("$!" === e.data) {
          d = e.nextSibling && e.nextSibling.dataset;
          if (d) var h2 = d.dgst;
          d = h2;
          f2 = Error(p2(419));
          d = Li(f2, d, void 0);
          return tj(a, b2, g2, d);
        }
        h2 = 0 !== (g2 & a.childLanes);
        if (Ug || h2) {
          d = R;
          if (null !== d) {
            switch (g2 & -g2) {
              case 4:
                e = 2;
                break;
              case 16:
                e = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e = 32;
                break;
              case 536870912:
                e = 268435456;
                break;
              default:
                e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g2)) ? 0 : e;
            0 !== e && e !== f2.retryLane && (f2.retryLane = e, Zg(a, e), mh(d, a, e, -1));
          }
          uj();
          d = Li(Error(p2(421)));
          return tj(a, b2, g2, d);
        }
        if ("$?" === e.data) return b2.flags |= 128, b2.child = a.child, b2 = vj.bind(null, a), e._reactRetry = b2, null;
        a = f2.treeContext;
        yg = Lf(e.nextSibling);
        xg = b2;
        I = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
        b2 = rj(b2, d.children);
        b2.flags |= 4096;
        return b2;
      }
      function wj(a, b2, c2) {
        a.lanes |= b2;
        var d = a.alternate;
        null !== d && (d.lanes |= b2);
        Sg(a.return, b2, c2);
      }
      function xj(a, b2, c2, d, e) {
        var f2 = a.memoizedState;
        null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d, tail: c2, tailMode: e } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c2, f2.tailMode = e);
      }
      function yj(a, b2, c2) {
        var d = b2.pendingProps, e = d.revealOrder, f2 = d.tail;
        Yi(a, b2, d.children, c2);
        d = M.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b2.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b2.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && wj(a, c2, b2);
            else if (19 === a.tag) wj(a, c2, b2);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b2) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b2) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G(M, d);
        if (0 === (b2.mode & 1)) b2.memoizedState = null;
        else switch (e) {
          case "forwards":
            c2 = b2.child;
            for (e = null; null !== c2; ) a = c2.alternate, null !== a && null === Mh(a) && (e = c2), c2 = c2.sibling;
            c2 = e;
            null === c2 ? (e = b2.child, b2.child = null) : (e = c2.sibling, c2.sibling = null);
            xj(b2, false, e, c2, f2);
            break;
          case "backwards":
            c2 = null;
            e = b2.child;
            for (b2.child = null; null !== e; ) {
              a = e.alternate;
              if (null !== a && null === Mh(a)) {
                b2.child = e;
                break;
              }
              a = e.sibling;
              e.sibling = c2;
              c2 = e;
              e = a;
            }
            xj(b2, true, c2, null, f2);
            break;
          case "together":
            xj(b2, false, null, null, void 0);
            break;
          default:
            b2.memoizedState = null;
        }
        return b2.child;
      }
      function jj(a, b2) {
        0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
      }
      function $i(a, b2, c2) {
        null !== a && (b2.dependencies = a.dependencies);
        hh |= b2.lanes;
        if (0 === (c2 & b2.childLanes)) return null;
        if (null !== a && b2.child !== a.child) throw Error(p2(153));
        if (null !== b2.child) {
          a = b2.child;
          c2 = wh(a, a.pendingProps);
          b2.child = c2;
          for (c2.return = b2; null !== a.sibling; ) a = a.sibling, c2 = c2.sibling = wh(a, a.pendingProps), c2.return = b2;
          c2.sibling = null;
        }
        return b2.child;
      }
      function zj(a, b2, c2) {
        switch (b2.tag) {
          case 3:
            lj(b2);
            Ig();
            break;
          case 5:
            Kh(b2);
            break;
          case 1:
            Zf(b2.type) && cg(b2);
            break;
          case 4:
            Ih(b2, b2.stateNode.containerInfo);
            break;
          case 10:
            var d = b2.type._context, e = b2.memoizedProps.value;
            G(Mg, d._currentValue);
            d._currentValue = e;
            break;
          case 13:
            d = b2.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G(M, M.current & 1), b2.flags |= 128, null;
              if (0 !== (c2 & b2.child.childLanes)) return pj(a, b2, c2);
              G(M, M.current & 1);
              a = $i(a, b2, c2);
              return null !== a ? a.sibling : null;
            }
            G(M, M.current & 1);
            break;
          case 19:
            d = 0 !== (c2 & b2.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return yj(a, b2, c2);
              b2.flags |= 128;
            }
            e = b2.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G(M, M.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b2.lanes = 0, ej(a, b2, c2);
        }
        return $i(a, b2, c2);
      }
      var Aj;
      var Bj;
      var Cj;
      var Dj;
      Aj = function(a, b2) {
        for (var c2 = b2.child; null !== c2; ) {
          if (5 === c2.tag || 6 === c2.tag) a.appendChild(c2.stateNode);
          else if (4 !== c2.tag && null !== c2.child) {
            c2.child.return = c2;
            c2 = c2.child;
            continue;
          }
          if (c2 === b2) break;
          for (; null === c2.sibling; ) {
            if (null === c2.return || c2.return === b2) return;
            c2 = c2.return;
          }
          c2.sibling.return = c2.return;
          c2 = c2.sibling;
        }
      };
      Bj = function() {
      };
      Cj = function(a, b2, c2, d) {
        var e = a.memoizedProps;
        if (e !== d) {
          a = b2.stateNode;
          Hh(Eh.current);
          var f2 = null;
          switch (c2) {
            case "input":
              e = Ya(a, e);
              d = Ya(a, d);
              f2 = [];
              break;
            case "select":
              e = A({}, e, { value: void 0 });
              d = A({}, d, { value: void 0 });
              f2 = [];
              break;
            case "textarea":
              e = gb(a, e);
              d = gb(a, d);
              f2 = [];
              break;
            default:
              "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c2, d);
          var g2;
          c2 = null;
          for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
            var h2 = e[l];
            for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
          } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f2 || (f2 = []) : (f2 = f2 || []).push(l, null));
          for (l in d) {
            var k = d[l];
            h2 = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h2 && (null != k || null != h2)) if ("style" === l) if (h2) {
              for (g2 in h2) !h2.hasOwnProperty(g2) || k && k.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
              for (g2 in k) k.hasOwnProperty(g2) && h2[g2] !== k[g2] && (c2 || (c2 = {}), c2[g2] = k[g2]);
            } else c2 || (f2 || (f2 = []), f2.push(
              l,
              c2
            )), c2 = k;
            else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k && h2 !== k && (f2 = f2 || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f2 = f2 || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f2 || h2 === k || (f2 = [])) : (f2 = f2 || []).push(l, k));
          }
          c2 && (f2 = f2 || []).push("style", c2);
          var l = f2;
          if (b2.updateQueue = l) b2.flags |= 4;
        }
      };
      Dj = function(a, b2, c2, d) {
        c2 !== d && (b2.flags |= 4);
      };
      function Ej(a, b2) {
        if (!I) switch (a.tailMode) {
          case "hidden":
            b2 = a.tail;
            for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
            null === c2 ? a.tail = null : c2.sibling = null;
            break;
          case "collapsed":
            c2 = a.tail;
            for (var d = null; null !== c2; ) null !== c2.alternate && (d = c2), c2 = c2.sibling;
            null === d ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S(a) {
        var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d = 0;
        if (b2) for (var e = a.child; null !== e; ) c2 |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
        else for (e = a.child; null !== e; ) c2 |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c2;
        return b2;
      }
      function Fj(a, b2, c2) {
        var d = b2.pendingProps;
        wg(b2);
        switch (b2.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S(b2), null;
          case 1:
            return Zf(b2.type) && $f(), S(b2), null;
          case 3:
            d = b2.stateNode;
            Jh();
            E(Wf);
            E(H);
            Oh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
            Bj(a, b2);
            S(b2);
            return null;
          case 5:
            Lh(b2);
            var e = Hh(Gh.current);
            c2 = b2.type;
            if (null !== a && null != b2.stateNode) Cj(a, b2, c2, d, e), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
            else {
              if (!d) {
                if (null === b2.stateNode) throw Error(p2(166));
                S(b2);
                return null;
              }
              a = Hh(Eh.current);
              if (Gg(b2)) {
                d = b2.stateNode;
                c2 = b2.type;
                var f2 = b2.memoizedProps;
                d[Of] = b2;
                d[Pf] = f2;
                a = 0 !== (b2.mode & 1);
                switch (c2) {
                  case "dialog":
                    D("cancel", d);
                    D("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], d);
                    break;
                  case "source":
                    D("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      d
                    );
                    D("load", d);
                    break;
                  case "details":
                    D("toggle", d);
                    break;
                  case "input":
                    Za(d, f2);
                    D("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f2.multiple };
                    D("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f2), D("invalid", d);
                }
                ub(c2, f2);
                e = null;
                for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
                  var h2 = f2[g2];
                  "children" === g2 ? "string" === typeof h2 ? d.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d.textContent, h2, a), e = ["children", h2]) : "number" === typeof h2 && d.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                    d.textContent,
                    h2,
                    a
                  ), e = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D("scroll", d);
                }
                switch (c2) {
                  case "input":
                    Va(d);
                    db(d, f2, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f2.onClick && (d.onclick = Bf);
                }
                d = e;
                b2.updateQueue = d;
                null !== d && (b2.flags |= 4);
              } else {
                g2 = 9 === e.nodeType ? e : e.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g2.createElement(c2, { is: d.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d.multiple ? g2.multiple = true : d.size && (g2.size = d.size))) : a = g2.createElementNS(a, c2);
                a[Of] = b2;
                a[Pf] = d;
                Aj(a, b2, false, false);
                b2.stateNode = a;
                a: {
                  g2 = vb(c2, d);
                  switch (c2) {
                    case "dialog":
                      D("cancel", a);
                      D("close", a);
                      e = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a);
                      e = d;
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < lf.length; e++) D(lf[e], a);
                      e = d;
                      break;
                    case "source":
                      D("error", a);
                      e = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D(
                        "error",
                        a
                      );
                      D("load", a);
                      e = d;
                      break;
                    case "details":
                      D("toggle", a);
                      e = d;
                      break;
                    case "input":
                      Za(a, d);
                      e = Ya(a, d);
                      D("invalid", a);
                      break;
                    case "option":
                      e = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e = A({}, d, { value: void 0 });
                      D("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e = gb(a, d);
                      D("invalid", a);
                      break;
                    default:
                      e = d;
                  }
                  ub(c2, e);
                  h2 = e;
                  for (f2 in h2) if (h2.hasOwnProperty(f2)) {
                    var k = h2[f2];
                    "style" === f2 ? sb(a, k) : "dangerouslySetInnerHTML" === f2 ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f2 ? "string" === typeof k ? ("textarea" !== c2 || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k && "onScroll" === f2 && D("scroll", a) : null != k && ta(a, f2, k, g2));
                  }
                  switch (c2) {
                    case "input":
                      Va(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f2 = d.value;
                      null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e.onClick && (a.onclick = Bf);
                  }
                  switch (c2) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b2.flags |= 4);
              }
              null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
            }
            S(b2);
            return null;
          case 6:
            if (a && null != b2.stateNode) Dj(a, b2, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b2.stateNode) throw Error(p2(166));
              c2 = Hh(Gh.current);
              Hh(Eh.current);
              if (Gg(b2)) {
                d = b2.stateNode;
                c2 = b2.memoizedProps;
                d[Of] = b2;
                if (f2 = d.nodeValue !== c2) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c2, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c2, 0 !== (a.mode & 1));
                  }
                }
                f2 && (b2.flags |= 4);
              } else d = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d), d[Of] = b2, b2.stateNode = d;
            }
            S(b2);
            return null;
          case 13:
            E(M);
            d = b2.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
              else if (f2 = Gg(b2), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f2) throw Error(p2(318));
                  f2 = b2.memoizedState;
                  f2 = null !== f2 ? f2.dehydrated : null;
                  if (!f2) throw Error(p2(317));
                  f2[Of] = b2;
                } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
                S(b2);
                f2 = false;
              } else null !== zg && (Gj(zg), zg = null), f2 = true;
              if (!f2) return b2.flags & 65536 ? b2 : null;
            }
            if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
            null !== b2.updateQueue && (b2.flags |= 4);
            S(b2);
            return null;
          case 4:
            return Jh(), Bj(a, b2), null === a && sf(b2.stateNode.containerInfo), S(b2), null;
          case 10:
            return Rg(b2.type._context), S(b2), null;
          case 17:
            return Zf(b2.type) && $f(), S(b2), null;
          case 19:
            E(M);
            f2 = b2.memoizedState;
            if (null === f2) return S(b2), null;
            d = 0 !== (b2.flags & 128);
            g2 = f2.rendering;
            if (null === g2) if (d) Ej(f2, false);
            else {
              if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b2.child; null !== a; ) {
                g2 = Mh(a);
                if (null !== g2) {
                  b2.flags |= 128;
                  Ej(f2, false);
                  d = g2.updateQueue;
                  null !== d && (b2.updateQueue = d, b2.flags |= 4);
                  b2.subtreeFlags = 0;
                  d = c2;
                  for (c2 = b2.child; null !== c2; ) f2 = c2, a = d, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
                  G(M, M.current & 1 | 2);
                  return b2.child;
                }
                a = a.sibling;
              }
              null !== f2.tail && B() > Hj && (b2.flags |= 128, d = true, Ej(f2, false), b2.lanes = 4194304);
            }
            else {
              if (!d) if (a = Mh(g2), null !== a) {
                if (b2.flags |= 128, d = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I) return S(b2), null;
              } else 2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d = true, Ej(f2, false), b2.lanes = 4194304);
              f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
            }
            if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = M.current, G(M, d ? c2 & 1 | 2 : c2 & 1), b2;
            S(b2);
            return null;
          case 22:
          case 23:
            return Ij(), d = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d && (b2.flags |= 8192), d && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S(b2), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p2(156, b2.tag));
      }
      function Jj(a, b2) {
        wg(b2);
        switch (b2.tag) {
          case 1:
            return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
          case 3:
            return Jh(), E(Wf), E(H), Oh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
          case 5:
            return Lh(b2), null;
          case 13:
            E(M);
            a = b2.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b2.alternate) throw Error(p2(340));
              Ig();
            }
            a = b2.flags;
            return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
          case 19:
            return E(M), null;
          case 4:
            return Jh(), null;
          case 10:
            return Rg(b2.type._context), null;
          case 22:
          case 23:
            return Ij(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Kj = false;
      var U = false;
      var Lj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Mj(a, b2) {
        var c2 = a.ref;
        if (null !== c2) if ("function" === typeof c2) try {
          c2(null);
        } catch (d) {
          W(a, b2, d);
        }
        else c2.current = null;
      }
      function Nj(a, b2, c2) {
        try {
          c2();
        } catch (d) {
          W(a, b2, d);
        }
      }
      var Oj = false;
      function Pj(a, b2) {
        Cf = dd;
        a = Me();
        if (Ne(a)) {
          if ("selectionStart" in a) var c2 = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
            var d = c2.getSelection && c2.getSelection();
            if (d && 0 !== d.rangeCount) {
              c2 = d.anchorNode;
              var e = d.anchorOffset, f2 = d.focusNode;
              d = d.focusOffset;
              try {
                c2.nodeType, f2.nodeType;
              } catch (F) {
                c2 = null;
                break a;
              }
              var g2 = 0, h2 = -1, k = -1, l = 0, m2 = 0, q = a, r = null;
              b: for (; ; ) {
                for (var y2; ; ) {
                  q !== c2 || 0 !== e && 3 !== q.nodeType || (h2 = g2 + e);
                  q !== f2 || 0 !== d && 3 !== q.nodeType || (k = g2 + d);
                  3 === q.nodeType && (g2 += q.nodeValue.length);
                  if (null === (y2 = q.firstChild)) break;
                  r = q;
                  q = y2;
                }
                for (; ; ) {
                  if (q === a) break b;
                  r === c2 && ++l === e && (h2 = g2);
                  r === f2 && ++m2 === d && (k = g2);
                  if (null !== (y2 = q.nextSibling)) break;
                  q = r;
                  r = q.parentNode;
                }
                q = y2;
              }
              c2 = -1 === h2 || -1 === k ? null : { start: h2, end: k };
            } else c2 = null;
          }
          c2 = c2 || { start: 0, end: 0 };
        } else c2 = null;
        Df = { focusedElem: a, selectionRange: c2 };
        dd = false;
        for (V = b2; null !== V; ) if (b2 = V, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a) a.return = b2, V = a;
        else for (; null !== V; ) {
          b2 = V;
          try {
            var n = b2.alternate;
            if (0 !== (b2.flags & 1024)) switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var t = n.memoizedProps, J = n.memoizedState, x = b2.stateNode, w2 = x.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t : Lg(b2.type, t), J);
                  x.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b2.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p2(163));
            }
          } catch (F) {
            W(b2, b2.return, F);
          }
          a = b2.sibling;
          if (null !== a) {
            a.return = b2.return;
            V = a;
            break;
          }
          V = b2.return;
        }
        n = Oj;
        Oj = false;
        return n;
      }
      function Qj(a, b2, c2) {
        var d = b2.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e = d = d.next;
          do {
            if ((e.tag & a) === a) {
              var f2 = e.destroy;
              e.destroy = void 0;
              void 0 !== f2 && Nj(b2, c2, f2);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Rj(a, b2) {
        b2 = b2.updateQueue;
        b2 = null !== b2 ? b2.lastEffect : null;
        if (null !== b2) {
          var c2 = b2 = b2.next;
          do {
            if ((c2.tag & a) === a) {
              var d = c2.create;
              c2.destroy = d();
            }
            c2 = c2.next;
          } while (c2 !== b2);
        }
      }
      function Sj(a) {
        var b2 = a.ref;
        if (null !== b2) {
          var c2 = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c2;
              break;
            default:
              a = c2;
          }
          "function" === typeof b2 ? b2(a) : b2.current = a;
        }
      }
      function Tj(a) {
        var b2 = a.alternate;
        null !== b2 && (a.alternate = null, Tj(b2));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Uj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Vj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Uj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Wj(a, b2, c2) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b2, c2), a = a.sibling; null !== a; ) Wj(a, b2, c2), a = a.sibling;
      }
      function Xj(a, b2, c2) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Xj(a, b2, c2), a = a.sibling; null !== a; ) Xj(a, b2, c2), a = a.sibling;
      }
      var X = null;
      var Yj = false;
      function Zj(a, b2, c2) {
        for (c2 = c2.child; null !== c2; ) ak(a, b2, c2), c2 = c2.sibling;
      }
      function ak(a, b2, c2) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c2);
        } catch (h2) {
        }
        switch (c2.tag) {
          case 5:
            U || Mj(c2, b2);
          case 6:
            var d = X, e = Yj;
            X = null;
            Zj(a, b2, c2);
            X = d;
            Yj = e;
            null !== X && (Yj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X.removeChild(c2.stateNode));
            break;
          case 18:
            null !== X && (Yj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X, c2.stateNode));
            break;
          case 4:
            d = X;
            e = Yj;
            X = c2.stateNode.containerInfo;
            Yj = true;
            Zj(a, b2, c2);
            X = d;
            Yj = e;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U && (d = c2.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e = d = d.next;
              do {
                var f2 = e, g2 = f2.destroy;
                f2 = f2.tag;
                void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
                e = e.next;
              } while (e !== d);
            }
            Zj(a, b2, c2);
            break;
          case 1:
            if (!U && (Mj(c2, b2), d = c2.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c2.memoizedProps, d.state = c2.memoizedState, d.componentWillUnmount();
            } catch (h2) {
              W(c2, b2, h2);
            }
            Zj(a, b2, c2);
            break;
          case 21:
            Zj(a, b2, c2);
            break;
          case 22:
            c2.mode & 1 ? (U = (d = U) || null !== c2.memoizedState, Zj(a, b2, c2), U = d) : Zj(a, b2, c2);
            break;
          default:
            Zj(a, b2, c2);
        }
      }
      function bk(a) {
        var b2 = a.updateQueue;
        if (null !== b2) {
          a.updateQueue = null;
          var c2 = a.stateNode;
          null === c2 && (c2 = a.stateNode = new Lj());
          b2.forEach(function(b3) {
            var d = ck.bind(null, a, b3);
            c2.has(b3) || (c2.add(b3), b3.then(d, d));
          });
        }
      }
      function dk(a, b2) {
        var c2 = b2.deletions;
        if (null !== c2) for (var d = 0; d < c2.length; d++) {
          var e = c2[d];
          try {
            var f2 = a, g2 = b2, h2 = g2;
            a: for (; null !== h2; ) {
              switch (h2.tag) {
                case 5:
                  X = h2.stateNode;
                  Yj = false;
                  break a;
                case 3:
                  X = h2.stateNode.containerInfo;
                  Yj = true;
                  break a;
                case 4:
                  X = h2.stateNode.containerInfo;
                  Yj = true;
                  break a;
              }
              h2 = h2.return;
            }
            if (null === X) throw Error(p2(160));
            ak(f2, g2, e);
            X = null;
            Yj = false;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
          } catch (l) {
            W(e, b2, l);
          }
        }
        if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) ek(b2, a), b2 = b2.sibling;
      }
      function ek(a, b2) {
        var c2 = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            dk(b2, a);
            fk(a);
            if (d & 4) {
              try {
                Qj(3, a, a.return), Rj(3, a);
              } catch (t) {
                W(a, a.return, t);
              }
              try {
                Qj(5, a, a.return);
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 1:
            dk(b2, a);
            fk(a);
            d & 512 && null !== c2 && Mj(c2, c2.return);
            break;
          case 5:
            dk(b2, a);
            fk(a);
            d & 512 && null !== c2 && Mj(c2, c2.return);
            if (a.flags & 32) {
              var e = a.stateNode;
              try {
                ob(e, "");
              } catch (t) {
                W(a, a.return, t);
              }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
              var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a.type, k = a.updateQueue;
              a.updateQueue = null;
              if (null !== k) try {
                "input" === h2 && "radio" === f2.type && null != f2.name && ab(e, f2);
                vb(h2, g2);
                var l = vb(h2, f2);
                for (g2 = 0; g2 < k.length; g2 += 2) {
                  var m2 = k[g2], q = k[g2 + 1];
                  "style" === m2 ? sb(e, q) : "dangerouslySetInnerHTML" === m2 ? nb(e, q) : "children" === m2 ? ob(e, q) : ta(e, m2, q, l);
                }
                switch (h2) {
                  case "input":
                    bb(e, f2);
                    break;
                  case "textarea":
                    ib(e, f2);
                    break;
                  case "select":
                    var r = e._wrapperState.wasMultiple;
                    e._wrapperState.wasMultiple = !!f2.multiple;
                    var y2 = f2.value;
                    null != y2 ? fb(e, !!f2.multiple, y2, false) : r !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e[Pf] = f2;
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 6:
            dk(b2, a);
            fk(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p2(162));
              e = a.stateNode;
              f2 = a.memoizedProps;
              try {
                e.nodeValue = f2;
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 3:
            dk(b2, a);
            fk(a);
            if (d & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
              bd(b2.containerInfo);
            } catch (t) {
              W(a, a.return, t);
            }
            break;
          case 4:
            dk(b2, a);
            fk(a);
            break;
          case 13:
            dk(b2, a);
            fk(a);
            e = a.child;
            e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
            d & 4 && bk(a);
            break;
          case 22:
            m2 = null !== c2 && null !== c2.memoizedState;
            a.mode & 1 ? (U = (l = U) || m2, dk(b2, a), U = l) : dk(b2, a);
            fk(a);
            if (d & 8192) {
              l = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l) && !m2 && 0 !== (a.mode & 1)) for (V = a, m2 = a.child; null !== m2; ) {
                for (q = V = m2; null !== V; ) {
                  r = V;
                  y2 = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Qj(4, r, r.return);
                      break;
                    case 1:
                      Mj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d = r;
                        c2 = r.return;
                        try {
                          b2 = d, n.props = b2.memoizedProps, n.state = b2.memoizedState, n.componentWillUnmount();
                        } catch (t) {
                          W(d, c2, t);
                        }
                      }
                      break;
                    case 5:
                      Mj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        hk(q);
                        continue;
                      }
                  }
                  null !== y2 ? (y2.return = r, V = y2) : hk(q);
                }
                m2 = m2.sibling;
              }
              a: for (m2 = null, q = a; ; ) {
                if (5 === q.tag) {
                  if (null === m2) {
                    m2 = q;
                    try {
                      e = q.stateNode, l ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q.stateNode, k = q.memoizedProps.style, g2 = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h2.style.display = rb("display", g2));
                    } catch (t) {
                      W(a, a.return, t);
                    }
                  }
                } else if (6 === q.tag) {
                  if (null === m2) try {
                    q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                  } catch (t) {
                    W(a, a.return, t);
                  }
                } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a) break a;
                for (; null === q.sibling; ) {
                  if (null === q.return || q.return === a) break a;
                  m2 === q && (m2 = null);
                  q = q.return;
                }
                m2 === q && (m2 = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
            }
            break;
          case 19:
            dk(b2, a);
            fk(a);
            d & 4 && bk(a);
            break;
          case 21:
            break;
          default:
            dk(
              b2,
              a
            ), fk(a);
        }
      }
      function fk(a) {
        var b2 = a.flags;
        if (b2 & 2) {
          try {
            a: {
              for (var c2 = a.return; null !== c2; ) {
                if (Uj(c2)) {
                  var d = c2;
                  break a;
                }
                c2 = c2.return;
              }
              throw Error(p2(160));
            }
            switch (d.tag) {
              case 5:
                var e = d.stateNode;
                d.flags & 32 && (ob(e, ""), d.flags &= -33);
                var f2 = Vj(a);
                Xj(a, f2, e);
                break;
              case 3:
              case 4:
                var g2 = d.stateNode.containerInfo, h2 = Vj(a);
                Wj(a, h2, g2);
                break;
              default:
                throw Error(p2(161));
            }
          } catch (k) {
            W(a, a.return, k);
          }
          a.flags &= -3;
        }
        b2 & 4096 && (a.flags &= -4097);
      }
      function ik(a, b2, c2) {
        V = a;
        jk(a, b2, c2);
      }
      function jk(a, b2, c2) {
        for (var d = 0 !== (a.mode & 1); null !== V; ) {
          var e = V, f2 = e.child;
          if (22 === e.tag && d) {
            var g2 = null !== e.memoizedState || Kj;
            if (!g2) {
              var h2 = e.alternate, k = null !== h2 && null !== h2.memoizedState || U;
              h2 = Kj;
              var l = U;
              Kj = g2;
              if ((U = k) && !l) for (V = e; null !== V; ) g2 = V, k = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e) : null !== k ? (k.return = g2, V = k) : kk(e);
              for (; null !== f2; ) V = f2, jk(f2, b2, c2), f2 = f2.sibling;
              V = e;
              Kj = h2;
              U = l;
            }
            lk(a, b2, c2);
          } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : lk(a, b2, c2);
        }
      }
      function lk(a) {
        for (; null !== V; ) {
          var b2 = V;
          if (0 !== (b2.flags & 8772)) {
            var c2 = b2.alternate;
            try {
              if (0 !== (b2.flags & 8772)) switch (b2.tag) {
                case 0:
                case 11:
                case 15:
                  U || Rj(5, b2);
                  break;
                case 1:
                  var d = b2.stateNode;
                  if (b2.flags & 4 && !U) if (null === c2) d.componentDidMount();
                  else {
                    var e = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                    d.componentDidUpdate(e, c2.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f2 = b2.updateQueue;
                  null !== f2 && ih(b2, f2, d);
                  break;
                case 3:
                  var g2 = b2.updateQueue;
                  if (null !== g2) {
                    c2 = null;
                    if (null !== b2.child) switch (b2.child.tag) {
                      case 5:
                        c2 = b2.child.stateNode;
                        break;
                      case 1:
                        c2 = b2.child.stateNode;
                    }
                    ih(b2, g2, c2);
                  }
                  break;
                case 5:
                  var h2 = b2.stateNode;
                  if (null === c2 && b2.flags & 4) {
                    c2 = h2;
                    var k = b2.memoizedProps;
                    switch (b2.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k.autoFocus && c2.focus();
                        break;
                      case "img":
                        k.src && (c2.src = k.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b2.memoizedState) {
                    var l = b2.alternate;
                    if (null !== l) {
                      var m2 = l.memoizedState;
                      if (null !== m2) {
                        var q = m2.dehydrated;
                        null !== q && bd(q);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p2(163));
              }
              U || b2.flags & 512 && Sj(b2);
            } catch (r) {
              W(b2, b2.return, r);
            }
          }
          if (b2 === a) {
            V = null;
            break;
          }
          c2 = b2.sibling;
          if (null !== c2) {
            c2.return = b2.return;
            V = c2;
            break;
          }
          V = b2.return;
        }
      }
      function hk(a) {
        for (; null !== V; ) {
          var b2 = V;
          if (b2 === a) {
            V = null;
            break;
          }
          var c2 = b2.sibling;
          if (null !== c2) {
            c2.return = b2.return;
            V = c2;
            break;
          }
          V = b2.return;
        }
      }
      function kk(a) {
        for (; null !== V; ) {
          var b2 = V;
          try {
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                var c2 = b2.return;
                try {
                  Rj(4, b2);
                } catch (k) {
                  W(b2, c2, k);
                }
                break;
              case 1:
                var d = b2.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e = b2.return;
                  try {
                    d.componentDidMount();
                  } catch (k) {
                    W(b2, e, k);
                  }
                }
                var f2 = b2.return;
                try {
                  Sj(b2);
                } catch (k) {
                  W(b2, f2, k);
                }
                break;
              case 5:
                var g2 = b2.return;
                try {
                  Sj(b2);
                } catch (k) {
                  W(b2, g2, k);
                }
            }
          } catch (k) {
            W(b2, b2.return, k);
          }
          if (b2 === a) {
            V = null;
            break;
          }
          var h2 = b2.sibling;
          if (null !== h2) {
            h2.return = b2.return;
            V = h2;
            break;
          }
          V = b2.return;
        }
      }
      var mk = Math.ceil;
      var nk = ua.ReactCurrentDispatcher;
      var ok = ua.ReactCurrentOwner;
      var pk = ua.ReactCurrentBatchConfig;
      var K = 0;
      var R = null;
      var Y = null;
      var Z = 0;
      var gj = 0;
      var fj = Uf(0);
      var T = 0;
      var qk = null;
      var hh = 0;
      var rk = 0;
      var sk = 0;
      var tk = null;
      var uk = null;
      var gk = 0;
      var Hj = Infinity;
      var vk = null;
      var Pi = false;
      var Qi = null;
      var Si = null;
      var wk = false;
      var xk = null;
      var yk = 0;
      var zk = 0;
      var Ak = null;
      var Bk = -1;
      var Ck = 0;
      function L() {
        return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
      }
      function lh(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
        if (null !== Kg.transition) return 0 === Ck && (Ck = yc()), Ck;
        a = C;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function mh(a, b2, c2, d) {
        if (50 < zk) throw zk = 0, Ak = null, Error(p2(185));
        Ac(a, c2, d);
        if (0 === (K & 2) || a !== R) a === R && (0 === (K & 2) && (rk |= c2), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Hj = B() + 500, fg && jg());
      }
      function Ek(a, b2) {
        var c2 = a.callbackNode;
        wc(a, b2);
        var d = uc(a, a === R ? Z : 0);
        if (0 === d) null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
        else if (b2 = d & -d, a.callbackPriority !== b2) {
          null != c2 && bc(c2);
          if (1 === b2) 0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
            0 === (K & 6) && jg();
          }), c2 = null;
          else {
            switch (Dc(d)) {
              case 1:
                c2 = fc;
                break;
              case 4:
                c2 = gc;
                break;
              case 16:
                c2 = hc;
                break;
              case 536870912:
                c2 = jc;
                break;
              default:
                c2 = hc;
            }
            c2 = Gk(c2, Hk.bind(null, a));
          }
          a.callbackPriority = b2;
          a.callbackNode = c2;
        }
      }
      function Hk(a, b2) {
        Bk = -1;
        Ck = 0;
        if (0 !== (K & 6)) throw Error(p2(327));
        var c2 = a.callbackNode;
        if (Ik() && a.callbackNode !== c2) return null;
        var d = uc(a, a === R ? Z : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b2) b2 = Jk(a, d);
        else {
          b2 = d;
          var e = K;
          K |= 2;
          var f2 = Kk();
          if (R !== a || Z !== b2) vk = null, Hj = B() + 500, Lk(a, b2);
          do
            try {
              Mk();
              break;
            } catch (h2) {
              Nk(a, h2);
            }
          while (1);
          Qg();
          nk.current = f2;
          K = e;
          null !== Y ? b2 = 0 : (R = null, Z = 0, b2 = T);
        }
        if (0 !== b2) {
          2 === b2 && (e = xc(a), 0 !== e && (d = e, b2 = Ok(a, e)));
          if (1 === b2) throw c2 = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c2;
          if (6 === b2) Dk(a, d);
          else {
            e = a.current.alternate;
            if (0 === (d & 30) && !Pk(e) && (b2 = Jk(a, d), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d = f2, b2 = Ok(a, f2))), 1 === b2)) throw c2 = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c2;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch (b2) {
              case 0:
              case 1:
                throw Error(p2(345));
              case 2:
                Qk(a, uk, vk);
                break;
              case 3:
                Dk(a, d);
                if ((d & 130023424) === d && (b2 = gk + 500 - B(), 10 < b2)) {
                  if (0 !== uc(a, 0)) break;
                  e = a.suspendedLanes;
                  if ((e & d) !== d) {
                    L();
                    a.pingedLanes |= a.suspendedLanes & e;
                    break;
                  }
                  a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b2);
                  break;
                }
                Qk(a, uk, vk);
                break;
              case 4:
                Dk(a, d);
                if ((d & 4194240) === d) break;
                b2 = a.eventTimes;
                for (e = -1; 0 < d; ) {
                  var g2 = 31 - oc(d);
                  f2 = 1 << g2;
                  g2 = b2[g2];
                  g2 > e && (e = g2);
                  d &= ~f2;
                }
                d = e;
                d = B() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
                  break;
                }
                Qk(a, uk, vk);
                break;
              case 5:
                Qk(a, uk, vk);
                break;
              default:
                throw Error(p2(329));
            }
          }
        }
        Ek(a, B());
        return a.callbackNode === c2 ? Hk.bind(null, a) : null;
      }
      function Ok(a, b2) {
        var c2 = tk;
        a.current.memoizedState.isDehydrated && (Lk(a, b2).flags |= 256);
        a = Jk(a, b2);
        2 !== a && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
        return a;
      }
      function Gj(a) {
        null === uk ? uk = a : uk.push.apply(uk, a);
      }
      function Pk(a) {
        for (var b2 = a; ; ) {
          if (b2.flags & 16384) {
            var c2 = b2.updateQueue;
            if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d = 0; d < c2.length; d++) {
              var e = c2[d], f2 = e.getSnapshot;
              e = e.value;
              try {
                if (!He(f2(), e)) return false;
              } catch (g2) {
                return false;
              }
            }
          }
          c2 = b2.child;
          if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
          else {
            if (b2 === a) break;
            for (; null === b2.sibling; ) {
              if (null === b2.return || b2.return === a) return true;
              b2 = b2.return;
            }
            b2.sibling.return = b2.return;
            b2 = b2.sibling;
          }
        }
        return true;
      }
      function Dk(a, b2) {
        b2 &= ~sk;
        b2 &= ~rk;
        a.suspendedLanes |= b2;
        a.pingedLanes &= ~b2;
        for (a = a.expirationTimes; 0 < b2; ) {
          var c2 = 31 - oc(b2), d = 1 << c2;
          a[c2] = -1;
          b2 &= ~d;
        }
      }
      function Fk(a) {
        if (0 !== (K & 6)) throw Error(p2(327));
        Ik();
        var b2 = uc(a, 0);
        if (0 === (b2 & 1)) return Ek(a, B()), null;
        var c2 = Jk(a, b2);
        if (0 !== a.tag && 2 === c2) {
          var d = xc(a);
          0 !== d && (b2 = d, c2 = Ok(a, d));
        }
        if (1 === c2) throw c2 = qk, Lk(a, 0), Dk(a, b2), Ek(a, B()), c2;
        if (6 === c2) throw Error(p2(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b2;
        Qk(a, uk, vk);
        Ek(a, B());
        return null;
      }
      function Rk(a, b2) {
        var c2 = K;
        K |= 1;
        try {
          return a(b2);
        } finally {
          K = c2, 0 === K && (Hj = B() + 500, fg && jg());
        }
      }
      function Sk(a) {
        null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
        var b2 = K;
        K |= 1;
        var c2 = pk.transition, d = C;
        try {
          if (pk.transition = null, C = 1, a) return a();
        } finally {
          C = d, pk.transition = c2, K = b2, 0 === (K & 6) && jg();
        }
      }
      function Ij() {
        gj = fj.current;
        E(fj);
      }
      function Lk(a, b2) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c2 = a.timeoutHandle;
        -1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
        if (null !== Y) for (c2 = Y.return; null !== c2; ) {
          var d = c2;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              Jh();
              E(Wf);
              E(H);
              Oh();
              break;
            case 5:
              Lh(d);
              break;
            case 4:
              Jh();
              break;
            case 13:
              E(M);
              break;
            case 19:
              E(M);
              break;
            case 10:
              Rg(d.type._context);
              break;
            case 22:
            case 23:
              Ij();
          }
          c2 = c2.return;
        }
        R = a;
        Y = a = wh(a.current, null);
        Z = gj = b2;
        T = 0;
        qk = null;
        sk = rk = hh = 0;
        uk = tk = null;
        if (null !== Wg) {
          for (b2 = 0; b2 < Wg.length; b2++) if (c2 = Wg[b2], d = c2.interleaved, null !== d) {
            c2.interleaved = null;
            var e = d.next, f2 = c2.pending;
            if (null !== f2) {
              var g2 = f2.next;
              f2.next = e;
              d.next = g2;
            }
            c2.pending = d;
          }
          Wg = null;
        }
        return a;
      }
      function Nk(a, b2) {
        do {
          var c2 = Y;
          try {
            Qg();
            Ph.current = ai;
            if (Sh) {
              for (var d = N.memoizedState; null !== d; ) {
                var e = d.queue;
                null !== e && (e.pending = null);
                d = d.next;
              }
              Sh = false;
            }
            Rh = 0;
            P = O = N = null;
            Th = false;
            Uh = 0;
            ok.current = null;
            if (null === c2 || null === c2.return) {
              T = 1;
              qk = b2;
              Y = null;
              break;
            }
            a: {
              var f2 = a, g2 = c2.return, h2 = c2, k = b2;
              b2 = Z;
              h2.flags |= 32768;
              if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                var l = k, m2 = h2, q = m2.tag;
                if (0 === (m2.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r = m2.alternate;
                  r ? (m2.updateQueue = r.updateQueue, m2.memoizedState = r.memoizedState, m2.lanes = r.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
                }
                var y2 = Vi(g2);
                if (null !== y2) {
                  y2.flags &= -257;
                  Wi(y2, g2, h2, f2, b2);
                  y2.mode & 1 && Ti(f2, l, b2);
                  b2 = y2;
                  k = l;
                  var n = b2.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k);
                    b2.updateQueue = t;
                  } else n.add(k);
                  break a;
                } else {
                  if (0 === (b2 & 1)) {
                    Ti(f2, l, b2);
                    uj();
                    break a;
                  }
                  k = Error(p2(426));
                }
              } else if (I && h2.mode & 1) {
                var J = Vi(g2);
                if (null !== J) {
                  0 === (J.flags & 65536) && (J.flags |= 256);
                  Wi(J, g2, h2, f2, b2);
                  Jg(Ki(k, h2));
                  break a;
                }
              }
              f2 = k = Ki(k, h2);
              4 !== T && (T = 2);
              null === tk ? tk = [f2] : tk.push(f2);
              f2 = g2;
              do {
                switch (f2.tag) {
                  case 3:
                    f2.flags |= 65536;
                    b2 &= -b2;
                    f2.lanes |= b2;
                    var x = Oi(f2, k, b2);
                    fh(f2, x);
                    break a;
                  case 1:
                    h2 = k;
                    var w2 = f2.type, u2 = f2.stateNode;
                    if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                      f2.flags |= 65536;
                      b2 &= -b2;
                      f2.lanes |= b2;
                      var F = Ri(f2, h2, b2);
                      fh(f2, F);
                      break a;
                    }
                }
                f2 = f2.return;
              } while (null !== f2);
            }
            Tk(c2);
          } catch (na) {
            b2 = na;
            Y === c2 && null !== c2 && (Y = c2 = c2.return);
            continue;
          }
          break;
        } while (1);
      }
      function Kk() {
        var a = nk.current;
        nk.current = ai;
        return null === a ? ai : a;
      }
      function uj() {
        if (0 === T || 3 === T || 2 === T) T = 4;
        null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
      }
      function Jk(a, b2) {
        var c2 = K;
        K |= 2;
        var d = Kk();
        if (R !== a || Z !== b2) vk = null, Lk(a, b2);
        do
          try {
            Uk();
            break;
          } catch (e) {
            Nk(a, e);
          }
        while (1);
        Qg();
        K = c2;
        nk.current = d;
        if (null !== Y) throw Error(p2(261));
        R = null;
        Z = 0;
        return T;
      }
      function Uk() {
        for (; null !== Y; ) Vk(Y);
      }
      function Mk() {
        for (; null !== Y && !cc(); ) Vk(Y);
      }
      function Vk(a) {
        var b2 = Wk(a.alternate, a, gj);
        a.memoizedProps = a.pendingProps;
        null === b2 ? Tk(a) : Y = b2;
        ok.current = null;
      }
      function Tk(a) {
        var b2 = a;
        do {
          var c2 = b2.alternate;
          a = b2.return;
          if (0 === (b2.flags & 32768)) {
            if (c2 = Fj(c2, b2, gj), null !== c2) {
              Y = c2;
              return;
            }
          } else {
            c2 = Jj(c2, b2);
            if (null !== c2) {
              c2.flags &= 32767;
              Y = c2;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T = 6;
              Y = null;
              return;
            }
          }
          b2 = b2.sibling;
          if (null !== b2) {
            Y = b2;
            return;
          }
          Y = b2 = a;
        } while (null !== b2);
        0 === T && (T = 5);
      }
      function Qk(a, b2, c2) {
        var d = C, e = pk.transition;
        try {
          pk.transition = null, C = 1, Xk(a, b2, c2, d);
        } finally {
          pk.transition = e, C = d;
        }
        return null;
      }
      function Xk(a, b2, c2, d) {
        do
          Ik();
        while (null !== xk);
        if (0 !== (K & 6)) throw Error(p2(327));
        c2 = a.finishedWork;
        var e = a.finishedLanes;
        if (null === c2) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c2 === a.current) throw Error(p2(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f2 = c2.lanes | c2.childLanes;
        Bc(a, f2);
        a === R && (Y = R = null, Z = 0);
        0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
          Ik();
          return null;
        }));
        f2 = 0 !== (c2.flags & 15990);
        if (0 !== (c2.subtreeFlags & 15990) || f2) {
          f2 = pk.transition;
          pk.transition = null;
          var g2 = C;
          C = 1;
          var h2 = K;
          K |= 4;
          ok.current = null;
          Pj(a, c2);
          ek(c2, a);
          Oe(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c2;
          ik(c2, a, e);
          dc();
          K = h2;
          C = g2;
          pk.transition = f2;
        } else a.current = c2;
        wk && (wk = false, xk = a, yk = e);
        f2 = a.pendingLanes;
        0 === f2 && (Si = null);
        mc(c2.stateNode, d);
        Ek(a, B());
        if (null !== b2) for (d = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e = b2[c2], d(e.value, { componentStack: e.stack, digest: e.digest });
        if (Pi) throw Pi = false, a = Qi, Qi = null, a;
        0 !== (yk & 1) && 0 !== a.tag && Ik();
        f2 = a.pendingLanes;
        0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
        jg();
        return null;
      }
      function Ik() {
        if (null !== xk) {
          var a = Dc(yk), b2 = pk.transition, c2 = C;
          try {
            pk.transition = null;
            C = 16 > a ? 16 : a;
            if (null === xk) var d = false;
            else {
              a = xk;
              xk = null;
              yk = 0;
              if (0 !== (K & 6)) throw Error(p2(331));
              var e = K;
              K |= 4;
              for (V = a.current; null !== V; ) {
                var f2 = V, g2 = f2.child;
                if (0 !== (V.flags & 16)) {
                  var h2 = f2.deletions;
                  if (null !== h2) {
                    for (var k = 0; k < h2.length; k++) {
                      var l = h2[k];
                      for (V = l; null !== V; ) {
                        var m2 = V;
                        switch (m2.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Qj(8, m2, f2);
                        }
                        var q = m2.child;
                        if (null !== q) q.return = m2, V = q;
                        else for (; null !== V; ) {
                          m2 = V;
                          var r = m2.sibling, y2 = m2.return;
                          Tj(m2);
                          if (m2 === l) {
                            V = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y2;
                            V = r;
                            break;
                          }
                          V = y2;
                        }
                      }
                    }
                    var n = f2.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J = t.sibling;
                          t.sibling = null;
                          t = J;
                        } while (null !== t);
                      }
                    }
                    V = f2;
                  }
                }
                if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V = g2;
                else b: for (; null !== V; ) {
                  f2 = V;
                  if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                  var x = f2.sibling;
                  if (null !== x) {
                    x.return = f2.return;
                    V = x;
                    break b;
                  }
                  V = f2.return;
                }
              }
              var w2 = a.current;
              for (V = w2; null !== V; ) {
                g2 = V;
                var u2 = g2.child;
                if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V = u2;
                else b: for (g2 = w2; null !== V; ) {
                  h2 = V;
                  if (0 !== (h2.flags & 2048)) try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h2);
                    }
                  } catch (na) {
                    W(h2, h2.return, na);
                  }
                  if (h2 === g2) {
                    V = null;
                    break b;
                  }
                  var F = h2.sibling;
                  if (null !== F) {
                    F.return = h2.return;
                    V = F;
                    break b;
                  }
                  V = h2.return;
                }
              }
              K = e;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c2, pk.transition = b2;
          }
        }
        return false;
      }
      function Yk(a, b2, c2) {
        b2 = Ki(c2, b2);
        b2 = Oi(a, b2, 1);
        a = dh(a, b2, 1);
        b2 = L();
        null !== a && (Ac(a, 1, b2), Ek(a, b2));
      }
      function W(a, b2, c2) {
        if (3 === a.tag) Yk(a, a, c2);
        else for (; null !== b2; ) {
          if (3 === b2.tag) {
            Yk(b2, a, c2);
            break;
          } else if (1 === b2.tag) {
            var d = b2.stateNode;
            if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
              a = Ki(c2, a);
              a = Ri(b2, a, 1);
              b2 = dh(b2, a, 1);
              a = L();
              null !== b2 && (Ac(b2, 1, a), Ek(b2, a));
              break;
            }
          }
          b2 = b2.return;
        }
      }
      function Ui(a, b2, c2) {
        var d = a.pingCache;
        null !== d && d.delete(b2);
        b2 = L();
        a.pingedLanes |= a.suspendedLanes & c2;
        R === a && (Z & c2) === c2 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c2);
        Ek(a, b2);
      }
      function Zk(a, b2) {
        0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c2 = L();
        a = Zg(a, b2);
        null !== a && (Ac(a, b2, c2), Ek(a, c2));
      }
      function vj(a) {
        var b2 = a.memoizedState, c2 = 0;
        null !== b2 && (c2 = b2.retryLane);
        Zk(a, c2);
      }
      function ck(a, b2) {
        var c2 = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c2 = e.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p2(314));
        }
        null !== d && d.delete(b2);
        Zk(a, c2);
      }
      var Wk;
      Wk = function(a, b2, c2) {
        if (null !== a) if (a.memoizedProps !== b2.pendingProps || Wf.current) Ug = true;
        else {
          if (0 === (a.lanes & c2) && 0 === (b2.flags & 128)) return Ug = false, zj(a, b2, c2);
          Ug = 0 !== (a.flags & 131072) ? true : false;
        }
        else Ug = false, I && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
        b2.lanes = 0;
        switch (b2.tag) {
          case 2:
            var d = b2.type;
            jj(a, b2);
            a = b2.pendingProps;
            var e = Yf(b2, H.current);
            Tg(b2, c2);
            e = Xh(null, b2, d, a, e, c2);
            var f2 = bi();
            b2.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b2), e.updater = nh, b2.stateNode = e, e._reactInternals = b2, rh(b2, d, a, c2), b2 = kj(null, b2, d, true, f2, c2)) : (b2.tag = 0, I && f2 && vg(b2), Yi(null, b2, e, c2), b2 = b2.child);
            return b2;
          case 16:
            d = b2.elementType;
            a: {
              jj(a, b2);
              a = b2.pendingProps;
              e = d._init;
              d = e(d._payload);
              b2.type = d;
              e = b2.tag = $k(d);
              a = Lg(d, a);
              switch (e) {
                case 0:
                  b2 = dj(null, b2, d, a, c2);
                  break a;
                case 1:
                  b2 = ij(null, b2, d, a, c2);
                  break a;
                case 11:
                  b2 = Zi(null, b2, d, a, c2);
                  break a;
                case 14:
                  b2 = aj(null, b2, d, Lg(d.type, a), c2);
                  break a;
              }
              throw Error(p2(
                306,
                d,
                ""
              ));
            }
            return b2;
          case 0:
            return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Lg(d, e), dj(a, b2, d, e, c2);
          case 1:
            return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Lg(d, e), ij(a, b2, d, e, c2);
          case 3:
            a: {
              lj(b2);
              if (null === a) throw Error(p2(387));
              d = b2.pendingProps;
              f2 = b2.memoizedState;
              e = f2.element;
              bh(a, b2);
              gh(b2, d, null, c2);
              var g2 = b2.memoizedState;
              d = g2.element;
              if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
                e = Ki(Error(p2(423)), b2);
                b2 = mj(a, b2, d, c2, e);
                break a;
              } else if (d !== e) {
                e = Ki(Error(p2(424)), b2);
                b2 = mj(a, b2, d, c2, e);
                break a;
              } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I = true, zg = null, c2 = Ch(b2, null, d, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
              else {
                Ig();
                if (d === e) {
                  b2 = $i(a, b2, c2);
                  break a;
                }
                Yi(a, b2, d, c2);
              }
              b2 = b2.child;
            }
            return b2;
          case 5:
            return Kh(b2), null === a && Eg(b2), d = b2.type, e = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e.children, Ef(d, e) ? g2 = null : null !== f2 && Ef(d, f2) && (b2.flags |= 32), hj(a, b2), Yi(a, b2, g2, c2), b2.child;
          case 6:
            return null === a && Eg(b2), null;
          case 13:
            return pj(a, b2, c2);
          case 4:
            return Ih(b2, b2.stateNode.containerInfo), d = b2.pendingProps, null === a ? b2.child = Bh(b2, null, d, c2) : Yi(a, b2, d, c2), b2.child;
          case 11:
            return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Lg(d, e), Zi(a, b2, d, e, c2);
          case 7:
            return Yi(a, b2, b2.pendingProps, c2), b2.child;
          case 8:
            return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
          case 12:
            return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
          case 10:
            a: {
              d = b2.type._context;
              e = b2.pendingProps;
              f2 = b2.memoizedProps;
              g2 = e.value;
              G(Mg, d._currentValue);
              d._currentValue = g2;
              if (null !== f2) if (He(f2.value, g2)) {
                if (f2.children === e.children && !Wf.current) {
                  b2 = $i(a, b2, c2);
                  break a;
                }
              } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
                var h2 = f2.dependencies;
                if (null !== h2) {
                  g2 = f2.child;
                  for (var k = h2.firstContext; null !== k; ) {
                    if (k.context === d) {
                      if (1 === f2.tag) {
                        k = ch(-1, c2 & -c2);
                        k.tag = 2;
                        var l = f2.updateQueue;
                        if (null !== l) {
                          l = l.shared;
                          var m2 = l.pending;
                          null === m2 ? k.next = k : (k.next = m2.next, m2.next = k);
                          l.pending = k;
                        }
                      }
                      f2.lanes |= c2;
                      k = f2.alternate;
                      null !== k && (k.lanes |= c2);
                      Sg(
                        f2.return,
                        c2,
                        b2
                      );
                      h2.lanes |= c2;
                      break;
                    }
                    k = k.next;
                  }
                } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g2 = f2.return;
                  if (null === g2) throw Error(p2(341));
                  g2.lanes |= c2;
                  h2 = g2.alternate;
                  null !== h2 && (h2.lanes |= c2);
                  Sg(g2, c2, b2);
                  g2 = f2.sibling;
                } else g2 = f2.child;
                if (null !== g2) g2.return = f2;
                else for (g2 = f2; null !== g2; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (null !== f2) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
                f2 = g2;
              }
              Yi(a, b2, e.children, c2);
              b2 = b2.child;
            }
            return b2;
          case 9:
            return e = b2.type, d = b2.pendingProps.children, Tg(b2, c2), e = Vg(e), d = d(e), b2.flags |= 1, Yi(a, b2, d, c2), b2.child;
          case 14:
            return d = b2.type, e = Lg(d, b2.pendingProps), e = Lg(d.type, e), aj(a, b2, d, e, c2);
          case 15:
            return cj(a, b2, b2.type, b2.pendingProps, c2);
          case 17:
            return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Lg(d, e), jj(a, b2), b2.tag = 1, Zf(d) ? (a = true, cg(b2)) : a = false, Tg(b2, c2), ph(b2, d, e), rh(b2, d, e, c2), kj(null, b2, d, true, a, c2);
          case 19:
            return yj(a, b2, c2);
          case 22:
            return ej(a, b2, c2);
        }
        throw Error(p2(156, b2.tag));
      };
      function Gk(a, b2) {
        return ac(a, b2);
      }
      function al(a, b2, c2, d) {
        this.tag = a;
        this.key = c2;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b2;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b2, c2, d) {
        return new al(a, b2, c2, d);
      }
      function bj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function $k(a) {
        if ("function" === typeof a) return bj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da) return 11;
          if (a === Ga) return 14;
        }
        return 2;
      }
      function wh(a, b2) {
        var c2 = a.alternate;
        null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
        c2.flags = a.flags & 14680064;
        c2.childLanes = a.childLanes;
        c2.lanes = a.lanes;
        c2.child = a.child;
        c2.memoizedProps = a.memoizedProps;
        c2.memoizedState = a.memoizedState;
        c2.updateQueue = a.updateQueue;
        b2 = a.dependencies;
        c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
        c2.sibling = a.sibling;
        c2.index = a.index;
        c2.ref = a.ref;
        return c2;
      }
      function yh(a, b2, c2, d, e, f2) {
        var g2 = 2;
        d = a;
        if ("function" === typeof a) bj(a) && (g2 = 1);
        else if ("string" === typeof a) g2 = 5;
        else a: switch (a) {
          case ya:
            return Ah(c2.children, e, f2, b2);
          case za:
            g2 = 8;
            e |= 8;
            break;
          case Aa:
            return a = Bg(12, c2, b2, e | 2), a.elementType = Aa, a.lanes = f2, a;
          case Ea:
            return a = Bg(13, c2, b2, e), a.elementType = Ea, a.lanes = f2, a;
          case Fa:
            return a = Bg(19, c2, b2, e), a.elementType = Fa, a.lanes = f2, a;
          case Ia:
            return qj(c2, e, f2, b2);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba:
                g2 = 10;
                break a;
              case Ca:
                g2 = 9;
                break a;
              case Da:
                g2 = 11;
                break a;
              case Ga:
                g2 = 14;
                break a;
              case Ha:
                g2 = 16;
                d = null;
                break a;
            }
            throw Error(p2(130, null == a ? a : typeof a, ""));
        }
        b2 = Bg(g2, c2, b2, e);
        b2.elementType = a;
        b2.type = d;
        b2.lanes = f2;
        return b2;
      }
      function Ah(a, b2, c2, d) {
        a = Bg(7, a, d, b2);
        a.lanes = c2;
        return a;
      }
      function qj(a, b2, c2, d) {
        a = Bg(22, a, d, b2);
        a.elementType = Ia;
        a.lanes = c2;
        a.stateNode = { isHidden: false };
        return a;
      }
      function xh(a, b2, c2) {
        a = Bg(6, a, null, b2);
        a.lanes = c2;
        return a;
      }
      function zh(a, b2, c2) {
        b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
        b2.lanes = c2;
        b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b2;
      }
      function bl(a, b2, c2, d, e) {
        this.tag = b2;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        this.mutableSourceEagerHydrationData = null;
      }
      function cl(a, b2, c2, d, e, f2, g2, h2, k) {
        a = new bl(a, b2, c2, h2, k);
        1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
        f2 = Bg(3, null, null, b2);
        a.current = f2;
        f2.stateNode = a;
        f2.memoizedState = { element: d, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        ah(f2);
        return a;
      }
      function dl(a, b2, c2) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b2, implementation: c2 };
      }
      function el(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p2(170));
          var b2 = a;
          do {
            switch (b2.tag) {
              case 3:
                b2 = b2.stateNode.context;
                break a;
              case 1:
                if (Zf(b2.type)) {
                  b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b2 = b2.return;
          } while (null !== b2);
          throw Error(p2(171));
        }
        if (1 === a.tag) {
          var c2 = a.type;
          if (Zf(c2)) return bg(a, c2, b2);
        }
        return b2;
      }
      function fl(a, b2, c2, d, e, f2, g2, h2, k) {
        a = cl(c2, d, true, a, e, f2, g2, h2, k);
        a.context = el(null);
        c2 = a.current;
        d = L();
        e = lh(c2);
        f2 = ch(d, e);
        f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
        dh(c2, f2, e);
        a.current.lanes = e;
        Ac(a, e, d);
        Ek(a, d);
        return a;
      }
      function gl(a, b2, c2, d) {
        var e = b2.current, f2 = L(), g2 = lh(e);
        c2 = el(c2);
        null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
        b2 = ch(f2, g2);
        b2.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b2.callback = d);
        a = dh(e, b2, g2);
        null !== a && (mh(a, e, g2, f2), eh(a, e, g2));
        return g2;
      }
      function hl(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function il(a, b2) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c2 = a.retryLane;
          a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
        }
      }
      function jl(a, b2) {
        il(a, b2);
        (a = a.alternate) && il(a, b2);
      }
      function kl() {
        return null;
      }
      var ll = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ml(a) {
        this._internalRoot = a;
      }
      nl.prototype.render = ml.prototype.render = function(a) {
        var b2 = this._internalRoot;
        if (null === b2) throw Error(p2(409));
        gl(a, b2, null, null);
      };
      nl.prototype.unmount = ml.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b2 = a.containerInfo;
          Sk(function() {
            gl(null, a, null, null);
          });
          b2[uf] = null;
        }
      };
      function nl(a) {
        this._internalRoot = a;
      }
      nl.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b2 = Hc();
          a = { blockedOn: null, target: a, priority: b2 };
          for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
          Qc.splice(c2, 0, a);
          0 === c2 && Vc(a);
        }
      };
      function ol(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function pl(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function ql() {
      }
      function rl(a, b2, c2, d, e) {
        if (e) {
          if ("function" === typeof d) {
            var f2 = d;
            d = function() {
              var a2 = hl(g2);
              f2.call(a2);
            };
          }
          var g2 = fl(b2, d, a, 0, null, false, false, "", ql);
          a._reactRootContainer = g2;
          a[uf] = g2.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Sk();
          return g2;
        }
        for (; e = a.lastChild; ) a.removeChild(e);
        if ("function" === typeof d) {
          var h2 = d;
          d = function() {
            var a2 = hl(k);
            h2.call(a2);
          };
        }
        var k = cl(a, 0, false, null, null, false, false, "", ql);
        a._reactRootContainer = k;
        a[uf] = k.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Sk(function() {
          gl(b2, k, c2, d);
        });
        return k;
      }
      function sl(a, b2, c2, d, e) {
        var f2 = c2._reactRootContainer;
        if (f2) {
          var g2 = f2;
          if ("function" === typeof e) {
            var h2 = e;
            e = function() {
              var a2 = hl(g2);
              h2.call(a2);
            };
          }
          gl(b2, g2, a, e);
        } else g2 = rl(c2, b2, a, e, d);
        return hl(g2);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b2 = a.stateNode;
            if (b2.current.memoizedState.isDehydrated) {
              var c2 = tc(b2.pendingLanes);
              0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
            }
            break;
          case 13:
            Sk(function() {
              var b3 = Zg(a, 1);
              if (null !== b3) {
                var c3 = L();
                mh(b3, a, 1, c3);
              }
            }), jl(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b2 = Zg(a, 134217728);
          if (null !== b2) {
            var c2 = L();
            mh(b2, a, 134217728, c2);
          }
          jl(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b2 = lh(a), c2 = Zg(a, b2);
          if (null !== c2) {
            var d = L();
            mh(c2, a, b2, d);
          }
          jl(a, b2);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a, b2) {
        var c2 = C;
        try {
          return C = a, b2();
        } finally {
          C = c2;
        }
      };
      yb = function(a, b2, c2) {
        switch (b2) {
          case "input":
            bb(a, c2);
            b2 = c2.name;
            if ("radio" === c2.type && null != b2) {
              for (c2 = a; c2.parentNode; ) c2 = c2.parentNode;
              c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
              for (b2 = 0; b2 < c2.length; b2++) {
                var d = c2[b2];
                if (d !== a && d.form === a.form) {
                  var e = Db(d);
                  if (!e) throw Error(p2(90));
                  Wa(d);
                  bb(d, e);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c2);
            break;
          case "select":
            b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
        }
      };
      Gb = Rk;
      Hb = Sk;
      var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] };
      var ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
      var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!wl.isDisabled && wl.supportsFiber) try {
          kc = wl.inject(vl), lc = wl;
        } catch (a) {
        }
      }
      var wl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
      exports.createPortal = function(a, b2) {
        var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!ol(b2)) throw Error(p2(200));
        return dl(a, b2, null, c2);
      };
      exports.createRoot = function(a, b2) {
        if (!ol(a)) throw Error(p2(299));
        var c2 = false, d = "", e = ll;
        null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e = b2.onRecoverableError));
        b2 = cl(a, 1, false, null, null, c2, false, d, e);
        a[uf] = b2.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ml(b2);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b2 = a._reactInternals;
        if (void 0 === b2) {
          if ("function" === typeof a.render) throw Error(p2(188));
          a = Object.keys(a).join(",");
          throw Error(p2(268, a));
        }
        a = Zb(b2);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Sk(a);
      };
      exports.hydrate = function(a, b2, c2) {
        if (!pl(b2)) throw Error(p2(200));
        return sl(null, a, b2, true, c2);
      };
      exports.hydrateRoot = function(a, b2, c2) {
        if (!ol(a)) throw Error(p2(405));
        var d = null != c2 && c2.hydratedSources || null, e = false, f2 = "", g2 = ll;
        null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
        b2 = fl(b2, null, a, 1, null != c2 ? c2 : null, e, false, f2, g2);
        a[uf] = b2.current;
        sf(a);
        if (d) for (a = 0; a < d.length; a++) c2 = d[a], e = c2._getVersion, e = e(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e] : b2.mutableSourceEagerHydrationData.push(
          c2,
          e
        );
        return new nl(b2);
      };
      exports.render = function(a, b2, c2) {
        if (!pl(b2)) throw Error(p2(200));
        return sl(null, a, b2, false, c2);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!pl(a)) throw Error(p2(40));
        return a._reactRootContainer ? (Sk(function() {
          sl(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Rk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d) {
        if (!pl(c2)) throw Error(p2(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p2(38));
        return sl(a, b2, c2, false, d);
      };
      exports.version = "18.2.0-next-9e3b772b8-20220608";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err2) {
          console.error(err2);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m2 = require_react_dom();
      if (true) {
        exports.createRoot = m2.createRoot;
        exports.hydrateRoot = m2.hydrateRoot;
      } else {
        i = m2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c2, o) {
          i.usingClientEntryPoint = true;
          try {
            return m2.createRoot(c2, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c2, h2, o) {
          i.usingClientEntryPoint = true;
          try {
            return m2.hydrateRoot(c2, h2, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // node_modules/prop-types/factoryWithThrowingShims.js
  var require_factoryWithThrowingShims = __commonJS({
    "node_modules/prop-types/factoryWithThrowingShims.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      function emptyFunction() {
      }
      function emptyFunctionWithReset() {
      }
      emptyFunctionWithReset.resetWarningCache = emptyFunction;
      module.exports = function() {
        function shim(props, propName, componentName, location2, propFullName, secret) {
          if (secret === ReactPropTypesSecret) {
            return;
          }
          var err2 = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          err2.name = "Invariant Violation";
          throw err2;
        }
        ;
        shim.isRequired = shim;
        function getShim() {
          return shim;
        }
        ;
        var ReactPropTypes = {
          array: shim,
          bigint: shim,
          bool: shim,
          func: shim,
          number: shim,
          object: shim,
          string: shim,
          symbol: shim,
          any: shim,
          arrayOf: getShim,
          element: shim,
          elementType: shim,
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim,
          exact: getShim,
          checkPropTypes: emptyFunctionWithReset,
          resetWarningCache: emptyFunction
        };
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/prop-types/index.js"(exports, module) {
      if (false) {
        ReactIs = null;
        throwOnDirectAccess = true;
        module.exports = null(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module.exports = require_factoryWithThrowingShims()();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // node_modules/attr-accept/dist/es/index.js
  var require_es = __commonJS({
    "node_modules/attr-accept/dist/es/index.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.default = function(file2, acceptedFiles) {
        if (file2 && acceptedFiles) {
          var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
          if (acceptedFilesArray.length === 0) {
            return true;
          }
          var fileName = file2.name || "";
          var mimeType = (file2.type || "").toLowerCase();
          var baseMimeType = mimeType.replace(/\/.*$/, "");
          return acceptedFilesArray.some(function(type) {
            var validType = type.trim().toLowerCase();
            if (validType.charAt(0) === ".") {
              return fileName.toLowerCase().endsWith(validType);
            } else if (validType.endsWith("/*")) {
              return baseMimeType === validType.replace(/\/.*$/, "");
            }
            return mimeType === validType;
          });
        }
        return true;
      };
    }
  });

  // node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    "node_modules/dayjs/dayjs.min.js"(exports, module) {
      !(function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
      })(exports, (function() {
        "use strict";
        var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u2 = "hour", a = "day", o = "week", c2 = "month", f2 = "quarter", h2 = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
          var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
          return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
        } }, m2 = function(t2, e2, n2) {
          var r2 = String(t2);
          return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
        }, v2 = { s: m2, z: function(t2) {
          var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
          return (e2 <= 0 ? "+" : "-") + m2(r2, 2, "0") + ":" + m2(i2, 2, "0");
        }, m: function t2(e2, n2) {
          if (e2.date() < n2.date()) return -t2(n2, e2);
          var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c2), s2 = n2 - i2 < 0, u3 = e2.clone().add(r2 + (s2 ? -1 : 1), c2);
          return +(-(r2 + (n2 - i2) / (s2 ? i2 - u3 : u3 - i2)) || 0);
        }, a: function(t2) {
          return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
        }, p: function(t2) {
          return { M: c2, y: h2, w: o, d: a, D: d, h: u2, m: s, s: i, ms: r, Q: f2 }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t2) {
          return void 0 === t2;
        } }, g2 = "en", D = {};
        D[g2] = M;
        var p2 = "$isDayjsObject", S = function(t2) {
          return t2 instanceof _ || !(!t2 || !t2[p2]);
        }, w2 = function t2(e2, n2, r2) {
          var i2;
          if (!e2) return g2;
          if ("string" == typeof e2) {
            var s2 = e2.toLowerCase();
            D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
            var u3 = e2.split("-");
            if (!i2 && u3.length > 1) return t2(u3[0]);
          } else {
            var a2 = e2.name;
            D[a2] = e2, i2 = a2;
          }
          return !r2 && i2 && (g2 = i2), i2 || !r2 && g2;
        }, O = function(t2, e2) {
          if (S(t2)) return t2.clone();
          var n2 = "object" == typeof e2 ? e2 : {};
          return n2.date = t2, n2.args = arguments, new _(n2);
        }, b2 = v2;
        b2.l = w2, b2.i = S, b2.w = function(t2, e2) {
          return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
        };
        var _ = (function() {
          function M2(t2) {
            this.$L = w2(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p2] = true;
          }
          var m3 = M2.prototype;
          return m3.parse = function(t2) {
            this.$d = (function(t3) {
              var e2 = t3.date, n2 = t3.utc;
              if (null === e2) return /* @__PURE__ */ new Date(NaN);
              if (b2.u(e2)) return /* @__PURE__ */ new Date();
              if (e2 instanceof Date) return new Date(e2);
              if ("string" == typeof e2 && !/Z$/i.test(e2)) {
                var r2 = e2.match($);
                if (r2) {
                  var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                  return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                }
              }
              return new Date(e2);
            })(t2), this.init();
          }, m3.init = function() {
            var t2 = this.$d;
            this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
          }, m3.$utils = function() {
            return b2;
          }, m3.isValid = function() {
            return !(this.$d.toString() === l);
          }, m3.isSame = function(t2, e2) {
            var n2 = O(t2);
            return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
          }, m3.isAfter = function(t2, e2) {
            return O(t2) < this.startOf(e2);
          }, m3.isBefore = function(t2, e2) {
            return this.endOf(e2) < O(t2);
          }, m3.$g = function(t2, e2, n2) {
            return b2.u(t2) ? this[e2] : this.set(n2, t2);
          }, m3.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m3.valueOf = function() {
            return this.$d.getTime();
          }, m3.startOf = function(t2, e2) {
            var n2 = this, r2 = !!b2.u(e2) || e2, f3 = b2.p(t2), l2 = function(t3, e3) {
              var i2 = b2.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
              return r2 ? i2 : i2.endOf(a);
            }, $2 = function(t3, e3) {
              return b2.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
            }, y3 = this.$W, M3 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
            switch (f3) {
              case h2:
                return r2 ? l2(1, 0) : l2(31, 11);
              case c2:
                return r2 ? l2(1, M3) : l2(0, M3 + 1);
              case o:
                var g3 = this.$locale().weekStart || 0, D2 = (y3 < g3 ? y3 + 7 : y3) - g3;
                return l2(r2 ? m4 - D2 : m4 + (6 - D2), M3);
              case a:
              case d:
                return $2(v3 + "Hours", 0);
              case u2:
                return $2(v3 + "Minutes", 1);
              case s:
                return $2(v3 + "Seconds", 2);
              case i:
                return $2(v3 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m3.endOf = function(t2) {
            return this.startOf(t2, false);
          }, m3.$set = function(t2, e2) {
            var n2, o2 = b2.p(t2), f3 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f3 + "Date", n2[d] = f3 + "Date", n2[c2] = f3 + "Month", n2[h2] = f3 + "FullYear", n2[u2] = f3 + "Hours", n2[s] = f3 + "Minutes", n2[i] = f3 + "Seconds", n2[r] = f3 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
            if (o2 === c2 || o2 === h2) {
              var y3 = this.clone().set(d, 1);
              y3.$d[l2]($2), y3.init(), this.$d = y3.set(d, Math.min(this.$D, y3.daysInMonth())).$d;
            } else l2 && this.$d[l2]($2);
            return this.init(), this;
          }, m3.set = function(t2, e2) {
            return this.clone().$set(t2, e2);
          }, m3.get = function(t2) {
            return this[b2.p(t2)]();
          }, m3.add = function(r2, f3) {
            var d2, l2 = this;
            r2 = Number(r2);
            var $2 = b2.p(f3), y3 = function(t2) {
              var e2 = O(l2);
              return b2.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
            };
            if ($2 === c2) return this.set(c2, this.$M + r2);
            if ($2 === h2) return this.set(h2, this.$y + r2);
            if ($2 === a) return y3(1);
            if ($2 === o) return y3(7);
            var M3 = (d2 = {}, d2[s] = e, d2[u2] = n, d2[i] = t, d2)[$2] || 1, m4 = this.$d.getTime() + r2 * M3;
            return b2.w(m4, this);
          }, m3.subtract = function(t2, e2) {
            return this.add(-1 * t2, e2);
          }, m3.format = function(t2) {
            var e2 = this, n2 = this.$locale();
            if (!this.isValid()) return n2.invalidDate || l;
            var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b2.z(this), s2 = this.$H, u3 = this.$m, a2 = this.$M, o2 = n2.weekdays, c3 = n2.months, f3 = n2.meridiem, h3 = function(t3, n3, i3, s3) {
              return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
            }, d2 = function(t3) {
              return b2.s(s2 % 12 || 12, t3, "0");
            }, $2 = f3 || function(t3, e3, n3) {
              var r3 = t3 < 12 ? "AM" : "PM";
              return n3 ? r3.toLowerCase() : r3;
            };
            return r2.replace(y2, (function(t3, r3) {
              return r3 || (function(t4) {
                switch (t4) {
                  case "YY":
                    return String(e2.$y).slice(-2);
                  case "YYYY":
                    return b2.s(e2.$y, 4, "0");
                  case "M":
                    return a2 + 1;
                  case "MM":
                    return b2.s(a2 + 1, 2, "0");
                  case "MMM":
                    return h3(n2.monthsShort, a2, c3, 3);
                  case "MMMM":
                    return h3(c3, a2);
                  case "D":
                    return e2.$D;
                  case "DD":
                    return b2.s(e2.$D, 2, "0");
                  case "d":
                    return String(e2.$W);
                  case "dd":
                    return h3(n2.weekdaysMin, e2.$W, o2, 2);
                  case "ddd":
                    return h3(n2.weekdaysShort, e2.$W, o2, 3);
                  case "dddd":
                    return o2[e2.$W];
                  case "H":
                    return String(s2);
                  case "HH":
                    return b2.s(s2, 2, "0");
                  case "h":
                    return d2(1);
                  case "hh":
                    return d2(2);
                  case "a":
                    return $2(s2, u3, true);
                  case "A":
                    return $2(s2, u3, false);
                  case "m":
                    return String(u3);
                  case "mm":
                    return b2.s(u3, 2, "0");
                  case "s":
                    return String(e2.$s);
                  case "ss":
                    return b2.s(e2.$s, 2, "0");
                  case "SSS":
                    return b2.s(e2.$ms, 3, "0");
                  case "Z":
                    return i2;
                }
                return null;
              })(t3) || i2.replace(":", "");
            }));
          }, m3.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m3.diff = function(r2, d2, l2) {
            var $2, y3 = this, M3 = b2.p(d2), m4 = O(r2), v3 = (m4.utcOffset() - this.utcOffset()) * e, g3 = this - m4, D2 = function() {
              return b2.m(y3, m4);
            };
            switch (M3) {
              case h2:
                $2 = D2() / 12;
                break;
              case c2:
                $2 = D2();
                break;
              case f2:
                $2 = D2() / 3;
                break;
              case o:
                $2 = (g3 - v3) / 6048e5;
                break;
              case a:
                $2 = (g3 - v3) / 864e5;
                break;
              case u2:
                $2 = g3 / n;
                break;
              case s:
                $2 = g3 / e;
                break;
              case i:
                $2 = g3 / t;
                break;
              default:
                $2 = g3;
            }
            return l2 ? $2 : b2.a($2);
          }, m3.daysInMonth = function() {
            return this.endOf(c2).$D;
          }, m3.$locale = function() {
            return D[this.$L];
          }, m3.locale = function(t2, e2) {
            if (!t2) return this.$L;
            var n2 = this.clone(), r2 = w2(t2, e2, true);
            return r2 && (n2.$L = r2), n2;
          }, m3.clone = function() {
            return b2.w(this.$d, this);
          }, m3.toDate = function() {
            return new Date(this.valueOf());
          }, m3.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m3.toISOString = function() {
            return this.$d.toISOString();
          }, m3.toString = function() {
            return this.$d.toUTCString();
          }, M2;
        })(), k = _.prototype;
        return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u2], ["$W", a], ["$M", c2], ["$y", h2], ["$D", d]].forEach((function(t2) {
          k[t2[1]] = function(e2) {
            return this.$g(e2, t2[0], t2[1]);
          };
        })), O.extend = function(t2, e2) {
          return t2.$i || (t2(e2, _, O), t2.$i = true), O;
        }, O.locale = w2, O.isDayjs = S, O.unix = function(t2) {
          return O(1e3 * t2);
        }, O.en = D[g2], O.Ls = D, O.p = {}, O;
      }));
    }
  });

  // node_modules/@ozntel/local-storage-handler/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@ozntel/local-storage-handler/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LocalStorageHandler = void 0;
      var LocalStorageHandler2 = (
        /** @class */
        /* @__PURE__ */ (function() {
          function LocalStorageHandler3(params2) {
            var _this = this;
            this.getTimeStampKey = function(key) {
              return key + "-timestamp";
            };
            this.getFromLocalStorage = function(params3) {
              var key = params3.key, checkCacheHours = params3.checkCacheHours, cacheHours2 = params3.cacheHours;
              var localData = localStorage.getItem(key);
              var localDataTimeStamp = localStorage.getItem(_this.getTimeStampKey(key));
              if (checkCacheHours !== void 0) {
                if (!checkCacheHours)
                  return localData;
              }
              if (cacheHours2)
                _this.cacheHours = cacheHours2;
              if (localDataTimeStamp !== null) {
                var dt = new Date(JSON.parse(localDataTimeStamp));
                var hours = Math.abs((/* @__PURE__ */ new Date()).getTime() - dt.getTime()) / 36e5;
                if (hours < _this.cacheHours && localData !== null) {
                  return localData;
                }
              }
              return null;
            };
            this.setLocalStorage = function(params3) {
              var key = params3.key, value = params3.value;
              localStorage.setItem(key, value);
              localStorage.setItem(_this.getTimeStampKey(key), JSON.stringify(/* @__PURE__ */ new Date()));
              return "success";
            };
            this.removeFromLocalStorage = function(params3) {
              var key = params3.key;
              var localData = localStorage.getItem(key);
              if (!localData)
                return "not-found";
              localStorage.removeItem(key);
              var timestampKey = _this.getTimeStampKey(key);
              var localTimestamp = localStorage.getItem(timestampKey);
              if (localTimestamp)
                localStorage.removeItem(timestampKey);
              return "success";
            };
            var cacheHours = params2.cacheHours;
            this.cacheHours = cacheHours ? cacheHours : 24;
          }
          return LocalStorageHandler3;
        })()
      );
      exports.LocalStorageHandler = LocalStorageHandler2;
    }
  });

  // tests/mobile-browser/fixture.tsx
  var import_react24 = __toESM(require_react());
  var import_client = __toESM(require_client());

  // node_modules/recoil/es/index.js
  var import_react = __toESM(require_react());
  var import_react_dom = __toESM(require_react_dom());
  function err(message) {
    const error = new Error(message);
    if (error.stack === void 0) {
      try {
        throw error;
      } catch (_) {
      }
    }
    return error;
  }
  var err_1 = err;
  var Recoil_err = err_1;
  function isPromise(p2) {
    return !!p2 && typeof p2.then === "function";
  }
  var Recoil_isPromise = isPromise;
  function nullthrows(x, message) {
    if (x != null) {
      return x;
    }
    throw Recoil_err(message !== null && message !== void 0 ? message : "Got unexpected null or undefined");
  }
  var Recoil_nullthrows = nullthrows;
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var BaseLoadable = class {
    getValue() {
      throw Recoil_err("BaseLoadable");
    }
    toPromise() {
      throw Recoil_err("BaseLoadable");
    }
    valueMaybe() {
      throw Recoil_err("BaseLoadable");
    }
    valueOrThrow() {
      throw Recoil_err(`Loadable expected value, but in "${this.state}" state`);
    }
    promiseMaybe() {
      throw Recoil_err("BaseLoadable");
    }
    promiseOrThrow() {
      throw Recoil_err(`Loadable expected promise, but in "${this.state}" state`);
    }
    errorMaybe() {
      throw Recoil_err("BaseLoadable");
    }
    errorOrThrow() {
      throw Recoil_err(`Loadable expected error, but in "${this.state}" state`);
    }
    is(other) {
      return other.state === this.state && other.contents === this.contents;
    }
    map(_map) {
      throw Recoil_err("BaseLoadable");
    }
  };
  var ValueLoadable = class extends BaseLoadable {
    constructor(value) {
      super();
      _defineProperty(this, "state", "hasValue");
      _defineProperty(this, "contents", void 0);
      this.contents = value;
    }
    getValue() {
      return this.contents;
    }
    toPromise() {
      return Promise.resolve(this.contents);
    }
    valueMaybe() {
      return this.contents;
    }
    valueOrThrow() {
      return this.contents;
    }
    promiseMaybe() {
      return void 0;
    }
    errorMaybe() {
      return void 0;
    }
    map(map2) {
      try {
        const next = map2(this.contents);
        return Recoil_isPromise(next) ? loadableWithPromise(next) : isLoadable(next) ? next : loadableWithValue(next);
      } catch (e) {
        return Recoil_isPromise(e) ? (
          // If we "suspended", then try again.
          // errors and subsequent retries will be handled in 'loading' case
          // $FlowFixMe[prop-missing]
          loadableWithPromise(e.next(() => this.map(map2)))
        ) : loadableWithError(e);
      }
    }
  };
  var ErrorLoadable = class extends BaseLoadable {
    constructor(error) {
      super();
      _defineProperty(this, "state", "hasError");
      _defineProperty(this, "contents", void 0);
      this.contents = error;
    }
    getValue() {
      throw this.contents;
    }
    toPromise() {
      return Promise.reject(this.contents);
    }
    valueMaybe() {
      return void 0;
    }
    promiseMaybe() {
      return void 0;
    }
    errorMaybe() {
      return this.contents;
    }
    errorOrThrow() {
      return this.contents;
    }
    map(_map) {
      return this;
    }
  };
  var LoadingLoadable = class extends BaseLoadable {
    constructor(promise) {
      super();
      _defineProperty(this, "state", "loading");
      _defineProperty(this, "contents", void 0);
      this.contents = promise;
    }
    getValue() {
      throw this.contents;
    }
    toPromise() {
      return this.contents;
    }
    valueMaybe() {
      return void 0;
    }
    promiseMaybe() {
      return this.contents;
    }
    promiseOrThrow() {
      return this.contents;
    }
    errorMaybe() {
      return void 0;
    }
    map(map2) {
      return loadableWithPromise(this.contents.then((value) => {
        const next = map2(value);
        if (isLoadable(next)) {
          const nextLoadable = next;
          switch (nextLoadable.state) {
            case "hasValue":
              return nextLoadable.contents;
            case "hasError":
              throw nextLoadable.contents;
            case "loading":
              return nextLoadable.contents;
          }
        }
        return next;
      }).catch((e) => {
        if (Recoil_isPromise(e)) {
          return e.then(() => this.map(map2).contents);
        }
        throw e;
      }));
    }
  };
  function loadableWithValue(value) {
    return Object.freeze(new ValueLoadable(value));
  }
  function loadableWithError(error) {
    return Object.freeze(new ErrorLoadable(error));
  }
  function loadableWithPromise(promise) {
    return Object.freeze(new LoadingLoadable(promise));
  }
  function loadableLoading() {
    return Object.freeze(new LoadingLoadable(new Promise(() => {
    })));
  }
  function loadableAllArray(inputs) {
    return inputs.every((i) => i.state === "hasValue") ? loadableWithValue(inputs.map((i) => i.contents)) : inputs.some((i) => i.state === "hasError") ? loadableWithError(Recoil_nullthrows(inputs.find((i) => i.state === "hasError"), "Invalid loadable passed to loadableAll").contents) : loadableWithPromise(Promise.all(inputs.map((i) => i.contents)));
  }
  function loadableAll(inputs) {
    const unwrapedInputs = Array.isArray(inputs) ? inputs : Object.getOwnPropertyNames(inputs).map((key) => inputs[key]);
    const normalizedInputs = unwrapedInputs.map((x) => isLoadable(x) ? x : Recoil_isPromise(x) ? loadableWithPromise(x) : loadableWithValue(x));
    const output = loadableAllArray(normalizedInputs);
    return Array.isArray(inputs) ? (
      // $FlowIssue[incompatible-return]
      output
    ) : (
      // Object.getOwnPropertyNames() has consistent key ordering with ES6
      // $FlowIssue[incompatible-call]
      output.map((outputs) => Object.getOwnPropertyNames(inputs).reduce(
        // $FlowFixMe[invalid-computed-prop]
        (out, key, idx) => ({
          ...out,
          [key]: outputs[idx]
        }),
        {}
      ))
    );
  }
  function isLoadable(x) {
    return x instanceof BaseLoadable;
  }
  var LoadableStaticInterface = {
    of: (value) => Recoil_isPromise(value) ? loadableWithPromise(value) : isLoadable(value) ? value : loadableWithValue(value),
    error: (error) => loadableWithError(error),
    // $FlowIssue[incompatible-return]
    loading: () => loadableLoading(),
    // $FlowIssue[unclear-type]
    all: loadableAll,
    isLoadable
  };
  var Recoil_Loadable = {
    loadableWithValue,
    loadableWithError,
    loadableWithPromise,
    loadableLoading,
    loadableAll,
    isLoadable,
    RecoilLoadable: LoadableStaticInterface
  };
  var Recoil_Loadable_1 = Recoil_Loadable.loadableWithValue;
  var Recoil_Loadable_2 = Recoil_Loadable.loadableWithError;
  var Recoil_Loadable_3 = Recoil_Loadable.loadableWithPromise;
  var Recoil_Loadable_4 = Recoil_Loadable.loadableLoading;
  var Recoil_Loadable_5 = Recoil_Loadable.loadableAll;
  var Recoil_Loadable_6 = Recoil_Loadable.isLoadable;
  var Recoil_Loadable_7 = Recoil_Loadable.RecoilLoadable;
  var Recoil_Loadable$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    loadableWithValue: Recoil_Loadable_1,
    loadableWithError: Recoil_Loadable_2,
    loadableWithPromise: Recoil_Loadable_3,
    loadableLoading: Recoil_Loadable_4,
    loadableAll: Recoil_Loadable_5,
    isLoadable: Recoil_Loadable_6,
    RecoilLoadable: Recoil_Loadable_7
  });
  var env = {
    RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: true,
    // Note: RECOIL_GKS_ENABLED settings will only be honored in OSS builds of Recoil
    RECOIL_GKS_ENABLED: /* @__PURE__ */ new Set(["recoil_hamt_2020", "recoil_sync_external_store", "recoil_suppress_rerender_in_callback", "recoil_memory_managament_2020"])
  };
  function readProcessEnvBooleanFlag(name, set) {
    var _process$env$name, _process$env$name$toL;
    const sanitizedValue = (_process$env$name = process.env[name]) === null || _process$env$name === void 0 ? void 0 : (_process$env$name$toL = _process$env$name.toLowerCase()) === null || _process$env$name$toL === void 0 ? void 0 : _process$env$name$toL.trim();
    if (sanitizedValue == null || sanitizedValue === "") {
      return;
    }
    const allowedValues = ["true", "false"];
    if (!allowedValues.includes(sanitizedValue)) {
      throw Recoil_err(`process.env.${name} value must be 'true', 'false', or empty: ${sanitizedValue}`);
    }
    set(sanitizedValue === "true");
  }
  function readProcessEnvStringArrayFlag(name, set) {
    var _process$env$name2;
    const sanitizedValue = (_process$env$name2 = process.env[name]) === null || _process$env$name2 === void 0 ? void 0 : _process$env$name2.trim();
    if (sanitizedValue == null || sanitizedValue === "") {
      return;
    }
    set(sanitizedValue.split(/\s*,\s*|\s+/));
  }
  function applyProcessEnvFlagOverrides() {
    var _process;
    if (typeof process === "undefined") {
      return;
    }
    if (((_process = process) === null || _process === void 0 ? void 0 : _process.env) == null) {
      return;
    }
    readProcessEnvBooleanFlag("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (value) => {
      env.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = value;
    });
    readProcessEnvStringArrayFlag("RECOIL_GKS_ENABLED", (value) => {
      value.forEach((gk) => {
        env.RECOIL_GKS_ENABLED.add(gk);
      });
    });
  }
  applyProcessEnvFlagOverrides();
  var Recoil_RecoilEnv = env;
  function Recoil_gkx_OSS(gk) {
    return Recoil_RecoilEnv.RECOIL_GKS_ENABLED.has(gk);
  }
  Recoil_gkx_OSS.setPass = (gk) => {
    Recoil_RecoilEnv.RECOIL_GKS_ENABLED.add(gk);
  };
  Recoil_gkx_OSS.setFail = (gk) => {
    Recoil_RecoilEnv.RECOIL_GKS_ENABLED.delete(gk);
  };
  Recoil_gkx_OSS.clear = () => {
    Recoil_RecoilEnv.RECOIL_GKS_ENABLED.clear();
  };
  var Recoil_gkx = Recoil_gkx_OSS;
  function recoverableViolation(message, _projectName, {
    error
  } = {}) {
    if (false) {
      console.error(message, error);
    }
    return null;
  }
  var recoverableViolation_1 = recoverableViolation;
  var Recoil_recoverableViolation = recoverableViolation_1;
  var _createMutableSource;
  var _useMutableSource;
  var _useSyncExternalStore;
  var createMutableSource = (
    // flowlint-next-line unclear-type:off
    (_createMutableSource = import_react.default.createMutableSource) !== null && _createMutableSource !== void 0 ? _createMutableSource : import_react.default.unstable_createMutableSource
  );
  var useMutableSource = (
    // flowlint-next-line unclear-type:off
    (_useMutableSource = import_react.default.useMutableSource) !== null && _useMutableSource !== void 0 ? _useMutableSource : import_react.default.unstable_useMutableSource
  );
  var useSyncExternalStore = (
    // flowlint-next-line unclear-type:off
    (_useSyncExternalStore = import_react.default.useSyncExternalStore) !== null && _useSyncExternalStore !== void 0 ? _useSyncExternalStore : (
      // flowlint-next-line unclear-type:off
      import_react.default.unstable_useSyncExternalStore
    )
  );
  var ReactRendererVersionMismatchWarnOnce = false;
  function currentRendererSupportsUseSyncExternalStore() {
    var _ReactCurrentDispatch;
    const {
      ReactCurrentDispatcher,
      ReactCurrentOwner
    } = (
      /* $FlowFixMe[prop-missing] This workaround was approved as a safer mechanism
       * to detect if the current renderer supports useSyncExternalStore()
       * https://fb.workplace.com/groups/reactjs/posts/9558682330846963/ */
      import_react.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    );
    const dispatcher = (_ReactCurrentDispatch = ReactCurrentDispatcher === null || ReactCurrentDispatcher === void 0 ? void 0 : ReactCurrentDispatcher.current) !== null && _ReactCurrentDispatch !== void 0 ? _ReactCurrentDispatch : ReactCurrentOwner.currentDispatcher;
    const isUseSyncExternalStoreSupported = dispatcher.useSyncExternalStore != null;
    if (useSyncExternalStore && !isUseSyncExternalStoreSupported && !ReactRendererVersionMismatchWarnOnce) {
      ReactRendererVersionMismatchWarnOnce = true;
      Recoil_recoverableViolation("A React renderer without React 18+ API support is being used with React 18+.");
    }
    return isUseSyncExternalStoreSupported;
  }
  function reactMode() {
    if (Recoil_gkx("recoil_transition_support")) {
      return {
        mode: "TRANSITION_SUPPORT",
        early: true,
        concurrent: true
      };
    }
    if (Recoil_gkx("recoil_sync_external_store") && useSyncExternalStore != null) {
      return {
        mode: "SYNC_EXTERNAL_STORE",
        early: true,
        concurrent: false
      };
    }
    if (Recoil_gkx("recoil_mutable_source") && useMutableSource != null && typeof window !== "undefined" && !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE) {
      return Recoil_gkx("recoil_suppress_rerender_in_callback") ? {
        mode: "MUTABLE_SOURCE",
        early: true,
        concurrent: true
      } : {
        mode: "MUTABLE_SOURCE",
        early: false,
        concurrent: false
      };
    }
    return Recoil_gkx("recoil_suppress_rerender_in_callback") ? {
      mode: "LEGACY",
      early: true,
      concurrent: false
    } : {
      mode: "LEGACY",
      early: false,
      concurrent: false
    };
  }
  function isFastRefreshEnabled() {
    return false;
  }
  var Recoil_ReactMode = {
    createMutableSource,
    useMutableSource,
    useSyncExternalStore,
    currentRendererSupportsUseSyncExternalStore,
    reactMode,
    isFastRefreshEnabled
  };
  var AbstractRecoilValue = class {
    constructor(newKey) {
      _defineProperty(this, "key", void 0);
      this.key = newKey;
    }
    toJSON() {
      return {
        key: this.key
      };
    }
  };
  var RecoilState = class extends AbstractRecoilValue {
  };
  var RecoilValueReadOnly = class extends AbstractRecoilValue {
  };
  function isRecoilValue(x) {
    return x instanceof RecoilState || x instanceof RecoilValueReadOnly;
  }
  var Recoil_RecoilValue = {
    AbstractRecoilValue,
    RecoilState,
    RecoilValueReadOnly,
    isRecoilValue
  };
  var Recoil_RecoilValue_1 = Recoil_RecoilValue.AbstractRecoilValue;
  var Recoil_RecoilValue_2 = Recoil_RecoilValue.RecoilState;
  var Recoil_RecoilValue_3 = Recoil_RecoilValue.RecoilValueReadOnly;
  var Recoil_RecoilValue_4 = Recoil_RecoilValue.isRecoilValue;
  var Recoil_RecoilValue$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    AbstractRecoilValue: Recoil_RecoilValue_1,
    RecoilState: Recoil_RecoilValue_2,
    RecoilValueReadOnly: Recoil_RecoilValue_3,
    isRecoilValue: Recoil_RecoilValue_4
  });
  function expectationViolation(format, ...args) {
    if (false) {
      const message = sprintf_1.call(null, format, ...args);
      const error = new Error(message);
      error.name = "Expectation Violation";
      console.error(error);
    }
  }
  var expectationViolation_1 = expectationViolation;
  var Recoil_expectationViolation = expectationViolation_1;
  function mapIterable(iterable, callback) {
    return (function* () {
      let index = 0;
      for (const value of iterable) {
        yield callback(value, index++);
      }
    })();
  }
  var Recoil_mapIterable = mapIterable;
  var {
    isFastRefreshEnabled: isFastRefreshEnabled$1
  } = Recoil_ReactMode;
  var DefaultValue = class {
  };
  var DEFAULT_VALUE = new DefaultValue();
  var nodes = /* @__PURE__ */ new Map();
  var recoilValues = /* @__PURE__ */ new Map();
  function recoilValuesForKeys(keys) {
    return Recoil_mapIterable(keys, (key) => Recoil_nullthrows(recoilValues.get(key)));
  }
  function checkForDuplicateAtomKey(key) {
    if (nodes.has(key)) {
      const message = `Duplicate atom key "${key}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
      if (false) {
        if (!isFastRefreshEnabled$1()) {
          Recoil_expectationViolation(message, "recoil");
        }
      } else {
        console.warn(message);
      }
    }
  }
  function registerNode(node) {
    if (Recoil_RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED) {
      checkForDuplicateAtomKey(node.key);
    }
    nodes.set(node.key, node);
    const recoilValue = node.set == null ? new Recoil_RecoilValue$1.RecoilValueReadOnly(node.key) : new Recoil_RecoilValue$1.RecoilState(node.key);
    recoilValues.set(node.key, recoilValue);
    return recoilValue;
  }
  var NodeMissingError = class extends Error {
  };
  function getNode(key) {
    const node = nodes.get(key);
    if (node == null) {
      throw new NodeMissingError(`Missing definition for RecoilValue: "${key}""`);
    }
    return node;
  }
  function getNodeMaybe(key) {
    return nodes.get(key);
  }
  var configDeletionHandlers = /* @__PURE__ */ new Map();
  function deleteNodeConfigIfPossible(key) {
    var _node$shouldDeleteCon;
    if (!Recoil_gkx("recoil_memory_managament_2020")) {
      return;
    }
    const node = nodes.get(key);
    if (node !== null && node !== void 0 && (_node$shouldDeleteCon = node.shouldDeleteConfigOnRelease) !== null && _node$shouldDeleteCon !== void 0 && _node$shouldDeleteCon.call(node)) {
      var _getConfigDeletionHan;
      nodes.delete(key);
      (_getConfigDeletionHan = getConfigDeletionHandler(key)) === null || _getConfigDeletionHan === void 0 ? void 0 : _getConfigDeletionHan();
      configDeletionHandlers.delete(key);
    }
  }
  function setConfigDeletionHandler(key, fn) {
    if (!Recoil_gkx("recoil_memory_managament_2020")) {
      return;
    }
    if (fn === void 0) {
      configDeletionHandlers.delete(key);
    } else {
      configDeletionHandlers.set(key, fn);
    }
  }
  function getConfigDeletionHandler(key) {
    return configDeletionHandlers.get(key);
  }
  var Recoil_Node = {
    nodes,
    recoilValues,
    registerNode,
    getNode,
    getNodeMaybe,
    deleteNodeConfigIfPossible,
    setConfigDeletionHandler,
    getConfigDeletionHandler,
    recoilValuesForKeys,
    NodeMissingError,
    DefaultValue,
    DEFAULT_VALUE
  };
  function enqueueExecution(s, f2) {
    f2();
  }
  var Recoil_Queue = {
    enqueueExecution
  };
  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }
  var hamt_1 = createCommonjsModule(function(module) {
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var hamt = {};
    var SIZE = 5;
    var BUCKET_SIZE = Math.pow(2, SIZE);
    var MASK = BUCKET_SIZE - 1;
    var MAX_INDEX_NODE = BUCKET_SIZE / 2;
    var MIN_ARRAY_NODE = BUCKET_SIZE / 4;
    var nothing = {};
    var constant = function constant2(x) {
      return function() {
        return x;
      };
    };
    var hash = hamt.hash = function(str) {
      var type = typeof str === "undefined" ? "undefined" : _typeof(str);
      if (type === "number") return str;
      if (type !== "string") str += "";
      var hash2 = 0;
      for (var i = 0, len = str.length; i < len; ++i) {
        var c2 = str.charCodeAt(i);
        hash2 = (hash2 << 5) - hash2 + c2 | 0;
      }
      return hash2;
    };
    var popcount = function popcount2(x) {
      x -= x >> 1 & 1431655765;
      x = (x & 858993459) + (x >> 2 & 858993459);
      x = x + (x >> 4) & 252645135;
      x += x >> 8;
      x += x >> 16;
      return x & 127;
    };
    var hashFragment = function hashFragment2(shift, h2) {
      return h2 >>> shift & MASK;
    };
    var toBitmap = function toBitmap2(x) {
      return 1 << x;
    };
    var fromBitmap = function fromBitmap2(bitmap, bit) {
      return popcount(bitmap & bit - 1);
    };
    var arrayUpdate = function arrayUpdate2(mutate2, at, v2, arr) {
      var out = arr;
      if (!mutate2) {
        var len = arr.length;
        out = new Array(len);
        for (var i = 0; i < len; ++i) {
          out[i] = arr[i];
        }
      }
      out[at] = v2;
      return out;
    };
    var arraySpliceOut = function arraySpliceOut2(mutate2, at, arr) {
      var newLen = arr.length - 1;
      var i = 0;
      var g2 = 0;
      var out = arr;
      if (mutate2) {
        i = g2 = at;
      } else {
        out = new Array(newLen);
        while (i < at) {
          out[g2++] = arr[i++];
        }
      }
      ++i;
      while (i <= newLen) {
        out[g2++] = arr[i++];
      }
      if (mutate2) {
        out.length = newLen;
      }
      return out;
    };
    var arraySpliceIn = function arraySpliceIn2(mutate2, at, v2, arr) {
      var len = arr.length;
      if (mutate2) {
        var _i = len;
        while (_i >= at) {
          arr[_i--] = arr[_i];
        }
        arr[at] = v2;
        return arr;
      }
      var i = 0, g2 = 0;
      var out = new Array(len + 1);
      while (i < at) {
        out[g2++] = arr[i++];
      }
      out[at] = v2;
      while (i < len) {
        out[++g2] = arr[i++];
      }
      return out;
    };
    var LEAF = 1;
    var COLLISION = 2;
    var INDEX = 3;
    var ARRAY = 4;
    var empty = {
      __hamt_isEmpty: true
    };
    var isEmptyNode = function isEmptyNode2(x) {
      return x === empty || x && x.__hamt_isEmpty;
    };
    var Leaf = function Leaf2(edit, hash2, key, value) {
      return {
        type: LEAF,
        edit,
        hash: hash2,
        key,
        value,
        _modify: Leaf__modify
      };
    };
    var Collision = function Collision2(edit, hash2, children) {
      return {
        type: COLLISION,
        edit,
        hash: hash2,
        children,
        _modify: Collision__modify
      };
    };
    var IndexedNode = function IndexedNode2(edit, mask, children) {
      return {
        type: INDEX,
        edit,
        mask,
        children,
        _modify: IndexedNode__modify
      };
    };
    var ArrayNode = function ArrayNode2(edit, size, children) {
      return {
        type: ARRAY,
        edit,
        size,
        children,
        _modify: ArrayNode__modify
      };
    };
    var isLeaf = function isLeaf2(node) {
      return node === empty || node.type === LEAF || node.type === COLLISION;
    };
    var expand = function expand2(edit, frag, child2, bitmap, subNodes) {
      var arr = [];
      var bit = bitmap;
      var count2 = 0;
      for (var i = 0; bit; ++i) {
        if (bit & 1) arr[i] = subNodes[count2++];
        bit >>>= 1;
      }
      arr[frag] = child2;
      return ArrayNode(edit, count2 + 1, arr);
    };
    var pack = function pack2(edit, count2, removed, elements) {
      var children = new Array(count2 - 1);
      var g2 = 0;
      var bitmap = 0;
      for (var i = 0, len = elements.length; i < len; ++i) {
        if (i !== removed) {
          var elem = elements[i];
          if (elem && !isEmptyNode(elem)) {
            children[g2++] = elem;
            bitmap |= 1 << i;
          }
        }
      }
      return IndexedNode(edit, bitmap, children);
    };
    var mergeLeaves = function mergeLeaves2(edit, shift, h1, n1, h2, n2) {
      if (h1 === h2) return Collision(edit, h1, [n2, n1]);
      var subH1 = hashFragment(shift, h1);
      var subH2 = hashFragment(shift, h2);
      return IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), subH1 === subH2 ? [mergeLeaves2(edit, shift + SIZE, h1, n1, h2, n2)] : subH1 < subH2 ? [n1, n2] : [n2, n1]);
    };
    var updateCollisionList = function updateCollisionList2(mutate2, edit, keyEq, h2, list, f2, k, size) {
      var len = list.length;
      for (var i = 0; i < len; ++i) {
        var child2 = list[i];
        if (keyEq(k, child2.key)) {
          var value = child2.value;
          var _newValue = f2(value);
          if (_newValue === value) return list;
          if (_newValue === nothing) {
            --size.value;
            return arraySpliceOut(mutate2, i, list);
          }
          return arrayUpdate(mutate2, i, Leaf(edit, h2, k, _newValue), list);
        }
      }
      var newValue = f2();
      if (newValue === nothing) return list;
      ++size.value;
      return arrayUpdate(mutate2, len, Leaf(edit, h2, k, newValue), list);
    };
    var canEditNode = function canEditNode2(edit, node) {
      return edit === node.edit;
    };
    var Leaf__modify = function Leaf__modify2(edit, keyEq, shift, f2, h2, k, size) {
      if (keyEq(k, this.key)) {
        var _v = f2(this.value);
        if (_v === this.value) return this;
        else if (_v === nothing) {
          --size.value;
          return empty;
        }
        if (canEditNode(edit, this)) {
          this.value = _v;
          return this;
        }
        return Leaf(edit, h2, k, _v);
      }
      var v2 = f2();
      if (v2 === nothing) return this;
      ++size.value;
      return mergeLeaves(edit, shift, this.hash, this, h2, Leaf(edit, h2, k, v2));
    };
    var Collision__modify = function Collision__modify2(edit, keyEq, shift, f2, h2, k, size) {
      if (h2 === this.hash) {
        var canEdit = canEditNode(edit, this);
        var list = updateCollisionList(canEdit, edit, keyEq, this.hash, this.children, f2, k, size);
        if (list === this.children) return this;
        return list.length > 1 ? Collision(edit, this.hash, list) : list[0];
      }
      var v2 = f2();
      if (v2 === nothing) return this;
      ++size.value;
      return mergeLeaves(edit, shift, this.hash, this, h2, Leaf(edit, h2, k, v2));
    };
    var IndexedNode__modify = function IndexedNode__modify2(edit, keyEq, shift, f2, h2, k, size) {
      var mask = this.mask;
      var children = this.children;
      var frag = hashFragment(shift, h2);
      var bit = toBitmap(frag);
      var indx = fromBitmap(mask, bit);
      var exists = mask & bit;
      var current = exists ? children[indx] : empty;
      var child2 = current._modify(edit, keyEq, shift + SIZE, f2, h2, k, size);
      if (current === child2) return this;
      var canEdit = canEditNode(edit, this);
      var bitmap = mask;
      var newChildren = void 0;
      if (exists && isEmptyNode(child2)) {
        bitmap &= ~bit;
        if (!bitmap) return empty;
        if (children.length <= 2 && isLeaf(children[indx ^ 1])) return children[indx ^ 1];
        newChildren = arraySpliceOut(canEdit, indx, children);
      } else if (!exists && !isEmptyNode(child2)) {
        if (children.length >= MAX_INDEX_NODE) return expand(edit, frag, child2, mask, children);
        bitmap |= bit;
        newChildren = arraySpliceIn(canEdit, indx, child2, children);
      } else {
        newChildren = arrayUpdate(canEdit, indx, child2, children);
      }
      if (canEdit) {
        this.mask = bitmap;
        this.children = newChildren;
        return this;
      }
      return IndexedNode(edit, bitmap, newChildren);
    };
    var ArrayNode__modify = function ArrayNode__modify2(edit, keyEq, shift, f2, h2, k, size) {
      var count2 = this.size;
      var children = this.children;
      var frag = hashFragment(shift, h2);
      var child2 = children[frag];
      var newChild = (child2 || empty)._modify(edit, keyEq, shift + SIZE, f2, h2, k, size);
      if (child2 === newChild) return this;
      var canEdit = canEditNode(edit, this);
      var newChildren = void 0;
      if (isEmptyNode(child2) && !isEmptyNode(newChild)) {
        ++count2;
        newChildren = arrayUpdate(canEdit, frag, newChild, children);
      } else if (!isEmptyNode(child2) && isEmptyNode(newChild)) {
        --count2;
        if (count2 <= MIN_ARRAY_NODE) return pack(edit, count2, frag, children);
        newChildren = arrayUpdate(canEdit, frag, empty, children);
      } else {
        newChildren = arrayUpdate(canEdit, frag, newChild, children);
      }
      if (canEdit) {
        this.size = count2;
        this.children = newChildren;
        return this;
      }
      return ArrayNode(edit, count2, newChildren);
    };
    empty._modify = function(edit, keyEq, shift, f2, h2, k, size) {
      var v2 = f2();
      if (v2 === nothing) return empty;
      ++size.value;
      return Leaf(edit, h2, k, v2);
    };
    function Map2(editable, edit, config, root2, size) {
      this._editable = editable;
      this._edit = edit;
      this._config = config;
      this._root = root2;
      this._size = size;
    }
    Map2.prototype.setTree = function(newRoot, newSize) {
      if (this._editable) {
        this._root = newRoot;
        this._size = newSize;
        return this;
      }
      return newRoot === this._root ? this : new Map2(this._editable, this._edit, this._config, newRoot, newSize);
    };
    var tryGetHash = hamt.tryGetHash = function(alt, hash2, key, map2) {
      var node = map2._root;
      var shift = 0;
      var keyEq = map2._config.keyEq;
      while (true) {
        switch (node.type) {
          case LEAF: {
            return keyEq(key, node.key) ? node.value : alt;
          }
          case COLLISION: {
            if (hash2 === node.hash) {
              var children = node.children;
              for (var i = 0, len = children.length; i < len; ++i) {
                var child2 = children[i];
                if (keyEq(key, child2.key)) return child2.value;
              }
            }
            return alt;
          }
          case INDEX: {
            var frag = hashFragment(shift, hash2);
            var bit = toBitmap(frag);
            if (node.mask & bit) {
              node = node.children[fromBitmap(node.mask, bit)];
              shift += SIZE;
              break;
            }
            return alt;
          }
          case ARRAY: {
            node = node.children[hashFragment(shift, hash2)];
            if (node) {
              shift += SIZE;
              break;
            }
            return alt;
          }
          default:
            return alt;
        }
      }
    };
    Map2.prototype.tryGetHash = function(alt, hash2, key) {
      return tryGetHash(alt, hash2, key, this);
    };
    var tryGet = hamt.tryGet = function(alt, key, map2) {
      return tryGetHash(alt, map2._config.hash(key), key, map2);
    };
    Map2.prototype.tryGet = function(alt, key) {
      return tryGet(alt, key, this);
    };
    var getHash = hamt.getHash = function(hash2, key, map2) {
      return tryGetHash(void 0, hash2, key, map2);
    };
    Map2.prototype.getHash = function(hash2, key) {
      return getHash(hash2, key, this);
    };
    var get = hamt.get = function(key, map2) {
      return tryGetHash(void 0, map2._config.hash(key), key, map2);
    };
    Map2.prototype.get = function(key, alt) {
      return tryGet(alt, key, this);
    };
    var hasHash = hamt.has = function(hash2, key, map2) {
      return tryGetHash(nothing, hash2, key, map2) !== nothing;
    };
    Map2.prototype.hasHash = function(hash2, key) {
      return hasHash(hash2, key, this);
    };
    var has = hamt.has = function(key, map2) {
      return hasHash(map2._config.hash(key), key, map2);
    };
    Map2.prototype.has = function(key) {
      return has(key, this);
    };
    var defKeyCompare = function defKeyCompare2(x, y2) {
      return x === y2;
    };
    hamt.make = function(config) {
      return new Map2(0, 0, {
        keyEq: config && config.keyEq || defKeyCompare,
        hash: config && config.hash || hash
      }, empty, 0);
    };
    hamt.empty = hamt.make();
    var isEmpty = hamt.isEmpty = function(map2) {
      return map2 && !!isEmptyNode(map2._root);
    };
    Map2.prototype.isEmpty = function() {
      return isEmpty(this);
    };
    var modifyHash = hamt.modifyHash = function(f2, hash2, key, map2) {
      var size = {
        value: map2._size
      };
      var newRoot = map2._root._modify(map2._editable ? map2._edit : NaN, map2._config.keyEq, 0, f2, hash2, key, size);
      return map2.setTree(newRoot, size.value);
    };
    Map2.prototype.modifyHash = function(hash2, key, f2) {
      return modifyHash(f2, hash2, key, this);
    };
    var modify = hamt.modify = function(f2, key, map2) {
      return modifyHash(f2, map2._config.hash(key), key, map2);
    };
    Map2.prototype.modify = function(key, f2) {
      return modify(f2, key, this);
    };
    var setHash = hamt.setHash = function(hash2, key, value, map2) {
      return modifyHash(constant(value), hash2, key, map2);
    };
    Map2.prototype.setHash = function(hash2, key, value) {
      return setHash(hash2, key, value, this);
    };
    var set = hamt.set = function(key, value, map2) {
      return setHash(map2._config.hash(key), key, value, map2);
    };
    Map2.prototype.set = function(key, value) {
      return set(key, value, this);
    };
    var del = constant(nothing);
    var removeHash = hamt.removeHash = function(hash2, key, map2) {
      return modifyHash(del, hash2, key, map2);
    };
    Map2.prototype.removeHash = Map2.prototype.deleteHash = function(hash2, key) {
      return removeHash(hash2, key, this);
    };
    var remove = hamt.remove = function(key, map2) {
      return removeHash(map2._config.hash(key), key, map2);
    };
    Map2.prototype.remove = Map2.prototype.delete = function(key) {
      return remove(key, this);
    };
    var beginMutation = hamt.beginMutation = function(map2) {
      return new Map2(map2._editable + 1, map2._edit + 1, map2._config, map2._root, map2._size);
    };
    Map2.prototype.beginMutation = function() {
      return beginMutation(this);
    };
    var endMutation = hamt.endMutation = function(map2) {
      map2._editable = map2._editable && map2._editable - 1;
      return map2;
    };
    Map2.prototype.endMutation = function() {
      return endMutation(this);
    };
    var mutate = hamt.mutate = function(f2, map2) {
      var transient = beginMutation(map2);
      f2(transient);
      return endMutation(transient);
    };
    Map2.prototype.mutate = function(f2) {
      return mutate(f2, this);
    };
    var appk = function appk2(k) {
      return k && lazyVisitChildren(k[0], k[1], k[2], k[3], k[4]);
    };
    var lazyVisitChildren = function lazyVisitChildren2(len, children, i, f2, k) {
      while (i < len) {
        var child2 = children[i++];
        if (child2 && !isEmptyNode(child2)) return lazyVisit(child2, f2, [len, children, i, f2, k]);
      }
      return appk(k);
    };
    var lazyVisit = function lazyVisit2(node, f2, k) {
      switch (node.type) {
        case LEAF:
          return {
            value: f2(node),
            rest: k
          };
        case COLLISION:
        case ARRAY:
        case INDEX:
          var children = node.children;
          return lazyVisitChildren(children.length, children, 0, f2, k);
        default:
          return appk(k);
      }
    };
    var DONE = {
      done: true
    };
    function MapIterator(v2) {
      this.v = v2;
    }
    MapIterator.prototype.next = function() {
      if (!this.v) return DONE;
      var v0 = this.v;
      this.v = appk(v0.rest);
      return v0;
    };
    MapIterator.prototype[Symbol.iterator] = function() {
      return this;
    };
    var visit = function visit2(map2, f2) {
      return new MapIterator(lazyVisit(map2._root, f2));
    };
    var buildPairs = function buildPairs2(x) {
      return [x.key, x.value];
    };
    var entries = hamt.entries = function(map2) {
      return visit(map2, buildPairs);
    };
    Map2.prototype.entries = Map2.prototype[Symbol.iterator] = function() {
      return entries(this);
    };
    var buildKeys = function buildKeys2(x) {
      return x.key;
    };
    var keys = hamt.keys = function(map2) {
      return visit(map2, buildKeys);
    };
    Map2.prototype.keys = function() {
      return keys(this);
    };
    var buildValues = function buildValues2(x) {
      return x.value;
    };
    var values = hamt.values = Map2.prototype.values = function(map2) {
      return visit(map2, buildValues);
    };
    Map2.prototype.values = function() {
      return values(this);
    };
    var fold = hamt.fold = function(f2, z, m2) {
      var root2 = m2._root;
      if (root2.type === LEAF) return f2(z, root2.value, root2.key);
      var toVisit = [root2.children];
      var children = void 0;
      while (children = toVisit.pop()) {
        for (var i = 0, len = children.length; i < len; ) {
          var child2 = children[i++];
          if (child2 && child2.type) {
            if (child2.type === LEAF) z = f2(z, child2.value, child2.key);
            else toVisit.push(child2.children);
          }
        }
      }
      return z;
    };
    Map2.prototype.fold = function(f2, z) {
      return fold(f2, z, this);
    };
    var forEach = hamt.forEach = function(f2, map2) {
      return fold(function(_, value, key) {
        return f2(value, key, map2);
      }, null, map2);
    };
    Map2.prototype.forEach = function(f2) {
      return forEach(f2, this);
    };
    var count = hamt.count = function(map2) {
      return map2._size;
    };
    Map2.prototype.count = function() {
      return count(this);
    };
    Object.defineProperty(Map2.prototype, "size", {
      get: Map2.prototype.count
    });
    if (module.exports) {
      module.exports = hamt;
    } else {
      (void 0).hamt = hamt;
    }
  });
  var BuiltInMap = class {
    constructor(existing) {
      _defineProperty(this, "_map", void 0);
      this._map = new Map(existing === null || existing === void 0 ? void 0 : existing.entries());
    }
    keys() {
      return this._map.keys();
    }
    entries() {
      return this._map.entries();
    }
    get(k) {
      return this._map.get(k);
    }
    has(k) {
      return this._map.has(k);
    }
    set(k, v2) {
      this._map.set(k, v2);
      return this;
    }
    delete(k) {
      this._map.delete(k);
      return this;
    }
    clone() {
      return persistentMap(this);
    }
    toMap() {
      return new Map(this._map);
    }
  };
  var HashArrayMappedTrieMap = class _HashArrayMappedTrieMap {
    // Because hamt.empty is not a function there is no way to introduce type
    // parameters on it, so empty is typed as HAMTPlusMap<string, mixed>.
    // $FlowIssue
    constructor(existing) {
      _defineProperty(this, "_hamt", hamt_1.empty.beginMutation());
      if (existing instanceof _HashArrayMappedTrieMap) {
        const h2 = existing._hamt.endMutation();
        existing._hamt = h2.beginMutation();
        this._hamt = h2.beginMutation();
      } else if (existing) {
        for (const [k, v2] of existing.entries()) {
          this._hamt.set(k, v2);
        }
      }
    }
    keys() {
      return this._hamt.keys();
    }
    entries() {
      return this._hamt.entries();
    }
    get(k) {
      return this._hamt.get(k);
    }
    has(k) {
      return this._hamt.has(k);
    }
    set(k, v2) {
      this._hamt.set(k, v2);
      return this;
    }
    delete(k) {
      this._hamt.delete(k);
      return this;
    }
    clone() {
      return persistentMap(this);
    }
    toMap() {
      return new Map(this._hamt);
    }
  };
  function persistentMap(existing) {
    if (Recoil_gkx("recoil_hamt_2020")) {
      return new HashArrayMappedTrieMap(existing);
    } else {
      return new BuiltInMap(existing);
    }
  }
  var Recoil_PersistentMap = {
    persistentMap
  };
  var Recoil_PersistentMap_1 = Recoil_PersistentMap.persistentMap;
  var Recoil_PersistentMap$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    persistentMap: Recoil_PersistentMap_1
  });
  function differenceSets(set, ...setsWithValuesToRemove) {
    const ret = /* @__PURE__ */ new Set();
    FIRST: for (const value of set) {
      for (const otherSet of setsWithValuesToRemove) {
        if (otherSet.has(value)) {
          continue FIRST;
        }
      }
      ret.add(value);
    }
    return ret;
  }
  var Recoil_differenceSets = differenceSets;
  function mapMap(map2, callback) {
    const result = /* @__PURE__ */ new Map();
    map2.forEach((value, key) => {
      result.set(key, callback(value, key));
    });
    return result;
  }
  var Recoil_mapMap = mapMap;
  function makeGraph() {
    return {
      nodeDeps: /* @__PURE__ */ new Map(),
      nodeToNodeSubscriptions: /* @__PURE__ */ new Map()
    };
  }
  function cloneGraph(graph2) {
    return {
      nodeDeps: Recoil_mapMap(graph2.nodeDeps, (s) => new Set(s)),
      nodeToNodeSubscriptions: Recoil_mapMap(graph2.nodeToNodeSubscriptions, (s) => new Set(s))
    };
  }
  function mergeDepsIntoGraph(key, newDeps, graph2, olderGraph) {
    const {
      nodeDeps,
      nodeToNodeSubscriptions
    } = graph2;
    const oldDeps = nodeDeps.get(key);
    if (oldDeps && olderGraph && oldDeps !== olderGraph.nodeDeps.get(key)) {
      return;
    }
    nodeDeps.set(key, newDeps);
    const addedDeps = oldDeps == null ? newDeps : Recoil_differenceSets(newDeps, oldDeps);
    for (const dep of addedDeps) {
      if (!nodeToNodeSubscriptions.has(dep)) {
        nodeToNodeSubscriptions.set(dep, /* @__PURE__ */ new Set());
      }
      const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(dep));
      existing.add(key);
    }
    if (oldDeps) {
      const removedDeps = Recoil_differenceSets(oldDeps, newDeps);
      for (const dep of removedDeps) {
        if (!nodeToNodeSubscriptions.has(dep)) {
          return;
        }
        const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(dep));
        existing.delete(key);
        if (existing.size === 0) {
          nodeToNodeSubscriptions.delete(dep);
        }
      }
    }
  }
  function saveDepsToStore(key, deps, store, version) {
    var _storeState$nextTree, _storeState$previousT, _storeState$previousT2, _storeState$previousT3;
    const storeState = store.getState();
    if (!(version === storeState.currentTree.version || version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version))) {
      Recoil_recoverableViolation("Tried to save dependencies to a discarded tree");
    }
    const graph2 = store.getGraph(version);
    mergeDepsIntoGraph(key, deps, graph2);
    if (version === ((_storeState$previousT2 = storeState.previousTree) === null || _storeState$previousT2 === void 0 ? void 0 : _storeState$previousT2.version)) {
      const currentGraph = store.getGraph(storeState.currentTree.version);
      mergeDepsIntoGraph(key, deps, currentGraph, graph2);
    }
    if (version === ((_storeState$previousT3 = storeState.previousTree) === null || _storeState$previousT3 === void 0 ? void 0 : _storeState$previousT3.version) || version === storeState.currentTree.version) {
      var _storeState$nextTree2;
      const nextVersion = (_storeState$nextTree2 = storeState.nextTree) === null || _storeState$nextTree2 === void 0 ? void 0 : _storeState$nextTree2.version;
      if (nextVersion !== void 0) {
        const nextGraph = store.getGraph(nextVersion);
        mergeDepsIntoGraph(key, deps, nextGraph, graph2);
      }
    }
  }
  var Recoil_Graph = {
    cloneGraph,
    graph: makeGraph,
    saveDepsToStore
  };
  var nextTreeStateVersion = 0;
  var getNextTreeStateVersion = () => nextTreeStateVersion++;
  var nextStoreID = 0;
  var getNextStoreID = () => nextStoreID++;
  var nextComponentID = 0;
  var getNextComponentID = () => nextComponentID++;
  var Recoil_Keys = {
    getNextTreeStateVersion,
    getNextStoreID,
    getNextComponentID
  };
  var {
    persistentMap: persistentMap$1
  } = Recoil_PersistentMap$1;
  var {
    graph
  } = Recoil_Graph;
  var {
    getNextTreeStateVersion: getNextTreeStateVersion$1
  } = Recoil_Keys;
  function makeEmptyTreeState() {
    const version = getNextTreeStateVersion$1();
    return {
      version,
      stateID: version,
      transactionMetadata: {},
      dirtyAtoms: /* @__PURE__ */ new Set(),
      atomValues: persistentMap$1(),
      nonvalidatedAtoms: persistentMap$1()
    };
  }
  function makeEmptyStoreState() {
    const currentTree = makeEmptyTreeState();
    return {
      currentTree,
      nextTree: null,
      previousTree: null,
      commitDepth: 0,
      knownAtoms: /* @__PURE__ */ new Set(),
      knownSelectors: /* @__PURE__ */ new Set(),
      transactionSubscriptions: /* @__PURE__ */ new Map(),
      nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
      nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
      queuedComponentCallbacks_DEPRECATED: [],
      suspendedComponentResolvers: /* @__PURE__ */ new Set(),
      graphsByVersion: (/* @__PURE__ */ new Map()).set(currentTree.version, graph()),
      retention: {
        referenceCounts: /* @__PURE__ */ new Map(),
        nodesRetainedByZone: /* @__PURE__ */ new Map(),
        retainablesToCheckForRelease: /* @__PURE__ */ new Set()
      },
      nodeCleanupFunctions: /* @__PURE__ */ new Map()
    };
  }
  var Recoil_State = {
    makeEmptyTreeState,
    makeEmptyStoreState,
    getNextTreeStateVersion: getNextTreeStateVersion$1
  };
  var RetentionZone = class {
  };
  function retentionZone() {
    return new RetentionZone();
  }
  var Recoil_RetentionZone = {
    RetentionZone,
    retentionZone
  };
  function setByAddingToSet(set, v2) {
    const next = new Set(set);
    next.add(v2);
    return next;
  }
  function setByDeletingFromSet(set, v2) {
    const next = new Set(set);
    next.delete(v2);
    return next;
  }
  function mapBySettingInMap(map2, k, v2) {
    const next = new Map(map2);
    next.set(k, v2);
    return next;
  }
  function mapByUpdatingInMap(map2, k, updater) {
    const next = new Map(map2);
    next.set(k, updater(next.get(k)));
    return next;
  }
  function mapByDeletingFromMap(map2, k) {
    const next = new Map(map2);
    next.delete(k);
    return next;
  }
  function mapByDeletingMultipleFromMap(map2, ks) {
    const next = new Map(map2);
    ks.forEach((k) => next.delete(k));
    return next;
  }
  var Recoil_CopyOnWrite = {
    setByAddingToSet,
    setByDeletingFromSet,
    mapBySettingInMap,
    mapByUpdatingInMap,
    mapByDeletingFromMap,
    mapByDeletingMultipleFromMap
  };
  function* filterIterable(iterable, predicate) {
    let index = 0;
    for (const value of iterable) {
      if (predicate(value, index++)) {
        yield value;
      }
    }
  }
  var Recoil_filterIterable = filterIterable;
  function lazyProxy(base, factories) {
    const proxy = new Proxy(base, {
      // Compute and cache lazy property if not already done.
      get: (target, prop) => {
        if (!(prop in target) && prop in factories) {
          target[prop] = factories[prop]();
        }
        return target[prop];
      },
      // This method allows user to iterate keys as normal
      ownKeys: (target) => {
        return Object.keys(target);
      }
    });
    return proxy;
  }
  var Recoil_lazyProxy = lazyProxy;
  var {
    getNode: getNode$1,
    getNodeMaybe: getNodeMaybe$1,
    recoilValuesForKeys: recoilValuesForKeys$1
  } = Recoil_Node;
  var {
    RetentionZone: RetentionZone$1
  } = Recoil_RetentionZone;
  var {
    setByAddingToSet: setByAddingToSet$1
  } = Recoil_CopyOnWrite;
  var emptySet = Object.freeze(/* @__PURE__ */ new Set());
  var ReadOnlyRecoilValueError = class extends Error {
  };
  function initializeRetentionForNode(store, nodeKey, retainedBy) {
    if (!Recoil_gkx("recoil_memory_managament_2020")) {
      return () => void 0;
    }
    const {
      nodesRetainedByZone: nodesRetainedByZone2
    } = store.getState().retention;
    function addToZone(zone) {
      let set = nodesRetainedByZone2.get(zone);
      if (!set) {
        nodesRetainedByZone2.set(zone, set = /* @__PURE__ */ new Set());
      }
      set.add(nodeKey);
    }
    if (retainedBy instanceof RetentionZone$1) {
      addToZone(retainedBy);
    } else if (Array.isArray(retainedBy)) {
      for (const zone of retainedBy) {
        addToZone(zone);
      }
    }
    return () => {
      if (!Recoil_gkx("recoil_memory_managament_2020")) {
        return;
      }
      const {
        retention
      } = store.getState();
      function deleteFromZone(zone) {
        const set = retention.nodesRetainedByZone.get(zone);
        set === null || set === void 0 ? void 0 : set.delete(nodeKey);
        if (set && set.size === 0) {
          retention.nodesRetainedByZone.delete(zone);
        }
      }
      if (retainedBy instanceof RetentionZone$1) {
        deleteFromZone(retainedBy);
      } else if (Array.isArray(retainedBy)) {
        for (const zone of retainedBy) {
          deleteFromZone(zone);
        }
      }
    };
  }
  function initializeNodeIfNewToStore(store, treeState, key, trigger) {
    const storeState = store.getState();
    if (storeState.nodeCleanupFunctions.has(key)) {
      return;
    }
    const node = getNode$1(key);
    const retentionCleanup = initializeRetentionForNode(store, key, node.retainedBy);
    const nodeCleanup = node.init(store, treeState, trigger);
    storeState.nodeCleanupFunctions.set(key, () => {
      nodeCleanup();
      retentionCleanup();
    });
  }
  function initializeNode(store, key, trigger) {
    initializeNodeIfNewToStore(store, store.getState().currentTree, key, trigger);
  }
  function cleanUpNode(store, key) {
    var _state$nodeCleanupFun;
    const state = store.getState();
    (_state$nodeCleanupFun = state.nodeCleanupFunctions.get(key)) === null || _state$nodeCleanupFun === void 0 ? void 0 : _state$nodeCleanupFun();
    state.nodeCleanupFunctions.delete(key);
  }
  function getNodeLoadable(store, state, key) {
    initializeNodeIfNewToStore(store, state, key, "get");
    return getNode$1(key).get(store, state);
  }
  function peekNodeLoadable(store, state, key) {
    return getNode$1(key).peek(store, state);
  }
  function setUnvalidatedAtomValue_DEPRECATED(state, key, newValue) {
    var _node$invalidate;
    const node = getNodeMaybe$1(key);
    node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
    return {
      ...state,
      atomValues: state.atomValues.clone().delete(key),
      nonvalidatedAtoms: state.nonvalidatedAtoms.clone().set(key, newValue),
      dirtyAtoms: setByAddingToSet$1(state.dirtyAtoms, key)
    };
  }
  function setNodeValue(store, state, key, newValue) {
    const node = getNode$1(key);
    if (node.set == null) {
      throw new ReadOnlyRecoilValueError(`Attempt to set read-only RecoilValue: ${key}`);
    }
    const set = node.set;
    initializeNodeIfNewToStore(store, state, key, "set");
    return set(store, state, newValue);
  }
  function peekNodeInfo(store, state, key) {
    const storeState = store.getState();
    const graph2 = store.getGraph(state.version);
    const type = getNode$1(key).nodeType;
    return Recoil_lazyProxy({
      type
    }, {
      // $FlowFixMe[underconstrained-implicit-instantiation]
      loadable: () => peekNodeLoadable(store, state, key),
      isActive: () => storeState.knownAtoms.has(key) || storeState.knownSelectors.has(key),
      isSet: () => type === "selector" ? false : state.atomValues.has(key),
      isModified: () => state.dirtyAtoms.has(key),
      // Report current dependencies.  If the node hasn't been evaluated, then
      // dependencies may be missing based on the current state.
      deps: () => {
        var _graph$nodeDeps$get;
        return recoilValuesForKeys$1((_graph$nodeDeps$get = graph2.nodeDeps.get(key)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : []);
      },
      // Reports all "current" subscribers.  Evaluating other nodes or
      // previous in-progress async evaluations may introduce new subscribers.
      subscribers: () => {
        var _storeState$nodeToCom, _storeState$nodeToCom2;
        return {
          nodes: recoilValuesForKeys$1(Recoil_filterIterable(getDownstreamNodes(store, state, /* @__PURE__ */ new Set([key])), (nodeKey) => nodeKey !== key)),
          components: Recoil_mapIterable((_storeState$nodeToCom = (_storeState$nodeToCom2 = storeState.nodeToComponentSubscriptions.get(key)) === null || _storeState$nodeToCom2 === void 0 ? void 0 : _storeState$nodeToCom2.values()) !== null && _storeState$nodeToCom !== void 0 ? _storeState$nodeToCom : [], ([name]) => ({
            name
          }))
        };
      }
    });
  }
  function getDownstreamNodes(store, state, keys) {
    const visitedNodes = /* @__PURE__ */ new Set();
    const visitingNodes = Array.from(keys);
    const graph2 = store.getGraph(state.version);
    for (let key = visitingNodes.pop(); key; key = visitingNodes.pop()) {
      var _graph$nodeToNodeSubs;
      visitedNodes.add(key);
      const subscribedNodes = (_graph$nodeToNodeSubs = graph2.nodeToNodeSubscriptions.get(key)) !== null && _graph$nodeToNodeSubs !== void 0 ? _graph$nodeToNodeSubs : emptySet;
      for (const downstreamNode of subscribedNodes) {
        if (!visitedNodes.has(downstreamNode)) {
          visitingNodes.push(downstreamNode);
        }
      }
    }
    return visitedNodes;
  }
  var Recoil_FunctionalCore = {
    getNodeLoadable,
    peekNodeLoadable,
    setNodeValue,
    initializeNode,
    cleanUpNode,
    setUnvalidatedAtomValue_DEPRECATED,
    peekNodeInfo,
    getDownstreamNodes
  };
  var _invalidateMemoizedSnapshot = null;
  function setInvalidateMemoizedSnapshot(invalidate) {
    _invalidateMemoizedSnapshot = invalidate;
  }
  function invalidateMemoizedSnapshot() {
    var _invalidateMemoizedSn;
    (_invalidateMemoizedSn = _invalidateMemoizedSnapshot) === null || _invalidateMemoizedSn === void 0 ? void 0 : _invalidateMemoizedSn();
  }
  var Recoil_SnapshotCache = {
    setInvalidateMemoizedSnapshot,
    invalidateMemoizedSnapshot
  };
  var {
    getDownstreamNodes: getDownstreamNodes$1,
    getNodeLoadable: getNodeLoadable$1,
    setNodeValue: setNodeValue$1
  } = Recoil_FunctionalCore;
  var {
    getNextComponentID: getNextComponentID$1
  } = Recoil_Keys;
  var {
    getNode: getNode$2,
    getNodeMaybe: getNodeMaybe$2
  } = Recoil_Node;
  var {
    DefaultValue: DefaultValue$1
  } = Recoil_Node;
  var {
    reactMode: reactMode$1
  } = Recoil_ReactMode;
  var {
    AbstractRecoilValue: AbstractRecoilValue$1,
    RecoilState: RecoilState$1,
    RecoilValueReadOnly: RecoilValueReadOnly$1,
    isRecoilValue: isRecoilValue$1
  } = Recoil_RecoilValue$1;
  var {
    invalidateMemoizedSnapshot: invalidateMemoizedSnapshot$1
  } = Recoil_SnapshotCache;
  function getRecoilValueAsLoadable(store, {
    key
  }, treeState = store.getState().currentTree) {
    var _storeState$nextTree, _storeState$previousT;
    const storeState = store.getState();
    if (!(treeState.version === storeState.currentTree.version || treeState.version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || treeState.version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version))) {
      Recoil_recoverableViolation("Tried to read from a discarded tree");
    }
    const loadable = getNodeLoadable$1(store, treeState, key);
    if (loadable.state === "loading") {
      loadable.contents.catch(() => {
        return;
      });
    }
    return loadable;
  }
  function applyAtomValueWrites(atomValues, writes) {
    const result = atomValues.clone();
    writes.forEach((v2, k) => {
      if (v2.state === "hasValue" && v2.contents instanceof DefaultValue$1) {
        result.delete(k);
      } else {
        result.set(k, v2);
      }
    });
    return result;
  }
  function valueFromValueOrUpdater(store, state, {
    key
  }, valueOrUpdater) {
    if (typeof valueOrUpdater === "function") {
      const current = getNodeLoadable$1(store, state, key);
      if (current.state === "loading") {
        const msg = `Tried to set atom or selector "${key}" using an updater function while the current state is pending, this is not currently supported.`;
        Recoil_recoverableViolation(msg);
        throw Recoil_err(msg);
      } else if (current.state === "hasError") {
        throw current.contents;
      }
      return valueOrUpdater(current.contents);
    } else {
      return valueOrUpdater;
    }
  }
  function applyAction(store, state, action) {
    if (action.type === "set") {
      const {
        recoilValue,
        valueOrUpdater
      } = action;
      const newValue = valueFromValueOrUpdater(store, state, recoilValue, valueOrUpdater);
      const writes = setNodeValue$1(store, state, recoilValue.key, newValue);
      for (const [key, loadable] of writes.entries()) {
        writeLoadableToTreeState(state, key, loadable);
      }
    } else if (action.type === "setLoadable") {
      const {
        recoilValue: {
          key
        },
        loadable
      } = action;
      writeLoadableToTreeState(state, key, loadable);
    } else if (action.type === "markModified") {
      const {
        recoilValue: {
          key
        }
      } = action;
      state.dirtyAtoms.add(key);
    } else if (action.type === "setUnvalidated") {
      var _node$invalidate;
      const {
        recoilValue: {
          key
        },
        unvalidatedValue
      } = action;
      const node = getNodeMaybe$2(key);
      node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
      state.atomValues.delete(key);
      state.nonvalidatedAtoms.set(key, unvalidatedValue);
      state.dirtyAtoms.add(key);
    } else {
      Recoil_recoverableViolation(`Unknown action ${action.type}`);
    }
  }
  function writeLoadableToTreeState(state, key, loadable) {
    if (loadable.state === "hasValue" && loadable.contents instanceof DefaultValue$1) {
      state.atomValues.delete(key);
    } else {
      state.atomValues.set(key, loadable);
    }
    state.dirtyAtoms.add(key);
    state.nonvalidatedAtoms.delete(key);
  }
  function applyActionsToStore(store, actions) {
    store.replaceState((state) => {
      const newState = copyTreeState(state);
      for (const action of actions) {
        applyAction(store, newState, action);
      }
      invalidateDownstreams(store, newState);
      invalidateMemoizedSnapshot$1();
      return newState;
    });
  }
  function queueOrPerformStateUpdate(store, action) {
    if (batchStack.length) {
      const actionsByStore = batchStack[batchStack.length - 1];
      let actions = actionsByStore.get(store);
      if (!actions) {
        actionsByStore.set(store, actions = []);
      }
      actions.push(action);
    } else {
      applyActionsToStore(store, [action]);
    }
  }
  var batchStack = [];
  function batchStart() {
    const actionsByStore = /* @__PURE__ */ new Map();
    batchStack.push(actionsByStore);
    return () => {
      for (const [store, actions] of actionsByStore) {
        applyActionsToStore(store, actions);
      }
      const popped = batchStack.pop();
      if (popped !== actionsByStore) {
        Recoil_recoverableViolation("Incorrect order of batch popping");
      }
    };
  }
  function copyTreeState(state) {
    return {
      ...state,
      atomValues: state.atomValues.clone(),
      nonvalidatedAtoms: state.nonvalidatedAtoms.clone(),
      dirtyAtoms: new Set(state.dirtyAtoms)
    };
  }
  function invalidateDownstreams(store, state) {
    const downstreams = getDownstreamNodes$1(store, state, state.dirtyAtoms);
    for (const key of downstreams) {
      var _getNodeMaybe, _getNodeMaybe$invalid;
      (_getNodeMaybe = getNodeMaybe$2(key)) === null || _getNodeMaybe === void 0 ? void 0 : (_getNodeMaybe$invalid = _getNodeMaybe.invalidate) === null || _getNodeMaybe$invalid === void 0 ? void 0 : _getNodeMaybe$invalid.call(_getNodeMaybe, state);
    }
  }
  function setRecoilValue(store, recoilValue, valueOrUpdater) {
    queueOrPerformStateUpdate(store, {
      type: "set",
      recoilValue,
      valueOrUpdater
    });
  }
  function setRecoilValueLoadable(store, recoilValue, loadable) {
    if (loadable instanceof DefaultValue$1) {
      return setRecoilValue(store, recoilValue, loadable);
    }
    queueOrPerformStateUpdate(store, {
      type: "setLoadable",
      recoilValue,
      loadable
    });
  }
  function markRecoilValueModified(store, recoilValue) {
    queueOrPerformStateUpdate(store, {
      type: "markModified",
      recoilValue
    });
  }
  function setUnvalidatedRecoilValue(store, recoilValue, unvalidatedValue) {
    queueOrPerformStateUpdate(store, {
      type: "setUnvalidated",
      recoilValue,
      unvalidatedValue
    });
  }
  function subscribeToRecoilValue(store, {
    key
  }, callback, componentDebugName = null) {
    const subID = getNextComponentID$1();
    const storeState = store.getState();
    if (!storeState.nodeToComponentSubscriptions.has(key)) {
      storeState.nodeToComponentSubscriptions.set(key, /* @__PURE__ */ new Map());
    }
    Recoil_nullthrows(storeState.nodeToComponentSubscriptions.get(key)).set(subID, [componentDebugName !== null && componentDebugName !== void 0 ? componentDebugName : "<not captured>", callback]);
    const mode = reactMode$1();
    if (mode.early && (mode.mode === "LEGACY" || mode.mode === "MUTABLE_SOURCE")) {
      const nextTree = store.getState().nextTree;
      if (nextTree && nextTree.dirtyAtoms.has(key)) {
        callback(nextTree);
      }
    }
    return {
      release: () => {
        const releaseStoreState = store.getState();
        const subs = releaseStoreState.nodeToComponentSubscriptions.get(key);
        if (subs === void 0 || !subs.has(subID)) {
          Recoil_recoverableViolation(`Subscription missing at release time for atom ${key}. This is a bug in Recoil.`);
          return;
        }
        subs.delete(subID);
        if (subs.size === 0) {
          releaseStoreState.nodeToComponentSubscriptions.delete(key);
        }
      }
    };
  }
  function refreshRecoilValue(store, recoilValue) {
    var _node$clearCache;
    const {
      currentTree
    } = store.getState();
    const node = getNode$2(recoilValue.key);
    (_node$clearCache = node.clearCache) === null || _node$clearCache === void 0 ? void 0 : _node$clearCache.call(node, store, currentTree);
  }
  var Recoil_RecoilValueInterface = {
    RecoilValueReadOnly: RecoilValueReadOnly$1,
    AbstractRecoilValue: AbstractRecoilValue$1,
    RecoilState: RecoilState$1,
    getRecoilValueAsLoadable,
    setRecoilValue,
    setRecoilValueLoadable,
    markRecoilValueModified,
    setUnvalidatedRecoilValue,
    subscribeToRecoilValue,
    isRecoilValue: isRecoilValue$1,
    applyAtomValueWrites,
    // TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
    batchStart,
    writeLoadableToTreeState,
    invalidateDownstreams,
    copyTreeState,
    refreshRecoilValue
  };
  function someSet(set, callback, context) {
    const iterator = set.entries();
    let current = iterator.next();
    while (!current.done) {
      const entry = current.value;
      if (callback.call(context, entry[1], entry[0], set)) {
        return true;
      }
      current = iterator.next();
    }
    return false;
  }
  var Recoil_someSet = someSet;
  var {
    cleanUpNode: cleanUpNode$1
  } = Recoil_FunctionalCore;
  var {
    deleteNodeConfigIfPossible: deleteNodeConfigIfPossible$1,
    getNode: getNode$3
  } = Recoil_Node;
  var {
    RetentionZone: RetentionZone$2
  } = Recoil_RetentionZone;
  var SUSPENSE_TIMEOUT_MS = 12e4;
  var emptySet$1 = /* @__PURE__ */ new Set();
  function releaseRetainablesNowOnCurrentTree(store, retainables) {
    const storeState = store.getState();
    const treeState = storeState.currentTree;
    if (storeState.nextTree) {
      Recoil_recoverableViolation("releaseNodesNowOnCurrentTree should only be called at the end of a batch");
      return;
    }
    const nodes2 = /* @__PURE__ */ new Set();
    for (const r of retainables) {
      if (r instanceof RetentionZone$2) {
        for (const n of nodesRetainedByZone(storeState, r)) {
          nodes2.add(n);
        }
      } else {
        nodes2.add(r);
      }
    }
    const releasableNodes = findReleasableNodes(store, nodes2);
    for (const node of releasableNodes) {
      releaseNode(store, treeState, node);
    }
  }
  function findReleasableNodes(store, searchFromNodes) {
    const storeState = store.getState();
    const treeState = storeState.currentTree;
    const graph2 = store.getGraph(treeState.version);
    const releasableNodes = /* @__PURE__ */ new Set();
    const nonReleasableNodes = /* @__PURE__ */ new Set();
    findReleasableNodesInner(searchFromNodes);
    return releasableNodes;
    function findReleasableNodesInner(searchFromNodes2) {
      const releasableNodesFoundThisIteration = /* @__PURE__ */ new Set();
      const downstreams = getDownstreamNodesInTopologicalOrder(
        store,
        treeState,
        searchFromNodes2,
        releasableNodes,
        // don't descend into these
        nonReleasableNodes
        // don't descend into these
      );
      for (const node of downstreams) {
        var _storeState$retention;
        if (getNode$3(node).retainedBy === "recoilRoot") {
          nonReleasableNodes.add(node);
          continue;
        }
        if (((_storeState$retention = storeState.retention.referenceCounts.get(node)) !== null && _storeState$retention !== void 0 ? _storeState$retention : 0) > 0) {
          nonReleasableNodes.add(node);
          continue;
        }
        if (zonesThatCouldRetainNode(node).some((z) => storeState.retention.referenceCounts.get(z))) {
          nonReleasableNodes.add(node);
          continue;
        }
        const nodeChildren = graph2.nodeToNodeSubscriptions.get(node);
        if (nodeChildren && Recoil_someSet(nodeChildren, (child2) => nonReleasableNodes.has(child2))) {
          nonReleasableNodes.add(node);
          continue;
        }
        releasableNodes.add(node);
        releasableNodesFoundThisIteration.add(node);
      }
      const parents = /* @__PURE__ */ new Set();
      for (const node of releasableNodesFoundThisIteration) {
        for (const parent of (_graph$nodeDeps$get = graph2.nodeDeps.get(node)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : emptySet$1) {
          var _graph$nodeDeps$get;
          if (!releasableNodes.has(parent)) {
            parents.add(parent);
          }
        }
      }
      if (parents.size) {
        findReleasableNodesInner(parents);
      }
    }
  }
  function getDownstreamNodesInTopologicalOrder(store, treeState, nodes2, doNotDescendInto1, doNotDescendInto2) {
    const graph2 = store.getGraph(treeState.version);
    const answer = [];
    const visited = /* @__PURE__ */ new Set();
    while (nodes2.size > 0) {
      visit(Recoil_nullthrows(nodes2.values().next().value));
    }
    return answer;
    function visit(node) {
      if (doNotDescendInto1.has(node) || doNotDescendInto2.has(node)) {
        nodes2.delete(node);
        return;
      }
      if (visited.has(node)) {
        return;
      }
      const children = graph2.nodeToNodeSubscriptions.get(node);
      if (children) {
        for (const child2 of children) {
          visit(child2);
        }
      }
      visited.add(node);
      nodes2.delete(node);
      answer.push(node);
    }
  }
  function releaseNode(store, treeState, node) {
    if (!Recoil_gkx("recoil_memory_managament_2020")) {
      return;
    }
    cleanUpNode$1(store, node);
    const storeState = store.getState();
    storeState.knownAtoms.delete(node);
    storeState.knownSelectors.delete(node);
    storeState.nodeTransactionSubscriptions.delete(node);
    storeState.retention.referenceCounts.delete(node);
    const zones = zonesThatCouldRetainNode(node);
    for (const zone of zones) {
      var _storeState$retention2;
      (_storeState$retention2 = storeState.retention.nodesRetainedByZone.get(zone)) === null || _storeState$retention2 === void 0 ? void 0 : _storeState$retention2.delete(node);
    }
    treeState.atomValues.delete(node);
    treeState.dirtyAtoms.delete(node);
    treeState.nonvalidatedAtoms.delete(node);
    const graph2 = storeState.graphsByVersion.get(treeState.version);
    if (graph2) {
      const deps = graph2.nodeDeps.get(node);
      if (deps !== void 0) {
        graph2.nodeDeps.delete(node);
        for (const dep of deps) {
          var _graph$nodeToNodeSubs;
          (_graph$nodeToNodeSubs = graph2.nodeToNodeSubscriptions.get(dep)) === null || _graph$nodeToNodeSubs === void 0 ? void 0 : _graph$nodeToNodeSubs.delete(node);
        }
      }
      graph2.nodeToNodeSubscriptions.delete(node);
    }
    deleteNodeConfigIfPossible$1(node);
  }
  function nodesRetainedByZone(storeState, zone) {
    var _storeState$retention3;
    return (_storeState$retention3 = storeState.retention.nodesRetainedByZone.get(zone)) !== null && _storeState$retention3 !== void 0 ? _storeState$retention3 : emptySet$1;
  }
  function zonesThatCouldRetainNode(node) {
    const retainedBy = getNode$3(node).retainedBy;
    if (retainedBy === void 0 || retainedBy === "components" || retainedBy === "recoilRoot") {
      return [];
    } else if (retainedBy instanceof RetentionZone$2) {
      return [retainedBy];
    } else {
      return retainedBy;
    }
  }
  function scheduleOrPerformPossibleReleaseOfRetainable(store, retainable) {
    const state = store.getState();
    if (state.nextTree) {
      state.retention.retainablesToCheckForRelease.add(retainable);
    } else {
      releaseRetainablesNowOnCurrentTree(store, /* @__PURE__ */ new Set([retainable]));
    }
  }
  function updateRetainCount(store, retainable, delta) {
    var _map$get;
    if (!Recoil_gkx("recoil_memory_managament_2020")) {
      return;
    }
    const map2 = store.getState().retention.referenceCounts;
    const newCount = ((_map$get = map2.get(retainable)) !== null && _map$get !== void 0 ? _map$get : 0) + delta;
    if (newCount === 0) {
      updateRetainCountToZero(store, retainable);
    } else {
      map2.set(retainable, newCount);
    }
  }
  function updateRetainCountToZero(store, retainable) {
    if (!Recoil_gkx("recoil_memory_managament_2020")) {
      return;
    }
    const map2 = store.getState().retention.referenceCounts;
    map2.delete(retainable);
    scheduleOrPerformPossibleReleaseOfRetainable(store, retainable);
  }
  function releaseScheduledRetainablesNow(store) {
    if (!Recoil_gkx("recoil_memory_managament_2020")) {
      return;
    }
    const state = store.getState();
    releaseRetainablesNowOnCurrentTree(store, state.retention.retainablesToCheckForRelease);
    state.retention.retainablesToCheckForRelease.clear();
  }
  function retainedByOptionWithDefault(r) {
    return r === void 0 ? "recoilRoot" : r;
  }
  var Recoil_Retention = {
    SUSPENSE_TIMEOUT_MS,
    updateRetainCount,
    updateRetainCountToZero,
    releaseScheduledRetainablesNow,
    retainedByOptionWithDefault
  };
  var {
    unstable_batchedUpdates
  } = import_react_dom.default;
  var ReactBatchedUpdates = {
    unstable_batchedUpdates
  };
  var {
    unstable_batchedUpdates: unstable_batchedUpdates$1
  } = ReactBatchedUpdates;
  var Recoil_ReactBatchedUpdates = {
    unstable_batchedUpdates: unstable_batchedUpdates$1
  };
  var {
    batchStart: batchStart$1
  } = Recoil_RecoilValueInterface;
  var {
    unstable_batchedUpdates: unstable_batchedUpdates$2
  } = Recoil_ReactBatchedUpdates;
  var batcher = unstable_batchedUpdates$2 || ((batchFn) => batchFn());
  var setBatcher = (newBatcher) => {
    batcher = newBatcher;
  };
  var getBatcher = () => batcher;
  var batchUpdates = (callback) => {
    batcher(() => {
      let batchEnd = () => void 0;
      try {
        batchEnd = batchStart$1();
        callback();
      } finally {
        batchEnd();
      }
    });
  };
  var Recoil_Batching = {
    getBatcher,
    setBatcher,
    batchUpdates
  };
  function* concatIterables(iters) {
    for (const iter of iters) {
      for (const val of iter) {
        yield val;
      }
    }
  }
  var Recoil_concatIterables = concatIterables;
  var isSSR = (
    // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
    typeof Window === "undefined" || typeof window === "undefined"
  );
  var isWindow = (value) => !isSSR && // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
  (value === window || value instanceof Window);
  var isReactNative = typeof navigator !== "undefined" && navigator.product === "ReactNative";
  var Recoil_Environment = {
    isSSR,
    isReactNative,
    isWindow
  };
  function memoizeWithArgsHash(fn, hashFunction) {
    let cache;
    return (...args) => {
      if (!cache) {
        cache = {};
      }
      const key = hashFunction(...args);
      if (!Object.hasOwnProperty.call(cache, key)) {
        cache[key] = fn(...args);
      }
      return cache[key];
    };
  }
  function memoizeOneWithArgsHash(fn, hashFunction) {
    let lastKey;
    let lastResult;
    return (...args) => {
      const key = hashFunction(...args);
      if (lastKey === key) {
        return lastResult;
      }
      lastKey = key;
      lastResult = fn(...args);
      return lastResult;
    };
  }
  function memoizeOneWithArgsHashAndInvalidation(fn, hashFunction) {
    let lastKey;
    let lastResult;
    const memoizedFn = (...args) => {
      const key = hashFunction(...args);
      if (lastKey === key) {
        return lastResult;
      }
      lastKey = key;
      lastResult = fn(...args);
      return lastResult;
    };
    const invalidate = () => {
      lastKey = null;
    };
    return [memoizedFn, invalidate];
  }
  var Recoil_Memoize = {
    memoizeWithArgsHash,
    memoizeOneWithArgsHash,
    memoizeOneWithArgsHashAndInvalidation
  };
  var {
    batchUpdates: batchUpdates$1
  } = Recoil_Batching;
  var {
    initializeNode: initializeNode$1,
    peekNodeInfo: peekNodeInfo$1
  } = Recoil_FunctionalCore;
  var {
    graph: graph$1
  } = Recoil_Graph;
  var {
    getNextStoreID: getNextStoreID$1
  } = Recoil_Keys;
  var {
    DEFAULT_VALUE: DEFAULT_VALUE$1,
    recoilValues: recoilValues$1,
    recoilValuesForKeys: recoilValuesForKeys$2
  } = Recoil_Node;
  var {
    AbstractRecoilValue: AbstractRecoilValue$2,
    getRecoilValueAsLoadable: getRecoilValueAsLoadable$1,
    setRecoilValue: setRecoilValue$1,
    setUnvalidatedRecoilValue: setUnvalidatedRecoilValue$1
  } = Recoil_RecoilValueInterface;
  var {
    updateRetainCount: updateRetainCount$1
  } = Recoil_Retention;
  var {
    setInvalidateMemoizedSnapshot: setInvalidateMemoizedSnapshot$1
  } = Recoil_SnapshotCache;
  var {
    getNextTreeStateVersion: getNextTreeStateVersion$2,
    makeEmptyStoreState: makeEmptyStoreState$1
  } = Recoil_State;
  var {
    isSSR: isSSR$1
  } = Recoil_Environment;
  var {
    memoizeOneWithArgsHashAndInvalidation: memoizeOneWithArgsHashAndInvalidation$1
  } = Recoil_Memoize;
  var Snapshot = class {
    // eslint-disable-next-line fb-www/no-uninitialized-properties
    constructor(storeState, parentStoreID) {
      _defineProperty(this, "_store", void 0);
      _defineProperty(this, "_refCount", 1);
      _defineProperty(this, "getLoadable", (recoilValue) => {
        this.checkRefCount_INTERNAL();
        return getRecoilValueAsLoadable$1(this._store, recoilValue);
      });
      _defineProperty(this, "getPromise", (recoilValue) => {
        this.checkRefCount_INTERNAL();
        return this.getLoadable(recoilValue).toPromise();
      });
      _defineProperty(this, "getNodes_UNSTABLE", (opt) => {
        this.checkRefCount_INTERNAL();
        if ((opt === null || opt === void 0 ? void 0 : opt.isModified) === true) {
          if ((opt === null || opt === void 0 ? void 0 : opt.isInitialized) === false) {
            return [];
          }
          const state = this._store.getState().currentTree;
          return recoilValuesForKeys$2(state.dirtyAtoms);
        }
        const knownAtoms = this._store.getState().knownAtoms;
        const knownSelectors = this._store.getState().knownSelectors;
        return (opt === null || opt === void 0 ? void 0 : opt.isInitialized) == null ? recoilValues$1.values() : opt.isInitialized === true ? recoilValuesForKeys$2(Recoil_concatIterables([knownAtoms, knownSelectors])) : Recoil_filterIterable(recoilValues$1.values(), ({
          key
        }) => !knownAtoms.has(key) && !knownSelectors.has(key));
      });
      _defineProperty(this, "getInfo_UNSTABLE", ({
        key
      }) => {
        this.checkRefCount_INTERNAL();
        return peekNodeInfo$1(this._store, this._store.getState().currentTree, key);
      });
      _defineProperty(this, "map", (mapper) => {
        this.checkRefCount_INTERNAL();
        const mutableSnapshot = new MutableSnapshot(this, batchUpdates$1);
        mapper(mutableSnapshot);
        return mutableSnapshot;
      });
      _defineProperty(this, "asyncMap", async (mapper) => {
        this.checkRefCount_INTERNAL();
        const mutableSnapshot = new MutableSnapshot(this, batchUpdates$1);
        mutableSnapshot.retain();
        await mapper(mutableSnapshot);
        mutableSnapshot.autoRelease_INTERNAL();
        return mutableSnapshot;
      });
      this._store = {
        storeID: getNextStoreID$1(),
        parentStoreID,
        getState: () => storeState,
        replaceState: (replacer) => {
          storeState.currentTree = replacer(storeState.currentTree);
        },
        getGraph: (version) => {
          const graphs = storeState.graphsByVersion;
          if (graphs.has(version)) {
            return Recoil_nullthrows(graphs.get(version));
          }
          const newGraph = graph$1();
          graphs.set(version, newGraph);
          return newGraph;
        },
        subscribeToTransactions: () => ({
          release: () => {
          }
        }),
        addTransactionMetadata: () => {
          throw Recoil_err("Cannot subscribe to Snapshots");
        }
      };
      for (const nodeKey of this._store.getState().knownAtoms) {
        initializeNode$1(this._store, nodeKey, "get");
        updateRetainCount$1(this._store, nodeKey, 1);
      }
      this.autoRelease_INTERNAL();
    }
    retain() {
      if (this._refCount <= 0) {
        if (false) {
          throw Recoil_err("Snapshot has already been released.");
        } else {
          Recoil_recoverableViolation("Attempt to retain() Snapshot that was already released.");
        }
      }
      this._refCount++;
      let released = false;
      return () => {
        if (!released) {
          released = true;
          this._release();
        }
      };
    }
    /**
     * Release the snapshot on the next tick.  This means the snapshot is retained
     * during the execution of the current function using it.
     */
    autoRelease_INTERNAL() {
      if (!isSSR$1) {
        window.setTimeout(() => this._release(), 10);
      }
    }
    _release() {
      this._refCount--;
      if (this._refCount === 0) {
        this._store.getState().nodeCleanupFunctions.forEach((cleanup) => cleanup());
        this._store.getState().nodeCleanupFunctions.clear();
        if (!Recoil_gkx("recoil_memory_managament_2020")) {
          return;
        }
      } else if (this._refCount < 0) {
        if (false) {
          Recoil_recoverableViolation("Snapshot released an extra time.");
        }
      }
    }
    isRetained() {
      return this._refCount > 0;
    }
    checkRefCount_INTERNAL() {
      if (Recoil_gkx("recoil_memory_managament_2020") && this._refCount <= 0) {
        if (false) {
          Recoil_recoverableViolation(retainWarning);
        }
      }
    }
    getStore_INTERNAL() {
      this.checkRefCount_INTERNAL();
      return this._store;
    }
    getID() {
      this.checkRefCount_INTERNAL();
      return this._store.getState().currentTree.stateID;
    }
    getStoreID() {
      this.checkRefCount_INTERNAL();
      return this._store.storeID;
    }
    // We want to allow the methods to be destructured and used as accessors
    /* eslint-disable fb-www/extra-arrow-initializer */
    /* eslint-enable fb-www/extra-arrow-initializer */
  };
  function cloneStoreState(store, treeState, bumpVersion = false) {
    const storeState = store.getState();
    const version = bumpVersion ? getNextTreeStateVersion$2() : treeState.version;
    return {
      // Always clone the TreeState to isolate stores from accidental mutations.
      // For example, reading a selector from a cloned snapshot shouldn't cache
      // in the original treestate which may cause the original to skip
      // initialization of upstream atoms.
      currentTree: {
        // TODO snapshots shouldn't really have versions because a new version number
        // is always assigned when the snapshot is gone to.
        version: bumpVersion ? version : treeState.version,
        stateID: bumpVersion ? version : treeState.stateID,
        transactionMetadata: {
          ...treeState.transactionMetadata
        },
        dirtyAtoms: new Set(treeState.dirtyAtoms),
        atomValues: treeState.atomValues.clone(),
        nonvalidatedAtoms: treeState.nonvalidatedAtoms.clone()
      },
      commitDepth: 0,
      nextTree: null,
      previousTree: null,
      knownAtoms: new Set(storeState.knownAtoms),
      // FIXME here's a copy
      knownSelectors: new Set(storeState.knownSelectors),
      // FIXME here's a copy
      transactionSubscriptions: /* @__PURE__ */ new Map(),
      nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
      nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
      queuedComponentCallbacks_DEPRECATED: [],
      suspendedComponentResolvers: /* @__PURE__ */ new Set(),
      graphsByVersion: (/* @__PURE__ */ new Map()).set(version, store.getGraph(treeState.version)),
      retention: {
        referenceCounts: /* @__PURE__ */ new Map(),
        nodesRetainedByZone: /* @__PURE__ */ new Map(),
        retainablesToCheckForRelease: /* @__PURE__ */ new Set()
      },
      // FIXME here's a copy
      // Create blank cleanup handlers for atoms so snapshots don't re-run
      // atom effects.
      nodeCleanupFunctions: new Map(Recoil_mapIterable(storeState.nodeCleanupFunctions.entries(), ([key]) => [key, () => {
      }]))
    };
  }
  function freshSnapshot(initializeState) {
    const snapshot = new Snapshot(makeEmptyStoreState$1());
    return initializeState != null ? snapshot.map(initializeState) : snapshot;
  }
  var [memoizedCloneSnapshot, invalidateMemoizedSnapshot$2] = memoizeOneWithArgsHashAndInvalidation$1(
    // $FlowFixMe[missing-local-annot]
    (store, version) => {
      var _storeState$nextTree;
      const storeState = store.getState();
      const treeState = version === "latest" ? (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree : Recoil_nullthrows(storeState.previousTree);
      return new Snapshot(cloneStoreState(store, treeState), store.storeID);
    },
    (store, version) => {
      var _store$getState$nextT, _store$getState$previ;
      return String(version) + String(store.storeID) + String((_store$getState$nextT = store.getState().nextTree) === null || _store$getState$nextT === void 0 ? void 0 : _store$getState$nextT.version) + String(store.getState().currentTree.version) + String((_store$getState$previ = store.getState().previousTree) === null || _store$getState$previ === void 0 ? void 0 : _store$getState$previ.version);
    }
  );
  setInvalidateMemoizedSnapshot$1(invalidateMemoizedSnapshot$2);
  function cloneSnapshot(store, version = "latest") {
    const snapshot = memoizedCloneSnapshot(store, version);
    if (!snapshot.isRetained()) {
      invalidateMemoizedSnapshot$2();
      return memoizedCloneSnapshot(store, version);
    }
    return snapshot;
  }
  var MutableSnapshot = class extends Snapshot {
    constructor(snapshot, batch) {
      super(cloneStoreState(snapshot.getStore_INTERNAL(), snapshot.getStore_INTERNAL().getState().currentTree, true), snapshot.getStoreID());
      _defineProperty(this, "_batch", void 0);
      _defineProperty(this, "set", (recoilState, newValueOrUpdater) => {
        this.checkRefCount_INTERNAL();
        const store = this.getStore_INTERNAL();
        this._batch(() => {
          updateRetainCount$1(store, recoilState.key, 1);
          setRecoilValue$1(this.getStore_INTERNAL(), recoilState, newValueOrUpdater);
        });
      });
      _defineProperty(this, "reset", (recoilState) => {
        this.checkRefCount_INTERNAL();
        const store = this.getStore_INTERNAL();
        this._batch(() => {
          updateRetainCount$1(store, recoilState.key, 1);
          setRecoilValue$1(this.getStore_INTERNAL(), recoilState, DEFAULT_VALUE$1);
        });
      });
      _defineProperty(this, "setUnvalidatedAtomValues_DEPRECATED", (values) => {
        this.checkRefCount_INTERNAL();
        const store = this.getStore_INTERNAL();
        batchUpdates$1(() => {
          for (const [k, v2] of values.entries()) {
            updateRetainCount$1(store, k, 1);
            setUnvalidatedRecoilValue$1(store, new AbstractRecoilValue$2(k), v2);
          }
        });
      });
      this._batch = batch;
    }
  };
  var Recoil_Snapshot = {
    Snapshot,
    MutableSnapshot,
    freshSnapshot,
    cloneSnapshot
  };
  var Recoil_Snapshot_1 = Recoil_Snapshot.Snapshot;
  var Recoil_Snapshot_2 = Recoil_Snapshot.MutableSnapshot;
  var Recoil_Snapshot_3 = Recoil_Snapshot.freshSnapshot;
  var Recoil_Snapshot_4 = Recoil_Snapshot.cloneSnapshot;
  var Recoil_Snapshot$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Snapshot: Recoil_Snapshot_1,
    MutableSnapshot: Recoil_Snapshot_2,
    freshSnapshot: Recoil_Snapshot_3,
    cloneSnapshot: Recoil_Snapshot_4
  });
  function unionSets(...sets) {
    const result = /* @__PURE__ */ new Set();
    for (const set of sets) {
      for (const value of set) {
        result.add(value);
      }
    }
    return result;
  }
  var Recoil_unionSets = unionSets;
  var {
    useRef
  } = import_react.default;
  function useRefInitOnce(initialValue) {
    const ref = useRef(initialValue);
    if (ref.current === initialValue && typeof initialValue === "function") {
      ref.current = initialValue();
    }
    return ref;
  }
  var Recoil_useRefInitOnce = useRefInitOnce;
  var {
    getNextTreeStateVersion: getNextTreeStateVersion$3,
    makeEmptyStoreState: makeEmptyStoreState$2
  } = Recoil_State;
  var {
    cleanUpNode: cleanUpNode$2,
    getDownstreamNodes: getDownstreamNodes$2,
    initializeNode: initializeNode$2,
    setNodeValue: setNodeValue$2,
    setUnvalidatedAtomValue_DEPRECATED: setUnvalidatedAtomValue_DEPRECATED$1
  } = Recoil_FunctionalCore;
  var {
    graph: graph$2
  } = Recoil_Graph;
  var {
    cloneGraph: cloneGraph$1
  } = Recoil_Graph;
  var {
    getNextStoreID: getNextStoreID$2
  } = Recoil_Keys;
  var {
    createMutableSource: createMutableSource$1,
    reactMode: reactMode$2
  } = Recoil_ReactMode;
  var {
    applyAtomValueWrites: applyAtomValueWrites$1
  } = Recoil_RecoilValueInterface;
  var {
    releaseScheduledRetainablesNow: releaseScheduledRetainablesNow$1
  } = Recoil_Retention;
  var {
    freshSnapshot: freshSnapshot$1
  } = Recoil_Snapshot$1;
  var {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef: useRef$1,
    useState
  } = import_react.default;
  function notInAContext() {
    throw Recoil_err("This component must be used inside a <RecoilRoot> component.");
  }
  var defaultStore = Object.freeze({
    storeID: getNextStoreID$2(),
    getState: notInAContext,
    replaceState: notInAContext,
    getGraph: notInAContext,
    subscribeToTransactions: notInAContext,
    addTransactionMetadata: notInAContext
  });
  var stateReplacerIsBeingExecuted = false;
  function startNextTreeIfNeeded(store) {
    if (stateReplacerIsBeingExecuted) {
      throw Recoil_err("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");
    }
    const storeState = store.getState();
    if (storeState.nextTree === null) {
      if (Recoil_gkx("recoil_memory_managament_2020") && Recoil_gkx("recoil_release_on_cascading_update_killswitch_2021")) {
        if (storeState.commitDepth > 0) {
          releaseScheduledRetainablesNow$1(store);
        }
      }
      const version = storeState.currentTree.version;
      const nextVersion = getNextTreeStateVersion$3();
      storeState.nextTree = {
        ...storeState.currentTree,
        version: nextVersion,
        stateID: nextVersion,
        dirtyAtoms: /* @__PURE__ */ new Set(),
        transactionMetadata: {}
      };
      storeState.graphsByVersion.set(nextVersion, cloneGraph$1(Recoil_nullthrows(storeState.graphsByVersion.get(version))));
    }
  }
  var AppContext = import_react.default.createContext({
    current: defaultStore
  });
  var useStoreRef = () => useContext(AppContext);
  var MutableSourceContext = import_react.default.createContext(null);
  function useRecoilMutableSource() {
    const mutableSource = useContext(MutableSourceContext);
    if (mutableSource == null) {
      Recoil_expectationViolation("Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks.");
    }
    return mutableSource;
  }
  function notifyComponents(store, storeState, treeState) {
    const dependentNodes = getDownstreamNodes$2(store, treeState, treeState.dirtyAtoms);
    for (const key of dependentNodes) {
      const comps = storeState.nodeToComponentSubscriptions.get(key);
      if (comps) {
        for (const [_subID, [_debugName, callback]] of comps) {
          callback(treeState);
        }
      }
    }
  }
  function sendEndOfBatchNotifications(store) {
    const storeState = store.getState();
    const treeState = storeState.currentTree;
    const dirtyAtoms = treeState.dirtyAtoms;
    if (dirtyAtoms.size) {
      for (const [key, subscriptions] of storeState.nodeTransactionSubscriptions) {
        if (dirtyAtoms.has(key)) {
          for (const [_, subscription] of subscriptions) {
            subscription(store);
          }
        }
      }
      for (const [_, subscription] of storeState.transactionSubscriptions) {
        subscription(store);
      }
      if (!reactMode$2().early || storeState.suspendedComponentResolvers.size > 0) {
        notifyComponents(store, storeState, treeState);
        storeState.suspendedComponentResolvers.forEach((cb) => cb());
        storeState.suspendedComponentResolvers.clear();
      }
    }
    storeState.queuedComponentCallbacks_DEPRECATED.forEach((cb) => cb(treeState));
    storeState.queuedComponentCallbacks_DEPRECATED.splice(0, storeState.queuedComponentCallbacks_DEPRECATED.length);
  }
  function endBatch(store) {
    const storeState = store.getState();
    storeState.commitDepth++;
    try {
      const {
        nextTree
      } = storeState;
      if (nextTree == null) {
        return;
      }
      storeState.previousTree = storeState.currentTree;
      storeState.currentTree = nextTree;
      storeState.nextTree = null;
      sendEndOfBatchNotifications(store);
      if (storeState.previousTree != null) {
        storeState.graphsByVersion.delete(storeState.previousTree.version);
      } else {
        Recoil_recoverableViolation("Ended batch with no previous state, which is unexpected", "recoil");
      }
      storeState.previousTree = null;
      if (Recoil_gkx("recoil_memory_managament_2020")) {
        if (nextTree == null) {
          releaseScheduledRetainablesNow$1(store);
        }
      }
    } finally {
      storeState.commitDepth--;
    }
  }
  function Batcher({
    setNotifyBatcherOfChange
  }) {
    const storeRef = useStoreRef();
    const [, setState] = useState([]);
    setNotifyBatcherOfChange(() => setState({}));
    useEffect(() => {
      setNotifyBatcherOfChange(() => setState({}));
      return () => {
        setNotifyBatcherOfChange(() => {
        });
      };
    }, [setNotifyBatcherOfChange]);
    useEffect(() => {
      Recoil_Queue.enqueueExecution("Batcher", () => {
        endBatch(storeRef.current);
      });
    });
    return null;
  }
  if (false) {
    if (typeof window !== "undefined" && !window.$recoilDebugStates) {
      window.$recoilDebugStates = [];
    }
  }
  function initialStoreState_DEPRECATED(store, initializeState) {
    const initial = makeEmptyStoreState$2();
    initializeState({
      set: (atom2, value) => {
        const state = initial.currentTree;
        const writes = setNodeValue$2(store, state, atom2.key, value);
        const writtenNodes = new Set(writes.keys());
        const nonvalidatedAtoms = state.nonvalidatedAtoms.clone();
        for (const n of writtenNodes) {
          nonvalidatedAtoms.delete(n);
        }
        initial.currentTree = {
          ...state,
          dirtyAtoms: Recoil_unionSets(state.dirtyAtoms, writtenNodes),
          atomValues: applyAtomValueWrites$1(state.atomValues, writes),
          // NB: PLEASE un-export applyAtomValueWrites when deleting this code
          nonvalidatedAtoms
        };
      },
      setUnvalidatedAtomValues: (atomValues) => {
        atomValues.forEach((v2, k) => {
          initial.currentTree = setUnvalidatedAtomValue_DEPRECATED$1(initial.currentTree, k, v2);
        });
      }
    });
    return initial;
  }
  function initialStoreState(initializeState) {
    const snapshot = freshSnapshot$1(initializeState);
    const storeState = snapshot.getStore_INTERNAL().getState();
    snapshot.retain();
    storeState.nodeCleanupFunctions.forEach((cleanup) => cleanup());
    storeState.nodeCleanupFunctions.clear();
    return storeState;
  }
  var nextID = 0;
  function RecoilRoot_INTERNAL({
    initializeState_DEPRECATED,
    initializeState,
    store_INTERNAL: storeProp,
    // For use with React "context bridging"
    children
  }) {
    let storeStateRef;
    const getGraph = (version) => {
      const graphs = storeStateRef.current.graphsByVersion;
      if (graphs.has(version)) {
        return Recoil_nullthrows(graphs.get(version));
      }
      const newGraph = graph$2();
      graphs.set(version, newGraph);
      return newGraph;
    };
    const subscribeToTransactions = (callback, key) => {
      if (key == null) {
        const {
          transactionSubscriptions
        } = storeRef.current.getState();
        const id = nextID++;
        transactionSubscriptions.set(id, callback);
        return {
          release: () => {
            transactionSubscriptions.delete(id);
          }
        };
      } else {
        const {
          nodeTransactionSubscriptions
        } = storeRef.current.getState();
        if (!nodeTransactionSubscriptions.has(key)) {
          nodeTransactionSubscriptions.set(key, /* @__PURE__ */ new Map());
        }
        const id = nextID++;
        Recoil_nullthrows(nodeTransactionSubscriptions.get(key)).set(id, callback);
        return {
          release: () => {
            const subs = nodeTransactionSubscriptions.get(key);
            if (subs) {
              subs.delete(id);
              if (subs.size === 0) {
                nodeTransactionSubscriptions.delete(key);
              }
            }
          }
        };
      }
    };
    const addTransactionMetadata = (metadata) => {
      startNextTreeIfNeeded(storeRef.current);
      for (const k of Object.keys(metadata)) {
        Recoil_nullthrows(storeRef.current.getState().nextTree).transactionMetadata[k] = metadata[k];
      }
    };
    const replaceState = (replacer) => {
      startNextTreeIfNeeded(storeRef.current);
      const nextTree = Recoil_nullthrows(storeStateRef.current.nextTree);
      let replaced;
      try {
        stateReplacerIsBeingExecuted = true;
        replaced = replacer(nextTree);
      } finally {
        stateReplacerIsBeingExecuted = false;
      }
      if (replaced === nextTree) {
        return;
      }
      if (false) {
        if (typeof window !== "undefined") {
          window.$recoilDebugStates.push(replaced);
        }
      }
      storeStateRef.current.nextTree = replaced;
      if (reactMode$2().early) {
        notifyComponents(storeRef.current, storeStateRef.current, replaced);
      }
      Recoil_nullthrows(notifyBatcherOfChange.current)();
    };
    const notifyBatcherOfChange = useRef$1(null);
    const setNotifyBatcherOfChange = useCallback((x) => {
      notifyBatcherOfChange.current = x;
    }, [notifyBatcherOfChange]);
    const storeRef = Recoil_useRefInitOnce(() => storeProp !== null && storeProp !== void 0 ? storeProp : {
      storeID: getNextStoreID$2(),
      getState: () => storeStateRef.current,
      replaceState,
      getGraph,
      subscribeToTransactions,
      addTransactionMetadata
    });
    if (storeProp != null) {
      storeRef.current = storeProp;
    }
    storeStateRef = Recoil_useRefInitOnce(() => initializeState_DEPRECATED != null ? initialStoreState_DEPRECATED(storeRef.current, initializeState_DEPRECATED) : initializeState != null ? initialStoreState(initializeState) : makeEmptyStoreState$2());
    const mutableSource = useMemo(() => createMutableSource$1 === null || createMutableSource$1 === void 0 ? void 0 : createMutableSource$1(storeStateRef, () => storeStateRef.current.currentTree.version), [storeStateRef]);
    useEffect(() => {
      const store = storeRef.current;
      for (const atomKey of new Set(store.getState().knownAtoms)) {
        initializeNode$2(store, atomKey, "get");
      }
      return () => {
        for (const atomKey of store.getState().knownAtoms) {
          cleanUpNode$2(store, atomKey);
        }
      };
    }, [storeRef]);
    return /* @__PURE__ */ import_react.default.createElement(AppContext.Provider, {
      value: storeRef
    }, /* @__PURE__ */ import_react.default.createElement(MutableSourceContext.Provider, {
      value: mutableSource
    }, /* @__PURE__ */ import_react.default.createElement(Batcher, {
      setNotifyBatcherOfChange
    }), children));
  }
  function RecoilRoot(props) {
    const {
      override,
      ...propsExceptOverride
    } = props;
    const ancestorStoreRef = useStoreRef();
    if (override === false && ancestorStoreRef.current !== defaultStore) {
      return props.children;
    }
    return /* @__PURE__ */ import_react.default.createElement(RecoilRoot_INTERNAL, propsExceptOverride);
  }
  function useRecoilStoreID() {
    return useStoreRef().current.storeID;
  }
  var Recoil_RecoilRoot = {
    RecoilRoot,
    useStoreRef,
    useRecoilMutableSource,
    useRecoilStoreID,
    notifyComponents_FOR_TESTING: notifyComponents,
    sendEndOfBatchNotifications_FOR_TESTING: sendEndOfBatchNotifications
  };
  function shallowArrayEqual(a, b2) {
    if (a === b2) {
      return true;
    }
    if (a.length !== b2.length) {
      return false;
    }
    for (let i = 0, l = a.length; i < l; i++) {
      if (a[i] !== b2[i]) {
        return false;
      }
    }
    return true;
  }
  var Recoil_shallowArrayEqual = shallowArrayEqual;
  var {
    useEffect: useEffect$1,
    useRef: useRef$2
  } = import_react.default;
  function usePrevious(value) {
    const ref = useRef$2();
    useEffect$1(() => {
      ref.current = value;
    });
    return ref.current;
  }
  var Recoil_usePrevious = usePrevious;
  var {
    useStoreRef: useStoreRef$1
  } = Recoil_RecoilRoot;
  var {
    SUSPENSE_TIMEOUT_MS: SUSPENSE_TIMEOUT_MS$1
  } = Recoil_Retention;
  var {
    updateRetainCount: updateRetainCount$2
  } = Recoil_Retention;
  var {
    RetentionZone: RetentionZone$3
  } = Recoil_RetentionZone;
  var {
    useEffect: useEffect$2,
    useRef: useRef$3
  } = import_react.default;
  var {
    isSSR: isSSR$2
  } = Recoil_Environment;
  function useRetain(toRetain) {
    if (!Recoil_gkx("recoil_memory_managament_2020")) {
      return;
    }
    return useRetain_ACTUAL(toRetain);
  }
  function useRetain_ACTUAL(toRetain) {
    const array = Array.isArray(toRetain) ? toRetain : [toRetain];
    const retainables = array.map((a) => a instanceof RetentionZone$3 ? a : a.key);
    const storeRef = useStoreRef$1();
    useEffect$2(() => {
      if (!Recoil_gkx("recoil_memory_managament_2020")) {
        return;
      }
      const store = storeRef.current;
      if (timeoutID.current && !isSSR$2) {
        window.clearTimeout(timeoutID.current);
        timeoutID.current = null;
      } else {
        for (const r of retainables) {
          updateRetainCount$2(store, r, 1);
        }
      }
      return () => {
        for (const r of retainables) {
          updateRetainCount$2(store, r, -1);
        }
      };
    }, [storeRef, ...retainables]);
    const timeoutID = useRef$3();
    const previousRetainables = Recoil_usePrevious(retainables);
    if (!isSSR$2 && (previousRetainables === void 0 || !Recoil_shallowArrayEqual(previousRetainables, retainables))) {
      const store = storeRef.current;
      for (const r of retainables) {
        updateRetainCount$2(store, r, 1);
      }
      if (previousRetainables) {
        for (const r of previousRetainables) {
          updateRetainCount$2(store, r, -1);
        }
      }
      if (timeoutID.current) {
        window.clearTimeout(timeoutID.current);
      }
      timeoutID.current = window.setTimeout(() => {
        timeoutID.current = null;
        for (const r of retainables) {
          updateRetainCount$2(store, r, -1);
        }
      }, SUSPENSE_TIMEOUT_MS$1);
    }
  }
  var Recoil_useRetain = useRetain;
  function useComponentName() {
    return "<component name not available>";
  }
  var Recoil_useComponentName = useComponentName;
  var {
    batchUpdates: batchUpdates$2
  } = Recoil_Batching;
  var {
    DEFAULT_VALUE: DEFAULT_VALUE$2
  } = Recoil_Node;
  var {
    currentRendererSupportsUseSyncExternalStore: currentRendererSupportsUseSyncExternalStore$1,
    reactMode: reactMode$3,
    useMutableSource: useMutableSource$1,
    useSyncExternalStore: useSyncExternalStore$1
  } = Recoil_ReactMode;
  var {
    useRecoilMutableSource: useRecoilMutableSource$1,
    useStoreRef: useStoreRef$2
  } = Recoil_RecoilRoot;
  var {
    isRecoilValue: isRecoilValue$2
  } = Recoil_RecoilValue$1;
  var {
    AbstractRecoilValue: AbstractRecoilValue$3,
    getRecoilValueAsLoadable: getRecoilValueAsLoadable$2,
    setRecoilValue: setRecoilValue$2,
    setUnvalidatedRecoilValue: setUnvalidatedRecoilValue$2,
    subscribeToRecoilValue: subscribeToRecoilValue$1
  } = Recoil_RecoilValueInterface;
  var {
    useCallback: useCallback$1,
    useEffect: useEffect$3,
    useMemo: useMemo$1,
    useRef: useRef$4,
    useState: useState$1
  } = import_react.default;
  var {
    setByAddingToSet: setByAddingToSet$2
  } = Recoil_CopyOnWrite;
  var {
    isSSR: isSSR$3
  } = Recoil_Environment;
  function handleLoadable(loadable, recoilValue, storeRef) {
    if (loadable.state === "hasValue") {
      return loadable.contents;
    } else if (loadable.state === "loading") {
      const promise = new Promise((resolve) => {
        const suspendedComponentResolvers = storeRef.current.getState().suspendedComponentResolvers;
        suspendedComponentResolvers.add(resolve);
        if (isSSR$3 && Recoil_isPromise(loadable.contents)) {
          loadable.contents.finally(() => {
            suspendedComponentResolvers.delete(resolve);
          });
        }
      });
      throw promise;
    } else if (loadable.state === "hasError") {
      throw loadable.contents;
    } else {
      throw Recoil_err(`Invalid value of loadable atom "${recoilValue.key}"`);
    }
  }
  function useRecoilInterface_DEPRECATED() {
    const componentName = Recoil_useComponentName();
    const storeRef = useStoreRef$2();
    const [, forceUpdate] = useState$1([]);
    const recoilValuesUsed = useRef$4(/* @__PURE__ */ new Set());
    recoilValuesUsed.current = /* @__PURE__ */ new Set();
    const previousSubscriptions = useRef$4(/* @__PURE__ */ new Set());
    const subscriptions = useRef$4(/* @__PURE__ */ new Map());
    const unsubscribeFrom = useCallback$1((key) => {
      const sub = subscriptions.current.get(key);
      if (sub) {
        sub.release();
        subscriptions.current.delete(key);
      }
    }, [subscriptions]);
    const updateState = useCallback$1((_state, key) => {
      if (subscriptions.current.has(key)) {
        forceUpdate([]);
      }
    }, []);
    useEffect$3(() => {
      const store = storeRef.current;
      Recoil_differenceSets(recoilValuesUsed.current, previousSubscriptions.current).forEach((key) => {
        if (subscriptions.current.has(key)) {
          Recoil_expectationViolation(`Double subscription to RecoilValue "${key}"`);
          return;
        }
        const sub = subscribeToRecoilValue$1(store, new AbstractRecoilValue$3(key), (state2) => updateState(state2, key), componentName);
        subscriptions.current.set(key, sub);
        const state = store.getState();
        if (state.nextTree) {
          store.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
            updateState(store.getState(), key);
          });
        } else {
          updateState(store.getState(), key);
        }
      });
      Recoil_differenceSets(previousSubscriptions.current, recoilValuesUsed.current).forEach((key) => {
        unsubscribeFrom(key);
      });
      previousSubscriptions.current = recoilValuesUsed.current;
    });
    useEffect$3(() => {
      const currentSubscriptions = subscriptions.current;
      Recoil_differenceSets(recoilValuesUsed.current, new Set(currentSubscriptions.keys())).forEach((key) => {
        const sub = subscribeToRecoilValue$1(storeRef.current, new AbstractRecoilValue$3(key), (state) => updateState(state, key), componentName);
        currentSubscriptions.set(key, sub);
      });
      return () => currentSubscriptions.forEach((_, key) => unsubscribeFrom(key));
    }, [componentName, storeRef, unsubscribeFrom, updateState]);
    return useMemo$1(() => {
      function useSetRecoilState2(recoilState) {
        if (false) {
          validateRecoilValue(recoilState, "useSetRecoilState");
        }
        return (newValueOrUpdater) => {
          setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
        };
      }
      function useResetRecoilState2(recoilState) {
        if (false) {
          validateRecoilValue(recoilState, "useResetRecoilState");
        }
        return () => setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
      }
      function useRecoilValueLoadable2(recoilValue) {
        var _storeState$nextTree;
        if (false) {
          validateRecoilValue(recoilValue, "useRecoilValueLoadable");
        }
        if (!recoilValuesUsed.current.has(recoilValue.key)) {
          recoilValuesUsed.current = setByAddingToSet$2(recoilValuesUsed.current, recoilValue.key);
        }
        const storeState = storeRef.current.getState();
        return getRecoilValueAsLoadable$2(storeRef.current, recoilValue, reactMode$3().early ? (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree : storeState.currentTree);
      }
      function useRecoilValue2(recoilValue) {
        if (false) {
          validateRecoilValue(recoilValue, "useRecoilValue");
        }
        const loadable = useRecoilValueLoadable2(recoilValue);
        return handleLoadable(loadable, recoilValue, storeRef);
      }
      function useRecoilState2(recoilState) {
        if (false) {
          validateRecoilValue(recoilState, "useRecoilState");
        }
        return [useRecoilValue2(recoilState), useSetRecoilState2(recoilState)];
      }
      function useRecoilStateLoadable2(recoilState) {
        if (false) {
          validateRecoilValue(recoilState, "useRecoilStateLoadable");
        }
        return [useRecoilValueLoadable2(recoilState), useSetRecoilState2(recoilState)];
      }
      return {
        getRecoilValue: useRecoilValue2,
        getRecoilValueLoadable: useRecoilValueLoadable2,
        getRecoilState: useRecoilState2,
        getRecoilStateLoadable: useRecoilStateLoadable2,
        getSetRecoilState: useSetRecoilState2,
        getResetRecoilState: useResetRecoilState2
      };
    }, [recoilValuesUsed, storeRef]);
  }
  var recoilComponentGetRecoilValueCount_FOR_TESTING = {
    current: 0
  };
  function useRecoilValueLoadable_SYNC_EXTERNAL_STORE(recoilValue) {
    const storeRef = useStoreRef$2();
    const componentName = Recoil_useComponentName();
    const getSnapshot = useCallback$1(() => {
      var _storeState$nextTree2;
      if (false) {
        recoilComponentGetRecoilValueCount_FOR_TESTING.current++;
      }
      const store = storeRef.current;
      const storeState = store.getState();
      const treeState = reactMode$3().early ? (_storeState$nextTree2 = storeState.nextTree) !== null && _storeState$nextTree2 !== void 0 ? _storeState$nextTree2 : storeState.currentTree : storeState.currentTree;
      const loadable = getRecoilValueAsLoadable$2(store, recoilValue, treeState);
      return {
        loadable,
        key: recoilValue.key
      };
    }, [storeRef, recoilValue]);
    const memoizePreviousSnapshot = useCallback$1((getState) => {
      let prevState;
      return () => {
        var _prevState, _prevState2;
        const nextState = getState();
        if ((_prevState = prevState) !== null && _prevState !== void 0 && _prevState.loadable.is(nextState.loadable) && ((_prevState2 = prevState) === null || _prevState2 === void 0 ? void 0 : _prevState2.key) === nextState.key) {
          return prevState;
        }
        prevState = nextState;
        return nextState;
      };
    }, []);
    const getMemoizedSnapshot = useMemo$1(() => memoizePreviousSnapshot(getSnapshot), [getSnapshot, memoizePreviousSnapshot]);
    const subscribe = useCallback$1((notify) => {
      const store = storeRef.current;
      const subscription = subscribeToRecoilValue$1(store, recoilValue, notify, componentName);
      return subscription.release;
    }, [storeRef, recoilValue, componentName]);
    return useSyncExternalStore$1(
      subscribe,
      getMemoizedSnapshot,
      // getSnapshot()
      getMemoizedSnapshot
      // getServerSnapshot() for SSR support
    ).loadable;
  }
  function useRecoilValueLoadable_MUTABLE_SOURCE(recoilValue) {
    const storeRef = useStoreRef$2();
    const getLoadable = useCallback$1(() => {
      var _storeState$nextTree3;
      const store = storeRef.current;
      const storeState = store.getState();
      const treeState = reactMode$3().early ? (_storeState$nextTree3 = storeState.nextTree) !== null && _storeState$nextTree3 !== void 0 ? _storeState$nextTree3 : storeState.currentTree : storeState.currentTree;
      return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
    }, [storeRef, recoilValue]);
    const getLoadableWithTesting = useCallback$1(() => {
      if (false) {
        recoilComponentGetRecoilValueCount_FOR_TESTING.current++;
      }
      return getLoadable();
    }, [getLoadable]);
    const componentName = Recoil_useComponentName();
    const subscribe = useCallback$1((_storeState, notify) => {
      const store = storeRef.current;
      const subscription = subscribeToRecoilValue$1(store, recoilValue, () => {
        if (!Recoil_gkx("recoil_suppress_rerender_in_callback")) {
          return notify();
        }
        const newLoadable = getLoadable();
        if (!prevLoadableRef.current.is(newLoadable)) {
          notify();
        }
        prevLoadableRef.current = newLoadable;
      }, componentName);
      return subscription.release;
    }, [storeRef, recoilValue, componentName, getLoadable]);
    const source = useRecoilMutableSource$1();
    if (source == null) {
      throw Recoil_err("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
    }
    const loadable = useMutableSource$1(source, getLoadableWithTesting, subscribe);
    const prevLoadableRef = useRef$4(loadable);
    useEffect$3(() => {
      prevLoadableRef.current = loadable;
    });
    return loadable;
  }
  function useRecoilValueLoadable_TRANSITION_SUPPORT(recoilValue) {
    const storeRef = useStoreRef$2();
    const componentName = Recoil_useComponentName();
    const getLoadable = useCallback$1(() => {
      var _storeState$nextTree4;
      if (false) {
        recoilComponentGetRecoilValueCount_FOR_TESTING.current++;
      }
      const store = storeRef.current;
      const storeState = store.getState();
      const treeState = reactMode$3().early ? (_storeState$nextTree4 = storeState.nextTree) !== null && _storeState$nextTree4 !== void 0 ? _storeState$nextTree4 : storeState.currentTree : storeState.currentTree;
      return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
    }, [storeRef, recoilValue]);
    const getState = useCallback$1(() => ({
      loadable: getLoadable(),
      key: recoilValue.key
    }), [getLoadable, recoilValue.key]);
    const updateState = useCallback$1((prevState) => {
      const nextState = getState();
      return prevState.loadable.is(nextState.loadable) && prevState.key === nextState.key ? prevState : nextState;
    }, [getState]);
    useEffect$3(() => {
      const subscription = subscribeToRecoilValue$1(storeRef.current, recoilValue, (_state) => {
        setState(updateState);
      }, componentName);
      setState(updateState);
      return subscription.release;
    }, [componentName, recoilValue, storeRef, updateState]);
    const [state, setState] = useState$1(getState);
    return state.key !== recoilValue.key ? getState().loadable : state.loadable;
  }
  function useRecoilValueLoadable_LEGACY(recoilValue) {
    const storeRef = useStoreRef$2();
    const [, forceUpdate] = useState$1([]);
    const componentName = Recoil_useComponentName();
    const getLoadable = useCallback$1(() => {
      var _storeState$nextTree5;
      if (false) {
        recoilComponentGetRecoilValueCount_FOR_TESTING.current++;
      }
      const store = storeRef.current;
      const storeState = store.getState();
      const treeState = reactMode$3().early ? (_storeState$nextTree5 = storeState.nextTree) !== null && _storeState$nextTree5 !== void 0 ? _storeState$nextTree5 : storeState.currentTree : storeState.currentTree;
      return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
    }, [storeRef, recoilValue]);
    const loadable = getLoadable();
    const prevLoadableRef = useRef$4(loadable);
    useEffect$3(() => {
      prevLoadableRef.current = loadable;
    });
    useEffect$3(() => {
      const store = storeRef.current;
      const storeState = store.getState();
      const subscription = subscribeToRecoilValue$1(store, recoilValue, (_state) => {
        var _prevLoadableRef$curr;
        if (!Recoil_gkx("recoil_suppress_rerender_in_callback")) {
          return forceUpdate([]);
        }
        const newLoadable = getLoadable();
        if (!((_prevLoadableRef$curr = prevLoadableRef.current) !== null && _prevLoadableRef$curr !== void 0 && _prevLoadableRef$curr.is(newLoadable))) {
          forceUpdate(newLoadable);
        }
        prevLoadableRef.current = newLoadable;
      }, componentName);
      if (storeState.nextTree) {
        store.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          prevLoadableRef.current = null;
          forceUpdate([]);
        });
      } else {
        var _prevLoadableRef$curr2;
        if (!Recoil_gkx("recoil_suppress_rerender_in_callback")) {
          return forceUpdate([]);
        }
        const newLoadable = getLoadable();
        if (!((_prevLoadableRef$curr2 = prevLoadableRef.current) !== null && _prevLoadableRef$curr2 !== void 0 && _prevLoadableRef$curr2.is(newLoadable))) {
          forceUpdate(newLoadable);
        }
        prevLoadableRef.current = newLoadable;
      }
      return subscription.release;
    }, [componentName, getLoadable, recoilValue, storeRef]);
    return loadable;
  }
  function useRecoilValueLoadable(recoilValue) {
    if (false) {
      validateRecoilValue(recoilValue, "useRecoilValueLoadable");
    }
    if (Recoil_gkx("recoil_memory_managament_2020")) {
      Recoil_useRetain(recoilValue);
    }
    return {
      TRANSITION_SUPPORT: useRecoilValueLoadable_TRANSITION_SUPPORT,
      // Recoil will attemp to detect if `useSyncExternalStore()` is supported with
      // `reactMode()` before calling it.  However, sometimes the host React
      // environment supports it but uses additional React renderers (such as with
      // `react-three-fiber`) which do not.  While this is technically a user issue
      // by using a renderer with React 18+ that doesn't fully support React 18 we
      // don't want to break users if it can be avoided. As the current renderer can
      // change at runtime, we need to dynamically check and fallback if necessary.
      SYNC_EXTERNAL_STORE: currentRendererSupportsUseSyncExternalStore$1() ? useRecoilValueLoadable_SYNC_EXTERNAL_STORE : useRecoilValueLoadable_TRANSITION_SUPPORT,
      MUTABLE_SOURCE: useRecoilValueLoadable_MUTABLE_SOURCE,
      LEGACY: useRecoilValueLoadable_LEGACY
    }[reactMode$3().mode](recoilValue);
  }
  function useRecoilValue(recoilValue) {
    if (false) {
      validateRecoilValue(recoilValue, "useRecoilValue");
    }
    const storeRef = useStoreRef$2();
    const loadable = useRecoilValueLoadable(recoilValue);
    return handleLoadable(loadable, recoilValue, storeRef);
  }
  function useSetRecoilState(recoilState) {
    if (false) {
      validateRecoilValue(recoilState, "useSetRecoilState");
    }
    const storeRef = useStoreRef$2();
    return useCallback$1((newValueOrUpdater) => {
      setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
    }, [storeRef, recoilState]);
  }
  function useResetRecoilState(recoilState) {
    if (false) {
      validateRecoilValue(recoilState, "useResetRecoilState");
    }
    const storeRef = useStoreRef$2();
    return useCallback$1(() => {
      setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
    }, [storeRef, recoilState]);
  }
  function useRecoilState(recoilState) {
    if (false) {
      validateRecoilValue(recoilState, "useRecoilState");
    }
    return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
  }
  function useRecoilStateLoadable(recoilState) {
    if (false) {
      validateRecoilValue(recoilState, "useRecoilStateLoadable");
    }
    return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
  }
  function useSetUnvalidatedAtomValues() {
    const storeRef = useStoreRef$2();
    return (values, transactionMetadata = {}) => {
      batchUpdates$2(() => {
        storeRef.current.addTransactionMetadata(transactionMetadata);
        values.forEach((value, key) => setUnvalidatedRecoilValue$2(storeRef.current, new AbstractRecoilValue$3(key), value));
      });
    };
  }
  function useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE(recoilValue) {
    if (false) {
      validateRecoilValue(recoilValue, "useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE");
      if (!reactMode$3().early) {
        Recoil_recoverableViolation("Attepmt to use a hook with UNSTABLE_TRANSITION_SUPPORT in a rendering mode incompatible with concurrent rendering.  Try enabling the recoil_sync_external_store or recoil_transition_support GKs.");
      }
    }
    if (Recoil_gkx("recoil_memory_managament_2020")) {
      Recoil_useRetain(recoilValue);
    }
    return useRecoilValueLoadable_TRANSITION_SUPPORT(recoilValue);
  }
  function useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(recoilValue) {
    if (false) {
      validateRecoilValue(recoilValue, "useRecoilValue_TRANSITION_SUPPORT_UNSTABLE");
    }
    const storeRef = useStoreRef$2();
    const loadable = useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE(recoilValue);
    return handleLoadable(loadable, recoilValue, storeRef);
  }
  function useRecoilState_TRANSITION_SUPPORT_UNSTABLE(recoilState) {
    if (false) {
      validateRecoilValue(recoilState, "useRecoilState_TRANSITION_SUPPORT_UNSTABLE");
    }
    return [useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(recoilState), useSetRecoilState(recoilState)];
  }
  var Recoil_Hooks = {
    recoilComponentGetRecoilValueCount_FOR_TESTING,
    useRecoilInterface: useRecoilInterface_DEPRECATED,
    useRecoilState,
    useRecoilStateLoadable,
    useRecoilValue,
    useRecoilValueLoadable,
    useResetRecoilState,
    useSetRecoilState,
    useSetUnvalidatedAtomValues,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE
  };
  function filterMap(map2, callback) {
    const result = /* @__PURE__ */ new Map();
    for (const [key, value] of map2) {
      if (callback(value, key)) {
        result.set(key, value);
      }
    }
    return result;
  }
  var Recoil_filterMap = filterMap;
  function filterSet(set, callback) {
    const result = /* @__PURE__ */ new Set();
    for (const value of set) {
      if (callback(value)) {
        result.add(value);
      }
    }
    return result;
  }
  var Recoil_filterSet = filterSet;
  function mergeMaps(...maps) {
    const result = /* @__PURE__ */ new Map();
    for (let i = 0; i < maps.length; i++) {
      const iterator = maps[i].keys();
      let nextKey;
      while (!(nextKey = iterator.next()).done) {
        result.set(nextKey.value, maps[i].get(nextKey.value));
      }
    }
    return result;
  }
  var Recoil_mergeMaps = mergeMaps;
  var {
    batchUpdates: batchUpdates$3
  } = Recoil_Batching;
  var {
    DEFAULT_VALUE: DEFAULT_VALUE$3,
    getNode: getNode$4,
    nodes: nodes$1
  } = Recoil_Node;
  var {
    useStoreRef: useStoreRef$3
  } = Recoil_RecoilRoot;
  var {
    AbstractRecoilValue: AbstractRecoilValue$4,
    setRecoilValueLoadable: setRecoilValueLoadable$1
  } = Recoil_RecoilValueInterface;
  var {
    SUSPENSE_TIMEOUT_MS: SUSPENSE_TIMEOUT_MS$2
  } = Recoil_Retention;
  var {
    cloneSnapshot: cloneSnapshot$1
  } = Recoil_Snapshot$1;
  var {
    useCallback: useCallback$2,
    useEffect: useEffect$4,
    useRef: useRef$5,
    useState: useState$2
  } = import_react.default;
  var {
    isSSR: isSSR$4
  } = Recoil_Environment;
  function useTransactionSubscription(callback) {
    const storeRef = useStoreRef$3();
    useEffect$4(() => {
      const sub = storeRef.current.subscribeToTransactions(callback);
      return sub.release;
    }, [callback, storeRef]);
  }
  function externallyVisibleAtomValuesInState(state) {
    const atomValues = state.atomValues.toMap();
    const persistedAtomContentsValues = Recoil_mapMap(Recoil_filterMap(atomValues, (v2, k) => {
      const node = getNode$4(k);
      const persistence = node.persistence_UNSTABLE;
      return persistence != null && persistence.type !== "none" && v2.state === "hasValue";
    }), (v2) => v2.contents);
    return Recoil_mergeMaps(state.nonvalidatedAtoms.toMap(), persistedAtomContentsValues);
  }
  function useTransactionObservation_DEPRECATED(callback) {
    useTransactionSubscription(useCallback$2((store) => {
      let previousTree = store.getState().previousTree;
      const currentTree = store.getState().currentTree;
      if (!previousTree) {
        Recoil_recoverableViolation("Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil");
        previousTree = store.getState().currentTree;
      }
      const atomValues = externallyVisibleAtomValuesInState(currentTree);
      const previousAtomValues = externallyVisibleAtomValuesInState(previousTree);
      const atomInfo = Recoil_mapMap(nodes$1, (node) => {
        var _node$persistence_UNS, _node$persistence_UNS2, _node$persistence_UNS3, _node$persistence_UNS4;
        return {
          persistence_UNSTABLE: {
            type: (_node$persistence_UNS = (_node$persistence_UNS2 = node.persistence_UNSTABLE) === null || _node$persistence_UNS2 === void 0 ? void 0 : _node$persistence_UNS2.type) !== null && _node$persistence_UNS !== void 0 ? _node$persistence_UNS : "none",
            backButton: (_node$persistence_UNS3 = (_node$persistence_UNS4 = node.persistence_UNSTABLE) === null || _node$persistence_UNS4 === void 0 ? void 0 : _node$persistence_UNS4.backButton) !== null && _node$persistence_UNS3 !== void 0 ? _node$persistence_UNS3 : false
          }
        };
      });
      const modifiedAtoms = Recoil_filterSet(currentTree.dirtyAtoms, (k) => atomValues.has(k) || previousAtomValues.has(k));
      callback({
        atomValues,
        previousAtomValues,
        atomInfo,
        modifiedAtoms,
        transactionMetadata: {
          ...currentTree.transactionMetadata
        }
      });
    }, [callback]));
  }
  function useRecoilTransactionObserver(callback) {
    useTransactionSubscription(useCallback$2((store) => {
      const snapshot = cloneSnapshot$1(store, "latest");
      const previousSnapshot = cloneSnapshot$1(store, "previous");
      callback({
        snapshot,
        previousSnapshot
      });
    }, [callback]));
  }
  function useRecoilSnapshot() {
    const storeRef = useStoreRef$3();
    const [snapshot, setSnapshot] = useState$2(() => cloneSnapshot$1(storeRef.current));
    const previousSnapshot = Recoil_usePrevious(snapshot);
    const timeoutID = useRef$5();
    const releaseRef = useRef$5();
    useTransactionSubscription(useCallback$2((store) => setSnapshot(cloneSnapshot$1(store)), []));
    useEffect$4(() => {
      const release = snapshot.retain();
      if (timeoutID.current && !isSSR$4) {
        var _releaseRef$current;
        window.clearTimeout(timeoutID.current);
        timeoutID.current = null;
        (_releaseRef$current = releaseRef.current) === null || _releaseRef$current === void 0 ? void 0 : _releaseRef$current.call(releaseRef);
        releaseRef.current = null;
      }
      return () => {
        window.setTimeout(release, 10);
      };
    }, [snapshot]);
    if (previousSnapshot !== snapshot && !isSSR$4) {
      if (timeoutID.current) {
        var _releaseRef$current2;
        window.clearTimeout(timeoutID.current);
        timeoutID.current = null;
        (_releaseRef$current2 = releaseRef.current) === null || _releaseRef$current2 === void 0 ? void 0 : _releaseRef$current2.call(releaseRef);
        releaseRef.current = null;
      }
      releaseRef.current = snapshot.retain();
      timeoutID.current = window.setTimeout(() => {
        var _releaseRef$current3;
        timeoutID.current = null;
        (_releaseRef$current3 = releaseRef.current) === null || _releaseRef$current3 === void 0 ? void 0 : _releaseRef$current3.call(releaseRef);
        releaseRef.current = null;
      }, SUSPENSE_TIMEOUT_MS$2);
    }
    return snapshot;
  }
  function gotoSnapshot(store, snapshot) {
    var _storeState$nextTree;
    const storeState = store.getState();
    const prev = (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree;
    const next = snapshot.getStore_INTERNAL().getState().currentTree;
    batchUpdates$3(() => {
      const keysToUpdate = /* @__PURE__ */ new Set();
      for (const keys of [prev.atomValues.keys(), next.atomValues.keys()]) {
        for (const key of keys) {
          var _prev$atomValues$get, _next$atomValues$get;
          if (((_prev$atomValues$get = prev.atomValues.get(key)) === null || _prev$atomValues$get === void 0 ? void 0 : _prev$atomValues$get.contents) !== ((_next$atomValues$get = next.atomValues.get(key)) === null || _next$atomValues$get === void 0 ? void 0 : _next$atomValues$get.contents) && getNode$4(key).shouldRestoreFromSnapshots) {
            keysToUpdate.add(key);
          }
        }
      }
      keysToUpdate.forEach((key) => {
        setRecoilValueLoadable$1(store, new AbstractRecoilValue$4(key), next.atomValues.has(key) ? Recoil_nullthrows(next.atomValues.get(key)) : DEFAULT_VALUE$3);
      });
      store.replaceState((state) => ({
        ...state,
        stateID: snapshot.getID()
      }));
    });
  }
  function useGotoRecoilSnapshot() {
    const storeRef = useStoreRef$3();
    return useCallback$2((snapshot) => gotoSnapshot(storeRef.current, snapshot), [storeRef]);
  }
  var Recoil_SnapshotHooks = {
    useRecoilSnapshot,
    gotoSnapshot,
    useGotoRecoilSnapshot,
    useRecoilTransactionObserver,
    useTransactionObservation_DEPRECATED,
    useTransactionSubscription_DEPRECATED: useTransactionSubscription
  };
  var {
    peekNodeInfo: peekNodeInfo$2
  } = Recoil_FunctionalCore;
  var {
    useStoreRef: useStoreRef$4
  } = Recoil_RecoilRoot;
  function useGetRecoilValueInfo() {
    const storeRef = useStoreRef$4();
    return ({
      key
    }) => peekNodeInfo$2(storeRef.current, storeRef.current.getState().currentTree, key);
  }
  var Recoil_useGetRecoilValueInfo = useGetRecoilValueInfo;
  var {
    reactMode: reactMode$4
  } = Recoil_ReactMode;
  var {
    RecoilRoot: RecoilRoot$1,
    useStoreRef: useStoreRef$5
  } = Recoil_RecoilRoot;
  var {
    useMemo: useMemo$2
  } = import_react.default;
  function useRecoilBridgeAcrossReactRoots() {
    if (reactMode$4().mode === "MUTABLE_SOURCE") {
      console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");
    }
    const store = useStoreRef$5().current;
    return useMemo$2(() => {
      function RecoilBridge({
        children
      }) {
        return /* @__PURE__ */ import_react.default.createElement(RecoilRoot$1, {
          store_INTERNAL: store
        }, children);
      }
      return RecoilBridge;
    }, [store]);
  }
  var Recoil_useRecoilBridgeAcrossReactRoots = useRecoilBridgeAcrossReactRoots;
  var {
    loadableWithValue: loadableWithValue$1
  } = Recoil_Loadable$1;
  var {
    initializeNode: initializeNode$3
  } = Recoil_FunctionalCore;
  var {
    DEFAULT_VALUE: DEFAULT_VALUE$4,
    getNode: getNode$5
  } = Recoil_Node;
  var {
    copyTreeState: copyTreeState$1,
    getRecoilValueAsLoadable: getRecoilValueAsLoadable$3,
    invalidateDownstreams: invalidateDownstreams$1,
    writeLoadableToTreeState: writeLoadableToTreeState$1
  } = Recoil_RecoilValueInterface;
  function isAtom(recoilValue) {
    return getNode$5(recoilValue.key).nodeType === "atom";
  }
  var TransactionInterfaceImpl = class {
    constructor(store, treeState) {
      _defineProperty(this, "_store", void 0);
      _defineProperty(this, "_treeState", void 0);
      _defineProperty(this, "_changes", void 0);
      _defineProperty(this, "get", (recoilValue) => {
        if (this._changes.has(recoilValue.key)) {
          return this._changes.get(recoilValue.key);
        }
        if (!isAtom(recoilValue)) {
          throw Recoil_err("Reading selectors within atomicUpdate is not supported");
        }
        const loadable = getRecoilValueAsLoadable$3(this._store, recoilValue, this._treeState);
        if (loadable.state === "hasValue") {
          return loadable.contents;
        } else if (loadable.state === "hasError") {
          throw loadable.contents;
        } else {
          throw Recoil_err(`Expected Recoil atom ${recoilValue.key} to have a value, but it is in a loading state.`);
        }
      });
      _defineProperty(this, "set", (recoilState, valueOrUpdater) => {
        if (!isAtom(recoilState)) {
          throw Recoil_err("Setting selectors within atomicUpdate is not supported");
        }
        if (typeof valueOrUpdater === "function") {
          const current = this.get(recoilState);
          this._changes.set(recoilState.key, valueOrUpdater(current));
        } else {
          initializeNode$3(this._store, recoilState.key, "set");
          this._changes.set(recoilState.key, valueOrUpdater);
        }
      });
      _defineProperty(this, "reset", (recoilState) => {
        this.set(recoilState, DEFAULT_VALUE$4);
      });
      this._store = store;
      this._treeState = treeState;
      this._changes = /* @__PURE__ */ new Map();
    }
    // Allow destructing
    // eslint-disable-next-line fb-www/extra-arrow-initializer
    newTreeState_INTERNAL() {
      if (this._changes.size === 0) {
        return this._treeState;
      }
      const newState = copyTreeState$1(this._treeState);
      for (const [k, v2] of this._changes) {
        writeLoadableToTreeState$1(newState, k, loadableWithValue$1(v2));
      }
      invalidateDownstreams$1(this._store, newState);
      return newState;
    }
  };
  function atomicUpdater(store) {
    return (fn) => {
      store.replaceState((treeState) => {
        const changeset = new TransactionInterfaceImpl(store, treeState);
        fn(changeset);
        return changeset.newTreeState_INTERNAL();
      });
    };
  }
  var Recoil_AtomicUpdates = {
    atomicUpdater
  };
  var Recoil_AtomicUpdates_1 = Recoil_AtomicUpdates.atomicUpdater;
  var Recoil_AtomicUpdates$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    atomicUpdater: Recoil_AtomicUpdates_1
  });
  function invariant(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }
  var invariant_1 = invariant;
  var Recoil_invariant = invariant_1;
  var {
    atomicUpdater: atomicUpdater$1
  } = Recoil_AtomicUpdates$1;
  var {
    batchUpdates: batchUpdates$4
  } = Recoil_Batching;
  var {
    DEFAULT_VALUE: DEFAULT_VALUE$5
  } = Recoil_Node;
  var {
    useStoreRef: useStoreRef$6
  } = Recoil_RecoilRoot;
  var {
    refreshRecoilValue: refreshRecoilValue$1,
    setRecoilValue: setRecoilValue$3
  } = Recoil_RecoilValueInterface;
  var {
    cloneSnapshot: cloneSnapshot$2
  } = Recoil_Snapshot$1;
  var {
    gotoSnapshot: gotoSnapshot$1
  } = Recoil_SnapshotHooks;
  var {
    useCallback: useCallback$3
  } = import_react.default;
  var Sentinel = class {
  };
  var SENTINEL = new Sentinel();
  function recoilCallback(store, fn, args, extraInterface) {
    let ret = SENTINEL;
    let releaseSnapshot;
    batchUpdates$4(() => {
      const errMsg = "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
      if (typeof fn !== "function") {
        throw Recoil_err(errMsg);
      }
      const callbackInterface = Recoil_lazyProxy({
        ...extraInterface !== null && extraInterface !== void 0 ? extraInterface : {},
        // flowlint-line unclear-type:off
        // $FlowFixMe[missing-local-annot]
        set: (node, newValue) => setRecoilValue$3(store, node, newValue),
        // $FlowFixMe[missing-local-annot]
        reset: (node) => setRecoilValue$3(store, node, DEFAULT_VALUE$5),
        // $FlowFixMe[missing-local-annot]
        refresh: (node) => refreshRecoilValue$1(store, node),
        gotoSnapshot: (snapshot) => gotoSnapshot$1(store, snapshot),
        transact_UNSTABLE: (transaction) => atomicUpdater$1(store)(transaction)
      }, {
        snapshot: () => {
          const snapshot = cloneSnapshot$2(store);
          releaseSnapshot = snapshot.retain();
          return snapshot;
        }
      });
      const callback = fn(callbackInterface);
      if (typeof callback !== "function") {
        throw Recoil_err(errMsg);
      }
      ret = callback(...args);
    });
    !!(ret instanceof Sentinel) ? false ? Recoil_invariant(false, "batchUpdates should return immediately") : Recoil_invariant(false) : void 0;
    if (Recoil_isPromise(ret)) {
      ret = ret.finally(() => {
        var _releaseSnapshot;
        (_releaseSnapshot = releaseSnapshot) === null || _releaseSnapshot === void 0 ? void 0 : _releaseSnapshot();
      });
    } else {
      var _releaseSnapshot2;
      (_releaseSnapshot2 = releaseSnapshot) === null || _releaseSnapshot2 === void 0 ? void 0 : _releaseSnapshot2();
    }
    return ret;
  }
  function useRecoilCallback(fn, deps) {
    const storeRef = useStoreRef$6();
    return useCallback$3(
      // $FlowIssue[incompatible-call]
      (...args) => {
        return recoilCallback(storeRef.current, fn, args);
      },
      deps != null ? [...deps, storeRef] : void 0
      // eslint-disable-line fb-www/react-hooks-deps
    );
  }
  var Recoil_useRecoilCallback = {
    recoilCallback,
    useRecoilCallback
  };
  var {
    useStoreRef: useStoreRef$7
  } = Recoil_RecoilRoot;
  var {
    refreshRecoilValue: refreshRecoilValue$2
  } = Recoil_RecoilValueInterface;
  var {
    useCallback: useCallback$4
  } = import_react.default;
  function useRecoilRefresher(recoilValue) {
    const storeRef = useStoreRef$7();
    return useCallback$4(() => {
      const store = storeRef.current;
      refreshRecoilValue$2(store, recoilValue);
    }, [recoilValue, storeRef]);
  }
  var Recoil_useRecoilRefresher = useRecoilRefresher;
  var {
    atomicUpdater: atomicUpdater$2
  } = Recoil_AtomicUpdates$1;
  var {
    useStoreRef: useStoreRef$8
  } = Recoil_RecoilRoot;
  var {
    useMemo: useMemo$3
  } = import_react.default;
  function useRecoilTransaction(fn, deps) {
    const storeRef = useStoreRef$8();
    return useMemo$3(
      () => (...args) => {
        const atomicUpdate = atomicUpdater$2(storeRef.current);
        atomicUpdate((transactionInterface) => {
          fn(transactionInterface)(...args);
        });
      },
      deps != null ? [...deps, storeRef] : void 0
      // eslint-disable-line fb-www/react-hooks-deps
    );
  }
  var Recoil_useRecoilTransaction = useRecoilTransaction;
  var WrappedValue = class {
    constructor(value) {
      _defineProperty(this, "value", void 0);
      this.value = value;
    }
  };
  var Recoil_Wrapper = {
    WrappedValue
  };
  var Recoil_Wrapper_1 = Recoil_Wrapper.WrappedValue;
  var Recoil_Wrapper$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    WrappedValue: Recoil_Wrapper_1
  });
  var {
    isFastRefreshEnabled: isFastRefreshEnabled$2
  } = Recoil_ReactMode;
  var ChangedPathError = class extends Error {
  };
  var TreeCache = class {
    // $FlowIssue[unclear-type]
    constructor(options) {
      var _options$onHit, _options$onSet, _options$mapNodeValue;
      _defineProperty(this, "_name", void 0);
      _defineProperty(this, "_numLeafs", void 0);
      _defineProperty(this, "_root", void 0);
      _defineProperty(this, "_onHit", void 0);
      _defineProperty(this, "_onSet", void 0);
      _defineProperty(this, "_mapNodeValue", void 0);
      this._name = options === null || options === void 0 ? void 0 : options.name;
      this._numLeafs = 0;
      this._root = null;
      this._onHit = (_options$onHit = options === null || options === void 0 ? void 0 : options.onHit) !== null && _options$onHit !== void 0 ? _options$onHit : () => {
      };
      this._onSet = (_options$onSet = options === null || options === void 0 ? void 0 : options.onSet) !== null && _options$onSet !== void 0 ? _options$onSet : () => {
      };
      this._mapNodeValue = (_options$mapNodeValue = options === null || options === void 0 ? void 0 : options.mapNodeValue) !== null && _options$mapNodeValue !== void 0 ? _options$mapNodeValue : (val) => val;
    }
    size() {
      return this._numLeafs;
    }
    // $FlowIssue[unclear-type]
    root() {
      return this._root;
    }
    get(getNodeValue, handlers) {
      var _this$getLeafNode;
      return (_this$getLeafNode = this.getLeafNode(getNodeValue, handlers)) === null || _this$getLeafNode === void 0 ? void 0 : _this$getLeafNode.value;
    }
    getLeafNode(getNodeValue, handlers) {
      if (this._root == null) {
        return void 0;
      }
      let node = this._root;
      while (node) {
        handlers === null || handlers === void 0 ? void 0 : handlers.onNodeVisit(node);
        if (node.type === "leaf") {
          this._onHit(node);
          return node;
        }
        const nodeValue = this._mapNodeValue(getNodeValue(node.nodeKey));
        node = node.branches.get(nodeValue);
      }
      return void 0;
    }
    set(route, value, handlers) {
      const addLeaf = () => {
        var _node2, _node3, _this$_root2, _handlers$onNodeVisit2;
        let node;
        let branchKey;
        for (const [nodeKey, nodeValue] of route) {
          var _node, _handlers$onNodeVisit, _this$_root;
          const root2 = this._root;
          if ((root2 === null || root2 === void 0 ? void 0 : root2.type) === "leaf") {
            throw this.invalidCacheError();
          }
          const parent = node;
          node = parent ? parent.branches.get(branchKey) : root2;
          node = (_node = node) !== null && _node !== void 0 ? _node : {
            type: "branch",
            nodeKey,
            parent,
            branches: /* @__PURE__ */ new Map(),
            branchKey
          };
          if (node.type !== "branch" || node.nodeKey !== nodeKey) {
            throw this.invalidCacheError();
          }
          parent === null || parent === void 0 ? void 0 : parent.branches.set(branchKey, node);
          handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit = handlers.onNodeVisit) === null || _handlers$onNodeVisit === void 0 ? void 0 : _handlers$onNodeVisit.call(handlers, node);
          branchKey = this._mapNodeValue(nodeValue);
          this._root = (_this$_root = this._root) !== null && _this$_root !== void 0 ? _this$_root : node;
        }
        const oldLeaf = node ? (_node2 = node) === null || _node2 === void 0 ? void 0 : _node2.branches.get(branchKey) : this._root;
        if (oldLeaf != null && (oldLeaf.type !== "leaf" || oldLeaf.branchKey !== branchKey)) {
          throw this.invalidCacheError();
        }
        const leafNode = {
          type: "leaf",
          value,
          parent: node,
          branchKey
        };
        (_node3 = node) === null || _node3 === void 0 ? void 0 : _node3.branches.set(branchKey, leafNode);
        this._root = (_this$_root2 = this._root) !== null && _this$_root2 !== void 0 ? _this$_root2 : leafNode;
        this._numLeafs++;
        this._onSet(leafNode);
        handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit2 = handlers.onNodeVisit) === null || _handlers$onNodeVisit2 === void 0 ? void 0 : _handlers$onNodeVisit2.call(handlers, leafNode);
      };
      try {
        addLeaf();
      } catch (error) {
        if (error instanceof ChangedPathError) {
          this.clear();
          addLeaf();
        } else {
          throw error;
        }
      }
    }
    // Returns true if leaf was actually deleted from the tree
    delete(leaf2) {
      const root2 = this.root();
      if (!root2) {
        return false;
      }
      if (leaf2 === root2) {
        this._root = null;
        this._numLeafs = 0;
        return true;
      }
      let node = leaf2.parent;
      let branchKey = leaf2.branchKey;
      while (node) {
        var _node4;
        node.branches.delete(branchKey);
        if (node === root2) {
          if (node.branches.size === 0) {
            this._root = null;
            this._numLeafs = 0;
          } else {
            this._numLeafs--;
          }
          return true;
        }
        if (node.branches.size > 0) {
          break;
        }
        branchKey = (_node4 = node) === null || _node4 === void 0 ? void 0 : _node4.branchKey;
        node = node.parent;
      }
      for (; node !== root2; node = node.parent) {
        if (node == null) {
          return false;
        }
      }
      this._numLeafs--;
      return true;
    }
    clear() {
      this._numLeafs = 0;
      this._root = null;
    }
    invalidCacheError() {
      const CHANGED_PATH_ERROR_MESSAGE = isFastRefreshEnabled$2() ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache." : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
      Recoil_recoverableViolation(CHANGED_PATH_ERROR_MESSAGE + (this._name != null ? ` - ${this._name}` : ""));
      throw new ChangedPathError();
    }
  };
  var Recoil_TreeCache = {
    TreeCache
  };
  var Recoil_TreeCache_1 = Recoil_TreeCache.TreeCache;
  var Recoil_TreeCache$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    TreeCache: Recoil_TreeCache_1
  });
  var LRUCache = class {
    constructor(options) {
      var _options$mapKey;
      _defineProperty(this, "_maxSize", void 0);
      _defineProperty(this, "_size", void 0);
      _defineProperty(this, "_head", void 0);
      _defineProperty(this, "_tail", void 0);
      _defineProperty(this, "_map", void 0);
      _defineProperty(this, "_keyMapper", void 0);
      this._maxSize = options.maxSize;
      this._size = 0;
      this._head = null;
      this._tail = null;
      this._map = /* @__PURE__ */ new Map();
      this._keyMapper = (_options$mapKey = options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : (v2) => v2;
    }
    head() {
      return this._head;
    }
    tail() {
      return this._tail;
    }
    size() {
      return this._size;
    }
    maxSize() {
      return this._maxSize;
    }
    has(key) {
      return this._map.has(this._keyMapper(key));
    }
    get(key) {
      const mappedKey = this._keyMapper(key);
      const node = this._map.get(mappedKey);
      if (!node) {
        return void 0;
      }
      this.set(key, node.value);
      return node.value;
    }
    set(key, val) {
      const mappedKey = this._keyMapper(key);
      const existingNode = this._map.get(mappedKey);
      if (existingNode) {
        this.delete(key);
      }
      const head = this.head();
      const node = {
        key,
        right: head,
        left: null,
        value: val
      };
      if (head) {
        head.left = node;
      } else {
        this._tail = node;
      }
      this._map.set(mappedKey, node);
      this._head = node;
      this._size++;
      this._maybeDeleteLRU();
    }
    _maybeDeleteLRU() {
      if (this.size() > this.maxSize()) {
        this.deleteLru();
      }
    }
    deleteLru() {
      const tail = this.tail();
      if (tail) {
        this.delete(tail.key);
      }
    }
    delete(key) {
      const mappedKey = this._keyMapper(key);
      if (!this._size || !this._map.has(mappedKey)) {
        return;
      }
      const node = Recoil_nullthrows(this._map.get(mappedKey));
      const right = node.right;
      const left = node.left;
      if (right) {
        right.left = node.left;
      }
      if (left) {
        left.right = node.right;
      }
      if (node === this.head()) {
        this._head = right;
      }
      if (node === this.tail()) {
        this._tail = left;
      }
      this._map.delete(mappedKey);
      this._size--;
    }
    clear() {
      this._size = 0;
      this._head = null;
      this._tail = null;
      this._map = /* @__PURE__ */ new Map();
    }
  };
  var Recoil_LRUCache = {
    LRUCache
  };
  var Recoil_LRUCache_1 = Recoil_LRUCache.LRUCache;
  var Recoil_LRUCache$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    LRUCache: Recoil_LRUCache_1
  });
  var {
    LRUCache: LRUCache$1
  } = Recoil_LRUCache$1;
  var {
    TreeCache: TreeCache$1
  } = Recoil_TreeCache$1;
  function treeCacheLRU({
    name,
    maxSize,
    mapNodeValue = (v2) => v2
  }) {
    const lruCache = new LRUCache$1({
      maxSize
    });
    const cache = new TreeCache$1({
      name,
      mapNodeValue,
      onHit: (node) => {
        lruCache.set(node, true);
      },
      onSet: (node) => {
        const lruNode = lruCache.tail();
        lruCache.set(node, true);
        if (lruNode && cache.size() > maxSize) {
          cache.delete(lruNode.key);
        }
      }
    });
    return cache;
  }
  var Recoil_treeCacheLRU = treeCacheLRU;
  function stringify(x, opt, key) {
    if (typeof x === "string" && !x.includes('"') && !x.includes("\\")) {
      return `"${x}"`;
    }
    switch (typeof x) {
      case "undefined":
        return "";
      // JSON.stringify(undefined) returns undefined, but we always want to return a string
      case "boolean":
        return x ? "true" : "false";
      case "number":
      case "symbol":
        return String(x);
      case "string":
        return JSON.stringify(x);
      case "function":
        if ((opt === null || opt === void 0 ? void 0 : opt.allowFunctions) !== true) {
          throw Recoil_err("Attempt to serialize function in a Recoil cache key");
        }
        return `__FUNCTION(${x.name})__`;
    }
    if (x === null) {
      return "null";
    }
    if (typeof x !== "object") {
      var _JSON$stringify;
      return (_JSON$stringify = JSON.stringify(x)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : "";
    }
    if (Recoil_isPromise(x)) {
      return "__PROMISE__";
    }
    if (Array.isArray(x)) {
      return `[${x.map((v2, i) => stringify(v2, opt, i.toString()))}]`;
    }
    if (typeof x.toJSON === "function") {
      return stringify(x.toJSON(key), opt, key);
    }
    if (x instanceof Map) {
      const obj = {};
      for (const [k, v2] of x) {
        obj[typeof k === "string" ? k : stringify(k, opt)] = v2;
      }
      return stringify(obj, opt, key);
    }
    if (x instanceof Set) {
      return stringify(
        // $FlowFixMe[missing-local-annot]
        Array.from(x).sort((a, b2) => stringify(a, opt).localeCompare(stringify(b2, opt))),
        opt,
        key
      );
    }
    if (Symbol !== void 0 && x[Symbol.iterator] != null && typeof x[Symbol.iterator] === "function") {
      return stringify(Array.from(x), opt, key);
    }
    return `{${Object.keys(x).filter((k) => x[k] !== void 0).sort().map((k) => `${stringify(k, opt)}:${stringify(x[k], opt, k)}`).join(",")}}`;
  }
  function stableStringify(x, opt = {
    allowFunctions: false
  }) {
    if (false) {
      if (typeof window !== "undefined") {
        const startTime = window.performance ? window.performance.now() : 0;
        const str = stringify(x, opt);
        const endTime = window.performance ? window.performance.now() : 0;
        if (endTime - startTime > TIME_WARNING_THRESHOLD_MS) {
          console.groupCollapsed(`Recoil: Spent ${endTime - startTime}ms computing a cache key`);
          console.warn(x, str);
          console.groupEnd();
        }
        return str;
      }
    }
    return stringify(x, opt);
  }
  var Recoil_stableStringify = stableStringify;
  var {
    TreeCache: TreeCache$2
  } = Recoil_TreeCache$1;
  var defaultPolicy = {
    equality: "reference",
    eviction: "keep-all",
    maxSize: Infinity
  };
  function treeCacheFromPolicy({
    equality = defaultPolicy.equality,
    eviction = defaultPolicy.eviction,
    maxSize = defaultPolicy.maxSize
  } = defaultPolicy, name) {
    const valueMapper = getValueMapper(equality);
    return getTreeCache(eviction, maxSize, valueMapper, name);
  }
  function getValueMapper(equality) {
    switch (equality) {
      case "reference":
        return (val) => val;
      case "value":
        return (val) => Recoil_stableStringify(val);
    }
    throw Recoil_err(`Unrecognized equality policy ${equality}`);
  }
  function getTreeCache(eviction, maxSize, mapNodeValue, name) {
    switch (eviction) {
      case "keep-all":
        return new TreeCache$2({
          name,
          mapNodeValue
        });
      case "lru":
        return Recoil_treeCacheLRU({
          name,
          maxSize: Recoil_nullthrows(maxSize),
          mapNodeValue
        });
      case "most-recent":
        return Recoil_treeCacheLRU({
          name,
          maxSize: 1,
          mapNodeValue
        });
    }
    throw Recoil_err(`Unrecognized eviction policy ${eviction}`);
  }
  var Recoil_treeCacheFromPolicy = treeCacheFromPolicy;
  var {
    isReactNative: isReactNative$1,
    isWindow: isWindow$1
  } = Recoil_Environment;
  function startPerfBlock(_id) {
    return () => null;
  }
  var Recoil_PerformanceTimings = {
    startPerfBlock
  };
  var {
    isLoadable: isLoadable$1,
    loadableWithError: loadableWithError$1,
    loadableWithPromise: loadableWithPromise$1,
    loadableWithValue: loadableWithValue$2
  } = Recoil_Loadable$1;
  var {
    WrappedValue: WrappedValue$1
  } = Recoil_Wrapper$1;
  var {
    getNodeLoadable: getNodeLoadable$2,
    peekNodeLoadable: peekNodeLoadable$1,
    setNodeValue: setNodeValue$3
  } = Recoil_FunctionalCore;
  var {
    saveDepsToStore: saveDepsToStore$1
  } = Recoil_Graph;
  var {
    DEFAULT_VALUE: DEFAULT_VALUE$6,
    getConfigDeletionHandler: getConfigDeletionHandler$1,
    getNode: getNode$6,
    registerNode: registerNode$1
  } = Recoil_Node;
  var {
    isRecoilValue: isRecoilValue$3
  } = Recoil_RecoilValue$1;
  var {
    markRecoilValueModified: markRecoilValueModified$1
  } = Recoil_RecoilValueInterface;
  var {
    retainedByOptionWithDefault: retainedByOptionWithDefault$1
  } = Recoil_Retention;
  var {
    recoilCallback: recoilCallback$1
  } = Recoil_useRecoilCallback;
  var {
    startPerfBlock: startPerfBlock$1
  } = Recoil_PerformanceTimings;
  var Canceled = class {
  };
  var CANCELED = new Canceled();
  var dependencyStack = [];
  var waitingStores = /* @__PURE__ */ new Map();
  var getNewExecutionID = /* @__PURE__ */ (() => {
    let executionID = 0;
    return () => executionID++;
  })();
  function selector(options) {
    let recoilValue = null;
    const {
      key,
      get,
      cachePolicy_UNSTABLE: cachePolicy
    } = options;
    const set = options.set != null ? options.set : void 0;
    if (false) {
      if (typeof key !== "string") {
        throw Recoil_err("A key option with a unique string value must be provided when creating a selector.");
      }
      if (typeof get !== "function") {
        throw Recoil_err("Selectors must specify a get callback option to get the selector value.");
      }
    }
    const discoveredDependencyNodeKeys = /* @__PURE__ */ new Set();
    const cache = Recoil_treeCacheFromPolicy(cachePolicy !== null && cachePolicy !== void 0 ? cachePolicy : {
      equality: "reference",
      eviction: "keep-all"
    }, key);
    const retainedBy = retainedByOptionWithDefault$1(options.retainedBy_UNSTABLE);
    const executionInfoMap = /* @__PURE__ */ new Map();
    let liveStoresCount = 0;
    function selectorIsLive() {
      return !Recoil_gkx("recoil_memory_managament_2020") || liveStoresCount > 0;
    }
    function selectorInit(store) {
      store.getState().knownSelectors.add(key);
      liveStoresCount++;
      return () => {
        liveStoresCount--;
      };
    }
    function selectorShouldDeleteConfigOnRelease() {
      return getConfigDeletionHandler$1(key) !== void 0 && !selectorIsLive();
    }
    function resolveAsync(store, state, executionID, loadable, depValues) {
      setCache(state, loadable, depValues);
      notifyStoresOfResolvedAsync(store, executionID);
    }
    function notifyStoresOfResolvedAsync(store, executionID) {
      if (isLatestExecution(store, executionID)) {
        clearExecutionInfo(store);
      }
      notifyWaitingStores(executionID, true);
    }
    function notifyStoresOfNewAsyncDep(store, executionID) {
      if (isLatestExecution(store, executionID)) {
        const executionInfo = Recoil_nullthrows(getExecutionInfo(store));
        executionInfo.stateVersions.clear();
        notifyWaitingStores(executionID, false);
      }
    }
    function notifyWaitingStores(executionID, clearWaitlist) {
      const stores = waitingStores.get(executionID);
      if (stores != null) {
        for (const waitingStore of stores) {
          markRecoilValueModified$1(waitingStore, Recoil_nullthrows(recoilValue));
        }
        if (clearWaitlist) {
          waitingStores.delete(executionID);
        }
      }
    }
    function markStoreWaitingForResolvedAsync(store, executionID) {
      let stores = waitingStores.get(executionID);
      if (stores == null) {
        waitingStores.set(executionID, stores = /* @__PURE__ */ new Set());
      }
      stores.add(store);
    }
    function wrapResultPromise(store, promise, state, depValues, executionID, loadingDepsState) {
      return promise.then((value) => {
        if (!selectorIsLive()) {
          clearExecutionInfo(store);
          throw CANCELED;
        }
        const loadable = loadableWithValue$2(value);
        resolveAsync(store, state, executionID, loadable, depValues);
        return value;
      }).catch((errorOrPromise) => {
        if (!selectorIsLive()) {
          clearExecutionInfo(store);
          throw CANCELED;
        }
        if (Recoil_isPromise(errorOrPromise)) {
          return wrapPendingDependencyPromise(store, errorOrPromise, state, depValues, executionID, loadingDepsState);
        }
        const loadable = loadableWithError$1(errorOrPromise);
        resolveAsync(store, state, executionID, loadable, depValues);
        throw errorOrPromise;
      });
    }
    function wrapPendingDependencyPromise(store, promise, state, existingDeps, executionID, loadingDepsState) {
      return promise.then((resolvedDep) => {
        if (!selectorIsLive()) {
          clearExecutionInfo(store);
          throw CANCELED;
        }
        if (loadingDepsState.loadingDepKey != null && loadingDepsState.loadingDepPromise === promise) {
          state.atomValues.set(loadingDepsState.loadingDepKey, loadableWithValue$2(resolvedDep));
        } else {
          store.getState().knownSelectors.forEach((nodeKey) => {
            state.atomValues.delete(nodeKey);
          });
        }
        const cachedLoadable = getLoadableFromCacheAndUpdateDeps(store, state);
        if (cachedLoadable && cachedLoadable.state !== "loading") {
          if (isLatestExecution(store, executionID) || getExecutionInfo(store) == null) {
            notifyStoresOfResolvedAsync(store, executionID);
          }
          if (cachedLoadable.state === "hasValue") {
            return cachedLoadable.contents;
          } else {
            throw cachedLoadable.contents;
          }
        }
        if (!isLatestExecution(store, executionID)) {
          const executionInfo = getInProgressExecutionInfo(store, state);
          if (executionInfo != null) {
            return executionInfo.loadingLoadable.contents;
          }
        }
        const [loadable, depValues] = evaluateSelectorGetter(store, state, executionID);
        if (loadable.state !== "loading") {
          resolveAsync(store, state, executionID, loadable, depValues);
        }
        if (loadable.state === "hasError") {
          throw loadable.contents;
        }
        return loadable.contents;
      }).catch((error) => {
        if (error instanceof Canceled) {
          throw CANCELED;
        }
        if (!selectorIsLive()) {
          clearExecutionInfo(store);
          throw CANCELED;
        }
        const loadable = loadableWithError$1(error);
        resolveAsync(store, state, executionID, loadable, existingDeps);
        throw error;
      });
    }
    function updateDeps(store, state, deps, executionID) {
      var _store$getState, _store$getState$curre, _store$getState2, _store$getState2$next;
      if (isLatestExecution(store, executionID) || state.version === ((_store$getState = store.getState()) === null || _store$getState === void 0 ? void 0 : (_store$getState$curre = _store$getState.currentTree) === null || _store$getState$curre === void 0 ? void 0 : _store$getState$curre.version) || state.version === ((_store$getState2 = store.getState()) === null || _store$getState2 === void 0 ? void 0 : (_store$getState2$next = _store$getState2.nextTree) === null || _store$getState2$next === void 0 ? void 0 : _store$getState2$next.version)) {
        var _store$getState$nextT, _store$getState3, _store$getState3$next;
        saveDepsToStore$1(key, deps, store, (_store$getState$nextT = (_store$getState3 = store.getState()) === null || _store$getState3 === void 0 ? void 0 : (_store$getState3$next = _store$getState3.nextTree) === null || _store$getState3$next === void 0 ? void 0 : _store$getState3$next.version) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree.version);
      }
      for (const nodeKey of deps) {
        discoveredDependencyNodeKeys.add(nodeKey);
      }
    }
    function evaluateSelectorGetter(store, state, executionID) {
      const endPerfBlock = startPerfBlock$1(key);
      let duringSynchronousExecution = true;
      let duringAsynchronousExecution = true;
      const finishEvaluation = () => {
        endPerfBlock();
        duringAsynchronousExecution = false;
      };
      let result;
      let resultIsError = false;
      let loadable;
      const loadingDepsState = {
        loadingDepKey: null,
        loadingDepPromise: null
      };
      const depValues = /* @__PURE__ */ new Map();
      function getRecoilValue({
        key: depKey
      }) {
        const depLoadable = getNodeLoadable$2(store, state, depKey);
        depValues.set(depKey, depLoadable);
        if (!duringSynchronousExecution) {
          updateDeps(store, state, new Set(depValues.keys()), executionID);
          notifyStoresOfNewAsyncDep(store, executionID);
        }
        switch (depLoadable.state) {
          case "hasValue":
            return depLoadable.contents;
          case "hasError":
            throw depLoadable.contents;
          case "loading":
            loadingDepsState.loadingDepKey = depKey;
            loadingDepsState.loadingDepPromise = depLoadable.contents;
            throw depLoadable.contents;
        }
        throw Recoil_err("Invalid Loadable state");
      }
      const getCallback = (fn) => {
        return (...args) => {
          if (duringAsynchronousExecution) {
            throw Recoil_err("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");
          }
          !(recoilValue != null) ? false ? Recoil_invariant(false, "Recoil Value can never be null") : Recoil_invariant(false) : void 0;
          return recoilCallback$1(
            store,
            fn,
            args,
            {
              node: recoilValue
            }
            // flowlint-line unclear-type:off
          );
        };
      };
      try {
        result = get({
          get: getRecoilValue,
          getCallback
        });
        result = isRecoilValue$3(result) ? getRecoilValue(result) : result;
        if (isLoadable$1(result)) {
          if (result.state === "hasError") {
            resultIsError = true;
          }
          result = result.contents;
        }
        if (Recoil_isPromise(result)) {
          result = wrapResultPromise(store, result, state, depValues, executionID, loadingDepsState).finally(finishEvaluation);
        } else {
          finishEvaluation();
        }
        result = result instanceof WrappedValue$1 ? result.value : result;
      } catch (errorOrDepPromise) {
        result = errorOrDepPromise;
        if (Recoil_isPromise(result)) {
          result = wrapPendingDependencyPromise(store, result, state, depValues, executionID, loadingDepsState).finally(finishEvaluation);
        } else {
          resultIsError = true;
          finishEvaluation();
        }
      }
      if (resultIsError) {
        loadable = loadableWithError$1(result);
      } else if (Recoil_isPromise(result)) {
        loadable = loadableWithPromise$1(result);
      } else {
        loadable = loadableWithValue$2(result);
      }
      duringSynchronousExecution = false;
      updateExecutionInfoDepValues(store, executionID, depValues);
      updateDeps(store, state, new Set(depValues.keys()), executionID);
      return [loadable, depValues];
    }
    function getLoadableFromCacheAndUpdateDeps(store, state) {
      let cachedLoadable = state.atomValues.get(key);
      if (cachedLoadable != null) {
        return cachedLoadable;
      }
      const depsAfterCacheLookup = /* @__PURE__ */ new Set();
      try {
        cachedLoadable = cache.get((nodeKey) => {
          !(typeof nodeKey === "string") ? false ? Recoil_invariant(false, "Cache nodeKey is type string") : Recoil_invariant(false) : void 0;
          return getNodeLoadable$2(store, state, nodeKey).contents;
        }, {
          onNodeVisit: (node) => {
            if (node.type === "branch" && node.nodeKey !== key) {
              depsAfterCacheLookup.add(node.nodeKey);
            }
          }
        });
      } catch (error) {
        throw Recoil_err(`Problem with cache lookup for selector "${key}": ${error.message}`);
      }
      if (cachedLoadable) {
        var _getExecutionInfo;
        state.atomValues.set(key, cachedLoadable);
        updateDeps(store, state, depsAfterCacheLookup, (_getExecutionInfo = getExecutionInfo(store)) === null || _getExecutionInfo === void 0 ? void 0 : _getExecutionInfo.executionID);
      }
      return cachedLoadable;
    }
    function getSelectorLoadableAndUpdateDeps(store, state) {
      const cachedVal = getLoadableFromCacheAndUpdateDeps(store, state);
      if (cachedVal != null) {
        clearExecutionInfo(store);
        return cachedVal;
      }
      const inProgressExecutionInfo = getInProgressExecutionInfo(store, state);
      if (inProgressExecutionInfo != null) {
        var _inProgressExecutionI;
        if (((_inProgressExecutionI = inProgressExecutionInfo.loadingLoadable) === null || _inProgressExecutionI === void 0 ? void 0 : _inProgressExecutionI.state) === "loading") {
          markStoreWaitingForResolvedAsync(store, inProgressExecutionInfo.executionID);
        }
        return inProgressExecutionInfo.loadingLoadable;
      }
      const newExecutionID = getNewExecutionID();
      const [loadable, newDepValues] = evaluateSelectorGetter(store, state, newExecutionID);
      if (loadable.state === "loading") {
        setExecutionInfo(store, newExecutionID, loadable, newDepValues, state);
        markStoreWaitingForResolvedAsync(store, newExecutionID);
      } else {
        clearExecutionInfo(store);
        setCache(state, loadable, newDepValues);
      }
      return loadable;
    }
    function getInProgressExecutionInfo(store, state) {
      const pendingExecutions = Recoil_concatIterables([executionInfoMap.has(store) ? [Recoil_nullthrows(executionInfoMap.get(store))] : [], Recoil_mapIterable(Recoil_filterIterable(executionInfoMap, ([s]) => s !== store), ([, execInfo]) => execInfo)]);
      function anyDepChanged(execDepValues) {
        for (const [depKey, execLoadable] of execDepValues) {
          if (!getNodeLoadable$2(store, state, depKey).is(execLoadable)) {
            return true;
          }
        }
        return false;
      }
      for (const execInfo of pendingExecutions) {
        if (
          // If this execution was already checked to be valid with this version
          // of state, then let's use it!
          execInfo.stateVersions.get(state.version) || // If the deps for the execution match our current state, then it's valid
          !anyDepChanged(execInfo.depValuesDiscoveredSoFarDuringAsyncWork)
        ) {
          execInfo.stateVersions.set(state.version, true);
          return execInfo;
        } else {
          execInfo.stateVersions.set(state.version, false);
        }
      }
      return void 0;
    }
    function getExecutionInfo(store) {
      return executionInfoMap.get(store);
    }
    function setExecutionInfo(store, newExecutionID, loadable, depValues, state) {
      executionInfoMap.set(store, {
        depValuesDiscoveredSoFarDuringAsyncWork: depValues,
        executionID: newExecutionID,
        loadingLoadable: loadable,
        stateVersions: /* @__PURE__ */ new Map([[state.version, true]])
      });
    }
    function updateExecutionInfoDepValues(store, executionID, depValues) {
      if (isLatestExecution(store, executionID)) {
        const executionInfo = getExecutionInfo(store);
        if (executionInfo != null) {
          executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
        }
      }
    }
    function clearExecutionInfo(store) {
      executionInfoMap.delete(store);
    }
    function isLatestExecution(store, executionID) {
      var _getExecutionInfo2;
      return executionID === ((_getExecutionInfo2 = getExecutionInfo(store)) === null || _getExecutionInfo2 === void 0 ? void 0 : _getExecutionInfo2.executionID);
    }
    function depValuesToDepRoute(depValues) {
      return Array.from(depValues.entries()).map(([depKey, valLoadable]) => [depKey, valLoadable.contents]);
    }
    function setCache(state, loadable, depValues) {
      if (false) {
        if (loadable.state !== "loading" && Boolean(options.dangerouslyAllowMutability) === false) {
          Recoil_deepFreezeValue(loadable.contents);
        }
      }
      state.atomValues.set(key, loadable);
      try {
        cache.set(depValuesToDepRoute(depValues), loadable);
      } catch (error) {
        throw Recoil_err(`Problem with setting cache for selector "${key}": ${error.message}`);
      }
    }
    function detectCircularDependencies(fn) {
      if (dependencyStack.includes(key)) {
        const message = `Recoil selector has circular dependencies: ${dependencyStack.slice(dependencyStack.indexOf(key)).join(" \u2192 ")}`;
        return loadableWithError$1(Recoil_err(message));
      }
      dependencyStack.push(key);
      try {
        return fn();
      } finally {
        dependencyStack.pop();
      }
    }
    function selectorPeek(store, state) {
      const cachedLoadable = state.atomValues.get(key);
      if (cachedLoadable != null) {
        return cachedLoadable;
      }
      return cache.get((nodeKey) => {
        var _peekNodeLoadable;
        !(typeof nodeKey === "string") ? false ? Recoil_invariant(false, "Cache nodeKey is type string") : Recoil_invariant(false) : void 0;
        return (_peekNodeLoadable = peekNodeLoadable$1(store, state, nodeKey)) === null || _peekNodeLoadable === void 0 ? void 0 : _peekNodeLoadable.contents;
      });
    }
    function selectorGet(store, state) {
      return detectCircularDependencies(() => getSelectorLoadableAndUpdateDeps(store, state));
    }
    function invalidateSelector(state) {
      state.atomValues.delete(key);
    }
    function clearSelectorCache(store, treeState) {
      !(recoilValue != null) ? false ? Recoil_invariant(false, "Recoil Value can never be null") : Recoil_invariant(false) : void 0;
      for (const nodeKey of discoveredDependencyNodeKeys) {
        var _node$clearCache;
        const node = getNode$6(nodeKey);
        (_node$clearCache = node.clearCache) === null || _node$clearCache === void 0 ? void 0 : _node$clearCache.call(node, store, treeState);
      }
      discoveredDependencyNodeKeys.clear();
      invalidateSelector(treeState);
      cache.clear();
      markRecoilValueModified$1(store, recoilValue);
    }
    if (set != null) {
      const selectorSet = (store, state, newValue) => {
        let syncSelectorSetFinished = false;
        const writes = /* @__PURE__ */ new Map();
        function getRecoilValue({
          key: depKey
        }) {
          if (syncSelectorSetFinished) {
            throw Recoil_err("Recoil: Async selector sets are not currently supported.");
          }
          const loadable = getNodeLoadable$2(store, state, depKey);
          if (loadable.state === "hasValue") {
            return loadable.contents;
          } else if (loadable.state === "loading") {
            const msg = `Getting value of asynchronous atom or selector "${depKey}" in a pending state while setting selector "${key}" is not yet supported.`;
            Recoil_recoverableViolation(msg);
            throw Recoil_err(msg);
          } else {
            throw loadable.contents;
          }
        }
        function setRecoilState(recoilState, valueOrUpdater) {
          if (syncSelectorSetFinished) {
            const msg = "Recoil: Async selector sets are not currently supported.";
            Recoil_recoverableViolation(msg);
            throw Recoil_err(msg);
          }
          const setValue = typeof valueOrUpdater === "function" ? (
            // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
            // flowlint-next-line unclear-type:off
            valueOrUpdater(getRecoilValue(recoilState))
          ) : valueOrUpdater;
          const upstreamWrites = setNodeValue$3(store, state, recoilState.key, setValue);
          upstreamWrites.forEach((v2, k) => writes.set(k, v2));
        }
        function resetRecoilState(recoilState) {
          setRecoilState(recoilState, DEFAULT_VALUE$6);
        }
        const ret = set({
          set: setRecoilState,
          get: getRecoilValue,
          reset: resetRecoilState
        }, newValue);
        if (ret !== void 0) {
          throw Recoil_isPromise(ret) ? Recoil_err("Recoil: Async selector sets are not currently supported.") : Recoil_err("Recoil: selector set should be a void function.");
        }
        syncSelectorSetFinished = true;
        return writes;
      };
      return recoilValue = registerNode$1({
        key,
        nodeType: "selector",
        peek: selectorPeek,
        get: selectorGet,
        set: selectorSet,
        init: selectorInit,
        invalidate: invalidateSelector,
        clearCache: clearSelectorCache,
        shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: false,
        retainedBy
      });
    } else {
      return recoilValue = registerNode$1({
        key,
        nodeType: "selector",
        peek: selectorPeek,
        get: selectorGet,
        init: selectorInit,
        invalidate: invalidateSelector,
        clearCache: clearSelectorCache,
        shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: false,
        retainedBy
      });
    }
  }
  selector.value = (value) => new WrappedValue$1(value);
  var Recoil_selector = selector;
  var {
    isLoadable: isLoadable$2,
    loadableWithError: loadableWithError$2,
    loadableWithPromise: loadableWithPromise$2,
    loadableWithValue: loadableWithValue$3
  } = Recoil_Loadable$1;
  var {
    WrappedValue: WrappedValue$2
  } = Recoil_Wrapper$1;
  var {
    peekNodeInfo: peekNodeInfo$3
  } = Recoil_FunctionalCore;
  var {
    DEFAULT_VALUE: DEFAULT_VALUE$7,
    DefaultValue: DefaultValue$2,
    getConfigDeletionHandler: getConfigDeletionHandler$2,
    registerNode: registerNode$2,
    setConfigDeletionHandler: setConfigDeletionHandler$1
  } = Recoil_Node;
  var {
    isRecoilValue: isRecoilValue$4
  } = Recoil_RecoilValue$1;
  var {
    getRecoilValueAsLoadable: getRecoilValueAsLoadable$4,
    markRecoilValueModified: markRecoilValueModified$2,
    setRecoilValue: setRecoilValue$4,
    setRecoilValueLoadable: setRecoilValueLoadable$2
  } = Recoil_RecoilValueInterface;
  var {
    retainedByOptionWithDefault: retainedByOptionWithDefault$2
  } = Recoil_Retention;
  var unwrap = (x) => x instanceof WrappedValue$2 ? x.value : x;
  function baseAtom(options) {
    const {
      key,
      persistence_UNSTABLE: persistence
    } = options;
    const retainedBy = retainedByOptionWithDefault$2(options.retainedBy_UNSTABLE);
    let liveStoresCount = 0;
    function unwrapPromise(promise) {
      return loadableWithPromise$2(promise.then((value) => {
        defaultLoadable = loadableWithValue$3(value);
        return value;
      }).catch((error) => {
        defaultLoadable = loadableWithError$2(error);
        throw error;
      }));
    }
    let defaultLoadable = Recoil_isPromise(options.default) ? unwrapPromise(options.default) : isLoadable$2(options.default) ? options.default.state === "loading" ? unwrapPromise(options.default.contents) : options.default : (
      // $FlowFixMe[incompatible-call]
      loadableWithValue$3(unwrap(options.default))
    );
    maybeFreezeValueOrPromise(defaultLoadable.contents);
    let cachedAnswerForUnvalidatedValue = void 0;
    const cleanupEffectsByStore = /* @__PURE__ */ new Map();
    function maybeFreezeValueOrPromise(valueOrPromise) {
      if (false) {
        if (options.dangerouslyAllowMutability !== true) {
          if (Recoil_isPromise(valueOrPromise)) {
            return valueOrPromise.then((value) => {
              Recoil_deepFreezeValue(value);
              return value;
            });
          } else {
            Recoil_deepFreezeValue(valueOrPromise);
            return valueOrPromise;
          }
        }
      }
      return valueOrPromise;
    }
    function wrapPendingPromise(store, promise) {
      const wrappedPromise = promise.then((value) => {
        var _store$getState$nextT, _state$atomValues$get;
        const state = (_store$getState$nextT = store.getState().nextTree) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree;
        if (((_state$atomValues$get = state.atomValues.get(key)) === null || _state$atomValues$get === void 0 ? void 0 : _state$atomValues$get.contents) === wrappedPromise) {
          setRecoilValue$4(store, node, value);
        }
        return value;
      }).catch((error) => {
        var _store$getState$nextT2, _state$atomValues$get2;
        const state = (_store$getState$nextT2 = store.getState().nextTree) !== null && _store$getState$nextT2 !== void 0 ? _store$getState$nextT2 : store.getState().currentTree;
        if (((_state$atomValues$get2 = state.atomValues.get(key)) === null || _state$atomValues$get2 === void 0 ? void 0 : _state$atomValues$get2.contents) === wrappedPromise) {
          setRecoilValueLoadable$2(store, node, loadableWithError$2(error));
        }
        throw error;
      });
      return wrappedPromise;
    }
    function initAtom(store, initState, trigger) {
      var _options$effects;
      liveStoresCount++;
      const cleanupAtom = () => {
        var _cleanupEffectsByStor;
        liveStoresCount--;
        (_cleanupEffectsByStor = cleanupEffectsByStore.get(store)) === null || _cleanupEffectsByStor === void 0 ? void 0 : _cleanupEffectsByStor.forEach((cleanup) => cleanup());
        cleanupEffectsByStore.delete(store);
      };
      store.getState().knownAtoms.add(key);
      if (defaultLoadable.state === "loading") {
        const notifyDefaultSubscribers = () => {
          var _store$getState$nextT3;
          const state = (_store$getState$nextT3 = store.getState().nextTree) !== null && _store$getState$nextT3 !== void 0 ? _store$getState$nextT3 : store.getState().currentTree;
          if (!state.atomValues.has(key)) {
            markRecoilValueModified$2(store, node);
          }
        };
        defaultLoadable.contents.finally(notifyDefaultSubscribers);
      }
      const effects = (_options$effects = options.effects) !== null && _options$effects !== void 0 ? _options$effects : options.effects_UNSTABLE;
      if (effects != null) {
        let getLoadable = function(recoilValue) {
          if (isDuringInit && recoilValue.key === key) {
            const retValue = initValue;
            return retValue instanceof DefaultValue$2 ? peekAtom(store, initState) : Recoil_isPromise(retValue) ? loadableWithPromise$2(retValue.then((v2) => v2 instanceof DefaultValue$2 ? (
              // Cast T to S
              defaultLoadable.toPromise()
            ) : v2)) : (
              // $FlowFixMe[incompatible-call]
              loadableWithValue$3(retValue)
            );
          }
          return getRecoilValueAsLoadable$4(store, recoilValue);
        }, getPromise = function(recoilValue) {
          return getLoadable(recoilValue).toPromise();
        }, getInfo_UNSTABLE = function(recoilValue) {
          var _store$getState$nextT4;
          const info = peekNodeInfo$3(store, (_store$getState$nextT4 = store.getState().nextTree) !== null && _store$getState$nextT4 !== void 0 ? _store$getState$nextT4 : store.getState().currentTree, recoilValue.key);
          return isDuringInit && recoilValue.key === key && !(initValue instanceof DefaultValue$2) ? {
            ...info,
            isSet: true,
            loadable: getLoadable(recoilValue)
          } : info;
        };
        let initValue = DEFAULT_VALUE$7;
        let isDuringInit = true;
        let isInitError = false;
        let pendingSetSelf = null;
        const setSelf = (effect) => (valueOrUpdater) => {
          if (isDuringInit) {
            const currentLoadable = getLoadable(node);
            const currentValue = currentLoadable.state === "hasValue" ? currentLoadable.contents : DEFAULT_VALUE$7;
            initValue = typeof valueOrUpdater === "function" ? (
              // cast to any because we can't restrict T from being a function without losing support for opaque types
              valueOrUpdater(currentValue)
            ) : valueOrUpdater;
            if (Recoil_isPromise(initValue)) {
              initValue = initValue.then((value) => {
                pendingSetSelf = {
                  effect,
                  value
                };
                return value;
              });
            }
          } else {
            if (Recoil_isPromise(valueOrUpdater)) {
              throw Recoil_err("Setting atoms to async values is not implemented.");
            }
            if (typeof valueOrUpdater !== "function") {
              pendingSetSelf = {
                effect,
                value: unwrap(valueOrUpdater)
              };
            }
            setRecoilValue$4(store, node, typeof valueOrUpdater === "function" ? (currentValue) => {
              const newValue = unwrap(
                // cast to any because we can't restrict T from being a function without losing support for opaque types
                valueOrUpdater(currentValue)
                // flowlint-line unclear-type:off
              );
              pendingSetSelf = {
                effect,
                value: newValue
              };
              return newValue;
            } : unwrap(valueOrUpdater));
          }
        };
        const resetSelf = (effect) => () => setSelf(effect)(DEFAULT_VALUE$7);
        const onSet = (effect) => (handler) => {
          var _cleanupEffectsByStor2;
          const {
            release
          } = store.subscribeToTransactions((currentStore) => {
            var _currentTree$atomValu;
            let {
              currentTree,
              previousTree
            } = currentStore.getState();
            if (!previousTree) {
              Recoil_recoverableViolation("Transaction subscribers notified without a next tree being present -- this is a bug in Recoil");
              previousTree = currentTree;
            }
            const newLoadable = (_currentTree$atomValu = currentTree.atomValues.get(key)) !== null && _currentTree$atomValu !== void 0 ? _currentTree$atomValu : defaultLoadable;
            if (newLoadable.state === "hasValue") {
              var _previousTree$atomVal, _pendingSetSelf, _pendingSetSelf2, _pendingSetSelf3;
              const newValue = newLoadable.contents;
              const oldLoadable = (_previousTree$atomVal = previousTree.atomValues.get(key)) !== null && _previousTree$atomVal !== void 0 ? _previousTree$atomVal : defaultLoadable;
              const oldValue = oldLoadable.state === "hasValue" ? oldLoadable.contents : DEFAULT_VALUE$7;
              if (((_pendingSetSelf = pendingSetSelf) === null || _pendingSetSelf === void 0 ? void 0 : _pendingSetSelf.effect) !== effect || ((_pendingSetSelf2 = pendingSetSelf) === null || _pendingSetSelf2 === void 0 ? void 0 : _pendingSetSelf2.value) !== newValue) {
                handler(newValue, oldValue, !currentTree.atomValues.has(key));
              } else if (((_pendingSetSelf3 = pendingSetSelf) === null || _pendingSetSelf3 === void 0 ? void 0 : _pendingSetSelf3.effect) === effect) {
                pendingSetSelf = null;
              }
            }
          }, key);
          cleanupEffectsByStore.set(store, [...(_cleanupEffectsByStor2 = cleanupEffectsByStore.get(store)) !== null && _cleanupEffectsByStor2 !== void 0 ? _cleanupEffectsByStor2 : [], release]);
        };
        for (const effect of effects) {
          try {
            const cleanup = effect({
              node,
              storeID: store.storeID,
              parentStoreID_UNSTABLE: store.parentStoreID,
              trigger,
              setSelf: setSelf(effect),
              resetSelf: resetSelf(effect),
              onSet: onSet(effect),
              getPromise,
              getLoadable,
              getInfo_UNSTABLE
            });
            if (cleanup != null) {
              var _cleanupEffectsByStor3;
              cleanupEffectsByStore.set(store, [...(_cleanupEffectsByStor3 = cleanupEffectsByStore.get(store)) !== null && _cleanupEffectsByStor3 !== void 0 ? _cleanupEffectsByStor3 : [], cleanup]);
            }
          } catch (error) {
            initValue = error;
            isInitError = true;
          }
        }
        isDuringInit = false;
        if (!(initValue instanceof DefaultValue$2)) {
          var _store$getState$nextT5;
          const initLoadable = isInitError ? loadableWithError$2(initValue) : Recoil_isPromise(initValue) ? loadableWithPromise$2(wrapPendingPromise(store, initValue)) : loadableWithValue$3(unwrap(initValue));
          maybeFreezeValueOrPromise(initLoadable.contents);
          initState.atomValues.set(key, initLoadable);
          (_store$getState$nextT5 = store.getState().nextTree) === null || _store$getState$nextT5 === void 0 ? void 0 : _store$getState$nextT5.atomValues.set(key, initLoadable);
        }
      }
      return cleanupAtom;
    }
    function peekAtom(_store, state) {
      var _ref, _state$atomValues$get3;
      return (_ref = (_state$atomValues$get3 = state.atomValues.get(key)) !== null && _state$atomValues$get3 !== void 0 ? _state$atomValues$get3 : cachedAnswerForUnvalidatedValue) !== null && _ref !== void 0 ? _ref : defaultLoadable;
    }
    function getAtom(_store, state) {
      if (state.atomValues.has(key)) {
        return Recoil_nullthrows(state.atomValues.get(key));
      } else if (state.nonvalidatedAtoms.has(key)) {
        if (cachedAnswerForUnvalidatedValue != null) {
          return cachedAnswerForUnvalidatedValue;
        }
        if (persistence == null) {
          Recoil_expectationViolation(`Tried to restore a persisted value for atom ${key} but it has no persistence settings.`);
          return defaultLoadable;
        }
        const nonvalidatedValue = state.nonvalidatedAtoms.get(key);
        const validatorResult = persistence.validator(nonvalidatedValue, DEFAULT_VALUE$7);
        const validatedValueLoadable = validatorResult instanceof DefaultValue$2 ? defaultLoadable : loadableWithValue$3(validatorResult);
        cachedAnswerForUnvalidatedValue = validatedValueLoadable;
        return cachedAnswerForUnvalidatedValue;
      } else {
        return defaultLoadable;
      }
    }
    function invalidateAtom() {
      cachedAnswerForUnvalidatedValue = void 0;
    }
    function setAtom(_store, state, newValue) {
      if (state.atomValues.has(key)) {
        const existing = Recoil_nullthrows(state.atomValues.get(key));
        if (existing.state === "hasValue" && newValue === existing.contents) {
          return /* @__PURE__ */ new Map();
        }
      } else if (!state.nonvalidatedAtoms.has(key) && newValue instanceof DefaultValue$2) {
        return /* @__PURE__ */ new Map();
      }
      maybeFreezeValueOrPromise(newValue);
      cachedAnswerForUnvalidatedValue = void 0;
      return (/* @__PURE__ */ new Map()).set(key, loadableWithValue$3(newValue));
    }
    function shouldDeleteConfigOnReleaseAtom() {
      return getConfigDeletionHandler$2(key) !== void 0 && liveStoresCount <= 0;
    }
    const node = registerNode$2({
      key,
      nodeType: "atom",
      peek: peekAtom,
      get: getAtom,
      set: setAtom,
      init: initAtom,
      invalidate: invalidateAtom,
      shouldDeleteConfigOnRelease: shouldDeleteConfigOnReleaseAtom,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      persistence_UNSTABLE: options.persistence_UNSTABLE ? {
        type: options.persistence_UNSTABLE.type,
        backButton: options.persistence_UNSTABLE.backButton
      } : void 0,
      shouldRestoreFromSnapshots: true,
      retainedBy
    });
    return node;
  }
  function atom(options) {
    if (false) {
      if (typeof options.key !== "string") {
        throw Recoil_err("A key option with a unique string value must be provided when creating an atom.");
      }
    }
    const {
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
      ...restOptions
    } = options;
    const optionsDefault = "default" in options ? (
      // $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
      options.default
    ) : new Promise(() => {
    });
    if (isRecoilValue$4(optionsDefault)) {
      return atomWithFallback({
        ...restOptions,
        default: optionsDefault
        // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
      });
    } else {
      return baseAtom({
        ...restOptions,
        default: optionsDefault
      });
    }
  }
  function atomWithFallback(options) {
    const base = atom({
      ...options,
      default: DEFAULT_VALUE$7,
      persistence_UNSTABLE: options.persistence_UNSTABLE === void 0 ? void 0 : {
        ...options.persistence_UNSTABLE,
        validator: (storedValue) => storedValue instanceof DefaultValue$2 ? storedValue : Recoil_nullthrows(options.persistence_UNSTABLE).validator(storedValue, DEFAULT_VALUE$7)
      },
      // TODO Hack for now.
      effects: options.effects,
      // flowlint-line unclear-type: off
      effects_UNSTABLE: options.effects_UNSTABLE
      // flowlint-line unclear-type: off
    });
    const sel = Recoil_selector({
      key: `${options.key}__withFallback`,
      get: ({
        get
      }) => {
        const baseValue = get(base);
        return baseValue instanceof DefaultValue$2 ? options.default : baseValue;
      },
      // $FlowFixMe[incompatible-call]
      set: ({
        set
      }, newValue) => set(base, newValue),
      // This selector does not need to cache as it is a wrapper selector
      // and the selector within the wrapper selector will have a cache
      // option by default
      cachePolicy_UNSTABLE: {
        eviction: "most-recent"
      },
      dangerouslyAllowMutability: options.dangerouslyAllowMutability
    });
    setConfigDeletionHandler$1(sel.key, getConfigDeletionHandler$2(options.key));
    return sel;
  }
  atom.value = (value) => new WrappedValue$2(value);
  var Recoil_atom = atom;
  var MapCache = class {
    constructor(options) {
      var _options$mapKey;
      _defineProperty(this, "_map", void 0);
      _defineProperty(this, "_keyMapper", void 0);
      this._map = /* @__PURE__ */ new Map();
      this._keyMapper = (_options$mapKey = options === null || options === void 0 ? void 0 : options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : (v2) => v2;
    }
    size() {
      return this._map.size;
    }
    has(key) {
      return this._map.has(this._keyMapper(key));
    }
    get(key) {
      return this._map.get(this._keyMapper(key));
    }
    set(key, val) {
      this._map.set(this._keyMapper(key), val);
    }
    delete(key) {
      this._map.delete(this._keyMapper(key));
    }
    clear() {
      this._map.clear();
    }
  };
  var Recoil_MapCache = {
    MapCache
  };
  var Recoil_MapCache_1 = Recoil_MapCache.MapCache;
  var Recoil_MapCache$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    MapCache: Recoil_MapCache_1
  });
  var {
    LRUCache: LRUCache$2
  } = Recoil_LRUCache$1;
  var {
    MapCache: MapCache$1
  } = Recoil_MapCache$1;
  var defaultPolicy$1 = {
    equality: "reference",
    eviction: "none",
    maxSize: Infinity
  };
  function cacheFromPolicy({
    equality = defaultPolicy$1.equality,
    eviction = defaultPolicy$1.eviction,
    maxSize = defaultPolicy$1.maxSize
  } = defaultPolicy$1) {
    const valueMapper = getValueMapper$1(equality);
    const cache = getCache(eviction, maxSize, valueMapper);
    return cache;
  }
  function getValueMapper$1(equality) {
    switch (equality) {
      case "reference":
        return (val) => val;
      case "value":
        return (val) => Recoil_stableStringify(val);
    }
    throw Recoil_err(`Unrecognized equality policy ${equality}`);
  }
  function getCache(eviction, maxSize, mapKey) {
    switch (eviction) {
      case "keep-all":
        return new MapCache$1({
          mapKey
        });
      case "lru":
        return new LRUCache$2({
          mapKey,
          maxSize: Recoil_nullthrows(maxSize)
        });
      case "most-recent":
        return new LRUCache$2({
          mapKey,
          maxSize: 1
        });
    }
    throw Recoil_err(`Unrecognized eviction policy ${eviction}`);
  }
  var Recoil_cacheFromPolicy = cacheFromPolicy;
  var {
    setConfigDeletionHandler: setConfigDeletionHandler$2
  } = Recoil_Node;
  function atomFamily(options) {
    var _options$cachePolicyF, _options$cachePolicyF2;
    const atomCache = Recoil_cacheFromPolicy({
      equality: (_options$cachePolicyF = (_options$cachePolicyF2 = options.cachePolicyForParams_UNSTABLE) === null || _options$cachePolicyF2 === void 0 ? void 0 : _options$cachePolicyF2.equality) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : "value",
      eviction: "keep-all"
    });
    return (params2) => {
      var _stableStringify, _options$effects;
      const cachedAtom = atomCache.get(params2);
      if (cachedAtom != null) {
        return cachedAtom;
      }
      const {
        cachePolicyForParams_UNSTABLE,
        ...atomOptions
      } = options;
      const optionsDefault = "default" in options ? (
        // $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
        options.default
      ) : new Promise(() => {
      });
      const newAtom = Recoil_atom({
        ...atomOptions,
        key: `${options.key}__${(_stableStringify = Recoil_stableStringify(params2)) !== null && _stableStringify !== void 0 ? _stableStringify : "void"}`,
        default: typeof optionsDefault === "function" ? (
          // The default was parameterized
          // Flow doesn't know that T isn't a function, so we need to case to any
          // $FlowIssue[incompatible-use]
          optionsDefault(params2)
        ) : (
          // Default may be a static value, promise, or RecoilValue
          optionsDefault
        ),
        retainedBy_UNSTABLE: typeof options.retainedBy_UNSTABLE === "function" ? options.retainedBy_UNSTABLE(params2) : options.retainedBy_UNSTABLE,
        effects: typeof options.effects === "function" ? options.effects(params2) : typeof options.effects_UNSTABLE === "function" ? options.effects_UNSTABLE(params2) : (_options$effects = options.effects) !== null && _options$effects !== void 0 ? _options$effects : options.effects_UNSTABLE
        // prettier-ignore
        // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS: mapScopeRules(
        // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
        // @fb-only: params,
        // @fb-only: ),
      });
      atomCache.set(params2, newAtom);
      setConfigDeletionHandler$2(newAtom.key, () => {
        atomCache.delete(params2);
      });
      return newAtom;
    };
  }
  var Recoil_atomFamily = atomFamily;
  var {
    setConfigDeletionHandler: setConfigDeletionHandler$3
  } = Recoil_Node;
  var nextIndex = 0;
  function selectorFamily(options) {
    var _options$cachePolicyF, _options$cachePolicyF2;
    const selectorCache = Recoil_cacheFromPolicy({
      equality: (_options$cachePolicyF = (_options$cachePolicyF2 = options.cachePolicyForParams_UNSTABLE) === null || _options$cachePolicyF2 === void 0 ? void 0 : _options$cachePolicyF2.equality) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : "value",
      eviction: "keep-all"
    });
    return (params2) => {
      var _stableStringify;
      let cachedSelector;
      try {
        cachedSelector = selectorCache.get(params2);
      } catch (error) {
        throw Recoil_err(`Problem with cache lookup for selector ${options.key}: ${error.message}`);
      }
      if (cachedSelector != null) {
        return cachedSelector;
      }
      const myKey = `${options.key}__selectorFamily/${(_stableStringify = Recoil_stableStringify(params2, {
        // It is possible to use functions in parameters if the user uses
        // a cache with reference equality thanks to the incrementing index.
        allowFunctions: true
      })) !== null && _stableStringify !== void 0 ? _stableStringify : "void"}/${nextIndex++}`;
      const myGet = (callbacks) => options.get(params2)(callbacks);
      const myCachePolicy = options.cachePolicy_UNSTABLE;
      const retainedBy = typeof options.retainedBy_UNSTABLE === "function" ? options.retainedBy_UNSTABLE(params2) : options.retainedBy_UNSTABLE;
      let newSelector;
      if (options.set != null) {
        const set = options.set;
        const mySet = (callbacks, newValue) => set(params2)(callbacks, newValue);
        newSelector = Recoil_selector({
          key: myKey,
          get: myGet,
          set: mySet,
          cachePolicy_UNSTABLE: myCachePolicy,
          dangerouslyAllowMutability: options.dangerouslyAllowMutability,
          retainedBy_UNSTABLE: retainedBy
        });
      } else {
        newSelector = Recoil_selector({
          key: myKey,
          get: myGet,
          cachePolicy_UNSTABLE: myCachePolicy,
          dangerouslyAllowMutability: options.dangerouslyAllowMutability,
          retainedBy_UNSTABLE: retainedBy
        });
      }
      selectorCache.set(params2, newSelector);
      setConfigDeletionHandler$3(newSelector.key, () => {
        selectorCache.delete(params2);
      });
      return newSelector;
    };
  }
  var Recoil_selectorFamily = selectorFamily;
  var constantSelector = Recoil_selectorFamily({
    key: "__constant",
    get: (constant) => () => constant,
    cachePolicyForParams_UNSTABLE: {
      equality: "reference"
    }
  });
  function constSelector(constant) {
    return constantSelector(constant);
  }
  var Recoil_constSelector = constSelector;
  var throwingSelector = Recoil_selectorFamily({
    key: "__error",
    get: (message) => () => {
      throw Recoil_err(message);
    },
    // TODO Why?
    cachePolicyForParams_UNSTABLE: {
      equality: "reference"
    }
  });
  function errorSelector(message) {
    return throwingSelector(message);
  }
  var Recoil_errorSelector = errorSelector;
  function readOnlySelector(atom2) {
    return atom2;
  }
  var Recoil_readOnlySelector = readOnlySelector;
  var {
    loadableWithError: loadableWithError$3,
    loadableWithPromise: loadableWithPromise$3,
    loadableWithValue: loadableWithValue$4
  } = Recoil_Loadable$1;
  function concurrentRequests(getRecoilValue, deps) {
    const results = Array(deps.length).fill(void 0);
    const exceptions = Array(deps.length).fill(void 0);
    for (const [i, dep] of deps.entries()) {
      try {
        results[i] = getRecoilValue(dep);
      } catch (e) {
        exceptions[i] = e;
      }
    }
    return [results, exceptions];
  }
  function isError(exp) {
    return exp != null && !Recoil_isPromise(exp);
  }
  function unwrapDependencies(dependencies) {
    return Array.isArray(dependencies) ? dependencies : Object.getOwnPropertyNames(dependencies).map((key) => dependencies[key]);
  }
  function wrapResults(dependencies, results) {
    return Array.isArray(dependencies) ? results : (
      // Object.getOwnPropertyNames() has consistent key ordering with ES6
      Object.getOwnPropertyNames(dependencies).reduce((out, key, idx) => ({
        ...out,
        [key]: results[idx]
      }), {})
    );
  }
  function wrapLoadables(dependencies, results, exceptions) {
    const output = exceptions.map((exception, idx) => exception == null ? loadableWithValue$4(results[idx]) : Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception));
    return wrapResults(dependencies, output);
  }
  function combineAsyncResultsWithSyncResults(syncResults, asyncResults) {
    return asyncResults.map((result, idx) => (
      /**
       * it's important we use === undefined as opposed to == null, because the
       * resolved value of the async promise could be `null`, in which case we
       * don't want to use syncResults[idx], which would be undefined. If async
       * promise resolves to `undefined`, that's ok because `syncResults[idx]`
       * will also be `undefined`. That's a little hacky, but it works.
       */
      result === void 0 ? syncResults[idx] : result
    ));
  }
  var waitForNone = Recoil_selectorFamily({
    key: "__waitForNone",
    get: (dependencies) => ({
      get
    }) => {
      const deps = unwrapDependencies(dependencies);
      const [results, exceptions] = concurrentRequests(get, deps);
      return wrapLoadables(dependencies, results, exceptions);
    },
    dangerouslyAllowMutability: true
  });
  var waitForAny = Recoil_selectorFamily({
    key: "__waitForAny",
    get: (dependencies) => ({
      get
    }) => {
      const deps = unwrapDependencies(dependencies);
      const [results, exceptions] = concurrentRequests(get, deps);
      if (exceptions.some((exp) => !Recoil_isPromise(exp))) {
        return wrapLoadables(dependencies, results, exceptions);
      }
      return new Promise((resolve) => {
        for (const [i, exp] of exceptions.entries()) {
          if (Recoil_isPromise(exp)) {
            exp.then((result) => {
              results[i] = result;
              exceptions[i] = void 0;
              resolve(wrapLoadables(dependencies, results, exceptions));
            }).catch((error) => {
              exceptions[i] = error;
              resolve(wrapLoadables(dependencies, results, exceptions));
            });
          }
        }
      });
    },
    dangerouslyAllowMutability: true
  });
  var waitForAll = Recoil_selectorFamily({
    key: "__waitForAll",
    get: (dependencies) => ({
      get
    }) => {
      const deps = unwrapDependencies(dependencies);
      const [results, exceptions] = concurrentRequests(get, deps);
      if (exceptions.every((exp) => exp == null)) {
        return wrapResults(dependencies, results);
      }
      const error = exceptions.find(isError);
      if (error != null) {
        throw error;
      }
      return Promise.all(exceptions).then((exceptionResults) => wrapResults(dependencies, combineAsyncResultsWithSyncResults(results, exceptionResults)));
    },
    dangerouslyAllowMutability: true
  });
  var waitForAllSettled = Recoil_selectorFamily({
    key: "__waitForAllSettled",
    get: (dependencies) => ({
      get
    }) => {
      const deps = unwrapDependencies(dependencies);
      const [results, exceptions] = concurrentRequests(get, deps);
      if (exceptions.every((exp) => !Recoil_isPromise(exp))) {
        return wrapLoadables(dependencies, results, exceptions);
      }
      return Promise.all(exceptions.map((exp, i) => Recoil_isPromise(exp) ? exp.then((result) => {
        results[i] = result;
        exceptions[i] = void 0;
      }).catch((error) => {
        results[i] = void 0;
        exceptions[i] = error;
      }) : null)).then(() => wrapLoadables(dependencies, results, exceptions));
    },
    dangerouslyAllowMutability: true
  });
  var noWait = Recoil_selectorFamily({
    key: "__noWait",
    get: (dependency) => ({
      get
    }) => {
      try {
        return Recoil_selector.value(loadableWithValue$4(get(dependency)));
      } catch (exception) {
        return Recoil_selector.value(Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception));
      }
    },
    dangerouslyAllowMutability: true
  });
  var Recoil_WaitFor = {
    waitForNone,
    waitForAny,
    waitForAll,
    waitForAllSettled,
    noWait
  };
  var {
    RecoilLoadable
  } = Recoil_Loadable$1;
  var {
    DefaultValue: DefaultValue$3
  } = Recoil_Node;
  var {
    RecoilRoot: RecoilRoot$2,
    useRecoilStoreID: useRecoilStoreID$1
  } = Recoil_RecoilRoot;
  var {
    isRecoilValue: isRecoilValue$5
  } = Recoil_RecoilValue$1;
  var {
    retentionZone: retentionZone$1
  } = Recoil_RetentionZone;
  var {
    freshSnapshot: freshSnapshot$2
  } = Recoil_Snapshot$1;
  var {
    useRecoilState: useRecoilState$1,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: useRecoilState_TRANSITION_SUPPORT_UNSTABLE$1,
    useRecoilStateLoadable: useRecoilStateLoadable$1,
    useRecoilValue: useRecoilValue$1,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: useRecoilValue_TRANSITION_SUPPORT_UNSTABLE$1,
    useRecoilValueLoadable: useRecoilValueLoadable$1,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE$1,
    useResetRecoilState: useResetRecoilState$1,
    useSetRecoilState: useSetRecoilState$1
  } = Recoil_Hooks;
  var {
    useGotoRecoilSnapshot: useGotoRecoilSnapshot$1,
    useRecoilSnapshot: useRecoilSnapshot$1,
    useRecoilTransactionObserver: useRecoilTransactionObserver$1
  } = Recoil_SnapshotHooks;
  var {
    useRecoilCallback: useRecoilCallback$1
  } = Recoil_useRecoilCallback;
  var {
    noWait: noWait$1,
    waitForAll: waitForAll$1,
    waitForAllSettled: waitForAllSettled$1,
    waitForAny: waitForAny$1,
    waitForNone: waitForNone$1
  } = Recoil_WaitFor;
  var Recoil_index = {
    // Types
    DefaultValue: DefaultValue$3,
    isRecoilValue: isRecoilValue$5,
    RecoilLoadable,
    // Global Recoil environment settiongs
    RecoilEnv: Recoil_RecoilEnv,
    // Recoil Root
    RecoilRoot: RecoilRoot$2,
    useRecoilStoreID: useRecoilStoreID$1,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: Recoil_useRecoilBridgeAcrossReactRoots,
    // Atoms/Selectors
    atom: Recoil_atom,
    selector: Recoil_selector,
    // Convenience Atoms/Selectors
    atomFamily: Recoil_atomFamily,
    selectorFamily: Recoil_selectorFamily,
    constSelector: Recoil_constSelector,
    errorSelector: Recoil_errorSelector,
    readOnlySelector: Recoil_readOnlySelector,
    // Concurrency Helpers for Atoms/Selectors
    noWait: noWait$1,
    waitForNone: waitForNone$1,
    waitForAny: waitForAny$1,
    waitForAll: waitForAll$1,
    waitForAllSettled: waitForAllSettled$1,
    // Hooks for Atoms/Selectors
    useRecoilValue: useRecoilValue$1,
    useRecoilValueLoadable: useRecoilValueLoadable$1,
    useRecoilState: useRecoilState$1,
    useRecoilStateLoadable: useRecoilStateLoadable$1,
    useSetRecoilState: useSetRecoilState$1,
    useResetRecoilState: useResetRecoilState$1,
    useGetRecoilValueInfo_UNSTABLE: Recoil_useGetRecoilValueInfo,
    useRecoilRefresher_UNSTABLE: Recoil_useRecoilRefresher,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE$1,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: useRecoilValue_TRANSITION_SUPPORT_UNSTABLE$1,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: useRecoilState_TRANSITION_SUPPORT_UNSTABLE$1,
    // Hooks for complex operations
    useRecoilCallback: useRecoilCallback$1,
    useRecoilTransaction_UNSTABLE: Recoil_useRecoilTransaction,
    // Snapshots
    useGotoRecoilSnapshot: useGotoRecoilSnapshot$1,
    useRecoilSnapshot: useRecoilSnapshot$1,
    useRecoilTransactionObserver_UNSTABLE: useRecoilTransactionObserver$1,
    snapshot_UNSTABLE: freshSnapshot$2,
    // Memory Management
    useRetain: Recoil_useRetain,
    retentionZone: retentionZone$1
  };
  var Recoil_index_1 = Recoil_index.DefaultValue;
  var Recoil_index_2 = Recoil_index.isRecoilValue;
  var Recoil_index_3 = Recoil_index.RecoilLoadable;
  var Recoil_index_4 = Recoil_index.RecoilEnv;
  var Recoil_index_5 = Recoil_index.RecoilRoot;
  var Recoil_index_6 = Recoil_index.useRecoilStoreID;
  var Recoil_index_7 = Recoil_index.useRecoilBridgeAcrossReactRoots_UNSTABLE;
  var Recoil_index_8 = Recoil_index.atom;
  var Recoil_index_9 = Recoil_index.selector;
  var Recoil_index_10 = Recoil_index.atomFamily;
  var Recoil_index_11 = Recoil_index.selectorFamily;
  var Recoil_index_12 = Recoil_index.constSelector;
  var Recoil_index_13 = Recoil_index.errorSelector;
  var Recoil_index_14 = Recoil_index.readOnlySelector;
  var Recoil_index_15 = Recoil_index.noWait;
  var Recoil_index_16 = Recoil_index.waitForNone;
  var Recoil_index_17 = Recoil_index.waitForAny;
  var Recoil_index_18 = Recoil_index.waitForAll;
  var Recoil_index_19 = Recoil_index.waitForAllSettled;
  var Recoil_index_20 = Recoil_index.useRecoilValue;
  var Recoil_index_21 = Recoil_index.useRecoilValueLoadable;
  var Recoil_index_22 = Recoil_index.useRecoilState;
  var Recoil_index_23 = Recoil_index.useRecoilStateLoadable;
  var Recoil_index_24 = Recoil_index.useSetRecoilState;
  var Recoil_index_25 = Recoil_index.useResetRecoilState;
  var Recoil_index_26 = Recoil_index.useGetRecoilValueInfo_UNSTABLE;
  var Recoil_index_27 = Recoil_index.useRecoilRefresher_UNSTABLE;
  var Recoil_index_28 = Recoil_index.useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE;
  var Recoil_index_29 = Recoil_index.useRecoilValue_TRANSITION_SUPPORT_UNSTABLE;
  var Recoil_index_30 = Recoil_index.useRecoilState_TRANSITION_SUPPORT_UNSTABLE;
  var Recoil_index_31 = Recoil_index.useRecoilCallback;
  var Recoil_index_32 = Recoil_index.useRecoilTransaction_UNSTABLE;
  var Recoil_index_33 = Recoil_index.useGotoRecoilSnapshot;
  var Recoil_index_34 = Recoil_index.useRecoilSnapshot;
  var Recoil_index_35 = Recoil_index.useRecoilTransactionObserver_UNSTABLE;
  var Recoil_index_36 = Recoil_index.snapshot_UNSTABLE;
  var Recoil_index_37 = Recoil_index.useRetain;
  var Recoil_index_38 = Recoil_index.retentionZone;

  // src/components/Mobile/MobileNavigator.tsx
  var import_react14 = __toESM(require_react());

  // tests/mobile-browser/obsidian.ts
  var TAbstractFile = class {
    constructor() {
      this.path = "";
      this.name = "";
      this.parent = null;
    }
  };
  var TFolder = class extends TAbstractFile {
    constructor() {
      super(...arguments);
      this.children = [];
    }
    isRoot() {
      return !this.parent;
    }
  };
  var TFile = class extends TAbstractFile {
    constructor() {
      super(...arguments);
      this.basename = "";
      this.extension = "md";
      this.stat = { ctime: 1, mtime: 1, size: 10 };
    }
  };
  var Platform = { isMobile: true, isTablet: true, isPhone: false, isIosApp: true };
  var Notice = class {
    constructor(message) {
      window.notices.push(String(message));
    }
  };
  var Component = class {
    load() {
    }
    unload() {
    }
  };
  var Modal = class {
    constructor(app3) {
      this.contentEl = document.createElement("div");
      this.titleEl = document.createElement("div");
      this.app = app3;
    }
    open() {
      window.modals.push(this.constructor.name);
    }
    close() {
    }
  };
  var FuzzySuggestModal = class extends Modal {
  };
  var Menu = class {
    constructor() {
      this.items = [];
    }
    addItem(fn) {
      const item = { setTitle(t) {
        this.title = t;
        return this;
      }, setIcon() {
        return this;
      }, setDisabled(d) {
        this.disabled = d;
        return this;
      }, setChecked() {
        return this;
      }, onClick(fn2) {
        this.run = fn2;
        return this;
      } };
      fn(item);
      this.items.push(item);
      return this;
    }
    addSeparator() {
      return this;
    }
    showAtPosition(position) {
      window.lastMenu = this.items;
      window.menuPosition = position;
    }
  };
  var MarkdownRenderer = { render: async () => {
  } };
  var requestUrl = async () => {
    throw new Error("Network disabled in fixture");
  };

  // src/recoil/pluginState.ts
  var view = Recoil_index_8({
    key: "fileTreeViewState",
    default: "folder"
  });
  var activeFolderPath = Recoil_index_8({
    key: "fileTreeActiveFolderPathState",
    default: ""
  });
  var activeOZFile = Recoil_index_8({
    key: "fileTreeActiveOZFile",
    default: null
  });
  var excludedFolders = Recoil_index_8({
    key: "fileTreeExcludedFoldersState",
    default: []
  });
  var excludedExtensions = Recoil_index_8({
    key: "fileTreeExcludedExtensions",
    default: []
  });
  var folderFileCountMap = Recoil_index_8({
    key: "fileTreeFolderFileCountMapState",
    default: {}
  });
  var folderTree = Recoil_index_8({
    key: "fileTreeFolderTreeState",
    default: null,
    dangerouslyAllowMutability: true
  });
  var ozFileList = Recoil_index_8({
    key: "fileTreeOzFileListState",
    default: []
  });
  var ozPinnedFileList = Recoil_index_8({
    key: "fileTreeOzPinnedFilesState",
    default: []
  });
  var openFolders = Recoil_index_8({
    key: "fileTreeOpenFoldersState",
    default: []
  });
  var showSubFolders = Recoil_index_8({
    key: "showSubFoldersInVault",
    default: false
  });
  var focusedFolder = Recoil_index_8({
    key: "fileTreeFocusedFolder",
    default: null,
    dangerouslyAllowMutability: true
  });

  // src/components/Mobile/runtime.ts
  function menuPosition(event) {
    const e = event?.nativeEvent || event;
    const point = e?.touches?.[0] || e?.changedTouches?.[0] || e;
    return { x: Number.isFinite(point?.clientX) ? point.clientX : 24, y: Number.isFinite(point?.clientY) ? point.clientY : 64 };
  }
  async function trashWithFallback(app3, file2, system) {
    try {
      if (system && Platform.isMobile) new Notice("Using Obsidian .trash on this device.");
      await app3.vault.trash(file2, system && !Platform.isMobile);
    } catch (error) {
      new Notice(`Could not move to trash: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  var MobilePreview = class extends Modal {
    constructor(app3, file2) {
      super(app3);
      this.file = file2;
      this.renderer = new Component();
      this.modalEl.classList.add("ffm-modal");
    }
    async onOpen() {
      this.renderer.load();
      this.titleEl.setText(this.file.basename);
      if (this.file.extension !== "md") {
        new Notice("Preview supports Markdown. Use Open in a new tab for this file.");
        this.close();
        return;
      }
      try {
        await MarkdownRenderer.render(this.app, await this.app.vault.cachedRead(this.file), this.contentEl, this.file.path, this.renderer);
      } catch (error) {
        new Notice(`Preview unavailable: ${error instanceof Error ? error.message : String(error)}`);
        this.close();
      }
    }
    onClose() {
      this.renderer.unload();
      this.contentEl.empty();
    }
  };

  // src/components/Mobile/MobileFolder.tsx
  var import_react10 = __toESM(require_react());

  // src/components/Mobile/actions.ts
  var FOLDER_SELECTED = "ffm-folder-selected";
  var FOCUS_SEARCH = "ffm-focus-search";

  // src/components/Mobile/TreeComponent.tsx
  var import_react7 = __toESM(require_react());

  // node_modules/react-dropzone/dist/es/index.js
  var import_react2 = __toESM(require_react());
  var import_prop_types = __toESM(require_prop_types());

  // node_modules/tslib/tslib.es6.mjs
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f2, y2, t, g2 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g2.next = verb(0), g2["throw"] = verb(1), g2["return"] = verb(2), typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
      return this;
    }), g2;
    function verb(n) {
      return function(v2) {
        return step([n, v2]);
      };
    }
    function step(op) {
      if (f2) throw new TypeError("Generator is already executing.");
      while (g2 && (g2 = 0, op[0] && (_ = 0)), _) try {
        if (f2 = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done) return t;
        if (y2 = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y2 = 0;
      } finally {
        f2 = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __read(o, n) {
    var m2 = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m2) return o;
    var i = m2.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m2 = i["return"])) m2.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }

  // node_modules/file-selector/dist/es5/file.js
  var COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    ["aac", "audio/aac"],
    ["abw", "application/x-abiword"],
    ["arc", "application/x-freearc"],
    ["avif", "image/avif"],
    ["avi", "video/x-msvideo"],
    ["azw", "application/vnd.amazon.ebook"],
    ["bin", "application/octet-stream"],
    ["bmp", "image/bmp"],
    ["bz", "application/x-bzip"],
    ["bz2", "application/x-bzip2"],
    ["cda", "application/x-cdf"],
    ["csh", "application/x-csh"],
    ["css", "text/css"],
    ["csv", "text/csv"],
    ["doc", "application/msword"],
    ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
    ["eot", "application/vnd.ms-fontobject"],
    ["epub", "application/epub+zip"],
    ["gz", "application/gzip"],
    ["gif", "image/gif"],
    ["heic", "image/heic"],
    ["heif", "image/heif"],
    ["htm", "text/html"],
    ["html", "text/html"],
    ["ico", "image/vnd.microsoft.icon"],
    ["ics", "text/calendar"],
    ["jar", "application/java-archive"],
    ["jpeg", "image/jpeg"],
    ["jpg", "image/jpeg"],
    ["js", "text/javascript"],
    ["json", "application/json"],
    ["jsonld", "application/ld+json"],
    ["mid", "audio/midi"],
    ["midi", "audio/midi"],
    ["mjs", "text/javascript"],
    ["mp3", "audio/mpeg"],
    ["mp4", "video/mp4"],
    ["mpeg", "video/mpeg"],
    ["mpkg", "application/vnd.apple.installer+xml"],
    ["odp", "application/vnd.oasis.opendocument.presentation"],
    ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
    ["odt", "application/vnd.oasis.opendocument.text"],
    ["oga", "audio/ogg"],
    ["ogv", "video/ogg"],
    ["ogx", "application/ogg"],
    ["opus", "audio/opus"],
    ["otf", "font/otf"],
    ["png", "image/png"],
    ["pdf", "application/pdf"],
    ["php", "application/x-httpd-php"],
    ["ppt", "application/vnd.ms-powerpoint"],
    ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
    ["rar", "application/vnd.rar"],
    ["rtf", "application/rtf"],
    ["sh", "application/x-sh"],
    ["svg", "image/svg+xml"],
    ["swf", "application/x-shockwave-flash"],
    ["tar", "application/x-tar"],
    ["tif", "image/tiff"],
    ["tiff", "image/tiff"],
    ["ts", "video/mp2t"],
    ["ttf", "font/ttf"],
    ["txt", "text/plain"],
    ["vsd", "application/vnd.visio"],
    ["wav", "audio/wav"],
    ["weba", "audio/webm"],
    ["webm", "video/webm"],
    ["webp", "image/webp"],
    ["woff", "font/woff"],
    ["woff2", "font/woff2"],
    ["xhtml", "application/xhtml+xml"],
    ["xls", "application/vnd.ms-excel"],
    ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
    ["xml", "application/xml"],
    ["xul", "application/vnd.mozilla.xul+xml"],
    ["zip", "application/zip"],
    ["7z", "application/x-7z-compressed"],
    // Others
    ["mkv", "video/x-matroska"],
    ["mov", "video/quicktime"],
    ["msg", "application/vnd.ms-outlook"]
  ]);
  function toFileWithPath(file2, path) {
    var f2 = withMimeType(file2);
    if (typeof f2.path !== "string") {
      var webkitRelativePath = file2.webkitRelativePath;
      Object.defineProperty(f2, "path", {
        value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file2.name,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
    return f2;
  }
  function withMimeType(file2) {
    var name = file2.name;
    var hasExtension = name && name.lastIndexOf(".") !== -1;
    if (hasExtension && !file2.type) {
      var ext = name.split(".").pop().toLowerCase();
      var type = COMMON_MIME_TYPES.get(ext);
      if (type) {
        Object.defineProperty(file2, "type", {
          value: type,
          writable: false,
          configurable: false,
          enumerable: true
        });
      }
    }
    return file2;
  }

  // node_modules/file-selector/dist/es5/file-selector.js
  var FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    ".DS_Store",
    "Thumbs.db"
    // Windows
  ];
  function fromEvent(evt) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        if (isObject(evt) && isDataTransfer(evt.dataTransfer)) {
          return [2, getDataTransferFiles(evt.dataTransfer, evt.type)];
        } else if (isChangeEvt(evt)) {
          return [2, getInputFiles(evt)];
        } else if (Array.isArray(evt) && evt.every(function(item) {
          return "getFile" in item && typeof item.getFile === "function";
        })) {
          return [2, getFsHandleFiles(evt)];
        }
        return [2, []];
      });
    });
  }
  function isDataTransfer(value) {
    return isObject(value);
  }
  function isChangeEvt(value) {
    return isObject(value) && isObject(value.target);
  }
  function isObject(v2) {
    return typeof v2 === "object" && v2 !== null;
  }
  function getInputFiles(evt) {
    return fromList(evt.target.files).map(function(file2) {
      return toFileWithPath(file2);
    });
  }
  function getFsHandleFiles(handles) {
    return __awaiter(this, void 0, void 0, function() {
      var files;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, Promise.all(handles.map(function(h2) {
              return h2.getFile();
            }))];
          case 1:
            files = _a.sent();
            return [2, files.map(function(file2) {
              return toFileWithPath(file2);
            })];
        }
      });
    });
  }
  function getDataTransferFiles(dt, type) {
    return __awaiter(this, void 0, void 0, function() {
      var items, files;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!dt.items) return [3, 2];
            items = fromList(dt.items).filter(function(item) {
              return item.kind === "file";
            });
            if (type !== "drop") {
              return [2, items];
            }
            return [4, Promise.all(items.map(toFilePromises))];
          case 1:
            files = _a.sent();
            return [2, noIgnoredFiles(flatten(files))];
          case 2:
            return [2, noIgnoredFiles(fromList(dt.files).map(function(file2) {
              return toFileWithPath(file2);
            }))];
        }
      });
    });
  }
  function noIgnoredFiles(files) {
    return files.filter(function(file2) {
      return FILES_TO_IGNORE.indexOf(file2.name) === -1;
    });
  }
  function fromList(items) {
    if (items === null) {
      return [];
    }
    var files = [];
    for (var i = 0; i < items.length; i++) {
      var file2 = items[i];
      files.push(file2);
    }
    return files;
  }
  function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== "function") {
      return fromDataTransferItem(item);
    }
    var entry = item.webkitGetAsEntry();
    if (entry && entry.isDirectory) {
      return fromDirEntry(entry);
    }
    return fromDataTransferItem(item);
  }
  function flatten(items) {
    return items.reduce(function(acc, files) {
      return __spreadArray(__spreadArray([], __read(acc), false), __read(Array.isArray(files) ? flatten(files) : [files]), false);
    }, []);
  }
  function fromDataTransferItem(item) {
    var file2 = item.getAsFile();
    if (!file2) {
      return Promise.reject("".concat(item, " is not a File"));
    }
    var fwp = toFileWithPath(file2);
    return Promise.resolve(fwp);
  }
  function fromEntry(entry) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
      });
    });
  }
  function fromDirEntry(entry) {
    var reader = entry.createReader();
    return new Promise(function(resolve, reject) {
      var entries = [];
      function readEntries() {
        var _this = this;
        reader.readEntries(function(batch) {
          return __awaiter(_this, void 0, void 0, function() {
            var files, err_12, items;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!!batch.length) return [3, 5];
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 3, , 4]);
                  return [4, Promise.all(entries)];
                case 2:
                  files = _a.sent();
                  resolve(files);
                  return [3, 4];
                case 3:
                  err_12 = _a.sent();
                  reject(err_12);
                  return [3, 4];
                case 4:
                  return [3, 6];
                case 5:
                  items = Promise.all(batch.map(fromEntry));
                  entries.push(items);
                  readEntries();
                  _a.label = 6;
                case 6:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, function(err2) {
          reject(err2);
        });
      }
      readEntries();
    });
  }
  function fromFileEntry(entry) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, new Promise(function(resolve, reject) {
          entry.file(function(file2) {
            var fwp = toFileWithPath(file2, entry.fullPath);
            resolve(fwp);
          }, function(err2) {
            reject(err2);
          });
        })];
      });
    });
  }

  // node_modules/react-dropzone/dist/es/utils/index.js
  var import_attr_accept = __toESM(require_es());
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err2) {
      _d = true;
      _e = err2;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  var FILE_INVALID_TYPE = "file-invalid-type";
  var FILE_TOO_LARGE = "file-too-large";
  var FILE_TOO_SMALL = "file-too-small";
  var TOO_MANY_FILES = "too-many-files";
  var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr2(accept) {
    accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
    var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
    return {
      code: FILE_INVALID_TYPE,
      message: "File type must be ".concat(messageSuffix)
    };
  };
  var getTooLargeRejectionErr = function getTooLargeRejectionErr2(maxSize) {
    return {
      code: FILE_TOO_LARGE,
      message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
    };
  };
  var getTooSmallRejectionErr = function getTooSmallRejectionErr2(minSize) {
    return {
      code: FILE_TOO_SMALL,
      message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
    };
  };
  var TOO_MANY_FILES_REJECTION = {
    code: TOO_MANY_FILES,
    message: "Too many files"
  };
  function fileAccepted(file2, accept) {
    var isAcceptable = file2.type === "application/x-moz-file" || (0, import_attr_accept.default)(file2, accept);
    return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
  }
  function fileMatchSize(file2, minSize, maxSize) {
    if (isDefined(file2.size)) {
      if (isDefined(minSize) && isDefined(maxSize)) {
        if (file2.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
        if (file2.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
      } else if (isDefined(minSize) && file2.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
      else if (isDefined(maxSize) && file2.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
    }
    return [true, null];
  }
  function isDefined(value) {
    return value !== void 0 && value !== null;
  }
  function allFilesAccepted(_ref) {
    var files = _ref.files, accept = _ref.accept, minSize = _ref.minSize, maxSize = _ref.maxSize, multiple = _ref.multiple, maxFiles = _ref.maxFiles, validator = _ref.validator;
    if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
      return false;
    }
    return files.every(function(file2) {
      var _fileAccepted = fileAccepted(file2, accept), _fileAccepted2 = _slicedToArray(_fileAccepted, 1), accepted = _fileAccepted2[0];
      var _fileMatchSize = fileMatchSize(file2, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
      var customErrors = validator ? validator(file2) : null;
      return accepted && sizeMatch && !customErrors;
    });
  }
  function isPropagationStopped(event) {
    if (typeof event.isPropagationStopped === "function") {
      return event.isPropagationStopped();
    } else if (typeof event.cancelBubble !== "undefined") {
      return event.cancelBubble;
    }
    return false;
  }
  function isEvtWithFiles(event) {
    if (!event.dataTransfer) {
      return !!event.target && !!event.target.files;
    }
    return Array.prototype.some.call(event.dataTransfer.types, function(type) {
      return type === "Files" || type === "application/x-moz-file";
    });
  }
  function onDocumentDragOver(event) {
    event.preventDefault();
  }
  function isIe(userAgent) {
    return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
  }
  function isEdge(userAgent) {
    return userAgent.indexOf("Edge/") !== -1;
  }
  function isIeOrEdge() {
    var userAgent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
    return isIe(userAgent) || isEdge(userAgent);
  }
  function composeEventHandlers() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }
    return function(event) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return fns.some(function(fn) {
        if (!isPropagationStopped(event) && fn) {
          fn.apply(void 0, [event].concat(args));
        }
        return isPropagationStopped(event);
      });
    };
  }
  function canUseFileSystemAccessAPI() {
    return "showOpenFilePicker" in window;
  }
  function pickerOptionsFromAccept(accept) {
    if (isDefined(accept)) {
      var acceptForPicker = Object.entries(accept).filter(function(_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2), mimeType = _ref3[0], ext = _ref3[1];
        var ok = true;
        if (!isMIMEType(mimeType)) {
          console.warn('Skipped "'.concat(mimeType, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.'));
          ok = false;
        }
        if (!Array.isArray(ext) || !ext.every(isExt)) {
          console.warn('Skipped "'.concat(mimeType, '" because an invalid file extension was provided.'));
          ok = false;
        }
        return ok;
      }).reduce(function(agg, _ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), mimeType = _ref5[0], ext = _ref5[1];
        return _objectSpread(_objectSpread({}, agg), {}, _defineProperty2({}, mimeType, ext));
      }, {});
      return [{
        // description is required due to https://crbug.com/1264708
        description: "Files",
        accept: acceptForPicker
      }];
    }
    return accept;
  }
  function acceptPropAsAcceptAttr(accept) {
    if (isDefined(accept)) {
      return Object.entries(accept).reduce(function(a, _ref6) {
        var _ref7 = _slicedToArray(_ref6, 2), mimeType = _ref7[0], ext = _ref7[1];
        return [].concat(_toConsumableArray(a), [mimeType], _toConsumableArray(ext));
      }, []).filter(function(v2) {
        return isMIMEType(v2) || isExt(v2);
      }).join(",");
    }
    return void 0;
  }
  function isAbort(v2) {
    return v2 instanceof DOMException && (v2.name === "AbortError" || v2.code === v2.ABORT_ERR);
  }
  function isSecurityError(v2) {
    return v2 instanceof DOMException && (v2.name === "SecurityError" || v2.code === v2.SECURITY_ERR);
  }
  function isMIMEType(v2) {
    return v2 === "audio/*" || v2 === "video/*" || v2 === "image/*" || v2 === "text/*" || /\w+\/[-+.\w]+/g.test(v2);
  }
  function isExt(v2) {
    return /^.*\.[\w]+$/.test(v2);
  }

  // node_modules/react-dropzone/dist/es/index.js
  var _excluded = ["children"];
  var _excluded2 = ["open"];
  var _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"];
  var _excluded4 = ["refKey", "onChange", "onClick"];
  function _toConsumableArray2(arr) {
    return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread2();
  }
  function _nonIterableSpread2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArray2(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _arrayWithoutHoles2(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray2(arr);
  }
  function _slicedToArray2(arr, i) {
    return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
  }
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit2(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err2) {
      _d = true;
      _e = err2;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles2(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function ownKeys2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty3(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty3(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  var Dropzone = /* @__PURE__ */ (0, import_react2.forwardRef)(function(_ref, ref) {
    var children = _ref.children, params2 = _objectWithoutProperties(_ref, _excluded);
    var _useDropzone = useDropzone(params2), open = _useDropzone.open, props = _objectWithoutProperties(_useDropzone, _excluded2);
    (0, import_react2.useImperativeHandle)(ref, function() {
      return {
        open
      };
    }, [open]);
    return /* @__PURE__ */ import_react2.default.createElement(import_react2.Fragment, null, children(_objectSpread2(_objectSpread2({}, props), {}, {
      open
    })));
  });
  Dropzone.displayName = "Dropzone";
  var defaultProps = {
    disabled: false,
    getFilesFromEvent: fromEvent,
    maxSize: Infinity,
    minSize: 0,
    multiple: true,
    maxFiles: 0,
    preventDropOnDocument: true,
    noClick: false,
    noKeyboard: false,
    noDrag: false,
    noDragEventsBubbling: false,
    validator: null,
    useFsAccessApi: true,
    autoFocus: false
  };
  Dropzone.defaultProps = defaultProps;
  Dropzone.propTypes = {
    /**
     * Render function that exposes the dropzone state and prop getter fns
     *
     * @param {object} params
     * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
     * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
     * @param {Function} params.open Open the native file selection dialog
     * @param {boolean} params.isFocused Dropzone area is in focus
     * @param {boolean} params.isFileDialogActive File dialog is opened
     * @param {boolean} params.isDragActive Active drag is in progress
     * @param {boolean} params.isDragAccept Dragged files are accepted
     * @param {boolean} params.isDragReject Some dragged files are rejected
     * @param {File[]} params.acceptedFiles Accepted files
     * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
     */
    children: import_prop_types.default.func,
    /**
     * Set accepted file types.
     * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
     * Keep in mind that mime type determination is not reliable across platforms. CSV files,
     * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
     * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
     */
    accept: import_prop_types.default.objectOf(import_prop_types.default.arrayOf(import_prop_types.default.string)),
    /**
     * Allow drag 'n' drop (or selection from the file dialog) of multiple files
     */
    multiple: import_prop_types.default.bool,
    /**
     * If false, allow dropped items to take over the current browser window
     */
    preventDropOnDocument: import_prop_types.default.bool,
    /**
     * If true, disables click to open the native file selection dialog
     */
    noClick: import_prop_types.default.bool,
    /**
     * If true, disables SPACE/ENTER to open the native file selection dialog.
     * Note that it also stops tracking the focus state.
     */
    noKeyboard: import_prop_types.default.bool,
    /**
     * If true, disables drag 'n' drop
     */
    noDrag: import_prop_types.default.bool,
    /**
     * If true, stops drag event propagation to parents
     */
    noDragEventsBubbling: import_prop_types.default.bool,
    /**
     * Minimum file size (in bytes)
     */
    minSize: import_prop_types.default.number,
    /**
     * Maximum file size (in bytes)
     */
    maxSize: import_prop_types.default.number,
    /**
     * Maximum accepted number of files
     * The default value is 0 which means there is no limitation to how many files are accepted.
     */
    maxFiles: import_prop_types.default.number,
    /**
     * Enable/disable the dropzone
     */
    disabled: import_prop_types.default.bool,
    /**
     * Use this to provide a custom file aggregator
     *
     * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
     */
    getFilesFromEvent: import_prop_types.default.func,
    /**
     * Cb for when closing the file dialog with no selection
     */
    onFileDialogCancel: import_prop_types.default.func,
    /**
     * Cb for when opening the file dialog
     */
    onFileDialogOpen: import_prop_types.default.func,
    /**
     * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
     * to open the file picker instead of using an `<input type="file">` click event.
     */
    useFsAccessApi: import_prop_types.default.bool,
    /**
     * Set to true to focus the root element on render
     */
    autoFocus: import_prop_types.default.bool,
    /**
     * Cb for when the `dragenter` event occurs.
     *
     * @param {DragEvent} event
     */
    onDragEnter: import_prop_types.default.func,
    /**
     * Cb for when the `dragleave` event occurs
     *
     * @param {DragEvent} event
     */
    onDragLeave: import_prop_types.default.func,
    /**
     * Cb for when the `dragover` event occurs
     *
     * @param {DragEvent} event
     */
    onDragOver: import_prop_types.default.func,
    /**
     * Cb for when the `drop` event occurs.
     * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
     *
     * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
     * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
     * If `multiple` is set to false and additional files are dropped,
     * all files besides the first will be rejected.
     * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
     *
     * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
     * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
     *
     * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
     * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
     *
     * ```js
     * function onDrop(acceptedFiles) {
     *   const req = request.post('/upload')
     *   acceptedFiles.forEach(file => {
     *     req.attach(file.name, file)
     *   })
     *   req.end(callback)
     * }
     * ```
     *
     * @param {File[]} acceptedFiles
     * @param {FileRejection[]} fileRejections
     * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
     */
    onDrop: import_prop_types.default.func,
    /**
     * Cb for when the `drop` event occurs.
     * Note that if no files are accepted, this callback is not invoked.
     *
     * @param {File[]} files
     * @param {(DragEvent|Event)} event
     */
    onDropAccepted: import_prop_types.default.func,
    /**
     * Cb for when the `drop` event occurs.
     * Note that if no files are rejected, this callback is not invoked.
     *
     * @param {FileRejection[]} fileRejections
     * @param {(DragEvent|Event)} event
     */
    onDropRejected: import_prop_types.default.func,
    /**
     * Cb for when there's some error from any of the promises.
     *
     * @param {Error} error
     */
    onError: import_prop_types.default.func,
    /**
     * Custom validation function. It must return null if there's no errors.
     * @param {File} file
     * @returns {FileError|FileError[]|null}
     */
    validator: import_prop_types.default.func
  };
  var es_default = Dropzone;
  var initialState = {
    isFocused: false,
    isFileDialogActive: false,
    isDragActive: false,
    isDragAccept: false,
    isDragReject: false,
    acceptedFiles: [],
    fileRejections: []
  };
  function useDropzone() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props), accept = _defaultProps$props.accept, disabled = _defaultProps$props.disabled, getFilesFromEvent = _defaultProps$props.getFilesFromEvent, maxSize = _defaultProps$props.maxSize, minSize = _defaultProps$props.minSize, multiple = _defaultProps$props.multiple, maxFiles = _defaultProps$props.maxFiles, onDragEnter = _defaultProps$props.onDragEnter, onDragLeave = _defaultProps$props.onDragLeave, onDragOver = _defaultProps$props.onDragOver, onDrop = _defaultProps$props.onDrop, onDropAccepted = _defaultProps$props.onDropAccepted, onDropRejected = _defaultProps$props.onDropRejected, onFileDialogCancel = _defaultProps$props.onFileDialogCancel, onFileDialogOpen = _defaultProps$props.onFileDialogOpen, useFsAccessApi = _defaultProps$props.useFsAccessApi, autoFocus = _defaultProps$props.autoFocus, preventDropOnDocument = _defaultProps$props.preventDropOnDocument, noClick = _defaultProps$props.noClick, noKeyboard = _defaultProps$props.noKeyboard, noDrag = _defaultProps$props.noDrag, noDragEventsBubbling = _defaultProps$props.noDragEventsBubbling, onError = _defaultProps$props.onError, validator = _defaultProps$props.validator;
    var acceptAttr = (0, import_react2.useMemo)(function() {
      return acceptPropAsAcceptAttr(accept);
    }, [accept]);
    var pickerTypes = (0, import_react2.useMemo)(function() {
      return pickerOptionsFromAccept(accept);
    }, [accept]);
    var onFileDialogOpenCb = (0, import_react2.useMemo)(function() {
      return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
    }, [onFileDialogOpen]);
    var onFileDialogCancelCb = (0, import_react2.useMemo)(function() {
      return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
    }, [onFileDialogCancel]);
    var rootRef = (0, import_react2.useRef)(null);
    var inputRef = (0, import_react2.useRef)(null);
    var _useReducer = (0, import_react2.useReducer)(reducer, initialState), _useReducer2 = _slicedToArray2(_useReducer, 2), state = _useReducer2[0], dispatch = _useReducer2[1];
    var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive;
    var fsAccessApiWorksRef = (0, import_react2.useRef)(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI());
    var onWindowFocus = function onWindowFocus2() {
      if (!fsAccessApiWorksRef.current && isFileDialogActive) {
        setTimeout(function() {
          if (inputRef.current) {
            var files = inputRef.current.files;
            if (!files.length) {
              dispatch({
                type: "closeDialog"
              });
              onFileDialogCancelCb();
            }
          }
        }, 300);
      }
    };
    (0, import_react2.useEffect)(function() {
      window.addEventListener("focus", onWindowFocus, false);
      return function() {
        window.removeEventListener("focus", onWindowFocus, false);
      };
    }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
    var dragTargetsRef = (0, import_react2.useRef)([]);
    var onDocumentDrop = function onDocumentDrop2(event) {
      if (rootRef.current && rootRef.current.contains(event.target)) {
        return;
      }
      event.preventDefault();
      dragTargetsRef.current = [];
    };
    (0, import_react2.useEffect)(function() {
      if (preventDropOnDocument) {
        document.addEventListener("dragover", onDocumentDragOver, false);
        document.addEventListener("drop", onDocumentDrop, false);
      }
      return function() {
        if (preventDropOnDocument) {
          document.removeEventListener("dragover", onDocumentDragOver);
          document.removeEventListener("drop", onDocumentDrop);
        }
      };
    }, [rootRef, preventDropOnDocument]);
    (0, import_react2.useEffect)(function() {
      if (!disabled && autoFocus && rootRef.current) {
        rootRef.current.focus();
      }
      return function() {
      };
    }, [rootRef, autoFocus, disabled]);
    var onErrCb = (0, import_react2.useCallback)(function(e) {
      if (onError) {
        onError(e);
      } else {
        console.error(e);
      }
    }, [onError]);
    var onDragEnterCb = (0, import_react2.useCallback)(function(event) {
      event.preventDefault();
      event.persist();
      stopPropagation(event);
      dragTargetsRef.current = [].concat(_toConsumableArray2(dragTargetsRef.current), [event.target]);
      if (isEvtWithFiles(event)) {
        Promise.resolve(getFilesFromEvent(event)).then(function(files) {
          if (isPropagationStopped(event) && !noDragEventsBubbling) {
            return;
          }
          var fileCount = files.length;
          var isDragAccept = fileCount > 0 && allFilesAccepted({
            files,
            accept: acceptAttr,
            minSize,
            maxSize,
            multiple,
            maxFiles,
            validator
          });
          var isDragReject = fileCount > 0 && !isDragAccept;
          dispatch({
            isDragAccept,
            isDragReject,
            isDragActive: true,
            type: "setDraggedFiles"
          });
          if (onDragEnter) {
            onDragEnter(event);
          }
        }).catch(function(e) {
          return onErrCb(e);
        });
      }
    }, [getFilesFromEvent, onDragEnter, onErrCb, noDragEventsBubbling, acceptAttr, minSize, maxSize, multiple, maxFiles, validator]);
    var onDragOverCb = (0, import_react2.useCallback)(function(event) {
      event.preventDefault();
      event.persist();
      stopPropagation(event);
      var hasFiles = isEvtWithFiles(event);
      if (hasFiles && event.dataTransfer) {
        try {
          event.dataTransfer.dropEffect = "copy";
        } catch (_unused) {
        }
      }
      if (hasFiles && onDragOver) {
        onDragOver(event);
      }
      return false;
    }, [onDragOver, noDragEventsBubbling]);
    var onDragLeaveCb = (0, import_react2.useCallback)(function(event) {
      event.preventDefault();
      event.persist();
      stopPropagation(event);
      var targets = dragTargetsRef.current.filter(function(target) {
        return rootRef.current && rootRef.current.contains(target);
      });
      var targetIdx = targets.indexOf(event.target);
      if (targetIdx !== -1) {
        targets.splice(targetIdx, 1);
      }
      dragTargetsRef.current = targets;
      if (targets.length > 0) {
        return;
      }
      dispatch({
        type: "setDraggedFiles",
        isDragActive: false,
        isDragAccept: false,
        isDragReject: false
      });
      if (isEvtWithFiles(event) && onDragLeave) {
        onDragLeave(event);
      }
    }, [rootRef, onDragLeave, noDragEventsBubbling]);
    var setFiles = (0, import_react2.useCallback)(function(files, event) {
      var acceptedFiles = [];
      var fileRejections = [];
      files.forEach(function(file2) {
        var _fileAccepted = fileAccepted(file2, acceptAttr), _fileAccepted2 = _slicedToArray2(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
        var _fileMatchSize = fileMatchSize(file2, minSize, maxSize), _fileMatchSize2 = _slicedToArray2(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
        var customErrors = validator ? validator(file2) : null;
        if (accepted && sizeMatch && !customErrors) {
          acceptedFiles.push(file2);
        } else {
          var errors = [acceptError, sizeError];
          if (customErrors) {
            errors = errors.concat(customErrors);
          }
          fileRejections.push({
            file: file2,
            errors: errors.filter(function(e) {
              return e;
            })
          });
        }
      });
      if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
        acceptedFiles.forEach(function(file2) {
          fileRejections.push({
            file: file2,
            errors: [TOO_MANY_FILES_REJECTION]
          });
        });
        acceptedFiles.splice(0);
      }
      dispatch({
        acceptedFiles,
        fileRejections,
        type: "setFiles"
      });
      if (onDrop) {
        onDrop(acceptedFiles, fileRejections, event);
      }
      if (fileRejections.length > 0 && onDropRejected) {
        onDropRejected(fileRejections, event);
      }
      if (acceptedFiles.length > 0 && onDropAccepted) {
        onDropAccepted(acceptedFiles, event);
      }
    }, [dispatch, multiple, acceptAttr, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
    var onDropCb = (0, import_react2.useCallback)(function(event) {
      event.preventDefault();
      event.persist();
      stopPropagation(event);
      dragTargetsRef.current = [];
      if (isEvtWithFiles(event)) {
        Promise.resolve(getFilesFromEvent(event)).then(function(files) {
          if (isPropagationStopped(event) && !noDragEventsBubbling) {
            return;
          }
          setFiles(files, event);
        }).catch(function(e) {
          return onErrCb(e);
        });
      }
      dispatch({
        type: "reset"
      });
    }, [getFilesFromEvent, setFiles, onErrCb, noDragEventsBubbling]);
    var openFileDialog = (0, import_react2.useCallback)(function() {
      if (fsAccessApiWorksRef.current) {
        dispatch({
          type: "openDialog"
        });
        onFileDialogOpenCb();
        var opts = {
          multiple,
          types: pickerTypes
        };
        window.showOpenFilePicker(opts).then(function(handles) {
          return getFilesFromEvent(handles);
        }).then(function(files) {
          setFiles(files, null);
          dispatch({
            type: "closeDialog"
          });
        }).catch(function(e) {
          if (isAbort(e)) {
            onFileDialogCancelCb(e);
            dispatch({
              type: "closeDialog"
            });
          } else if (isSecurityError(e)) {
            fsAccessApiWorksRef.current = false;
            if (inputRef.current) {
              inputRef.current.value = null;
              inputRef.current.click();
            } else {
              onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));
            }
          } else {
            onErrCb(e);
          }
        });
        return;
      }
      if (inputRef.current) {
        dispatch({
          type: "openDialog"
        });
        onFileDialogOpenCb();
        inputRef.current.value = null;
        inputRef.current.click();
      }
    }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, onErrCb, pickerTypes, multiple]);
    var onKeyDownCb = (0, import_react2.useCallback)(function(event) {
      if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
        return;
      }
      if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
        event.preventDefault();
        openFileDialog();
      }
    }, [rootRef, openFileDialog]);
    var onFocusCb = (0, import_react2.useCallback)(function() {
      dispatch({
        type: "focus"
      });
    }, []);
    var onBlurCb = (0, import_react2.useCallback)(function() {
      dispatch({
        type: "blur"
      });
    }, []);
    var onClickCb = (0, import_react2.useCallback)(function() {
      if (noClick) {
        return;
      }
      if (isIeOrEdge()) {
        setTimeout(openFileDialog, 0);
      } else {
        openFileDialog();
      }
    }, [noClick, openFileDialog]);
    var composeHandler = function composeHandler2(fn) {
      return disabled ? null : fn;
    };
    var composeKeyboardHandler = function composeKeyboardHandler2(fn) {
      return noKeyboard ? null : composeHandler(fn);
    };
    var composeDragHandler = function composeDragHandler2(fn) {
      return noDrag ? null : composeHandler(fn);
    };
    var stopPropagation = function stopPropagation2(event) {
      if (noDragEventsBubbling) {
        event.stopPropagation();
      }
    };
    var getRootProps = (0, import_react2.useMemo)(function() {
      return function() {
        var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref2.role, onKeyDown = _ref2.onKeyDown, onFocus = _ref2.onFocus, onBlur = _ref2.onBlur, onClick = _ref2.onClick, onDragEnter2 = _ref2.onDragEnter, onDragOver2 = _ref2.onDragOver, onDragLeave2 = _ref2.onDragLeave, onDrop2 = _ref2.onDrop, rest = _objectWithoutProperties(_ref2, _excluded3);
        return _objectSpread2(_objectSpread2(_defineProperty3({
          onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
          onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
          onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
          onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
          onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter2, onDragEnterCb)),
          onDragOver: composeDragHandler(composeEventHandlers(onDragOver2, onDragOverCb)),
          onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave2, onDragLeaveCb)),
          onDrop: composeDragHandler(composeEventHandlers(onDrop2, onDropCb)),
          role: typeof role === "string" && role !== "" ? role : "presentation"
        }, refKey, rootRef), !disabled && !noKeyboard ? {
          tabIndex: 0
        } : {}), rest);
      };
    }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
    var onInputElementClick = (0, import_react2.useCallback)(function(event) {
      event.stopPropagation();
    }, []);
    var getInputProps = (0, import_react2.useMemo)(function() {
      return function() {
        var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange = _ref3.onChange, onClick = _ref3.onClick, rest = _objectWithoutProperties(_ref3, _excluded4);
        var inputProps = _defineProperty3({
          accept: acceptAttr,
          multiple,
          type: "file",
          style: {
            display: "none"
          },
          onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
          onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
          tabIndex: -1
        }, refKey, inputRef);
        return _objectSpread2(_objectSpread2({}, inputProps), rest);
      };
    }, [inputRef, accept, multiple, onDropCb, disabled]);
    return _objectSpread2(_objectSpread2({}, state), {}, {
      isFocused: isFocused && !disabled,
      getRootProps,
      getInputProps,
      rootRef,
      inputRef,
      open: composeHandler(openFileDialog)
    });
  }
  function reducer(state, action) {
    switch (action.type) {
      case "focus":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isFocused: true
        });
      case "blur":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isFocused: false
        });
      case "openDialog":
        return _objectSpread2(_objectSpread2({}, initialState), {}, {
          isFileDialogActive: true
        });
      case "closeDialog":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isFileDialogActive: false
        });
      case "setDraggedFiles":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isDragActive: action.isDragActive,
          isDragAccept: action.isDragAccept,
          isDragReject: action.isDragReject
        });
      case "setFiles":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          acceptedFiles: action.acceptedFiles,
          fileRejections: action.fileRejections
        });
      case "reset":
        return _objectSpread2({}, initialState);
      default:
        return state;
    }
  }
  function noop() {
  }

  // src/utils/icons.tsx
  var import_react5 = __toESM(require_react());

  // node_modules/react-icons/lib/esm/iconBase.js
  var import_react4 = __toESM(require_react());

  // node_modules/react-icons/lib/esm/iconContext.js
  var import_react3 = __toESM(require_react());
  var DefaultContext = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  };
  var IconContext = import_react3.default.createContext && import_react3.default.createContext(DefaultContext);

  // node_modules/react-icons/lib/esm/iconBase.js
  var __assign = function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2)) t[p2] = s[p2];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var __rest = function(s, e) {
    var t = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0) t[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t[p2[i]] = s[p2[i]];
    }
    return t;
  };
  function Tree2Element(tree) {
    return tree && tree.map(function(node, i) {
      return import_react4.default.createElement(node.tag, __assign({
        key: i
      }, node.attr), Tree2Element(node.child));
    });
  }
  function GenIcon(data) {
    return function(props) {
      return import_react4.default.createElement(IconBase, __assign({
        attr: __assign({}, data.attr)
      }, props), Tree2Element(data.child));
    };
  }
  function IconBase(props) {
    var elem = function(conf) {
      var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
      var computedSize = size || conf.size || "1em";
      var className;
      if (conf.className) className = conf.className;
      if (props.className) className = (className ? className + " " : "") + props.className;
      return import_react4.default.createElement("svg", __assign({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, conf.attr, attr, svgProps, {
        className,
        style: __assign(__assign({
          color: props.color || conf.color
        }, conf.style), props.style),
        height: computedSize,
        width: computedSize,
        xmlns: "http://www.w3.org/2000/svg"
      }), title && import_react4.default.createElement("title", null, title), props.children);
    };
    return IconContext !== void 0 ? import_react4.default.createElement(IconContext.Consumer, null, function(conf) {
      return elem(conf);
    }) : elem(DefaultContext);
  }

  // node_modules/react-icons/bi/index.esm.js
  function BiCopy(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" } }] })(props);
  }
  function BiCurrentLocation(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "4" } }, { "tag": "path", "attr": { "d": "M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" } }] })(props);
  }
  function BiFile(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z" } }, { "tag": "path", "attr": { "d": "M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z" } }] })(props);
  }
  function BiFolderMinus(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M20 5h-8.586L9.707 3.293A.996.996 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z" } }, { "tag": "path", "attr": { "d": "M7.874 12h8v2h-8z" } }] })(props);
  }
  function BiFolderPlus(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z" } }, { "tag": "path", "attr": { "d": "M20 5h-8.586L9.707 3.293A.996.996 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z" } }] })(props);
  }
  function BiFolder(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M20 5h-8.586L9.707 3.293A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z" } }] })(props);
  }

  // node_modules/react-icons/im/index.esm.js
  function ImFolder(props) {
    return GenIcon({ "tag": "svg", "attr": { "version": "1.1", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M7 2l2 2h7v11h-16v-13z" } }] })(props);
  }
  function ImFolderPlus(props) {
    return GenIcon({ "tag": "svg", "attr": { "version": "1.1", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M9 4l-2-2h-7v13h16v-11h-7zM11 11h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" } }] })(props);
  }
  function ImFolderMinus(props) {
    return GenIcon({ "tag": "svg", "attr": { "version": "1.1", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M9 4l-2-2h-7v13h16v-11h-7zM11 11h-6v-2h6v2z" } }] })(props);
  }

  // node_modules/react-icons/ti/index.esm.js
  function TiFolderOpen(props) {
    return GenIcon({ "tag": "svg", "attr": { "version": "1.2", "baseProfile": "tiny", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M22.3 8h-2.4c-.4-1.2-1.5-2-2.8-2h-6c0-1.1-.9-2-2-2h-4.1c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3h12c1.7 0 3.4-1.3 3.8-3l2.2-8c.1-.6-.2-1-.7-1zm-18.3 1v-2c0-.6.4-1 1-1h4c0 1.1.9 2 2 2h6c.6 0 1 .4 1 1h-11.1c-.6 0-1.1.4-1.3 1l-1.6 6.3v-7.3zm14.9 7.5c-.2.8-1.1 1.5-1.9 1.5h-12s-.4-.2-.2-.8l1.9-7c0-.1.2-.2.3-.2h13.7l-1.8 6.5z" } }] })(props);
  }
  function TiFolder(props) {
    return GenIcon({ "tag": "svg", "attr": { "version": "1.2", "baseProfile": "tiny", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M18 6h-6c0-1.104-.896-2-2-2h-4c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3zm-12 0h4c0 1.104.896 2 2 2h6c.552 0 1 .448 1 1h-14v-2c0-.552.448-1 1-1zm12 12h-12c-.552 0-1-.448-1-1v-7h14v7c0 .552-.448 1-1 1z" } }] })(props);
  }

  // node_modules/react-icons/cg/index.esm.js
  function CgAdd(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z", "fill": "currentColor" } }, { "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z", "fill": "currentColor" } }] })(props);
  }
  function CgChevronDoubleDown(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none" }, "child": [{ "tag": "path", "attr": { "d": "M7.75735 5.63605L6.34314 7.05026L12 12.7071L17.6569 7.05029L16.2427 5.63608L12 9.87872L7.75735 5.63605Z", "fill": "currentColor" } }, { "tag": "path", "attr": { "d": "M6.34314 12.7071L7.75735 11.2929L12 15.5356L16.2427 11.2929L17.6569 12.7071L12 18.364L6.34314 12.7071Z", "fill": "currentColor" } }] })(props);
  }
  function CgChevronDoubleUp(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none" }, "child": [{ "tag": "path", "attr": { "d": "M17.6569 11.2929L16.2427 12.7071L12 8.46444L7.75735 12.7071L6.34314 11.2929L12 5.63605L17.6569 11.2929Z", "fill": "currentColor" } }, { "tag": "path", "attr": { "d": "M17.6569 16.9497L16.2427 18.3639L12 14.1213L7.75735 18.364L6.34314 16.9498L12 11.2929L17.6569 16.9497Z", "fill": "currentColor" } }] })(props);
  }
  function CgCloseO(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none" }, "child": [{ "tag": "path", "attr": { "d": "M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z", "fill": "currentColor" } }, { "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z", "fill": "currentColor" } }] })(props);
  }
  function CgRemove(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none" }, "child": [{ "tag": "path", "attr": { "d": "M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z", "fill": "currentColor" } }, { "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "fill": "currentColor" } }] })(props);
  }
  function CgSortAz(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none" }, "child": [{ "tag": "path", "attr": { "d": "M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8Z", "fill": "currentColor" } }, { "tag": "path", "attr": { "d": "M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z", "fill": "currentColor" } }, { "tag": "path", "attr": { "d": "M11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H11Z", "fill": "currentColor" } }] })(props);
  }

  // node_modules/react-icons/fa/index.esm.js
  function FaArrowCircleLeft(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z" } }] })(props);
  }
  function FaFolderOpen(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 576 512" }, "child": [{ "tag": "path", "attr": { "d": "M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z" } }] })(props);
  }
  function FaGlobe(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 496 512" }, "child": [{ "tag": "path", "attr": { "d": "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" } }] })(props);
  }
  function FaHistory(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z" } }] })(props);
  }
  function FaHome(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 576 512" }, "child": [{ "tag": "path", "attr": { "d": "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" } }] })(props);
  }
  function FaProjectDiagram(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 640 512" }, "child": [{ "tag": "path", "attr": { "d": "M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z" } }] })(props);
  }
  function FaTags(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 640 512" }, "child": [{ "tag": "path", "attr": { "d": "M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z" } }] })(props);
  }
  function FaThumbtack(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 384 512" }, "child": [{ "tag": "path", "attr": { "d": "M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z" } }] })(props);
  }
  function FaTrash(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" } }] })(props);
  }
  function FaRegBookmark(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 384 512" }, "child": [{ "tag": "path", "attr": { "d": "M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z" } }] })(props);
  }

  // node_modules/react-icons/ai/index.esm.js
  function AiFillFileImage(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM400 402c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm296 294H328c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0 1 12.6 0l41.1 52.4 77.8-99.2a8 8 0 0 1 12.6 0l136.5 174c4.3 5.2.5 12.9-6.1 12.9zm-94-370V137.8L790.2 326H602z" } }] })(props);
  }
  function AiFillFilePdf(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM633.22 637.26c-15.18-.5-31.32.67-49.65 2.96-24.3-14.99-40.66-35.58-52.28-65.83l1.07-4.38 1.24-5.18c4.3-18.13 6.61-31.36 7.3-44.7.52-10.07-.04-19.36-1.83-27.97-3.3-18.59-16.45-29.46-33.02-30.13-15.45-.63-29.65 8-33.28 21.37-5.91 21.62-2.45 50.07 10.08 98.59-15.96 38.05-37.05 82.66-51.2 107.54-18.89 9.74-33.6 18.6-45.96 28.42-16.3 12.97-26.48 26.3-29.28 40.3-1.36 6.49.69 14.97 5.36 21.92 5.3 7.88 13.28 13 22.85 13.74 24.15 1.87 53.83-23.03 86.6-79.26 3.29-1.1 6.77-2.26 11.02-3.7l11.9-4.02c7.53-2.54 12.99-4.36 18.39-6.11 23.4-7.62 41.1-12.43 57.2-15.17 27.98 14.98 60.32 24.8 82.1 24.8 17.98 0 30.13-9.32 34.52-23.99 3.85-12.88.8-27.82-7.48-36.08-8.56-8.41-24.3-12.43-45.65-13.12zM385.23 765.68v-.36l.13-.34a54.86 54.86 0 0 1 5.6-10.76c4.28-6.58 10.17-13.5 17.47-20.87 3.92-3.95 8-7.8 12.79-12.12 1.07-.96 7.91-7.05 9.19-8.25l11.17-10.4-8.12 12.93c-12.32 19.64-23.46 33.78-33 43-3.51 3.4-6.6 5.9-9.1 7.51a16.43 16.43 0 0 1-2.61 1.42c-.41.17-.77.27-1.13.3a2.2 2.2 0 0 1-1.12-.15 2.07 2.07 0 0 1-1.27-1.91zM511.17 547.4l-2.26 4-1.4-4.38c-3.1-9.83-5.38-24.64-6.01-38-.72-15.2.49-24.32 5.29-24.32 6.74 0 9.83 10.8 10.07 27.05.22 14.28-2.03 29.14-5.7 35.65zm-5.81 58.46l1.53-4.05 2.09 3.8c11.69 21.24 26.86 38.96 43.54 51.31l3.6 2.66-4.39.9c-16.33 3.38-31.54 8.46-52.34 16.85 2.17-.88-21.62 8.86-27.64 11.17l-5.25 2.01 2.8-4.88c12.35-21.5 23.76-47.32 36.05-79.77zm157.62 76.26c-7.86 3.1-24.78.33-54.57-12.39l-7.56-3.22 8.2-.6c23.3-1.73 39.8-.45 49.42 3.07 4.1 1.5 6.83 3.39 8.04 5.55a4.64 4.64 0 0 1-1.36 6.31 6.7 6.7 0 0 1-2.17 1.28z" } }] })(props);
  }
  function AiFillFileWord(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM512 566.1l52.81 197a12 12 0 0 0 11.6 8.9h31.77a12 12 0 0 0 11.6-8.88l74.37-276a12 12 0 0 0 .4-3.12 12 12 0 0 0-12-12h-35.57a12 12 0 0 0-11.7 9.31l-45.78 199.1-49.76-199.32A12 12 0 0 0 528.1 472h-32.2a12 12 0 0 0-11.64 9.1L434.6 680.01 388.5 481.3a12 12 0 0 0-11.68-9.29h-35.39a12 12 0 0 0-3.11.41 12 12 0 0 0-8.47 14.7l74.17 276A12 12 0 0 0 415.6 772h31.99a12 12 0 0 0 11.59-8.9l52.81-197z" } }] })(props);
  }

  // node_modules/react-icons/io/index.esm.js
  function IoIosAddCircle(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224H272v74.5c0 8.8-7.2 16-16 16-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3V272h-74.5c-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3 0-8.8 7.2-16 16-16H240v-74.5c0-8.8 7.2-16 16-16s16 7.2 16 16V240h74.5c8.8 0 16 7.2 16 16s-7.2 16-16 16z" } }] })(props);
  }
  function IoIosArrowBack(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" } }] })(props);
  }
  function IoIosCloseCircleOutline(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z" } }, { "tag": "path", "attr": { "d": "M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" } }] })(props);
  }
  function IoIosEyeOff(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M88.3 68.1c-5.6-5.5-14.6-5.5-20.1.1-5.5 5.5-5.5 14.5 0 20l355.5 355.7c3.7 3.7 9 4.9 13.7 3.6 2.4-.6 4.6-1.9 6.4-3.7 5.5-5.5 5.5-14.5 0-20L88.3 68.1zM260.2 345.9c-53 2.4-96.6-41.2-94.1-94.1.6-12.2 3.6-23.8 8.6-34.3L121.3 164c-27.7 21.4-55.4 48.9-85.1 81.3-5.5 6.1-5.6 15.2-.1 21.3C101 338.3 158.2 400 255.8 400c29.7 0 57.1-7.4 82.3-19.2l-43.5-43.5c-10.6 5-22.2 8-34.4 8.6zM475.8 266c5.3-5.8 5.6-14.6.5-20.7C424 181.8 351.5 112 255.8 112c-29.1 0-56 6.6-82 19l43.7 43.7c10.5-5 22.1-8.1 34.3-8.6 53-2.4 96.6 41.2 94.1 94.1-.6 12.2-3.6 23.8-8.6 34.3l53.5 53.5c33-25.3 61.3-55.9 85-82z" } }, { "tag": "path", "attr": { "d": "M192.2 260.9c2.4 31.3 27.6 56.5 58.9 58.9 8.2.6 16.1-.3 23.4-2.6l-79.8-79.8c-2.2 7.4-3.1 15.3-2.5 23.5zM320 256c0-1.3-.1-2.6-.1-3.9-5.6 2.5-11.7 3.9-18.2 3.9-1.1 0-2.1 0-3.1-.1l18.6 18.7c1.8-5.9 2.8-12.2 2.8-18.6zM256 209c0-6 1.1-11.7 3.1-16.9-1 0-2-.1-3.1-.1-6.4 0-12.6 1-18.5 2.8l18.7 18.7c-.1-1.5-.2-3-.2-4.5z" } }] })(props);
  }
  function IoIosEye(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M255.8 112c-80.4 0-143.8 50.6-219.6 133.3-5.5 6.1-5.6 15.2-.1 21.3C101 338.3 158.2 400 255.8 400c96.4 0 168.7-77.7 220.1-134 5.3-5.8 5.6-14.6.5-20.7C424 181.8 351.5 112 255.8 112zm4.4 233.9c-53 2.4-96.6-41.2-94.1-94.1 2.1-46.2 39.5-83.6 85.7-85.7 53-2.4 96.6 41.2 94.1 94.1-2.1 46.2-39.5 83.6-85.7 85.7z" } }, { "tag": "path", "attr": { "d": "M256 209c0-6 1.1-11.7 3.1-16.9-1 0-2-.1-3.1-.1-36.9 0-66.6 31.4-63.8 68.9 2.4 31.3 27.6 56.5 58.9 58.9 37.5 2.8 68.9-26.9 68.9-63.8 0-1.3-.1-2.6-.1-3.9-5.6 2.5-11.7 3.9-18.2 3.9-25.2 0-45.7-21.1-45.7-47z" } }] })(props);
  }
  function IoIosSearch(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z" } }] })(props);
  }
  function IoMdArrowDropright(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M192 128l128 128-128 128z" } }] })(props);
  }

  // node_modules/react-icons/md/index.esm.js
  function MdLocationOn(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" } }] })(props);
  }
  function MdContentCopy(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" } }] })(props);
  }
  function MdFormatListBulleted(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0V0z" } }, { "tag": "path", "attr": { "d": "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" } }] })(props);
  }
  function MdTitle(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0V0z" } }, { "tag": "path", "attr": { "d": "M5 4v3h5.5v12h3V7H19V4z" } }] })(props);
  }
  function MdEventNote(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z" } }] })(props);
  }
  function MdOutlineCreateNewFolder(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0V0z" } }, { "tag": "path", "attr": { "d": "M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z" } }] })(props);
  }

  // node_modules/react-icons/lu/index.esm.js
  function LuLayoutDashboard(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "rect", "attr": { "width": "7", "height": "9", "x": "3", "y": "3", "rx": "1" } }, { "tag": "rect", "attr": { "width": "7", "height": "5", "x": "14", "y": "3", "rx": "1" } }, { "tag": "rect", "attr": { "width": "7", "height": "9", "x": "14", "y": "12", "rx": "1" } }, { "tag": "rect", "attr": { "width": "7", "height": "5", "x": "3", "y": "16", "rx": "1" } }] })(props);
  }
  function LuListChecks(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "m3 17 2 2 4-4" } }, { "tag": "path", "attr": { "d": "m3 7 2 2 4-4" } }, { "tag": "path", "attr": { "d": "M13 6h8" } }, { "tag": "path", "attr": { "d": "M13 12h8" } }, { "tag": "path", "attr": { "d": "M13 18h8" } }] })(props);
  }
  function LuMic(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" } }, { "tag": "path", "attr": { "d": "M19 10v2a7 7 0 0 1-14 0v-2" } }, { "tag": "line", "attr": { "x1": "12", "x2": "12", "y1": "19", "y2": "22" } }] })(props);
  }

  // src/utils/icons.tsx
  var SunriseIcon = ({ size = 20, ...props }) => /* @__PURE__ */ import_react5.default.createElement(
    "svg",
    {
      ...props,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    /* @__PURE__ */ import_react5.default.createElement("path", { d: "M12 2v2" }),
    /* @__PURE__ */ import_react5.default.createElement("path", { d: "m4.93 4.93 1.42 1.42" }),
    /* @__PURE__ */ import_react5.default.createElement("path", { d: "M20 12h2" }),
    /* @__PURE__ */ import_react5.default.createElement("path", { d: "m19.07 4.93-1.42 1.42" }),
    /* @__PURE__ */ import_react5.default.createElement("path", { d: "M2 12h2" }),
    /* @__PURE__ */ import_react5.default.createElement("path", { d: "M4 18h16" }),
    /* @__PURE__ */ import_react5.default.createElement("path", { d: "M6 22h12" }),
    /* @__PURE__ */ import_react5.default.createElement("path", { d: "M8 18a4 4 0 0 1 8 0" })
  );
  var MinusSquareO = (props) => /* @__PURE__ */ import_react5.default.createElement("svg", { ...props, viewBox: "64 -65 897 897" }, /* @__PURE__ */ import_react5.default.createElement("g", null, /* @__PURE__ */ import_react5.default.createElement(
    "path",
    {
      d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0\n  q0 -15 -11 -25.5t-25 -10.5z"
    }
  )));
  var PlusSquareO = (props) => /* @__PURE__ */ import_react5.default.createElement("svg", { ...props, viewBox: "64 -65 897 897" }, /* @__PURE__ */ import_react5.default.createElement("g", null, /* @__PURE__ */ import_react5.default.createElement(
    "path",
    {
      d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184\n  q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z"
    }
  )));
  var CloseSquareO = (props) => /* @__PURE__ */ import_react5.default.createElement("svg", { ...props, viewBox: "64 -65 897 897" }, /* @__PURE__ */ import_react5.default.createElement("g", null, /* @__PURE__ */ import_react5.default.createElement(
    "path",
    {
      d: "M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155\n  q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z"
    }
  )));
  var getFolderIcon = (plugin2, children, open) => {
    let setting = plugin2.settings.folderIcon;
    let OpenFolderIcon = MinusSquareO;
    let InactiveOpenFolderIcon = CloseSquareO;
    let ClosedFolderIcon = PlusSquareO;
    if (setting === "box-folder") {
      OpenFolderIcon = BiFolderMinus;
      InactiveOpenFolderIcon = BiFolder;
      ClosedFolderIcon = BiFolderPlus;
    } else if (setting === "icomoon") {
      OpenFolderIcon = ImFolderMinus;
      InactiveOpenFolderIcon = ImFolder;
      ClosedFolderIcon = ImFolderPlus;
    } else if (setting === "typicon") {
      OpenFolderIcon = TiFolderOpen;
      InactiveOpenFolderIcon = TiFolder;
      ClosedFolderIcon = TiFolder;
    } else if (setting === "circle-gg") {
      OpenFolderIcon = CgRemove;
      InactiveOpenFolderIcon = CgCloseO;
      ClosedFolderIcon = CgAdd;
    }
    const Icon = children ? open ? OpenFolderIcon : ClosedFolderIcon : InactiveOpenFolderIcon;
    return Icon;
  };

  // src/components/Mobile/useLongPress.tsx
  var import_react6 = __toESM(require_react());
  function isMouseEvent(e) {
    return Boolean(e && "screenX" in e);
  }
  function useLongPress(callback = (e) => {
  }, ms = 500) {
    const timer = (0, import_react6.useRef)(null);
    const origin = (0, import_react6.useRef)(null);
    const fired = (0, import_react6.useRef)(false);
    const currentCallback = (0, import_react6.useRef)(callback);
    currentCallback.current = callback;
    const cancel = () => {
      if (timer.current !== null) clearTimeout(timer.current);
      timer.current = null;
      origin.current = null;
    };
    (0, import_react6.useEffect)(() => cancel, []);
    return {
      onTouchStart: (e) => {
        cancel();
        fired.current = false;
        if (e.touches.length !== 1) return;
        origin.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        e.persist();
        timer.current = setTimeout(() => {
          fired.current = true;
          currentCallback.current(e);
          cancel();
        }, ms);
      },
      onTouchMove: (e) => {
        if (origin.current && (e.touches.length !== 1 || Math.hypot(e.touches[0].clientX - origin.current.x, e.touches[0].clientY - origin.current.y) > 8)) cancel();
      },
      onTouchEnd: cancel,
      onTouchCancel: cancel,
      onClickCapture: (e) => {
        if (fired.current) {
          e.preventDefault();
          e.stopPropagation();
          fired.current = false;
        }
      }
    };
  }

  // node_modules/common-tags/es/TemplateTag/TemplateTag.js
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _templateObject = _taggedTemplateLiteral(["", ""], ["", ""]);
  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var TemplateTag = (function() {
    function TemplateTag2() {
      var _this = this;
      for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
        transformers[_key] = arguments[_key];
      }
      _classCallCheck(this, TemplateTag2);
      this.tag = function(strings) {
        for (var _len2 = arguments.length, expressions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          expressions[_key2 - 1] = arguments[_key2];
        }
        if (typeof strings === "function") {
          return _this.interimTag.bind(_this, strings);
        }
        if (typeof strings === "string") {
          return _this.transformEndResult(strings);
        }
        strings = strings.map(_this.transformString.bind(_this));
        return _this.transformEndResult(strings.reduce(_this.processSubstitutions.bind(_this, expressions)));
      };
      if (transformers.length > 0 && Array.isArray(transformers[0])) {
        transformers = transformers[0];
      }
      this.transformers = transformers.map(function(transformer) {
        return typeof transformer === "function" ? transformer() : transformer;
      });
      return this.tag;
    }
    _createClass(TemplateTag2, [{
      key: "interimTag",
      /**
       * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
       * template tag to our own template tag.
       * @param  {Function}        nextTag          - the received template tag
       * @param  {Array<String>}   template         - the template to process
       * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
       * @return {*}                                - the final processed value
       */
      value: function interimTag(previousTag, template) {
        for (var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          substitutions[_key3 - 2] = arguments[_key3];
        }
        return this.tag(_templateObject, previousTag.apply(void 0, [template].concat(substitutions)));
      }
      /**
       * Performs bulk processing on the tagged template, transforming each substitution and then
       * concatenating the resulting values into a string.
       * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
       * @param  {String}   resultSoFar   - this iteration's result string so far
       * @param  {String}   remainingPart - the template chunk after the current substitution
       * @return {String}                 - the result of joining this iteration's processed substitution with the result
       */
    }, {
      key: "processSubstitutions",
      value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
        var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
        return "".concat(resultSoFar, substitution, remainingPart);
      }
      /**
       * Iterate through each transformer, applying the transformer's `onString` method to the template
       * strings before all substitutions are processed.
       * @param {String}  str - The input string
       * @return {String}     - The final results of processing each transformer
       */
    }, {
      key: "transformString",
      value: function transformString(str) {
        var cb = function cb2(res, transform) {
          return transform.onString ? transform.onString(res) : res;
        };
        return this.transformers.reduce(cb, str);
      }
      /**
       * When a substitution is encountered, iterates through each transformer and applies the transformer's
       * `onSubstitution` method to the substitution.
       * @param  {*}      substitution - The current substitution
       * @param  {String} resultSoFar  - The result up to and excluding this substitution.
       * @return {*}                   - The final result of applying all substitution transformations.
       */
    }, {
      key: "transformSubstitution",
      value: function transformSubstitution(substitution, resultSoFar) {
        var cb = function cb2(res, transform) {
          return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
        };
        return this.transformers.reduce(cb, substitution);
      }
      /**
       * Iterates through each transformer, applying the transformer's `onEndResult` method to the
       * template literal after all substitutions have finished processing.
       * @param  {String} endResult - The processed template, just before it is returned from the tag
       * @return {String}           - The final results of processing each transformer
       */
    }, {
      key: "transformEndResult",
      value: function transformEndResult(endResult) {
        var cb = function cb2(res, transform) {
          return transform.onEndResult ? transform.onEndResult(res) : res;
        };
        return this.transformers.reduce(cb, endResult);
      }
    }]);
    return TemplateTag2;
  })();
  var TemplateTag_default = TemplateTag;

  // node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js
  var trimResultTransformer = function trimResultTransformer2() {
    var side = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return {
      onEndResult: function onEndResult(endResult) {
        if (side === "") {
          return endResult.trim();
        }
        side = side.toLowerCase();
        if (side === "start" || side === "left") {
          return endResult.replace(/^\s*/, "");
        }
        if (side === "end" || side === "right") {
          return endResult.replace(/\s*$/, "");
        }
        throw new Error("Side not supported: " + side);
      }
    };
  };
  var trimResultTransformer_default = trimResultTransformer;

  // node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js
  function _toConsumableArray3(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  var stripIndentTransformer = function stripIndentTransformer2() {
    var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "initial";
    return {
      onEndResult: function onEndResult(endResult) {
        if (type === "initial") {
          var match = endResult.match(/^[^\S\n]*(?=\S)/gm);
          var indent = match && Math.min.apply(Math, _toConsumableArray3(match.map(function(el) {
            return el.length;
          })));
          if (indent) {
            var regexp = new RegExp("^.{" + indent + "}", "gm");
            return endResult.replace(regexp, "");
          }
          return endResult;
        }
        if (type === "all") {
          return endResult.replace(/^[^\S\n]+/gm, "");
        }
        throw new Error("Unknown type: " + type);
      }
    };
  };
  var stripIndentTransformer_default = stripIndentTransformer;

  // node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js
  var replaceResultTransformer = function replaceResultTransformer2(replaceWhat, replaceWith) {
    return {
      onEndResult: function onEndResult(endResult) {
        if (replaceWhat == null || replaceWith == null) {
          throw new Error("replaceResultTransformer requires at least 2 arguments.");
        }
        return endResult.replace(replaceWhat, replaceWith);
      }
    };
  };
  var replaceResultTransformer_default = replaceResultTransformer;

  // node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js
  var replaceSubstitutionTransformer = function replaceSubstitutionTransformer2(replaceWhat, replaceWith) {
    return {
      onSubstitution: function onSubstitution(substitution, resultSoFar) {
        if (replaceWhat == null || replaceWith == null) {
          throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");
        }
        if (substitution == null) {
          return substitution;
        } else {
          return substitution.toString().replace(replaceWhat, replaceWith);
        }
      }
    };
  };
  var replaceSubstitutionTransformer_default = replaceSubstitutionTransformer;

  // node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js
  var defaults = {
    separator: "",
    conjunction: "",
    serial: false
  };
  var inlineArrayTransformer = function inlineArrayTransformer2() {
    var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaults;
    return {
      onSubstitution: function onSubstitution(substitution, resultSoFar) {
        if (Array.isArray(substitution)) {
          var arrayLength = substitution.length;
          var separator = opts.separator;
          var conjunction = opts.conjunction;
          var serial = opts.serial;
          var indent = resultSoFar.match(/(\n?[^\S\n]+)$/);
          if (indent) {
            substitution = substitution.join(separator + indent[1]);
          } else {
            substitution = substitution.join(separator + " ");
          }
          if (conjunction && arrayLength > 1) {
            var separatorIndex = substitution.lastIndexOf(separator);
            substitution = substitution.slice(0, separatorIndex) + (serial ? separator : "") + " " + conjunction + substitution.slice(separatorIndex + 1);
          }
        }
        return substitution;
      }
    };
  };
  var inlineArrayTransformer_default = inlineArrayTransformer;

  // node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js
  var splitStringTransformer = function splitStringTransformer2(splitBy) {
    return {
      onSubstitution: function onSubstitution(substitution, resultSoFar) {
        if (splitBy != null && typeof splitBy === "string") {
          if (typeof substitution === "string" && substitution.includes(splitBy)) {
            substitution = substitution.split(splitBy);
          }
        } else {
          throw new Error("You need to specify a string character to split by.");
        }
        return substitution;
      }
    };
  };
  var splitStringTransformer_default = splitStringTransformer;

  // node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js
  var isValidValue = function isValidValue2(x) {
    return x != null && !Number.isNaN(x) && typeof x !== "boolean";
  };
  var removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer2() {
    return {
      onSubstitution: function onSubstitution(substitution) {
        if (Array.isArray(substitution)) {
          return substitution.filter(isValidValue);
        }
        if (isValidValue(substitution)) {
          return substitution;
        }
        return "";
      }
    };
  };
  var removeNonPrintingValuesTransformer_default = removeNonPrintingValuesTransformer;

  // node_modules/common-tags/es/commaLists/commaLists.js
  var commaLists = new TemplateTag_default(inlineArrayTransformer_default({ separator: "," }), stripIndentTransformer_default, trimResultTransformer_default);

  // node_modules/common-tags/es/commaListsAnd/commaListsAnd.js
  var commaListsAnd = new TemplateTag_default(inlineArrayTransformer_default({ separator: ",", conjunction: "and" }), stripIndentTransformer_default, trimResultTransformer_default);

  // node_modules/common-tags/es/commaListsOr/commaListsOr.js
  var commaListsOr = new TemplateTag_default(inlineArrayTransformer_default({ separator: ",", conjunction: "or" }), stripIndentTransformer_default, trimResultTransformer_default);

  // node_modules/common-tags/es/html/html.js
  var html = new TemplateTag_default(splitStringTransformer_default("\n"), removeNonPrintingValuesTransformer_default, inlineArrayTransformer_default, stripIndentTransformer_default, trimResultTransformer_default);

  // node_modules/common-tags/es/safeHtml/safeHtml.js
  var safeHtml = new TemplateTag_default(splitStringTransformer_default("\n"), inlineArrayTransformer_default, stripIndentTransformer_default, trimResultTransformer_default, replaceSubstitutionTransformer_default(/&/g, "&amp;"), replaceSubstitutionTransformer_default(/</g, "&lt;"), replaceSubstitutionTransformer_default(/>/g, "&gt;"), replaceSubstitutionTransformer_default(/"/g, "&quot;"), replaceSubstitutionTransformer_default(/'/g, "&#x27;"), replaceSubstitutionTransformer_default(/`/g, "&#x60;"));

  // node_modules/common-tags/es/oneLine/oneLine.js
  var oneLine = new TemplateTag_default(replaceResultTransformer_default(/(?:\n(?:\s*))+/g, " "), trimResultTransformer_default);

  // node_modules/common-tags/es/oneLineTrim/oneLineTrim.js
  var oneLineTrim = new TemplateTag_default(replaceResultTransformer_default(/(?:\n\s*)/g, ""), trimResultTransformer_default);

  // node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js
  var oneLineCommaLists = new TemplateTag_default(inlineArrayTransformer_default({ separator: "," }), replaceResultTransformer_default(/(?:\s+)/g, " "), trimResultTransformer_default);

  // node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js
  var oneLineCommaListsOr = new TemplateTag_default(inlineArrayTransformer_default({ separator: ",", conjunction: "or" }), replaceResultTransformer_default(/(?:\s+)/g, " "), trimResultTransformer_default);

  // node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js
  var oneLineCommaListsAnd = new TemplateTag_default(inlineArrayTransformer_default({ separator: ",", conjunction: "and" }), replaceResultTransformer_default(/(?:\s+)/g, " "), trimResultTransformer_default);

  // node_modules/common-tags/es/inlineLists/inlineLists.js
  var inlineLists = new TemplateTag_default(inlineArrayTransformer_default, stripIndentTransformer_default, trimResultTransformer_default);

  // node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js
  var oneLineInlineLists = new TemplateTag_default(inlineArrayTransformer_default, replaceResultTransformer_default(/(?:\s+)/g, " "), trimResultTransformer_default);

  // node_modules/common-tags/es/stripIndent/stripIndent.js
  var stripIndent = new TemplateTag_default(stripIndentTransformer_default, trimResultTransformer_default);

  // node_modules/common-tags/es/stripIndents/stripIndents.js
  var stripIndents = new TemplateTag_default(stripIndentTransformer_default("all"), trimResultTransformer_default);
  var stripIndents_default = stripIndents;

  // src/utils/newFile.ts
  var import_dayjs = __toESM(require_dayjs_min());

  // src/utils/types.ts
  var eventTypes = {
    activeFileChange: "fta-active-file-change",
    followActiveFileChange: "fjg-file-focus-follow-active-file-change",
    refreshView: "fta-refresh-view",
    revealFile: "fta-reveal-file",
    revealFolder: "fta-reveal-folder",
    vaultChange: "fta-vault-change",
    vaultChanges: "fjg-file-focus-vault-changes",
    createNewNote: "fta-create-new-note",
    openFocusPanel: "fjg-file-focus-open-panel"
  };

  // src/utils/newFile.ts
  var openFile = (props) => {
    const { file: file2, app: app3, newLeaf, leafBySplit } = props;
    let fileToOpen = app3.vault.getAbstractFileByPath(file2.path);
    if (!fileToOpen) return;
    let leaf2 = app3.workspace.getLeaf(newLeaf);
    if (leafBySplit) leaf2 = app3.workspace.createLeafBySplit(leaf2, "vertical");
    app3.workspace.setActiveLeaf(leaf2, {
      focus: true
    });
    leaf2.openFile(fileToOpen, { eState: { focus: true } });
  };
  var getFileCreateString = (params2) => {
    const { plugin: plugin2, fileName } = params2;
    return stripIndents_default`
    ${plugin2.settings.createdYaml ? `
        ---
        created: ${(0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DD hh:mm:ss")}
        ---
        ` : ""}
    ${plugin2.settings.fileNameIsHeader ? `# ${fileName}` : ""}
    `;
  };
  var createNewMarkdownFile = async (plugin2, folder2, newFileName, content) => {
    const newFile = await plugin2.app.fileManager.createNewMarkdownFile(folder2, newFileName);
    if (content && content !== "") await plugin2.app.vault.modify(newFile, content);
    openFile({ file: newFile, app: plugin2.app, newLeaf: false });
    let evt = new CustomEvent(eventTypes.activeFileChange, { detail: { filePath: newFile.path } });
    window.dispatchEvent(evt);
  };
  var openFileInNewTab = (app3, file2) => {
    openFile({ file: file2, app: app3, newLeaf: true });
  };
  var openFileInNewTabGroup = (app3, file2) => {
    openFile({ file: file2, app: app3, newLeaf: false, leafBySplit: true });
  };

  // src/modals.ts
  var ConfirmationModal = class extends Modal {
    constructor(plugin2, confirmationNote, callBackAfterConfirmation) {
      super(plugin2.app);
      this.confirmationNote = confirmationNote;
      this.callBackAfterConfirmation = callBackAfterConfirmation;
      this.plugin = plugin2;
    }
    onOpen() {
      let { contentEl } = this;
      let confirmationModal = this;
      const headerEl = contentEl.createEl("div", { text: this.confirmationNote });
      headerEl.addClass("modal-title");
      this.confirmButton = contentEl.createEl("button", { text: "Confirm" });
      const cancelButton = contentEl.createEl("button", { text: "Cancel" });
      cancelButton.style.cssText = "float: right;";
      cancelButton.addEventListener("click", () => {
        confirmationModal.close();
      });
      this.onConfirmClickAction = (e) => {
        this.callBackAfterConfirmation();
        this.close();
      };
      this.confirmButton.addEventListener("click", this.onConfirmClickAction);
    }
    onClose() {
      let { contentEl } = this;
      contentEl.empty();
      this.confirmButton.removeEventListener("click", this.onConfirmClickAction);
    }
  };
  var VaultChangeModal = class extends Modal {
    constructor(plugin2, file2, action) {
      super(plugin2.app);
      this.file = file2;
      this.action = action;
      this.plugin = plugin2;
    }
    onOpen() {
      let { contentEl } = this;
      let myModal = this;
      let headerText;
      if (this.action === "rename") {
        headerText = "Rename: Provide a New Name";
      } else if (this.action === "create folder") {
        headerText = "Create Folder: Provide Name";
      } else if (this.action === "create note") {
        headerText = "Create Note: Provide Name";
      }
      const headerEl = contentEl.createEl("div", { text: headerText });
      headerEl.addClass("modal-title");
      const inputEl = contentEl.createEl("input");
      inputEl.style.cssText = "width: 100%; height: 2.5em; margin-bottom: 15px;";
      if (this.action === "rename") {
        if (this.file.path.endsWith(".md")) {
          if (this.file instanceof TFolder || this.file instanceof TAbstractFile) {
            inputEl.value = this.file.name.substring(0, this.file.name.lastIndexOf("."));
          } else {
            inputEl.value = this.file.basename;
          }
        } else {
          if (this.file instanceof TFolder || this.file instanceof TAbstractFile) {
            inputEl.value = this.file.name;
          } else {
            inputEl.value = this.file.basename;
          }
        }
      } else if (this.action === "create note" || this.action === "create folder") {
        inputEl.value = "Untitled";
        inputEl.select();
      }
      inputEl.focus();
      let changeButtonText;
      if (this.action === "rename") {
        changeButtonText = "Change Name";
      } else if (this.action === "create folder") {
        changeButtonText = "Create Folder";
      } else if (this.action === "create note") {
        changeButtonText = "Create Note";
      }
      const changeButton = contentEl.createEl("button", { text: changeButtonText });
      const cancelButton = contentEl.createEl("button", { text: "Cancel" });
      cancelButton.style.cssText = "float: right;";
      cancelButton.addEventListener("click", () => {
        myModal.close();
      });
      const onClickAction = async () => {
        let newName = inputEl.value;
        if (this.action === "rename") {
          if (this.file.path.endsWith(".md")) {
            newName = newName + "." + this.file.path.slice(this.file.path.lastIndexOf(".") + 1);
          }
          if (this.file instanceof TFolder && this.plugin.settings.folderNote) {
            let folderNoteFile = this.app.vault.getAbstractFileByPath(this.file.path + "/" + this.file.name + ".md");
            if (folderNoteFile) this.app.fileManager.renameFile(folderNoteFile, this.file.path + "/" + newName + ".md");
          }
          this.app.fileManager.renameFile(
            this.file instanceof TFolder || this.file instanceof TAbstractFile ? this.file : this.plugin.app.vault.getAbstractFileByPath(this.file.path),
            this.file.parent.path + "/" + newName
          );
        } else if (this.action === "create folder") {
          this.app.vault.createFolder(this.file.path + "/" + newName);
        } else if (this.action === "create note") {
          await createNewMarkdownFile(
            this.plugin,
            this.file,
            newName,
            this.plugin.settings.createdYaml ? getFileCreateString({ plugin: this.plugin, fileName: newName }) : ""
          );
        }
        myModal.close();
      };
      changeButton.addEventListener("click", onClickAction);
      inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") onClickAction();
      });
    }
    onClose() {
      let { contentEl } = this;
      contentEl.empty();
    }
  };
  var MoveSuggestionModal = class extends FuzzySuggestModal {
    constructor(app3, fileOrFolderToMove) {
      super(app3);
      this.fileOrFolderToMove = fileOrFolderToMove;
    }
    getItemText(item) {
      return item.path;
    }
    getItems() {
      return getAllFoldersInVault(this.app);
    }
    onChooseItem(item, evt) {
      let fileToRename = this.app.vault.getAbstractFileByPath(item.path);
      if (fileToRename) {
        this.app.vault.rename(fileToRename, item.path + "/" + fileToRename.name);
      }
    }
  };
  function getAllFoldersInVault(app3) {
    let folders = [];
    let rootFolder = app3.vault.getRoot();
    folders.push(rootFolder);
    function recursiveFx(folder2) {
      for (let child2 of folder2.children) {
        if (child2 instanceof TFolder) {
          let childFolder = child2;
          folders.push(childFolder);
          if (childFolder.children) recursiveFx(childFolder);
        }
      }
    }
    recursiveFx(rootFolder);
    return folders;
  }

  // src/utils/Utils.ts
  var SUPPORTED_FILE_EXTENSIONS = /* @__PURE__ */ new Set([
    "base",
    // Obsidian Bases, including Universal Dashboard launchers.
    "pdf",
    "doc",
    "docx",
    "rtf",
    "txt",
    "odt",
    "ott",
    "pages",
    "xls",
    "xlsx",
    "xlsm",
    "xlt",
    "xltx",
    "csv",
    "tsv",
    "html",
    "htm",
    "xhtml",
    "mht",
    "mhtml",
    "jpg",
    "jpeg",
    "png",
    "md",
    "epub",
    "excalidraw"
  ]);
  var getFilesUnderPath = (params2) => {
    const { path, plugin: plugin2, getAllFiles, excludedExtensions: excludedExtensions2, excludedFolders: excludedFolders2 } = params2;
    var filesUnderPath = [];
    var showFilesFromSubFolders = getAllFiles ? true : plugin2.settings.showFilesFromSubFolders;
    var folderObj = plugin2.app.vault.getAbstractFileByPath(path);
    recursiveFx(folderObj, plugin2.app);
    function recursiveFx(folderObj2, app3) {
      if (folderObj2 instanceof TFolder && folderObj2.children) {
        for (let child2 of folderObj2.children) {
          if (child2 instanceof TFile) {
            if (shouldExcludeFile({ file: child2, plugin: plugin2, excludedExtensions: excludedExtensions2, excludedFolders: excludedFolders2 })) continue;
            filesUnderPath.push(TFile2OZFile(child2));
          }
          if (child2 instanceof TFolder && showFilesFromSubFolders) recursiveFx(child2, app3);
        }
      }
    }
    return filesUnderPath;
  };
  var shouldExcludeFile = (params2) => {
    const { file: file2, plugin: plugin2, excludedExtensions: excludedExtensions2 = [], excludedFolders: excludedFolders2 = [] } = params2;
    const extension = file2.extension.toLowerCase();
    if (plugin2.settings.showOnlySupportedFileTypes && !SUPPORTED_FILE_EXTENSIONS.has(extension)) return true;
    if (excludedExtensions2.map((excluded) => excluded.toLowerCase()).includes(extension)) return true;
    if (plugin2.settings.hideAttachments && file2.path.toLowerCase().includes(plugin2.settings.attachmentsFolderName.toLowerCase())) return true;
    if (isPathInExcludedFolder(file2.path, excludedFolders2)) return true;
    return false;
  };
  var settingListToArray = (value) => {
    return value.split(",").map((item) => item.trim()).filter(Boolean);
  };
  var isPathInExcludedFolder = (path, excludedFolders2) => {
    const normalizedPath = normalizeVaultPath(path);
    return excludedFolders2.some((folder2) => {
      const normalizedFolder = normalizeVaultPath(folder2);
      return normalizedFolder !== "" && (normalizedPath === normalizedFolder || normalizedPath.startsWith(`${normalizedFolder}/`));
    });
  };
  var normalizeVaultPath = (path) => {
    return path.replace(/^\/+|\/+$/g, "");
  };
  var rootFolderColorCache = /* @__PURE__ */ new WeakMap();
  var invalidateRootFolderColorCache = (plugin2) => {
    rootFolderColorCache.delete(plugin2);
  };
  var getColorfulFolderClassName = (folderPath, plugin2) => {
    if (!plugin2.settings.colorfulFolders) return "";
    const normalizedPath = normalizeVaultPath(folderPath);
    const pathParts = normalizedPath.split("/").filter(Boolean);
    if (pathParts.length === 0) return " oz-folder-colorful oz-folder-colorful-root oz-folder-colorful-0";
    const rootFolderName = pathParts[0];
    const colorIndex = getRootFolderColorIndex(rootFolderName, plugin2);
    const depthClass = pathParts.length === 1 ? "oz-folder-colorful-root" : "oz-folder-colorful-child";
    return ` oz-folder-colorful ${depthClass} oz-folder-colorful-${colorIndex}`;
  };
  var getColorfulFolderContentsClassName = (folderPath, plugin2) => {
    if (!plugin2.settings.colorfulFolders) return "";
    return ` oz-folder-contents-colorful ${getColorfulColorClassName(folderPath, plugin2)}`;
  };
  var getColorfulFileClassName = (file2, plugin2) => {
    if (!plugin2.settings.colorfulFolders) return "";
    return ` oz-file-colorful ${getColorfulColorClassName(file2.parent.path, plugin2)}`;
  };
  var getColorfulHeaderClassName = (folderPath, plugin2) => {
    if (!plugin2.settings.colorfulFolders) return "";
    return ` oz-file-tree-header-colorful ${getColorfulColorClassName(folderPath, plugin2)}`;
  };
  var getColorfulColorClassName = (folderPath, plugin2) => {
    const normalizedPath = normalizeVaultPath(folderPath);
    const pathParts = normalizedPath.split("/").filter(Boolean);
    if (pathParts.length === 0) return "oz-folder-colorful-0";
    const rootFolderName = pathParts[0];
    return `oz-folder-colorful-${getRootFolderColorIndex(rootFolderName, plugin2)}`;
  };
  var getRootFolderColorIndex = (rootFolderName, plugin2) => {
    let colorMap = rootFolderColorCache.get(plugin2);
    if (!colorMap) {
      colorMap = new Map(
        plugin2.app.vault.getRoot().children.filter((child2) => child2 instanceof TFolder).sort((a, b2) => a.name.localeCompare(b2.name, "en", { numeric: true })).map((folder2, index) => [folder2.name, index % 12])
      );
      rootFolderColorCache.set(plugin2, colorMap);
    }
    return colorMap.get(rootFolderName) ?? hashFolderName(rootFolderName) % 12;
  };
  var hashFolderName = (folderName) => {
    return folderName.split("").reduce((hash, character) => hash + character.charCodeAt(0), 0);
  };
  var TFile2OZFile = (t) => {
    return {
      path: t.path,
      basename: t.basename,
      extension: t.extension,
      stat: {
        mtime: t.stat.mtime,
        ctime: t.stat.ctime,
        size: t.stat.size
      },
      parent: {
        path: t.parent.path
      },
      isFolderNote: isFolderNote(t)
    };
  };
  var isFolderNote = (t) => {
    return t.extension === "md" && t.basename === t.parent.name;
  };
  var createFolderTree = (params2) => {
    const { startFolder, excludedFolders: excludedFolders2, plugin: plugin2, recursive: buildRecursively = true } = params2;
    let fileTree = { folder: startFolder, children: [] };
    function recursive(folder2, object) {
      if (!(folder2 && folder2.children)) return;
      for (let child2 of folder2.children) {
        if (child2 instanceof TFolder) {
          let childFolder = child2;
          if (shouldExcludeFolder(childFolder, plugin2, excludedFolders2)) continue;
          let newObj = { folder: childFolder, children: [] };
          object.children.push(newObj);
          if (buildRecursively && childFolder.children) recursive(childFolder, newObj);
        }
      }
    }
    recursive(startFolder, fileTree);
    return fileTree;
  };
  var shouldExcludeFolder = (folder2, plugin2, excludedFolders2) => plugin2.settings.hideAttachments && folder2.path.toLowerCase().includes(plugin2.settings.attachmentsFolderName.toLowerCase()) || excludedFolders2.length > 0 && isPathInExcludedFolder(folder2.path, excludedFolders2);
  var hasVisibleChildFolder = (folder2, plugin2, excludedFolders2) => folder2.children.some((child2) => child2 instanceof TFolder && !shouldExcludeFolder(child2, plugin2, excludedFolders2));
  var getFolderNoteCountMap = (plugin2) => {
    const counts = {};
    let files;
    if (plugin2.settings.folderCountOption === "notes") {
      files = plugin2.app.vault.getMarkdownFiles();
    } else {
      files = plugin2.app.vault.getFiles();
    }
    files = files.filter(
      (file2) => !shouldExcludeFile({
        file: file2,
        plugin: plugin2,
        excludedExtensions: settingListToArray(plugin2.settings.excludedExtensions),
        excludedFolders: settingListToArray(plugin2.settings.excludedFolders)
      })
    );
    if (plugin2.settings.folderNote) {
      files = files.filter((f2) => f2.extension !== "md" || f2.extension === "md" && f2.basename !== f2.parent.name);
    }
    files.forEach((file2) => {
      for (let folder2 = file2.parent; folder2 != null; folder2 = folder2.parent) {
        if (!counts[folder2.path]) counts[folder2.path] = { open: 0, closed: 0 };
        if (folder2 == file2.parent) counts[folder2.path].open = 1 + counts[folder2.path].open;
        counts[folder2.path].closed = 1 + counts[folder2.path].closed;
      }
    });
    return counts;
  };
  var getPathParts = (path) => {
    const parts = normalizeVaultPath(path).split("/").filter(Boolean);
    const fileName = parts.pop() || "";
    const extensionSeparator = fileName.lastIndexOf(".");
    const extension = extensionSeparator >= 0 ? fileName.slice(extensionSeparator + 1).toLowerCase() : "";
    const basename = extensionSeparator >= 0 ? fileName.slice(0, extensionSeparator) : fileName;
    return {
      basename,
      extension,
      parentName: parts[parts.length - 1] || "",
      parentPath: parts.join("/")
    };
  };
  var shouldCountFileAtPath = (plugin2, path) => {
    const { basename, extension, parentName } = getPathParts(path);
    const excludedExtensions2 = settingListToArray(plugin2.settings.excludedExtensions).map((item) => item.toLowerCase());
    const excludedFolders2 = settingListToArray(plugin2.settings.excludedFolders);
    if (plugin2.settings.folderCountOption === "notes" && extension !== "md") return false;
    if (plugin2.settings.showOnlySupportedFileTypes && !SUPPORTED_FILE_EXTENSIONS.has(extension)) return false;
    if (excludedExtensions2.includes(extension)) return false;
    if (plugin2.settings.hideAttachments && path.toLowerCase().includes(plugin2.settings.attachmentsFolderName.toLowerCase())) return false;
    if (isPathInExcludedFolder(path, excludedFolders2)) return false;
    if (plugin2.settings.folderNote && extension === "md" && basename === parentName) return false;
    return true;
  };
  var adjustFolderCountsForPath = (counts, path, delta) => {
    const { parentPath } = getPathParts(path);
    const ancestors = [];
    let currentPath = parentPath;
    while (true) {
      ancestors.push(currentPath === "" ? "/" : currentPath);
      if (currentPath === "") break;
      const separator = currentPath.lastIndexOf("/");
      currentPath = separator >= 0 ? currentPath.slice(0, separator) : "";
    }
    ancestors.forEach((folderPath, index) => {
      const current = counts[folderPath] || { open: 0, closed: 0 };
      const nextOpen = Math.max(0, current.open + (index === 0 ? delta : 0));
      const nextClosed = Math.max(0, current.closed + delta);
      if (nextOpen === 0 && nextClosed === 0) delete counts[folderPath];
      else counts[folderPath] = { open: nextOpen, closed: nextClosed };
    });
  };
  var updateFolderNoteCountMap = (params2) => {
    const { counts, plugin: plugin2, file: file2, changeType, oldPath } = params2;
    const nextCounts = { ...counts };
    if ((changeType === "delete" || changeType === "rename") && oldPath && shouldCountFileAtPath(plugin2, oldPath)) {
      adjustFolderCountsForPath(nextCounts, oldPath, -1);
    } else if (changeType === "delete" && shouldCountFileAtPath(plugin2, file2.path)) {
      adjustFolderCountsForPath(nextCounts, file2.path, -1);
    }
    if ((changeType === "create" || changeType === "rename") && shouldCountFileAtPath(plugin2, file2.path)) {
      adjustFolderCountsForPath(nextCounts, file2.path, 1);
    }
    return nextCounts;
  };
  var hasChildFolder = (folder2) => {
    let children = folder2.children;
    for (let child2 of children) {
      if (child2 instanceof TFolder) return true;
    }
    return false;
  };
  var getFileNameAndExtension = (fullName) => {
    var index = fullName.lastIndexOf(".");
    return {
      fileName: fullName.substring(0, index),
      extension: fullName.substring(index + 1)
    };
  };
  var getFolderName = (folderPath, app3) => {
    if (folderPath === "/") return app3.vault.getName();
    let index = folderPath.lastIndexOf("/");
    if (index !== -1) return folderPath.substring(index + 1);
    return folderPath;
  };
  var internalPluginLoaded = (pluginName, app3) => {
    return app3.internalPlugins.plugins[pluginName]?._loaded;
  };
  var pluginIsLoaded = (app3, pluginId) => {
    return app3.plugins.getPlugin(pluginId);
  };
  var createNewFile = async (e, folderPath, plugin2) => {
    let targetFolder = plugin2.app.vault.getAbstractFileByPath(folderPath);
    if (!targetFolder) return;
    let modal = new VaultChangeModal(plugin2, targetFolder, "create note");
    modal.open();
  };

  // src/components/Mobile/newFile.ts
  var import_dayjs2 = __toESM(require_dayjs_min());
  var openFile2 = async (props) => {
    const { file: file2, app: app3, newLeaf, leafBySplit } = props;
    const fileToOpen = app3.vault.getAbstractFileByPath(file2.path);
    if (!(fileToOpen instanceof TFile)) {
      new Notice("File not found.");
      return;
    }
    try {
      let leaf2;
      try {
        leaf2 = app3.workspace.getLeaf(newLeaf || app3.workspace.activeLeaf?.view?.getViewType() === "fjg-file-focus-view");
      } catch {
        new Notice("New tab unavailable; using the current tab.");
        leaf2 = app3.workspace.getLeaf(false);
      }
      if (leafBySplit) {
        if (Platform.isMobile) {
          new Notice("Opening in a new tab on mobile.");
          leaf2 = app3.workspace.getLeaf(true);
        } else {
          try {
            leaf2 = app3.workspace.createLeafBySplit(leaf2, "vertical");
          } catch {
            new Notice("Split unavailable; opening a new tab.");
            leaf2 = app3.workspace.getLeaf(true);
          }
        }
      }
      app3.workspace.setActiveLeaf(leaf2, { focus: true });
      try {
        await leaf2.openFile(fileToOpen, { eState: { focus: true, subpath: props.subpath } });
      } catch {
        new Notice("New tab unavailable; opening in the current tab.");
        await app3.workspace.getLeaf(false).openFile(fileToOpen);
      }
    } catch (error) {
      new Notice(`Could not open file: ${error instanceof Error ? error.message : String(error)}`);
    }
  };
  var getFileCreateString2 = (params2) => {
    const { plugin: plugin2, fileName } = params2;
    return stripIndents_default`
    ${plugin2.settings.createdYaml ? `
        ---
        created: ${(0, import_dayjs2.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DD hh:mm:ss")}
        ---
        ` : ""}
    ${plugin2.settings.fileNameIsHeader ? `# ${fileName}` : ""}
    `;
  };
  var createNewMarkdownFile2 = async (plugin2, folder2, newFileName, content) => {
    const newFile = await plugin2.app.fileManager.createNewMarkdownFile(folder2, newFileName);
    if (content && content !== "") await plugin2.app.vault.modify(newFile, content);
    openFile2({ file: newFile, app: plugin2.app, newLeaf: false });
    let evt = new CustomEvent(eventTypes.activeFileChange, { detail: { filePath: newFile.path } });
    window.dispatchEvent(evt);
  };
  var openFileInNewTab2 = (app3, file2) => {
    openFile2({ file: file2, app: app3, newLeaf: true });
  };
  var openFileInNewTabGroup2 = (app3, file2) => {
    openFile2({ file: file2, app: app3, newLeaf: false, leafBySplit: true });
  };

  // src/components/Mobile/modals.ts
  var ConfirmationModal2 = class extends Modal {
    constructor(plugin2, confirmationNote, callBackAfterConfirmation) {
      super(plugin2.app);
      this.modalEl.classList.add("ffm-modal");
      this.confirmationNote = confirmationNote;
      this.callBackAfterConfirmation = callBackAfterConfirmation;
      this.plugin = plugin2;
    }
    onOpen() {
      let { contentEl } = this;
      let confirmationModal = this;
      const headerEl = contentEl.createEl("div", { text: this.confirmationNote });
      headerEl.addClass("modal-title");
      this.confirmButton = contentEl.createEl("button", { text: "Confirm" });
      const cancelButton = contentEl.createEl("button", { text: "Cancel" });
      cancelButton.style.cssText = "float: right;";
      cancelButton.addEventListener("click", () => {
        confirmationModal.close();
      });
      this.onConfirmClickAction = (e) => {
        this.callBackAfterConfirmation();
        this.close();
      };
      this.confirmButton.addEventListener("click", this.onConfirmClickAction);
    }
    onClose() {
      let { contentEl } = this;
      contentEl.empty();
      this.confirmButton.removeEventListener("click", this.onConfirmClickAction);
    }
  };
  var VaultChangeModal2 = class extends Modal {
    constructor(plugin2, file2, action) {
      super(plugin2.app);
      this.modalEl.classList.add("ffm-modal");
      this.file = file2;
      this.action = action;
      this.plugin = plugin2;
    }
    onOpen() {
      let { contentEl } = this;
      let myModal = this;
      let headerText;
      if (this.action === "rename") {
        headerText = "Rename: Provide a New Name";
      } else if (this.action === "create folder") {
        headerText = "Create Folder: Provide Name";
      } else if (this.action === "create note") {
        headerText = "Create Note: Provide Name";
      }
      const headerEl = contentEl.createEl("div", { text: headerText });
      headerEl.addClass("modal-title");
      const inputEl = contentEl.createEl("input");
      inputEl.style.cssText = "width: 100%; height: 2.5em; margin-bottom: 15px;";
      if (this.action === "rename") {
        if (this.file.path.endsWith(".md")) {
          if (this.file instanceof TFolder || this.file instanceof TAbstractFile) {
            inputEl.value = this.file.name.substring(0, this.file.name.lastIndexOf("."));
          } else {
            inputEl.value = this.file.basename;
          }
        } else {
          if (this.file instanceof TFolder || this.file instanceof TAbstractFile) {
            inputEl.value = this.file.name;
          } else {
            inputEl.value = this.file.basename;
          }
        }
      } else if (this.action === "create note" || this.action === "create folder") {
        inputEl.value = "Untitled";
        inputEl.select();
      }
      inputEl.focus();
      let changeButtonText;
      if (this.action === "rename") {
        changeButtonText = "Change Name";
      } else if (this.action === "create folder") {
        changeButtonText = "Create Folder";
      } else if (this.action === "create note") {
        changeButtonText = "Create Note";
      }
      const changeButton = contentEl.createEl("button", { text: changeButtonText });
      const cancelButton = contentEl.createEl("button", { text: "Cancel" });
      cancelButton.style.cssText = "float: right;";
      cancelButton.addEventListener("click", () => {
        myModal.close();
      });
      const onClickAction = async () => {
        let newName = inputEl.value;
        if (this.action === "rename") {
          if (this.file.path.endsWith(".md")) {
            newName = newName + "." + this.file.path.slice(this.file.path.lastIndexOf(".") + 1);
          }
          if (this.file instanceof TFolder && this.plugin.settings.folderNote) {
            let folderNoteFile = this.app.vault.getAbstractFileByPath(this.file.path + "/" + this.file.name + ".md");
            if (folderNoteFile) this.app.fileManager.renameFile(folderNoteFile, this.file.path + "/" + newName + ".md");
          }
          this.app.fileManager.renameFile(
            this.file instanceof TFolder || this.file instanceof TAbstractFile ? this.file : this.plugin.app.vault.getAbstractFileByPath(this.file.path),
            this.file.parent.path + "/" + newName
          );
        } else if (this.action === "create folder") {
          this.app.vault.createFolder(this.file.path + "/" + newName);
        } else if (this.action === "create note") {
          await createNewMarkdownFile2(
            this.plugin,
            this.file,
            newName,
            this.plugin.settings.createdYaml ? getFileCreateString2({ plugin: this.plugin, fileName: newName }) : ""
          );
        }
        myModal.close();
      };
      changeButton.addEventListener("click", onClickAction);
      inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") onClickAction();
      });
    }
    onClose() {
      let { contentEl } = this;
      contentEl.empty();
    }
  };
  var MoveSuggestionModal2 = class extends FuzzySuggestModal {
    constructor(app3, fileOrFolderToMove) {
      super(app3);
      this.modalEl.classList.add("ffm-modal");
      this.fileOrFolderToMove = fileOrFolderToMove;
    }
    getItemText(item) {
      return item.path;
    }
    getItems() {
      return getAllFoldersInVault2(this.app);
    }
    onChooseItem(item, evt) {
      let fileToRename = this.app.vault.getAbstractFileByPath(item.path);
      if (fileToRename) {
        this.app.vault.rename(fileToRename, item.path + "/" + fileToRename.name);
      }
    }
  };
  function getAllFoldersInVault2(app3) {
    let folders = [];
    let rootFolder = app3.vault.getRoot();
    folders.push(rootFolder);
    function recursiveFx(folder2) {
      for (let child2 of folder2.children) {
        if (child2 instanceof TFolder) {
          let childFolder = child2;
          folders.push(childFolder);
          if (childFolder.children) recursiveFx(childFolder);
        }
      }
    }
    recursiveFx(rootFolder);
    return folders;
  }

  // src/components/Mobile/utils.ts
  var shouldExcludeFile2 = (params2) => {
    const normalized = { ...params2, excludedExtensions: (params2.excludedExtensions || []).map((value) => value.trim().replace(/^\./, "").toLowerCase()) };
    return ["py", "pyc"].includes(params2.file.extension.toLowerCase()) || shouldExcludeFile(normalized);
  };
  var getFilesUnderPath2 = (params2) => {
    const root2 = params2.path === "" || params2.path === "/";
    if (root2 && !params2.getAllFiles) {
      return params2.plugin.app.vault.getRoot().children.filter((file2) => file2 instanceof TFile).filter((file2) => !shouldExcludeFile2({ ...params2, file: file2 })).map(TFile2OZFile);
    }
    return getFilesUnderPath({ ...params2, excludedExtensions: [...params2.excludedExtensions.map((value) => value.trim().replace(/^\./, "").toLowerCase()), "py", "pyc"] });
  };
  var createNewFile2 = async (_event, folderPath, plugin2) => {
    const folder2 = plugin2.app.vault.getAbstractFileByPath(folderPath || "/");
    if (folder2 instanceof TFolder) new VaultChangeModal2(plugin2, folder2, "create note").open();
  };

  // src/components/Mobile/TreeComponent.tsx
  function Tree(props) {
    const [openFolders2, setOpenFolders] = Recoil_index_22(openFolders);
    const [folderFileCountMap2] = Recoil_index_22(folderFileCountMap);
    const [activeFolderPath2] = Recoil_index_22(activeFolderPath);
    const longPressEvents = useLongPress((e) => {
      props.onContextMenu(e);
    }, 500);
    const [open, setOpen] = (0, import_react7.useState)(props.open);
    const [highlight, setHightlight] = (0, import_react7.useState)(false);
    const isFolderActive = props.folder.path === activeFolderPath2;
    const colorfulFolderClassName = getColorfulFolderClassName(props.folder.path, props.plugin);
    const colorfulFolderContentsClassName = getColorfulFolderContentsClassName(props.folder.path, props.plugin);
    (0, import_react7.useEffect)(() => setOpen(props.open), [props.open]);
    const toggle = () => {
      if (props.children) {
        if (!open) {
          setOpenFolders([...openFolders2, props.folder.path]);
        } else {
          const newOpenFolders = openFolders2.filter((openFolder) => props.folder.path !== openFolder);
          setOpenFolders(newOpenFolders);
        }
        setOpen(!open);
      }
    };
    const onDrop = (files) => {
      files.map(async (file2) => {
        file2.arrayBuffer().then((arrayBuffer) => {
          props.plugin.app.vault.adapter.writeBinary(props.folder.path + "/" + file2.name, arrayBuffer);
        });
      });
    };
    const folderNameClickEvent = (ev) => {
      if (props.plugin.settings.folderNote && ev.shiftKey) {
        const fileFullPath = `${props.folder.path}/${props.folder.name}.md`;
        const folderNoteFile = props.plugin.app.vault.getAbstractFileByPath(fileFullPath);
        props.plugin.app.workspace.openLinkText(fileFullPath, "/", false);
      } else {
        props.onClick();
      }
    };
    const folderContextMenuEvent = (e) => {
      e.preventDefault();
      props.onContextMenu(e);
    };
    const folderNameDoubleClickEvent = (ev) => {
      setOpen(true);
      props.onDoubleClick();
    };
    const Icon = (0, import_react7.useMemo)(() => getFolderIcon(props.plugin, props.children, open), [open, props.children, props.plugin.settings.folderIcon]);
    const folderCount = folderFileCountMap2[props.folder.path];
    const dropFileOrFolder = (e) => {
      let data = e.dataTransfer.getData("application/json");
      if (data !== "") {
        let dataJson = JSON.parse(data);
        if (dataJson["filePath"]) {
          const filePath = dataJson.filePath;
          let file2 = props.plugin.app.vault.getAbstractFileByPath(filePath);
          if (file2) {
            props.plugin.app.vault.rename(file2, `${props.folder.path}/${file2.name}`);
          } else {
            new Notice("Couldnt find the file");
          }
        } else if (dataJson["folderPath"]) {
          const folderPath = dataJson.folderPath;
          let folder2 = props.plugin.app.vault.getAbstractFileByPath(folderPath);
          if (folder2) {
            if (!props.folder.path.startsWith(folder2.path)) {
              props.plugin.app.vault.rename(folder2, `${props.folder.path}/${folder2.name}`);
            } else {
              new Notice("You cant move folder under its child");
            }
          } else {
            new Notice("Couldnt find the folder");
          }
        }
      }
      setHightlight(false);
      e.dataTransfer.clearData();
    };
    const onFolderDragStart = (e, folder2) => {
      e.dataTransfer.setData("application/json", JSON.stringify({ folderPath: folder2.path }));
      let dragManager = props.plugin.app.dragManager;
      if (!dragManager?.dragFile || !dragManager?.onDragStart) {
        new Notice("Drag is unavailable. Use the folder menu to move this folder.");
        return;
      }
      const dragData = dragManager.dragFile(e.nativeEvent, folder2);
      dragManager.onDragStart(e.nativeEvent, dragData);
    };
    return /* @__PURE__ */ import_react7.default.createElement(
      es_default,
      {
        onDrop,
        noClick: true,
        onDragEnter: () => setHightlight(true),
        onDragLeave: () => setHightlight(false),
        onDropAccepted: () => setHightlight(false),
        onDropRejected: () => setHightlight(false)
      },
      ({ getRootProps, getInputProps }) => /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(
        "div",
        {
          style: { ...props.style },
          className: "oz-treeview",
          draggable: true,
          onDragStart: (e) => onFolderDragStart(e, props.folder),
          onDrop: (e) => dropFileOrFolder(e),
          onDragOver: () => setHightlight(true),
          onDragLeave: () => setHightlight(false)
        },
        /* @__PURE__ */ import_react7.default.createElement(
          "div",
          {
            ...getRootProps({ className: "dropzone" }),
            className: "oz-folder-element" + colorfulFolderClassName + (highlight ? " drag-entered" : "") + (isFolderActive ? " is-folder-active" : ""),
            "data-path": props.folder.path
          },
          /* @__PURE__ */ import_react7.default.createElement("input", { ...getInputProps() }),
          /* @__PURE__ */ import_react7.default.createElement("div", { className: "oz-folder-line" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "oz-icon-div", role: "button", tabIndex: 0, "aria-label": `Expand or collapse ${props.folder.name}`, "aria-expanded": open, onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggle();
            }
          } }, /* @__PURE__ */ import_react7.default.createElement(Icon, { className: "oz-folder-toggle", style: { opacity: props.children ? 1 : 0.3 }, onClick: toggle })), /* @__PURE__ */ import_react7.default.createElement(
            "div",
            {
              className: "oz-folder-block",
              role: "button",
              tabIndex: 0,
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  props.onClick();
                }
              },
              onClick: folderNameClickEvent,
              onDoubleClick: folderNameDoubleClickEvent,
              onContextMenu: folderContextMenuEvent,
              ...longPressEvents
            },
            /* @__PURE__ */ import_react7.default.createElement("div", { className: "oz-folder-type", style: { marginRight: props.type ? 10 : 0 } }, props.type),
            /* @__PURE__ */ import_react7.default.createElement(
              "div",
              {
                className: `oz-folder-name ${isFolderActive ? "is-folder-active" : ""}${props.isRootFolder ? " is-root-folder" : ""}`
              },
              props.content,
              " ",
              props.plugin.settings.folderNote && props.folder.children.some((f2) => f2.name === `${props.folder.name}.md`) ? /* @__PURE__ */ import_react7.default.createElement(IoMdArrowDropright, { size: 10, className: "oz-folder-note-icon" }) : ""
            ),
            props.plugin.settings.folderCount && /* @__PURE__ */ import_react7.default.createElement("div", { className: "oz-folder-count" }, /* @__PURE__ */ import_react7.default.createElement("span", { className: "oz-nav-file-tag" }, folderCount ? open ? folderCount.open : folderCount.closed : 0))
          ))
        )
      ), props.children && /* @__PURE__ */ import_react7.default.createElement(
        "div",
        {
          className: "oz-folder-contents" + colorfulFolderContentsClassName,
          style: {
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
            display: open ? "inherit" : "none"
          }
        },
        props.children
      ))
    );
  }

  // src/components/FolderView/ConditionalWrapper.tsx
  var ConditionalRootFolderWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;
  var ConditionalWrapper_default = ConditionalRootFolderWrapper;

  // src/components/Mobile/NestedFolders.tsx
  var import_react8 = __toESM(require_react());
  function NestedFolders(props) {
    const plugin2 = props.plugin;
    const app3 = plugin2.app;
    let rootFolder = app3.vault.getRoot();
    const [openFolders2] = Recoil_index_22(openFolders);
    const [activeFolderPath2, setActiveFolderPath] = Recoil_index_22(activeFolderPath);
    const [excludedFolders2, setExcludedFolders] = Recoil_index_22(excludedFolders);
    const [focusedFolder2, setFocusedFolder] = Recoil_index_22(focusedFolder);
    const [folderFileCountMap2] = Recoil_index_22(folderFileCountMap);
    const [_view, setView] = Recoil_index_22(view);
    const handleFolderNameClick = (folderPath) => {
      setActiveFolderPath(folderPath);
      window.dispatchEvent(new CustomEvent(FOLDER_SELECTED, { detail: app3.vault.getAbstractFileByPath(folderPath) }));
    };
    const focusOnFolder = (folder2) => {
      setFocusedFolder(folder2);
      setActiveFolderPath(folder2.path);
    };
    const getSortedFolderTree = (folderTree2) => {
      let newTree = [...folderTree2];
      newTree = newTree.sort((a, b2) => {
        if (plugin2.settings.sortFoldersBy === "name") {
          return a.folder.name.localeCompare(b2.folder.name, "en", { numeric: true });
        } else if (plugin2.settings.sortFoldersBy === "item-number") {
          let aCount = folderFileCountMap2[a.folder.path] ? folderFileCountMap2[a.folder.path].closed : 0;
          let bCount = folderFileCountMap2[b2.folder.path] ? folderFileCountMap2[b2.folder.path].closed : 0;
          return bCount - aCount;
        }
      });
      return newTree;
    };
    const handleFolderContextMenu = (params2) => {
      let { event, folder: folder2 } = params2;
      let e = event;
      if (event === void 0) e = window.event;
      const folderMenu = new Menu();
      if (hasChildFolder(folder2)) {
        folderMenu.addItem((menuItem) => {
          menuItem.setTitle("Focus on Folder").setIcon("zoomInIcon").onClick(() => focusOnFolder(folder2));
        });
      }
      if (!focusedFolder2.isRoot()) {
        folderMenu.addItem((menuItem) => {
          menuItem.setTitle("Focus Back to Root").setIcon("zoomOutIcon").onClick(() => focusOnFolder(rootFolder));
        });
      }
      folderMenu.addItem((menuItem) => {
        menuItem.setTitle("New Folder").setIcon("folder").onClick((ev) => {
          let vaultChangeModal = new VaultChangeModal2(plugin2, folder2, "create folder");
          vaultChangeModal.open();
        });
      });
      folderMenu.addItem((menuItem) => {
        menuItem.setTitle("Delete").setIcon("trash").onClick((ev) => {
          let confirmationModal = new ConfirmationModal2(
            plugin2,
            `Are you sure you want to delete folder "${folder2.name}" and all folders & files under it?`,
            () => {
              let deleteOption = plugin2.settings.deleteFileOption;
              if (deleteOption === "permanent") {
                plugin2.app.vault.delete(folder2, true);
              } else if (deleteOption === "system-trash") {
                trashWithFallback(plugin2.app, folder2, true);
              } else if (deleteOption === "trash") {
                trashWithFallback(plugin2.app, folder2, false);
              }
              if (activeFolderPath2 === folder2.path) {
                setActiveFolderPath("");
                setView("folder");
              }
            }
          );
          confirmationModal.open();
        });
      });
      folderMenu.addItem((menuItem) => {
        menuItem.setTitle("Rename").setIcon("pencil").onClick((ev) => {
          let vaultChangeModal = new VaultChangeModal2(plugin2, folder2, "rename");
          vaultChangeModal.open();
        });
      });
      folderMenu.addItem((menuItem) => {
        menuItem.setTitle("New File").setIcon("document").onClick((ev) => {
          createNewFile2(ev, folder2.path, plugin2);
        });
      });
      {
        folderMenu.addItem((menuItem) => {
          menuItem.setTitle("Move folder to...").setIcon("paper-plane").onClick((ev) => {
            let folderMoveModal = new MoveSuggestionModal2(app3, folder2);
            folderMoveModal.open();
          });
        });
      }
      folderMenu.addItem((menuItem) => {
        menuItem.setTitle("Add to Excluded Folders").setIcon("switch").onClick((ev) => {
          setExcludedFolders([...excludedFolders2, folder2.path]);
        });
      });
      const folderNotePath = `${folder2.path}/${folder2.name}.md`;
      let folderNoteExists = folder2.children.some((f2) => `${folder2.name}.md` === f2.name);
      if (folderNoteExists) {
        folderMenu.addItem((menuItem) => {
          menuItem.setTitle("Open Folder Note").setIcon("go-to-file").onClick((ev) => {
            const note = plugin2.app.vault.getAbstractFileByPath(folderNotePath);
            if (note) openFile2({ file: TFile2OZFile(note), app: plugin2.app, newLeaf: false });
          });
        });
      }
      if (!pluginIsLoaded(plugin2.app, "folder-note-core")) {
        if (folderNoteExists) {
          folderMenu.addItem((menuItem) => {
            menuItem.setTitle("Delete Folder Note").setIcon("trash").onClick((ev) => {
              const folderNoteFile = plugin2.app.vault.getAbstractFileByPath(folderNotePath);
              if (folderNoteFile) new ConfirmationModal2(plugin2, `Delete folder note ${folderNoteFile.name}?`, () => plugin2.settings.deleteFileOption === "permanent" ? plugin2.app.vault.delete(folderNoteFile, true).catch((error) => new Notice(`Delete failed: ${error.message}`)) : trashWithFallback(plugin2.app, folderNoteFile, plugin2.settings.deleteFileOption === "system-trash")).open();
            });
          });
        } else {
          folderMenu.addItem((menuItem) => {
            menuItem.setTitle("Create Folder Note").setIcon("create-new").onClick(async (ev) => {
              createNewMarkdownFile2(plugin2, folder2, folder2.name, `# ${folder2.name}`);
            });
          });
        }
      }
      app3.workspace.trigger("file-menu", folderMenu, folder2, "file-explorer");
      if (e instanceof MouseEvent) {
        folderMenu.showAtPosition(menuPosition(e));
      } else {
        folderMenu.showAtPosition(menuPosition(e));
      }
      return false;
    };
    if (!props.folderTree.children) return null;
    let sortedFolderTree = (0, import_react8.useMemo)(
      () => getSortedFolderTree(props.folderTree.children),
      [props.folderTree.children, excludedFolders2, plugin2.settings.sortFoldersBy]
    );
    return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, Array.isArray(props.folderTree.children) && sortedFolderTree.map((child2) => {
      const isOpen = openFolders2.contains(child2.folder.path);
      const hasChildFolders = plugin2.isMobilePerformanceModeEnabled() ? hasVisibleChildFolder(child2.folder, plugin2, excludedFolders2) : child2.children.length > 0;
      const nestedFolderTree = plugin2.isMobilePerformanceModeEnabled() && isOpen ? createFolderTree({
        startFolder: child2.folder,
        plugin: plugin2,
        excludedFolders: excludedFolders2,
        recursive: false
      }) : child2;
      return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, { key: child2.folder.path }, hasChildFolders ? /* @__PURE__ */ import_react8.default.createElement(
        Tree,
        {
          plugin: plugin2,
          content: child2.folder.name,
          open: isOpen,
          onClick: () => handleFolderNameClick(child2.folder.path),
          onDoubleClick: () => focusOnFolder(child2.folder),
          onContextMenu: (e) => handleFolderContextMenu({
            event: e,
            folder: child2.folder
          }),
          folder: child2.folder
        },
        (!plugin2.isMobilePerformanceModeEnabled() || isOpen) && /* @__PURE__ */ import_react8.default.createElement(NestedFolders, { plugin: plugin2, folderTree: nestedFolderTree })
      ) : /* @__PURE__ */ import_react8.default.createElement(
        Tree,
        {
          plugin: plugin2,
          content: child2.folder.name,
          onClick: () => handleFolderNameClick(child2.folder.path),
          onDoubleClick: () => focusOnFolder(child2.folder),
          onContextMenu: (e) => handleFolderContextMenu({
            event: e,
            folder: child2.folder
          }),
          folder: child2.folder
        }
      ));
    }));
  }

  // src/hooks/ForceUpdate.tsx
  var import_react9 = __toESM(require_react());
  function useForceUpdate() {
    const [value, setValue] = (0, import_react9.useState)(0);
    return () => setValue((value2) => value2 + 1);
  }

  // src/components/Mobile/MobileFolder.tsx
  var OMNISEARCH_COMMAND_ID = "omnisearch:show-modal";
  var VAULT_CONTROL_CENTER_COMMAND_ID = "vault-control-center:open-vault-control-center";
  var FJG_TASK_MANAGER_COMMAND_ID = "fjg-task-manager:open-dashboard";
  var AGENDA_CENTER_COMMAND_ID = "agenda-capture:open-agenda-center";
  var AI_TASK_TAGGER_PLUGIN_ID = "ai-task-tagger";
  function ToolbarButton({ label, onClick, children, active = false, disabled = false, pressed, className = "" }) {
    return /* @__PURE__ */ import_react10.default.createElement(
      "button",
      {
        type: "button",
        className: `oz-nav-action-button${active ? " is-active" : ""}${className ? ` ${className}` : ""}`,
        "aria-label": label,
        "aria-pressed": pressed,
        title: label,
        disabled,
        onClick
      },
      children
    );
  }
  function MainFolder(props) {
    const treeStyles = { color: "var(--text-muted)", fill: "#c16ff7", width: "100%" };
    const plugin2 = props.plugin;
    const app3 = plugin2.app;
    const rootFolder = app3.vault.getRoot();
    const [activeFolderPath2, setActiveFolderPath] = Recoil_index_22(activeFolderPath);
    const [view2, setView] = Recoil_index_22(view);
    const [folderTree2] = Recoil_index_22(folderTree);
    const [focusedFolder2, setFocusedFolder] = Recoil_index_22(focusedFolder);
    const [_openFolders, setOpenFolders] = Recoil_index_22(openFolders);
    const [activeOzFile] = Recoil_index_22(activeOZFile);
    const [followActiveFile, setFollowActiveFile] = import_react10.default.useState(plugin2.settings.followActiveFile);
    import_react10.default.useEffect(() => {
      const handleFollowActiveFileChange = (event) => {
        setFollowActiveFile(event.detail.value);
      };
      window.addEventListener(eventTypes.followActiveFileChange, handleFollowActiveFileChange);
      return () => window.removeEventListener(eventTypes.followActiveFileChange, handleFollowActiveFileChange);
    }, []);
    const forceUpdate = useForceUpdate();
    const focusOnFolder = (folder2) => {
      setFocusedFolder(folder2);
      setActiveFolderPath(folder2.path);
    };
    const openFocusPanel = (panel) => {
      setView(panel);
    };
    const toggleFollowActiveFile = () => {
      void plugin2.setFollowActiveFile(!followActiveFile);
    };
    const createFolder = (underFolder) => {
      let vaultChangeModal = new VaultChangeModal2(plugin2, underFolder, "create folder");
      vaultChangeModal.open();
    };
    const createFolderInCurrentFolder = () => {
      const activeFolder = activeFolderPath2 ? app3.vault.getAbstractFileByPath(activeFolderPath2) : null;
      if (activeFolder instanceof TFolder) {
        createFolder(activeFolder);
        return;
      }
      createFolder(focusedFolder2 instanceof TFolder ? focusedFolder2 : rootFolder);
    };
    const getSelectedFolder = () => {
      const activeFolder = activeFolderPath2 ? app3.vault.getAbstractFileByPath(activeFolderPath2) : null;
      if (activeFolder instanceof TFolder) return activeFolder;
      if (focusedFolder2 instanceof TFolder) return focusedFolder2;
      return rootFolder;
    };
    const openVaultControlCenter = async () => {
      const commands = app3.commands;
      if (!commands?.executeCommandById?.(VAULT_CONTROL_CENTER_COMMAND_ID)) {
        new Notice("Enable or install the Vault Control Center plugin to use this home button.");
      }
    };
    const openTaskManagerDashboard = () => {
      const commands = app3.commands;
      if (!commands?.commands?.[FJG_TASK_MANAGER_COMMAND_ID] || !commands?.executeCommandById) {
        new Notice("Enable or update FJG Task Manager to open the Task Dashboard.");
        return;
      }
      commands.executeCommandById(FJG_TASK_MANAGER_COMMAND_ID);
    };
    const openAgendaCenter = () => {
      const commands = app3.commands;
      if (!commands?.commands?.[AGENDA_CENTER_COMMAND_ID] || !commands?.executeCommandById) {
        new Notice("Enable or update Agenda Capture to open the Agenda Center.");
        return;
      }
      commands.executeCommandById(AGENDA_CENTER_COMMAND_ID);
    };
    const openUniversalDashboard = () => {
      const dashboard = app3.plugins?.getPlugin?.("universal-use-dashboard");
      if (!dashboard?.openDashboard) {
        new Notice("Enable FJG Universal Dashboard to open the selected folder as a dashboard.");
        return;
      }
      void dashboard.openDashboard(getSelectedFolder()).catch((error) => new Notice(error.message));
    };
    const reviewSelectedFolderTags = () => {
      const aiTaskTagger = app3.plugins?.getPlugin?.(AI_TASK_TAGGER_PLUGIN_ID);
      if (!aiTaskTagger?.openFolderBatch) {
        new Notice("Enable or update AI Task Tagger to review tags for the selected folder.");
        return;
      }
      aiTaskTagger.openFolderBatch(getSelectedFolder());
    };
    const handleRootFolderContextMenu = (event, folder2) => {
      let e = event;
      if (event === void 0) e = window.event;
      const folderMenu = new Menu();
      folderMenu.addItem((menuItem) => {
        menuItem.setTitle("New Folder").setIcon("folder").onClick((ev) => createFolder(folder2));
      });
      if (!props.adaptive && !folder2.isRoot()) {
        folderMenu.addItem((menuItem) => {
          menuItem.setTitle("Focus Back to Root").setIcon("zoomOutDoubleIcon").onClick(() => focusOnFolder(rootFolder));
        });
      }
      if (!props.adaptive && folder2.parent && !folder2.parent.isRoot() && folder2.parent !== focusedFolder2) {
        folderMenu.addItem((menuItem) => {
          menuItem.setTitle("Focus to Parent Folder").setIcon("zoomOutIcon").onClick(() => focusOnFolder(folder2.parent));
        });
      }
      app3.workspace.trigger("root-folder-menu", folderMenu, folder2);
      folderMenu.showAtPosition(menuPosition(e));
      return false;
    };
    const collapseAllFolders = () => setOpenFolders([]);
    const explandAllFolders = () => {
      let newOpenFolders = [];
      const treeToExpand = plugin2.isMobilePerformanceModeEnabled() ? createFolderTree({
        startFolder: focusedFolder2,
        plugin: plugin2,
        excludedFolders: settingListToArray(plugin2.settings.excludedFolders),
        recursive: true
      }) : folderTree2;
      if (!treeToExpand) return;
      newOpenFolders.push(treeToExpand.folder.path);
      const recursiveFx = (folderTreeChildren) => {
        for (let folderTreeChild of folderTreeChildren) {
          newOpenFolders.push(folderTreeChild.folder.path);
          if (folderTreeChild.children.length > 0) {
            recursiveFx(folderTreeChild.children);
          }
        }
      };
      recursiveFx(treeToExpand.children);
      setOpenFolders(newOpenFolders);
    };
    const triggerFolderSortOptions = (e) => {
      const sortMenu = new Menu();
      const changeSortSettingTo = (newValue) => {
        plugin2.settings.sortFoldersBy = newValue;
        plugin2.saveSettings();
        forceUpdate();
      };
      sortMenu.addItem((menuItem) => {
        menuItem.setTitle("Folder Name (A to Z)");
        menuItem.onClick((ev) => {
          changeSortSettingTo("name");
        });
      });
      if (plugin2.settings.folderCount) {
        sortMenu.addItem((menuItem) => {
          menuItem.setTitle("Item Numbers (Bigger to Smaller)");
          menuItem.onClick((ev) => {
            changeSortSettingTo("item-number");
          });
        });
      }
      plugin2.app.workspace.trigger("sort-menu", sortMenu);
      sortMenu.showAtPosition(menuPosition(e));
      return false;
    };
    const openOmnisearch = () => {
      const commands = plugin2.app.commands;
      if (!commands?.commands?.[OMNISEARCH_COMMAND_ID] || !commands?.executeCommandById) {
        new Notice("Omnisearch command is not available.");
        return;
      }
      commands.executeCommandById(OMNISEARCH_COMMAND_ID);
    };
    const copySelectedVaultFolderPath = async () => {
      const activeFile = plugin2.app.workspace.getActiveFile();
      const folderPath = activeOzFile?.parent?.path || activeFile?.parent?.path || activeFolderPath2;
      if (!folderPath) {
        new Notice("Select a note first.");
        return;
      }
      const copyPath = folderPath === "/" ? "/" : folderPath;
      try {
        await navigator.clipboard.writeText(copyPath);
        new Notice(`Copied folder path: ${copyPath}`);
      } catch (error) {
        new Notice(`Could not copy folder path: ${error instanceof Error ? error.message : String(error)}`);
      }
    };
    const handleFolderNameDoubleClick = (folder2) => {
      if (!folder2.isRoot()) focusOnFolder(folder2.parent);
    };
    if (props.actionsRef) props.actionsRef.current = [
      { id: "home", title: "Open Vault Control Center", run: openVaultControlCenter },
      { id: "brief", title: "Open Inbox Morning Brief", run: () => plugin2.openInboxMorningBrief() },
      { id: "tasks", title: "Open FJG Task Manager Dashboard", run: openTaskManagerDashboard },
      { id: "agenda", title: "Open Agenda Center", run: openAgendaCenter },
      { id: "voice", title: "Talk to your vault", run: () => plugin2.openVaultVoice({ folder: getSelectedFolder().path, note: activeOzFile?.path || "" }) },
      { id: "dashboard", title: "Open selected folder dashboard", run: openUniversalDashboard },
      { id: "new-folder", title: "New Folder", run: createFolderInCurrentFolder },
      { id: "folder-tags", title: "Review Selected Folder Tags with AI", run: reviewSelectedFolderTags },
      { id: "folder-navigator", title: "Open Folder Navigator", run: () => {
        const commands = app3.commands;
        const id = "fjg-note-navigator-toolbar:open-folder-navigator";
        if (!commands?.commands?.[id] || !commands?.executeCommandById) {
          new Notice("Enable FJG Note Navigator Toolbar to open Folder Navigator.");
          return;
        }
        return commands.executeCommandById(id);
      } },
      { id: "omnisearch", title: "Open Omnisearch", run: openOmnisearch },
      { id: "follow", title: `Follow active note: ${followActiveFile ? "on" : "off"}`, run: () => Platform.isMobile ? new Notice("Follow active note is desktop-only. Use Reveal Active File from the command palette.") : toggleFollowActiveFile() },
      { id: "folder-sort", title: "Folder sorting options", run: triggerFolderSortOptions },
      { id: "folder-path", title: "Copy Selected Note Folder Path", run: copySelectedVaultFolderPath },
      { id: "collapse", title: "Collapse all folders", run: collapseAllFolders },
      { id: "expand", title: "Expand all folders", run: explandAllFolders }
    ];
    return /* @__PURE__ */ import_react10.default.createElement("div", { className: "oz-folders-tree-wrapper" }, !props.adaptive && /* @__PURE__ */ import_react10.default.createElement("div", { className: "oz-folders-action-items file-tree-header-fixed" }, /* @__PURE__ */ import_react10.default.createElement(ToolbarButton, { label: "Open Vault Control Center", onClick: () => void openVaultControlCenter() }, /* @__PURE__ */ import_react10.default.createElement(FaHome, null)), /* @__PURE__ */ import_react10.default.createElement(
      ToolbarButton,
      {
        label: "Open Inbox Morning Brief",
        onClick: () => {
          void plugin2.openInboxMorningBrief();
        }
      },
      /* @__PURE__ */ import_react10.default.createElement(SunriseIcon, null)
    ), /* @__PURE__ */ import_react10.default.createElement(ToolbarButton, { label: "Open FJG Task Manager Dashboard", onClick: openTaskManagerDashboard }, /* @__PURE__ */ import_react10.default.createElement(LuListChecks, null)), /* @__PURE__ */ import_react10.default.createElement(ToolbarButton, { label: "Open Agenda Center", onClick: openAgendaCenter, className: "fjg-agenda-center-button" }, /* @__PURE__ */ import_react10.default.createElement(MdEventNote, null)), /* @__PURE__ */ import_react10.default.createElement(
      ToolbarButton,
      {
        label: "Talk to your vault with GPT-Live",
        className: "fjg-vault-voice-button",
        onClick: () => plugin2.openVaultVoice({ folder: getSelectedFolder().path, note: activeOzFile?.path || "" })
      },
      /* @__PURE__ */ import_react10.default.createElement(LuMic, { "aria-hidden": "true" })
    ), /* @__PURE__ */ import_react10.default.createElement(ToolbarButton, { label: "Open selected folder dashboard", onClick: openUniversalDashboard }, /* @__PURE__ */ import_react10.default.createElement(LuLayoutDashboard, null)), /* @__PURE__ */ import_react10.default.createElement(ToolbarButton, { label: "Create Folder in Current Folder", onClick: () => createFolderInCurrentFolder() }, /* @__PURE__ */ import_react10.default.createElement(MdOutlineCreateNewFolder, null)), /* @__PURE__ */ import_react10.default.createElement(ToolbarButton, { label: "Review Selected Folder Tags with AI", onClick: reviewSelectedFolderTags }, /* @__PURE__ */ import_react10.default.createElement(FaTags, null)), /* @__PURE__ */ import_react10.default.createElement(ToolbarButton, { label: "Open Omnisearch", onClick: openOmnisearch }, /* @__PURE__ */ import_react10.default.createElement(IoIosSearch, null)), /* @__PURE__ */ import_react10.default.createElement(
      ToolbarButton,
      {
        label: Platform.isMobile ? "Follow active note is available on desktop" : `Follow active note: ${followActiveFile ? "on" : "off"}`,
        onClick: toggleFollowActiveFile,
        active: followActiveFile,
        pressed: followActiveFile,
        disabled: Platform.isMobile,
        className: "fjg-follow-active-note-button"
      },
      /* @__PURE__ */ import_react10.default.createElement(BiCurrentLocation, null)
    ), /* @__PURE__ */ import_react10.default.createElement(ToolbarButton, { label: "Sorting Options", onClick: triggerFolderSortOptions }, /* @__PURE__ */ import_react10.default.createElement(CgSortAz, null)), /* @__PURE__ */ import_react10.default.createElement(ToolbarButton, { label: "Recent Notes", onClick: () => openFocusPanel("recent"), active: view2 === "recent" }, /* @__PURE__ */ import_react10.default.createElement(FaHistory, null)), /* @__PURE__ */ import_react10.default.createElement(ToolbarButton, { label: "Bookmarks", onClick: () => openFocusPanel("bookmarks"), active: view2 === "bookmarks" }, /* @__PURE__ */ import_react10.default.createElement(FaRegBookmark, null)), /* @__PURE__ */ import_react10.default.createElement(ToolbarButton, { label: "Copy Selected Note Folder Path", onClick: () => void copySelectedVaultFolderPath() }, /* @__PURE__ */ import_react10.default.createElement(BiCopy, null)), /* @__PURE__ */ import_react10.default.createElement(ToolbarButton, { label: "Collapse Folders", onClick: collapseAllFolders }, /* @__PURE__ */ import_react10.default.createElement(CgChevronDoubleUp, null)), /* @__PURE__ */ import_react10.default.createElement(ToolbarButton, { label: "Expand Folders", onClick: explandAllFolders }, /* @__PURE__ */ import_react10.default.createElement(CgChevronDoubleDown, null))), /* @__PURE__ */ import_react10.default.createElement(
      ConditionalWrapper_default,
      {
        condition: focusedFolder2 && !focusedFolder2.isRoot() || focusedFolder2 && focusedFolder2.isRoot && plugin2.settings.showRootFolder,
        wrapper: (children) => {
          return /* @__PURE__ */ import_react10.default.createElement(
            Tree,
            {
              plugin: plugin2,
              content: focusedFolder2.isRoot() ? plugin2.app.vault.getName() : focusedFolder2.name,
              open: true,
              isRootFolder: focusedFolder2.isRoot(),
              style: treeStyles,
              onClick: () => {
                setActiveFolderPath(focusedFolder2.path);
                window.dispatchEvent(new CustomEvent(FOLDER_SELECTED, { detail: focusedFolder2 }));
              },
              onDoubleClick: () => handleFolderNameDoubleClick(focusedFolder2),
              folder: focusedFolder2,
              onContextMenu: (e) => handleRootFolderContextMenu(e, focusedFolder2)
            },
            children
          );
        }
      },
      folderTree2 && /* @__PURE__ */ import_react10.default.createElement(NestedFolders, { plugin: plugin2, folderTree: folderTree2 })
    ));
  }

  // src/components/Mobile/MobileFiles.tsx
  var import_react12 = __toESM(require_react());

  // src/components/Mobile/fileHandlers.ts
  var handleOnDropFiles = (params2) => {
    let { files, activeFolderPath: activeFolderPath2, plugin: plugin2 } = params2;
    files.map(async (file2) => {
      file2.arrayBuffer().then((arrayBuffer) => {
        plugin2.app.vault.adapter.writeBinary(activeFolderPath2 + "/" + file2.name, arrayBuffer);
      });
    });
  };
  var getFilesWithName = (params2) => {
    let { searchPhrase, searchFolder, plugin: plugin2, getAllFiles, excludedExtensions: excludedExtensions2, excludedFolders: excludedFolders2 } = params2;
    var files = getFilesUnderPath2({
      path: searchFolder,
      plugin: plugin2,
      excludedExtensions: excludedExtensions2,
      excludedFolders: excludedFolders2,
      getAllFiles
    });
    var filteredFiles = files.filter((file2) => file2.basename.toLowerCase().includes(searchPhrase.toLowerCase().trimStart()));
    return filteredFiles;
  };
  var getFileTags = (params2) => {
    let { f: f2, plugin: plugin2 } = params2;
    let mdFile = plugin2.app.vault.getAbstractFileByPath(f2.path);
    if (!mdFile) return [];
    let fileCache = plugin2.app.metadataCache.getFileCache(mdFile) || {};
    let fileTags = [];
    if (fileCache.tags) {
      for (let fileTag of fileCache.tags) {
        fileTags.push(fileTag.tag);
      }
    }
    if (fileCache.frontmatter && fileCache.frontmatter["tags"]) {
      let tagsFM = fileCache.frontmatter["tags"];
      if (typeof tagsFM === "string") {
        let fileFMTags = tagsFM.split(",");
        for (let i = 0; i < fileFMTags.length; i++) {
          fileTags.push(fileFMTags[i]);
        }
      } else if (Array.isArray(tagsFM)) {
        for (let i = 0; i < tagsFM.length; i++) {
          fileTags.push(tagsFM[i]);
        }
      }
    }
    return fileTags;
  };
  var getFilesWithTag = (params2) => {
    let { searchTag, plugin: plugin2, focusedFolder: focusedFolder2, excludedExtensions: excludedExtensions2, excludedFolders: excludedFolders2 } = params2;
    let filesWithTag = /* @__PURE__ */ new Set();
    let ozFiles = getFilesUnderPath2({
      path: plugin2.settings.allSearchOnlyInFocusedFolder ? focusedFolder2.path : "/",
      plugin: plugin2,
      excludedExtensions: excludedExtensions2,
      excludedFolders: excludedFolders2,
      getAllFiles: true
    });
    for (let ozFile of ozFiles) {
      let fileTags = getFileTags({
        f: ozFile,
        plugin: plugin2
      });
      for (let fileTag of fileTags) {
        if (fileTag.toLowerCase().contains(searchTag.toLowerCase().trimStart())) {
          if (!filesWithTag.has(ozFile)) filesWithTag.add(ozFile);
        }
      }
    }
    return filesWithTag;
  };
  var sortedFiles = (params2) => {
    let { fileList, plugin: plugin2, ozPinnedFiles } = params2;
    let sortedfileList = [...fileList];
    if (plugin2.settings.folderNote) {
      sortedfileList = sortedfileList.filter((f2) => !f2.isFolderNote);
    }
    sortedfileList = sortedfileList.sort((a, b2) => {
      if (ozPinnedFiles.some((f2) => f2.path === a.path) && !ozPinnedFiles.some((f2) => f2.path === b2.path)) {
        return -1;
      } else if (!ozPinnedFiles.some((f2) => f2.path === a.path) && ozPinnedFiles.some((f2) => f2.path === b2.path)) {
        return 1;
      }
      if (plugin2.settings.sortReverse) {
        [a, b2] = [b2, a];
      }
      if (plugin2.settings.sortFilesBy === "name") {
        return plugin2.settings.showFileNameAsFullPath ? a.path.localeCompare(b2.path, "en", { numeric: true }) : a.basename.localeCompare(b2.basename, "en", { numeric: true });
      } else if (plugin2.settings.sortFilesBy === "last-update") {
        return b2.stat.mtime - a.stat.mtime;
      } else if (plugin2.settings.sortFilesBy === "created") {
        return b2.stat.ctime - a.stat.ctime;
      } else if (plugin2.settings.sortFilesBy === "file-size") {
        return b2.stat.size - a.stat.size;
      }
    });
    return sortedfileList;
  };
  var sortFileListClickHandle = (params2) => {
    let { e, plugin: plugin2, forceUpdate } = params2;
    const sortMenu = new Menu();
    const changeSortSettingTo = (newValue) => {
      plugin2.settings.sortFilesBy = newValue;
      plugin2.saveSettings();
      forceUpdate();
    };
    const addMenuItem = (label, low, high, value) => {
      sortMenu.addItem((menuItem) => {
        const order = plugin2.settings.sortReverse ? `${high} to ${low}` : `${low} to ${high}`;
        menuItem.setTitle(`${label} (${order})`);
        menuItem.setIcon(value === plugin2.settings.sortFilesBy ? "checkmark" : "spaceIcon");
        menuItem.onClick(() => changeSortSettingTo(value));
      });
    };
    addMenuItem("File Name", "A", "Z", "name");
    addMenuItem("Created", "New", "Old", "created");
    addMenuItem("File Size", "Big", "Small", "file-size");
    addMenuItem("Last Update", "New", "Old", "last-update");
    sortMenu.addSeparator();
    sortMenu.addItem((menuItem) => {
      menuItem.setTitle("Reverse Order");
      menuItem.setIcon(plugin2.settings.sortReverse ? "checkmark" : "spaceIcon");
      menuItem.onClick(() => {
        plugin2.settings.sortReverse = !plugin2.settings.sortReverse;
        plugin2.saveSettings();
        forceUpdate();
      });
    });
    sortMenu.showAtPosition(menuPosition(e));
  };
  var searchAllRegex = new RegExp("all:(.*)?");
  var searchTagRegex = new RegExp("tag:(.*)?");
  var handleSearch = (params2) => {
    let { e, activeFolderPath: activeFolderPath2, setSearchPhrase, setOzFileList, setTreeHeader, plugin: plugin2, focusedFolder: focusedFolder2, excludedExtensions: excludedExtensions2, excludedFolders: excludedFolders2 } = params2;
    var searchPhrase = e.target.value;
    setSearchPhrase(searchPhrase);
    var searchFolder = activeFolderPath2;
    let tagRegexMatch = searchPhrase.match(searchTagRegex);
    if (tagRegexMatch) {
      setTreeHeader("Files with Tag");
      if (tagRegexMatch[1] === void 0 || tagRegexMatch[1].replace(/\s/g, "").length === 0) {
        setOzFileList([]);
        return;
      }
      setOzFileList([
        ...getFilesWithTag({
          searchTag: tagRegexMatch[1],
          plugin: plugin2,
          focusedFolder: focusedFolder2,
          excludedExtensions: excludedExtensions2,
          excludedFolders: excludedFolders2
        })
      ]);
      return;
    }
    let allRegexMatch = searchPhrase.match(searchAllRegex);
    if (allRegexMatch) {
      searchPhrase = allRegexMatch[1] ? allRegexMatch[1] : "";
      searchFolder = plugin2.settings.allSearchOnlyInFocusedFolder ? focusedFolder2.path : "/";
      setTreeHeader("All Files");
    } else {
      setTreeHeader(getFolderName(activeFolderPath2, plugin2.app));
    }
    let getAllFiles = allRegexMatch ? true : false;
    let filteredFiles = getFilesWithName({
      searchPhrase,
      searchFolder,
      plugin: plugin2,
      excludedExtensions: excludedExtensions2,
      excludedFolders: excludedFolders2,
      getAllFiles
    });
    setOzFileList(filteredFiles);
  };
  var openFile3 = (params2) => {
    let { file: file2, e, plugin: plugin2, setActiveOzFile } = params2;
    openFile2({
      file: file2,
      app: plugin2.app,
      newLeaf: (e.ctrlKey || e.metaKey) && !(e.shiftKey || e.altKey),
      leafBySplit: (e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey)
    });
    setActiveOzFile(file2);
  };
  var getFileIcon = (params2) => {
    let { file: file2 } = params2;
    return file2.extension === "pdf" ? AiFillFilePdf : ["png", "jpg", "jpeg", "svg"].contains(file2.extension) ? AiFillFileImage : ["doc", "docx"].contains(file2.extension) ? AiFillFileWord : BiFile;
  };
  var dragStarted = (params2) => {
    let { e, file: file2, plugin: plugin2 } = params2;
    let obsidianFile = plugin2.app.vault.getAbstractFileByPath(file2.path);
    if (!obsidianFile) return;
    e.dataTransfer.setData("application/json", JSON.stringify({ filePath: file2.path }));
    let dragManager = plugin2.app.dragManager;
    if (!dragManager?.dragFile || !dragManager?.onDragStart) {
      new Notice("Drag is unavailable. Use the file menu to move this file.");
      return;
    }
    const dragData = dragManager.dragFile(e.nativeEvent, obsidianFile);
    dragManager.onDragStart(e.nativeEvent, dragData);
  };
  var onAuxClick = (params2) => {
    let { e, plugin: plugin2, file: file2 } = params2;
    if (e.button === 1) openFileInNewTab2(plugin2.app, file2);
  };
  var mouseEnteredOnFile = (params2) => {
    let { e, file: file2, plugin: plugin2, setHoverActive } = params2;
    setHoverActive(true);
    if (plugin2.settings.filePreviewOnHover && (e.ctrlKey || e.metaKey)) {
      plugin2.app.workspace.trigger("link-hover", {}, e.target, file2.path, file2.path);
    }
  };
  var mouseLeftFile = (params2) => {
    params2.setHoverActive(false);
  };
  var triggerContextMenu = (params2) => {
    let { file: file2, e, ozPinnedFiles, setOzPinnedFiles, plugin: plugin2 } = params2;
    const fileMenu = new Menu();
    let fileToTrigger = plugin2.app.vault.getAbstractFileByPath(file2.path);
    if (!fileToTrigger) return;
    fileMenu.addItem((item) => item.setTitle("Preview").setIcon("eye").onClick(() => {
      if (fileToTrigger instanceof TFile) new MobilePreview(plugin2.app, fileToTrigger).open();
    }));
    fileMenu.addItem((menuItem) => {
      menuItem.setIcon("pin");
      const isAlreadyPinned = ozPinnedFiles.some((pinnedFile) => pinnedFile.path === file2.path);
      if (isAlreadyPinned) menuItem.setTitle("Unpin");
      else menuItem.setTitle("Pin to Top");
      menuItem.onClick((ev) => {
        if (isAlreadyPinned) {
          let newPinnedFiles = ozPinnedFiles.filter((pinnedFile) => pinnedFile.path !== file2.path);
          setOzPinnedFiles(newPinnedFiles);
        } else {
          setOzPinnedFiles([...ozPinnedFiles, file2]);
        }
      });
    });
    fileMenu.addItem((menuItem) => {
      menuItem.setTitle("Rename");
      menuItem.setIcon("pencil");
      menuItem.onClick((ev) => {
        let vaultChangeModal = new VaultChangeModal2(plugin2, file2, "rename");
        vaultChangeModal.open();
      });
    });
    fileMenu.addItem((menuItem) => {
      menuItem.setTitle("Delete");
      menuItem.setIcon("trash");
      menuItem.onClick((ev) => {
        let confirmationModal = new ConfirmationModal2(
          plugin2,
          `Are you sure you want to delete the file "${file2.basename}${file2.extension === "md" ? "" : file2.extension}"?`,
          function() {
            let deleteOption = plugin2.settings.deleteFileOption;
            let fileToDelete = plugin2.app.vault.getAbstractFileByPath(file2.path);
            if (!fileToDelete) return;
            if (deleteOption === "permanent") {
              plugin2.app.vault.delete(fileToDelete, true);
            } else if (deleteOption === "system-trash") {
              trashWithFallback(plugin2.app, fileToDelete, true);
            } else if (deleteOption === "trash") {
              trashWithFallback(plugin2.app, fileToDelete, false);
            }
          }
        );
        confirmationModal.open();
      });
    });
    fileMenu.addItem((menuItem) => {
      menuItem.setIcon("go-to-file");
      menuItem.setTitle("Open in a new tab");
      menuItem.onClick((ev) => {
        openFileInNewTab2(plugin2.app, file2);
      });
    });
    fileMenu.addItem((menuItem) => {
      menuItem.setIcon("go-to-file");
      menuItem.setTitle("Open to right");
      menuItem.onClick((ev) => {
        openFileInNewTabGroup2(plugin2.app, file2);
      });
    });
    fileMenu.addItem((menuItem) => {
      menuItem.setTitle("Make a copy");
      menuItem.setIcon("documents");
      menuItem.onClick((ev) => {
        let fileToCopy = plugin2.app.vault.getAbstractFileByPath(file2.path);
        if (fileToCopy) {
          let number = 1;
          const prefix = file2.parent.path === "/" ? "" : `${file2.parent.path}/`;
          while (plugin2.app.vault.getAbstractFileByPath(`${prefix}${file2.basename} ${number}.${file2.extension}`)) number++;
          plugin2.app.vault.copy(fileToCopy, `${prefix}${file2.basename} ${number}.${file2.extension}`).catch((error) => new Notice(`Copy failed: ${error.message}`));
        }
      });
    });
    {
      fileMenu.addItem((menuItem) => {
        menuItem.setTitle("Move file to...");
        menuItem.setIcon("paper-plane");
        menuItem.onClick((ev) => {
          let fileMoveSuggester = new MoveSuggestionModal2(plugin2.app, file2);
          fileMoveSuggester.open();
        });
      });
    }
    plugin2.app.workspace.trigger("file-menu", fileMenu, fileToTrigger, "file-explorer");
    if (isMouseEvent(e)) {
      fileMenu.showAtPosition(menuPosition(e));
    } else {
      fileMenu.showAtPosition(menuPosition(e));
    }
    return false;
  };

  // src/utils/noteProperties.ts
  var LOCATION_PROPERTY_NAME = "location";
  var TAGS_PROPERTY_NAME = "tags";
  var TITLE_PROPERTY_NAME = "title";
  var hasProperty = (frontmatter, propertyName) => Object.prototype.hasOwnProperty.call(frontmatter, propertyName);
  var isBlankStringProperty = (value) => typeof value === "string" && value.trim().length === 0;
  var isMarkdownFile = (file2) => file2 instanceof TFile && file2.extension === "md";
  var getLocationPropertyValue = (file2) => {
    const parentPath = file2.parent?.path || "";
    return parentPath === "" || parentPath === "/" ? "/" : parentPath;
  };
  var ensureNoteProperties = async (plugin2, file2) => {
    await plugin2.app.fileManager.processFrontMatter(file2, (frontmatter) => {
      if (!hasProperty(frontmatter, TITLE_PROPERTY_NAME) || isBlankStringProperty(frontmatter[TITLE_PROPERTY_NAME])) {
        frontmatter[TITLE_PROPERTY_NAME] = file2.basename;
      }
      frontmatter[LOCATION_PROPERTY_NAME] = getLocationPropertyValue(file2);
      if (!hasProperty(frontmatter, TAGS_PROPERTY_NAME) || frontmatter[TAGS_PROPERTY_NAME] == null) {
        frontmatter[TAGS_PROPERTY_NAME] = [];
      }
    });
  };
  var ensureNotePropertiesWithNotice = async (plugin2, file2) => {
    if (!isMarkdownFile(file2)) {
      new Notice("Select a Markdown note first.");
      return;
    }
    await ensureNoteProperties(plugin2, file2);
    new Notice("Updated title, location, and tags properties.");
  };

  // src/utils/noteContent.ts
  var FRONTMATTER_PATTERN = /^(?:\uFEFF)?---[ \t]*\r?\n[\s\S]*?\r?\n(?:---|\.\.\.)[ \t]*(?:\r?\n|$)/;
  var getPageText = (noteText) => {
    const frontmatter = noteText.match(FRONTMATTER_PATTERN);
    if (!frontmatter) return noteText;
    return noteText.slice(frontmatter[0].length).replace(/^(?:\r?\n)+/, "");
  };

  // src/components/Mobile/VirtualFiles.tsx
  var import_react11 = __toESM(require_react());
  var FILE_ROW_HEIGHT = 44;
  function VirtualFiles({ files, render, layoutKey }) {
    const element = (0, import_react11.useRef)(null);
    const [range, setRange] = (0, import_react11.useState)({ start: 0, end: 24 });
    (0, import_react11.useLayoutEffect)(() => {
      const list = element.current;
      const scroll = list?.closest(".ffm-pane");
      if (!list || !scroll) return;
      let frame = 0;
      const measure = () => {
        const offset = list.getBoundingClientRect().top - scroll.getBoundingClientRect().top + scroll.scrollTop;
        const start = Math.max(0, Math.floor((scroll.scrollTop - offset) / FILE_ROW_HEIGHT) - 4);
        const end = Math.min(files.length, Math.max(start + 1, Math.ceil((scroll.scrollTop - offset + scroll.clientHeight) / FILE_ROW_HEIGHT) + 4));
        setRange((old) => old.start === start && old.end === end ? old : { start, end });
      };
      const update = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(measure);
      };
      scroll.addEventListener("scroll", update, { passive: true });
      const observer = new ResizeObserver(update);
      observer.observe(scroll);
      observer.observe(list);
      measure();
      return () => {
        cancelAnimationFrame(frame);
        scroll.removeEventListener("scroll", update);
        observer.disconnect();
      };
    }, [files, layoutKey]);
    (0, import_react11.useEffect)(() => {
      let frame = 0, second = 0, third = 0;
      const reveal = (event) => {
        const path = event.detail;
        const index = files.findIndex((file2) => file2.path === path);
        if (index < 0) return;
        cancelAnimationFrame(frame);
        cancelAnimationFrame(second);
        cancelAnimationFrame(third);
        frame = requestAnimationFrame(() => {
          second = requestAnimationFrame(() => {
            third = requestAnimationFrame(() => {
              const list = element.current, scroll = list?.closest(".ffm-pane");
              if (!list || !scroll || !list.getClientRects().length) return;
              const offset = list.getBoundingClientRect().top - scroll.getBoundingClientRect().top + scroll.scrollTop;
              const pinned = scroll.classList.contains("ffm-main-scroll") && Boolean(scroll.querySelector(".ffm-toolbar-fixed")) ? 44 : 0;
              scroll.scrollTop = offset + index * FILE_ROW_HEIGHT - pinned;
            });
          });
        });
      };
      window.addEventListener("ffm-reveal-file-row", reveal);
      return () => {
        cancelAnimationFrame(frame);
        cancelAnimationFrame(second);
        cancelAnimationFrame(third);
        window.removeEventListener("ffm-reveal-file-row", reveal);
      };
    }, [files]);
    return /* @__PURE__ */ import_react11.default.createElement("div", { ref: element, className: "ffm-virtual-files", role: "list", "aria-label": "Files", style: { height: files.length * FILE_ROW_HEIGHT } }, files.slice(range.start, range.end).map((file2, index) => /* @__PURE__ */ import_react11.default.createElement("div", { role: "listitem", key: file2.path, style: { position: "absolute", top: (index + range.start) * FILE_ROW_HEIGHT, height: FILE_ROW_HEIGHT, width: "100%" } }, render(file2))));
  }

  // src/components/Mobile/MobileFiles.tsx
  var SEMANTIC_LINK_SUGGESTIONS_COMMAND_ID = "semantic-graph-builder:open-link-suggestions";
  var AUTO_TITLE_COMMAND_ID = "auto-title:generate-title";
  var DELETE_CURRENT_FILE_COMMAND_ID = "app:delete-file";
  var MOVE_CURRENT_FILE_COMMAND_ID = "file-explorer:move-file";
  var QUICK_FORMAT_SYSTEM_PROMPT = `You are an AI Markdown formatting assistant for Franklin Garrett.

Your task is to deeply format the user's active Obsidian note into clean Markdown.

Rules:
- Preserve every substantive idea, item, name, date, number, folder name, link, instruction, and action item from the source.
- Do not summarize, shorten, invent, delete, or add unsupported content.
- Correct obvious spelling, punctuation, capitalization, and spacing errors when the intent is clear.
- Remove duplicate bullet characters, pasted bullet symbols, broken indentation, and accidental list artifacts.
- If the source has pasted bullet symbols, partially formatted bullets, hanging wrapped lines, or indented fragments, actively rewrite them into clean Markdown bullets and nested bullets.
- Use one H1 title when the source has a clear title.
- Use H2 headings for major sections.
- Use Markdown bullets and nested bullets where they make the note easier to scan.
- Keep existing Markdown links, wiki links, URLs, tags, tasks, and code blocks intact.
- Preserve the order of the source unless nearby lines clearly belong under the same heading or nested bullet.
- Do not return the source unchanged unless it is already clean, coherent Markdown with headings and properly nested bullets.
- Output only the formatted Markdown note. Do not include a preamble, explanation, comments, or a wrapping code fence.`;
  var stripWrappingCodeFence = (content) => {
    const trimmed = content.trim();
    const match = trimmed.match(/^```(?:markdown|md)?\s*\n([\s\S]*?)\n```\s*$/i);
    return match ? match[1].trim() : trimmed;
  };
  var splitFrontmatter = (content) => {
    const match = content.match(/^(---\s*\n[\s\S]*?\n---)(\s*\n)?([\s\S]*)$/);
    if (!match) {
      return {
        frontmatter: "",
        body: content
      };
    }
    return {
      frontmatter: match[1],
      body: match[3] || ""
    };
  };
  var getAIGrammarSettings = (plugin2) => {
    const plugins = plugin2.app.plugins;
    const aiGrammarPlugin = plugins?.getPlugin?.("ai-grammar-corrector");
    return aiGrammarPlugin?.settings;
  };
  var formatNoteContentWithAI = async (content, settings) => {
    const { frontmatter, body } = splitFrontmatter(content);
    const bodyToFormat = body.trim();
    if (!bodyToFormat) return content;
    const formattedBody = settings.provider === "openai" ? await callOpenAIFormatter(bodyToFormat, settings) : await callAnthropicFormatter(bodyToFormat, settings);
    const cleanedBody = stripWrappingCodeFence(formattedBody);
    return frontmatter ? `${frontmatter}

${cleanedBody}
` : `${cleanedBody}
`;
  };
  var callAnthropicFormatter = async (content, settings) => {
    const res = await requestUrl({
      url: "https://api.anthropic.com/v1/messages",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": settings.apiKey || "",
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: settings.anthropicModel || "claude-sonnet-4-5",
        max_tokens: 8192,
        temperature: 0.2,
        system: QUICK_FORMAT_SYSTEM_PROMPT,
        messages: [{ role: "user", content: `Format this Obsidian note body into clean Markdown:

${content}` }]
      }),
      throw: false
    });
    if (res.status === 401) throw new Error("Invalid Anthropic API key (401). Check AI Grammar Corrector settings.");
    if (res.status === 429) throw new Error("Anthropic rate limit hit (429). Wait a moment and try again.");
    if (res.status >= 400) {
      const apiMsg = res.json?.error?.message || res.text || "unknown error";
      throw new Error(`Anthropic API ${res.status}: ${apiMsg}`);
    }
    const output = res.json?.content?.[0]?.text;
    if (typeof output !== "string") throw new Error("Anthropic returned an unexpected response shape.");
    return output;
  };
  var callOpenAIFormatter = async (content, settings) => {
    const res = await requestUrl({
      url: "https://api.openai.com/v1/chat/completions",
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${settings.apiKey || ""}`
      },
      body: JSON.stringify({
        model: settings.openaiModel || "gpt-4o-mini",
        temperature: 0.2,
        messages: [
          { role: "system", content: QUICK_FORMAT_SYSTEM_PROMPT },
          { role: "user", content: `Format this Obsidian note body into clean Markdown:

${content}` }
        ]
      }),
      throw: false
    });
    if (res.status === 401) throw new Error("Invalid OpenAI API key (401). Check AI Grammar Corrector settings.");
    if (res.status === 429) throw new Error("OpenAI rate limit hit (429). Wait a moment and try again.");
    if (res.status >= 400) {
      const apiMsg = res.json?.error?.message || res.text || "unknown error";
      throw new Error(`OpenAI API ${res.status}: ${apiMsg}`);
    }
    const output = res.json?.choices?.[0]?.message?.content;
    if (typeof output !== "string") throw new Error("OpenAI returned an unexpected response shape.");
    return output;
  };
  function FileComponent(props) {
    let searchInput = import_react12.default.useRef(null);
    const plugin2 = props.plugin;
    const [_view, setView] = Recoil_index_22(view);
    const [ozFileList2, setOzFileList] = Recoil_index_22(ozFileList);
    const [ozPinnedFiles] = Recoil_index_22(ozPinnedFileList);
    const [activeFolderPath2, setActiveFolderPath] = Recoil_index_22(activeFolderPath);
    const [excludedExtensions2] = Recoil_index_22(excludedExtensions);
    const [excludedFolders2] = Recoil_index_22(excludedFolders);
    const [showSubFolders2, setShowSubFolders] = Recoil_index_22(showSubFolders);
    const [focusedFolder2, _setFocusedFolder] = Recoil_index_22(focusedFolder);
    const [activeOzFile] = Recoil_index_22(activeOZFile);
    const [highlight, setHighlight] = (0, import_react12.useState)(false);
    const [searchPhrase, setSearchPhrase] = (0, import_react12.useState)("");
    const [searchBoxVisible, setSearchBoxVisible] = (0, import_react12.useState)(false);
    const [quickFormatRunning, setQuickFormatRunning] = (0, import_react12.useState)(false);
    const [treeHeader, setTreeHeader] = (0, import_react12.useState)(getFolderName(activeFolderPath2, plugin2.app));
    const colorfulHeaderClassName = getColorfulHeaderClassName(activeFolderPath2, plugin2);
    const forceUpdate = useForceUpdate();
    (0, import_react12.useEffect)(() => setTreeHeader(getFolderName(activeFolderPath2, plugin2.app)), [activeFolderPath2]);
    (0, import_react12.useEffect)(() => {
      setOzFileList(
        getFilesUnderPath2({
          path: activeFolderPath2,
          plugin: plugin2,
          excludedExtensions: excludedExtensions2,
          excludedFolders: excludedFolders2
        })
      );
    }, [showSubFolders2, excludedExtensions2, excludedFolders2, plugin2.settings.showOnlySupportedFileTypes]);
    (0, import_react12.useEffect)(() => {
      if (searchBoxVisible) searchInput.current?.focus();
    }, [searchBoxVisible]);
    const filesToList = (0, import_react12.useMemo)(
      () => sortedFiles({
        fileList: ozFileList2.filter((file2) => {
          const entry = plugin2.app.vault.getAbstractFileByPath(file2.path);
          return entry instanceof TFile && !shouldExcludeFile2({ file: entry, plugin: plugin2, excludedExtensions: excludedExtensions2, excludedFolders: excludedFolders2 });
        }),
        plugin: plugin2,
        ozPinnedFiles
      }),
      [excludedFolders2, excludedExtensions2, ozPinnedFiles, ozFileList2, plugin2.settings.sortFilesBy, plugin2.settings.sortReverse]
    );
    const handleGoBack = (e) => {
      setView("folder");
      setActiveFolderPath("");
    };
    const toggleSearchBox = () => {
      setSearchPhrase("");
      setSearchBoxVisible(!searchBoxVisible);
      setOzFileList(
        getFilesUnderPath2({
          path: activeFolderPath2,
          plugin: plugin2,
          excludedExtensions: excludedExtensions2,
          excludedFolders: excludedFolders2
        })
      );
    };
    const toggleShowSubFolders = async () => {
      plugin2.settings.showFilesFromSubFolders = !showSubFolders2;
      await plugin2.saveSettings();
      setShowSubFolders(!showSubFolders2);
    };
    const copySelectedVaultFilePath = async () => {
      const activeFile = plugin2.app.workspace.getActiveFile();
      const filePath = activeOzFile?.path || activeFile?.path;
      if (!filePath) {
        new Notice("Select a note first.");
        return;
      }
      try {
        await navigator.clipboard.writeText(filePath);
        new Notice(`Copied file path: ${filePath}`);
      } catch (error) {
        new Notice(`Could not copy file path: ${error instanceof Error ? error.message : String(error)}`);
      }
    };
    const copySelectedNotePageText = async () => {
      const activeFile = plugin2.app.workspace.getActiveFile();
      const selectedPath = activeOzFile?.path || activeFile?.path;
      const file2 = selectedPath ? plugin2.app.vault.getAbstractFileByPath(selectedPath) : activeFile;
      if (!(file2 instanceof TFile) || file2.extension.toLowerCase() !== "md") {
        new Notice("Select a Markdown note first.");
        return;
      }
      try {
        const noteText = await plugin2.app.vault.cachedRead(file2);
        await navigator.clipboard.writeText(getPageText(noteText));
        new Notice("Copied page text without properties.");
      } catch (error) {
        console.error("FJG File Focus could not copy the selected note:", error);
        new Notice("Could not copy the page text to the clipboard.");
      }
    };
    const executeCommandById = async (commandId, unavailableNotice) => {
      const commands = plugin2.app.commands;
      if (!commands?.commands?.[commandId] || !commands?.executeCommandById) {
        new Notice(unavailableNotice);
        return false;
      }
      try {
        await Promise.resolve(commands.executeCommandById(commandId));
        return true;
      } catch (error) {
        new Notice(`Command failed: ${error instanceof Error ? error.message : String(error)}`);
        return false;
      }
    };
    const openSemanticLinkSuggestions = () => {
      void executeCommandById(SEMANTIC_LINK_SUGGESTIONS_COMMAND_ID, "Semantic Graph Builder command is not available.");
    };
    const generateAutoTitle = async () => {
      const commandStarted = await executeCommandById(AUTO_TITLE_COMMAND_ID, "Auto Title command is not available.");
      if (!commandStarted) return;
      window.setTimeout(() => {
        const activeFile = plugin2.app.workspace.getActiveFile();
        if (isMarkdownFile(activeFile)) {
          void ensureNotePropertiesWithNotice(plugin2, activeFile);
        }
      }, 1200);
    };
    const moveCurrentFile = () => void executeCommandById(MOVE_CURRENT_FILE_COMMAND_ID, "Move current file command is not available.");
    const deleteCurrentFile = () => void executeCommandById(DELETE_CURRENT_FILE_COMMAND_ID, "Delete current file command is not available.");
    const refreshCurrentNoteProperties = async () => {
      const activeFile = plugin2.app.workspace.getActiveFile();
      const selectedPath = activeOzFile?.path || activeFile?.path;
      const file2 = selectedPath ? plugin2.app.vault.getAbstractFileByPath(selectedPath) : activeFile;
      await ensureNotePropertiesWithNotice(plugin2, file2);
    };
    const quickFormatCurrentNote = async () => {
      if (quickFormatRunning) {
        new Notice("AI quick format is already running.");
        return;
      }
      const activeFile = plugin2.app.workspace.getActiveFile();
      const selectedPath = activeOzFile?.path || activeFile?.path;
      const file2 = selectedPath ? plugin2.app.vault.getAbstractFileByPath(selectedPath) : activeFile;
      if (!(file2 instanceof TFile)) {
        new Notice("Select a note first.");
        return;
      }
      if (file2.extension.toLowerCase() !== "md") {
        new Notice("Quick format only works on Markdown notes.");
        return;
      }
      const aiGrammarSettings = getAIGrammarSettings(plugin2);
      if (!aiGrammarSettings) {
        new Notice("Enable AI Grammar Corrector before using AI quick format.");
        return;
      }
      if (!aiGrammarSettings.apiKey) {
        new Notice("Add an API key in AI Grammar Corrector settings before using AI quick format.");
        return;
      }
      setQuickFormatRunning(true);
      new Notice("AI formatting current note...");
      try {
        const originalContent = await plugin2.app.vault.read(file2);
        const formattedContent = await formatNoteContentWithAI(originalContent, aiGrammarSettings);
        if (formattedContent === originalContent) {
          new Notice("AI returned no formatting changes. The note was left unchanged.", 8e3);
          return;
        }
        const latestContent = await plugin2.app.vault.read(file2);
        if (latestContent !== originalContent) {
          new Notice("The note changed while AI formatting was running. Nothing was written.");
          return;
        }
        await plugin2.app.vault.modify(file2, formattedContent);
        new Notice("AI formatted current note with Markdown.");
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        new Notice(`AI quick format failed: ${message}`, 8e3);
        console.error("FJG File Focus AI quick format failed:", error);
      } finally {
        setQuickFormatRunning(false);
      }
    };
    const topIconSize = 19;
    if (props.actionsRef) props.actionsRef.current = [
      { id: "search", title: "Search files by name or tag", run: () => plugin2.settings.searchFunction ? toggleSearchBox() : new Notice("File search is disabled in File Focus settings.") },
      { id: "new-note", title: "Create a Note", run: (e) => createNewFile2(e || {}, activeFolderPath2, plugin2) },
      { id: "delete-note", title: "Delete Current File", run: deleteCurrentFile },
      { id: "quick-format", title: "Quick Format Current Note", run: quickFormatCurrentNote },
      { id: "reveal", title: "Reveal Active File", visible: plugin2.settings.revealActiveFileButton, run: () => plugin2.app.commands.executeCommandById(`${plugin2.manifest.id}:reveal-active-file`) },
      { id: "properties", title: "Refresh Note Properties", run: refreshCurrentNoteProperties },
      { id: "move-note", title: "Move Current File", run: moveCurrentFile },
      { id: "auto-title", title: "Generate Note Title", run: generateAutoTitle },
      { id: "semantic-links", title: "Open Semantic Link Suggestions", run: openSemanticLinkSuggestions },
      { id: "copy-text", title: "Copy Page Text Without Properties", run: copySelectedNotePageText },
      { id: "copy-path", title: "Copy Selected Note File Path", run: copySelectedVaultFilePath },
      { id: "subfolders", title: `${showSubFolders2 ? "Hide" : "Include"} files from subfolders`, visible: plugin2.settings.showFilesFromSubFoldersButton, run: toggleShowSubFolders },
      { id: "file-sort", title: "File sorting options", run: (e) => sortFileListClickHandle({ e, plugin: plugin2, forceUpdate }) }
    ];
    if (props.adaptive) return /* @__PURE__ */ import_react12.default.createElement(es_default, { noClick: true, onDrop: (files) => handleOnDropFiles({ files, activeFolderPath: activeFolderPath2, plugin: plugin2 }) }, ({ getRootProps, getInputProps }) => /* @__PURE__ */ import_react12.default.createElement("div", { ...getRootProps(), className: "ffm-file-content" }, /* @__PURE__ */ import_react12.default.createElement("input", { ...getInputProps() }), searchBoxVisible && /* @__PURE__ */ import_react12.default.createElement("div", { className: "ffm-search" }, /* @__PURE__ */ import_react12.default.createElement("input", { "aria-label": "Search files by name or tag", type: "search", ref: searchInput, value: searchPhrase, placeholder: "Search\u2026 (all: / tag:)", onChange: (e) => handleSearch({ e, plugin: plugin2, activeFolderPath: activeFolderPath2, setSearchPhrase, setTreeHeader, setOzFileList, excludedExtensions: excludedExtensions2, excludedFolders: excludedFolders2, focusedFolder: focusedFolder2 }), onKeyDown: (e) => {
      if (e.key === "Escape") toggleSearchBox();
    } })), filesToList.length ? /* @__PURE__ */ import_react12.default.createElement(VirtualFiles, { layoutKey: props.wide ? "wide" : "compact", files: filesToList, render: (file2) => /* @__PURE__ */ import_react12.default.createElement(NavFile, { file: file2, plugin: plugin2 }) }) : /* @__PURE__ */ import_react12.default.createElement("div", { className: "ffm-empty", role: "status" }, "No matching files in this folder.")));
    return null;
  }
  var NavFile = (props) => {
    const { file: file2, plugin: plugin2 } = props;
    const [ozPinnedFiles, setOzPinnedFiles] = Recoil_index_22(ozPinnedFileList);
    const [activeOzFile, setActiveOzFile] = Recoil_index_22(activeOZFile);
    const [hoverActive, setHoverActive] = (0, import_react12.useState)(false);
    const longPressEvents = useLongPress((e) => {
      triggerContextMenu({
        file: file2,
        e,
        plugin: plugin2,
        ozPinnedFiles,
        setOzPinnedFiles
      });
    }, 500);
    (0, import_react12.useEffect)(() => {
      const handleKeyDownEvent = (e) => {
        if (e.key === "Control" || e.key === "Meta") {
          let el = document.querySelector(`.oz-nav-file-title[data-path="${file2.path}"]`);
          if (el) plugin2.app.workspace.trigger("link-hover", {}, el, file2.path, file2.path);
        }
      };
      if (hoverActive && plugin2.settings.filePreviewOnHover) {
        document.addEventListener("keydown", handleKeyDownEvent);
        return () => {
          document.removeEventListener("keydown", handleKeyDownEvent);
        };
      }
    }, [hoverActive]);
    const FileIcon = (0, import_react12.useMemo)(
      () => getFileIcon({
        file: file2
      }),
      [plugin2.settings.iconBeforeFileName, file2]
    );
    const fileDisplayName = (0, import_react12.useMemo)(() => {
      return plugin2.settings.showFileNameAsFullPath ? getFileNameAndExtension(file2.path).fileName : file2.basename;
    }, [plugin2.settings.showFileNameAsFullPath, file2.path]);
    const colorfulFileClassName = getColorfulFileClassName(file2, plugin2);
    return /* @__PURE__ */ import_react12.default.createElement(
      "div",
      {
        className: "oz-nav-file" + colorfulFileClassName + (activeOzFile && activeOzFile.path === file2.path ? " is-active" : ""),
        key: file2.path,
        role: "button",
        tabIndex: 0,
        "aria-label": `Open ${file2.basename}`,
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openFile3({ e, file: file2, plugin: plugin2, setActiveOzFile });
          }
        },
        draggable: true,
        onDragStart: (e) => dragStarted({
          e,
          file: file2,
          plugin: plugin2
        }),
        onClick: (e) => openFile3({
          e,
          file: file2,
          plugin: plugin2,
          setActiveOzFile
        }),
        onAuxClick: (e) => onAuxClick({ e, plugin: plugin2, file: file2 }),
        onContextMenu: (e) => triggerContextMenu({
          e,
          file: file2,
          plugin: plugin2,
          ozPinnedFiles,
          setOzPinnedFiles
        }),
        onMouseEnter: (e) => mouseEnteredOnFile({
          e,
          file: file2,
          plugin: plugin2,
          setHoverActive
        }),
        onMouseLeave: (e) => mouseLeftFile({ e, file: file2, setHoverActive }),
        ...longPressEvents
      },
      /* @__PURE__ */ import_react12.default.createElement("div", { className: "oz-nav-file-title", "data-path": file2.path }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "oz-nav-file-title-content" }, plugin2.settings.iconBeforeFileName && /* @__PURE__ */ import_react12.default.createElement(FileIcon, { className: "oz-nav-file-icon", size: 15 }), fileDisplayName), ozPinnedFiles.some((f2) => f2.path === file2.path) && /* @__PURE__ */ import_react12.default.createElement(FaThumbtack, { className: "oz-nav-file-tag", size: 14 }), file2.extension !== "md" && /* @__PURE__ */ import_react12.default.createElement("span", { className: "oz-nav-file-tag" }, file2.extension))
    );
  };

  // src/components/Mobile/FocusPanel.tsx
  var import_react13 = __toESM(require_react());
  var PANEL_LABELS = {
    recent: "Recent Notes",
    bookmarks: "Bookmarks"
  };
  function FocusPanel(props) {
    const { plugin: plugin2, mode } = props;
    const search = (0, import_react13.useRef)(null);
    const [searchVisible, setSearchVisible] = (0, import_react13.useState)(false);
    (0, import_react13.useEffect)(() => {
      const toggle = () => setSearchVisible((value) => !value);
      window.addEventListener(FOCUS_SEARCH, toggle);
      return () => window.removeEventListener(FOCUS_SEARCH, toggle);
    }, []);
    (0, import_react13.useEffect)(() => {
      if (searchVisible) search.current?.focus();
    }, [searchVisible]);
    const [query, setQuery] = (0, import_react13.useState)("");
    const [bookmarkStack, setBookmarkStack] = (0, import_react13.useState)([]);
    const [_view, setView] = Recoil_index_22(view);
    const [_activeFolderPath, setActiveFolderPath] = Recoil_index_22(activeFolderPath);
    const [_activeOZFile, setActiveOzFile] = Recoil_index_22(activeOZFile);
    const switchMode = (nextMode) => {
      setQuery("");
      setBookmarkStack([]);
      setView(nextMode);
    };
    const closePanel = () => {
      setView("folder");
      setActiveFolderPath("");
    };
    const openFilePath = async (path, subpath) => {
      const file2 = plugin2.app.vault.getAbstractFileByPath(path);
      if (!(file2 instanceof TFile)) {
        new Notice("File not found.");
        return;
      }
      await openFile2({ file: TFile2OZFile(file2), app: plugin2.app, newLeaf: plugin2.settings.focusOpenInNewTab, subpath });
      setActiveOzFile(TFile2OZFile(file2));
    };
    const revealFolder = (folder2) => {
      setActiveFolderPath(folder2.path);
      setView("file");
      window.dispatchEvent(new CustomEvent(eventTypes.revealFolder, { detail: { folder: folder2 } }));
    };
    const openBookmark = async (bookmark, bookmarksPlugin) => {
      try {
        switch (bookmark.type) {
          case "file":
            await openFilePath(bookmark.path || "", bookmark.subpath);
            break;
          case "folder":
            openFolderBookmark(bookmark);
            break;
          case "search":
            await openSearchBookmark(bookmark, bookmarksPlugin);
            break;
          case "url":
            openUrlBookmark(bookmark);
            break;
          case "graph":
            await bookmarksPlugin.openBookmark(bookmark, plugin2.settings.focusOpenInNewTab ? "tab" : false, { focus: true });
            break;
          case "group":
            return;
        }
      } catch (error) {
        new Notice(`Could not open bookmark: ${error instanceof Error ? error.message : String(error)}`);
      }
    };
    const openFolderBookmark = (bookmark) => {
      const folder2 = plugin2.app.vault.getAbstractFileByPath(bookmark.path || "");
      if (folder2 instanceof TFolder) {
        revealFolder(folder2);
        return;
      }
      new Notice(`Folder not found: ${bookmark.path || "Untitled"}`);
    };
    const openSearchBookmark = async (bookmark, bookmarksPlugin) => {
      const globalSearchPlugin = getEnabledPlugin(plugin2, "global-search");
      if (globalSearchPlugin) {
        globalSearchPlugin.openGlobalSearch(bookmark.query || "");
        return;
      }
      await bookmarksPlugin.openBookmark(bookmark, plugin2.settings.focusOpenInNewTab ? "tab" : false, { focus: true });
    };
    const openUrlBookmark = (bookmark) => {
      if (!bookmark.url) {
        new Notice("Bookmarked URL is empty.");
        return;
      }
      const webViewerPlugin = getEnabledPlugin(plugin2, "webviewer");
      if (webViewerPlugin?.options?.openExternalURLs) {
        webViewerPlugin.openUrl(bookmark.url, plugin2.settings.focusOpenInNewTab);
        return;
      }
      const opened = window.open(bookmark.url, "_blank");
      if (!opened) {
        new Notice("External browser opening was not confirmed. Copy the URL from the bookmark menu if needed.");
      }
    };
    return /* @__PURE__ */ import_react13.default.createElement("div", { className: "fjg-focus-panel" }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "fjg-focus-panel__header file-tree-header-fixed" }, !props.adaptive && /* @__PURE__ */ import_react13.default.createElement("div", { className: "oz-flex-container" }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "oz-nav-action-button", style: { marginLeft: "0px" } }, /* @__PURE__ */ import_react13.default.createElement(IoIosCloseCircleOutline, { onClick: closePanel, size: 19, "aria-label": "Close Focus Panel" })), /* @__PURE__ */ import_react13.default.createElement("div", { className: "fjg-focus-panel__tabs", role: "tablist", "aria-label": "FJG File Focus panels" }, /* @__PURE__ */ import_react13.default.createElement(
      "button",
      {
        type: "button",
        className: `fjg-focus-panel__tab${mode === "recent" ? " is-active" : ""}`,
        onClick: () => switchMode("recent")
      },
      /* @__PURE__ */ import_react13.default.createElement(FaHistory, { size: 13 }),
      /* @__PURE__ */ import_react13.default.createElement("span", null, "Recent")
    ), /* @__PURE__ */ import_react13.default.createElement(
      "button",
      {
        type: "button",
        className: `fjg-focus-panel__tab${mode === "bookmarks" ? " is-active" : ""}`,
        onClick: () => switchMode("bookmarks")
      },
      /* @__PURE__ */ import_react13.default.createElement(FaRegBookmark, { size: 13 }),
      /* @__PURE__ */ import_react13.default.createElement("span", null, "Bookmarks")
    ))), (!props.adaptive || searchVisible) && /* @__PURE__ */ import_react13.default.createElement("div", { className: "oz-input-container" }, /* @__PURE__ */ import_react13.default.createElement(
      "input",
      {
        ref: search,
        type: "search",
        placeholder: mode === "bookmarks" ? "Search bookmarks..." : "Search recent notes...",
        value: query,
        onChange: (event) => setQuery(event.target.value)
      }
    )), /* @__PURE__ */ import_react13.default.createElement("div", { className: "oz-file-tree-header" }, PANEL_LABELS[mode])), /* @__PURE__ */ import_react13.default.createElement("div", { className: "fjg-focus-panel__body" }, mode === "bookmarks" ? /* @__PURE__ */ import_react13.default.createElement(
      BookmarkPanel,
      {
        plugin: plugin2,
        query,
        bookmarkStack,
        setBookmarkStack,
        openBookmark
      }
    ) : /* @__PURE__ */ import_react13.default.createElement(RecentPanel, { plugin: plugin2, query, openFilePath })));
  }
  function RecentPanel(props) {
    const { plugin: plugin2, query, openFilePath } = props;
    const recentFiles = (0, import_react13.useMemo)(() => getWorkspaceRecentFiles(plugin2), [plugin2, plugin2.settings.excludedFolders, plugin2.settings.focusMaxRecentFiles]);
    const visibleFiles = (0, import_react13.useMemo)(() => filterRecentFiles(recentFiles, query), [recentFiles, query]);
    if (visibleFiles.length === 0) {
      return /* @__PURE__ */ import_react13.default.createElement(EmptyState, { title: "No recent notes yet", body: "Open a few notes or canvases and they will appear here." });
    }
    return /* @__PURE__ */ import_react13.default.createElement("div", { className: "fjg-focus-panel__list" }, visibleFiles.map((entry) => /* @__PURE__ */ import_react13.default.createElement(
      FocusRow,
      {
        key: entry.path,
        icon: entry.extension === "canvas" ? FaProjectDiagram : BiFile,
        title: entry.basename,
        subtitle: plugin2.settings.focusShowPaths ? entry.path : "",
        onContextMenu: (event) => showFocusContextMenu(plugin2, { type: "file", path: entry.path }, event),
        onClick: () => {
          void openFilePath(entry.path);
        }
      }
    )));
  }
  function BookmarkPanel(props) {
    const { plugin: plugin2, query, bookmarkStack, setBookmarkStack, openBookmark } = props;
    const bookmarksPlugin = getEnabledPlugin(plugin2, "bookmarks");
    if (!bookmarksPlugin) {
      return /* @__PURE__ */ import_react13.default.createElement(EmptyState, { title: "Bookmarks are unavailable", body: "Enable Obsidian's core Bookmarks plugin to use this panel." });
    }
    const level = bookmarkStack[bookmarkStack.length - 1];
    const items = level?.items || bookmarksPlugin.items || [];
    const visibleItems = items.filter((item) => bookmarkMatchesQuery(item, query));
    return /* @__PURE__ */ import_react13.default.createElement("div", { className: "fjg-focus-panel__list" }, level && /* @__PURE__ */ import_react13.default.createElement(
      "button",
      {
        type: "button",
        className: "fjg-focus-panel__context-row",
        onClick: () => {
          setBookmarkStack(bookmarkStack.slice(0, -1));
        }
      },
      /* @__PURE__ */ import_react13.default.createElement(FaArrowCircleLeft, { size: 14 }),
      /* @__PURE__ */ import_react13.default.createElement("span", null, level.title)
    ), visibleItems.length === 0 ? /* @__PURE__ */ import_react13.default.createElement(EmptyState, { title: "No bookmarks found", body: "Try a different search." }) : visibleItems.map((item, index) => /* @__PURE__ */ import_react13.default.createElement(
      FocusRow,
      {
        key: `${getBookmarkDisplayName(plugin2, item)}-${index}`,
        icon: getBookmarkIcon(item),
        title: getBookmarkDisplayName(plugin2, item),
        subtitle: getBookmarkSubtitle(plugin2, item),
        onContextMenu: (event) => showFocusContextMenu(plugin2, item, event),
        onClick: () => {
          if (item.type === "group") {
            setBookmarkStack([...bookmarkStack, { title: getBookmarkDisplayName(plugin2, item), items: item.items || [] }]);
            return;
          }
          void openBookmark(item, bookmarksPlugin);
        }
      }
    )));
  }
  function FocusRow(config) {
    const Icon = config.icon;
    const press = useLongPress((event) => config.onContextMenu?.(event), 500);
    return /* @__PURE__ */ import_react13.default.createElement("button", { type: "button", className: "fjg-focus-panel__row", title: config.subtitle || config.title, onClick: config.onClick, onContextMenu: (event) => {
      event.preventDefault();
      config.onContextMenu?.(event);
    }, ...press }, /* @__PURE__ */ import_react13.default.createElement("span", { className: "fjg-focus-panel__row-icon" }, /* @__PURE__ */ import_react13.default.createElement(Icon, { size: 13 })), /* @__PURE__ */ import_react13.default.createElement("span", { className: "fjg-focus-panel__row-text" }, /* @__PURE__ */ import_react13.default.createElement("span", { className: "fjg-focus-panel__row-title" }, config.title || "Untitled"), config.subtitle && /* @__PURE__ */ import_react13.default.createElement("span", { className: "fjg-focus-panel__row-subtitle" }, config.subtitle)));
  }
  function EmptyState(props) {
    return /* @__PURE__ */ import_react13.default.createElement("div", { className: "fjg-focus-panel__empty" }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "fjg-focus-panel__empty-title" }, props.title), /* @__PURE__ */ import_react13.default.createElement("div", { className: "fjg-focus-panel__empty-body" }, props.body));
  }
  function getWorkspaceRecentFiles(plugin2) {
    const recentPaths = typeof plugin2.app.workspace.getLastOpenFiles === "function" ? plugin2.app.workspace.getLastOpenFiles() : [];
    const excludedFolders2 = settingListToArray(plugin2.settings.excludedFolders);
    return recentPaths.map((path) => plugin2.app.vault.getAbstractFileByPath(path)).filter((file2) => file2 instanceof TFile && ["md", "canvas"].includes(file2.extension.toLowerCase())).filter((file2) => !isPathInExcludedFolder(file2.path, excludedFolders2)).map((file2) => ({
      path: file2.path,
      basename: file2.basename,
      extension: file2.extension.toLowerCase(),
      timestamp: file2.stat.mtime
    })).slice(0, plugin2.settings.focusMaxRecentFiles);
  }
  function filterRecentFiles(recentFiles, query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return recentFiles;
    return recentFiles.filter((entry) => `${entry.basename} ${entry.path}`.toLowerCase().includes(normalized));
  }
  function bookmarkMatchesQuery(item, query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return true;
    return `${item.title || ""} ${item.path || ""} ${item.url || ""} ${item.query || ""}`.toLowerCase().includes(normalized);
  }
  function getBookmarkDisplayName(plugin2, item) {
    if (item.title) return item.title;
    if (item.type === "file" && item.path) {
      const file2 = plugin2.app.vault.getAbstractFileByPath(item.path);
      return file2 instanceof TFile ? file2.basename : item.path;
    }
    if (item.type === "folder" && item.path) {
      return item.path.split("/").pop() || item.path;
    }
    if (item.type === "search") return item.query || "Search";
    if (item.type === "url") return item.url || "URL";
    if (item.type === "graph") return "Graph";
    return "Group";
  }
  function getBookmarkSubtitle(plugin2, item) {
    if (!plugin2.settings.focusShowPaths) return "";
    if (item.type === "file" || item.type === "folder") return item.path || "";
    if (item.type === "url") return item.url || "";
    if (item.type === "search") return item.query || "";
    if (item.type === "group") return `${item.items?.length || 0} items`;
    return "";
  }
  function getBookmarkIcon(item) {
    if (item.type === "group" || item.type === "folder") return BiFolder;
    if (item.type === "search") return IoIosSearch;
    if (item.type === "graph") return FaProjectDiagram;
    if (item.type === "url") return FaGlobe;
    return BiFile;
  }
  function getEnabledPlugin(plugin2, pluginId) {
    const internalPlugins = plugin2.app.internalPlugins;
    const enabledPlugin = internalPlugins?.getEnabledPluginById?.(pluginId);
    if (enabledPlugin) return enabledPlugin;
    const pluginRecord = internalPlugins?.plugins?.[pluginId];
    if (pluginRecord?._loaded && pluginRecord.instance) return pluginRecord.instance;
    return null;
  }
  function showFocusContextMenu(plugin2, item, event) {
    const menu = new Menu();
    if (item.path) {
      const entry = plugin2.app.vault.getAbstractFileByPath(item.path);
      if (entry instanceof TFile) menu.addItem((action) => action.setTitle("Reveal in File Focus").onClick(() => window.dispatchEvent(new CustomEvent(eventTypes.revealFile, { detail: { file: entry } }))));
      if (entry instanceof TFolder) menu.addItem((action) => action.setTitle("Reveal folder in File Focus").onClick(() => window.dispatchEvent(new CustomEvent(eventTypes.revealFolder, { detail: { folder: entry } }))));
    }
    const value = item.url || item.path || item.query;
    if (value) menu.addItem((action) => action.setTitle(item.url ? "Copy URL" : "Copy path or query").onClick(async () => {
      try {
        await navigator.clipboard.writeText(value);
        new Notice("Copied.");
      } catch (error) {
        new Notice(`Clipboard unavailable: ${error instanceof Error ? error.message : String(error)}`);
      }
    }));
    if (!value) {
      new Notice("Tap this bookmark to open it.");
      return;
    }
    menu.showAtPosition(menuPosition(event));
  }

  // src/components/Mobile/MobileNavigator.tsx
  function MobileNavigator({ plugin: plugin2 }) {
    const [view2, setView] = Recoil_index_22(view);
    const [path, setPath] = Recoil_index_22(activeFolderPath);
    const [folder2, setFolder] = Recoil_index_22(focusedFolder);
    const [files] = Recoil_index_22(ozFileList);
    const host = (0, import_react14.useRef)(null), pane = (0, import_react14.useRef)(null), fileStart = (0, import_react14.useRef)(null);
    const folderActions = (0, import_react14.useRef)([]), fileActions = (0, import_react14.useRef)([]);
    const [width, setWidth] = (0, import_react14.useState)(0);
    const pendingJump = (0, import_react14.useRef)(false);
    const [jump, setJump] = (0, import_react14.useState)(0);
    const [ratio, setRatio] = (0, import_react14.useState)(() => {
      const value = Number(localStorage.getItem("fjgFileFocus-mobile-column-ratio"));
      return value >= 0.25 && value <= 0.55 ? value : 0.35;
    });
    const wide = width >= 560;
    const focusMode = view2 === "recent" || view2 === "bookmarks";
    const atRoot = !path || path === "/";
    const [rootFilesVisible, setRootFilesVisible] = (0, import_react14.useState)(false);
    const showFiles = !atRoot || rootFilesVisible;
    (0, import_react14.useEffect)(() => {
      setRootFilesVisible(false);
    }, [path]);
    (0, import_react14.useEffect)(() => {
      const show = () => setRootFilesVisible(true);
      window.addEventListener("ffm-show-root-files", show);
      return () => window.removeEventListener("ffm-show-root-files", show);
    }, []);
    const scrollToFiles = () => {
      if (!wide && showFiles && fileStart.current && pane.current && files.length) {
        pane.current.scrollTop = fileStart.current.offsetTop - pane.current.offsetTop - (plugin2.settings.fixedHeaderInFileList ? 44 : 0);
      }
    };
    (0, import_react14.useLayoutEffect)(() => {
      const observer = new ResizeObserver(() => setWidth(host.current?.getBoundingClientRect().width || 0));
      if (host.current) observer.observe(host.current);
      return () => observer.disconnect();
    }, []);
    (0, import_react14.useLayoutEffect)(() => {
      pendingJump.current = Boolean(path) && !focusMode;
    }, [path, wide, focusMode, jump]);
    (0, import_react14.useLayoutEffect)(() => {
      if (!path || focusMode || !pendingJump.current || !files.length) return;
      if (!wide) {
        const selected = plugin2.app.vault.getAbstractFileByPath(path);
        if (selected instanceof TFolder && selected !== folder2) setFolder(selected);
      }
      let second = 0;
      const frame = requestAnimationFrame(() => {
        second = requestAnimationFrame(() => {
          scrollToFiles();
          pendingJump.current = false;
        });
      });
      return () => {
        cancelAnimationFrame(frame);
        cancelAnimationFrame(second);
      };
    }, [path, wide, files, focusMode, jump]);
    (0, import_react14.useEffect)(() => {
      const choose = (event) => {
        const selected = event.detail;
        if (!(selected instanceof TFolder)) return;
        if (!wide) setFolder(selected);
        setPath(selected.path);
        setView("file");
        setJump((value) => value + 1);
        requestAnimationFrame(scrollToFiles);
      };
      window.addEventListener(FOLDER_SELECTED, choose);
      return () => window.removeEventListener(FOLDER_SELECTED, choose);
    }, [wide, files]);
    const navigate = (target) => {
      setRootFilesVisible(false);
      setFolder(target);
      setPath(target.path);
      setView("file");
      setJump((value) => value + 1);
      requestAnimationFrame(scrollToFiles);
    };
    const goBack = () => {
      if (focusMode) {
        setView("file");
        return;
      }
      const current = plugin2.app.vault.getAbstractFileByPath(path);
      if (current instanceof TFolder && current.parent) navigate(current.parent);
      else {
        setRootFilesVisible(false);
        if (pane.current) pane.current.scrollTop = 0;
      }
    };
    const backPress = useLongPress(() => navigate(plugin2.app.vault.getRoot()), 500);
    const run = (action, event) => {
      try {
        Promise.resolve(action.run(event)).catch((error) => new Notice(`${action.title}: ${error?.message || error}`));
      } catch (error) {
        new Notice(`${action.title}: ${error instanceof Error ? error.message : String(error)}`);
      }
    };
    const fileAction = (id, event) => {
      const action = fileActions.current.find((item) => item.id === id);
      if (action) run(action, event);
      else new Notice("The navigator is still loading. Try again shortly.");
    };
    const overflow = (event) => {
      const menu = new Menu();
      const add = (title, action) => menu.addItem((item) => item.setTitle(title).onClick(() => run({ id: title, title, run: action }, event)));
      add("Browse subfolders", () => {
        setView("file");
        if (pane.current) pane.current.scrollTop = 0;
      });
      if (atRoot) add(rootFilesVisible ? "Hide vault-root files" : "Show vault-root files", () => setRootFilesVisible((value) => !value));
      add("Recent Notes", () => setView("recent"));
      add("Jump to vault root", () => navigate(plugin2.app.vault.getRoot()));
      const sections = [["Folders", folderActions.current], ["Notes", fileActions.current.filter((a) => !["search", "new-note"].includes(a.id))]];
      for (const [label, actions] of sections) {
        menu.addSeparator();
        menu.addItem((item) => item.setTitle(label).setDisabled(true));
        for (const action of actions.filter((a) => a.visible !== false)) menu.addItem((item) => item.setTitle(action.title).onClick((e) => run(action, e)));
      }
      menu.showAtPosition({ x: event.clientX, y: event.clientY });
    };
    const toolbar = /* @__PURE__ */ import_react14.default.createElement("div", { className: `ffm-toolbar${plugin2.settings.fixedHeaderInFileList ? " ffm-toolbar-fixed" : ""}`, role: "toolbar", "aria-label": "File Focus" }, /* @__PURE__ */ import_react14.default.createElement("button", { className: "ffm-back", "aria-label": `Back from ${path || "vault root"}. Hold to jump to root.`, title: path || "Vault root", onClick: goBack, onContextMenu: (e) => {
      e.preventDefault();
      navigate(plugin2.app.vault.getRoot());
    }, ...backPress }, /* @__PURE__ */ import_react14.default.createElement(FaArrowCircleLeft, null), /* @__PURE__ */ import_react14.default.createElement("span", null, focusMode ? view2 : path?.split("/").pop() || plugin2.app.vault.getName())), /* @__PURE__ */ import_react14.default.createElement("button", { "aria-label": "Search", title: "Search", onClick: (e) => {
      if (focusMode) window.dispatchEvent(new Event(FOCUS_SEARCH));
      else {
        if (atRoot) setRootFilesVisible(true);
        fileAction("search", e);
      }
    } }, /* @__PURE__ */ import_react14.default.createElement(IoIosSearch, null)), /* @__PURE__ */ import_react14.default.createElement("button", { "aria-label": "New note", title: "New note", onClick: (e) => fileAction("new-note", e) }, /* @__PURE__ */ import_react14.default.createElement(IoIosAddCircle, null)), plugin2.settings.mobileToolbarShortcut === "folder-navigator" ? /* @__PURE__ */ import_react14.default.createElement("button", { "aria-label": "Open Folder Navigator", title: "Open Folder Navigator", onClick: (e) => {
      const action = folderActions.current.find((item) => item.id === "folder-navigator");
      if (action) run(action, e);
    } }, /* @__PURE__ */ import_react14.default.createElement(FaFolderOpen, null)) : /* @__PURE__ */ import_react14.default.createElement("button", { "aria-label": "Recent", title: "Recent", "aria-pressed": view2 === "recent", onClick: () => setView("recent") }, /* @__PURE__ */ import_react14.default.createElement(FaHistory, null)), /* @__PURE__ */ import_react14.default.createElement("button", { "aria-label": "Bookmarks", title: "Bookmarks", "aria-pressed": view2 === "bookmarks", onClick: () => setView("bookmarks") }, /* @__PURE__ */ import_react14.default.createElement(FaRegBookmark, null)), /* @__PURE__ */ import_react14.default.createElement("button", { "aria-label": "More actions", title: "More actions", onClick: overflow }, "\u22EF"));
    const resize = (e) => {
      if (!host.current) return;
      const rect = host.current.getBoundingClientRect();
      const next = Math.max(0.25, Math.min(0.55, (e.clientX - rect.left) / rect.width));
      setRatio(next);
      localStorage.setItem("fjgFileFocus-mobile-column-ratio", String(next));
    };
    return /* @__PURE__ */ import_react14.default.createElement("div", { ref: host, className: `ffm-navigator ${wide ? "ffm-wide" : "ffm-compact"} ${plugin2.settings.fixedHeaderInFileList ? "" : "ffm-unpinned"} ${showFiles ? "" : "ffm-root-folders-only"}`, "data-layout": wide ? "columns" : "drilldown", style: { "--ffm-folder-ratio": `${ratio * 100}%` } }, /* @__PURE__ */ import_react14.default.createElement("div", { ref: pane, className: "ffm-pane ffm-main-scroll" }, toolbar, /* @__PURE__ */ import_react14.default.createElement("div", { className: "ffm-columns", hidden: focusMode }, /* @__PURE__ */ import_react14.default.createElement("div", { className: "ffm-folder-column", "aria-label": "Folders" }, /* @__PURE__ */ import_react14.default.createElement(MainFolder, { plugin: plugin2, adaptive: true, actionsRef: folderActions })), wide && showFiles && /* @__PURE__ */ import_react14.default.createElement("div", { className: "ffm-divider", role: "separator", "aria-label": "Resize folder column", "aria-orientation": "vertical", "aria-valuemin": 25, "aria-valuemax": 55, "aria-valuenow": Math.round(ratio * 100), tabIndex: 0, onPointerDown: (e) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      resize(e);
    }, onPointerMove: (e) => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) resize(e);
    }, onKeyDown: (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        const n = Math.max(0.25, Math.min(0.55, ratio + (e.key === "ArrowLeft" ? -0.025 : 0.025)));
        setRatio(n);
        localStorage.setItem("fjgFileFocus-mobile-column-ratio", String(n));
      }
    } }), /* @__PURE__ */ import_react14.default.createElement("div", { ref: fileStart, hidden: !showFiles, className: `ffm-file-column${wide ? " ffm-pane" : ""}`, "aria-label": "Folder files" }, /* @__PURE__ */ import_react14.default.createElement(FileComponent, { plugin: plugin2, wide, adaptive: true, actionsRef: fileActions }))), focusMode && /* @__PURE__ */ import_react14.default.createElement(FocusPanel, { plugin: plugin2, mode: view2, adaptive: true })));
  }

  // src/components/Mobile/policy.ts
  function useMobileOptimization(isMobile, enabled) {
    return isMobile && enabled === true;
  }

  // src/components/MainView/MainComponent.tsx
  var import_react23 = __toESM(require_react());

  // src/components/FileView/FileComponent.tsx
  var import_react17 = __toESM(require_react());

  // src/hooks/useLongPress.tsx
  var import_react15 = __toESM(require_react());
  function isMouseEvent2(e) {
    return e && "screenX" in e;
  }
  function useLongPress2(callback = (e) => {
  }, ms = 300) {
    const [startLongPress, setStartLongPress] = (0, import_react15.useState)(false);
    const [longPressEvent, setLongPressEvent] = (0, import_react15.useState)(null);
    const [startLocationY, setStartLocationY] = (0, import_react15.useState)(null);
    (0, import_react15.useEffect)(() => {
      let timerId;
      if (startLongPress && startLocationY) {
        timerId = setTimeout(() => {
          callback(longPressEvent);
          stop(longPressEvent);
        }, ms);
      } else {
        clearTimeout(timerId);
      }
      return () => {
        clearTimeout(timerId);
      };
    }, [callback, ms, startLongPress, startLocationY]);
    const start = (0, import_react15.useCallback)((e) => {
      setStartLongPress(true);
      setStartLocationY(e.touches[0].clientY);
      setLongPressEvent(e);
    }, []);
    const move = (0, import_react15.useCallback)(
      (e) => {
        if (startLocationY) {
          let dist = Math.abs(e.touches[0].clientY - startLocationY);
          if (dist >= 0.5) stop(e);
        }
      },
      [startLocationY]
    );
    const stop = (0, import_react15.useCallback)((e) => {
      setStartLongPress(false);
      setLongPressEvent(null);
    }, []);
    return {
      onTouchStart: start,
      onTouchMove: move,
      onTouchEnd: stop
    };
  }

  // src/components/FileView/handlers.ts
  var handleOnDropFiles2 = (params2) => {
    let { files, activeFolderPath: activeFolderPath2, plugin: plugin2 } = params2;
    files.map(async (file2) => {
      file2.arrayBuffer().then((arrayBuffer) => {
        plugin2.app.vault.adapter.writeBinary(activeFolderPath2 + "/" + file2.name, arrayBuffer);
      });
    });
  };
  var getFilesWithName2 = (params2) => {
    let { searchPhrase, searchFolder, plugin: plugin2, getAllFiles, excludedExtensions: excludedExtensions2, excludedFolders: excludedFolders2 } = params2;
    var files = getFilesUnderPath({
      path: searchFolder,
      plugin: plugin2,
      excludedExtensions: excludedExtensions2,
      excludedFolders: excludedFolders2,
      getAllFiles
    });
    var filteredFiles = files.filter((file2) => file2.basename.toLowerCase().includes(searchPhrase.toLowerCase().trimStart()));
    return filteredFiles;
  };
  var getFileTags2 = (params2) => {
    let { f: f2, plugin: plugin2 } = params2;
    let mdFile = plugin2.app.vault.getAbstractFileByPath(f2.path);
    if (!mdFile) return [];
    let fileCache = plugin2.app.metadataCache.getFileCache(mdFile);
    let fileTags = [];
    if (fileCache.tags) {
      for (let fileTag of fileCache.tags) {
        fileTags.push(fileTag.tag);
      }
    }
    if (fileCache.frontmatter && fileCache.frontmatter["tags"]) {
      let tagsFM = fileCache.frontmatter["tags"];
      if (typeof tagsFM === "string") {
        let fileFMTags = tagsFM.split(",");
        for (let i = 0; i < fileFMTags.length; i++) {
          fileTags.push(fileFMTags[i]);
        }
      } else if (Array.isArray(tagsFM)) {
        for (let i = 0; i < tagsFM.length; i++) {
          fileTags.push(tagsFM[i]);
        }
      }
    }
    return fileTags;
  };
  var getFilesWithTag2 = (params2) => {
    let { searchTag, plugin: plugin2, focusedFolder: focusedFolder2, excludedExtensions: excludedExtensions2, excludedFolders: excludedFolders2 } = params2;
    let filesWithTag = /* @__PURE__ */ new Set();
    let ozFiles = getFilesUnderPath({
      path: plugin2.settings.allSearchOnlyInFocusedFolder ? focusedFolder2.path : "/",
      plugin: plugin2,
      excludedExtensions: excludedExtensions2,
      excludedFolders: excludedFolders2,
      getAllFiles: true
    });
    for (let ozFile of ozFiles) {
      let fileTags = getFileTags2({
        f: ozFile,
        plugin: plugin2
      });
      for (let fileTag of fileTags) {
        if (fileTag.toLowerCase().contains(searchTag.toLowerCase().trimStart())) {
          if (!filesWithTag.has(ozFile)) filesWithTag.add(ozFile);
        }
      }
    }
    return filesWithTag;
  };
  var handleRevealActiveFileButton = (params2) => {
    let { plugin: plugin2 } = params2;
    let event = new CustomEvent(eventTypes.revealFile, {
      detail: {
        file: plugin2.app.workspace.getActiveFile()
      }
    });
    window.dispatchEvent(event);
  };
  var sortedFiles2 = (params2) => {
    let { fileList, plugin: plugin2, ozPinnedFiles } = params2;
    let sortedfileList = fileList;
    if (plugin2.settings.folderNote) {
      sortedfileList = sortedfileList.filter((f2) => !f2.isFolderNote);
    }
    sortedfileList = sortedfileList.sort((a, b2) => {
      if (ozPinnedFiles.some((f2) => f2.path === a.path) && !ozPinnedFiles.some((f2) => f2.path === b2.path)) {
        return -1;
      } else if (!ozPinnedFiles.some((f2) => f2.path === a.path) && ozPinnedFiles.some((f2) => f2.path === b2.path)) {
        return 1;
      }
      if (plugin2.settings.sortReverse) {
        [a, b2] = [b2, a];
      }
      if (plugin2.settings.sortFilesBy === "name") {
        return plugin2.settings.showFileNameAsFullPath ? a.path.localeCompare(b2.path, "en", { numeric: true }) : a.basename.localeCompare(b2.basename, "en", { numeric: true });
      } else if (plugin2.settings.sortFilesBy === "last-update") {
        return b2.stat.mtime - a.stat.mtime;
      } else if (plugin2.settings.sortFilesBy === "created") {
        return b2.stat.ctime - a.stat.ctime;
      } else if (plugin2.settings.sortFilesBy === "file-size") {
        return b2.stat.size - a.stat.size;
      }
    });
    return sortedfileList;
  };
  var sortFileListClickHandle2 = (params2) => {
    let { e, plugin: plugin2, forceUpdate } = params2;
    const sortMenu = new Menu();
    const changeSortSettingTo = (newValue) => {
      plugin2.settings.sortFilesBy = newValue;
      plugin2.saveSettings();
      forceUpdate();
    };
    const addMenuItem = (label, low, high, value) => {
      sortMenu.addItem((menuItem) => {
        const order = plugin2.settings.sortReverse ? `${high} to ${low}` : `${low} to ${high}`;
        menuItem.setTitle(`${label} (${order})`);
        menuItem.setIcon(value === plugin2.settings.sortFilesBy ? "checkmark" : "spaceIcon");
        menuItem.onClick(() => changeSortSettingTo(value));
      });
    };
    addMenuItem("File Name", "A", "Z", "name");
    addMenuItem("Created", "New", "Old", "created");
    addMenuItem("File Size", "Big", "Small", "file-size");
    addMenuItem("Last Update", "New", "Old", "last-update");
    sortMenu.addSeparator();
    sortMenu.addItem((menuItem) => {
      menuItem.setTitle("Reverse Order");
      menuItem.setIcon(plugin2.settings.sortReverse ? "checkmark" : "spaceIcon");
      menuItem.onClick(() => {
        plugin2.settings.sortReverse = !plugin2.settings.sortReverse;
        plugin2.saveSettings();
        forceUpdate();
      });
    });
    sortMenu.showAtPosition({ x: e.pageX, y: e.pageY });
  };
  var searchAllRegex2 = new RegExp("all:(.*)?");
  var searchTagRegex2 = new RegExp("tag:(.*)?");
  var handleSearch2 = (params2) => {
    let { e, activeFolderPath: activeFolderPath2, setSearchPhrase, setOzFileList, setTreeHeader, plugin: plugin2, focusedFolder: focusedFolder2, excludedExtensions: excludedExtensions2, excludedFolders: excludedFolders2 } = params2;
    var searchPhrase = e.target.value;
    setSearchPhrase(searchPhrase);
    var searchFolder = activeFolderPath2;
    let tagRegexMatch = searchPhrase.match(searchTagRegex2);
    if (tagRegexMatch) {
      setTreeHeader("Files with Tag");
      if (tagRegexMatch[1] === void 0 || tagRegexMatch[1].replace(/\s/g, "").length === 0) {
        setOzFileList([]);
        return;
      }
      setOzFileList([
        ...getFilesWithTag2({
          searchTag: tagRegexMatch[1],
          plugin: plugin2,
          focusedFolder: focusedFolder2,
          excludedExtensions: excludedExtensions2,
          excludedFolders: excludedFolders2
        })
      ]);
      return;
    }
    let allRegexMatch = searchPhrase.match(searchAllRegex2);
    if (allRegexMatch) {
      searchPhrase = allRegexMatch[1] ? allRegexMatch[1] : "";
      searchFolder = plugin2.settings.allSearchOnlyInFocusedFolder ? focusedFolder2.path : "/";
      setTreeHeader("All Files");
    } else {
      setTreeHeader(getFolderName(activeFolderPath2, plugin2.app));
    }
    let getAllFiles = allRegexMatch ? true : false;
    let filteredFiles = getFilesWithName2({
      searchPhrase,
      searchFolder,
      plugin: plugin2,
      excludedExtensions: excludedExtensions2,
      excludedFolders: excludedFolders2,
      getAllFiles
    });
    setOzFileList(filteredFiles);
  };
  var openFile4 = (params2) => {
    let { file: file2, e, plugin: plugin2, setActiveOzFile } = params2;
    openFile({
      file: file2,
      app: plugin2.app,
      newLeaf: (e.ctrlKey || e.metaKey) && !(e.shiftKey || e.altKey),
      leafBySplit: (e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey)
    });
    setActiveOzFile(file2);
  };
  var getFileIcon2 = (params2) => {
    let { file: file2 } = params2;
    return file2.extension === "pdf" ? AiFillFilePdf : ["png", "jpg", "jpeg", "svg"].contains(file2.extension) ? AiFillFileImage : ["doc", "docx"].contains(file2.extension) ? AiFillFileWord : BiFile;
  };
  var dragStarted2 = (params2) => {
    let { e, file: file2, plugin: plugin2 } = params2;
    let obsidianFile = plugin2.app.vault.getAbstractFileByPath(file2.path);
    if (!obsidianFile) return;
    e.dataTransfer.setData("application/json", JSON.stringify({ filePath: file2.path }));
    let dragManager = plugin2.app.dragManager;
    const dragData = dragManager.dragFile(e.nativeEvent, obsidianFile);
    dragManager.onDragStart(e.nativeEvent, dragData);
  };
  var onAuxClick2 = (params2) => {
    let { e, plugin: plugin2, file: file2 } = params2;
    if (e.button === 1) openFileInNewTab(plugin2.app, file2);
  };
  var mouseEnteredOnFile2 = (params2) => {
    let { e, file: file2, plugin: plugin2, setHoverActive } = params2;
    setHoverActive(true);
    if (plugin2.settings.filePreviewOnHover && (e.ctrlKey || e.metaKey)) {
      plugin2.app.workspace.trigger("link-hover", {}, e.target, file2.path, file2.path);
    }
  };
  var mouseLeftFile2 = (params2) => {
    params2.setHoverActive(false);
  };
  var triggerContextMenu2 = (params2) => {
    let { file: file2, e, ozPinnedFiles, setOzPinnedFiles, plugin: plugin2 } = params2;
    const fileMenu = new Menu();
    let fileToTrigger = plugin2.app.vault.getAbstractFileByPath(file2.path);
    if (!fileToTrigger) return;
    fileMenu.addItem((menuItem) => {
      menuItem.setIcon("pin");
      const isAlreadyPinned = ozPinnedFiles.some((pinnedFile) => pinnedFile.path === file2.path);
      if (isAlreadyPinned) menuItem.setTitle("Unpin");
      else menuItem.setTitle("Pin to Top");
      menuItem.onClick((ev) => {
        if (isAlreadyPinned) {
          let newPinnedFiles = ozPinnedFiles.filter((pinnedFile) => pinnedFile.path !== file2.path);
          setOzPinnedFiles(newPinnedFiles);
        } else {
          setOzPinnedFiles([...ozPinnedFiles, file2]);
        }
      });
    });
    fileMenu.addItem((menuItem) => {
      menuItem.setTitle("Rename");
      menuItem.setIcon("pencil");
      menuItem.onClick((ev) => {
        let vaultChangeModal = new VaultChangeModal(plugin2, file2, "rename");
        vaultChangeModal.open();
      });
    });
    fileMenu.addItem((menuItem) => {
      menuItem.setTitle("Delete");
      menuItem.setIcon("trash");
      menuItem.onClick((ev) => {
        let confirmationModal = new ConfirmationModal(
          plugin2,
          `Are you sure you want to delete the file "${file2.basename}${file2.extension === "md" ? "" : file2.extension}"?`,
          function() {
            let deleteOption = plugin2.settings.deleteFileOption;
            let fileToDelete = plugin2.app.vault.getAbstractFileByPath(file2.path);
            if (!fileToDelete) return;
            if (deleteOption === "permanent") {
              plugin2.app.vault.delete(fileToDelete, true);
            } else if (deleteOption === "system-trash") {
              plugin2.app.vault.trash(fileToDelete, true);
            } else if (deleteOption === "trash") {
              plugin2.app.vault.trash(fileToDelete, false);
            }
          }
        );
        confirmationModal.open();
      });
    });
    fileMenu.addItem((menuItem) => {
      menuItem.setIcon("go-to-file");
      menuItem.setTitle("Open in a new tab");
      menuItem.onClick((ev) => {
        openFileInNewTab(plugin2.app, file2);
      });
    });
    fileMenu.addItem((menuItem) => {
      menuItem.setIcon("go-to-file");
      menuItem.setTitle("Open to right");
      menuItem.onClick((ev) => {
        openFileInNewTabGroup(plugin2.app, file2);
      });
    });
    fileMenu.addItem((menuItem) => {
      menuItem.setTitle("Make a copy");
      menuItem.setIcon("documents");
      menuItem.onClick((ev) => {
        let fileToCopy = plugin2.app.vault.getAbstractFileByPath(file2.path);
        if (fileToCopy) {
          plugin2.app.vault.copy(fileToCopy, `${file2.parent.path}/${file2.basename} 1.${file2.extension}`);
        }
      });
    });
    if (!internalPluginLoaded("file-explorer", plugin2.app)) {
      fileMenu.addItem((menuItem) => {
        menuItem.setTitle("Move file to...");
        menuItem.setIcon("paper-plane");
        menuItem.onClick((ev) => {
          let fileMoveSuggester = new MoveSuggestionModal(plugin2.app, file2);
          fileMoveSuggester.open();
        });
      });
    }
    plugin2.app.workspace.trigger("file-menu", fileMenu, fileToTrigger, "file-explorer");
    if (isMouseEvent2(e)) {
      fileMenu.showAtPosition({ x: e.pageX, y: e.pageY });
    } else {
      fileMenu.showAtPosition({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY });
    }
    return false;
  };

  // node_modules/react-lazy-load/dist/LazyLoad.js
  var import_react16 = __toESM(require_react(), 1);
  var h = Object.defineProperty;
  var u = (n, t, e) => t in n ? h(n, t, { enumerable: true, configurable: true, writable: true, value: e }) : n[t] = e;
  var c = (n, t, e) => (u(n, typeof t != "symbol" ? t + "" : t, e), e);
  var p = (n, t) => typeof getComputedStyle < "u" ? getComputedStyle(n, null).getPropertyValue(t) : n.style.getPropertyValue(t);
  var y = (n) => p(n, "overflow") + p(n, "overflow-y") + p(n, "overflow-x");
  var w = (n) => {
    if (!(n instanceof HTMLElement))
      return window;
    let t = n;
    for (; t && !(t === document.body || t === document.documentElement || !t.parentNode); ) {
      if (/(scroll|auto)/.test(y(t)))
        return t;
      t = t.parentNode;
    }
    return window;
  };
  var g = class extends import_react16.Component {
    constructor(e) {
      super(e);
      c(this, "elementObserver");
      c(this, "wrapper");
      c(this, "lazyLoadHandler", (e2) => {
        var o, i;
        const {
          onContentVisible: s
        } = this.props, [r] = e2, {
          isIntersecting: l
        } = r;
        if (l) {
          this.setState({
            visible: true
          }, () => {
            s && s();
          });
          const a = (o = this.wrapper) == null ? void 0 : o.current;
          a && a instanceof HTMLElement && ((i = this.elementObserver) == null || i.unobserve(a));
        }
      });
      this.elementObserver = null, this.wrapper = import_react16.default.createRef(), this.state = {
        visible: false
      };
    }
    componentDidMount() {
      var o;
      this.getEventNode();
      const {
        offset: e,
        threshold: s
      } = this.props, r = {
        rootMargin: typeof e == "number" ? `${e}px` : e || "0px",
        threshold: s || 0
      };
      this.elementObserver = new IntersectionObserver(this.lazyLoadHandler, r);
      const l = (o = this.wrapper) == null ? void 0 : o.current;
      l instanceof HTMLElement && this.elementObserver.observe(l);
    }
    shouldComponentUpdate(e, s) {
      return s.visible;
    }
    componentWillUnmount() {
      var s, r;
      const e = (s = this.wrapper) == null ? void 0 : s.current;
      e && e instanceof HTMLElement && ((r = this.elementObserver) == null || r.unobserve(e));
    }
    getEventNode() {
      var e;
      return w((e = this.wrapper) == null ? void 0 : e.current);
    }
    render() {
      const {
        children: e,
        className: s,
        height: r,
        width: l,
        elementType: o
      } = this.props, {
        visible: i
      } = this.state, a = {
        height: r,
        width: l
      }, d = `LazyLoad${i ? " is-visible" : ""}${s ? ` ${s}` : ""}`;
      return (0, import_react16.createElement)(o || "div", {
        className: d,
        style: a,
        ref: this.wrapper
      }, i && import_react16.Children.only(e));
    }
  };
  c(g, "defaultProps", {
    elementType: "div",
    className: "",
    offset: 0,
    threshold: 0,
    width: null,
    onContentVisible: null,
    height: null
  });

  // src/components/FileView/FileComponent.tsx
  var SEMANTIC_LINK_SUGGESTIONS_COMMAND_ID2 = "semantic-graph-builder:open-link-suggestions";
  var AUTO_TITLE_COMMAND_ID2 = "auto-title:generate-title";
  var DELETE_CURRENT_FILE_COMMAND_ID2 = "app:delete-file";
  var MOVE_CURRENT_FILE_COMMAND_ID2 = "file-explorer:move-file";
  var QUICK_FORMAT_SYSTEM_PROMPT2 = `You are an AI Markdown formatting assistant for Franklin Garrett.

Your task is to deeply format the user's active Obsidian note into clean Markdown.

Rules:
- Preserve every substantive idea, item, name, date, number, folder name, link, instruction, and action item from the source.
- Do not summarize, shorten, invent, delete, or add unsupported content.
- Correct obvious spelling, punctuation, capitalization, and spacing errors when the intent is clear.
- Remove duplicate bullet characters, pasted bullet symbols, broken indentation, and accidental list artifacts.
- If the source has pasted bullet symbols, partially formatted bullets, hanging wrapped lines, or indented fragments, actively rewrite them into clean Markdown bullets and nested bullets.
- Use one H1 title when the source has a clear title.
- Use H2 headings for major sections.
- Use Markdown bullets and nested bullets where they make the note easier to scan.
- Keep existing Markdown links, wiki links, URLs, tags, tasks, and code blocks intact.
- Preserve the order of the source unless nearby lines clearly belong under the same heading or nested bullet.
- Do not return the source unchanged unless it is already clean, coherent Markdown with headings and properly nested bullets.
- Output only the formatted Markdown note. Do not include a preamble, explanation, comments, or a wrapping code fence.`;
  var stripWrappingCodeFence2 = (content) => {
    const trimmed = content.trim();
    const match = trimmed.match(/^```(?:markdown|md)?\s*\n([\s\S]*?)\n```\s*$/i);
    return match ? match[1].trim() : trimmed;
  };
  var splitFrontmatter2 = (content) => {
    const match = content.match(/^(---\s*\n[\s\S]*?\n---)(\s*\n)?([\s\S]*)$/);
    if (!match) {
      return {
        frontmatter: "",
        body: content
      };
    }
    return {
      frontmatter: match[1],
      body: match[3] || ""
    };
  };
  var getAIGrammarSettings2 = (plugin2) => {
    const plugins = plugin2.app.plugins;
    const aiGrammarPlugin = plugins?.getPlugin?.("ai-grammar-corrector");
    return aiGrammarPlugin?.settings;
  };
  var formatNoteContentWithAI2 = async (content, settings) => {
    const { frontmatter, body } = splitFrontmatter2(content);
    const bodyToFormat = body.trim();
    if (!bodyToFormat) return content;
    const formattedBody = settings.provider === "openai" ? await callOpenAIFormatter2(bodyToFormat, settings) : await callAnthropicFormatter2(bodyToFormat, settings);
    const cleanedBody = stripWrappingCodeFence2(formattedBody);
    return frontmatter ? `${frontmatter}

${cleanedBody}
` : `${cleanedBody}
`;
  };
  var callAnthropicFormatter2 = async (content, settings) => {
    const res = await requestUrl({
      url: "https://api.anthropic.com/v1/messages",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": settings.apiKey || "",
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: settings.anthropicModel || "claude-sonnet-4-5",
        max_tokens: 8192,
        temperature: 0.2,
        system: QUICK_FORMAT_SYSTEM_PROMPT2,
        messages: [{ role: "user", content: `Format this Obsidian note body into clean Markdown:

${content}` }]
      }),
      throw: false
    });
    if (res.status === 401) throw new Error("Invalid Anthropic API key (401). Check AI Grammar Corrector settings.");
    if (res.status === 429) throw new Error("Anthropic rate limit hit (429). Wait a moment and try again.");
    if (res.status >= 400) {
      const apiMsg = res.json?.error?.message || res.text || "unknown error";
      throw new Error(`Anthropic API ${res.status}: ${apiMsg}`);
    }
    const output = res.json?.content?.[0]?.text;
    if (typeof output !== "string") throw new Error("Anthropic returned an unexpected response shape.");
    return output;
  };
  var callOpenAIFormatter2 = async (content, settings) => {
    const res = await requestUrl({
      url: "https://api.openai.com/v1/chat/completions",
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${settings.apiKey || ""}`
      },
      body: JSON.stringify({
        model: settings.openaiModel || "gpt-4o-mini",
        temperature: 0.2,
        messages: [
          { role: "system", content: QUICK_FORMAT_SYSTEM_PROMPT2 },
          { role: "user", content: `Format this Obsidian note body into clean Markdown:

${content}` }
        ]
      }),
      throw: false
    });
    if (res.status === 401) throw new Error("Invalid OpenAI API key (401). Check AI Grammar Corrector settings.");
    if (res.status === 429) throw new Error("OpenAI rate limit hit (429). Wait a moment and try again.");
    if (res.status >= 400) {
      const apiMsg = res.json?.error?.message || res.text || "unknown error";
      throw new Error(`OpenAI API ${res.status}: ${apiMsg}`);
    }
    const output = res.json?.choices?.[0]?.message?.content;
    if (typeof output !== "string") throw new Error("OpenAI returned an unexpected response shape.");
    return output;
  };
  function FileComponent2(props) {
    let searchInput = import_react17.default.useRef(null);
    const plugin2 = props.plugin;
    const [_view, setView] = Recoil_index_22(view);
    const [ozFileList2, setOzFileList] = Recoil_index_22(ozFileList);
    const [ozPinnedFiles] = Recoil_index_22(ozPinnedFileList);
    const [activeFolderPath2, setActiveFolderPath] = Recoil_index_22(activeFolderPath);
    const [excludedExtensions2] = Recoil_index_22(excludedExtensions);
    const [excludedFolders2] = Recoil_index_22(excludedFolders);
    const [showSubFolders2, setShowSubFolders] = Recoil_index_22(showSubFolders);
    const [focusedFolder2, _setFocusedFolder] = Recoil_index_22(focusedFolder);
    const [activeOzFile] = Recoil_index_22(activeOZFile);
    const [highlight, setHighlight] = (0, import_react17.useState)(false);
    const [searchPhrase, setSearchPhrase] = (0, import_react17.useState)("");
    const [searchBoxVisible, setSearchBoxVisible] = (0, import_react17.useState)(false);
    const [quickFormatRunning, setQuickFormatRunning] = (0, import_react17.useState)(false);
    const [treeHeader, setTreeHeader] = (0, import_react17.useState)(getFolderName(activeFolderPath2, plugin2.app));
    const colorfulHeaderClassName = getColorfulHeaderClassName(activeFolderPath2, plugin2);
    const forceUpdate = useForceUpdate();
    (0, import_react17.useEffect)(() => setTreeHeader(getFolderName(activeFolderPath2, plugin2.app)), [activeFolderPath2]);
    (0, import_react17.useEffect)(() => {
      setOzFileList(
        getFilesUnderPath({
          path: activeFolderPath2,
          plugin: plugin2,
          excludedExtensions: excludedExtensions2,
          excludedFolders: excludedFolders2
        })
      );
    }, [showSubFolders2, excludedExtensions2, excludedFolders2, plugin2.settings.showOnlySupportedFileTypes]);
    (0, import_react17.useEffect)(() => {
      if (searchBoxVisible) searchInput.current.focus();
    }, [searchBoxVisible]);
    const filesToList = (0, import_react17.useMemo)(
      () => sortedFiles2({
        fileList: ozFileList2,
        plugin: plugin2,
        ozPinnedFiles
      }),
      [excludedFolders2, excludedExtensions2, ozPinnedFiles, ozFileList2, plugin2.settings.sortFilesBy, plugin2.settings.sortReverse]
    );
    const handleGoBack = (e) => {
      setView("folder");
      setActiveFolderPath("");
    };
    const toggleSearchBox = () => {
      setSearchPhrase("");
      setSearchBoxVisible(!searchBoxVisible);
      setOzFileList(
        getFilesUnderPath({
          path: activeFolderPath2,
          plugin: plugin2,
          excludedExtensions: excludedExtensions2,
          excludedFolders: excludedFolders2
        })
      );
    };
    const toggleShowSubFolders = async () => {
      plugin2.settings.showFilesFromSubFolders = !showSubFolders2;
      await plugin2.saveSettings();
      setShowSubFolders(!showSubFolders2);
    };
    const copySelectedVaultFilePath = async () => {
      const activeFile = plugin2.app.workspace.getActiveFile();
      const filePath = activeOzFile?.path || activeFile?.path;
      if (!filePath) {
        new Notice("Select a note first.");
        return;
      }
      try {
        await navigator.clipboard.writeText(filePath);
        new Notice(`Copied file path: ${filePath}`);
      } catch (error) {
        new Notice(`Could not copy file path: ${error instanceof Error ? error.message : String(error)}`);
      }
    };
    const copySelectedNotePageText = async () => {
      const activeFile = plugin2.app.workspace.getActiveFile();
      const selectedPath = activeOzFile?.path || activeFile?.path;
      const file2 = selectedPath ? plugin2.app.vault.getAbstractFileByPath(selectedPath) : activeFile;
      if (!(file2 instanceof TFile) || file2.extension.toLowerCase() !== "md") {
        new Notice("Select a Markdown note first.");
        return;
      }
      try {
        const noteText = await plugin2.app.vault.cachedRead(file2);
        await navigator.clipboard.writeText(getPageText(noteText));
        new Notice("Copied page text without properties.");
      } catch (error) {
        console.error("FJG File Focus could not copy the selected note:", error);
        new Notice("Could not copy the page text to the clipboard.");
      }
    };
    const executeCommandById = async (commandId, unavailableNotice) => {
      const commands = plugin2.app.commands;
      if (!commands?.commands?.[commandId] || !commands?.executeCommandById) {
        new Notice(unavailableNotice);
        return false;
      }
      await Promise.resolve(commands.executeCommandById(commandId));
      return true;
    };
    const openSemanticLinkSuggestions = () => {
      void executeCommandById(SEMANTIC_LINK_SUGGESTIONS_COMMAND_ID2, "Semantic Graph Builder command is not available.");
    };
    const generateAutoTitle = async () => {
      const commandStarted = await executeCommandById(AUTO_TITLE_COMMAND_ID2, "Auto Title command is not available.");
      if (!commandStarted) return;
      window.setTimeout(() => {
        const activeFile = plugin2.app.workspace.getActiveFile();
        if (isMarkdownFile(activeFile)) {
          void ensureNotePropertiesWithNotice(plugin2, activeFile);
        }
      }, 1200);
    };
    const moveCurrentFile = () => void executeCommandById(MOVE_CURRENT_FILE_COMMAND_ID2, "Move current file command is not available.");
    const deleteCurrentFile = () => void executeCommandById(DELETE_CURRENT_FILE_COMMAND_ID2, "Delete current file command is not available.");
    const refreshCurrentNoteProperties = async () => {
      const activeFile = plugin2.app.workspace.getActiveFile();
      const selectedPath = activeOzFile?.path || activeFile?.path;
      const file2 = selectedPath ? plugin2.app.vault.getAbstractFileByPath(selectedPath) : activeFile;
      await ensureNotePropertiesWithNotice(plugin2, file2);
    };
    const quickFormatCurrentNote = async () => {
      if (quickFormatRunning) {
        new Notice("AI quick format is already running.");
        return;
      }
      const activeFile = plugin2.app.workspace.getActiveFile();
      const selectedPath = activeOzFile?.path || activeFile?.path;
      const file2 = selectedPath ? plugin2.app.vault.getAbstractFileByPath(selectedPath) : activeFile;
      if (!(file2 instanceof TFile)) {
        new Notice("Select a note first.");
        return;
      }
      if (file2.extension.toLowerCase() !== "md") {
        new Notice("Quick format only works on Markdown notes.");
        return;
      }
      const aiGrammarSettings = getAIGrammarSettings2(plugin2);
      if (!aiGrammarSettings) {
        new Notice("Enable AI Grammar Corrector before using AI quick format.");
        return;
      }
      if (!aiGrammarSettings.apiKey) {
        new Notice("Add an API key in AI Grammar Corrector settings before using AI quick format.");
        return;
      }
      setQuickFormatRunning(true);
      new Notice("AI formatting current note...");
      try {
        const originalContent = await plugin2.app.vault.read(file2);
        const formattedContent = await formatNoteContentWithAI2(originalContent, aiGrammarSettings);
        if (formattedContent === originalContent) {
          new Notice("AI returned no formatting changes. The note was left unchanged.", 8e3);
          return;
        }
        const latestContent = await plugin2.app.vault.read(file2);
        if (latestContent !== originalContent) {
          new Notice("The note changed while AI formatting was running. Nothing was written.");
          return;
        }
        await plugin2.app.vault.modify(file2, formattedContent);
        new Notice("AI formatted current note with Markdown.");
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        new Notice(`AI quick format failed: ${message}`, 8e3);
        console.error("FJG File Focus AI quick format failed:", error);
      } finally {
        setQuickFormatRunning(false);
      }
    };
    const topIconSize = 19;
    return /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(
      es_default,
      {
        onDrop: (files) => handleOnDropFiles2({
          files,
          activeFolderPath: activeFolderPath2,
          plugin: plugin2
        }),
        noClick: true,
        onDragEnter: () => setHighlight(true),
        onDragLeave: () => setHighlight(false),
        onDropAccepted: () => setHighlight(false),
        onDropRejected: () => setHighlight(false)
      },
      ({ getRootProps, getInputProps }) => /* @__PURE__ */ import_react17.default.createElement("div", { ...getRootProps(), className: highlight ? "drag-entered" : "", style: { width: "100%", height: "100%", position: "relative" } }, /* @__PURE__ */ import_react17.default.createElement("input", { ...getInputProps() }), /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-explorer-container" }, /* @__PURE__ */ import_react17.default.createElement("div", { className: `oz-file-tree-header-wrapper${plugin2.settings.fixedHeaderInFileList ? " file-tree-header-fixed" : ""}` }, /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-flex-container" }, /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button", style: { marginLeft: "0px" } }, ["Horizontal", "Vertical"].includes(plugin2.settings.evernoteView) ? /* @__PURE__ */ import_react17.default.createElement(
        IoIosCloseCircleOutline,
        {
          onClick: (e) => handleGoBack(e),
          size: topIconSize,
          "aria-label": "Close File Pane"
        }
      ) : /* @__PURE__ */ import_react17.default.createElement(
        IoIosArrowBack,
        {
          onClick: (e) => handleGoBack(e),
          size: topIconSize,
          "aria-label": "Go Back to Folder View"
        }
      )), /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button" }, /* @__PURE__ */ import_react17.default.createElement(FaTrash, { onClick: deleteCurrentFile, size: topIconSize - 2, "aria-label": "Delete Current File" })), /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button" }, /* @__PURE__ */ import_react17.default.createElement(
        MdFormatListBulleted,
        {
          onClick: () => void quickFormatCurrentNote(),
          size: topIconSize + 1,
          "aria-label": "Quick Format Current Note"
        }
      )), /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-buttons-right-block" }, plugin2.settings.revealActiveFileButton && /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button" }, /* @__PURE__ */ import_react17.default.createElement(
        BiCurrentLocation,
        {
          onClick: () => handleRevealActiveFileButton({ plugin: plugin2 }),
          size: topIconSize,
          "aria-label": "Reveal Active File"
        }
      )), /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button" }, /* @__PURE__ */ import_react17.default.createElement(
        MdLocationOn,
        {
          onClick: () => void refreshCurrentNoteProperties(),
          size: topIconSize + 1,
          "aria-label": "Refresh Note Properties"
        }
      )), /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button" }, /* @__PURE__ */ import_react17.default.createElement(FaFolderOpen, { onClick: moveCurrentFile, size: topIconSize - 1, "aria-label": "Move Current File" })), /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button" }, /* @__PURE__ */ import_react17.default.createElement(MdTitle, { onClick: () => void generateAutoTitle(), size: topIconSize, "aria-label": "Generate Auto Title" })), /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button" }, /* @__PURE__ */ import_react17.default.createElement(
        FaProjectDiagram,
        {
          onClick: openSemanticLinkSuggestions,
          size: topIconSize - 1,
          "aria-label": "Open Semantic Link Suggestions"
        }
      )), /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button" }, /* @__PURE__ */ import_react17.default.createElement(
        MdContentCopy,
        {
          onClick: () => void copySelectedNotePageText(),
          size: topIconSize,
          "aria-label": "Copy Page Text Without Properties"
        }
      )), /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button" }, /* @__PURE__ */ import_react17.default.createElement(
        BiCopy,
        {
          onClick: () => void copySelectedVaultFilePath(),
          size: topIconSize,
          "aria-label": "Copy Selected Note File Path"
        }
      )), plugin2.settings.showFilesFromSubFoldersButton && /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button" }, showSubFolders2 ? /* @__PURE__ */ import_react17.default.createElement(
        IoIosEyeOff,
        {
          onClick: toggleShowSubFolders,
          size: topIconSize,
          "aria-label": "Hide Files from Sub-Folders"
        }
      ) : /* @__PURE__ */ import_react17.default.createElement(
        IoIosEye,
        {
          onClick: toggleShowSubFolders,
          size: topIconSize,
          "aria-label": "Show Files from Sub-Folders"
        }
      )), plugin2.settings.searchFunction && /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button" }, /* @__PURE__ */ import_react17.default.createElement(IoIosSearch, { onClick: toggleSearchBox, size: topIconSize, "aria-label": "Search File by Name or Tag" })), /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button" }, /* @__PURE__ */ import_react17.default.createElement(
        CgSortAz,
        {
          size: topIconSize + 2,
          onClick: (e) => {
            sortFileListClickHandle2({ e, plugin: plugin2, forceUpdate });
          },
          "aria-label": "Sorting Options"
        }
      )), /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-action-button" }, /* @__PURE__ */ import_react17.default.createElement(
        IoIosAddCircle,
        {
          onClick: (e) => createNewFile(e, activeFolderPath2, plugin2),
          size: topIconSize,
          "aria-label": "Create a Note"
        }
      )))), searchBoxVisible && /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-input-container" }, /* @__PURE__ */ import_react17.default.createElement(
        "input",
        {
          type: "search",
          placeholder: "Search...",
          ref: searchInput,
          value: searchPhrase,
          onChange: (e) => {
            handleSearch2({
              e,
              plugin: plugin2,
              activeFolderPath: activeFolderPath2,
              setSearchPhrase,
              setTreeHeader,
              setOzFileList,
              excludedExtensions: excludedExtensions2,
              excludedFolders: excludedFolders2,
              focusedFolder: focusedFolder2
            });
          },
          onKeyDown: (e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              toggleSearchBox();
            }
          }
        }
      )), /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-file-tree-header" + colorfulHeaderClassName }, treeHeader)), /* @__PURE__ */ import_react17.default.createElement(
        "div",
        {
          className: `oz-file-tree-files${plugin2.settings.fixedHeaderInFileList ? searchBoxVisible ? " file-tree-files-fixed-with-search" : " file-tree-files-fixed" : ""}`
        },
        filesToList.map((file2, index) => {
          return /* @__PURE__ */ import_react17.default.createElement(g, { height: 22, key: index }, /* @__PURE__ */ import_react17.default.createElement(NavFile2, { file: file2, plugin: plugin2 }));
        })
      )))
    ));
  }
  var NavFile2 = (props) => {
    const { file: file2, plugin: plugin2 } = props;
    const [ozPinnedFiles, setOzPinnedFiles] = Recoil_index_22(ozPinnedFileList);
    const [activeOzFile, setActiveOzFile] = Recoil_index_22(activeOZFile);
    const [hoverActive, setHoverActive] = (0, import_react17.useState)(false);
    const longPressEvents = useLongPress2((e) => {
      triggerContextMenu2({
        file: file2,
        e,
        plugin: plugin2,
        ozPinnedFiles,
        setOzPinnedFiles
      });
    }, 500);
    (0, import_react17.useEffect)(() => {
      const handleKeyDownEvent = (e) => {
        if (e.key === "Control" || e.key === "Meta") {
          let el = document.querySelector(`.oz-nav-file-title[data-path="${file2.path}"]`);
          if (el) plugin2.app.workspace.trigger("link-hover", {}, el, file2.path, file2.path);
        }
      };
      if (hoverActive && plugin2.settings.filePreviewOnHover) {
        document.addEventListener("keydown", handleKeyDownEvent);
        return () => {
          document.removeEventListener("keydown", handleKeyDownEvent);
        };
      }
    }, [hoverActive]);
    const FileIcon = (0, import_react17.useMemo)(
      () => getFileIcon2({
        file: file2
      }),
      [plugin2.settings.iconBeforeFileName, file2]
    );
    const fileDisplayName = (0, import_react17.useMemo)(() => {
      return plugin2.settings.showFileNameAsFullPath ? getFileNameAndExtension(file2.path).fileName : file2.basename;
    }, [plugin2.settings.showFileNameAsFullPath, file2.path]);
    const colorfulFileClassName = getColorfulFileClassName(file2, plugin2);
    return /* @__PURE__ */ import_react17.default.createElement(
      "div",
      {
        className: "oz-nav-file" + colorfulFileClassName + (activeOzFile && activeOzFile.path === file2.path ? " is-active" : ""),
        key: file2.path,
        draggable: true,
        onDragStart: (e) => dragStarted2({
          e,
          file: file2,
          plugin: plugin2
        }),
        onClick: (e) => openFile4({
          e,
          file: file2,
          plugin: plugin2,
          setActiveOzFile
        }),
        onAuxClick: (e) => onAuxClick2({ e, plugin: plugin2, file: file2 }),
        onContextMenu: (e) => triggerContextMenu2({
          e,
          file: file2,
          plugin: plugin2,
          ozPinnedFiles,
          setOzPinnedFiles
        }),
        onMouseEnter: (e) => mouseEnteredOnFile2({
          e,
          file: file2,
          plugin: plugin2,
          setHoverActive
        }),
        onMouseLeave: (e) => mouseLeftFile2({ e, file: file2, setHoverActive }),
        ...longPressEvents
      },
      /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-file-title", "data-path": file2.path }, /* @__PURE__ */ import_react17.default.createElement("div", { className: "oz-nav-file-title-content" }, plugin2.settings.iconBeforeFileName && /* @__PURE__ */ import_react17.default.createElement(FileIcon, { className: "oz-nav-file-icon", size: 15 }), fileDisplayName), ozPinnedFiles.some((f2) => f2.path === file2.path) && /* @__PURE__ */ import_react17.default.createElement(FaThumbtack, { className: "oz-nav-file-tag", size: 14 }), file2.extension !== "md" && /* @__PURE__ */ import_react17.default.createElement("span", { className: "oz-nav-file-tag" }, file2.extension))
    );
  };

  // src/components/FolderView/MainFolder.tsx
  var import_react20 = __toESM(require_react());

  // src/components/FolderView/treeComponent/TreeComponent.tsx
  var import_react18 = __toESM(require_react());
  function Tree2(props) {
    const [openFolders2, setOpenFolders] = Recoil_index_22(openFolders);
    const [folderFileCountMap2] = Recoil_index_22(folderFileCountMap);
    const [activeFolderPath2] = Recoil_index_22(activeFolderPath);
    const longPressEvents = useLongPress2((e) => {
      props.onContextMenu(e);
    }, 500);
    const [open, setOpen] = (0, import_react18.useState)(props.open);
    const [highlight, setHightlight] = (0, import_react18.useState)(false);
    const isFolderActive = props.folder.path === activeFolderPath2;
    const colorfulFolderClassName = getColorfulFolderClassName(props.folder.path, props.plugin);
    const colorfulFolderContentsClassName = getColorfulFolderContentsClassName(props.folder.path, props.plugin);
    (0, import_react18.useEffect)(() => setOpen(props.open), [props.open]);
    const toggle = () => {
      if (props.children) {
        if (!open) {
          setOpenFolders([...openFolders2, props.folder.path]);
        } else {
          const newOpenFolders = openFolders2.filter((openFolder) => props.folder.path !== openFolder);
          setOpenFolders(newOpenFolders);
        }
        setOpen(!open);
      }
    };
    const onDrop = (files) => {
      files.map(async (file2) => {
        file2.arrayBuffer().then((arrayBuffer) => {
          props.plugin.app.vault.adapter.writeBinary(props.folder.path + "/" + file2.name, arrayBuffer);
        });
      });
    };
    const folderNameClickEvent = (ev) => {
      if (props.plugin.settings.folderNote && ev.shiftKey) {
        const fileFullPath = `${props.folder.path}/${props.folder.name}.md`;
        const folderNoteFile = props.plugin.app.vault.getAbstractFileByPath(fileFullPath);
        props.plugin.app.workspace.openLinkText(fileFullPath, "/", false);
      } else {
        props.onClick();
      }
    };
    const folderContextMenuEvent = () => props.onContextMenu();
    const folderNameDoubleClickEvent = (ev) => {
      setOpen(true);
      props.onDoubleClick();
    };
    const Icon = (0, import_react18.useMemo)(() => getFolderIcon(props.plugin, props.children, open), [open, props.children, props.plugin.settings.folderIcon]);
    const folderCount = folderFileCountMap2[props.folder.path];
    const dropFileOrFolder = (e) => {
      let data = e.dataTransfer.getData("application/json");
      if (data !== "") {
        let dataJson = JSON.parse(data);
        if (dataJson["filePath"]) {
          const filePath = dataJson.filePath;
          let file2 = props.plugin.app.vault.getAbstractFileByPath(filePath);
          if (file2) {
            props.plugin.app.vault.rename(file2, `${props.folder.path}/${file2.name}`);
          } else {
            new Notice("Couldnt find the file");
          }
        } else if (dataJson["folderPath"]) {
          const folderPath = dataJson.folderPath;
          let folder2 = props.plugin.app.vault.getAbstractFileByPath(folderPath);
          if (folder2) {
            if (!props.folder.path.startsWith(folder2.path)) {
              props.plugin.app.vault.rename(folder2, `${props.folder.path}/${folder2.name}`);
            } else {
              new Notice("You cant move folder under its child");
            }
          } else {
            new Notice("Couldnt find the folder");
          }
        }
      }
      setHightlight(false);
      e.dataTransfer.clearData();
    };
    const onFolderDragStart = (e, folder2) => {
      e.dataTransfer.setData("application/json", JSON.stringify({ folderPath: folder2.path }));
      let dragManager = props.plugin.app.dragManager;
      const dragData = dragManager.dragFile(e.nativeEvent, folder2);
      dragManager.onDragStart(e.nativeEvent, dragData);
    };
    return /* @__PURE__ */ import_react18.default.createElement(
      es_default,
      {
        onDrop,
        noClick: true,
        onDragEnter: () => setHightlight(true),
        onDragLeave: () => setHightlight(false),
        onDropAccepted: () => setHightlight(false),
        onDropRejected: () => setHightlight(false)
      },
      ({ getRootProps, getInputProps }) => /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, /* @__PURE__ */ import_react18.default.createElement(
        "div",
        {
          style: { ...props.style },
          className: "treeview",
          draggable: true,
          onDragStart: (e) => onFolderDragStart(e, props.folder),
          onDrop: (e) => dropFileOrFolder(e),
          onDragOver: () => setHightlight(true),
          onDragLeave: () => setHightlight(false)
        },
        /* @__PURE__ */ import_react18.default.createElement(
          "div",
          {
            ...getRootProps({ className: "dropzone" }),
            className: "oz-folder-element" + colorfulFolderClassName + (highlight ? " drag-entered" : "") + (isFolderActive ? " is-folder-active" : ""),
            "data-path": props.folder.path
          },
          /* @__PURE__ */ import_react18.default.createElement("input", { ...getInputProps() }),
          /* @__PURE__ */ import_react18.default.createElement("div", { className: "oz-folder-line" }, /* @__PURE__ */ import_react18.default.createElement("div", { className: "oz-icon-div" }, /* @__PURE__ */ import_react18.default.createElement(Icon, { className: "oz-folder-toggle", style: { opacity: props.children ? 1 : 0.3 }, onClick: toggle })), /* @__PURE__ */ import_react18.default.createElement(
            "div",
            {
              className: "oz-folder-block",
              onClick: folderNameClickEvent,
              onDoubleClick: folderNameDoubleClickEvent,
              onContextMenu: folderContextMenuEvent,
              ...longPressEvents
            },
            /* @__PURE__ */ import_react18.default.createElement("div", { className: "oz-folder-type", style: { marginRight: props.type ? 10 : 0 } }, props.type),
            /* @__PURE__ */ import_react18.default.createElement(
              "div",
              {
                className: `oz-folder-name ${isFolderActive ? "is-folder-active" : ""}${props.isRootFolder ? " is-root-folder" : ""}`
              },
              props.content,
              " ",
              props.plugin.settings.folderNote && props.folder.children.some((f2) => f2.name === `${props.folder.name}.md`) ? /* @__PURE__ */ import_react18.default.createElement(IoMdArrowDropright, { size: 10, className: "oz-folder-note-icon" }) : ""
            ),
            props.plugin.settings.folderCount && /* @__PURE__ */ import_react18.default.createElement("div", { className: "oz-folder-count" }, /* @__PURE__ */ import_react18.default.createElement("span", { className: "oz-nav-file-tag" }, folderCount ? open ? folderCount.open : folderCount.closed : 0))
          ))
        )
      ), props.children && /* @__PURE__ */ import_react18.default.createElement(
        "div",
        {
          className: "oz-folder-contents" + colorfulFolderContentsClassName,
          style: {
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
            display: open ? "inherit" : "none"
          }
        },
        props.children
      ))
    );
  }

  // src/components/FolderView/NestedFolders.tsx
  var import_react19 = __toESM(require_react());
  function NestedFolders2(props) {
    const plugin2 = props.plugin;
    const app3 = plugin2.app;
    let rootFolder = app3.vault.getRoot();
    const [openFolders2] = Recoil_index_22(openFolders);
    const [activeFolderPath2, setActiveFolderPath] = Recoil_index_22(activeFolderPath);
    const [excludedFolders2, setExcludedFolders] = Recoil_index_22(excludedFolders);
    const [focusedFolder2, setFocusedFolder] = Recoil_index_22(focusedFolder);
    const [folderFileCountMap2] = Recoil_index_22(folderFileCountMap);
    const [_view, setView] = Recoil_index_22(view);
    const handleFolderNameClick = (folderPath) => setActiveFolderPath(folderPath);
    const focusOnFolder = (folder2) => {
      setFocusedFolder(folder2);
      setActiveFolderPath(folder2.path);
    };
    const getSortedFolderTree = (folderTree2) => {
      let newTree = folderTree2;
      newTree = newTree.sort((a, b2) => {
        if (plugin2.settings.sortFoldersBy === "name") {
          return a.folder.name.localeCompare(b2.folder.name, "en", { numeric: true });
        } else if (plugin2.settings.sortFoldersBy === "item-number") {
          let aCount = folderFileCountMap2[a.folder.path] ? folderFileCountMap2[a.folder.path].closed : 0;
          let bCount = folderFileCountMap2[b2.folder.path] ? folderFileCountMap2[b2.folder.path].closed : 0;
          return bCount - aCount;
        }
      });
      return newTree;
    };
    const handleFolderContextMenu = (params2) => {
      let { event, folder: folder2 } = params2;
      let e = event;
      if (event === void 0) e = window.event;
      const folderMenu = new Menu();
      if (hasChildFolder(folder2)) {
        folderMenu.addItem((menuItem) => {
          menuItem.setTitle("Focus on Folder").setIcon("zoomInIcon").onClick(() => focusOnFolder(folder2));
        });
      }
      if (!focusedFolder2.isRoot()) {
        folderMenu.addItem((menuItem) => {
          menuItem.setTitle("Focus Back to Root").setIcon("zoomOutIcon").onClick(() => focusOnFolder(rootFolder));
        });
      }
      folderMenu.addItem((menuItem) => {
        menuItem.setTitle("New Folder").setIcon("folder").onClick((ev) => {
          let vaultChangeModal = new VaultChangeModal(plugin2, folder2, "create folder");
          vaultChangeModal.open();
        });
      });
      folderMenu.addItem((menuItem) => {
        menuItem.setTitle("Delete").setIcon("trash").onClick((ev) => {
          let confirmationModal = new ConfirmationModal(
            plugin2,
            `Are you sure you want to delete folder "${folder2.name}" and all folders & files under it?`,
            () => {
              let deleteOption = plugin2.settings.deleteFileOption;
              if (deleteOption === "permanent") {
                plugin2.app.vault.delete(folder2, true);
              } else if (deleteOption === "system-trash") {
                plugin2.app.vault.trash(folder2, true);
              } else if (deleteOption === "trash") {
                plugin2.app.vault.trash(folder2, false);
              }
              if (activeFolderPath2 === folder2.path) {
                setActiveFolderPath("");
                setView("folder");
              }
            }
          );
          confirmationModal.open();
        });
      });
      folderMenu.addItem((menuItem) => {
        menuItem.setTitle("Rename").setIcon("pencil").onClick((ev) => {
          let vaultChangeModal = new VaultChangeModal(plugin2, folder2, "rename");
          vaultChangeModal.open();
        });
      });
      folderMenu.addItem((menuItem) => {
        menuItem.setTitle("New File").setIcon("document").onClick((ev) => {
          createNewFile(ev, folder2.path, plugin2);
        });
      });
      if (!internalPluginLoaded("file-explorer", app3)) {
        folderMenu.addItem((menuItem) => {
          menuItem.setTitle("Move folder to...").setIcon("paper-plane").onClick((ev) => {
            let folderMoveModal = new MoveSuggestionModal(app3, folder2);
            folderMoveModal.open();
          });
        });
      }
      folderMenu.addItem((menuItem) => {
        menuItem.setTitle("Add to Excluded Folders").setIcon("switch").onClick((ev) => {
          setExcludedFolders([...excludedFolders2, folder2.path]);
        });
      });
      const folderNotePath = `${folder2.path}/${folder2.name}.md`;
      let folderNoteExists = folder2.children.some((f2) => `${folder2.name}.md` === f2.name);
      if (folderNoteExists) {
        folderMenu.addItem((menuItem) => {
          menuItem.setTitle("Open Folder Note").setIcon("go-to-file").onClick((ev) => {
            plugin2.app.workspace.activeLeaf.setViewState({
              type: "markdown",
              state: { file: folderNotePath }
            });
          });
        });
      }
      if (!pluginIsLoaded(plugin2.app, "folder-note-core")) {
        if (folderNoteExists) {
          folderMenu.addItem((menuItem) => {
            menuItem.setTitle("Delete Folder Note").setIcon("trash").onClick((ev) => {
              const folderNoteFile = plugin2.app.vault.getAbstractFileByPath(folderNotePath);
              if (folderNoteFile) plugin2.app.vault.delete(folderNoteFile, true);
            });
          });
        } else {
          folderMenu.addItem((menuItem) => {
            menuItem.setTitle("Create Folder Note").setIcon("create-new").onClick(async (ev) => {
              createNewMarkdownFile(plugin2, folder2, folder2.name, `# ${folder2.name}`);
            });
          });
        }
      }
      app3.workspace.trigger("file-menu", folderMenu, folder2, "file-explorer");
      if (e instanceof MouseEvent) {
        folderMenu.showAtPosition({ x: e.pageX, y: e.pageY });
      } else {
        folderMenu.showAtPosition({ x: 0, y: 0 });
      }
      return false;
    };
    if (!props.folderTree.children) return null;
    let sortedFolderTree = (0, import_react19.useMemo)(
      () => getSortedFolderTree(props.folderTree.children),
      [props.folderTree.children, excludedFolders2, plugin2.settings.sortFoldersBy]
    );
    return /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, Array.isArray(props.folderTree.children) && sortedFolderTree.map((child2) => {
      const isOpen = openFolders2.contains(child2.folder.path);
      const hasChildFolders = plugin2.isMobilePerformanceModeEnabled() ? hasVisibleChildFolder(child2.folder, plugin2, excludedFolders2) : child2.children.length > 0;
      const nestedFolderTree = plugin2.isMobilePerformanceModeEnabled() && isOpen ? createFolderTree({
        startFolder: child2.folder,
        plugin: plugin2,
        excludedFolders: excludedFolders2,
        recursive: false
      }) : child2;
      return /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, { key: child2.folder.path }, hasChildFolders ? /* @__PURE__ */ import_react19.default.createElement(
        Tree2,
        {
          plugin: plugin2,
          content: child2.folder.name,
          open: isOpen,
          onClick: () => handleFolderNameClick(child2.folder.path),
          onDoubleClick: () => focusOnFolder(child2.folder),
          onContextMenu: (e) => handleFolderContextMenu({
            event: e,
            folder: child2.folder
          }),
          folder: child2.folder
        },
        (!plugin2.isMobilePerformanceModeEnabled() || isOpen) && /* @__PURE__ */ import_react19.default.createElement(NestedFolders2, { plugin: plugin2, folderTree: nestedFolderTree })
      ) : /* @__PURE__ */ import_react19.default.createElement(
        Tree2,
        {
          plugin: plugin2,
          content: child2.folder.name,
          onClick: () => handleFolderNameClick(child2.folder.path),
          onDoubleClick: () => focusOnFolder(child2.folder),
          onContextMenu: (e) => handleFolderContextMenu({
            event: e,
            folder: child2.folder
          }),
          folder: child2.folder
        }
      ));
    }));
  }

  // src/components/FolderView/MainFolder.tsx
  var OMNISEARCH_COMMAND_ID2 = "omnisearch:show-modal";
  var VAULT_CONTROL_CENTER_COMMAND_ID2 = "vault-control-center:open-vault-control-center";
  var FJG_TASK_MANAGER_COMMAND_ID2 = "fjg-task-manager:open-dashboard";
  var AGENDA_CENTER_COMMAND_ID2 = "agenda-capture:open-agenda-center";
  var FOLDER_NAVIGATOR_COMMAND_ID = "fjg-note-navigator-toolbar:open-folder-navigator";
  var AI_TASK_TAGGER_PLUGIN_ID2 = "ai-task-tagger";
  function ToolbarButton2({ label, onClick, children, active = false, disabled = false, pressed, className = "" }) {
    return /* @__PURE__ */ import_react20.default.createElement(
      "button",
      {
        type: "button",
        className: `oz-nav-action-button${active ? " is-active" : ""}${className ? ` ${className}` : ""}`,
        "aria-label": label,
        "aria-pressed": pressed,
        title: label,
        disabled,
        onClick
      },
      children
    );
  }
  function MainFolder2(props) {
    const treeStyles = { color: "var(--text-muted)", fill: "#c16ff7", width: "100%" };
    const plugin2 = props.plugin;
    const app3 = plugin2.app;
    const rootFolder = app3.vault.getRoot();
    const [activeFolderPath2, setActiveFolderPath] = Recoil_index_22(activeFolderPath);
    const [view2, setView] = Recoil_index_22(view);
    const [folderTree2] = Recoil_index_22(folderTree);
    const [focusedFolder2, setFocusedFolder] = Recoil_index_22(focusedFolder);
    const [_openFolders, setOpenFolders] = Recoil_index_22(openFolders);
    const [activeOzFile] = Recoil_index_22(activeOZFile);
    const [followActiveFile, setFollowActiveFile] = import_react20.default.useState(plugin2.settings.followActiveFile);
    import_react20.default.useEffect(() => {
      const handleFollowActiveFileChange = (event) => {
        setFollowActiveFile(event.detail.value);
      };
      window.addEventListener(eventTypes.followActiveFileChange, handleFollowActiveFileChange);
      return () => window.removeEventListener(eventTypes.followActiveFileChange, handleFollowActiveFileChange);
    }, []);
    const forceUpdate = useForceUpdate();
    const focusOnFolder = (folder2) => {
      setFocusedFolder(folder2);
      setActiveFolderPath(folder2.path);
    };
    const openFocusPanel = (panel) => {
      setView(panel);
    };
    const toggleFollowActiveFile = () => {
      void plugin2.setFollowActiveFile(!followActiveFile);
    };
    const createFolder = (underFolder) => {
      let vaultChangeModal = new VaultChangeModal(plugin2, underFolder, "create folder");
      vaultChangeModal.open();
    };
    const createFolderInCurrentFolder = () => {
      const activeFolder = activeFolderPath2 ? app3.vault.getAbstractFileByPath(activeFolderPath2) : null;
      if (activeFolder instanceof TFolder) {
        createFolder(activeFolder);
        return;
      }
      createFolder(focusedFolder2 instanceof TFolder ? focusedFolder2 : rootFolder);
    };
    const getSelectedFolder = () => {
      const activeFolder = activeFolderPath2 ? app3.vault.getAbstractFileByPath(activeFolderPath2) : null;
      if (activeFolder instanceof TFolder) return activeFolder;
      if (focusedFolder2 instanceof TFolder) return focusedFolder2;
      return rootFolder;
    };
    const openVaultControlCenter = async () => {
      const commands = app3.commands;
      if (!commands?.executeCommandById?.(VAULT_CONTROL_CENTER_COMMAND_ID2)) {
        new Notice("Enable or install the Vault Control Center plugin to use this home button.");
      }
    };
    const openTaskManagerDashboard = () => {
      const commands = app3.commands;
      if (!commands?.commands?.[FJG_TASK_MANAGER_COMMAND_ID2] || !commands?.executeCommandById) {
        new Notice("Enable or update FJG Task Manager to open the Task Dashboard.");
        return;
      }
      commands.executeCommandById(FJG_TASK_MANAGER_COMMAND_ID2);
    };
    const openAgendaCenter = () => {
      const commands = app3.commands;
      if (!commands?.commands?.[AGENDA_CENTER_COMMAND_ID2] || !commands?.executeCommandById) {
        new Notice("Enable or update Agenda Capture to open the Agenda Center.");
        return;
      }
      commands.executeCommandById(AGENDA_CENTER_COMMAND_ID2);
    };
    const openFolderNavigator = () => {
      const commands = app3.commands;
      if (!commands?.commands?.[FOLDER_NAVIGATOR_COMMAND_ID] || !commands?.executeCommandById) {
        new Notice("Enable or update FJG Note Navigator Toolbar to open Folder Navigator.");
        return;
      }
      commands.executeCommandById(FOLDER_NAVIGATOR_COMMAND_ID);
    };
    const openUniversalDashboard = () => {
      const dashboard = app3.plugins?.getPlugin?.("universal-use-dashboard");
      if (!dashboard?.openDashboard) {
        new Notice("Enable FJG Universal Dashboard to open the selected folder as a dashboard.");
        return;
      }
      void dashboard.openDashboard(getSelectedFolder()).catch((error) => new Notice(error.message));
    };
    const reviewSelectedFolderTags = () => {
      const aiTaskTagger = app3.plugins?.getPlugin?.(AI_TASK_TAGGER_PLUGIN_ID2);
      if (!aiTaskTagger?.openFolderBatch) {
        new Notice("Enable or update AI Task Tagger to review tags for the selected folder.");
        return;
      }
      aiTaskTagger.openFolderBatch(getSelectedFolder());
    };
    const handleRootFolderContextMenu = (event, folder2) => {
      let e = event;
      if (event === void 0) e = window.event;
      const folderMenu = new Menu();
      folderMenu.addItem((menuItem) => {
        menuItem.setTitle("New Folder").setIcon("folder").onClick((ev) => createFolder(folder2));
      });
      if (!folder2.isRoot()) {
        folderMenu.addItem((menuItem) => {
          menuItem.setTitle("Focus Back to Root").setIcon("zoomOutDoubleIcon").onClick(() => focusOnFolder(rootFolder));
        });
      }
      if (folder2.parent && !folder2.parent.isRoot() && folder2.parent !== focusedFolder2) {
        folderMenu.addItem((menuItem) => {
          menuItem.setTitle("Focus to Parent Folder").setIcon("zoomOutIcon").onClick(() => focusOnFolder(folder2.parent));
        });
      }
      app3.workspace.trigger("root-folder-menu", folderMenu, folder2);
      folderMenu.showAtPosition({ x: e.pageX, y: e.pageY });
      return false;
    };
    const collapseAllFolders = () => setOpenFolders([]);
    const explandAllFolders = () => {
      let newOpenFolders = [];
      const treeToExpand = plugin2.isMobilePerformanceModeEnabled() ? createFolderTree({
        startFolder: focusedFolder2,
        plugin: plugin2,
        excludedFolders: settingListToArray(plugin2.settings.excludedFolders),
        recursive: true
      }) : folderTree2;
      if (!treeToExpand) return;
      newOpenFolders.push(treeToExpand.folder.path);
      const recursiveFx = (folderTreeChildren) => {
        for (let folderTreeChild of folderTreeChildren) {
          newOpenFolders.push(folderTreeChild.folder.path);
          if (folderTreeChild.children.length > 0) {
            recursiveFx(folderTreeChild.children);
          }
        }
      };
      recursiveFx(treeToExpand.children);
      setOpenFolders(newOpenFolders);
    };
    const triggerFolderSortOptions = (e) => {
      const sortMenu = new Menu();
      const changeSortSettingTo = (newValue) => {
        plugin2.settings.sortFoldersBy = newValue;
        plugin2.saveSettings();
        forceUpdate();
      };
      sortMenu.addItem((menuItem) => {
        menuItem.setTitle("Folder Name (A to Z)");
        menuItem.onClick((ev) => {
          changeSortSettingTo("name");
        });
      });
      if (plugin2.settings.folderCount) {
        sortMenu.addItem((menuItem) => {
          menuItem.setTitle("Item Numbers (Bigger to Smaller)");
          menuItem.onClick((ev) => {
            changeSortSettingTo("item-number");
          });
        });
      }
      plugin2.app.workspace.trigger("sort-menu", sortMenu);
      sortMenu.showAtPosition({ x: e.pageX, y: e.pageY });
      return false;
    };
    const openOmnisearch = () => {
      const commands = plugin2.app.commands;
      if (!commands?.commands?.[OMNISEARCH_COMMAND_ID2] || !commands?.executeCommandById) {
        new Notice("Omnisearch command is not available.");
        return;
      }
      commands.executeCommandById(OMNISEARCH_COMMAND_ID2);
    };
    const copySelectedVaultFolderPath = async () => {
      const activeFile = plugin2.app.workspace.getActiveFile();
      const folderPath = activeOzFile?.parent?.path || activeFile?.parent?.path || activeFolderPath2;
      if (!folderPath) {
        new Notice("Select a note first.");
        return;
      }
      const copyPath = folderPath === "/" ? "/" : folderPath;
      try {
        await navigator.clipboard.writeText(copyPath);
        new Notice(`Copied folder path: ${copyPath}`);
      } catch (error) {
        new Notice(`Could not copy folder path: ${error instanceof Error ? error.message : String(error)}`);
      }
    };
    const handleFolderNameDoubleClick = (folder2) => {
      if (!folder2.isRoot()) focusOnFolder(folder2.parent);
    };
    return /* @__PURE__ */ import_react20.default.createElement("div", { className: "oz-folders-tree-wrapper" }, /* @__PURE__ */ import_react20.default.createElement("div", { className: "oz-folders-action-items file-tree-header-fixed" }, /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Open Vault Control Center", onClick: () => void openVaultControlCenter() }, /* @__PURE__ */ import_react20.default.createElement(FaHome, null)), /* @__PURE__ */ import_react20.default.createElement(
      ToolbarButton2,
      {
        label: "Open Inbox Morning Brief",
        onClick: () => {
          void plugin2.openInboxMorningBrief();
        }
      },
      /* @__PURE__ */ import_react20.default.createElement(SunriseIcon, null)
    ), /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Open FJG Task Manager Dashboard", onClick: openTaskManagerDashboard }, /* @__PURE__ */ import_react20.default.createElement(LuListChecks, null)), /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Open Agenda Center", onClick: openAgendaCenter, className: "fjg-agenda-center-button" }, /* @__PURE__ */ import_react20.default.createElement(MdEventNote, null)), /* @__PURE__ */ import_react20.default.createElement(
      ToolbarButton2,
      {
        label: "Talk to your vault with GPT-Live",
        className: "fjg-vault-voice-button",
        onClick: () => plugin2.openVaultVoice({ folder: getSelectedFolder().path, note: activeOzFile?.path || "" })
      },
      /* @__PURE__ */ import_react20.default.createElement(LuMic, { "aria-hidden": "true" })
    ), /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Open selected folder dashboard", onClick: openUniversalDashboard }, /* @__PURE__ */ import_react20.default.createElement(LuLayoutDashboard, null)), /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Create Folder in Current Folder", onClick: () => createFolderInCurrentFolder() }, /* @__PURE__ */ import_react20.default.createElement(MdOutlineCreateNewFolder, null)), /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Review Selected Folder Tags with AI", onClick: reviewSelectedFolderTags }, /* @__PURE__ */ import_react20.default.createElement(FaTags, null)), /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Open Folder Navigator", onClick: openFolderNavigator, className: "fjg-folder-navigator-button" }, /* @__PURE__ */ import_react20.default.createElement(FaFolderOpen, null)), /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Open Omnisearch", onClick: openOmnisearch }, /* @__PURE__ */ import_react20.default.createElement(IoIosSearch, null)), /* @__PURE__ */ import_react20.default.createElement(
      ToolbarButton2,
      {
        label: Platform.isMobile ? "Follow active note is available on desktop" : `Follow active note: ${followActiveFile ? "on" : "off"}`,
        onClick: toggleFollowActiveFile,
        active: followActiveFile,
        pressed: followActiveFile,
        disabled: Platform.isMobile,
        className: "fjg-follow-active-note-button"
      },
      /* @__PURE__ */ import_react20.default.createElement(BiCurrentLocation, null)
    ), /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Sorting Options", onClick: triggerFolderSortOptions }, /* @__PURE__ */ import_react20.default.createElement(CgSortAz, null)), /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Recent Notes", onClick: () => openFocusPanel("recent"), active: view2 === "recent" }, /* @__PURE__ */ import_react20.default.createElement(FaHistory, null)), /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Bookmarks", onClick: () => openFocusPanel("bookmarks"), active: view2 === "bookmarks" }, /* @__PURE__ */ import_react20.default.createElement(FaRegBookmark, null)), /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Copy Selected Note Folder Path", onClick: () => void copySelectedVaultFolderPath() }, /* @__PURE__ */ import_react20.default.createElement(BiCopy, null)), /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Collapse Folders", onClick: collapseAllFolders }, /* @__PURE__ */ import_react20.default.createElement(CgChevronDoubleUp, null)), /* @__PURE__ */ import_react20.default.createElement(ToolbarButton2, { label: "Expand Folders", onClick: explandAllFolders }, /* @__PURE__ */ import_react20.default.createElement(CgChevronDoubleDown, null))), /* @__PURE__ */ import_react20.default.createElement(
      ConditionalWrapper_default,
      {
        condition: focusedFolder2 && !focusedFolder2.isRoot() || focusedFolder2 && focusedFolder2.isRoot && plugin2.settings.showRootFolder,
        wrapper: (children) => {
          return /* @__PURE__ */ import_react20.default.createElement(
            Tree2,
            {
              plugin: plugin2,
              content: focusedFolder2.isRoot() ? plugin2.app.vault.getName() : focusedFolder2.name,
              open: true,
              isRootFolder: focusedFolder2.isRoot(),
              style: treeStyles,
              onClick: () => setActiveFolderPath(focusedFolder2.path),
              onDoubleClick: () => handleFolderNameDoubleClick(focusedFolder2),
              folder: focusedFolder2,
              onContextMenu: (e) => handleRootFolderContextMenu(e, focusedFolder2)
            },
            children
          );
        }
      },
      folderTree2 && /* @__PURE__ */ import_react20.default.createElement(NestedFolders2, { plugin: plugin2, folderTree: folderTree2 })
    ));
  }

  // src/components/MainView/SingleView.tsx
  var import_react22 = __toESM(require_react());

  // src/components/FocusView/FocusPanel.tsx
  var import_react21 = __toESM(require_react());
  var PANEL_LABELS2 = {
    recent: "Recent Notes",
    bookmarks: "Bookmarks"
  };
  function FocusPanel2(props) {
    const { plugin: plugin2, mode } = props;
    const [query, setQuery] = (0, import_react21.useState)("");
    const [bookmarkStack, setBookmarkStack] = (0, import_react21.useState)([]);
    const [_view, setView] = Recoil_index_22(view);
    const [_activeFolderPath, setActiveFolderPath] = Recoil_index_22(activeFolderPath);
    const [_activeOZFile, setActiveOzFile] = Recoil_index_22(activeOZFile);
    const switchMode = (nextMode) => {
      setQuery("");
      setBookmarkStack([]);
      setView(nextMode);
    };
    const closePanel = () => {
      setView("folder");
      setActiveFolderPath("");
    };
    const openFilePath = async (path, subpath) => {
      const file2 = plugin2.app.vault.getAbstractFileByPath(path);
      if (!(file2 instanceof TFile)) {
        new Notice("File not found.");
        return;
      }
      const leaf2 = plugin2.app.workspace.getLeaf(plugin2.settings.focusOpenInNewTab);
      await leaf2.openFile(file2, { eState: { subpath } });
      setActiveOzFile(TFile2OZFile(file2));
    };
    const revealFolder = (folder2) => {
      setActiveFolderPath(folder2.path);
      setView("file");
      window.dispatchEvent(new CustomEvent(eventTypes.revealFolder, { detail: { folder: folder2 } }));
    };
    const openBookmark = async (bookmark, bookmarksPlugin) => {
      try {
        switch (bookmark.type) {
          case "file":
            await openFilePath(bookmark.path || "", bookmark.subpath);
            break;
          case "folder":
            openFolderBookmark(bookmark);
            break;
          case "search":
            await openSearchBookmark(bookmark, bookmarksPlugin);
            break;
          case "url":
            openUrlBookmark(bookmark);
            break;
          case "graph":
            await bookmarksPlugin.openBookmark(bookmark, plugin2.settings.focusOpenInNewTab ? "tab" : false, { focus: true });
            break;
          case "group":
            return;
        }
      } catch (error) {
        new Notice(`Could not open bookmark: ${error instanceof Error ? error.message : String(error)}`);
      }
    };
    const openFolderBookmark = (bookmark) => {
      const folder2 = plugin2.app.vault.getAbstractFileByPath(bookmark.path || "");
      if (folder2 instanceof TFolder) {
        revealFolder(folder2);
        return;
      }
      new Notice(`Folder not found: ${bookmark.path || "Untitled"}`);
    };
    const openSearchBookmark = async (bookmark, bookmarksPlugin) => {
      const globalSearchPlugin = getEnabledPlugin2(plugin2, "global-search");
      if (globalSearchPlugin) {
        globalSearchPlugin.openGlobalSearch(bookmark.query || "");
        return;
      }
      await bookmarksPlugin.openBookmark(bookmark, plugin2.settings.focusOpenInNewTab ? "tab" : false, { focus: true });
    };
    const openUrlBookmark = (bookmark) => {
      if (!bookmark.url) {
        new Notice("Bookmarked URL is empty.");
        return;
      }
      const webViewerPlugin = getEnabledPlugin2(plugin2, "webviewer");
      if (webViewerPlugin?.options?.openExternalURLs) {
        webViewerPlugin.openUrl(bookmark.url, plugin2.settings.focusOpenInNewTab);
        return;
      }
      window.open(bookmark.url, "_blank");
    };
    return /* @__PURE__ */ import_react21.default.createElement("div", { className: "fjg-focus-panel" }, /* @__PURE__ */ import_react21.default.createElement("div", { className: "fjg-focus-panel__header file-tree-header-fixed" }, /* @__PURE__ */ import_react21.default.createElement("div", { className: "oz-flex-container" }, /* @__PURE__ */ import_react21.default.createElement("div", { className: "oz-nav-action-button", style: { marginLeft: "0px" } }, /* @__PURE__ */ import_react21.default.createElement(IoIosCloseCircleOutline, { onClick: closePanel, size: 19, "aria-label": "Close Focus Panel" })), /* @__PURE__ */ import_react21.default.createElement("div", { className: "fjg-focus-panel__tabs", role: "tablist", "aria-label": "FJG File Focus panels" }, /* @__PURE__ */ import_react21.default.createElement(
      "button",
      {
        type: "button",
        className: `fjg-focus-panel__tab${mode === "recent" ? " is-active" : ""}`,
        onClick: () => switchMode("recent")
      },
      /* @__PURE__ */ import_react21.default.createElement(FaHistory, { size: 13 }),
      /* @__PURE__ */ import_react21.default.createElement("span", null, "Recent")
    ), /* @__PURE__ */ import_react21.default.createElement(
      "button",
      {
        type: "button",
        className: `fjg-focus-panel__tab${mode === "bookmarks" ? " is-active" : ""}`,
        onClick: () => switchMode("bookmarks")
      },
      /* @__PURE__ */ import_react21.default.createElement(FaRegBookmark, { size: 13 }),
      /* @__PURE__ */ import_react21.default.createElement("span", null, "Bookmarks")
    ))), /* @__PURE__ */ import_react21.default.createElement("div", { className: "oz-input-container" }, /* @__PURE__ */ import_react21.default.createElement(
      "input",
      {
        type: "search",
        placeholder: mode === "bookmarks" ? "Search bookmarks..." : "Search recent notes...",
        value: query,
        onChange: (event) => setQuery(event.target.value)
      }
    )), /* @__PURE__ */ import_react21.default.createElement("div", { className: "oz-file-tree-header" }, PANEL_LABELS2[mode])), /* @__PURE__ */ import_react21.default.createElement("div", { className: "fjg-focus-panel__body" }, mode === "bookmarks" ? /* @__PURE__ */ import_react21.default.createElement(
      BookmarkPanel2,
      {
        plugin: plugin2,
        query,
        bookmarkStack,
        setBookmarkStack,
        openBookmark
      }
    ) : /* @__PURE__ */ import_react21.default.createElement(RecentPanel2, { plugin: plugin2, query, openFilePath })));
  }
  function RecentPanel2(props) {
    const { plugin: plugin2, query, openFilePath } = props;
    const recentFiles = (0, import_react21.useMemo)(() => getWorkspaceRecentFiles2(plugin2), [plugin2, plugin2.settings.excludedFolders, plugin2.settings.focusMaxRecentFiles]);
    const visibleFiles = (0, import_react21.useMemo)(() => filterRecentFiles2(recentFiles, query), [recentFiles, query]);
    if (visibleFiles.length === 0) {
      return /* @__PURE__ */ import_react21.default.createElement(EmptyState2, { title: "No recent notes yet", body: "Open a few notes or canvases and they will appear here." });
    }
    return /* @__PURE__ */ import_react21.default.createElement("div", { className: "fjg-focus-panel__list" }, visibleFiles.map((entry) => /* @__PURE__ */ import_react21.default.createElement(
      FocusRow2,
      {
        key: entry.path,
        icon: entry.extension === "canvas" ? FaProjectDiagram : BiFile,
        title: entry.basename,
        subtitle: plugin2.settings.focusShowPaths ? entry.path : "",
        onClick: () => {
          void openFilePath(entry.path);
        }
      }
    )));
  }
  function BookmarkPanel2(props) {
    const { plugin: plugin2, query, bookmarkStack, setBookmarkStack, openBookmark } = props;
    const bookmarksPlugin = getEnabledPlugin2(plugin2, "bookmarks");
    if (!bookmarksPlugin) {
      return /* @__PURE__ */ import_react21.default.createElement(EmptyState2, { title: "Bookmarks are unavailable", body: "Enable Obsidian's core Bookmarks plugin to use this panel." });
    }
    const level = bookmarkStack[bookmarkStack.length - 1];
    const items = level?.items || bookmarksPlugin.items || [];
    const visibleItems = items.filter((item) => bookmarkMatchesQuery2(item, query));
    return /* @__PURE__ */ import_react21.default.createElement("div", { className: "fjg-focus-panel__list" }, level && /* @__PURE__ */ import_react21.default.createElement(
      "button",
      {
        type: "button",
        className: "fjg-focus-panel__context-row",
        onClick: () => {
          setBookmarkStack(bookmarkStack.slice(0, -1));
        }
      },
      /* @__PURE__ */ import_react21.default.createElement(FaArrowCircleLeft, { size: 14 }),
      /* @__PURE__ */ import_react21.default.createElement("span", null, level.title)
    ), visibleItems.length === 0 ? /* @__PURE__ */ import_react21.default.createElement(EmptyState2, { title: "No bookmarks found", body: "Try a different search." }) : visibleItems.map((item, index) => /* @__PURE__ */ import_react21.default.createElement(
      FocusRow2,
      {
        key: `${getBookmarkDisplayName2(plugin2, item)}-${index}`,
        icon: getBookmarkIcon2(item),
        title: getBookmarkDisplayName2(plugin2, item),
        subtitle: getBookmarkSubtitle2(plugin2, item),
        onClick: () => {
          if (item.type === "group") {
            setBookmarkStack([...bookmarkStack, { title: getBookmarkDisplayName2(plugin2, item), items: item.items || [] }]);
            return;
          }
          void openBookmark(item, bookmarksPlugin);
        }
      }
    )));
  }
  function FocusRow2(config) {
    const Icon = config.icon;
    return /* @__PURE__ */ import_react21.default.createElement("button", { type: "button", className: "fjg-focus-panel__row", onClick: config.onClick }, /* @__PURE__ */ import_react21.default.createElement("span", { className: "fjg-focus-panel__row-icon" }, /* @__PURE__ */ import_react21.default.createElement(Icon, { size: 13 })), /* @__PURE__ */ import_react21.default.createElement("span", { className: "fjg-focus-panel__row-text" }, /* @__PURE__ */ import_react21.default.createElement("span", { className: "fjg-focus-panel__row-title" }, config.title || "Untitled"), config.subtitle && /* @__PURE__ */ import_react21.default.createElement("span", { className: "fjg-focus-panel__row-subtitle" }, config.subtitle)));
  }
  function EmptyState2(props) {
    return /* @__PURE__ */ import_react21.default.createElement("div", { className: "fjg-focus-panel__empty" }, /* @__PURE__ */ import_react21.default.createElement("div", { className: "fjg-focus-panel__empty-title" }, props.title), /* @__PURE__ */ import_react21.default.createElement("div", { className: "fjg-focus-panel__empty-body" }, props.body));
  }
  function getWorkspaceRecentFiles2(plugin2) {
    const recentPaths = typeof plugin2.app.workspace.getLastOpenFiles === "function" ? plugin2.app.workspace.getLastOpenFiles() : [];
    const excludedFolders2 = settingListToArray(plugin2.settings.excludedFolders);
    return recentPaths.map((path) => plugin2.app.vault.getAbstractFileByPath(path)).filter((file2) => file2 instanceof TFile && ["md", "canvas"].includes(file2.extension.toLowerCase())).filter((file2) => !isPathInExcludedFolder(file2.path, excludedFolders2)).map((file2) => ({
      path: file2.path,
      basename: file2.basename,
      extension: file2.extension.toLowerCase(),
      timestamp: file2.stat.mtime
    })).slice(0, plugin2.settings.focusMaxRecentFiles);
  }
  function filterRecentFiles2(recentFiles, query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return recentFiles;
    return recentFiles.filter((entry) => `${entry.basename} ${entry.path}`.toLowerCase().includes(normalized));
  }
  function bookmarkMatchesQuery2(item, query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return true;
    return `${item.title || ""} ${item.path || ""} ${item.url || ""} ${item.query || ""}`.toLowerCase().includes(normalized);
  }
  function getBookmarkDisplayName2(plugin2, item) {
    if (item.title) return item.title;
    if (item.type === "file" && item.path) {
      const file2 = plugin2.app.vault.getAbstractFileByPath(item.path);
      return file2 instanceof TFile ? file2.basename : item.path;
    }
    if (item.type === "folder" && item.path) {
      return item.path.split("/").pop() || item.path;
    }
    if (item.type === "search") return item.query || "Search";
    if (item.type === "url") return item.url || "URL";
    if (item.type === "graph") return "Graph";
    return "Group";
  }
  function getBookmarkSubtitle2(plugin2, item) {
    if (!plugin2.settings.focusShowPaths) return "";
    if (item.type === "file" || item.type === "folder") return item.path || "";
    if (item.type === "url") return item.url || "";
    if (item.type === "search") return item.query || "";
    if (item.type === "group") return `${item.items?.length || 0} items`;
    return "";
  }
  function getBookmarkIcon2(item) {
    if (item.type === "group" || item.type === "folder") return BiFolder;
    if (item.type === "search") return IoIosSearch;
    if (item.type === "graph") return FaProjectDiagram;
    if (item.type === "url") return FaGlobe;
    return BiFile;
  }
  function getEnabledPlugin2(plugin2, pluginId) {
    const internalPlugins = plugin2.app.internalPlugins;
    const enabledPlugin = internalPlugins?.getEnabledPluginById?.(pluginId);
    if (enabledPlugin) return enabledPlugin;
    const pluginRecord = internalPlugins?.plugins?.[pluginId];
    if (pluginRecord?._loaded && pluginRecord.instance) return pluginRecord.instance;
    return null;
  }

  // src/components/MainView/SingleView.tsx
  var SingleViewVertical = (props) => {
    let { plugin: plugin2, focusMode } = props;
    const [dividerOnMove, setDividerOnMove] = (0, import_react22.useState)(false);
    const [folderPaneHeight, setFolderPaneHeight] = (0, import_react22.useState)(null);
    const [clientY, setClientY] = (0, import_react22.useState)(null);
    let folderPaneRef = (0, import_react22.useRef)();
    let dividerRef = (0, import_react22.useRef)();
    let heightSetting = localStorage.getItem(plugin2.keys.customHeightKey);
    (0, import_react22.useEffect)(() => {
      if (folderPaneHeight) {
        localStorage.setItem(plugin2.keys.customHeightKey, folderPaneHeight.toString());
      }
    }, [folderPaneHeight]);
    function touchMouseStart(e) {
      if (e.type !== "drag" && e.target.id !== "file-tree-divider") return;
      e.preventDefault();
      setDividerOnMove(true);
      let height = dividerRef.current.offsetTop - folderPaneRef.current.offsetTop;
      setFolderPaneHeight(height);
      setClientY(e.nativeEvent.clientY);
    }
    function touchMouseMove(e) {
      if (!dividerOnMove) return;
      e.preventDefault();
      setFolderPaneHeight(folderPaneHeight + (e.nativeEvent.clientY - clientY));
      setClientY(e.nativeEvent.clientY);
    }
    function touchMouseEnd(e) {
      if (!dividerOnMove) return;
      e.preventDefault();
      setDividerOnMove(false);
      setClientY(e.nativeEvent.clientY);
    }
    return (
      // Register Move & End Events for All File Tree Leaf
      /* @__PURE__ */ import_react22.default.createElement("div", { className: "file-tree-container", onMouseMove: (e) => touchMouseMove(e), onMouseUp: (e) => touchMouseEnd(e) }, /* @__PURE__ */ import_react22.default.createElement(
        "div",
        {
          className: "oz-folder-pane",
          ref: folderPaneRef,
          style: { height: folderPaneHeight ? `${folderPaneHeight}px` : heightSetting && heightSetting !== "" ? `${heightSetting}px` : "50%" }
        },
        /* @__PURE__ */ import_react22.default.createElement(MainFolder2, { plugin: plugin2 })
      ), /* @__PURE__ */ import_react22.default.createElement(
        "div",
        {
          id: "file-tree-divider",
          ref: dividerRef,
          onClick: (e) => e.preventDefault(),
          onMouseDown: (e) => touchMouseStart(e),
          className: dividerOnMove ? "active-divider" : ""
        }
      ), /* @__PURE__ */ import_react22.default.createElement("div", { className: "oz-file-list-pane" }, focusMode ? /* @__PURE__ */ import_react22.default.createElement(FocusPanel2, { plugin: plugin2, mode: focusMode }) : /* @__PURE__ */ import_react22.default.createElement(FileComponent2, { plugin: plugin2 })))
    );
  };
  var SingleViewHorizontal = (props) => {
    let { plugin: plugin2, focusMode } = props;
    const [dividerOnMove, setDividerOnMove] = (0, import_react22.useState)(false);
    const [folderPaneWidth, setFolderPaneWidth] = (0, import_react22.useState)(null);
    const [clientX, setClientX] = (0, import_react22.useState)(null);
    let folderPaneRef = (0, import_react22.useRef)();
    let dividerRef = (0, import_react22.useRef)();
    let widthSetting = localStorage.getItem(plugin2.keys.customWidthKey);
    (0, import_react22.useEffect)(() => {
      if (folderPaneWidth) {
        localStorage.setItem(plugin2.keys.customWidthKey, folderPaneWidth.toString());
      }
    }, [folderPaneWidth]);
    function touchMouseStart(e) {
      if (e.type !== "drag" && e.target.id !== "file-tree-divider-horizontal") return;
      e.preventDefault();
      setDividerOnMove(true);
      let width = dividerRef.current.offsetLeft - folderPaneRef.current.offsetLeft;
      setFolderPaneWidth(width);
      setClientX(e.nativeEvent.clientX);
    }
    function touchMouseMove(e) {
      if (!dividerOnMove) return;
      e.preventDefault();
      setFolderPaneWidth(folderPaneWidth + (e.nativeEvent.clientX - clientX));
      setClientX(e.nativeEvent.clientX);
    }
    function touchMouseEnd(e) {
      if (!dividerOnMove) return;
      e.preventDefault();
      setDividerOnMove(false);
      setClientX(e.nativeEvent.clientX);
    }
    return (
      // Register Move & End Events for All File Tree Leaf
      /* @__PURE__ */ import_react22.default.createElement("div", { className: "file-tree-container-horizontal", onMouseMove: (e) => touchMouseMove(e), onMouseUp: (e) => touchMouseEnd(e) }, /* @__PURE__ */ import_react22.default.createElement(
        "div",
        {
          className: "oz-folder-pane-horizontal",
          ref: folderPaneRef,
          style: { width: folderPaneWidth ? `${folderPaneWidth}px` : widthSetting && widthSetting !== "" ? `${widthSetting}px` : "50%" }
        },
        /* @__PURE__ */ import_react22.default.createElement(MainFolder2, { plugin: plugin2 })
      ), /* @__PURE__ */ import_react22.default.createElement(
        "div",
        {
          id: "file-tree-divider-horizontal",
          ref: dividerRef,
          onClick: (e) => e.preventDefault(),
          onMouseDown: (e) => touchMouseStart(e),
          className: dividerOnMove ? "active-divider" : ""
        }
      ), /* @__PURE__ */ import_react22.default.createElement("div", { className: "oz-file-list-pane-horizontal" }, focusMode ? /* @__PURE__ */ import_react22.default.createElement(FocusPanel2, { plugin: plugin2, mode: focusMode }) : /* @__PURE__ */ import_react22.default.createElement(FileComponent2, { plugin: plugin2 })))
    );
  };

  // src/components/MainView/MainComponent.tsx
  function MainTreeComponent(props) {
    const { plugin: plugin2 } = props;
    const mobileOptimized = useMobileOptimization(Platform.isMobile, plugin2.settings.mobileOptimizedLayout);
    const revealHighlightTimeout = (0, import_react23.useRef)(null);
    const revealScrollTimeout = (0, import_react23.useRef)(null);
    (0, import_react23.useEffect)(() => {
      const host = props.fileTreeView.contentEl;
      if (!host) return;
      const hadMobileClass = host.classList.contains("ffm-host");
      host.classList.toggle("ffm-host", mobileOptimized);
      if (mobileOptimized) host.style.paddingInline = "0";
      else if (hadMobileClass) host.style.removeProperty("padding-inline");
    }, [mobileOptimized]);
    const forceUpdate = useForceUpdate();
    const [view2, setView] = Recoil_index_22(view);
    const [activeFolderPath2, setActiveFolderPath] = Recoil_index_22(activeFolderPath);
    const [ozFileList2, setOzFileList] = Recoil_index_22(ozFileList);
    const [ozPinnedFiles, setOzPinnedFiles] = Recoil_index_22(ozPinnedFileList);
    const [openFolders2, setOpenFolders] = Recoil_index_22(openFolders);
    const [_folderTree, setFolderTree] = Recoil_index_22(folderTree);
    const [excludedFolders2, setExcludedFolders] = Recoil_index_22(excludedFolders);
    const [_folderFileCountMap, setFolderFileCountMap] = Recoil_index_22(folderFileCountMap);
    const [excludedExtensions2, setExcludedExtensions] = Recoil_index_22(excludedExtensions);
    const [_showSubFolders, setShowSubFolders] = Recoil_index_22(showSubFolders);
    const [focusedFolder2, setFocusedFolder] = Recoil_index_22(focusedFolder);
    const [activeOZFile2, setActiveOzFile] = Recoil_index_22(activeOZFile);
    const focusedFolderRef = (0, import_react23.useRef)(null);
    const excludedFoldersRef = (0, import_react23.useRef)([]);
    focusedFolderRef.current = focusedFolder2;
    excludedFoldersRef.current = excludedFolders2;
    const setNewFileList = (folderPath) => {
      let filesPath = folderPath ? folderPath : activeFolderPath2;
      setOzFileList(
        (useMobileOptimization(Platform.isMobile, plugin2.settings.mobileOptimizedLayout) ? getFilesUnderPath2 : getFilesUnderPath)({
          path: filesPath,
          plugin: plugin2,
          excludedExtensions: excludedExtensions2,
          excludedFolders: excludedFolders2
        })
      );
    };
    const setInitialActiveFolderPath = () => {
      if (["Horizontal", "Vertical"].includes(plugin2.settings.evernoteView)) {
        let previousActiveFolder = localStorage.getItem(plugin2.keys.activeFolderPathKey);
        if (previousActiveFolder) {
          let folder2 = plugin2.app.vault.getAbstractFileByPath(previousActiveFolder);
          if (folder2 && folder2 instanceof TFolder) {
            setActiveFolderPath(folder2.path);
          }
        }
      }
    };
    (0, import_react23.useEffect)(() => {
      const unregisterFolderRevealListener = plugin2.registerFolderRevealListener(revealFolderInFileTree);
      window.addEventListener(eventTypes.vaultChange, vaultChangeEvent);
      window.addEventListener(eventTypes.vaultChanges, vaultChangesEvent);
      window.addEventListener(eventTypes.activeFileChange, changeActiveFile);
      window.addEventListener(eventTypes.refreshView, forceUpdate);
      window.addEventListener(eventTypes.revealFile, handleRevealFileEvent);
      window.addEventListener(eventTypes.revealFolder, handleRevealFolderEvent);
      window.addEventListener(eventTypes.createNewNote, handleCreateNewNoteEvent);
      window.addEventListener(eventTypes.openFocusPanel, handleOpenFocusPanelEvent);
      const activeFile = plugin2.app.workspace.getActiveFile();
      const initialRevealFrame = plugin2.shouldFollowActiveFile() && activeFile ? window.requestAnimationFrame(() => revealFileInFileTree(TFile2OZFile(activeFile))) : null;
      return () => {
        unregisterFolderRevealListener();
        if (revealHighlightTimeout.current !== null) window.clearTimeout(revealHighlightTimeout.current);
        if (revealScrollTimeout.current !== null) window.clearTimeout(revealScrollTimeout.current);
        if (initialRevealFrame !== null) window.cancelAnimationFrame(initialRevealFrame);
        window.removeEventListener(eventTypes.vaultChange, vaultChangeEvent);
        window.removeEventListener(eventTypes.vaultChanges, vaultChangesEvent);
        window.removeEventListener(eventTypes.activeFileChange, changeActiveFile);
        window.removeEventListener(eventTypes.refreshView, forceUpdate);
        window.removeEventListener(eventTypes.revealFile, handleRevealFileEvent);
        window.removeEventListener(eventTypes.revealFolder, handleRevealFolderEvent);
        window.removeEventListener(eventTypes.createNewNote, handleCreateNewNoteEvent);
        window.removeEventListener(eventTypes.openFocusPanel, handleOpenFocusPanelEvent);
      };
    }, []);
    const handleCreateNewNoteEvent = () => {
      let currentActiveFolderPath = "/";
      setActiveFolderPath((activeFolderPath3) => {
        currentActiveFolderPath = activeFolderPath3;
        return activeFolderPath3;
      });
      (useMobileOptimization(Platform.isMobile, plugin2.settings.mobileOptimizedLayout) ? createNewFile2 : createNewFile)(null, currentActiveFolderPath, plugin2);
    };
    const handleOpenFocusPanelEvent = (evt) => {
      const view3 = evt.detail?.view;
      if (view3 === "recent" || view3 === "bookmarks") setView(view3);
    };
    const vaultChangeEvent = (evt) => {
      handleVaultChanges(evt.detail.file, evt.detail.changeType, evt.detail.oldPath);
    };
    const vaultChangesEvent = (evt) => {
      const hasFolderChanges = evt.detail.changes.some((change) => change.file instanceof TFolder);
      evt.detail.changes.forEach(
        (change) => handleVaultChanges(change.file, change.changeType, change.oldPath, hasFolderChanges && change.file instanceof TFolder)
      );
      if (hasFolderChanges) {
        rebuildCurrentFolderTree();
        if (plugin2.settings.folderCount && evt.detail.changes.some((change) => change.file instanceof TFolder && change.changeType !== "modify")) {
          setFolderFileCountMap(getFolderNoteCountMap(plugin2));
        }
      }
    };
    const changeActiveFile = (evt) => {
      const filePath = evt.detail?.filePath;
      if (!filePath) return;
      let file2 = plugin2.app.vault.getAbstractFileByPath(filePath);
      if (file2 instanceof TFile) revealFileInFileTree(TFile2OZFile(file2));
    };
    (0, import_react23.useEffect)(() => {
      setInitialFocusedFolder();
      setExcludedFolders(getExcludedFolders());
      setExcludedExtensions(getExcludedExtensions());
      setOzPinnedFiles(getPinnedFilesFromSettings());
      setOpenFolders(getOpenFoldersFromSettings());
      setShowSubFolders(plugin2.settings.showFilesFromSubFolders);
      setInitialActiveFolderPath();
      if (plugin2.settings.folderCount) setFolderFileCountMap(getFolderNoteCountMap(plugin2));
    }, []);
    (0, import_react23.useEffect)(() => {
      if (focusedFolder2) {
        setFolderTree(
          createFolderTree({
            startFolder: focusedFolder2,
            plugin: plugin2,
            excludedFolders: excludedFolders2,
            recursive: plugin2.shouldBuildFolderTreeRecursively()
          })
        );
        localStorage.setItem(plugin2.keys.focusedFolder, focusedFolder2.path);
      }
    }, [focusedFolder2, excludedFolders2]);
    const setInitialFocusedFolder = () => {
      let localFocusedFolder = localStorage.getItem(plugin2.keys.focusedFolder);
      if (localFocusedFolder) {
        let folder2 = plugin2.app.vault.getAbstractFileByPath(localFocusedFolder);
        if (folder2 && folder2 instanceof TFolder) {
          setFocusedFolder(folder2);
          return;
        }
      }
      setFocusedFolder(plugin2.app.vault.getRoot());
    };
    (0, import_react23.useEffect)(() => savePinnedFilesToSettings(), [ozPinnedFiles]);
    (0, import_react23.useEffect)(() => saveOpenFoldersToSettings(), [openFolders2]);
    (0, import_react23.useEffect)(() => saveExcludedFoldersToSettings(), [excludedFolders2]);
    (0, import_react23.useEffect)(() => {
      if (activeFolderPath2 !== "") {
        setNewFileList(activeFolderPath2);
        setView("file");
      }
      localStorage.setItem(plugin2.keys.activeFolderPathKey, activeFolderPath2);
    }, [activeFolderPath2]);
    function getExcludedExtensions() {
      let extensionsString = plugin2.settings.excludedExtensions;
      let excludedExtensions3 = [];
      for (let extension of extensionsString.split(",")) {
        excludedExtensions3.push(extension.trim());
      }
      return excludedExtensions3;
    }
    function getExcludedFolders() {
      let excludedString = plugin2.settings.excludedFolders;
      let excludedFolders3 = [];
      if (excludedString) {
        for (let excludedFolder of excludedString.split(",")) {
          if (excludedFolder !== "") excludedFolders3.push(excludedFolder.trim());
        }
      }
      return excludedFolders3;
    }
    function getOpenFoldersFromSettings() {
      if (plugin2.isMobilePerformanceModeEnabled()) return [];
      let openFolders3 = [];
      let localStorageOpenFolders = localStorage.getItem(plugin2.keys.openFoldersKey);
      if (localStorageOpenFolders) {
        localStorageOpenFolders = JSON.parse(localStorageOpenFolders);
        for (let folder2 of localStorageOpenFolders) {
          let openFolder = plugin2.app.vault.getAbstractFileByPath(folder2);
          if (openFolder) openFolders3.push(openFolder.path);
        }
      }
      return openFolders3;
    }
    function getPinnedFilesFromSettings() {
      let pinnedFiles = [];
      let localStoragePinnedFiles = localStorage.getItem(plugin2.keys.pinnedFilesKey);
      if (localStoragePinnedFiles) {
        localStoragePinnedFiles = JSON.parse(localStoragePinnedFiles);
        for (let file2 of localStoragePinnedFiles) {
          let pinnedFile = plugin2.app.vault.getAbstractFileByPath(file2);
          if (pinnedFile) pinnedFiles.push(TFile2OZFile(pinnedFile));
        }
      }
      return pinnedFiles;
    }
    function saveOpenFoldersToSettings() {
      let openFoldersToSave = [];
      for (let folder2 of openFolders2) {
        openFoldersToSave.push(folder2);
      }
      localStorage.setItem(plugin2.keys.openFoldersKey, JSON.stringify(openFoldersToSave));
    }
    function savePinnedFilesToSettings() {
      let pinnedFilesToSave = [];
      for (let file2 of ozPinnedFiles) {
        pinnedFilesToSave.push(file2.path);
      }
      localStorage.setItem(plugin2.keys.pinnedFilesKey, JSON.stringify(pinnedFilesToSave));
    }
    function saveExcludedFoldersToSettings() {
      plugin2.settings.excludedFolders = excludedFolders2.length > 1 ? excludedFolders2.join(", ") : excludedFolders2[0];
      plugin2.saveSettings();
    }
    function rebuildCurrentFolderTree() {
      const currentFocusedFolder = focusedFolderRef.current ?? plugin2.app.vault.getRoot();
      setFolderTree(
        createFolderTree({
          startFolder: currentFocusedFolder,
          plugin: plugin2,
          excludedFolders: excludedFoldersRef.current,
          recursive: plugin2.shouldBuildFolderTreeRecursively()
        })
      );
    }
    function handleVaultChanges(file2, changeType, oldPathBeforeRename, deferFolderRefresh = false) {
      let currentActiveFolderPath = "";
      setActiveFolderPath((activeFolderPath3) => {
        currentActiveFolderPath = activeFolderPath3;
        return activeFolderPath3;
      });
      if (file2 instanceof TFile) {
        if (["rename", "delete"].contains(changeType)) {
          let currentOzPinnedFiles = [];
          setOzPinnedFiles((ozPinnedFiles2) => {
            currentOzPinnedFiles = ozPinnedFiles2;
            return ozPinnedFiles2;
          });
          const filteredPinnedFiles = currentOzPinnedFiles.filter(
            (f2) => f2.path !== (changeType === "rename" ? oldPathBeforeRename : file2.path)
          );
          if (filteredPinnedFiles.length !== currentOzPinnedFiles.length) {
            setOzPinnedFiles([...filteredPinnedFiles, ...changeType === "rename" ? [TFile2OZFile(file2)] : []]);
          }
        }
        let currentView = "";
        setView((view3) => {
          currentView = view3;
          return view3;
        });
        if (currentView === "file") {
          let currentFileList = [];
          setOzFileList((fileList) => {
            currentFileList = fileList;
            return fileList;
          });
          if (changeType === "rename" || changeType === "modify" || changeType === "delete") {
            let sortFilesBy = plugin2.settings.sortFilesBy;
            if (changeType === "modify") {
              if (!(sortFilesBy === "last-update" || sortFilesBy === "file-size")) {
                return;
              }
            }
            let parentFolderPath = file2.path.substring(0, file2.path.lastIndexOf("/"));
            let fileInCurrentView = currentFileList.some((f2) => {
              return changeType === "rename" ? f2.path === oldPathBeforeRename : f2.path === file2.path;
            });
            let fileInCurrentFolder = currentActiveFolderPath === parentFolderPath || plugin2.settings.showFilesFromSubFolders && parentFolderPath.startsWith(currentActiveFolderPath);
            if (fileInCurrentView) {
              if (changeType === "delete") {
                setOzFileList(
                  currentFileList.filter((f2) => {
                    return f2.path !== file2.path;
                  })
                );
              } else if (changeType === "rename" || changeType === "modify" && (sortFilesBy === "last-update" || sortFilesBy === "file-size")) {
                if (currentActiveFolderPath === "/") currentActiveFolderPath = "";
                setOzFileList([
                  ...currentFileList.filter((f2) => {
                    return changeType === "rename" ? f2.path !== oldPathBeforeRename : f2.path !== file2.path;
                  }),
                  // Include any file that roles up to the current active folder, not only the direct ones
                  ...file2.parent.path.startsWith(currentActiveFolderPath) ? [TFile2OZFile(file2)] : []
                ]);
                let currentActiveOZFile = null;
                setActiveOzFile((activeOZFile3) => {
                  currentActiveOZFile = activeOZFile3;
                  return activeOZFile3;
                });
                if (changeType === "rename" && currentActiveOZFile && currentActiveOZFile.path === oldPathBeforeRename) {
                  setActiveOzFile(TFile2OZFile(file2));
                }
              }
            } else if (fileInCurrentFolder && !fileInCurrentView) {
              setOzFileList([...currentFileList, TFile2OZFile(file2)]);
            }
          } else if (changeType === "create") {
            let fileIsCreatedUnderActiveFolder = file2.path.match(new RegExp(currentActiveFolderPath + ".*"));
            if (fileIsCreatedUnderActiveFolder) {
              if (!currentFileList.some((f2) => f2.path === file2.path)) {
                setOzFileList([...currentFileList, TFile2OZFile(file2)]);
              }
            }
          }
        }
      } else if (file2 instanceof TFolder) {
        invalidateRootFolderColorCache(plugin2);
        if (!deferFolderRefresh) rebuildCurrentFolderTree();
        if (changeType === "rename" && oldPathBeforeRename && currentActiveFolderPath === oldPathBeforeRename) {
          setActiveFolderPath(file2.path);
        }
      }
      if (plugin2.settings.folderCount && changeType !== "modify") {
        if (file2 instanceof TFile) {
          setFolderFileCountMap(
            (counts) => updateFolderNoteCountMap({
              counts,
              plugin: plugin2,
              file: file2,
              changeType,
              oldPath: oldPathBeforeRename
            })
          );
        } else if (!deferFolderRefresh) {
          setFolderFileCountMap(getFolderNoteCountMap(plugin2));
        }
      }
    }
    (0, import_react23.useEffect)(() => {
      if (activeOZFile2 && ozFileList2.length > 0) scrollToFile(activeOZFile2);
    }, [ozFileList2, activeOZFile2]);
    async function handleRevealFileEvent(evt) {
      const file2 = evt.detail.file;
      if (file2 && file2 instanceof TFile) {
        await plugin2.openFileTreeLeaf(true);
        revealFileInFileTree(TFile2OZFile(file2));
      } else {
        new Notice("File not found");
      }
    }
    function handleRevealFolderEvent(evt) {
      const folder2 = evt.detail.folder;
      if (folder2 && folder2 instanceof TFolder) {
        revealFolderInFileTree(folder2);
      } else {
        new Notice("Folder not found");
      }
    }
    function scrollToFile(fileToScroll) {
      if (useMobileOptimization(Platform.isMobile, plugin2.settings.mobileOptimizedLayout)) {
        window.dispatchEvent(new CustomEvent("ffm-reveal-file-row", { detail: fileToScroll.path }));
        return;
      }
      const selector2 = `div.oz-file-tree-files div.oz-nav-file-title[data-path="${fileToScroll.path}"]`;
      const fileTitleElement = document.querySelector(selector2);
      if (fileTitleElement) fileTitleElement.scrollIntoView(false);
    }
    function scrollToFolder(folder2) {
      const findFolderElement = () => Array.from(
        props.fileTreeView.containerEl.querySelectorAll("div.oz-folder-element[data-path]")
      ).find(
        (element) => element.getAttribute("data-path") === folder2.path && element.getClientRects().length > 0
      );
      const centerFolderElement = (folderElement) => {
        if (folderElement.closest(".ffm-compact")) return;
        folderElement.scrollIntoView({ block: "center", inline: "nearest" });
        [folderElement.closest(".oz-folders-tree-wrapper"), folderElement.closest(".oz-folder-pane, .oz-folder-pane-horizontal")].filter((element) => element instanceof HTMLElement).forEach((scrollContainer) => {
          const containerRect = scrollContainer.getBoundingClientRect();
          const folderRect = folderElement.getBoundingClientRect();
          scrollContainer.scrollTop += folderRect.top - containerRect.top - containerRect.height / 2 + folderRect.height / 2;
        });
      };
      const scrollAfterRender = (attemptsRemaining) => {
        const folderElement = findFolderElement();
        if (folderElement) {
          centerFolderElement(folderElement);
          if (revealScrollTimeout.current !== null) window.clearTimeout(revealScrollTimeout.current);
          revealScrollTimeout.current = window.setTimeout(() => {
            const settledFolderElement = findFolderElement();
            if (settledFolderElement) {
              centerFolderElement(settledFolderElement);
              highlightRevealedFolder(folder2, settledFolderElement);
            }
            revealScrollTimeout.current = null;
          }, 150);
          return;
        }
        if (attemptsRemaining > 0) {
          window.requestAnimationFrame(() => scrollAfterRender(attemptsRemaining - 1));
        }
      };
      window.requestAnimationFrame(() => scrollAfterRender(90));
    }
    function highlightRevealedFolder(folder2, folderElement) {
      const fileFocusLeaf = folderElement.closest('.workspace-leaf-content[data-type="fjg-file-focus-view"]');
      fileFocusLeaf?.querySelectorAll(".is-folder-reveal-highlight").forEach((element) => {
        element.classList.remove("is-folder-reveal-highlight");
      });
      folderElement.classList.add("is-folder-reveal-highlight");
      if (revealHighlightTimeout.current !== null) window.clearTimeout(revealHighlightTimeout.current);
      revealHighlightTimeout.current = window.setTimeout(() => {
        folderElement.classList.remove("is-folder-reveal-highlight");
        revealHighlightTimeout.current = null;
      }, 4e3);
      if (fileFocusLeaf) {
        let liveRegion = fileFocusLeaf.querySelector(".fjg-file-focus-reveal-status");
        if (!liveRegion) {
          liveRegion = document.createElement("div");
          liveRegion.className = "fjg-file-focus-reveal-status";
          liveRegion.setAttribute("role", "status");
          liveRegion.setAttribute("aria-live", "polite");
          liveRegion.setAttribute("aria-atomic", "true");
          fileFocusLeaf.appendChild(liveRegion);
        }
        liveRegion.textContent = "";
        window.requestAnimationFrame(() => {
          if (liveRegion) liveRegion.textContent = `Revealed folder ${folder2.name} in FJG File Focus`;
        });
      }
    }
    const getAllFoldersToOpen = (fileToReveal) => {
      let foldersToOpen = [];
      const recursiveFx = (folder2) => {
        foldersToOpen.push(folder2.path);
        if (folder2.parent) recursiveFx(folder2.parent);
      };
      recursiveFx(fileToReveal instanceof TFile ? fileToReveal.parent : fileToReveal);
      return foldersToOpen;
    };
    function revealFolderInFileTree(folderToReveal) {
      if (!folderToReveal) return;
      setFocusedFolder(plugin2.app.vault.getRoot());
      setActiveFolderPath(folderToReveal.path);
      setView("file");
      const foldersToOpen = getAllFoldersToOpen(folderToReveal);
      setOpenFolders((currentOpenFolders) => Array.from(/* @__PURE__ */ new Set([...currentOpenFolders, ...foldersToOpen])));
      scrollToFolder(folderToReveal);
    }
    function revealFileInFileTree(ozFileToReveal) {
      const fileToReveal = plugin2.app.vault.getAbstractFileByPath(ozFileToReveal.path);
      if (!fileToReveal) return;
      const parentFolder = fileToReveal.parent;
      if (useMobileOptimization(Platform.isMobile, plugin2.settings.mobileOptimizedLayout) && parentFolder?.isRoot()) window.requestAnimationFrame(() => window.dispatchEvent(new Event("ffm-show-root-files")));
      setFocusedFolder((currentFolder) => currentFolder?.isRoot() ? currentFolder : plugin2.app.vault.getRoot());
      if (parentFolder instanceof TFolder) {
        setActiveFolderPath(parentFolder.path);
        setView("file");
        setActiveOzFile(TFile2OZFile(fileToReveal));
        const foldersToOpen = getAllFoldersToOpen(fileToReveal);
        setOpenFolders((currentOpenFolders) => Array.from(/* @__PURE__ */ new Set([...currentOpenFolders, ...foldersToOpen])));
        scrollToFile(TFile2OZFile(fileToReveal));
        scrollToFolder(parentFolder);
      }
    }
    if (mobileOptimized) return /* @__PURE__ */ import_react23.default.createElement(MobileNavigator, { plugin: plugin2 });
    return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, view2 === "folder" ? /* @__PURE__ */ import_react23.default.createElement(MainFolder2, { plugin: plugin2 }) : view2 === "recent" || view2 === "bookmarks" ? plugin2.settings.evernoteView === "Horizontal" ? /* @__PURE__ */ import_react23.default.createElement(SingleViewHorizontal, { plugin: plugin2, focusMode: view2 }) : plugin2.settings.evernoteView === "Vertical" ? /* @__PURE__ */ import_react23.default.createElement(SingleViewVertical, { plugin: plugin2, focusMode: view2 }) : /* @__PURE__ */ import_react23.default.createElement(FocusPanel2, { plugin: plugin2, mode: view2 }) : plugin2.settings.evernoteView === "Horizontal" ? /* @__PURE__ */ import_react23.default.createElement(SingleViewHorizontal, { plugin: plugin2 }) : plugin2.settings.evernoteView === "Vertical" ? /* @__PURE__ */ import_react23.default.createElement(SingleViewVertical, { plugin: plugin2 }) : /* @__PURE__ */ import_react23.default.createElement(FileComponent2, { plugin: plugin2 }));
  }

  // src/settings.ts
  var import_local_storage_handler = __toESM(require_lib());

  // src/mobilePerformance.ts
  var DEFAULT_MOBILE_PERFORMANCE_MODE = false;

  // src/settings.ts
  var DEFAULT_EXCLUDED_FOLDERS = ["AI Team/_codex_task_logs", "Artifacts/Agent Mission Control/runner-logs"].join(", ");
  var DEFAULT_SETTINGS = {
    liveApiKey: "",
    liveBackendModel: "gpt-5.6-terra",
    openViewOnStart: true,
    mobilePerformanceMode: DEFAULT_MOBILE_PERFORMANCE_MODE,
    mobileOptimizedLayout: false,
    mobileToolbarShortcut: "recent",
    ribbonIcon: true,
    followActiveFile: true,
    showRootFolder: true,
    showFilesFromSubFolders: true,
    showOnlySupportedFileTypes: false,
    searchFunction: true,
    allSearchOnlyInFocusedFolder: false,
    showFilesFromSubFoldersButton: true,
    revealActiveFileButton: false,
    excludedExtensions: "",
    excludedFolders: DEFAULT_EXCLUDED_FOLDERS,
    hideAttachments: false,
    attachmentsFolderName: "attachments",
    folderIcon: "default",
    colorfulFolders: false,
    folderCount: true,
    folderCountOption: "notes",
    evernoteView: "Vertical",
    filePreviewOnHover: false,
    iconBeforeFileName: true,
    sortFilesBy: "name",
    sortReverse: false,
    sortFoldersBy: "name",
    fixedHeaderInFileList: true,
    createdYaml: false,
    fileNameIsHeader: false,
    folderNote: false,
    deleteFileOption: "trash",
    showFileNameAsFullPath: false,
    bookmarksEvents: false,
    focusMaxRecentFiles: 30,
    focusShowPaths: true,
    focusOpenInNewTab: true
  };

  // tests/mobile-browser/fixture.tsx
  Array.prototype.contains = Array.prototype.includes;
  String.prototype.contains = String.prototype.includes;
  HTMLElement.prototype.scrollIntoViewIfNeeded = function() {
    this.scrollIntoView({ block: "nearest" });
  };
  var params = new URLSearchParams(location.search);
  Platform.isMobile = params.get("platform") !== "desktop";
  window.notices = [];
  window.modals = [];
  window.opened = [];
  var root = new TFolder();
  root.path = "/";
  root.name = "Fixture vault";
  var map = /* @__PURE__ */ new Map([["/", root], ["", root]]);
  function folder(name, parent) {
    const f2 = new TFolder();
    f2.name = name;
    f2.path = (parent.isRoot() ? "" : parent.path + "/") + name;
    f2.parent = parent;
    parent.children.push(f2);
    map.set(f2.path, f2);
    return f2;
  }
  function file(name, parent, extension = "md") {
    const f2 = new TFile();
    f2.extension = extension;
    f2.name = name + "." + extension;
    f2.basename = name;
    f2.path = (parent.isRoot() ? "" : parent.path + "/") + f2.name;
    f2.parent = parent;
    parent.children.push(f2);
    map.set(f2.path, f2);
    return f2;
  }
  var projects = folder("Projects", root);
  var child = folder("Subfolder", projects);
  folder("Archive", root);
  for (let i = 0; i < 3e3; i++) file(`Note ${String(i).padStart(4, "0")}`, projects);
  file("Child note", child);
  file("Root note", root);
  file("__init__", projects, "py");
  file("__init__.cpython-314", projects, "pyc");
  var listeners = /* @__PURE__ */ new Set();
  var leaf = { view: { getViewType: () => "fjg-file-focus-view" }, openFile: async (f2) => window.opened.push(f2.path) };
  var app2 = {
    vault: { getRoot: () => root, getName: () => root.name, getAbstractFileByPath: (path) => map.get(path), getFiles: () => [...map.values()].filter((f2) => f2 instanceof TFile), getAllLoadedFiles: () => [...map.values()], getMarkdownFiles: () => [...map.values()].filter((f2) => f2 instanceof TFile), cachedRead: async () => "# Fixture", getConfig: () => false },
    workspace: { getActiveFile: () => map.get("Projects/Note 0000.md"), getLastOpenFiles: () => ["Projects/Note 0000.md"], getLeaf: () => leaf, setActiveLeaf: () => {
    }, trigger: () => {
    }, getLeavesOfType: () => [], activeLeaf: leaf },
    metadataCache: { getFileCache: () => ({ tags: [], frontmatter: {} }) },
    internalPlugins: { plugins: {}, getEnabledPluginById: (id) => id === "bookmarks" ? { items: [{ type: "group", title: "Group", items: [{ type: "file", path: "Projects/Note 0000.md" }] }, { type: "file", path: "Projects/Note 0001.md" }] } : null },
    commands: { commands: {}, executeCommandById: () => false },
    plugins: { getPlugin: () => null }
  };
  var plugin = { app: app2, manifest: { id: "fjg-file-focus-duo" }, settings: { ...DEFAULT_SETTINGS, folderNote: false, excludedExtensions: ".PY, pyc", mobileOptimizedLayout: params.get("optimized") !== "off" }, keys: { activeFolderPathKey: "fixture-active", focusedFolder: "fixture-focus", pinnedFilesKey: "fixture-pins", openFoldersKey: "fixture-open" }, VIEW_TYPE: "fjg-file-focus-view", saveSettings: async () => {
  }, shouldBuildFolderTreeRecursively: () => true, isMobilePerformanceModeEnabled: () => false, shouldFollowActiveFile: () => false, openFileTreeLeaf: async () => {
  }, registerFolderRevealListener: (fn) => {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }, openInboxMorningBrief: () => {
  }, openVaultVoice: () => {
  } };
  window.fixture = { plugin, app: app2, root, projects, child, refresh: () => window.dispatchEvent(new Event(eventTypes.refreshView)), reveal: (path) => window.dispatchEvent(new CustomEvent(eventTypes.revealFile, { detail: { file: map.get(path) } })), setSetting: (key, value) => {
    plugin.settings[key] = value;
    window.dispatchEvent(new Event(eventTypes.refreshView));
  } };
  (0, import_client.createRoot)(document.getElementById("mount")).render(/* @__PURE__ */ import_react24.default.createElement(Recoil_index_5, null, /* @__PURE__ */ import_react24.default.createElement(MainTreeComponent, { plugin, fileTreeView: { containerEl: document.getElementById("mount"), contentEl: document.getElementById("panel") } })));
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
