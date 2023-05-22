import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, DECREMENT } from "./actions/actions";

const App = () => {
  const state = useSelector((state) => state);
  console.log({ state });
  const dispatch = useDispatch();

  const handleClick = (operation) => {
    operation === "+"
      ? dispatch({ type: INCREMENT })
      : dispatch({ type: DECREMENT });
  };

  return (
    <div className="App">
      <h1>Counter : {state.counterValue}</h1>
      <br />

      <button
        onClick={() => {
          handleClick("+");
        }}
      >
        +
      </button>
      <br />
      <button
        onClick={() => {
          handleClick("-");
        }}
      >
        -
      </button>
    </div>
  );
};

export default App;
