import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
// import MenuButton from './components/MenuButton';
import Order from './components/Order';
import {menu} from './menu.json';

class App extends Component {
  //We can skip super() or even the whole constructor() and you can write directly state = {}
  constructor() {
    super();
    this.state = {
      menu
    }
  }
  //updateExample = () => {
    //this.setState({ object: value });
  //}
  //<Button name="Your botton action" action={this.updateExample} />

  //state = {
  //color: 'blue'
  //}
  //updateBackgroundColor = (color) => {
    //this.setState({ color: color });
  //}
  //<Button name="change to red" action={() => this.updateBackgroundColor('red')} />
  //<Button name="change to yellow" action={() => this.updateBackgroundColor('yellow')} />

  //state = {
  //color: 'blue',
  //basicColor: 'blue'
  //}
  //updateBackgroundColor = (color) => {
    //if (this.state.color === 'blue') {
    //this.setState({ color: color });
    //return;
    //} else {
    //this.setState({ color: 'blue' });
    //}
  //}
  //<Button name="change to red" action={() => this.updateBackgroundColor('red')} />
  //<Button name="change to yellow" action={() => this.updateBackgroundColor('yellow')} />


  // handleAddOrder(dish, topping, drink) {
  //   this.state({
  //     menu: [...this.state.menu, ]
  //   })
  // }

// const props = this.props; //declares props in a class kind Component

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
      <section className="menuSection col-md-8">
        <div className="container dishes">
        <div className="row mt-4">
          {dishes}
        </div>
        <div className="row mt-4">
          {toppings}
        </div>
        </div>
      </section>
      <section className="menuSection col-md-8">
        <div className="container dishes">
        <div className="row mt-4">
          {drinks}
        </div>
        </div>
      </section>
      <section>
      <Order/>
      </section>
      </div>
    );
  }
}

export default App;
