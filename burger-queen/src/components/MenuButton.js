import React from 'react';
import './MenuButton.css';

const MenuButton = (props) => {
      return (
        <dl className="card" onClick={props.onClick}>
          <dt className="card-header">
          <h3>{props.title}</h3>
          </dt>
          <dt className="card-body">
          <p>{props.price}</p>
          </dt>
        </dl>
      )
};
export default MenuButton;
