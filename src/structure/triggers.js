import {MilestoneType} from './milestones';

// Higher order triggers that produce other triggers.

export const secondsPassed = (seconds) => {
  return ((state) => state.timeElapsedSeconds() > seconds);
}

export const eventOccured = (event) => {
  return ((state) => state.event_history.includes(event));
}


export const actionPerformed = (action) => {
  return ((state) => state.action_history.includes(action));
}

// Triggers that accept a state.

export const fireIsLow = (state) => { 
  return (state.milestoneReached(MilestoneType.FIRE_STOKED_ONCE)
          && state.fire.strength < 30);
}

export const oneMinutePassed = secondsPassed(60);


