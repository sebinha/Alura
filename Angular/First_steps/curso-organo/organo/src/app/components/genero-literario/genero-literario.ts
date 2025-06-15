import { Component, input } from '@angular/core';
import { IGeneroLiterario, Livro } from '../livro/livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports: [Livro, CommonModule],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.scss',
})
export class GeneroLiterario {
  genero = input.required<IGeneroLiterario>();
}
