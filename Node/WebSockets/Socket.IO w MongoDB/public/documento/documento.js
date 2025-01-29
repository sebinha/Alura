import { emitExcluirDocumento, emitTexto, emitTitulo } from "./socket-front-doc.js";

const url = new URLSearchParams(window.location.search);
const nomeDocumento = url.get("nome");

const texto = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");
const botaoExcluir = document.getElementById("excluir-documento");
const documento = document.getElementById("documento");

tituloDocumento.textContent = nomeDocumento || "Novo Documento";
documento.textContent = nomeDocumento || "Novo Documento";
botaoExcluir.addEventListener("click", () => excluirDocumento(nomeDocumento));

texto.addEventListener("keyup", () => {
  emitTexto({ texto: texto.value, titulo: nomeDocumento });
});

emitTitulo(nomeDocumento);

function atualizaTexto(texto) {
  document.getElementById("editor-texto").value = texto;
}

function excluirDocumento(nomeDocumento) {
  emitExcluirDocumento(nomeDocumento)
}

function alertarERedirecionar(titulo, url) {
  if (titulo === nomeDocumento){
    alert(`O documento ${titulo} foi excluido`);
    window.location.href = url;
  }
}


export { atualizaTexto, excluirDocumento, alertarERedirecionar };
