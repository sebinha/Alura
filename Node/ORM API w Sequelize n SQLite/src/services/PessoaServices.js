const MatriculaServices = require('./MatriculaServices.js');
const Services = require('./Services.js');
const dataSource = require('../database/models');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
    this.matriculaServices = new MatriculaServices();
  }

  async listarMatriculasEstudante(id) {
    const estudante = await super.listarUmRegistroPorId(id);
    const listarMatriculas = await estudante.getAulasMatriculadas();
    return listarMatriculas;
  }

  async listarTodasMatriculasEstudante(id) {
    const estudante = await super.listarUmRegistroPorId(id);
    const listarMatriculas = await estudante.getTodasAulasMatriculadas();
    return listarMatriculas;
  }

  async listarTodasPessoasEscopo() {
    const escopoPessoas = await super.listaTodosDoScopeRegistradas('');
    return escopoPessoas;
  }

  async desativaEstudante(estudante_id) {
    return dataSource.sequelize.transaction(async (transaction) => {
      await this.matriculaServices.atualizaUmRegistro(
        { status: 'cancelado' },
        { estudante_id },
        transaction
      );
      await super.atualizaUmRegistro(
        { ativo: false },
        { id: estudante_id },
        transaction
      );
    });
  }
}

module.exports = PessoaServices;
