import { Component } from '@angular/core';
import { BoasVindas } from './boas-vindas/boas-vindas';
import { Conta } from './conta/conta';

@Component({
  selector: 'app-banner',
  imports: [BoasVindas, Conta],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  data = new Date();
}
