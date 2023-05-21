// import React, { useState, useEffect, useContext, useMemo } from "react";
// import { ThemeContext } from "./Context";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [sum, setSum] = useState(0);
//   const [dump, setDump] = useState(0);

//   const theme = useContext(ThemeContext);

//   console.log({ theme });

//   useEffect(() => {
//     console.log({ count });

//     return () => {};
//   }, [count]);

//   const handleClick = (action) => {
//     action === "+" ? setCount(count + 1) : setCount(count - 1);
//   };

//   const processedData = useMemo(() => {
//     let dummySum = 0;
//     for (let i = 0; i < 10000; i++) {
//       dummySum += ((count + 1) * 2 * 2000000) / 202912;
//     }

//     setSum(dummySum);
//     console.log("useMemo Callback : ", dummySum);
//   }, [dump]);

//   return (
//     <div>
//       Counter : {count}
//       <br />
//       Current Theme : {theme.dark}
//       <br />
//       Total Sum : {sum}
//       <br />
//       <button onClick={() => handleClick("+")}>+</button>
//       <button onClick={() => handleClick("-")}>-</button>
//     </div>
//   );
// };

// export default App;

// Hooks
// useState() :
// useEffect() : componentDidMount, componentDidUpdate, componentWillUnmount
// useContext()
// useMemo()
// useSelector()

// =======================================================

// import React, { useState, useEffect, useCallback } from "react";

// import Component1 from "./Component1";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [unmounted, setUnmounted] = useState(false);

//   useEffect(() => {
//     console.log("componentDidUpdate");
//   });

//   useEffect(() => {
//     console.log("componentDidMount");
//   }, []);

//   const handleClick = (action) => {
//     action === "+" ? setCount(count + 1) : setCount(count - 1);
//   };

//   return (
//     <div>
//       Counter : {count}
//       <br />
//       <button onClick={() => handleClick("+")}>+</button>
//       <br />
//       <button onClick={() => handleClick("-")}>-</button>
//       <br />
//       <h3>{!unmounted && <Component1 />}</h3>
//       <br />
//       <button
//         onClick={() => {
//           setUnmounted(!unmounted);
//         }}
//       >
//         Unmount
//       </button>
//     </div>
//   );
// };

// export default App;

// =======================================================

import React from "react";

import { useFetchData } from "./customHooks/useFetchData";
import { useWindowWidth } from "./customHooks/useWindowWidth";

const App = () => {
  const { data, loading } = useFetchData("https://randomuser.me/api/");
  const windowWidth = useWindowWidth();

  if (loading) return <div>LOADING...</div>;

  return (
    <div>
      {data.results[0].gender}
      <br />
      <h1>Current Window Width : {windowWidth}</h1>
    </div>
  );
};

export default App;
