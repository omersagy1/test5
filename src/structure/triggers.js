import {MilestoneType} from './milestones';

export const fireIsLow = (state) => { 
  return (state.didReachMilestone(MilestoneType.FIRE_STOKED_ONCE)
          && state.fire.strength < 30);
}

export const secondsPassed = (seconds) => {
  return ((state) => state.timeElapsedSeconds() > seconds);
}

export const oneMinutePassed = secondsPassed(60);
