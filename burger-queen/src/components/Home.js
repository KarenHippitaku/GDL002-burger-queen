import React from 'react';
import pomelo from './img/pomelo-02.png'
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <img src={pomelo} className="homeLogo" alt="Pomelo-logo.png"/>
    </div>
  )
};

export default Home;
