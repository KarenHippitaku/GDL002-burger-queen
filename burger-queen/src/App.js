import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {menu} from './menu.json';

class App extends Component {
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
          <dt className="cardHeader">
          <h3>{dish.title}</h3>
          </dt>
          <dt className="cardBody">
          <p>{dish.price}</p>
          </dt>
        </dl>
      )
    });

    const toppings = this.state.menu.toppings.map((topping, i) => {
      return (
        <dl className="card" key={i}>
          <dt className="cardHeader">
          <h3>{topping.title}</h3>
          </dt>
          <dt className="cardBody">
          <p>{topping.price}</p>
          </dt>
        </dl>
      )
    });

    const drinks = this.state.menu.drinks.map((drink, i) => {
      return (
        <dl className="card" key={i}>
          <dt className="cardHeader">
          <h3>{drink.title}</h3>
          </dt>
          <dt className="cardBody">
          <p>{drink.price}</p>
          </dt>
        </dl>
      )
    })

    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="text-white">
      Portable menu
      </a>
      </header>
      <section className="menuSection">
        <div className="container dishes">
        <div className="row mt-4">
          {dishes}
        </div>
        <div className="row mt-4">
          {toppings}
        </div>
        </div>
      </section>
      <section className="menuSection">
        <div className="container dishes">
        <div className="row mt-4">
          {drinks}
        </div>
        </div>
      </section>
      </div>
    );
  }
}

export default App;
