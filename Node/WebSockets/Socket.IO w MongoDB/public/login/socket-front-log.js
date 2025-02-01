import { armazenarCookie, lerCookie } from "../utils/cookies.js";

const socket = io();

socket.on("connect_error", (err) => {
  alert(err);
  window.location.href = "/login/index.html";
});

function emitAutenticarUsuario(dados) {
  socket.emit("autenticar_usuario", dados);
}

socket.on("autenticado", (jwt) => {
  armazenarCookie('jwt', jwt);
  alert("Usuário autenticado com sucesso!");
  window.location.href = "/";
});

socket.on("nao_autenticado", () => {
  alert("Erro ao autenticar usuário!");
});

socket.on("usuario_nao_encontrado", () => {
  alert("Usuário não encontrado!");
});

export { emitAutenticarUsuario };