import React from 'react';
import classes from './main.module.css';
import powerlineImage from './prompt.png';

const Main = () => {
  return (
    <div className={classes.terminal}>
      <div className={classes.promptWrapper}>
        <div className={classes.prompt}>
          {'  ~/projects/lessthanseventy'}
          <img className={classes.powerline} src={powerlineImage} alt=''></img>
        </div>
        <input className={classes.input} type='text'></input>
      </div>
    </div>
  );
};

export default Main;
