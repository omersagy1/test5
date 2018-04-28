import React from 'react';

const MAX_NUM_LINES = 10;

const EventDisplay = ({events}) => {
  const lines = events.map((e) => e.text).reverse();

  const line_divs = [];
  for (let [i, l] of lines.entries()) {
    let opacity = (MAX_NUM_LINES - i) / MAX_NUM_LINES ;
    line_divs.push(<LineDisplay line={l}
                                key={l}
                                opacity={opacity} />);
  }

  return <div>{line_divs}</div>;
}

const LineDisplay = ({line, opacity}) => {
  const style = {
    opacity: opacity
  };
  return <div style={style}>{line}</div>;
}

export {EventDisplay};