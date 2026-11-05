import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartApp } from './components/cart-app/cart-app';

@Component({
  imports: [RouterOutlet, CartApp],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('03-car-app');
}
