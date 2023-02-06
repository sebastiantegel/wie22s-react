import { useState } from "react";
import "./First.scss";

interface IFirstProps {
  myValue: number;
  name: string;
}

export const First = (props: IFirstProps) => {
  const [x, setX] = useState(props.myValue);

  const changeX = () => {
    setX(100);
  };

  console.log(x);
  return (
    <h2 onClick={changeX}>
      {props.name}: {x}
    </h2>
  );
};
