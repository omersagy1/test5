import React from 'react';

import {Game} from './structure/game'

class App extends React.Component {

  constructor() {
    super();
    this.game = new Game();
  }

  componentDidMount() {
    this.game.play();
  }

  render() {
    return <div>hello!</div>;
  }

}


export {App};
