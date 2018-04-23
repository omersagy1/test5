const fireIsLow = (state) => { 
  return state.fire.strength < 30; 
}

const oneMinutePassed = (state) => {
  return state.timeElapsedSeconds() > 60;
}
