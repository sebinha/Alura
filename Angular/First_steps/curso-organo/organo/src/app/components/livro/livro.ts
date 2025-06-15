import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

export interface ILivro {
  titulo: string;
  autoria: string;
  imagem: string;
  favorito: boolean;
  genero: IGeneroLiterario;
}

export interface IGeneroLiterario {
  id: string;
  value: string;
  livros: ILivro[];
}
@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.html',
  styleUrl: './livro.scss',
})
export class Livro {
  livro = input.required<ILivro>();

  changeFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }
}
