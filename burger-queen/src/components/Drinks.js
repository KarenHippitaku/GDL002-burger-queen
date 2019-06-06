import React, { Component } from 'react';
import Order from './Order';
import {menu} from '../menu.json';
import MenuButton from './MenuButton';
import './Menu.css';

class Drinks extends Component {
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
      const drinks = this.state.menu.drinks.map((drink, i) => {
        return (
          <MenuButton key={i} price={drink.price} title={drink.title}/>
        )
      });
      return (
        <section className="menuSection">
        <div  href='/drinks' className="container drinks" style= {this.props.display}>
        {drinks}
        </div>
        <Order/>
        </section>
      )
    }
}

export default Drinks
