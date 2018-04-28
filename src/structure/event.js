class Event {

  // Trigger is a fn: state -> boolean.
  constructor(id,
              prompt,
              trigger,
              choices) {
    this.id = id;
    this.prompt = prompt;
    this.trigger = trigger;
    this.choices = choices;
  }

  get text() {
    return this.prompt;
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