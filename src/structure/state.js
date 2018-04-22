import {Fire} from './fire';
import {ActionType} from './input';

class State {
  constructor() {
    this.event_history = [];
    this.resources = [];
    this.milestones = [];

    this.fire = new Fire();
  }

  update = (time_elapsed_ms) => {
    this.fire.update(time_elapsed_ms);
  }

  processAction = (action) => {
    if (action === ActionType.STOKE_FIRE) {
      console.log('STOKING');
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