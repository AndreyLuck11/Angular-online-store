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

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.product$ = this.productService.getAll().pipe(tap(console.log));
  }

  // ngOnInit() {
  //   this.productService.getAll().subscribe(data => {
  //     console.log(data);
  //     this.product = data;
  //   });
  //}

}
