import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import NegociacoesView from "../views/negociacoesView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.isDiaUtil(negociacao.getData)) {
            this.mensagemView.update('Negociações apenas em dias úteis');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaFormulario();
        this.limpaFormulario();
    }
    criaNegociacao() {
        return Negociacao.criaAdiciona(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaFormulario() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
    isDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}
