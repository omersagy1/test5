class State {
  constructor() {
    this.event_history = [];
    this.fire_strength = MIN_FIRE_STRENGTH;
    this.resources = [];
    this.milestones = [];
  }
}

const MAX_FIRE_STRENGTH = 100;
const MIN_FIRE_STRENGTH = 0;
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