import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
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
    //check if username exists
    if(localStorage.getItem('accounts')){
      var allAccounts = localStorage.getItem('accounts');
      allAccounts = JSON.parse(allAccounts);
      for (var i = 0; i < allAccounts.length; i++) {
        if (allAccounts[i]["username"] === this.state.username) {
          window.alert('error: account already exists');
          return;
        }
      }
    }


    event.preventDefault();
    axios({
      method: 'post',
      url: '/user/register',
      data: {
        username: this.state.username,
        password: this.state.password,
      },
    })
    .then((res) => {
      //console.log('res', res);
      var accounts = [];
      //get if there exists accounts
      if (localStorage.getItem('accounts')){
        var obj = localStorage.getItem('accounts');
        obj = JSON.parse(obj);
        accounts = obj;
      }
      

      const newAccount = { username: this.state.username, password: this.state.password };
      accounts.push(newAccount);

      localStorage.setItem('accounts', JSON.stringify(accounts));
      
      
    });
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
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
        </form>
      </div>
    );
  }
}

export default Register;

