import { ChangeEvent, useState } from "react";
import { IPerson } from "../models/IPerson";

export const Persons = () => {
  const [persons, setPersons] = useState<IPerson[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isMarried, setIsMarried] = useState(false);

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(+e.target.value);
  };

  const handleIsMarried = (e: ChangeEvent<HTMLInputElement>) => {
    setIsMarried(e.target.checked);
  };

  const savePerson = () => {
    setPersons([...persons, { name, age, isMarried }]);
  };

  let personsPresentation = persons.map((person, i) => {
    return (
      <div className="container" key={i}>
        <h3>{person.name}</h3>
        <p>{person.age}</p>
        <input type="checkbox" checked={person.isMarried} readOnly />
      </div>
    );
  });

  return (
    <>
      <div>
        <input type="text" value={name} onChange={handleName} />
        <input type="number" value={age} onChange={handleAge} />
        <input type="checkbox" checked={isMarried} onChange={handleIsMarried} />
        <button type="button" onClick={savePerson}>
          Spara
        </button>
      </div>
      {personsPresentation}
    </>
  );
};
