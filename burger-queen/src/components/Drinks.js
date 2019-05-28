import React, { Component } from 'react';
import Order from './Order';
import {menu} from '../menu.json';

class Drinks extends Component {
    constructor() {
      super();
      this.state = {
        menu
      }
    }
    render() {
      // console.log(this.state.menu.dishes);
      const drinks = this.state.menu.dishes.map((drink, i) => {
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
      });
      return (
        <section className="menuSection col-md-8">
          <div className="container drinks">
            <div className="row mt-4">
              {drinks}
            </div>
          </div>
          <Order/>
        </section>
      )
    }
}

export default Drinks
