import React from 'react';
import classes from './sidebar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Sidebar = props => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.iconWrapper}>
        <FontAwesomeIcon icon={faEye} className={classes.logoBackground} />
        <FontAwesomeIcon icon={faEye} className={classes.logoForeground} />
      </div>
      <div className={classes.list}>
        <a
          onClick={() => {
            props.handleChangePage('Home');
          }}
          className={classes.listItem}
          href='#Home'
        >
          Home
        </a>
        <a
          onClick={() => {
            props.handleChangePage('About');
          }}
          className={classes.listItem}
          href='#About'
        >
          About
        </a>
        <a className={classes.listItem} href='#Services'>
          Services
        </a>
        <a className={classes.listItem} href='#Blog'>
          Blog
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
