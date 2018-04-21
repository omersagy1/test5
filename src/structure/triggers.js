const fireIsLow = (state) => { 
  return state.fire_strength < 30; 
}

const oneMinutePassed = (state) => {
  return state.seconds_passed > 60;
}
