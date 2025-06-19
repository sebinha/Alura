import { Component, computed, signal } from '@angular/core';
import { Banner } from './banner/banner';
import { FormNovaTransacao } from './form-nova-transacao/form-nova-transacao';
import { TipoTransacao, Transacao } from './transacao';

@Component({
  selector: 'app-root',
  imports: [Banner, FormNovaTransacao],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acumulador, transacao) => {
      switch (transacao.tipo) {
        case TipoTransacao.DEPOSITO:
          return acumulador + transacao.valor;
        case TipoTransacao.SAQUE:
          return acumulador - transacao.valor;
        default:
          throw new Error('Transação inválida');
      }
    }, 0);
  });
  processarTransacao(event: Transacao) {
    if (event.tipo === TipoTransacao.SAQUE && event.valor > this.saldo()) {
      return alert('Saldo insuficiente');
    }
    this.transacoes.update((transacaoAnterior) => [
      ...transacaoAnterior,
      event,
    ]);
  }
}
