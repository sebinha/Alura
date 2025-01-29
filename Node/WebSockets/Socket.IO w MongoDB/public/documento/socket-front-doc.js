import { alertarERedirecionar, atualizaTexto } from "./documento.js";

const socket = io();

function emitTexto(dados){
    socket.emit("atualiza-texto", dados);
}

function emitTitulo(titulo){
    socket.emit("pega-titulo", titulo);
}


socket.on("atualiza-texto", (texto) => {
    atualizaTexto(texto);
});

function emitExcluirDocumento(titulo){
    socket.emit("excluir_documento", titulo);
}

socket.on("documento_excluido", (titulo) => {
    alertarERedirecionar(titulo, "/");
});

export { emitTexto, emitTitulo, emitExcluirDocumento };