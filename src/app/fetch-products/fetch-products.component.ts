import { Component } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-products',
  templateUrl: './fetch-products.component.html',
  styleUrls: ['./fetch-products.component.css']
})
export class FetchProductsComponent {
  cartLength: any = 0;
  pushTOLocalStrageArr: any = [];
  showLoader: boolean = true;
  displayProductData: any = [];
  isLoggedIn: any;
  exist: any = []

  constructor(private data: ProductListService, private route: Router) { }


  ngOnInit() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
    this.pushTOLocalStrageArr = JSON.parse(<any>localStorage.getItem("cartData")) || [];
    this.fetchData();
  }
  fetchData() {
    this.data.productData().subscribe((e) => {
      this.displayProductData = e;
      console.log(this.displayProductData);
      this.showLoader = false;
    })
  }



  getCartValues(cartValue: any) {
    if (this.pushTOLocalStrageArr.length == 0) {
      cartValue["quantity"] = 1;
      this.pushTOLocalStrageArr.push(cartValue);
    } else {

      let isExist = this.pushTOLocalStrageArr.some((e: any) => e.id == cartValue.id);
      if (!isExist) {
        cartValue["quantity"] = 1;
        this.pushTOLocalStrageArr.push(cartValue);
      } else {
       this.pushTOLocalStrageArr.forEach((element: any) => {
           if (cartValue.id == element.id) {
            element.quantity = JSON.parse(JSON.stringify(element.quantity + 1));
          }
        })
      }
    }
    this.sendMessage();
    this.cartLength = this.pushTOLocalStrageArr.length;
    localStorage.setItem("cartData", JSON.stringify(this.pushTOLocalStrageArr))

  }

  getApiData(id: any) {
    this.route.navigate(['single-Product', id]);
  }

  sendMessage() {
    this.data.sendData(this.cartLength);
  }
}