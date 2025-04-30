import { lerCookie } from "../utils/cookies.js";

import { alertarERedirecionar, atualizaTexto, enviarUsuarioAutenticado, usuariosNoDocumento } from "./documento.js";

const socket = io("/usuarios", {
  auth: {
    token: lerCookie("jwt"), // Ler o token do cookie
  },
});


socket.on("usuario_autenticado", enviarUsuarioAutenticado);
socket.on("usuarios_documento", usuariosNoDocumento)

socket.on("connect_error", (err) => {
  alert(err);
  window.location.href = "/login/index.html";
});

function emitTexto(dados) {
  socket.emit("atualiza-texto", dados);
}

function emitTitulo(dados) {
  socket.emit("pega-titulo", dados);
}

socket.on("atualiza-texto", (texto) => {
  atualizaTexto(texto);
});

function emitExcluirDocumento(titulo) {
  socket.emit("excluir_documento", titulo);
}

socket.on("documento_excluido", (titulo) => {
  alertarERedirecionar(titulo, "/");
});

export { emitTexto, emitTitulo, emitExcluirDocumento };
