"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cohereAi = require("cohere-ai");
var _config = _interopRequireDefault(require("../config/config.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _asyncIterator(r) { var n, t, o, e = 2; for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) { if (t && null != (n = r[t])) return n.call(r); if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r)); t = "@@asyncIterator", o = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(r) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var n = r.done; return Promise.resolve(r.value).then(function (r) { return { value: r, done: n }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(r) { this.s = r, this.n = r.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(r) { var n = this.s["return"]; return void 0 === n ? Promise.resolve({ value: r, done: !0 }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); }, "throw": function _throw(r) { var n = this.s["return"]; return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(r); }
/**
 * Esta clase se encarga de gestionar un modelo GPT especifico
 * en este caso chatStream, esta asu vez contiene sus metodos
 * y atributo propios para el GPT
 * ----
 *
 * @param token apiKey para las diferentes peticiones a la IA
 *
 *  @example
 *    const chat = new _Chat(apiKey)
 */
var _Chat = /*#__PURE__*/function () {
  function _Chat(token) {
    _classCallCheck(this, _Chat);
    this._msgAfterChat = [];
    this._token = token;
  }

  /**
   * Getter encargado de extarer el historial
   * de todos los mensajes recibidos y entregados por
   * el modelo GPT.
   *
   * @param void
   *
   * @return {
   *  role : string,
   *  message : string
   * }
   */
  _createClass(_Chat, [{
    key: "getMsgChat",
    get: function get() {
      return this._msgAfterChat;
    }

    /**
     * Setter encargado de la modificacion
     * del historial del modelo GPT y almacenar sus
     * diversas conversaciones durante el tiempo.
     *
     * @param {
     *  role : string,
     *  message : string
     * }
     */
  }, {
    key: "setMsgChat",
    set: function set(msg) {
      this._msgAfterChat.push({
        role: msg.user,
        message: msg.text
      });
    }

    /**
     * Este modelo es uno de los apenas implementados, este
     * es un modelo diseñado para charlar con el usuario y ser un poco
     * mas amigable, brindandole informacion mas amena y amplia.
     *
     * @param  promp required
     * @param  tokes default = 500
     * @param  model default = command-light
     *
     * @return string
     *
     * @example
     *  const rel = await chat.chatGpt({
     *    promp : "el mejor lenjuage de programacion del 2024"
     *  })
     *  console.log(rel)
     *
     *
     * @example
     *  const rel = await chat.chatGpt({
     *    promp : "el mejor lenjuage de programacion del 2024",
     *    tokes : 200,
     *    model : "command"
     *  })
     *  console.log(rel)
     */
  }, {
    key: "chatGpt",
    value: (function () {
      var _chatGpt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var promp, _ref$tokes, tokes, _ref$model, model, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, message;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              promp = _ref.promp, _ref$tokes = _ref.tokes, tokes = _ref$tokes === void 0 ? 500 : _ref$tokes, _ref$model = _ref.model, model = _ref$model === void 0 ? "command-light" : _ref$model;
              this.setMsgChat = {
                user: "USER",
                text: promp
              };
              _context.next = 4;
              return this._token.chatStream({
                chatHistory: this._msgAfterChat,
                message: promp,
                connectors: [{
                  id: "web-search"
                }],
                model: model,
                maxTokens: tokes
              });
            case 4:
              this.rel = _context.sent;
              this.mensaje = "";
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context.prev = 8;
              _iterator = _asyncIterator(this.rel);
            case 10:
              _context.next = 12;
              return _iterator.next();
            case 12:
              if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
                _context.next = 18;
                break;
              }
              message = _step.value;
              if (message.eventType === "text-generation") this.mensaje = this.mensaje.concat(message.text);
            case 15:
              _iteratorAbruptCompletion = false;
              _context.next = 10;
              break;
            case 18:
              _context.next = 24;
              break;
            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](8);
              _didIteratorError = true;
              _iteratorError = _context.t0;
            case 24:
              _context.prev = 24;
              _context.prev = 25;
              if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                _context.next = 29;
                break;
              }
              _context.next = 29;
              return _iterator["return"]();
            case 29:
              _context.prev = 29;
              if (!_didIteratorError) {
                _context.next = 32;
                break;
              }
              throw _iteratorError;
            case 32:
              return _context.finish(29);
            case 33:
              return _context.finish(24);
            case 34:
              this.setMsgChat = {
                user: "CHATBOT",
                text: this.mensaje
              };
              return _context.abrupt("return", this.mensaje);
            case 36:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[8, 20, 24, 34], [25,, 29, 33]]);
      }));
      function chatGpt(_x) {
        return _chatGpt.apply(this, arguments);
      }
      return chatGpt;
    }())
  }]);
  return _Chat;
}();
/**
 * Esta clase se encarga de gestionar un modelo GPT especifico
 * en este caso chat, esta asu vez contiene sus metodos
 * y atributo propios para el GPT
 * ----
 *
 * @param token apiKey para las diferentes peticiones a la IA
 *
 *  @example
 *    const generate = new _Generate(apiKey)
 */
var _Generate = /*#__PURE__*/function () {
  function _Generate(token) {
    _classCallCheck(this, _Generate);
    this._msgAftergenerate = [];
    this._token = token;
  }

  /**
   * Getter encargado de extarer el historial
   * de todos los mensajes recibidos y entregados por
   * el modelo GPT.
   *
   * @param void
   *
   * @return {
    *  role : string,
    *  message : string
    * }
    */
  _createClass(_Generate, [{
    key: "getMsgGenerate",
    get: function get() {
      return this._msgAftergenerate;
    }

    /**
     * Setter encargado de la modificacion
     * del historial del modelo GPT y almacenar sus
     * diversas conversaciones durante el tiempo.
     *
     * @param {
    *  role : string,
    *  message : string
    * }
    */
  }, {
    key: "setMsgGenerate",
    set: function set(msg) {
      this._msgAftergenerate.push(msg);
    }

    /**
     * Este modelo es otro de los apenas implementados, este
     * es un modelo diseñado para dar respuestas al usuario de manera directa
     * es decir este sera mas directo con el mensaje y sin dar mucho detañe.
     *
     * @param  promp required
     * @param  tokes default = 500
     * @param  model default = command-light
     *
     * @return string
     *
     * @example
     *  const rel = await generate.generateGpt({
     *    promp : "el mejor lenjuage de programacion del 2024"
     *  })
     *  console.log(rel)
     *
     *
     * @example
     *  const rel = await generate.generateGpt({
     *    promp : "el mejor lenjuage de programacion del 2024",
     *    tokes : 200,
     *    model : "command"
     *  })
     *  console.log(rel)
     */
  }, {
    key: "generateGpt",
    value: (function () {
      var _generateGpt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
        var _this$rel, _this$rel2;
        var promp, _ref2$tokes, tokes, _ref2$model, model, _ref2$temp, temp;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              promp = _ref2.promp, _ref2$tokes = _ref2.tokes, tokes = _ref2$tokes === void 0 ? 500 : _ref2$tokes, _ref2$model = _ref2.model, model = _ref2$model === void 0 ? "command-light" : _ref2$model, _ref2$temp = _ref2.temp, temp = _ref2$temp === void 0 ? 0.5 : _ref2$temp;
              _context2.next = 3;
              return this._token.chat({
                message: promp,
                connectors: [{
                  id: "web-search"
                }],
                model: model,
                temperature: temp,
                maxTokens: tokes
              });
            case 3:
              this.rel = _context2.sent;
              this.setMsgGenerate = (_this$rel = this.rel) === null || _this$rel === void 0 ? void 0 : _this$rel.chat_history;
              return _context2.abrupt("return", (_this$rel2 = this.rel) === null || _this$rel2 === void 0 ? void 0 : _this$rel2.text);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function generateGpt(_x2) {
        return _generateGpt.apply(this, arguments);
      }
      return generateGpt;
    }())
  }]);
  return _Generate;
}();
/**
 * Esta clase Gpt es la clase madre, ya que esta contiene
 * los modelos de GPT hasta el momento construidos, aparte esta se encarga
 * de gestionar la apiKey para brindarsela a los diferentes modelos GPT.
 * ----
 *
 * @param null
 *
 * esta se encarga de traer la apiKey de las configuraciones.
 * asegurese tener una apiKey a la mano
 *
 * @models
 * -> Chat()
 *
 * -> Generate()
 *
 *  @example
 *    const gpt = new Gpt();
 *
 *    const chat = gpt.chat()
 *    const generate = gpt.generate()
 *
 *
 */
var Gpt = /*#__PURE__*/function () {
  /**
   * Constructor()
   *
   * Este se encarga de consumir la apiKey y gestiornarla
   * a quien corresponda.
   *
   * @param void
   *
   * @return void
   */
  function Gpt() {
    _classCallCheck(this, Gpt);
    this._apiKey = _config["default"].apiKey;

    //inicializo la conexion con la api Cohere-ai, como minimo necesita la apiKey
    this._co = new _cohereAi.CohereClient({
      token: this._apiKey
    });
  }

  /**
   * Este metodo se encarga de generar una instancia
   * y retornarla del modelo especifico para su manipulacion.
   * @param void
   *
   * @return instance Chat()
   *
   * @example
   *  const gpt = new Gpt();
   *
   *  const chat = gpt.chat()
   *
   */
  _createClass(Gpt, [{
    key: "chat",
    value: function chat() {
      return new _Chat(this._co);
    }

    /**
     * Este metodo se encarga de generar una instancia
     * y retornarla del modelo especifico para su manipulacion.
     * @param void
     *
     * @return instance Generate()
     *
     * @example
     *  const gpt = new Gpt();
     *
     *  const generate = gpt.generate()
     */
  }, {
    key: "generate",
    value: function generate() {
      return new _Generate(this._co);
    }
  }]);
  return Gpt;
}();
var _default = exports["default"] = Gpt;