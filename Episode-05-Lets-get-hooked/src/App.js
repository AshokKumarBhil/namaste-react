import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Header";
const App = ()=>{
  return (
    <div>
    <h1>Hello World !</h1>
    <Header/>
    <Body/>
    </div>
    
  );
}
createRoot(document.getElementById("root")).render(<App/>)