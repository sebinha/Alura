import AutoresController from "../controllers/AutoresController.js";
import express from "express";
import paginacao from "../middlewares/paginacao.js";

const routerAutores = express.Router();

routerAutores.get("/autores", AutoresController.pegaTodosOsAutores, paginacao);
routerAutores.get("/autores/:id", AutoresController.pegaUmAutor);
routerAutores.post("/autores", AutoresController.cadastraAutor);
routerAutores.put("/autores/:id", AutoresController.atualizaAutor);
routerAutores.delete("/autores/:id", AutoresController.deletaAutor);

export default routerAutores;