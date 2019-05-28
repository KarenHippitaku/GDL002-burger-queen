import React, {Component} from 'react';
import OrderedItem from './OrderedItem';
import Button from './Button';
import './Order.css';

class Order extends Component {
  constructor() {
    super();
    this.state = {
      mesa: '',
      cliente: '',
      orden: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
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
  render() {
    return (
      <div className="order">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
            type="text"
            name="mesa"
            className="form-control"
            placeholder="Mesa"
            onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <input
            type="text"
            name="cliente"
            className="form-control"
            placeholder="Cliente"
            onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <div
            type="text"
            name="orden"
            className="form-control"
            >
            <OrderedItem/>
            </div>
          </div>
          <Button className="btn orderBtn" label="Listo"/>
        </form>
      </div>
    )
  }
}

export default Order
