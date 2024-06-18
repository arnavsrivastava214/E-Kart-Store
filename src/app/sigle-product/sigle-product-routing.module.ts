import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigleProductComponent } from './sigle-product.component';

const routes: Routes = [
  {
    path:"",
    component:SigleProductComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigleProductRoutingModule { }
