import React, { Component } from 'react';
import Order from './Order';
import {menu} from '../menu.json';
// import {orders} from '../orders.json';

class Dishes extends Component {
    constructor() {
      super();
      this.state = {
        menu
      };
      // this.handleAddToOrder = this.handleAddToOrder.bind(this);
    }
    // handleAddToOrder(orders) {
    //   let order = {"title": "", "price": "", "value":0}
    //   this.setState = {
    //     orders
    //   }
    //   this.state({
    //     orders: [...this.state.orders, order]
    //   })
    // }
    //failed onClick
  // <dl className="card" key={i} onClick={this.props.addToOrder.bind(this)}>
    render() {
      // console.log(this.state.menu.dishes);
      const dishes = this.state.menu.dishes.map((dish, i) => {
        return (
          <dl className="card" key={i} onClick={this.addItem.bind(this, i)}>
            <dt className="card-header">
              <h3>{dish.title}</h3>
            </dt>
            <dt className="card-body">
              <p>{dish.price}</p>
            </dt>
          </dl>
        )
      });
      return (
        <section className="menuSection">
          <div className="container dishes">
              {dishes}
          </div>
          <Order/>
        </section>
      )
    }
}

export default Dishes
