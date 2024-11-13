import LivrosController from "../controllers/LivrosController.js";
import express from "express";
import paginacao from "../middlewares/paginacao.js";

const routerLivros = express.Router();

routerLivros
    .get("/livros", LivrosController.pegaTodosOsLivros, paginacao)
    .get("/livros/busca", LivrosController.listarLivrosPorFiltro, paginacao)
    .get("/livros/:id", LivrosController.pegaUmLivro)
    .post("/livros", LivrosController.cadastraLivro)
    .put("/livros/:id", LivrosController.atualizaLivro)
    .delete("/livros/:id", LivrosController.deletaLivro);

export default routerLivros;