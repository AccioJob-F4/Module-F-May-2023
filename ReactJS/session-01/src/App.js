import React from "react";

import styled from "styled-components";

import "./App.css";

// class ControlledComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       inputValue: "",
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ inputValue: e.target.value });
//   };

//   render() {
//     return (
//       <input
//         type="text"
//         value={this.state.inputValue}
//         onChange={this.handleChange}
//       />
//     );
//   }
// }

const StyledInput = styled.input`
  color: red;
`;

class UncontrolledComponent extends React.Component {
  // inpStyle = { color: "red" };

  handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = this.inputRef.value;

    console.log(this.inputRef);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <input
          style={this.inpStyle}
          type="text"
          ref={(ref) => (this.inputRef = ref)}
        /> */}

        <StyledInput type="text" ref={(ref) => (this.inputRef = ref)} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UncontrolledComponent;
