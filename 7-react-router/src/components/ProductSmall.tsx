import { useNavigate } from "react-router-dom";
import { IProduct } from "../models/IProduct";

interface IProductSmallProps {
  product: IProduct;
}

export const ProductSmall = (props: IProductSmallProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${props.product.id}`);
  };

  return (
    <div className="product" onClick={handleClick}>
      <h2>{props.product.name}</h2>
    </div>
  );
};
