import React, { Component } from 'react';
import Order from './Order';
import {menu} from '../menu.json';

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
          <div className="container drinks" style= {this.props.display}>
              {drinks}
            </div>
          </div>
          <Order/>
        </section>
      )
    }
}

export default Drinks
