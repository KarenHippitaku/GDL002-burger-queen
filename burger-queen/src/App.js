import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
// import MenuButton from './components/MenuButton';
import Card from './components/Card';
import {menu} from './menu.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu
    }
  }

  // handleAddOrder(dish, topping, drink) {
  //   this.state({
  //     menu: [...this.state.menu, ]
  //   })
  // }

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

    return (
      <div className="App">
      <header className="App-header">
      <Navigation/>
      </header>
      <section className="menuSection col-md-4">
        <div className="container dishes">
        <div className="row mt-4">
          {dishes}
        </div>
        <div className="row mt-4">
          {toppings}
        </div>
        </div>
      </section>
      <section className="menuSection col-md-4">
        <div className="container dishes">
        <div className="row mt-4">
          {drinks}
        </div>
        </div>
      </section>
      <section>
      <Card/>
      </section>
      </div>
    );
  }
}

export default App;
