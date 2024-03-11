import { CohereClient } from "cohere-ai";
import config from "../../config.js";

class Gpt {

    constructor(){
        this._apiKey = config.apiKey
    }

    async generate(promp,token = 200){

        const cohere = new CohereClient({
            token: this._apiKey,
        });


        return await cohere.generate({
            prompt: promp,
            model: "command",
            temperature: 0.5,
            maxTokens: token,
            presencePenalty: 0.3,
            frequencyPenalty: 0.3
        });

    }


}


export default Gpt



