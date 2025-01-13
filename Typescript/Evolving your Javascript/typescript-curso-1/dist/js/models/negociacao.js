export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get getData() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get getVolume() {
        return this._quantidade * this._valor;
    }
    static criaAdiciona(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, '\/'));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
