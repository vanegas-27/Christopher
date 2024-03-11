import express from 'express';
import config from '../../config.js';
import { fileURLToPath  } from 'url';
import path, { dirname } from 'path';


const app = express();


app.get("/" , (req , res) => {
    res.send("hola mundo");
});


app.get("/gpt", (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePath = path.join(__dirname, '../../public/index.html');
    console.log(filePath);

    res.sendFile(filePath);

});


app.listen(config.port , () => {
    console.log(`El servidor esta corriendo en ${config.port}`)
})