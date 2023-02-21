import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { MyContext } from "../../App";
import { IProduct } from "../../models/IProduct";
import { IProductSmall } from "../../models/IProductSmall";
import { getProductById } from "../../services/productService";
import "./ProductDetail.scss";

export const ProductDetails = () => {
  const [product, setProduct] = useState<IProduct>();
  const { addProductToCart } = useOutletContext<MyContext>();

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      if (id) {
        let product = await getProductById(+id);
        setProduct(product);
      }
    };

    if (product) return;

    getData();
  });

  const addToCart = () => {
    addProductToCart(product as IProductSmall);
  };

  return (
    <>
      <button onClick={addToCart}>Lägg i varukorg</button>
      <h3>{product?.name}</h3>
      <pre>{product?.description}</pre>
      <img src={product?.imageUrl} alt={product?.name} />
    </>
  );
};
