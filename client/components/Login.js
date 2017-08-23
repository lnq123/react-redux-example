import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var accounts = localStorage.getItem('accounts');
    accounts = JSON.parse(accounts);
    for (var i = 0; i < accounts.length; i++) {
      if (accounts[i]["username"] === this.state.username && accounts[i]["password"] === this.state.password) {
        window.alert("login successful");
        var currentUser = {username: this.state.username, password: this.state.password };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        window.location.href='/home';
        return;
      }
      this.setState({message: 'login failed'});
    }
    axios.get('/user/login', {
      params: {
        username: this.state.username,
        password: this.state.password,
      },
    })
      .then((res) => {
        // console.log(res);
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input name="username" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input name="password" type="password" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <br/>
        {this.state.message}
      </form>
      </div>
    );
  }
}

export default Login;

