import { useNavigate } from "react-router-dom";
import { IProductSmall } from "../../models/IProductSmall";
import "./Product.scss";

interface IProductProps {
  product: IProductSmall;
  addToCart(p: IProductSmall): void;
}

export const Product = (props: IProductProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.addToCart(props.product);
  };

  const showMoreClick = () => {
    navigate(`/product/${props.product.id}`);
  };

  return (
    <>
      <div className="product">
        <h4>{props.product.name}</h4>
        <div className="image-container">
          <img src={props.product.imageUrl} alt={props.product.name} />
        </div>
        <p>{props.product.price} kr</p>
        <button onClick={handleClick}>Lägg till varukorg</button>
        <button onClick={showMoreClick}>Läs mer</button>
      </div>
    </>
  );
};
