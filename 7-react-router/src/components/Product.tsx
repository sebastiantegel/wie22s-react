import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();

  return <h4>Produkt: {id}</h4>;
};
