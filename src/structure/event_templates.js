import * as t from './triggers';
import * as mutators from './mutators';
import {Event, Choice, Consequence} from './event';

// Events have:
// - id
// - text
// - trigger
// - choice[]
// - recurring
const EVENT_TEMPLATES = [
  
  {
    id: 'fire-warning',
    trigger: t.fireIsLow,
    text: 'Make sure the fire does not go out.'
  },

  {
    id: 'man-enters',
    trigger: t.secondsPassed(30),
    text: 'A man walks in.',
    choices: [
      {
        text: '"Who are you?"',
        consequence: {
          text: 'The man leaves silently.',
          effect: mutators.noOp
        }
      },
      {
        text: 'Kill him',
        consequence: {
          text: 'He\'s dead. Be careful.',
          effect: mutators.noOp
        }
      }]
  },

  {
    id: 'dampen-choice',
    trigger: t.secondsPassed(10),
    text: 'Dampen the fire?',
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
  },

  {
    id: 'fire-is-out',
    trigger: t.fireWentOut,
    text: 'The fire is dead. Watch out.'
  },

  {
    id: 'fire-stoked',
    trigger: t.fireStoked,
    text: 'The fire is roaring.'
  }

]

const makeEvent = (template) => {
  let choices;
  if (template.choices !== undefined) {
    choices = template.choices.map(makeChoice);
  }

  return new Event(template.id,
                   toArray(template.text),
                   template.trigger,
                   choices);
}

const makeChoice = (template) => {
  return new Choice(template.text,
                    makeConsequence(template.consequence));
}

const makeConsequence = (template) => {
  return new Event(
    'dummy-id', 
    toArray(template.text),
    null, null, template.effect);
}

const toArray = (x) => {
  if (Array.isArray(x)) {
    return x;
  } else {
    return [x];
  }
}

const getAllEvents = () => {
  return EVENT_TEMPLATES.map(makeEvent);
}

export {getAllEvents};
