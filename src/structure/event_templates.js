import * as triggers from './triggers';
import {Event} from './event';

// Events have:
// - prompt
// - trigger
// - choice[]
// - recurring
const EVENT_TEMPLATES = [

  {
    prompt: 'Test -- first event.',
    trigger: triggers.secondsPassed(5)
  },
  
  {
    prompt: 'Make sure the fire does not go out.',
    trigger: triggers.fireIsLow
  },

  {
    prompt: 'A man walks in. And walks back out.',
    trigger: triggers.secondsPassed(30)
  },

]

const makeEvent = (template) => {
  return new Event(template.prompt, template.trigger);
}

const getAllEvents = () => {
  return EVENT_TEMPLATES.map(makeEvent);
}

export {getAllEvents};
