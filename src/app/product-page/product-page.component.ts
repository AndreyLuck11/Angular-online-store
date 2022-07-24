import { Component, OnInit } from '@angular/core';
import {Observable, switchMap, tap} from "rxjs";
import {Product} from "../shared/interface";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../shared/product.service";
import {NavigationService} from "../shared/navigate.service";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product$: Observable<Product>;
  url = environment.apiURL;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private navigation: NavigationService) { }

  ngOnInit(): void {
    this.product$ = this.route.params
      .pipe(switchMap(({id}: Params) => {
        return this.productService.getById(id);
      }), tap(response => {console.log(response)}));
  }

  back(): void {
    this.navigation.back()
  }

}
