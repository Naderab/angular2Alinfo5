import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/Product';
import { ProductService } from '../core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  constructor(private _productService:ProductService,private _router:Router) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.product.likes = 0;
    console.log(this.product)
    this._productService.add(this.product)
    this._router.navigate(['/products'])
  }

}
