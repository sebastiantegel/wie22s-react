import { IProductSmall } from "./IProductSmall";

export class CartItem {
  constructor(public product: IProductSmall, public amount: number) {}
}
