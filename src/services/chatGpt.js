import { CohereClient } from "cohere-ai";
import config from "../config/config.js";

class _Chat {

    constructor(token){
        this._msgAfterChat = []
        this._token = token
    }


    get getMsgChat(){
        return this._msgAfterChat
    }


    set setMsgChat(msg){
        this._msgAfterChat.push({
            role : msg.user,
            message : msg.text
        })
    }

    async chat(promp,tokes) {

        this.setMsgChat = {
            user : "USER",
            text : promp
        }

        return await this._token.chatStream({
            chatHistory: this._msgAfterChat,
            message: promp,
            // perform web search before answering the question. You can also use your own custom connector.
            connectors: [{ id: "web-search" }],
            model: "command-light",
            maxTokens: tokes,

        });

    }

}


class _Generate {

    constructor(token){
        this._msgAftergenerate = []
        this._token = token
    }

    get getMsgGenerate(){
        return this._msgAftergenerate
    }


    set setMsgGenerate(msg) {
        this._msgAftergenerate.push(msg)
    }


    async generateGpt(promp,tokes) {

        return await this._token.chat({
            message: promp,
            connectors : [{ id : "web-search"}],
            model: "command-light",
            temperature: 0.5,
            maxTokens: tokes,
        });

    }
}


class Gpt {
    
    constructor(){

        this._apiKey = config.apiKey

        this._co = new CohereClient({
            token: this._apiKey
        })

    }

    async chat(promp,tokes = 500){
        return await new _Chat(this._co).chat(promp,tokes)
    }


    async generate(promp,tokes = 500){
        return await new _Generate(this._co).generateGpt(promp,tokes)
    }
}


export default Gpt