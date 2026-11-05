import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarritoItems } from '../../models/carrito.items';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  @Input() items: CarritoItems[] = [];
  @Output() openEvent = new EventEmitter();

  showCart: boolean = false;
  changeShowCart(): void {
    this.openEvent.emit();
  }
}
