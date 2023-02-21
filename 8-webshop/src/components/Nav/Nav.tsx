import { Link } from "react-router-dom";
import { CartItem } from "../../models/CartItem";
import { CartSmall } from "../CartSmall/CartSmall";
import "./Nav.scss";

interface INavProps {
  cart: CartItem[];
}

export const Nav = (props: INavProps) => {
  return (
    <>
      <CartSmall cart={props.cart}></CartSmall>
      <ul>
        <li>
          <Link to="/cart">Varukorg</Link>
        </li>
      </ul>
    </>
  );
};
