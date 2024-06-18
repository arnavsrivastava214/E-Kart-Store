import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchProductsComponent } from './fetch-products.component';

const routes: Routes = [
  {
  path: '',
  component: FetchProductsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FetchProductsRoutingModule { }
