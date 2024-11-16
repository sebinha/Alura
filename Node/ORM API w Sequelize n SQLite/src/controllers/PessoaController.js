const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async listarMatriculas(req, res) {    
    const { estudanteId } = req.params;

    try {
      const matriculas = await pessoaServices.listarMatriculasEstudante(Number(estudanteId));
      return res.status(200).json(matriculas);
    } catch (erro) {
      // erro
    }
  }
}

module.exports = PessoaController;