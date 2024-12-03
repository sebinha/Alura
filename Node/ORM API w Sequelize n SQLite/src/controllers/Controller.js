class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async listarTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.listarTodosRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async listarUmPorId(req, res) {
    try {
      const { id } = req.params;
      const registro = await this.entidadeService.listarUmRegistroPorId(id);
      return res.status(200).json(registro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
  async listarUm(req, res) {
    let { ...params } = req.params;

    params.id = Number(params.id);

    try {
      const registro = await this.entidadeService.listarUmRegistro(params);
      return res.status(200).json(registro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
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
      return res.status(500).json({ erro: erro.message });
    }
  }

  async atualizaUm(req, res) {
    let { ...params } = req.params;
    const novosDados = req.body;
    params.id = Number(params.id);

    const where = params;
    try {
      const isUpdated = await this.entidadeService.atualizaUmRegistro(
        where,
        novosDados
      );
      if (isUpdated) {
        return res
          .status(200)
          .json({ message: `ID: ${where.id} atualizado com sucesso` });
      } else {
        return res.status(404).json({ message: 'Erro na atualização' });
      }
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async deletaUm(req, res) {
    const { id } = req.params;
    try {
      const isDeleted = await this.entidadeService.deletaUmRegistro(id);
      if (isDeleted) {
        return res
          .status(200)
          .json({ message: `ID: ${id} deletado com sucesso` });
      } else {
        return res.status(404).json({ message: 'Erro na exclusão' });
      }
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = Controller;
