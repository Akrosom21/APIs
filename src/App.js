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
      <Map isMarkerShown
           googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCS0Rr40284eSENmAZCjwzKPIA5Qu64X9A&v=3.exp&libraries=geometry,drawing,places"
           loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `400px` }} />}
           mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
