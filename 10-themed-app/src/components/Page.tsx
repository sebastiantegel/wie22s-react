import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Button } from "./Button";

export const Page = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <p>{theme.name}</p>
      <Button></Button>
      <Button></Button>
    </>
  );
};
