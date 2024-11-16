class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async listarTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.listarTodosRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      // erro
    }
  }

  async listarUmPorId(req, res) {
    try {
      const { id } = req.params;
      const registro = await this.entidadeService.listarUmRegistroPorId(id);
      return res.status(200).json(registro);
    } catch (erro) {
      // erro
    }
  }

  async criaUm(req, res) {
    const dadosPessoa = req.body;
    try {
      const novoRegistro = await this.entidadeService.criarUmRegistro(
        dadosPessoa
      );
      return res.status(201).json(novoRegistro);
    } catch (erro) {
      // erro
    }
  }

  async atualizaUm(req, res) {
    const { id } = req.params;
    const novosDados = req.body;
    try {
      const isUpdated = await this.entidadeService.atualizaUmRegistro(
        id,
        novosDados
      );
      if (isUpdated) {
        return res.status(200).json({ message: `ID: ${id} atualizado com sucesso` });
      } else {
        return res.status(404).json({ message: 'Erro na atualização' });
      }
    } catch (erro) {
      // erro
    }
  }

  async deletaUm(req, res) {
    const { id } = req.params;
    try {
      const isDeleted = await this.entidadeService.deletaUmRegistro(id);
      if (isDeleted) {
        return res.status(200).json({ message: `ID: ${id} deletado com sucesso` });
      } else {
        return res.status(404).json({ message: 'Erro na exclusão' });
      }
    } catch (erro) {
      // erro
    }
  }
}

module.exports = Controller;
