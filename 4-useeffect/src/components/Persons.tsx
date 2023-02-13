import { useEffect, useState } from "react";
import { IPerson } from "../models/IPerson";

export const Persons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [persons, setPersons] = useState<IPerson[]>([]);

  useEffect(() => {
    console.log("Running useEffect");
    if (!isLoading) return;

    console.log("Changing isLoading");
    setIsLoading(false);
  }, [isLoading]);

  useEffect(() => {
    console.log("Running second useEffect");
  }, [persons]);

  useEffect(() => {
    const getData = async () => {
      let response = await fetch("...");
      let data = await response.json();
      setPersons(data);
      setIsLoading(false);
    };

    if (!isLoading) return;

    getData();
  }, [isLoading]);

  const addPerson = () => {
    setPersons([...persons, { name: "Sebastian", age: 43, isMarried: true }]);
  };

  return (
    <>
      <div onClick={addPerson}>Run persons useEffect</div>
      <div>Persons works! - {isLoading.toString()}</div>
    </>
  );
};
