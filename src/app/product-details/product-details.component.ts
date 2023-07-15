import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductConsumerService } from '../core/services/product-consumer.service';
import { Product } from '../core/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _router:Router,private _activatedRoute:ActivatedRoute,private _consumer:ProductConsumerService) { }
  id!: number ;
  product : Product = new Product();
  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id']
    this._consumer.getProductById(this.id).subscribe((data)=>this.product = data)
  }

  delete() {
    this._consumer.deleteProduct(this.id).subscribe(()=>this._router.navigate(['/products']))
  }

}
