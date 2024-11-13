class ErroBase {
  constructor(message = "Erro interno de servidor", status = 500) {
    this.message = message;
    this.status = status;
  }

  enviarResposta(res) {
    return res.status(this.status).json({ message: this.message, status: this.status });
  }
}

export default ErroBase