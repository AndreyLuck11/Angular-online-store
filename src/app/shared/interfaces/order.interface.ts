import {Product} from "../interface";

export interface Order {
  productId: number;
  count: number;
}

export interface LongOrder {
  count: number;
  product: Product;
}
