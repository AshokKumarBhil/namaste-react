import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import { useRef } from "react";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="/public/logo.png"></img>
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>Home</li>
          <li>Sign Up</li>
          <li>Log In</li>
        </ul>
      </div>
    </div>
  );
};
const Card = (prop)=>{
    return (<div className="card">
      <h3>{prop.restro}</h3>
        {prop.name}
    </div>)
}
const Body = () => {
  return (
    <div className="hero">
      <div className="search">
        <input
          type="text"
          placeholder="Search Your Items"
          id="search-item"
        ></input>
        <button id="search-btn">Search</button>
      </div>
      <div className="card-container">
       <Card name = "Item 1" restro="Manisha Food"/>
       <Card name = "Item 2" restro="Jay Ambe Food"/>
       <Card name = "Item 3" restro="Jay Mata Food"/>
      </div>
    </div>
  );
};
const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

// React Mindset

function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>Controlled Input</h3>
      <input
        type="text"
        value={name}              // ✅ React owns the value
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}
function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert("Hello, " + inputRef.current.value); // ✅ Read when needed
  };

  return (
    <div>
      <h3>Uncontrolled Input</h3>
      <input type="text" ref={inputRef} /> {/* ✅ DOM owns the value */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

function Re() {
const [i , setI]= useState(false);
  return (
    <div>
      <button onClick={() => setI(!i)}>
        Toggle Modal
      </button>
      {i && <p>Modal is open!</p>}
    </div>
  );
}


createRoot(document.getElementById("root")).render(<Re/>);
