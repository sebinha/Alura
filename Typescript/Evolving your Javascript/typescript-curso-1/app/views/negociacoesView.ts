import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./View.js";

export default class NegociacoesView extends View<Negociacoes>{

    protected template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                ${ model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${negociacao.getData.toLocaleDateString()}</td>
                            <td>${negociacao._quantidade}</td>
                            <td>${negociacao._valor}</td>
                        </tr>
                    `
                }).join('')}
                </tbody>
            </table>
        `;
    }
}