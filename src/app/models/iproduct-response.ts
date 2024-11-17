import { IProduct } from "./iproduct";

export interface IProductResponse {
  pageIndex:number;
  pageSize:number;
  count:number;
  data:IProduct[]
}
