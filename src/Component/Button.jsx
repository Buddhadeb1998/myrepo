import { useState } from "react";

const Button = () => {
  const [value, setValue] = useState(0);

  const increasehandler = () => {
    setValue(value + 5);
  };
  const decreaseHandler = () => {
    setValue(value - 5);
  };
  const resetHandler = () => {
    setValue("");
  };

  return (
    <>
      
        <div className="main">
          <h1> Counter</h1>

          <div className="value">{value}</div>
          <div className="btn">
            <button onClick={increasehandler}>increase</button>
            <button onClick={decreaseHandler}>decrease</button>
            <button onClick={resetHandler}>reset</button>
          </div>
        </div>
      
    </>
  );
};
export default Button;
