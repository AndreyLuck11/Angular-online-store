import {Component, OnInit} from '@angular/core';
import {Product} from "./shared/interface";
import {ProductService} from "./shared/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ECAngular';

  product: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      console.log(data);
      this.product = data;
    });
  }
}
