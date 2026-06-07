import React from 'react';

function Greeting({ name, timeOfDay, bgColor }) {
  let greetingMessage;

  if (timeOfDay === 'morning') {
    greetingMessage = 'Good Morning';
  } else if (timeOfDay === 'afternoon') {
    greetingMessage = 'Good Afternoon';
  } else if (timeOfDay === 'evening') {
    greetingMessage = 'Good Evening';
  } else {
    greetingMessage = 'Hello';
  }

  return (
    <div style={{ backgroundColor: bgColor || '#f0f0f0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
      {greetingMessage}, {name}!
    </div>
  );
}

export default Greeting;