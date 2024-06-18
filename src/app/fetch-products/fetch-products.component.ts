import { Component } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-products',
  templateUrl: './fetch-products.component.html',
  styleUrls: ['./fetch-products.component.css']
})
export class FetchProductsComponent {
  arraylength:any = 0
  pushTOLocalStrageArr:any = []
  constructor(private data:ProductListService, private route : Router){}
  showLoader:boolean = true;
  displayProductData:any=[];
  isLoggedIn:any;

  ngOnInit(){
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
    this.fetchData();
  }
  fetchData(){
    this.data.productData().subscribe((e)=>{
     this.displayProductData =e;
     console.log(this.displayProductData);
     this.showLoader = false;
    })
  }

  getCartValues(cartValue:any){
    this.pushTOLocalStrageArr.push(cartValue)
      this.arraylength =  this.pushTOLocalStrageArr.length

    
    localStorage.setItem("cartData",JSON.stringify(this.pushTOLocalStrageArr))

    
  }
  getApiData(id:any){
    // this.data.singleProductSData(id).subscribe((fetchData)=>{
    //   this.route.navigate(['single-Product']);

    // })

    this.route.navigate(['single-Product',id]);



  }

}
