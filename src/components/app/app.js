import React from 'react';
import classes from './app.module.css';

import Sidebar from '../sidebar/sidebar';
import Main from '../main/main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Home'
    };

    this.handleChangePage = this.handleChangePage.bind(this);
  }

  handleChangePage = page => {
    this.setState({ content: page });
  };

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.sidebarWrapper}>
          <Sidebar handleChangePage={this.handleChangePage} />
        </div>
        <div className={classes.mainWrapper}>
          <Main content={this.state.content} />
        </div>
      </div>
    );
  }
}

export default App;
