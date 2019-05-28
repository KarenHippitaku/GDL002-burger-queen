import React, {Component} from 'react';
import './Navigation.css';
// import Dishes from './Dishes';
// import Drinks from './Drinks';
// import Toppings from './Toppings';
import pomelo from './img/pomelo-04.png'
// import {menu} from '../menu.json';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {display: 'none'},
      initialstyle: {display: 'none'}
    };
    // this.handleAddToOrder = this.handleAddToOrder.bind(this);
  }
  updateStyle = (style) => {
    if (this.state.style.display === 'none') {
      this.setState ({display:'display'});
    return;
  } else {
    this.setState({display: 'none'});
  }

  }
  render() {
    return (
      <nav className="navbar">
      <img src={pomelo} className="App-logo" alt="Pomelo-logo.png" />
      <a href='dishes' className="text" onClick={this.state.updateStyle ? 'flex' : 'none'}>
      {"Platillos".toUpperCase()}
      </a>
      <a href='toppings' className="text" onClick={this.state.updateStyle ? 'flex' : 'none'}>
      {"Toppings".toUpperCase()}
      </a>
      <a href='drinks' className="text" onClick={this.state.updateStyle ? 'flex' : 'none'}>
      {"Bebidas".toUpperCase()}
      </a>
      </nav>

    )
  }
}

export default Navigation;
