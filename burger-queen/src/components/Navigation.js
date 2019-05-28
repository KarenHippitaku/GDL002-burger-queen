import React, {Component} from 'react';
import './Navigation.css';
// import Dishes from './Dishes';
// import Drinks from './Drinks';
// import Toppings from './Toppings';
import logo from '../logo.svg';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
      <img src={logo} className="App-logo" alt="Pomelo-logo.png" />
      <a href="Dishes" className="text">
      {"Platillos".toUpperCase()}
      </a>
      <a href="Toppings" className="text">
      {"Toppings".toUpperCase()}
      </a>
      <a href="Drinks" className="text">
      {"Bebidas".toUpperCase()}
      </a>
      </nav>

    )
  }
}

export default Navigation;
