import { CartItem } from "../../models/CartItem";
import "./CartSmall.scss";

interface ICartSmallProps {
  cart: CartItem[];
}

export const CartSmall = (props: ICartSmallProps) => {
  return <>CartSmall works: {props.cart.length}</>;
};
