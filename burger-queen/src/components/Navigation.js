import React, {Component} from 'react';
// import Dishes from './Dishes';
// import Drinks from './Drinks';
// import Toppings from './Toppings';
import logo from '../logo.svg';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
      <img src={logo} className="App-logo" alt="Pomelo-logo.png" />
      <a href="Dishes" className="text-white">
      {"Platillos".toUpperCase()}
      </a>
      <a href="Toppings"className="text-white">
      {"Toppings".toUpperCase()}
      </a>
      <a href="Drinks" className="text-white">
      {"Bebidas".toUpperCase()}
      </a>
      </nav>

    )
  }
}

export default Navigation;
