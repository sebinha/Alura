import { NegociacaoController } from "./controllers/negociacaoController.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw new Error('Não foi possível inicializar a aplicação. Verifique se o form existe');
}

const botaoImporta = document.querySelector('#botao-importar');
if(botaoImporta){
    botaoImporta.addEventListener('click', () => {
        controller.importaDados();
    });
}