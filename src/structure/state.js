class State {
  constructor() {
    this.event_history = [];
    this.fire = new Fire();
    this.resources = [];
    this.milestones = [];
  }

  update = () => {

  }
}

const MAX_FIRE_STRENGTH = 100;
const MIN_FIRE_STRENGTH = 0;
// This means the fire loses 5% strength per second.
const FIRE_DEPLETION_FRAC_PER_SECOND = .05;

class Fire {
  constructor() {
    this.strength = MIN_FIRE_STRENGTH;
  }
}

class Resource {
  constructor(name) {
    this.name = name;
    this.val = 0;
  }
}

export {State}