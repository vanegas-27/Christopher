import { CohereClient } from "cohere-ai";
import config from "../config/config.js";

class Gpt {

    constructor(){

        this._msgAfter = []

        this._apiKey = config.apiKey

        this._co = new CohereClient({
            token: this._apiKey
        })

    }


    get getMsg(){
        return this._msgAfter
    }


    set setMsg(msg){
        this._msgAfter.push({
            role : msg.user,
            message : msg.text
        })
    }


    async chat(promp,tokes) {

        this.setMsg = {
            user : "USER",
            text : "el lenguaje mas popular del 2023 es Python, despues lo sigue C++ y JavaScript."
        }

        return await this._co.chatStream({
            chatHistory: this._msgAfter,
            message: promp,
            // perform web search before answering the question. You can also use your own custom connector.
            connectors: [{ id: "web-search" }],
            model: "command-light",
            maxTokens: tokes,

        });

    }


    async generateGpt(text,tokes = 100) {

        return await this._co.chat({
            message: text,
            connectors : [{ id : "web-search"}],
            model: "command-light",
            temperature: 0.5,
            maxTokens: tokes,
        });

    }


}


export default Gpt



