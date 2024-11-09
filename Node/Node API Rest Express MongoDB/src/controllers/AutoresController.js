import { autorModel } from "../models/Autores.js";

class AutoresController {
  static async pegaTodosOsAutores(req, res) {
    try {
      const todosOsAutores = await autorModel.find({});
      return res.status(200).json(todosOsAutores);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async cadastraAutor(req, res) {
    try {
      const novoAutor = await autorModel.create(req.body);
      return res
        .status(201)
        .json({ message: "criado com sucesso", Autor: novoAutor });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async pegaUmAutor(req, res) {
    const { id } = req.params;
    
    try {
      const Autor = await autorModel.findById(id);
      return res.status(200).json(Autor);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async atualizaAutor(req, res) {
    const { id } = req.params;
    const novosDados = req.body;
    try {
      const AutorAtualizado = await autorModel.findByIdAndUpdate(
        id,
        novosDados
      );
      return res
        .status(200)
        .json({ message: "Autor atualizado", Autor: AutorAtualizado });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deletaAutor(req, res) {
    const { id } = req.params;
    try {
      await autorModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "Autor deletado" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default AutoresController;
