import React from 'react';
import {menu} from '../menu.json';

class MenuButton extends React.Component {
  constructor() {
    super();
    this.state = {
      menu
    }
  }
  render() {
    // console.log(this.state.menu.dishes);
    const dishes = this.state.menu.dishes.map((dish, i) => {
      return (
        <dl className="card" key={i}>
          <dt className="card-header">
          <h3>{dish.title}</h3>
          </dt>
          <dt className="card-body">
          <p>{dish.price}</p>
          </dt>
        </dl>
      )
    });

    const toppings = this.state.menu.toppings.map((topping, i) => {
      return (
        <dl className="card" key={i}>
          <dt className="card-header">
          <h3>{topping.title}</h3>
          </dt>
          <dt className="card-body">
          <p>{topping.price}</p>
          </dt>
        </dl>
      )
    });

    const drinks = this.state.menu.drinks.map((drink, i) => {
      return (
        <dl className="card" key={i}>
          <dt className="card-header">
          <h3>{drink.title}</h3>
          </dt>
          <dt className="card-body">
          <p>{drink.price}</p>
          </dt>
        </dl>
      )
    })
  }
}

export default MenuButton
