import { useState } from "react";
import { IPerson } from "../models/IPerson";
import { ShowPerson } from "./ShowPerson";

export const Person = () => {
  const [persons, setPersons] = useState<IPerson[]>([]);

  const changeOurVariable = () => {
    setPersons([...persons, { name: "Sebastian", age: 43, isMarried: true }]);
    // x++ =   x = x + 1
  };

  console.log(persons);

  return (
    <>
      <div onClick={changeOurVariable}>Antal personer: {persons.length}</div>
      {persons.length > 0 && <ShowPerson person={persons[0]} />}
    </>
  );
};
