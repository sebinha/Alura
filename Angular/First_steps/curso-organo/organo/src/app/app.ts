import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ListaLivros } from './components/lista-livros/lista-livros';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ListaLivros],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'organo';
}
