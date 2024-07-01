import React, { useRef } from 'react';

const ColorInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const changerCouleur = () => {
    if (inputRef.current) {
      inputRef.current.style.color = 'red'; // Change la couleur du texte en rouge
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
