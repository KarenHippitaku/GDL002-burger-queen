import React, { Component } from 'react';
// import Order from './Order';
import {menu} from '../menu.json';
// import {orders} from '../orders.json';
// import * as handleAddOrder from '../App';
// import * as addToOrder from '../App';
import MenuButton from './MenuButton';
import './Menu.css';

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
          <MenuButton key={i} price={dish.price} title={dish.title}
          onClick={() => this.props.addToOrder(dish.title, dish.price)}/> //So i try it?
        )
      });
      return (
        <section className="menuSection">
        <div href='/dishes' className="container dishes">
        {dishes}
        </div>
          {this.props.order()}
        </section>
      )
    }
}

export default Dishes
