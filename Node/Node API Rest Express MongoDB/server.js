import http from 'http';
import app from './src/app.js';


const PORT = 3000


// const rotas = {
//     "/": "Rota home",
//     "/livros": "Rota livros",
//     "/autores": "Rota autores"
// }

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(rotas[req.url])
// })

app.listen(PORT, ()=>{
    console.log('Servidor online')
})