import React from 'react';
import classes from './app.module.css';

import Sidebar from '../sidebar/sidebar';
import Main from '../main/main';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.sidebarWrapper}>
        <Sidebar />
      </div>
      <div className={classes.mainWrapper}>
        <Main />
      </div>
    </div>
  );
}

export default App;
