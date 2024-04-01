import express from 'express';
import config from '../config/config.js';
import { fileURLToPath } from 'url'; // para localizar archivo actual o donde se llama
import path, { dirname } from 'path'; // path y dirname para unir ruta dinamica

const __filename = fileURLToPath(import.meta.url); // extraemos ruta del archivo donde estamos
const __dirname = dirname(__filename); // la pasamos por dirname() para localizar el directorio


const app = express(); //servidor express

// ruta estatica para localizar el directorio principal
app.use(express.static(path.join(dirname(__filename), '../../public')));


// redirecionamineto hacia ruta estatica, con archivos a servir
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, '../../public/index.html');
  res.sendFile(filePath);
}).listen(config.port, () => {
  console.log(`El servidor esta corriendo en http://localhost:${config.port}`)
})
