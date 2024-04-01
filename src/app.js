import Gpt from "./services/chatGpt.js";

const gpt = new Gpt();

const chat = gpt.chat()
const generate = gpt.generate()


// modelo N°1

// console.time("time_chat")

const responseChat = await chat.chatGpt({
  promp: "el mejor lenjuage de programacion del 2024"
})
console.log(responseChat)

// console.timeEnd("time_chat")


// modelo N°2

// console.time("time_generate")

const responseGenerate = await generate.generateGpt({
  promp: "el mejor lenjuage de programacion del 2024"
})
console.log(responseGenerate)

// console.timeEnd("time_generate")

