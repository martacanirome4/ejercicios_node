const http = require('http');
const port = 3000;
const url = require('url');

const palabras = require('./opcion1/palabras.json'); // accedemos el diccionario con palabras aleatorias

// función para obtener una palabra aleatoria del diccionario
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * palabras.length);
    return palabras[randomIndex];
}

// función para generar una contraseña de X palabras
function generatePassword(numWords) {
    let password = [];
    for (let i = 0; i < numWords; i++) {
        password.push(getRandomWord());
    }
    return password.join('-'); // Separa las palabras con un guion
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    // función el valor de 'X' desde los parámetros de consulta o usa 2 como valor por defecto
    const X = parseInt(query.X, 10) || 2;

    // función la contraseña aleatoria de X palabras
    const password = generatePassword(X);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Password generated from ${X} ranadom words: ${password}\n`);
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
