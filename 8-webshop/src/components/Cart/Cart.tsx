import { useOutletContext } from "react-router-dom";
import { MyContext } from "../../App";
import "./Cart.scss";

export const Cart = () => {
  const { cart } = useOutletContext<MyContext>();

  console.log("Running Cart:", cart);

  return (
    <>
      {cart.map((cartItem) => {
        return <h4>{cartItem.product.name}</h4>;
      })}
    </>
  );
};
