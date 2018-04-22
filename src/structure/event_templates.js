import * as triggers from './triggers';
import {Event} from './event';

// Events have:
// - text
// - trigger
// - choice[]
// - recurring
const EVENT_TEMPLATES = [
  
  {
    text: 'Make sure the fire does not go out.',
    trigger: triggers.fireIsLow
  },

  {
    text: 'A man walks in. And walks back out.',
    trigger: triggers.oneMinutePassed
  }

]

const getEvent = () => {
  return makeEvent(EVENT_TEMPLATES[0]);
}

const makeEvent = (template) => {
  return new Event(template.text, template.trigger);
}

export {getEvent};
