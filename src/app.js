import Gpt from "./services/chatGpt.js";

const gpt = new Gpt();

const chat = gpt.chat()
const generate = gpt.generate()


// modelo N°1
const ch = await chat.chatGpt("el mejor lenjuage de programacion del 2024")
console.log(ch)
console.log(chat.getMsgChat)


// modelo N°2
const ge = await generate.generateGpt("el mejor lenjuage de programacion del 2024")
console.log(ge)
console.log(generate.getMsgGenerate)
