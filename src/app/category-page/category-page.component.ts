import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Product } from '../shared/interface';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import {CartService} from "../cart-page/cart.service";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryPageComponent implements OnInit {
  product$: Observable<Product[]>;
  // product: Product[];

  count: number;
  page: number = 1;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      switchMap(({ category }: Params) => {
        console.log(category);
        return category
          ? this.productService.getByCategory(this.page, category)
          : this.productService.getAll(this.page);
      }),
      tap((resp) => {
        this.count = resp.count;
      }),
      map((resp) => resp.rows)
    );
  }

  // this.product$ = this.productService.getByCategory({page: this.page}).pipe(tap(resp => {this.count = resp.count}), map(resp => resp.rows));

  // count =

  //вынести в сервис

  onPageChange($event: any) {
    // this.product$ = this.productService.getByCategory({page: $event.page + 1}).pipe(map(resp => resp.rows));
    this.product$ = this.route.params.pipe(
      switchMap(({ category }: Params) => {
        this.page = $event.page + 1;
        return category
          ? this.productService.getByCategory(this.page, category)
          : this.productService.getAll(this.page);
      }),
      tap((resp) => {
        this.count = resp.count;
        console.log(this.page);
      }),
      map((resp) => resp.rows)
    );
  }
}
