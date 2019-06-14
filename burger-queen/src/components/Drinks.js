import React, { Component } from 'react';
// import Order from './Order';
import {menu} from '../menu.json';
import MenuButton from './MenuButton';
import './Menu.css';

class Drinks extends Component {
    constructor() {
      super();
      this.state = {
        menu
      }
    }
    render() {
      // console.log(this.state.menu.dishes);
      const drinks = this.state.menu.drinks.map((drink, i) => {
        return (
          <MenuButton key={i} price={drink.price} title={drink.title}
          onClick={() => this.props.addToOrder(drink.title, drink.price)}/>
        )
      });
      return (
        <section className="menuSection">
        <div  href='/drinks' className="container drinks">
        {drinks}
        </div>
          {this.props.order()}
        </section>
      )
    }
}

export default Drinks
