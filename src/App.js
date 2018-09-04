import React, { Component } from "react";
import Header from "./Components/Header";
import Services from "./Components/Services";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header> </Header>
        <div className="img">
          <h1>Welcome To Our Studio!</h1>
          <h2>II'S NICE TO MEET YOU</h2>
          <button className="morebtn">TELL ME MORE</button>
        </div>
        <Services> </Services>
      </div>
    );
  }
}

export default App;
