import React from 'react';

import {Game} from './structure/game.js'

class App extends React.Component {

  constructor() {
    super();
    this.game = new Game();
  }

  render() {
    return <div>hello!</div>;
  }

}


export {App};
