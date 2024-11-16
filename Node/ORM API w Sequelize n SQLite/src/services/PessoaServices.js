const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }

  async listarMatriculasEstudante(id){
    const estudante  = await super.listarUmRegistroPorId(id);
    const listarMatriculas = await estudante.getAulasMatriculadas();
    return listarMatriculas;
  }

}

module.exports = PessoaServices;