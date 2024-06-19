import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  cartLeng: any = 0;
  private dataSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }
  productData() {
    return this.http.get('https://fakestoreapi.com/products')
  }
  singleProductSData(id: any) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }



  sendData(data: any) {
    this.dataSubject.next(data);
  }

  getData(): Observable<any> {
    return this.dataSubject.asObservable();
  }
}
