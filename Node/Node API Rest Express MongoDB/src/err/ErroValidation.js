import ErroCasting from "./ErroCasting.js";

class ErroValidition extends ErroCasting {
  constructor(error) {
    const erros = Object.values(error.errors)
      .map((erro) => erro.message)
      .join("; ");

    super(`Os seguintes erros foram encontrados: ${erros}`);
  }
}

export default ErroValidition;
