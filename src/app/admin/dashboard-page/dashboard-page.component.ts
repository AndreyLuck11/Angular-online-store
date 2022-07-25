import { Component, OnInit } from '@angular/core';
import {map, Observable, tap} from "rxjs";
import {ProductService} from "../../shared/product.service";
import {Product} from "../../shared/interface";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  product$: Observable<Product[]>;
  // product: Product[];

  count: number;
  page: number;
  i: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.page = 1;
    this.product$ = this.productService.getAll(this.page).pipe(
      tap((resp) => {
        this.count = resp.count;
      }),
      map((resp) => resp.rows)
    );

    // count =
  }
  //вынести в сервис

  onPageChange($event: any) {
    this.product$ = this.productService
      .getAll($event.page + 1)
      .pipe(map((resp) => resp.rows));
  }

  delete(id: number) {

  }
}
