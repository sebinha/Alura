export class Negociacao {

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
}