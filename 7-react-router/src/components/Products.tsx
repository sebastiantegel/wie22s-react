import { useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../models/IProduct";
import { ProductSmall } from "./ProductSmall";

export const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([
    { id: "ABC123", name: "Callaway Chrome Soft", price: 450, imageUrl: "" },
    { id: "123CBA", name: "Titleist PRO V1", price: 550, imageUrl: "" },
    { id: "1A2B3C", name: "Strixon Pro Mega Ultra", price: 500, imageUrl: "" },
  ]);

  const html = products.map((product) => {
    return <ProductSmall product={product} />;
  });

  return <>{html}</>;
};
