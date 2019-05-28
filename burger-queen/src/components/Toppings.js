import React, { Component } from 'react';
import Order from './Order';
import {menu} from '../menu.json';

class Toppings extends Component {
    constructor() {
      super();
      this.state = {
        menu
      }
    }
    render() {
      // console.log(this.state.menu.dishes);
      const toppings = this.state.menu.dishes.map((topping, i) => {
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
      return (
        <section className="menuSection col-md-8">
          <div className="container toppings">
            <div className="row mt-4">
              {toppings}
            </div>
          </div>
          <Order/>
        </section>
      )
    }
}

export default Toppings
