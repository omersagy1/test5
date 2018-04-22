import * as triggers from './triggers';

// Events have:
// - text
// - trigger
// - choice[]
// - recurring
EVENT_TEMPLATES = [
  
  {
    text: 'Make sure the fire does not go out.',
    trigger: triggers.fireIsLow
  },

  {
    text: 'A man walks in. And walks back out.',
    trigger: triggers.oneMinutePassed
  }

]

export {EVENT_TEMPLATES}