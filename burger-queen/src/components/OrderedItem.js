import React from 'react';
import Button from './Button';

const OrderedItem = (props) => {

//   const remove = (items,index) => {
//   return [...items.slice(0,index),
//           ...items.slice(index+1,items.length)];
// };
  // render() {
    return (
      <span className="orderedItem">
      {props.title} - ${props.price}
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
