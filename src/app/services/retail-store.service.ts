import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { productData } from '../models/productData';

@Injectable({
  providedIn: 'root'
})
export class RetailStoreService {
  private baseURL: string = ""
  private resp: productData | any

  constructor(private http: HttpClient) {
    this.baseURL = environment.retailStoreApi
  }
  getProducts(): Observable<productData[]>{
    this.resp = this.http.get<productData>(this.baseURL)
    return this.resp
  }
}
