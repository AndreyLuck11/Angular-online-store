import { Component, OnInit } from '@angular/core';
import {map, Observable, switchMap, tap} from "rxjs";
import {Product} from "../shared/interface";
import {ProductService} from "../shared/product.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  product$: Observable<Product[]>;
  // product: Product[];

  count: number
  page: any

  rp:any

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.page = 1;
    let rp = this.route.params;
    console.log(rp)
    this.product$ = this.route.params
      .pipe(switchMap(({category}: Params) => {
        console.log(category);
        return this.productService.getByCategory(this.page, category);
      }), tap(resp => {this.count = resp.count}), map(resp => resp.rows));
  }

    // this.product$ = this.productService.getByCategory({page: this.page}).pipe(tap(resp => {this.count = resp.count}), map(resp => resp.rows));

    // count =

//вынести в сервис


  onPageChange($event: any) {
    // this.product$ = this.productService.getByCategory({page: $event.page + 1}).pipe(map(resp => resp.rows));
    this.product$ = this.route.params
      .pipe(switchMap(({category}: Params) => {
        return this.productService.getByCategory($event.page + 1, category);
      }), tap(resp => {this.count = resp.count}), map(resp => resp.rows));
  }
}
