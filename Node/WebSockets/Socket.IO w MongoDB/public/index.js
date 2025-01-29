import { inserirDocumento } from "./socket-front-ind.js";

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const input = document.getElementById("input-documento");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  inserirDocumento(input.value);
  console.log(input.value);
  input.value = "";
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
