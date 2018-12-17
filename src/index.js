import React from "react";
import ReactDOM from "react-dom";
import Contact from './Contact'
const Index = () => {
  return <div> <Contact />Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));