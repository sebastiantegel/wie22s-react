import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Cart } from "./components/Cart/Cart";
import { ProductDetails } from "./components/ProductDetail/ProductDetail";
import { Products } from "./components/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
