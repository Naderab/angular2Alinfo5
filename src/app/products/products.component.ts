import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/Product';
import { ProductService } from '../core/services/product.service';
import { ProductConsumerService } from '../core/services/product-consumer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title: string = "hello from products component";
  person = { name: "John", age: 30 };
  products : Product[] = [];

  buy(product:Product) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }
  like(product:Product) {
    product.likes++;
  }
  constructor(private _productService:ProductService,private _consumer:ProductConsumerService) { 
    //code
  }

  ngOnInit(): void {
    //this.products = this._productService.productsList;
    this._consumer.getProducts().subscribe((data) => this.products = data)
    
    
  }

}
