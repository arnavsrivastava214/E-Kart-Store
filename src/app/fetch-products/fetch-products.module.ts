import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchProductsRoutingModule } from './fetch-products-routing.module';
import { HttpClientModule  } from '@angular/common/http';
import { FetchProductsComponent } from './fetch-products.component';


@NgModule({
  declarations: [FetchProductsComponent],
  imports: [
    CommonModule,
    FetchProductsRoutingModule,
    HttpClientModule,
    
  ],
  exports:[
    FetchProductsComponent
  ]
})
export class FetchProductsModule { }
