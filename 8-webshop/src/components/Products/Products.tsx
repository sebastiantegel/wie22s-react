import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { MyContext } from "../../App";
import { IProductSmall } from "../../models/IProductSmall";
import { getProducts } from "../../services/productService";
import { Product } from "../Product/Product";
import "./Products.scss";

export const Products = () => {
  const [products, setProducts] = useState<IProductSmall[]>([]);
  const { addProductToCart } = useOutletContext<MyContext>();

  useEffect(() => {
    const getData = async () => {
      let products = await getProducts();

      setProducts(products);
    };

    if (products.length > 0) return;

    getData();
  });

  let productsHtml = products.map((product) => {
    return (
      <Product
        product={product}
        key={product.id}
        addToCart={addProductToCart}
      ></Product>
    );
  });

  return <div className="products">{productsHtml}</div>;
};
