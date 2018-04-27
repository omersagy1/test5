import React from 'react';

import {Game} from './structure/game';
import * as input from './structure/input';

import {Firebar, StokeButton} from './render/fire';
import {EventDisplay} from './render/event_display';
import {ChoiceButtonRow} from './render/choice_buttons.js';

import './app.css';

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

    return (
      <div className="main-screen">
        <EventDisplay 
          events={s.event_history} />
        <Firebar 
          fire_model={s.fire} />
        <StokeButton 
          action_callback={input.stokeCallback(this.game)} />
        <ChoiceButtonRow 
          action_callback={input.selectChoiceCallback(this.game)}
          active_event={s.active_event} />
      </div>
    )
  }

}

export {App};
