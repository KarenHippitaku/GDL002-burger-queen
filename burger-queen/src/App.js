import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Dishes from './components/Dishes';
// import MenuButton from './components/MenuButton';
// import Order from './components/Order';
// import {menu} from './menu.json';
import {remove} from 'lodash';

const App = (props) => {
  //We can skip super() or even the whole constructor() and you can write directly state = {}
  // constructor() {
  //   super();
  //   this.state = {
  //     menu
  //   }
  // }
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
  // render() {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    let orderUpdate = order.concat(item);
    setOrder(() => {
      return orderUpdate;
    })
  };

  const removeFromOrder = (index) => {
    let stateOrder = [...order];
    remove(stateOrder, (order, stateIndex) => {
      return stateIndex === index;
    })
    setOrder(() => {
      return stateOrder;
    })
  };

    return (
      <div className="App">
        <header>
          <Navigation/>
        </header>
        <Dishes
        order = {order}
        addToOrder = {addToOrder}
        removeFromOrder = {removeFromOrder}/>
      </div>
    );
  // }
}

export default App;
