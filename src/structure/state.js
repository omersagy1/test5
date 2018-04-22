import {Fire} from './fire';

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
}

class Resource {
  constructor(name) {
    this.name = name;
    this.val = 0;
  }
}

export {State};