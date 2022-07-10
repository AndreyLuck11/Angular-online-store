export interface Resp {
  count: number;
  rows: Product[]
}

export interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
  typeId?: number;
  brandId?: number;
}
