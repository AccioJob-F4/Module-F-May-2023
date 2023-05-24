import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { INCREMENT, DECREMENT, fetchUser } from "./actions/actions";

const App = (props) => {
  const state = useSelector((state) => state);
  // console.log({ state });
  // console.log({ props });
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUser();
  }, []);

  // const handleClick = (operation) => {
  //   // operation === "+"
  //   //   ? dispatch({ type: INCREMENT })
  //   //   : dispatch({ type: DECREMENT });

  //   operation === "+"
  //     ? props.incrementMapDispatchToProps()
  //     : props.decrementMapDispatchToProps();
  // };

  return (
    <div className="App">
      <button
        onClick={() => {
          fetchUser()(dispatch);
        }}
      >
        API call
      </button>

      {console.log("App.js", state)}

      {/* <h1>Counter : {state.counterValue}</h1> */}
      {/* <h1>Counter : {props.counterValueFromMapStateToProps}</h1>
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
      </button> */}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     counterValueFromMapStateToProps: state.counterValue,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementMapDispatchToProps: () => dispatch({ type: INCREMENT }),
//     decrementMapDispatchToProps: () => dispatch({ type: DECREMENT }),
//   };
// };

// export default connect(mapStateToProps)(App);
// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(null, mapDispatchToProps)(App);

export default App;
