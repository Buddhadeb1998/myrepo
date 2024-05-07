import { useState } from "react";

const State = () => {
  const [person, setPerson] = useState({
    name: "anirban",
    age: 40,
    add: "asansol",
  });

  const Incnum =()=>{
    setPerson({
      name: "xyz",
      age: 20,
      add: "patna",
    });
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.add}</h1>

      <button onClick={Incnum}>click</button>
    </>
  );
};

export default State;
