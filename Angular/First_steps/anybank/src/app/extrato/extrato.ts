import { Component, input } from '@angular/core';
import { TransacaoClass } from '../transacao';
import { Transacao } from './transacao/transacao';

@Component({
  selector: 'app-extrato',
  imports: [Transacao],
  templateUrl: './extrato.html',
  styleUrl: './extrato.scss',
})
export class Extrato {
  transacoes = input.required<TransacaoClass[]>();
}
