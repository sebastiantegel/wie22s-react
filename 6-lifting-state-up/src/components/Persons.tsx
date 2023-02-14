import { IPerson } from "../models/IPerson";

interface IPersonsProps {
  people: IPerson[];
  removePerson(i: number): void;
}

export const Persons = (props: IPersonsProps) => {
  const handleClick = (i: number) => {
    props.removePerson(i);
  };

  let html = props.people.map((p, i) => {
    return (
      <div key={i}>
        <h3>{p.name}</h3>
        <p>{p.address}</p>
        <button
          onClick={() => {
            handleClick(i);
          }}
        >
          Ta bort
        </button>
      </div>
    );
  });

  return <>{html}</>;
};
