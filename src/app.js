import React from 'react';

import {Game} from './structure/game';
import {ActionType} from './structure/input';

import {Firebar, StokeButton} from './render/fire';
import {EventDisplay} from './render/event_display';
import {ChoiceButtonRow} from './render/choice_buttons.js';

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
      this.game.queueInput({
          type: ActionType.STOKE_FIRE
      });
    };

    let select_choice_callback = (choice_text) => {
      this.game.queueInput({
        type: ActionType.SELECT_CHOICE,
        text: choice_text
      });
    }

    return (
      <div>
        <EventDisplay events={s.event_history} />
        <Firebar fire_model={s.fire} />
        <StokeButton action_callback={stoke_callback} />
        <ChoiceButtonRow action_callback={select_choice_callback}
                         active_event={s.active_event} />
      </div>
    )
  }

}

export {App};
