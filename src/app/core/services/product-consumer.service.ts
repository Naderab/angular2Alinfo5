import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductConsumerService {
  productUrl: string = environment.baseUrl + '/products';
  constructor(private _http: HttpClient) { }
  
  getProducts() {
    return this._http.get<Product[]>(this.productUrl);
  }
  getProductById(id: number) {
    return this._http.get<Product>(this.productUrl+'/'+id)
  }
  addProduct(product: Product) { 
    return this._http.post(this.productUrl,product)
  }
  updateProduct(product: Product) { 
    return this._http.put(this.productUrl+'/'+product.id,product)
  }
  deleteProduct(id: number) { 
    return this._http.delete(this.productUrl+'/'+id)
  }
}
