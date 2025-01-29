import { usuariosColecao } from "./dbconnect.js";
import salEHash from "./utils/salEHashPassword.js";

function cadastrarUsuario({ usuario, senha }) {
  const { sal, hashDoSal } = salEHash(senha);
  return usuariosColecao.insertOne({ usuario, sal, hashDoSal });
}

function encontrarUsuario(usuario) {
  return usuariosColecao.findOne({ usuario });
}

export { cadastrarUsuario, encontrarUsuario };
