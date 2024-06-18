import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor( private http:HttpClient) { }
  productData(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  singleProductSData(id:any){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }

}
