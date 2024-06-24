import React from 'react';

// interface GreetingProps {
//   firstname: string;
//   name: string;
// }

const TestPassFunction: React.FC<any> = ({ testAlert }) => {
  return <div>
            <h1>Bonjour!</h1> <button onClick={() =>testAlert('Bonjour Florian!')}>Bouton Alert</button>
        </div>;
}

export default TestPassFunction;

