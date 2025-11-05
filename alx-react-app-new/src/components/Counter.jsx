import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Counter Application</h2>
      <p style={{ fontSize: '1.5em' }}>Current Count: {count}</p>
      <div style={{ marginTop: '10px' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{ marginRight: '5px', padding: '10px', fontSize: '1em' }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ marginRight: '5px', padding: '10px', fontSize: '1em' }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ padding: '10px', fontSize: '1em' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
