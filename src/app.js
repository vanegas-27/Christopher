import Gpt from "./gpt/chatGpt.js";

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


// gpt.generateGpt("que lenguaje de programacion fue el mejor en 2023")
// .then(rel => console.log(rel.generations[0].text))
// .catch(err => console.error(err))