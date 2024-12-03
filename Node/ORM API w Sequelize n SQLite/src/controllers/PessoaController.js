const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async listarMatriculas(req, res) {
    const { estudante_id } = req.params;

    try {
      const matriculas = await pessoaServices.listarMatriculasEstudante(
        Number(estudante_id)
      );
      return res.status(200).json(matriculas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
  

  async listarTodasMatriculas(req, res) {
    const { estudante_id } = req.params;

    try {
      const matriculas = await pessoaServices.listarTodasMatriculasEstudante(
        Number(estudante_id)
      );
      return res.status(200).json(matriculas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async listarPessoasEscopo(req, res) {
    try {
      const pessoas = await pessoaServices.listarTodasPessoasEscopo();
      return res.status(200).json(pessoas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async desativarEstudante(req,res){
    const { estudante_id } = req.params;
    try {
      await pessoaServices.desativaEstudante(Number(estudante_id));
      return res.status(200).json({message: 'Estudante desativado com sucesso'});
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = PessoaController;
