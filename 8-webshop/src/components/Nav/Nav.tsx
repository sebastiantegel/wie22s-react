import { NavLink } from "react-router-dom";
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
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Hem
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Varukorg
          </NavLink>
        </li>
      </ul>
    </>
  );
};
