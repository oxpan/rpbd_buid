import React, { useState } from 'react';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    
  };

  return (
    <div>
      <button onClick={increment}>Добавить адрес</button>
      <input type="text" size="40"></input>
      {/* <p><textarea row="10" cols="20" name="text"></textarea></p> */}
      {/* <p>You've pressed the button {counter} times.</p> */}
    </div>
  );
};
