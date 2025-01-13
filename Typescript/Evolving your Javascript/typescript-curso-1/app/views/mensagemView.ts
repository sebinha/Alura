import { View } from "./View.js";

export class MensagemView extends View<string>{

    protected template(model: string){
        return `
            <p class="alert alert-info" role="alert">${model}</p>
        `
    }

}
