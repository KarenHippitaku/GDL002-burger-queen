import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
      this.setState ({display:'flex'});
    return;
  } else {
    this.setState({display: 'none'});
  }

  }
  render() {
      // <a href='dishes' className="text" onClick={this.props.updateStyle ? 'flex' : 'none'}>
    return (
      <nav className="navbar">
      <img src={pomelo} className="App-logo" alt="Pomelo-logo.png" />
      <Link to='/dishes' className="text" onClick={() => this.updateStyle()}>
      {"Platillos".toUpperCase()}
      </Link>
      <Link to='/toppings' className="text" onClick={() => this.updateStyle()}>
      {"Toppings".toUpperCase()}
      </Link>
      <Link to='/drinks' className="text" onClick={() => this.updateStyle()}>
      {"Bebidas".toUpperCase()}
      </Link>
      </nav>

    )
  }
}

export default Navigation;
