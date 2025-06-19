import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../transacao';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.scss',
})
export class FormNovaTransacao {
  transacaoCriada = output<Transacao>();

  valorTransacao = '';
  tipoTransacao = '';

  tipoTransacaoEnum = TipoTransacao;

  onSubmit() {
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
    );

    this.transacaoCriada.emit(transacao);

    this.valorTransacao = '';
    this.tipoTransacao = '';
  }
}
