import crypto from "crypto";

function autenticarUsuario(hash, sal, senha) {
  const hashDoSal = crypto
    .createHash("sha256")
    .update(sal + senha)
    .digest("hex");
  return hashDoSal === hash;
}

export default autenticarUsuario;
