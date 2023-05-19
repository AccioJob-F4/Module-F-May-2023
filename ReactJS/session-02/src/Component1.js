import React from "react";
import PropTypes from "prop-types";

// const Component1 = ({ name, dish }) => {
//   return (
//     <div>
//       This is the First Component. And my name is {name}
//       <p>My favourite street food is {dish}</p>
//     </div>
//   );
// };

// Component1.defaultProps = {
//   name: "Ben Tennyson",
//   dish: "pani puri",
// };

// Component1.propTypes = {
//   name: PropTypes.string.isRequired,
// };

class Component1 extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillUnmount = () => {
  //   console.log("componentWillUnmount");
  // };

  render() {
    return (
      <div>
        <h4>My name is Divyansh and I love pani puri wo bhi teekha waala.</h4>
      </div>
    );
  }
}

export default Component1;
