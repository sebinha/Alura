import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import NegociacoesView from "../views/negociacoesView.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes)
    }
    
    public adiciona(): void {
        const negociacao = this.criaNegociacao()
        if (!this.isDiaUtil(negociacao.getData)) {
            this.mensagemView.update('Negociações apenas em dias úteis');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaFormulario()
        this.limpaFormulario()
    }

    private criaNegociacao(): Negociacao {
        return Negociacao.criaAdiciona(this.inputData.value, this.inputQuantidade.value, this.inputValor.value)
    }

    private limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaFormulario(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }

    private isDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }
}