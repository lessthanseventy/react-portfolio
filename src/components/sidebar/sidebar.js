import React from 'react';
import classes from './sidebar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.iconWrapper}>
        <FontAwesomeIcon icon={faEye} className={classes.logoBackground} />
        <FontAwesomeIcon icon={faEye} className={classes.logoForeground} />
      </div>
      <ul className={classes.list}>
        <li className={classes.listItem}>Home</li>
        <li className={classes.listItem}>About</li>
        <li className={classes.listItem}>Projects</li>
        <li className={classes.listItem}>Blog</li>
      </ul>
    </div>
  );
};

export default Sidebar;
