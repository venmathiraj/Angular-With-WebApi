import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product/product';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  apiUrl = "http://localhost:51558/api/products/";
  constructor(private http: HttpClient) { }
  // getProducts(){
  //   return this.http.get(apiUrl);
  // }
  getHttpOptions() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let httpOptions = {
      headers: headers
    }
    return httpOptions;
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(product: Product): Observable<Product[]> {
    let httpOptions = this.getHttpOptions();
    return this.http.post<Product[]>('http://localhost:51558/api/products/postproduct/', product, httpOptions);
  }

  updateProduct(product: Product) {
    let httpOptions = this.getHttpOptions();
    return this.http.put<Product[]>('http://localhost:51558/api/products/updateproduct/', product, httpOptions);
  }
}
