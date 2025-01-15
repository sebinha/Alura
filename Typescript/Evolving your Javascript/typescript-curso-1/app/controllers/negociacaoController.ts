import { domInjector } from "../decorators/domInjector.js";
import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { ObterNegociacoesAPI } from "../services/negociacoesService.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagemView.js";
import NegociacoesView from "../views/negociacoesView.js";

export class NegociacaoController {
  @domInjector("#data")
  private inputData: HTMLInputElement;
  @domInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;
  @domInjector("#valor")
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");
  private negociacoesService = new ObterNegociacoesAPI();

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
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

  public importaDados(): void {
    this.negociacoesService
      .obterNegociacoes()
      .then((negociacoes) =>
        negociacoes.filter(
          (negociacao) =>
            !this.negociacoes
              .lista()
              .some((negociacaoExistente) =>
                negociacao.isIgual(negociacaoExistente)
              )
        )
      )
      .then((negociacoes: Negociacao[]) => {
        negociacoes.map((negociacao) => this.negociacoes.adiciona(negociacao));
        this.negociacoesView.update(this.negociacoes);
      });
  }

  private criaNegociacao(): Negociacao {
    return Negociacao.criaAdiciona(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
  }

  private limpaFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizaFormulario(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso!");
  }

  private isDiaUtil(data: Date) {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }
}
