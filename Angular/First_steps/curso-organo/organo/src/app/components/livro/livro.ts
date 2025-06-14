import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.scss',
})
export class Livro {
  changeFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }

  livro = {
    titulo: 'Clair Obscur: Expedition 33',
    autoria: 'Sandfall Interactive',
    imagem:
      'https://static.wixstatic.com/media/52610a_f363958f0b5e4ea1b7e5f4c5ff87a317~mv2.png/v1/fill/w_548,h_358,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Journal.png',
    favorito: false,
  };
}
