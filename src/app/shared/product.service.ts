import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Product, ProductPost, Resp} from './interface';
import {map, Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(page: number): Observable<Resp> {
    return this.http.get<Resp>(`${environment.apiURL}/api/device`, {
      params: { page },
    });
  }

  getByCategory(page: any, typeId: any): Observable<Resp> {
    return this.http.get<Resp>(`${environment.apiURL}/api/device`, {
      params: { page, typeId },
    });
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiURL}/api/device/${id}`);
  }

  create(data: any): Observable<ProductPost> {
    return this.http.post<ProductPost>(`${environment.apiURL}/api/device`, data);
  }

  deleteById(id: number): Observable<Product> {
    return this.http.delete<Product>(`${environment.apiURL}/api/device`);
  }
}
