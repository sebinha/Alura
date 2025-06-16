import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-boas-vindas',
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './boas-vindas.html',
  styleUrl: './boas-vindas.scss',
})
export class BoasVindas {
  data = new Date();
}
