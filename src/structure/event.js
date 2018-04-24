class Event {

  // Trigger is a fn: state -> boolean.
  constructor(prompt,
              trigger,
              choices,
              recurring) {
    this.prompt = prompt;
    this.trigger = trigger;
    this.choices = choices;
    this.recurring = recurring;
  }

}

export {Event};