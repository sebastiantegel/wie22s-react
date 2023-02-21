import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import { Nav } from "./components/Nav/Nav";
import { Products } from "./components/Products/Products";
import { CartItem } from "./models/CartItem";
import { IProductSmall } from "./models/IProductSmall";

export type MyContext = {
  addProductToCart(p: IProductSmall): void;
  cart: CartItem[];
};

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addProductToCart = (product: IProductSmall) => {
    setCart([...cart, new CartItem(product, 1)]);
  };

  return (
    <>
      <header>
        <Nav cart={cart}></Nav>
      </header>
      <main>
        <Outlet context={{ addProductToCart, cart }}></Outlet>
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
