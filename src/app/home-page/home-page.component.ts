import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/interface";
import {ProductService} from "../shared/product.service";
import {map, Observable, tap} from "rxjs";
import {HomePageService} from "./home-page.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  product$: Observable<Product[]>;
  // product: Product[];

  count: number
  page: number

  constructor(private productService: ProductService,
              private paginServ: HomePageService) {
  }

  ngOnInit() {
    this.page = this.paginServ.pageNum;
    this.product$ = this.productService.getAll({page: this.page}).pipe(tap(resp => {this.count = resp.count}), map(resp => resp.rows));

    // count =
  }
//вынести в сервис


  onPageChange($event: any) {
    this.product$ = this.productService.getAll({page: $event.page + 1}).pipe(map(resp => resp.rows));
    this.paginServ.pageNum = $event.page + 1;
  }
}
