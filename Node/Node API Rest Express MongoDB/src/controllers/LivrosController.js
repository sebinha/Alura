import Livros from "../models/Livros.js";
import { autorModel } from "../models/Autores.js";

class LivrosController {
  static async pegaTodosOsLivros(req, res) {
    try {
      const todosOsLivros = await Livros.find({});
      return res.status(200).json(todosOsLivros);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async cadastraLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autorModel.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
      const livroCriado = await Livros.create(livroCompleto);
      return res
        .status(201)
        .json({ message: "criado com sucesso", livro: livroCriado });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async pegaUmLivro(req, res) {
    const { id } = req.params;
    try {
      const livro = await Livros.findById(id);
      return res.status(200).json(livro);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async atualizaLivro(req, res) {
    const { id } = req.params;
    const novosDados = req.body;
    try {
      const livroAtualizado = await Livros.findByIdAndUpdate(id, novosDados);
      return res
        .status(200)
        .json({ message: "livro atualizado", livro: livroAtualizado });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deletaLivro(req, res) {
    const { id } = req.params;
    try {
      await Livros.findByIdAndDelete(id);
      return res.status(200).json({ message: "livro deletado" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const { editora } = req.query;
    try {
      const livrosPorEditora = await Livros.find({ editora: editora });
      return res.status(200).json(livrosPorEditora);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

}

export default LivrosController;
