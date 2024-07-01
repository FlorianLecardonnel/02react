import React, { useState, useEffect, useRef } from 'react';
import { mobileStyle } from '../styles/mobileStyle';

const UseRefv5: React.FC<any> = () => {

    const [count, setCount] = useState(0);
  
    const [styleUnderline, setStyleUnderline] = useState('');
  
    return (
      <div>
        <div style={mobileStyle.body}>Texte 1</div>
        <div className='webStyle'>Texte 2</div>
      </div>
    );
  }
  export default UseRefv5;