import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Livro } from './components/livro/livro';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Livro],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'organo';
}
