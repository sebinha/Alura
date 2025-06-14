import { Component } from '@angular/core';
import { Banner } from './banner/banner';

@Component({
  selector: 'app-root',
  imports: [Banner],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'anybank';
}
