import {Fire} from './fire';
import {ActionType} from './input';
import {MilestoneType} from './milestones';

import {getAllEvents} from './event_templates';

class State {

  constructor() {
    this.possible_events = getAllEvents();
    this.start_time_ms = null;

    this.event_history = [];
    this.resources = [];
    this.milestones = new Set();

    this.fire = new Fire();
  }

  start = (start_time_ms) => {
    this.start_time_ms = start_time_ms;
  }

  timeElapsedSeconds = () => {
    let rtn = (new Date().getTime() - this.start_time_ms) / 1000;
    return rtn;
  }

  update = (time_elapsed_ms) => {
    this.fire.update(time_elapsed_ms);
    this.checkEventTriggers();
  }

  processAction = (action) => {
    if (action === ActionType.STOKE_FIRE) {
      this.fire.stoke();
      this.milestones.add(MilestoneType.FIRE_STOKED_ONCE);
    }
  }

  checkEventTriggers = () => {
    let events_run = [];
    for (let e of this.possible_events) {
      if (e.trigger(this)) {
        this.runEvent(e);
        events_run.push(e);
      }
    }
    // Assumes that events can only run once.
    this.possible_events = (
      this.possible_events.filter((e) => {
        return !events_run.includes(e);
    }));
  }

  runEvent = (event) => {
    this.event_history.push(event);
  }

  milestoneReached = (milestone) => {
    return this.milestones.has(milestone);
  }

}

export {State};