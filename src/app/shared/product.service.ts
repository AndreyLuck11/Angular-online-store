import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:5000/api/device');
  }
}
