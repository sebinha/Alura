var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/domInjector.js";
import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { ObterNegociacoesAPI } from "../services/negociacoesService.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagemView.js";
import NegociacoesView from "../views/negociacoesView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.negociacoesService = new ObterNegociacoesAPI();
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.isDiaUtil(negociacao.getData)) {
            this.mensagemView.update("Negociações apenas em dias úteis");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.atualizaFormulario();
        this.limpaFormulario();
    }
    importaDados() {
        this.negociacoesService
            .obterNegociacoes()
            .then((negociacoes) => negociacoes.filter((negociacao) => !this.negociacoes
            .lista()
            .some((negociacaoExistente) => negociacao.isIgual(negociacaoExistente))))
            .then((negociacoes) => {
            negociacoes.map((negociacao) => this.negociacoes.adiciona(negociacao));
            this.negociacoesView.update(this.negociacoes);
        });
    }
    criaNegociacao() {
        return Negociacao.criaAdiciona(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
    }
    limpaFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    atualizaFormulario() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
    isDiaUtil(data) {
        return (data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO);
    }
}
__decorate([
    domInjector("#data")
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector("#quantidade")
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector("#valor")
], NegociacaoController.prototype, "inputValor", void 0);
