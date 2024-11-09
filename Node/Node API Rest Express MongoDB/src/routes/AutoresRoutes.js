import AutoresController from "../controllers/AutoresController.js";
import express from "express";

const routerAutores = express.Router();

routerAutores.get("/autores", AutoresController.pegaTodosOsAutores);
routerAutores.get("/autores/:id", AutoresController.pegaUmAutor);
routerAutores.post("/autores", AutoresController.cadastraAutor);
routerAutores.put("/autores/:id", AutoresController.atualizaAutor);
routerAutores.delete("/autores/:id", AutoresController.deletaAutor);

export default routerAutores;