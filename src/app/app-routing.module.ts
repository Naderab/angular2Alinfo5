import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path:'',redirectTo:'products',pathMatch:'full'},
  { path: 'addProduct', component: AddProductComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  {path:'update/:id',component:AddProductComponent},
  {path:'tdf',component:TemplateDrivenFormComponent},
  { path: '**', component: NotFoundComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
