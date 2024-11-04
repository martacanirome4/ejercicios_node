const http = require('http');
const port = 3000;
const path = require("path"); // módulo con utilidades para trabajar con ficheros y rutas
const url = require('url');


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); // Analiza la URL y los parámetros de consulta
    const query = parsedUrl.query; // Obtiene los parámetros de la consulta

    // Ejemplo: Accede a un parámetro llamado 'name'
    const X = query.X || 2;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Numero de palabras con los que se genera la contraseña aleatoria: ${X}\n`);
});
  
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});