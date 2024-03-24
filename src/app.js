import Gpt from "./services/chatGpt.js";

document.querySelector('#contexto').textContent = "gai"

const gpt = new Gpt();

gpt.chat("que lenguaje de programacion fue el mejor en 2023",100)
.then( async rel => {

    let mensaje = ""

    for await (const message of rel) {
        if (message.eventType === "text-generation") {
            mensaje += message.text;
        }
    }
    return mensaje
}).then(msg => console.log(msg))
.catch(err => console.error(err))


gpt.generateGpt("cual es el mejor lenguaje de programacion 2024")
.then(rel => {
    document.querySelector('#contexto').textContent = msg
    console.log(rel)
})
.catch(err => console.error(err))
