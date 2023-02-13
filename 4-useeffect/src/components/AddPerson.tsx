import { ChangeEvent, FormEvent, useState } from "react";
import { IPerson } from "../models/IPerson";

export const AddPerson = () => {
  const [person, setPerson] = useState<IPerson>({
    name: "",
    age: 0,
    isMarried: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    if (e.target.type === "number") {
      setPerson({ ...person, [e.target.name]: +e.target.value });
    }

    if (e.target.type === "checkbox") {
      setPerson({ ...person, [e.target.name]: e.target.checked });
    }

    if (e.target.type === "text") {
      setPerson({ ...person, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (person.name === "" || person.age === 0) {
      console.log("Validation error occured");
    } else {
      console.log("Submit form: ", person);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Namn"
        value={person.name}
        onChange={handleChange}
        name="name"
        required
      />
      <input
        placeholder="Ålder"
        type="number"
        value={person.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="checkbox"
        checked={person.isMarried}
        onChange={handleChange}
        name="isMarried"
      />
      <button type="submit">Spara</button>
      <div>{JSON.stringify(person)}</div>
    </form>
  );
};
