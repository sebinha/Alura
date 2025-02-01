import { inserirDocumento } from "./socket-front-ind.js";
import { removerCookie } from "./utils/cookies.js";

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const input = document.getElementById("input-documento");
const botaoLogout = document.getElementById("botao-logout");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  inserirDocumento(input.value);
  input.value = "";
});

botaoLogout.addEventListener("click", () => {
  removerCookie("jwt");
  alert("Deslogado com sucesso!");
  window.location.href = "/login/index.html";
});

function inserirLinkDocumento(titulo) {
  listaDocumentos.innerHTML += `<a 
  href="documento/index.html?nome=${titulo}" 
  class="list-group-item list-group-item-action"
  id="documento-${titulo}" >
  ${titulo}
  </a>`;
}

function excluirLinkDocumento(titulo) {
  const link = document.getElementById(`documento-${titulo}`);
  link.remove();
}



export { inserirLinkDocumento, excluirLinkDocumento };
