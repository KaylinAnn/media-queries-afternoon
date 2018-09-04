import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <div className="intro">
          <h1>SERVICES</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="info">
          <div className="infoBox">
            <div className="yellowCircle" />
            <h2>E-Commerce</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="infoBox">
            <div className="yellowCircle" />
            <h2>Responsive Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="infoBox">
            <div className="yellowCircle" />
            <h2>Web Security</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
