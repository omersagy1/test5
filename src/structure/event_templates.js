import * as triggers from './triggers';
import * as mutators from './mutators';
import {Event, Choice, Consequence} from './event';

// Events have:
// - id
// - prompt
// - trigger
// - choice[]
// - recurring
const EVENT_TEMPLATES = [

  {
    id: 'first-event',
    prompt: 'Test -- first event.',
    trigger: triggers.secondsPassed(5)
  },
  
  {
    id: 'fire-warning',
    prompt: 'Make sure the fire does not go out.',
    trigger: triggers.fireIsLow
  },

  {
    id: 'man-enters',
    prompt: 'A man walks in. And walks back out.',
    trigger: triggers.secondsPassed(30)
  },

  {
    trigger: triggers.secondsPassed(10),
    prompt: 'Dampen the fire?',
    choices: [
      { 
        text: 'Yes', 
        consequence: {
          text: 'fire dampened',
          effect: mutators.dampenFire(.8)
        }
      },
      {
        text: 'No',
        consequence: {
          text: 'nothing happened',
          effect: mutators.noOp
        }
      }]
  }

]

const makeEvent = (template) => {
  let choices;
  if (template.choices !== undefined) {
    choices = template.choices.map(makeChoice);
  }
  return new Event(template.prompt,
                   template.trigger,
                   choices);
}

const makeChoice = (template) => {
  return new Choice(template.text,
                    makeConsequence(template.consequence));
}

const makeConsequence = (template) => {
  return new Consequence(template.text, template.effect);
}

const getAllEvents = () => {
  return EVENT_TEMPLATES.map(makeEvent);
}

export {getAllEvents};
