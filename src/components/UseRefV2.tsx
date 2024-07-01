import React, { useRef } from 'react';

const ColorInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const changerCouleur = () => {
    if (inputRef.current) {
      inputRef.current.className = 'blueInput'; // changer la couleur du fond en bleu avec la classname deéfini dans "App.css"
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={changerCouleur}>Changer la couleur</button>
    </div>
  );
};

export default ColorInput;
