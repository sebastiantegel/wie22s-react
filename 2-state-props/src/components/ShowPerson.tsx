import { IPerson } from "../models/IPerson";

interface IShowPersonProps {
  person: IPerson;
}

export const ShowPerson = (props: IShowPersonProps) => {
  return (
    <div>
      <h3>{props.person.name}</h3>
      <p>{props.person.age}</p>
      <input type="checkbox" checked={props.person.isMarried} />
    </div>
  );
};
