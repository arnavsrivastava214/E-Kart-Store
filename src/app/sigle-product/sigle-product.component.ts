import { Component } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
@Component({
  selector: 'app-sigle-product',
  templateUrl: './sigle-product.component.html',
  styleUrls: ['./sigle-product.component.css']
})
export class SigleProductComponent {
  showLoader:any = true
  urlPath:any
  str:any
  fetchedDataDisplay:any
  constructor(private single:ProductListService){}
  ngOnInit(){
     this.urlPath = window.location.pathname;
    this.str = this.urlPath.split("/") 
   console.log(
     this.str[2])

     this.single.singleProductSData(this.str[2]).subscribe((data)=>{
this.fetchedDataDisplay = data;
this.showLoader = false

     })
   
    
  
  }

}
