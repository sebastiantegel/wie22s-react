import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Page } from "./components/Page";
import { ITheme, ThemeContext, themes } from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState<ITheme>(themes.day);

  theme.toggleTheme = () => {
    theme === themes.day ? setTheme(themes.night) : setTheme(themes.day);
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Page></Page>
      </ThemeContext.Provider>
      <Button></Button>
    </div>
  );
}

export default App;
