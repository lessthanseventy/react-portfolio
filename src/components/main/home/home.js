import React from 'react';
import classes from './home.module.css';
import Terminal from 'terminal-in-react';

const Home = () => {
  const prompt = '~/projects/lessthanseventy\u00A0';

  return (
    <div className={classes.terminal}>
      <Terminal
        style={{
          height: '100%',
          width: '100%',
          margin: '0 auto'
        }}
        hideTopBar={true}
        allowTabs={false}
        color='rgb(255, 204, 0)'
        promptSymbol={prompt}
        prompt='rgb(148, 84, 50)'
        msg='Welcome. Enter help for a list of available comands'
      />
    </div>
  );
};

export default Home;
