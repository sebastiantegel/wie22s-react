import React from "react";
import "./App.scss";
import { First } from "./components/first/First";

export default function App() {
  return (
    <div className="App">
      <First myValue={10} name="Sebastian" />
    </div>
  );
}

// export default App;
