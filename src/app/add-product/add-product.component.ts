import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  constructor() { }

  ngOnInit(): void {
  }

  addProduct() {
    this.product.likes = 0;
    console.log(this.product)
  }

}
