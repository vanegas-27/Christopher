import Gpt from "./gpt/chatGpt.js";

const chatGpt = new Gpt();

chatGpt.generate("que lenguaje de programacion fue el mejor en 2023")

.then(rel => console.log(rel.generations[0].text))
.catch(err => console.error(err))