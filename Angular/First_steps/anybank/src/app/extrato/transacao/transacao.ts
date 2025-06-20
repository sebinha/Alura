import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { TransacaoClass } from '../../transacao';

@Component({
  selector: 'app-transacao',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './transacao.html',
  styleUrl: './transacao.scss',
})
export class Transacao {
  transacao = input.required<TransacaoClass>();
}
