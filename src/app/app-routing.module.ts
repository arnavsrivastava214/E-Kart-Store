import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren:()=>import("./fetch-products/fetch-products.module").then(m=>m.FetchProductsModule)
  },
  {
    path:"cart",
    loadChildren:()=>import("./cart/cart.module").then(m=>m.CartModule)
  },{
    path:"single-Product/:id",
    loadChildren:()=>import("./sigle-product/sigle-product.module").then(m=>m.SigleProductModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
