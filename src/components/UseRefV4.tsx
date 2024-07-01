import React, { useState, useEffect, useRef } from 'react';
import { myStylesReact } from '../styles/myStylesReact';

const UseRefv4: React.FC<any> = () => {

  const [count, setCount] = useState(0);

  const [styleUnderline, setStyleUnderline] = useState('');

  return (
    <div>
      <div style={myStylesReact.exampleStyle}>Texte 1</div>
      <div style={myStylesReact.container}>Texte 2</div>
      <button onClick={() => setStyleUnderline('')}>No Underline</button>
      <button onClick={() => setStyleUnderline('stateColor')}>Underline</button>
    </div>
  );
}
export default UseRefv4;