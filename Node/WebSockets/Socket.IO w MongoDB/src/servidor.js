import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const porta = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, '../public');


app.use(express.static(publicPath));

server.listen(porta, () => {
  console.log(`Servidor online na porta ${porta}`);
});

export default io;