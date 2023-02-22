import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { MyContext } from "../../App";
import { IProduct } from "../../models/IProduct";
import { IProductSmall } from "../../models/IProductSmall";
import { getProductById } from "../../services/productService";
import "./ProductDetail.scss";

export const ProductDetails = () => {
  const [product, setProduct] = useState<IProduct>();
  const [error, setError] = useState("");
  const { addProductToCart } = useOutletContext<MyContext>();

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      if (id) {
        let response = await getProductById(+id);

        if (response.product) {
          setProduct(response.product);
        } else {
          setError(response.error);
        }
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
      {error !== "" ? (
        <>
          <h2>{error}</h2>
        </>
      ) : (
        <>
          <button onClick={addToCart}>Lägg i varukorg</button>
          <h3>{product?.name}</h3>
          <pre>{product?.description}</pre>
          <img src={product?.imageUrl} alt={product?.name} />{" "}
        </>
      )}
    </>
  );
};
