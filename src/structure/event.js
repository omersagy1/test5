class Event {

  // Trigger is a fn: state -> boolean.
  constructor(id,
              text,
              trigger,
              choices) {
    this.id = id;
    this.text = text;
    this.trigger = trigger;
    this.choices = choices;
  }

  hasChoices = () => {
    return (this.choices !== undefined
            && this.choices.length > 0);
  }

}

class Choice {

  constructor(text, consequence) {
    this.text = text;
    this.consequence = consequence;
  }

}


class Consequence {

  // effect is a fn that accepts
  // the game state and mutates it.
  constructor(text, effect?) {
    this.text = text;
    this.effect = effect;
  }

  execute = (state) => {
    this.effect(state);
  }

}

export {Event, Choice, Consequence};