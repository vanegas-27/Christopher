"use strict";

var _chatGpt = _interopRequireDefault(require("./gpt/chatGpt.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var chatGpt = new _chatGpt["default"]();
chatGpt.generate("que lenguaje de programacion fue el mejor en 2023").then(function (rel) {
  return console.log(rel.generations[0].text);
})["catch"](function (err) {
  return console.error(err);
});