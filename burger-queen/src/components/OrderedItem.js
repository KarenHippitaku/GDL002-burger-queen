import React, {Component} from 'react';
import Button from './Button';

class OrderedItem extends Component {
  render() {
    return (
      <span
      className="orderedItem"
      onClick={() => this.props.removeItem(this.props.index)}>
      {this.props.title} - ${this.props.price}
      <Button className="closeBtn" label="x"/>
      </span>
    )
  }
}

export default OrderedItem
