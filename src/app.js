import React from 'react';

import {Game} from './structure/game';

import {Firebar, StokeButton} from './render/fire';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      game: new Game()
    }
  }

  componentDidMount() {
    this.state.game.play();
  }

  render() {
    let s = this.state.game.state;
    console.log(s);
    return (
      <div>
        <Firebar fire_model={s.fire} />
        <StokeButton />
      </div>
    )
  }

}

export {App};
