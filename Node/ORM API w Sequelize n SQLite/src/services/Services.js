const dataSource = require('../models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async listarTodosRegistros () {
    return dataSource[this.model].findAll();
  }

  async listarUmRegistroPorId(id){
    return dataSource[this.model].findByPk(id);
  }

  async criarUmRegistro(dados){
    return dataSource[this.model].create(dados);
  }

  async atualizaUmRegistro(id, novosDados){
    return dataSource[this.model].update(novosDados, {where: {id}});
  }

  async deletaUmRegistro(id){
    return dataSource[this.model].destroy({where: {id}});
  }
}

module.exports = Services;