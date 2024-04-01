import { config } from "dotenv";

config();

/**
 * Configuraciones del proyecto
 * ----
 *
 * @return {
 *  apiKey,
 *  port
 * }
 */
export default {
  apiKey: process.env.APIKEY,
  port: process.env.PORT
}
