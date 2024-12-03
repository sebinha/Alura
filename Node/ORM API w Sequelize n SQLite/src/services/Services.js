const dataSource = require('../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async listarTodosRegistros(where = {}) {
    return dataSource[this.model].findAll({ where: { ...where } });
  }

  async listarUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async listaEContaRegistros(options) {
    return dataSource[this.model].findAndCountAll({ ...options });
  }

  async listarUmRegistro(where) {
    return dataSource[this.model].findOne({ where: { ...where } });
  }

  async criarUmRegistro(dados) {
    return dataSource[this.model].create(dados);
  }

  async atualizaUmRegistro(novosDados, where, transaction = {}) {
    return dataSource[this.model].update(
      novosDados,
      { where: { ...where } },
      transaction
    );
  }

  async deletaUmRegistro(id) {
    return dataSource[this.model].destroy({ where: { id } });
  }

  async listaTodosDoScopeRegistradas(escopo) {
    return dataSource[this.model].scope(escopo).findAll();
  }
}

module.exports = Services;
