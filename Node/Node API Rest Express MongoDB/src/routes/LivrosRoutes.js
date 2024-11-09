import LivrosController from "../controllers/LivrosController.js";
import express from "express";

const routerLivros = express.Router();

routerLivros.get("/livros", LivrosController.pegaTodosOsLivros);
routerLivros.get("/livros/busca", LivrosController.listarLivrosPorEditora);
routerLivros.get("/livros/:id", LivrosController.pegaUmLivro);
routerLivros.post("/livros", LivrosController.cadastraLivro);
routerLivros.put("/livros/:id", LivrosController.atualizaLivro);
routerLivros.delete("/livros/:id", LivrosController.deletaLivro);

export default routerLivros;