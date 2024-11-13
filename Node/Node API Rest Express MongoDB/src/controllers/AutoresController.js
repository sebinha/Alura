import Erro404 from "../err/Erro404.js";
import { autorModel } from "../models/index.js";

class AutoresController {
  static async pegaTodosOsAutores(req, res, next) {
    try {
      const todosOsAutores = autorModel.find();

      req.resultado = todosOsAutores;

      next();
    } catch (error) {
      next(error);
    }
  }

  static async cadastraAutor(req, res, next) {
    try {
      const novoAutor = await autorModel.create(req.body);
      return res
        .status(201)
        .json({ message: "criado com sucesso", autor: novoAutor });
    } catch (error) {
      next(error);
    }
  }

  static async pegaUmAutor(req, res, next) {
    const { id } = req.params;
    const Autor = await autorModel.findById(id);

    try {
      if (Autor !== null) {
        res.status(200).json(Autor);
      } else {
        next(new Erro404("Id do Autor não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async atualizaAutor(req, res, next) {
    const { id } = req.params;
    const novosDados = req.body;
    try {
      const AutorAtualizado = await autorModel.findByIdAndUpdate(
        id,
        novosDados
      );
      if (AutorAtualizado !== null) {
        return res
          .status(200)
          .json({ message: "Autor atualizado", autor: AutorAtualizado });
      } else {
        next(new Erro404("Id do Autor não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async deletaAutor(req, res, next) {
    const { id } = req.params;
    try {
      const autorEncontrado = await autorModel.findByIdAndDelete(id);
      if (autorEncontrado !== null) {
        return res.status(200).json({ message: "Autor deletado" });
      } else {
        next(new Erro404("Id do Autor não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }
}

export default AutoresController;
