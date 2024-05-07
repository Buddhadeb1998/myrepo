import { useState } from "react";
import data from "./Data";

const Funcomp = () => {
  const [value, setValue] = useState(data);

  const [state, setState] = useState(true);
  // state = true
  // state = false
   const changeState = () => {
    //state ? setValue([]) : setValue(data);
    if (state) {
      setValue([]);
    } else {
      setValue(data);
    }
    setState(!state); //set State = false //set State = true
  };
  const removedHandle = (id) => {
    let newstd = value.filter((std) => std.id !== id);
    setValue(newstd);
  };
  //    const resetHandler=()=>{
  //     setValue([])

  //   }
  //    const handlereset=()=>{
  //     setValue(false)
  //   }

  return (
    <>
      <h1> Student</h1>
      <div>
        {value.map((str) => {
          return (
            <div>
              <h4>{str.name}</h4>
              <h2>{str.id}</h2>
              <button onClick={() => removedHandle(str.id)}>removed</button>
            </div>
          );
        })}
        {state ? (
          <button onClick={changeState}>clearall</button>
        ) : (
          <button onClick={changeState}>Reset</button>
        )}
      </div>
    </>
  );
};
export default Funcomp;
