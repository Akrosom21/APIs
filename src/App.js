import './App.css';
import React from "react";
import Weather from "./Weather";
import Exchange from "./Exchange";
import Map from "./Map";

function App() {
  return (
    <div className="App">
      <Weather/>
      <Exchange/>
      <Map/>
    </div>
  );
}

export default App;
