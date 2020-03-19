import React from 'react';
// import classes from './main.module.css';
import Home from './home/home';
import About from './about/about';

const Main = props => {
  console.log(props);
  if (props.content === 'Home') {
    return <Home />;
  } else {
    return <About />;
  }
};

export default Main;
