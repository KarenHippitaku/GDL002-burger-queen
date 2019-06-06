import React, { Component } from 'react';
import Order from './Order';
import {menu} from '../menu.json';
import MenuButton from './MenuButton';
import './Menu.css';

class Toppings extends Component {
    constructor() {
      super();
      this.state = {
        menu,
        style: {display: 'none'},
        initialstyle: {display: 'none'}
      }
    }
    render() {
      // console.log(this.state.menu.dishes);
      const toppings = this.state.menu.toppings.map((topping, i) => {
        return (
          <MenuButton key={i} price={topping.price} title={topping.title}/>
        )
      });
      return (
        <section className="menuSection">
        <div  href='/toppings' className="container toppings" style= {this.props.display}>
        {toppings}
        </div>
        <Order/>
        </section>
      )
    }
}

export default Toppings
