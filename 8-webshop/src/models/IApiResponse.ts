import { IProduct } from "./IProduct";

export interface IApiResponse {
  product?: IProduct;
  error: string;
}
