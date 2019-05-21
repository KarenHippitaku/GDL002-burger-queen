import React, {Component} from 'react';
import './Navigation.css'
import logo from '../logo.svg';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
      <img src={logo} className="App-logo" alt="Pomelo-logo.png" />
      <a href="" className="text-white">
      {"Platillos".toUpperCase()}
      </a>
      <a href="" className="text-white">
      {"Bebidas".toUpperCase()}
      </a>
      </nav>

    )
  }
}

export default Navigation;
