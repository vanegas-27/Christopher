import { CohereClient } from "cohere-ai";
import config from "../config/config.js";

class _Chat {

  constructor(token) {
    this._msgAfterChat = []
    this._token = token
  }


  get getMsgChat() {
    return this._msgAfterChat
  }


  set setMsgChat(msg) {
    this._msgAfterChat.push({
      role: msg.user,
      message: msg.text
    })
  }

  async chatGpt(promp, tokes = 500) {

    this.setMsgChat = {
      user: "USER",
      text: promp
    }

    this.rel = await this._token.chatStream({
      chatHistory: this._msgAfterChat,
      message: promp,
      connectors: [{ id: "web-search" }],
      model: "command-light",
      maxTokens: tokes,

    });

    this.mensaje = ""

    for await (const message of this.rel) {
      if (message.eventType === "text-generation") this.mensaje = this.mensaje.concat(message.text);
    }

    this.setMsgChat = {
      user: "CHATBOT",
      text: this.mensaje
    }

    return this.mensaje

  }

}


class _Generate {

  constructor(token) {
    this._msgAftergenerate = []
    this._token = token
  }

  get getMsgGenerate() {
    return this._msgAftergenerate
  }


  set setMsgGenerate(msg) {
    this._msgAftergenerate.push(msg)
  }


  async generateGpt(promp, tokes = 500) {

    this.rel = await this._token.chat({
      message: promp,
      connectors: [{ id: "web-search" }],
      model: "command-light",
      temperature: 0.5,
      maxTokens: tokes,
    });

    this.setMsgGenerate = this.rel?.chat_history

    return this.rel?.text

  }
}



class Gpt {

  constructor() {

    this._apiKey = config.apiKey

    this._co = new CohereClient({
      token: this._apiKey
    })

  }

  chat() {
    return new _Chat(this._co)
  }


  generate() {
    return new _Generate(this._co)
  }
}


export default Gpt
