import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.sevice';
import { Product } from '../../models/product';
import { Catalogo } from '../catalogo/catalogo';
import { Carrito } from '../carrito/carrito';
import { CarritoItems } from '../../models/carrito.items';
import { Navbar } from '../navbar/navbar';

@Component({
  imports: [Catalogo, Carrito, Navbar],
  selector: 'cart-app',
  styleUrl: './cart-app.css',
  templateUrl: './cart-app.html',
})
export class CartApp implements OnInit {
  totalCart: number = 0;
  products: Product[] = [];

  items: CarritoItems[] = [];
  showCart: boolean = false;

  constructor(private services: ProductService) {}

  ngOnInit(): void {
    this.products = this.services.findAll();
    this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];
    this.calculateTotal();
  }

  onAddCart(product: Product) {
    // console.log(product);
    const hashItem = this.items.find((e) => e.product.id === product.id);
    if (hashItem) {
      this.items = this.items.map((item) => {
        if (item.product.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    } else {
      this.items = [...this.items, { product: { ...product }, quantity: 1 }];
    }
    this.calculateTotal();
    this.saveSesionItems();
  }

  deleteCart(id: number): void {
    this.items = this.items.filter((item) => item.product.id !== id);
    this.calculateTotal();
    this.saveSesionItems();
  }

  calculateTotal(): void {
    this.totalCart = this.items.reduce(
      (accumulator, item) => accumulator + item.quantity * item.product.price,
      0,
    );
  }

  saveSesionItems(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

  changeShowCart(): void {
    this.showCart = !this.showCart;
  }
}
