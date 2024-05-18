'use client';

import { useState } from 'react';

const Counter = ({ users }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter</h1>
      <p>
        There are <b>{users.length}</b> in the Oasis
      </p>
      <p>Click the button to add a number</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </>
  );
};

export default Counter;
