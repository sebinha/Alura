export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`Seletor ${seletor} não existe no DOM. Verifique se o seletor está correto.`);
        }
    }
    template(model) {
        throw new Error('O método template precisa ser implementado');
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
