import React, { Component } from 'react';
import Order from './Order';
import {menu} from '../menu.json';

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
          <div className="container toppings" style= {this.props.display}>
              {toppings}
          </div>
      )
    }
}

export default Toppings
