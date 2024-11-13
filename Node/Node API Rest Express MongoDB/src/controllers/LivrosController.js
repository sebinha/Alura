import Livros from "../models/Livros.js";
import { autorModel } from "../models/index.js";
import Erro404 from "../err/Erro404.js";
import ErroCasting from "../err/ErroCasting.js";

class LivrosController {
  static async pegaTodosOsLivros(req, res, next) {
    try {
      const todosOsLivros = Livros.find({});
      
      req.resultado = todosOsLivros;

      next();

    } catch (error) {
      next(error);
    }
  }

  static async cadastraLivro(req, res, next) {
    const novoLivro = req.body;
    try {
      const livro = new Livros(novoLivro);
      const autorEncontrado = await autorModel.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await Livros.create(livroCompleto);
      return res
        .status(201)
        .json({ message: "criado com sucesso", livro: livroCriado });
    } catch (error) {
      next(error);
    }
  }

  static async pegaUmLivro(req, res, next) {
    const { id } = req.params;
    try {
      const livro = await Livros.findById(id);

      if (livro !== null) {
        res.status(200).json(livro);
      } else {
        next(new Erro404("Id do Livro não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async atualizaLivro(req, res, next) {
    const { id } = req.params;
    const novosDados = req.body;

    try {
      const livroAtualizado = await Livros.findByIdAndUpdate(id, novosDados);
      if (livroAtualizado !== null) {
        return res
          .status(200)
          .json({ message: "livro atualizado", livro: livroAtualizado });
      } else {
        next(new Erro404("Id do Livro não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async deletaLivro(req, res, next) {
    const { id } = req.params;
    try {
      const livroEncontrado = await Livros.findByIdAndDelete(id);

      if (livroEncontrado !== null) {
        return res.status(200).json({ message: "livro deletado" });
      } else {
        next(new Erro404("Id do Livro não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async listarLivrosPorFiltro(req, res, next) {
    const busca = await buscaLivros(req.query);
    if (busca !== null) {
      const livrosResultado = Livros.find(busca).populate("autor");

      req.resultado = livrosResultado;

      next();
    } else {
      res.status(200).send([]);
    }
  }
  catch(erro) {
    next(erro);
  }
}
async function buscaLivros(query) {
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = query;

  let busca = {};

  if (editora) busca.editora = editora;
  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };

  if (minPaginas || maxPaginas) busca.paginas = {};

  if (minPaginas) busca.paginas = { $gte: minPaginas };
  if (maxPaginas) busca.paginas = { $lte: maxPaginas };

  if (nomeAutor) {
    const buscaAutor = await autorModel.findOne({
      nome: { $regex: nomeAutor, $options: "i" },
    });

    if (buscaAutor !== null) {
      busca.autor = buscaAutor._id;
    } else {
      return null;
    }
  }

  return busca;
}

export default LivrosController;
