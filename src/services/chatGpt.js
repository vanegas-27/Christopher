import { CohereClient } from "cohere-ai";
import config from "../config/config.js";

/**
 * Esta clase se encarga de gestionar un modelo GPT especifico
 * en este caso chatStream, esta a su vez contiene sus metodos
 * y atributo propios para el GPT
 * ----
 *
 * @param token apiKey para las diferentes peticiones a la IA
 *
 *  @example
 *    const chat = new _Chat(apiKey)
 */
class _Chat {

  constructor(token) {
    this._msgAfterChat = []
    this._token = token
  }


  /**
   * Getter encargado de extarer el historial
   * de todos los mensajes recibidos y entregados por
   * el modelo GPT.
   *
   * @param void
   *
   * @return {
   *  role : string,
   *  message : string
   * }
   */
  get getMsgChat() {
    return this._msgAfterChat
  }


  /**
   * Setter encargado de la modificacion
   * del historial del modelo GPT y almacenar sus
   * diversas conversaciones durante el tiempo.
   *
   * @param {
   *  role : string,
   *  message : string
   * }
   */
  set setMsgChat(msg) {
    this._msgAfterChat.push({
      role: msg.user,
      message: msg.text
    })
  }


  /**
   * Este modelo es uno de los apenas implementados, este
   * es un modelo diseñado para charlar con el usuario y ser un poco
   * mas amigable, brindandole informacion mas amena y amplia.
   *
   * @param  promp required
   * @param  tokes default = 500
   * @param  model default = command-light
   *
   * @return string
   *
   * @example
   *  const rel = await chat.chatGpt({
   *    promp : "el mejor lenjuage de programacion del 2024"
   *  })
   *  console.log(rel)
   *
   *
   * @example
   *  const rel = await chat.chatGpt({
   *    promp : "el mejor lenjuage de programacion del 2024",
   *    tokes : 200,
   *    model : "command"
   *  })
   *  console.log(rel)
   */
  async chatGpt({
    promp,
    tokes = 500,
    model = "command-light"
  }) {

    this.setMsgChat = {
      user: "USER",
      text: promp
    }

    this.rel = await this._token.chatStream({
      chatHistory: this._msgAfterChat,
      message: promp,
      connectors: [{ id: "web-search" }],
      model: model,
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

/**
 * Esta clase se encarga de gestionar un modelo GPT especifico
 * en este caso chat, esta asu vez contiene sus metodos
 * y atributo propios para el GPT
 * ----
 *
 * @param token apiKey para las diferentes peticiones a la IA
 *
 *  @example
 *    const generate = new _Generate(apiKey)
 */
class _Generate {

  constructor(token) {
    this._msgAftergenerate = []
    this._token = token
  }


  /**
   * Getter encargado de extarer el historial
   * de todos los mensajes recibidos y entregados por
   * el modelo GPT.
   *
   * @param void
   *
   * @return {
    *  role : string,
    *  message : string
    * }
    */
  get getMsgGenerate() {
    return this._msgAftergenerate
  }


  /**
   * Setter encargado de la modificacion
   * del historial del modelo GPT y almacenar sus
   * diversas conversaciones durante el tiempo.
   *
   * @param {
  *  role : string,
  *  message : string
  * }
  */
  set setMsgGenerate(msg) {
    this._msgAftergenerate.push(msg)
  }


  /**
   * Este modelo es otro de los apenas implementados, este
   * es un modelo diseñado para dar respuestas al usuario de manera directa
   * es decir este sera mas directo con el mensaje y sin dar mucho detañe.
   *
   * @param  promp required
   * @param  tokes default = 500
   * @param  model default = command-light
   *
   * @return string
   *
   * @example
   *  const rel = await generate.generateGpt({
   *    promp : "el mejor lenjuage de programacion del 2024"
   *  })
   *  console.log(rel)
   *
   *
   * @example
   *  const rel = await generate.generateGpt({
   *    promp : "el mejor lenjuage de programacion del 2024",
   *    tokes : 200,
   *    model : "command"
   *  })
   *  console.log(rel)
   */
  async generateGpt({
    promp,
    tokes = 500,
    model = "command-light",
    temp = 0.5
  }) {

    this.rel = await this._token.chat({
      message: promp,
      connectors: [{ id: "web-search" }],
      model: model,
      temperature: temp,
      maxTokens: tokes,
    });

    this.setMsgGenerate = this.rel?.chat_history

    return this.rel?.text

  }
}



/**
 * Esta clase Gpt es la clase madre, ya que esta contiene
 * los modelos de GPT hasta el momento construidos, aparte esta se encarga
 * de gestionar la apiKey para brindarsela a los diferentes modelos GPT.
 * ----
 *
 * @param null
 *
 * esta se encarga de traer la apiKey de las configuraciones.
 * asegurese tener una apiKey a la mano
 *
 * @models
 * -> Chat()
 *
 * -> Generate()
 *
 *  @example
 *    const gpt = new Gpt();
 *
 *    const chat = gpt.chat()
 *    const generate = gpt.generate()
 *
 *
 */
class Gpt {

  /**
   * Constructor()
   *
   * Este se encarga de consumir la apiKey y gestiornarla
   * a quien corresponda.
   *
   * @param void
   *
   * @return void
   */
  constructor() {

    this._apiKey = config.apiKey

    //inicializo la conexion con la api Cohere-ai, como minimo necesita la apiKey
    this._co = new CohereClient({
      token: this._apiKey
    })

  }

  /**
   * Este metodo se encarga de generar una instancia
   * y retornarla del modelo especifico para su manipulacion.
   * @param void
   *
   * @return instance Chat()
   *
   * @example
   *  const gpt = new Gpt();
   *
   *  const chat = gpt.chat()
   *
   */
  chat() {
    return new _Chat(this._co)
  }


  /**
   * Este metodo se encarga de generar una instancia
   * y retornarla del modelo especifico para su manipulacion.
   * @param void
   *
   * @return instance Generate()
   *
   * @example
   *  const gpt = new Gpt();
   *
   *  const generate = gpt.generate()
   */
  generate() {
    return new _Generate(this._co)
  }

}


export default Gpt
