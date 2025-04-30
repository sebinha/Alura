import { emitCadastrarUsuario } from "./socket-front-cad.js";
const form = document.getElementById("form-cadastro");
const inputUsuario = document.getElementById("input-usuario");
const inputSenha = document.getElementById("input-senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const usuario = inputUsuario.value;
    const senha = inputSenha.value;
    emitCadastrarUsuario({ usuario, senha });
    inputUsuario.value = "";
    inputSenha.value = "";
});