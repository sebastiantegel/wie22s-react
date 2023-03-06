import { useContext } from "react";
import { ThemeContext, themes } from "../contexts/ThemeContext";

export const Button = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      style={{ background: theme.background, color: theme.foreground }}
    >
      Byt tema till {theme === themes.day ? themes.night.name : themes.day.name}
    </button>
  );
};
