import express from 'express';
import config from '../config.js';
import { fileURLToPath  } from 'url';
import path , { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();

app.use(express.static(path.join(dirname(__filename), '../../public')));

app.get("/", (req, res) => {
    
    const filePath = path.join(__dirname, '../../public/index.html');
    res.sendFile(filePath);

});


app.listen(config.port , () => {
    console.log(`El servidor esta corriendo en ${config.port}`)
})