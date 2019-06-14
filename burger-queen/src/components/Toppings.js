import React, { Component } from 'react';
// import Order from './Order';
import {menu} from '../menu.json';
import MenuButton from './MenuButton';
import './Menu.css';

class Toppings extends Component {
    constructor() {
      super();
      this.state = {
        menu
      }
    }
    render() {
      // console.log(this.state.menu.dishes);
      const toppings = this.state.menu.toppings.map((topping, i) => {
        return (
          <MenuButton key={i} price={topping.price} title={topping.title}
          onClick={() => this.props.addToOrder(topping.title, topping.price)}/>
        )
      });
      return (
        <section className="menuSection">
        <div  href='/toppings' className="container toppings">
        {toppings}
        </div>
          {this.props.order()}
        </section>
      )
    }
}

export default Toppings
