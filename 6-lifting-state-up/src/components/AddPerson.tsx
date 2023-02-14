import { ChangeEvent, FormEvent, useState } from "react";
import { IPerson } from "../models/IPerson";

interface IAddPersonProps {
  includePerson(p: IPerson): void;
}

export const AddPerson = (props: IAddPersonProps) => {
  const [person, setPerson] = useState<IPerson>({
    name: "",
    age: "",
    address: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    props.includePerson(person);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={person.name}
        />
        <input
          type="text"
          name="age"
          onChange={handleChange}
          value={person.age}
        />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={person.address}
        />
        <button type="submit">Spara</button>
      </form>
    </>
  );
};
