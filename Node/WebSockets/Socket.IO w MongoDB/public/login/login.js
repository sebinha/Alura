import { emitAutenticarUsuario } from "./socket-front-log.js";
const form = document.getElementById("form-login");
const inputUsuario = document.getElementById("input-usuario");
const inputSenha = document.getElementById("input-senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const usuario = inputUsuario.value;
    const senha = inputSenha.value;
    emitAutenticarUsuario({ usuario, senha });
    inputUsuario.value = "";
    inputSenha.value = "";
});