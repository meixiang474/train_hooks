import React, { useState, useContext } from 'react';

function App (props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}