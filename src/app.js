import React from 'react';

import {Game} from './structure/game';
import {ActionType} from './structure/input';

import {Firebar, StokeButton} from './render/fire';
import {EventDisplay} from './render/event_display';

import "./app.css";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      // Modify the heartbeat to rerender.
      heartbeat: false
    }

    this.game = new Game(this.triggerRender);
  }

  triggerRender = () => {
    this.setState({heartbeat: !this.state.heartbeat});
  }

  componentDidMount() {
    this.game.play();
  }

  render() {
    let s = this.game.state;

    let stoke_callback = () => {
      this.game.queueInput(ActionType.STOKE_FIRE);
    };

    return (
      <div className="display-container">

        <div className="text-display">
          <EventDisplay events={s.event_history} />
        </div>

        <div className="interactive-display">
          <Firebar fire_model={s.fire} />
          <StokeButton action_callback={stoke_callback} />
        </div>

      </div>
    )
  }

}

export {App};
