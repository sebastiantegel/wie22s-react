import { IPerson } from "../models/IPerson";

interface IPersonsProps {
  persons: IPerson[];
}

export const Persons = (props: IPersonsProps) => {
  return (
    <>
      {/* <h3>{props.person.name}</h3>
      <p>{props.person.age}</p>
      <input type="checkbox" checked={props.person.isMarried} /> */}
      Antal personer: {props.persons.length}
    </>
  );
};
