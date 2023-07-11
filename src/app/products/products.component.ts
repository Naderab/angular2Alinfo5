import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title: string = "hello from products component";
  person = { name: "John", age: 30 };
  products : any = [];

  buy(product:any) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }
  like(product:any) {
    product.likes++;
  }
  constructor() { 
    //code
  }

  ngOnInit(): void {
    this.products = [
    { name: "product1", price: 100,quantity:10,likes:0 },
    { name: "product2", price: 200,quantity:20,likes:0  },
    { name: "product3", price: 300,quantity:0,likes:0  }
  ];
  }

}
