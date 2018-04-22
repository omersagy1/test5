import React from 'react';

const EventDisplay = ({events}) => {
  const lines = events.map((e) => e.prompt);
  const line_divs = lines.map((l) => <LineDisplay line={l} />);
  return (
    <div>
      {line_divs}
    </div>
  );
}

const LineDisplay = ({line}) => {
  return <div>{line}</div>;
}

export {EventDisplay};