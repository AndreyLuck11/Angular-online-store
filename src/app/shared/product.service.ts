import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product, Resp} from "./interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getAll({page}: { page: any }): Observable<Resp> {
    let params = new HttpParams()
    params = params.append('page', page );
    return this.http.get<Resp>('http://localhost:5000/api/device', {params: params});
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`http://localhost:5000/api/device/${id}`);
  }
}
