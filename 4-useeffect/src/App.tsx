import React from "react";
import "./App.css";
import { AddPerson } from "./components/AddPerson";
import { Persons } from "./components/Persons";

function App() {
  return (
    <div className="App">
      <Persons></Persons>
      <AddPerson></AddPerson>
    </div>
  );
}

export default App;
