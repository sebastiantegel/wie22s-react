import { ChangeEvent, useState } from "react";

export const AddPerson = () => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setUserInput(e.target.value);
  };

  //   let showIfLongerThanFiveCharacters = <p>Skriv fler tecken</p>;

  //   if (userInput.length > 5) {
  //     showIfLongerThanFiveCharacters = <p>{userInput}</p>;
  //   }

  //   let showIfLongerThanFiveCharacters =
  //     userInput.length > 5 ? <p>{userInput}</p> : <p>Skriv fler tecken</p>;

  return (
    <>
      <input type="text" value={userInput} onChange={handleChange} />
      {/* {showIfLongerThanFiveCharacters} */}
      {userInput.length > 5 ? <p>{userInput}</p> : <p>Skriv fler tecken</p>}
    </>
  );
};
