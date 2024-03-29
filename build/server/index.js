"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("../config/config.js"));
var _url = require("url");
var _path = _interopRequireWildcard(require("path"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// para localizar archivo actual o donde se llama
// path y dirname para unir ruta dinamica

var _filename = (0, _url.fileURLToPath)(import.meta.url); // extraemos ruta del archivo donde estamos
var _dirname = (0, _path.dirname)(_filename); // la pasamos por dirname() para localizar el directorio

var app = (0, _express["default"])(); //servidor express

// ruta estatica para localizar el directorio principal
app.use(_express["default"]["static"](_path["default"].join((0, _path.dirname)(_filename), '../../public')));

// redirecionamineto hacia ruta estatica, con archivos a servir
app.get("/", function (req, res) {
  var filePath = _path["default"].join(_dirname, '../../public/index.html');
  res.sendFile(filePath);
});
app.listen(_config["default"].port, function () {
  console.log("El servidor esta corriendo en http://localhost:".concat(_config["default"].port));
});