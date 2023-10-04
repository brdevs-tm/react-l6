import { useState } from "react";

const useCounter = (step = 1) => {
  const [counter, setCounter] = useState(0);
  const decrease = () => {
    setCounter(counter - step);
  };
  const increase = () => {
    setCounter(counter + step);
  };
  return { counter, decrease, increase };
};

export default useCounter;

// const counterFunc = (step = 1) => {
//   const [counter, setCounter] = useState(0);
//   const decrease = () => {
//     setCounter(counter - step);
//   };
//   const increase = () => {
//     setCounter(counter + step);
//   };
//   return { counter, decrease, increase };
// };

// export default counterFunc;
