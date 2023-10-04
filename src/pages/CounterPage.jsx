// import { useState } from "react";

import useCounter from "../hooks/useCounter";
import useLocation from "../hooks/useLocation";

const CounterPage = () => {
  // const [counter, setCounter] = useState(0);
  // const decrease = () => {
  //   setCounter(counter - 1);
  // };
  // const increase = () => {
  //   setCounter(counter + 1);
  // };

  // const [counter2, setCounter2] = useState(0);
  // const decrease2 = () => {
  //   setCounter2(counter2 - 2);
  // };
  // const increase2 = () => {
  //   setCounter2(counter2 + 2);
  // };

  const { counter, decrease, increase } = useCounter();
  const {
    counter: counter2,
    decrease: decrease2,
    increase: increase2,
  } = useCounter(2);
  const location = useLocation();
  console.log(location);
  return (
    <div className="text-center">
      <h1>Counter: {counter}</h1>
      <button className="btn btn-danger" onClick={decrease}>
        -
      </button>
      <button className="btn btn-success" onClick={increase}>
        +
      </button>
      <h1>Counter2: {counter2}</h1>
      <button className="btn btn-danger" onClick={decrease2}>
        -
      </button>
      <button className="btn btn-success" onClick={increase2}>
        +
      </button>
    </div>
  );
};

export default CounterPage;
