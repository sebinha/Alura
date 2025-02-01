import {
  emitExcluirDocumento,
  emitTexto,
  emitTitulo,
} from "./socket-front-doc.js";

const url = new URLSearchParams(window.location.search);
const nomeDocumento = url.get("nome");

const texto = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");
const botaoExcluir = document.getElementById("excluir-documento");
const documento = document.getElementById("documento");
const usuariosConectados = document.getElementById("usuarios-conectados");

tituloDocumento.textContent = nomeDocumento || "Novo Documento";
documento.textContent = nomeDocumento || "Novo Documento";
botaoExcluir.addEventListener("click", () => excluirDocumento(nomeDocumento));

function enviarUsuarioAutenticado(usuario) {
  emitTitulo({
    titulo: nomeDocumento,
    usuario,
  });
}

texto.addEventListener("keyup", () => {
  emitTexto({ texto: texto.value, titulo: nomeDocumento });
});

function usuariosNoDocumento(usuarios) {
  usuariosConectados.innerHTML = "";

  usuarios.forEach((usuario) => {
    usuariosConectados.innerHTML += `<li class="list-group-item">${usuario}</li>`;
  })
}

function atualizaTexto(texto) {
  document.getElementById("editor-texto").value = texto;
}

function excluirDocumento(nomeDocumento) {
  emitExcluirDocumento(nomeDocumento);
}

function alertarERedirecionar(titulo, url) {
  if (titulo === nomeDocumento) {
    alert(`O documento ${titulo} foi excluido`);
    window.location.href = url;
  }
}

export { atualizaTexto, excluirDocumento, alertarERedirecionar, enviarUsuarioAutenticado, usuariosNoDocumento };
