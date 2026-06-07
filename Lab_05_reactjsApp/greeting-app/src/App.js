import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dynamic Greeting App</h1>
      <Greeting name="Alice" timeOfDay="morning" bgColor="#FFD700" />
      <Greeting name="Bob" timeOfDay="afternoon" bgColor="#90EE90" />
      <Greeting name="Charlie" timeOfDay="evening" bgColor="#87CEFA" />
    </div>
  );
}

export default App;