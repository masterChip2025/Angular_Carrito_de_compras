import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarritoItems } from '../../models/carrito.items';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-carrito',
  styleUrl: './carrito.css',
  templateUrl: './carrito.html',
})
export class Carrito {
  @Input() items: CarritoItems[] = [];
  @Input() total: number = 0;

  @Output() idProduct: EventEmitter<number> = new EventEmitter();

  onDeleteProduct(id: number) {
    this.idProduct.emit(id);
  }
}
