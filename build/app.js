"use strict";

var _chatGpt = _interopRequireDefault(require("./services/chatGpt.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var gpt = new _chatGpt["default"]();
var chat = gpt.chat();
var generate = gpt.generate();

// modelo N°1

// console.time("time_chat")
// const rel1 = await chat.chatGpt({
//   promp : "el mejor lenjuage de programacion del 2024"
// })
// console.log(rel1)
// console.timeEnd("time_chat")

// modelo N°2

// console.time("time_generate")
// const rel2 = await generate.generateGpt({
//   promp : "el mejor lenjuage de programacion del 2024"
// })
// console.log(rel2)
// console.timeEnd("time_generate")