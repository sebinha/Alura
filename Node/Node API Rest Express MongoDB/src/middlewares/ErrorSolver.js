import mongoose from "mongoose";
import ErroBase from "../err/ErroBase.js";
import ErroCasting from "../err/ErroCasting.js";
import ErroValidition from "../err/ErroValidation.js";
import Erro404 from "../err/Erro404.js";

function ErrorSolver(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    new ErroCasting().enviarResposta(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ErroValidition(error).enviarResposta(res, error);
  } else if (error instanceof ErroBase){
    error.enviarResposta(res);
  }
  else {
    new ErroBase().enviarResposta(res);
  }
}

export default ErrorSolver;
