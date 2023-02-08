import React from "react";
import "./App.css";
import { Person } from "./components/Person";
import { Persons } from "./components/Persons";
import { IPerson } from "./models/IPerson";

function App() {
  let p: IPerson[] = [
    {
      name: "Sebastian",
      age: 43,
      isMarried: true,
    },
  ];

  return (
    <div className="App">
      <Persons persons={p} />
      <Person />
    </div>
  );
}

export default App;
