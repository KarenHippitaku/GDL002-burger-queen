import React, {Component} from 'react';
import Button from './Button';

class Order extends Component {
  constructor() {
    super();
    this.state = {
      mesa: '',
      cliente: ''
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
            <table
            type="text"
            name="orden"
            className="form-control"
            >
            </table>
          </div>
          <Button title="Listo"/>
        </form>
      </div>
    )
  }
}

export default Order
