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

class Choice {

  // Consequence is a fn that mutates the state.
  constructor(text, consequence) {
    this.text = text;
    this.consequence = consequence;
  }

}

class Milestone {

  constructor(description) {
    this.description = description;
  }

}

export {Event};