import ErroBase from "./ErroBase.js";

class ErroCasting extends ErroBase {
  constructor(message = "Um ou mais dados estão incorretos", status = 400) {
    super(message, status);
  }

}

export default ErroCasting;
