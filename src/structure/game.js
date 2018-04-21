class Game {

  constructor() {
    this.state = new State();
  }

}


class State {

  constructor() {
    this.event_history = [];
    this.fire_level = MIN_FIRE_LEVEL;
    this.resources = [];
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

export {Game};