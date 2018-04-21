class Event {

  // Trigger is a fn: state -> boolean.
  constructor(prompt,
              trigger,
              choices) {
    this.prompt = prompt;
  }

}

class Choice {

  // Consequence is a fn that mutates the state.
  constructor(text, consequence) {
    this.text = text;
    this.consequence = consequence;
  }

}

EVENT_TEMPLATES = [
  {
    text: 'A man walks in and asks for three bucks.'
  },
  {
    text: 'A bird flies overhead.'
  }
];

export { Event, EVENT_TEMPLATES };