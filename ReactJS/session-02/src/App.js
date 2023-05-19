import React from "react";

// const withLogger = (WrappedComponent) => {
//   class WithLogger extends React.Component {
//     componentDidMount() {
//       console.log(`Component ${WrappedComponent.name} mounted`);
//     }

//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   }

//   return WithLogger;
// };

// const App = (props) => {
//   return <div>App</div>;
// };

// const EnhancedComponent = withLogger(App);

// export default EnhancedComponent;

// ======================================================================

// import Component1 from "./Component1";
// import { useEffect, useState } from "react";

// const App = () => {
//   const [name, setName] = useState("Divyansh Singh");

//   useEffect(() => {
//     console.log({ name });
//   }, [name]);

//   return (
//     <div>
//       <h1>App</h1>
//       <h4>
//         <Component1 dish={"momos"} name={name} setName={setName} />
//       </h4>
//     </div>
//   );
// };

// export default App;

// ======================================================================

import Component1 from "./Component1";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      unmount: false,
    };

    console.log("constructor");
  }

  // componentWillMount = () => {
  //   console.log("componentWillMount");
  // };

  // componentDidMount = () => {
  //   console.log("componentDidMount");
  // };

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log(
  //     "shouldComponentUpdate : nextProps : ",
  //     nextProps,
  //     " ---- nextState : ",
  //     nextState,
  //     "---- currentState : ",
  //     this.state.count
  //   );
  //   return true;
  // };

  // componentWillUpdate = () => {
  //   console.log("componentWillUpdate");
  // };

  // componentDidUpdate = (prevProps, prevState) => {
  //   console.log(
  //     "componentDidUpdate : prevProps : ",
  //     prevProps,
  //     " ---- prevState : ",
  //     prevState,
  //     "---- currentState : ",
  //     this.state.count
  //   );
  // };

  handleUpdate = (action) => {
    action === "+"
      ? this.setState({ count: this.state.count + 1 })
      : this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>
          Counter : {this.state.count}
          <br />
          <button onClick={() => this.handleUpdate("+")}>+</button>
          <button onClick={() => this.handleUpdate("-")}>-</button>
        </h1>

        {!this.state.unmount && <Component1 />}

        <br />

        <button
          onClick={() => {
            this.setState({ unmount: !this.state.unmount });
          }}
        >
          Unmount
        </button>
      </div>
    );
  }
}

export default App;
