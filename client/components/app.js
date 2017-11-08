import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const landing = (
      <div>
        <div className="landing">
          <h1>Hello</h1>
        </div>
        <ul>
          <li><a href="/register"><button> Register</button></a></li>
          <li><a href="/login"><button> Login</button></a></li>
        </ul>
      </div>
    );
    return (
      <div>
        {this.props.children || landing}
      </div>
    );
  }
}
