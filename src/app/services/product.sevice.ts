import { Injectable, Service } from '@angular/core';
import { Product } from '../models/product';
import { DataProduct } from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productos: Product[] = DataProduct;
  constructor() {}

  findAll(): Product[] {
    return this.productos;
  }
}
