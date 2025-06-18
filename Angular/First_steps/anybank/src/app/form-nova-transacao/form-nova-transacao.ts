import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.scss',
})
export class FormNovaTransacao {
  valorTransacao = '';
  tipoTransacao = '';

  onSubmit() {
    console.log('Transação enviada:', {
      valor: this.valorTransacao,
      tipo: this.tipoTransacao,
    });
    this.valorTransacao = '';
    this.tipoTransacao = '';
  }
}
