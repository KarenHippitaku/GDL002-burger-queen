import React from 'react';
import Button from './Button';

const OrderedItem = (props) => {
  // render() {
    return (
      <span className="orderedItem">
      {props.title} - ${props.price}
      <Button
      className="closeBtn"
      label="x"
      onClick={() => this.props.removeFromOrder(this.props.index)}
      />
      </span>
    )
  // }
}

export default OrderedItem
