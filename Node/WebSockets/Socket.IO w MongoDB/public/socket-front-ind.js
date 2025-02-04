import { lerCookie } from "./utils/cookies.js";

import { excluirLinkDocumento, inserirLinkDocumento } from "./index.js";

const socket = io("/usuarios", {
  auth: {
    token: lerCookie("jwt"), // Ler o token do cookie
  },
});

socket.on("connect_error", (err) => {
  alert(err);
  window.location.href = "/login/index.html";
});

socket.on("documento_excluido", (titulo) => {
  excluirLinkDocumento(titulo);
});

function inserirDocumento(titulo) {
  socket.emit("inserir_documento", titulo);
}

socket.on("documento_inserido", (titulo) => {
  inserirLinkDocumento(titulo);
});

socket.emit("obter_documentos", (documentos) => {
  documentos.forEach((documento) => {
    inserirLinkDocumento(documento.titulo);
  });
});

socket.on("documento_existente", (titulo) => {
  alert(`O documento ${titulo} já existe!`);
});

export { inserirDocumento };
