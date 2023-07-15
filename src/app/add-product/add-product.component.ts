import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/Product';
import { ProductService } from '../core/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductConsumerService } from '../core/services/product-consumer.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  id!: number;
  messageButton : string = 'Ajouter'
  constructor(private _productService:ProductService,private _router:Router,private _consumer:ProductConsumerService,private _activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activated.snapshot.params['id'];
    if (this.id != null) {
      this.messageButton = 'Update'
      this._consumer.getProductById(this.id).subscribe((data)=>this.product = data)
    }
  }

  

  addProduct() {
    this.product.likes = 0;
    console.log(this.product)
    //this._productService.add(this.product)
    //this._router.navigate(['/products'])
    if (this.id != null) {
      this._consumer.updateProduct(this.product).subscribe({
        next: () => this._router.navigate(['/products']),
        error: (error) => console.log(error),
        complete: () => console.log('complete')
      })
    } else {
      this._consumer.addProduct(this.product).subscribe({
        next: () => this._router.navigate(['/products']),
        error: (error) => console.log(error),
        complete: () => console.log('complete')
      })
    }
  }

}
