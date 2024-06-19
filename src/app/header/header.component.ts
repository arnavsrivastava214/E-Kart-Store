import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoggedIn: any;
  cartLength: any = 0;
  pushToLocalStorageArr: any = [];
  inputobj: any = {
    name: '',
    email: '',
    password: ''
  };

  saveLocalData: any
  isLoggedIn1: any;
  inputobj1: any = {
    email: '',
    password: ''
  }

  constructor(private _router: Router, private data: ProductListService) { }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
    let cartDataLen: any = JSON.parse(<any>localStorage.getItem("cartData"));
    this.cartLength = cartDataLen.length;
    this.data.getData().subscribe(data => {
      if (data != null) {
        this.cartLength = data;
      }
    });
    console.log(this.cartLength);
  }

  getInputValue() {
    this.pushToLocalStorageArr.push(this.inputobj);
    localStorage.setItem("userdata", JSON.stringify(this.pushToLocalStorageArr))
    this.inputobj = JSON.parse(JSON.stringify({}));
    console.log(this.pushToLocalStorageArr.length)
  }


  getInputValue1() {
    this.saveLocalData = JSON.parse(<any>localStorage.getItem("userdata"));
    this.saveLocalData.forEach((element: any) => {
      console.log(element);

      if (element.email === this.inputobj1.email && element.password === this.inputobj1.password) {
        this._router.navigate(['']);
        alert("you are succesfully logged in ")
        this.isLoggedIn1 = true;
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        setTimeout(() => {
          location.reload();             //page refrsh code
        }, 0);
      } else {
        console.log("user not found")
      }
    });
  }

  clearLocalStoreClear() {
    localStorage.removeItem("isLoggedIn")
    this.isLoggedIn1 = false
    location.reload();
  }
}
