import Gpt from "./services/chatGpt.js";

const gpt = new Gpt();


// modelo N°1
console.time("time_chat")
gpt.chat("el mejor lenguaje de programacion en 2024",100)
.then( async rel => {

    let mensaje = ""

    for await (const message of rel) {
        if (message.eventType === "text-generation") mensaje = mensaje.concat(message.text);
    }

    gpt.setMsgChat = {
        user : "CHATBOT",
        text : mensaje
    }

    return mensaje
}).then(msg => {
    console.log(msg)
    console.timeEnd("time_chat") // misma pregunta 3 intentos... N°1 = 4.344s      N°2 = 3.316s      N°3 = 3.297s (varia dependiendo los tokes)
})
.catch(err => console.error(err))




// modelo N°2
console.time("time_gene")
gpt.generate("recomiendame una ruta de front-end")
.then(rel => {
    gpt.setMsgGenerate = rel.chat_history
    console.log(rel.text)
    console.timeEnd("time_gene") // misma pregunta 3 intentos... N°1 = 3.754s       N°2 = 3.032s      N°3 = 3.808s (varia dependiendo los tokes)
})
.catch(err => console.error(err))

