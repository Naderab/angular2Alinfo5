import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({ //metadata
  providedIn: 'root'
})
export class ProductService {
  productsList: Product[] = [
    {id:'1', name: "product1", price: 100,quantity:10,likes:0 },
    {id:'2', name: "product2", price: 200,quantity:20,likes:0  },
    {id:'3', name: "product3", price: 300,quantity:0,likes:0  }
  ];
  constructor() { }
  add(product: Product) {
    this.productsList.push(product);
  }
}
