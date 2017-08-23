import React, { Component } from 'react';

class Home extends Component {
  componentWillMount() {
    
    var accounts = localStorage.getItem('accounts');
    var currentUser = localStorage.getItem('currentUser');
    if (!currentUser || !accounts){
      window.location.href = '/';
      return;
    }
    accounts = JSON.parse(accounts);
    currentUser = JSON.parse(currentUser);
    var flag = false;
    for (var i = 0; i < accounts.length; i++) {
      if (accounts[i]["username"] === currentUser["username"] && accounts[i]["password"] === currentUser["password"]) {
        flag = true; 
      }
    }
    if (!flag) {
      window.location.href = '/';
    }
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
      Login succesful
      </div>
    );
  }
}

export default Home;

