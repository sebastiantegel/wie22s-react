import { createContext } from "react";

export interface ITheme {
  name: string;
  background: string;
  foreground: string;
  toggleTheme(): void;
}

interface IThemes {
  night: ITheme;
  day: ITheme;
}

export const themes: IThemes = {
  night: {
    name: "Night",
    background: "black",
    foreground: "white",
    toggleTheme: () => {},
  },
  day: {
    name: "Day",
    background: "white",
    foreground: "black",
    toggleTheme: () => {},
  },
};

export const ThemeContext = createContext(themes.day);
