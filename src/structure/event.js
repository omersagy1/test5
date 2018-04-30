class Event {

  // 'trigger' is a fn: state -> boolean.
  // 'text' is an array of strings.
  // 'effect' is a fn that accepts
  // the game state and mutates it.
  constructor(id,
              text?,
              trigger?,
              choices?,
              effect?) {
    this.id = id;
    this.text = text;
    this.trigger = trigger;
    this.choices = choices;
    this.effect = effect;
  }

  hasChoices = () => {
    return (!!this.choices
            && this.choices.length > 0);
  }

  hasEffect = () => {
    return !!this.effect;
  }

  getDisplayMessages = () => {
    return this.text.slice();
  }

  execute = (state) => {
    this.effect(state);
  }

}

class Choice {

  constructor(text, consequence_event) {
    this.text = text;
    this.consequence_event = consequence_event;
  }

}

export {Event, Choice};