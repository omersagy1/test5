import {State} from './state';
import {ActionType} from './input';

const FRAME_LENGTH_MS = 1000 / 20;

class Game {

  constructor() {
    this.state = new State();
    this.input_queue = [];
  }

  // Initiates the game loop.
  play = () => {
    this.last_time = new Date().getTime();
    this.ticker = setInterval(this.loop, FRAME_LENGTH_MS);
  }

  // Should not be called directly. Call play() instead.
  loop = () => {
    let current_time = new Date().getTime();
    let time_elapsed_ms = current_time - this.last_time;

    this.updateState(time_elapsed_ms);
    this.processInput();
  }

  // Stops the game, but does not clear the state.
  pause = () => {
    clearInterval(this.ticker);
  }

  updateState = (time_elapsed_ms) => {
    this.state.update(time_elapsed_ms); 
  }

  queueInput = (action) => {
    this.input_queue.push(action);
  }

  processInput = () => {
    // loop through input queue and process actions.
  }
}

export {Game};