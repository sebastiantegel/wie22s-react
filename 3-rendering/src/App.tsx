import React from "react";
import { AddPerson } from "./components/AddPerson";
import { Persons } from "./components/Persons";

function App() {
  return (
    <div className="App">
      {/* <AddPerson></AddPerson> */}
      <Persons />
    </div>
  );
}

export default App;
