import { IPerson } from "../models/IPerson";

interface IShowPersonProps {
  person: IPerson;
}

export const ShowPerson = ({ person }: IShowPersonProps) => {
  return (
    <div>
      <h3>{person.name}</h3>
      <p>{person.age}</p>
      <input type="checkbox" checked={person.isMarried} />
    </div>
  );
};
