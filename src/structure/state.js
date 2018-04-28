import {Fire} from './fire';
import {ActionType} from './input';
import {MilestoneType} from './milestones';

import {getAllEvents} from './event_templates';

class State {

  constructor() {
    this.possible_events = getAllEvents();
    this.start_time_ms = null;

    this.event_history = [];
    this.action_history = [];
    this.resources = [];
    this.milestones = new Set();

    this.active_choice = null;

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
    if (action.type === ActionType.STOKE_FIRE) {
      this.fire.stoke();
      this.milestones.add(MilestoneType.FIRE_STOKED_ONCE);
    } else if (action.type === ActionType.SELECT_CHOICE) {
      this.makeChoice(action.text);
    }
    this.action_history.push(action);
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
    if (event.hasChoices()) {
      this.choiceRequired(event);
    }
  }

  choiceRequired = (event) => {
    this.active_event = event;
  }

  makeChoice = (choice_text) => {
    for (let choice of this.active_event.choices) {
      if (choice.text === choice_text) {
        // TODO: enforce the consequence and the event
        // satisfying the interface needed to display
        // text in the event_history. Also consider
        // renaming event_history.
        this.event_history.push(choice.consequence);
        choice.consequence.execute(this);
      }
    }
    this.active_event = null;
  }

  didReachMilestone = (milestone) => {
    return this.milestones.has(milestone);
  }

  actionPerformed = (action_type) => {
    let types = this.action_history.map((a) => a.type);
    return types.includes(action_type);
  }

}

export {State};
