import { DadosAPI } from "../interfaces/dadosAPI.js";
import { Negociacao } from "../models/negociacao.js";

export class ObterNegociacoesAPI {
    constructor() {}

    public async obterNegociacoes(): Promise<Negociacao[]> {
        return fetch("https://potential-guacamole-4wx7gjr9675c557-8080.app.github.dev/dados")
        .then(res => res.json())
        .then((dados: DadosAPI[]) => {
            return dados.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        })
    }
}