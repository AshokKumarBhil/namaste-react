import React from "react";
import { createRoot } from "react-dom/client";

// Coding Assignment 1
// CRE -> create React Element
const ele = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "I am h1 - CRE"),
  React.createElement("h2", {}, "I am h2 - CRE"),
  React.createElement("h3", {}, "I am h3 - CRE"),
]);
const eleJsx = (
  <div className="title">
    <h1>Hello from h1 - JSX</h1>
    <h2>Hello from h2 - JSX</h2>
    <h3>Hello from h3 - JSX</h3>
  </div>
);
const Greet = (prop)=>{
  return(
   <h1 id={prop.id}>Namaste React !</h1>
  );
}
const ComponentEleJsx = () => {
  return(<div className="title">
    <Greet id = "greet"/>
    <h1 id="h1">Hello from h1 - JSX-Functional Component</h1>
    <h2 id="h2">Hello from h2 - JSX-Functional Component</h2>
    <h3 id="h3">Hello from h3 - JSX-Functional Component</h3>
  </div>);
  
};
createRoot(document.getElementById("root")).render(<ComponentEleJsx />);
