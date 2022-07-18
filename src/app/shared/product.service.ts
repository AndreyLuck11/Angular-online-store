import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product, Resp } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(page: number): Observable<Resp> {
    return this.http.get<Resp>('http://localhost:5000/api/device', {
      params: { page },
    });
  }

  getByCategory(page: any, typeId: any): Observable<Resp> {
    return this.http.get<Resp>('http://localhost:5000/api/device', {
      params: { page, typeId },
    });
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`http://localhost:5000/api/device/${id}`);
  }
}
