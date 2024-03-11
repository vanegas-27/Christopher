import { config } from "dotenv";

config();

export default {
    apiKey : process.env.APIKEY,
    port : process.env.PORT
}