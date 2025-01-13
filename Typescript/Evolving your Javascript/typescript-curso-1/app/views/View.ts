export abstract class View<T>{
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);

        if(elemento){
        this.elemento = elemento as HTMLElement;
    }
        else{
            throw new Error(`Seletor ${seletor} não existe no DOM. Verifique se o seletor está correto.`)
        }
    }


    protected template(model: T): string {
        throw new Error('O método template precisa ser implementado');
    }

    public update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }


}