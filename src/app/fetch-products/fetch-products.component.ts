import { Component } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-products',
  templateUrl: './fetch-products.component.html',
  styleUrls: ['./fetch-products.component.css']
})
export class FetchProductsComponent {
  cartLength:any = 0
  pushTOLocalStrageArr:any = []
  constructor(private data:ProductListService, private route : Router){}
  showLoader:boolean = true;
  displayProductData:any=[];
  isLoggedIn:any;

  fetchData(){
    this.data.productData().subscribe((e)=>{
      this.displayProductData = e;
      console.log(this.displayProductData);
      this.showLoader = false;
    })
  }
  ngOnInit(){
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
    this.pushTOLocalStrageArr = JSON.parse(<any>localStorage.getItem("cartData"));
    this.fetchData();

  }
  
  getCartValues(cartValue:any){
    this.pushTOLocalStrageArr.push(cartValue);
    this.cartLength = this.pushTOLocalStrageArr.length;
    localStorage.setItem("cartData",JSON.stringify(this.pushTOLocalStrageArr))
    this.sendMessage();
  }

  getApiData(id:any){
    this.route.navigate(['single-Product',id]);
  }

  sendMessage() {
    this.data.sendData(this.cartLength);
  }
}