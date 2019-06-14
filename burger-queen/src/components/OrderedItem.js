import React from 'react';
import Button from './Button';
import './OrderedItem.css';

const OrderedItem = (props) => {

  // render() {
    return (
      <span className="orderedItem">
      <p>{props.title} - {props.price}</p>
      <Button
      className="closeBtn"
      label="x"
      onClick={() => this.props.remove(this.props.index)}
      />
      </span>
    )
  // }
}

export default OrderedItem
