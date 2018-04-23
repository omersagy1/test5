import {Fire} from './fire';
import {ActionType} from './input';

import {getAllEvents} from './event_templates';

class State {

  constructor() {
    this.event_history = [];
    this.resources = [];
    this.milestones = [];
    this.possible_events = getAllEvents();
    this.start_time_ms = null;

    this.fire = new Fire();
  }

  start = (start_time_ms) => {
    this.start_time_ms = start_time_ms;
  }

  timeElapsedSeconds = () => {
    return (new Date().getTime() - this.start_time) / 1000;
  }

  update = (time_elapsed_ms) => {
    this.fire.update(time_elapsed_ms);
    this.checkEventTriggers();
  }

  processAction = (action) => {
    if (action === ActionType.STOKE_FIRE) {
      this.fire.stoke();
    }
  }

  checkEventTriggers = () => {
    events_run = [];
    for (let e of this.possible_events) {
      if (e.trigger(this)) {
        this.runEvent(e);
        this.events_run.push(e);
      }
    }
    // Assumes that events can only run once.
    this.possible_events = (
      this.possible_events.filter((e) => {
        return !events_run.includes(e));
    });
  }

}

class Resource {
  constructor(name) {
    this.name = name;
    this.val = 0;
  }
}

export {State};