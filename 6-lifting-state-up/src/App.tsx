import React, { useState } from "react";
import "./App.css";
import { AddPerson } from "./components/AddPerson";
import { Persons } from "./components/Persons";
import { IPerson } from "./models/IPerson";

function App() {
  const [persons, setPersons] = useState<IPerson[]>([]);

  const addPerson = (p: IPerson) => {
    setPersons([...persons, p]);
  };

  const deletePerson = (i: number) => {
    let p = [...persons].splice(i, 1);

    setPersons(p);
  };

  return (
    <div className="App">
      <AddPerson includePerson={addPerson}></AddPerson>
      <Persons people={persons} removePerson={deletePerson}></Persons>
    </div>
  );
}

export default App;
