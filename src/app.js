import Gpt from "./services/chatGpt.js";

const gpt = new Gpt();

const chat = gpt.chat()
const generate = gpt.generate()


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

