import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {

    constructor(
        private _data: Date, 
        public readonly _quantidade: number, 
        public readonly _valor: number){}

    get getData(){
        const data = new Date(this._data.getTime());
        return data
    }

    get getVolume() {
        return this._quantidade * this._valor;
    }

    public static criaAdiciona(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, '\/'));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public paraTexto(): string {
        return `
            Data: ${this.getData},
            Quantidade: ${this._quantidade},
            Valor: ${this._valor}
        `;
    }

    public isIgual(negociacao: Negociacao): boolean {
        return this.getData.getDate() === negociacao.getData.getDate()
            && this.getData.getMonth() === negociacao.getData.getMonth()
            && this.getData.getFullYear() === negociacao.getData.getFullYear();
    }
}