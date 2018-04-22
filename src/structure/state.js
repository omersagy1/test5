import {Fire} from './fire';
import {ActionType} from './input';

import {getEvent} from './event_templates';

class State {

  constructor() {
    this.event_history = [];
    this.resources = [];
    this.milestones = [];

    this.fire = new Fire();
    this.event_history.push(getEvent());
    this.event_history.push(getEvent());
  }

  update = (time_elapsed_ms) => {
    this.fire.update(time_elapsed_ms);
  }

  processAction = (action) => {
    if (action === ActionType.STOKE_FIRE) {
      this.fire.stoke();
    }
  }

}

class Resource {
  constructor(name) {
    this.name = name;
    this.val = 0;
  }
}

export {State};