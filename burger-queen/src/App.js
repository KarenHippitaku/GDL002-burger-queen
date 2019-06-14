import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Dishes from './components/Dishes';
import Drinks from './components/Drinks';
import Toppings from './components/Toppings';
// import MenuButton from './components/MenuButton';
import Order from './components/Order';
// import {menu} from './menu.json';
// import {remove} from 'lodash';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mesa: '',
      cliente: '',
      selectedItems: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.remove = this.remove.bind(this);
  }
  addToOrder = (title, price) => {
    this.setState({
      selectedItems: [...this.state.selectedItems, {title: title, price: price}]
    })
  };

  remove = (items,index) => {
    this.setState ({
      selectedItems: [...items.slice(0,index),
        ...items.slice(index+1,items.length)]
    })
  };

  handleInput(e) {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.props.addToOrder(this.state);
    console.log(this.state);

  }
  // const [order, setOrder] = useState([]);
  //
  // const addToOrder = (item) => {
  //   let orderUpdate = order.concat(item);
  //   setOrder(() => {
  //     return orderUpdate;
  //   })
  // };
  //
  // const removeFromOrder = (index) => {
  //   let stateOrder = [...order];
  //   remove(stateOrder, (order, stateIndex) => {
  //     return stateIndex === index;
  //   })
  //   setOrder(() => {
  //     return stateOrder;
  //   })
  // };

  handleAddOrder(dish, topping, drink) {
      this.setState({
          order: [...this.state.order, ]
        })
      };

      // updateStyle = (style) => {
      //   if (this.state.style.display === 'none') {
      //     this.setState ({display:'flex'});
      //   return;
      // } else {
      //   this.setState({display: 'none'});
      // };
      //
      // const props = this.props; //declares props in a class kind Component
      // render() {
  render() {
    return (
      <div className="App">
      <Router>
        <header>
          <Navigation/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/dishes' render={(props) =>
            <Dishes {...props} addToOrder={this.addToOrder}
            order={() => <Order selectedItems={this.state.selectedItems}
            remove={this.state.remove}/>}/>
          }/>
          <Route exact path='/toppings' render={(props) =>
            <Toppings {...props} addToOrder={this.addToOrder}
            order={() => <Order selectedItems={this.state.selectedItems}
            remove={this.state.remove}/>}/>
            }/>
          <Route exact path='/drinks' render={(props) =>
            <Drinks {...props} addToOrder={this.addToOrder}
            order={() => <Order selectedItems={this.state.selectedItems}
            remove={this.state.remove}/>}/>
            }/>
        </header>
        </Router>
      </div>
    );
   }
}

export default App;
