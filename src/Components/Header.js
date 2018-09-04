import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }
  render() {
    return (
      <header>
        <div>
          <div className="start">Start Bootstrap</div>
          <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
            <p>MENU</p>
          </button>
          <nav className={this.state.toggle ? "show" : ""}>
            <ul>
              <li>
                <a href="#">SERVICES</a>
              </li>
              <li>
                <a href="#">PORTFOLIO</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">TEAM</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
