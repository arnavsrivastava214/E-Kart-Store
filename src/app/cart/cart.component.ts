import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  pushTOLocalStrageArr: any = []
  totalCount: any = 0;
  dataDisplay: any;

  constructor(private service:ProductListService){

  }

  ngOnInit() {
    this.dataDisplay = JSON.parse(<any>localStorage.getItem("cartData"))
    this.subTotal();
  }

  subTotal() {
    this.totalCount=0;
    this.dataDisplay.forEach((element: any) => {
      this.totalCount += Math.floor(element.price);
    })

  }
  delete(idx: any) {
    this.dataDisplay.splice(idx, 1);
    this.subTotal();
    localStorage.setItem("cartData", JSON.stringify(this.dataDisplay));
    this.sendMessage(this.dataDisplay.length);
  }

  sendMessage(cartLen:any) {
    this.service.sendData(cartLen);
  }

}
