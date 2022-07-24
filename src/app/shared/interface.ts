export interface Resp {
  count: number;
  rows: Product[]
}

export interface Product {
  id?: number;
  name: string;
  price?: string;
  img?: string;
  typeId?: number;
  brandId?: number;
}

export interface ProductPost {
  name: string;
  price?: string;
  img?: File;
  typeId?: number;
  brandId?: number;
}

export interface ProductInCart {
  id: number;
  amount?: number;
}


export interface TypeId {
  name: string,
  code: number
}

export interface DropdownContent {
  name: string,
  code: string
}
