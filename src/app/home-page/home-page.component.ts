import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/interface";
import {ProductService} from "../shared/product.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  product$: Observable<Product[]>;
  // product: Product[];

  page: any

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.page = 1;
    this.product$ = this.productService.getAll({page: this.page}).pipe(tap(console.log));
  }



  onPageChange($event: any) {
     console.log($event.page + 1);
    this.product$ = this.productService.getAll({page: $event.page + 1}).pipe(tap(console.log));
  }
}
