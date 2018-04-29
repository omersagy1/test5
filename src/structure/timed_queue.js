class TimedQueue {

  constructor(default_interval_ms) {
    this.default_interval = default_interval_ms;
    this.queue = [];
    this.curr_time = 0;
  }

  incrementTime = (time_ms) => {
    this.curr_time += time_ms;
  }

  readyToPop = () => {
    return (this.length > 0
            && this.default_interval >= this.curr_time);
  }

  pop = () => {
    this.curr_time = 0;
    return this.queue.pop();
  }

}

export {TimedQueue};