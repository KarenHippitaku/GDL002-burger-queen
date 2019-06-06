import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Dishes from './components/Dishes';
import Drinks from './components/Drinks';
import Toppings from './components/Toppings';
// import MenuButton from './components/MenuButton';
// import Order from './components/Order';
// import {menu} from './menu.json';
// import {remove} from 'lodash';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: '',
      style: {display: 'none'},
      initialstyle: {display: 'none'}
    }
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
      this.state({
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
          <Route exact path='/dishes' component={Dishes}/>
          <Route exact path='/toppings' component={Toppings}/>
          <Route exact path='/drinks' component={Drinks}/>
        </header>
        </Router>
      </div>
    );
   }
}

export default App;
