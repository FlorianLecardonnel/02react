import React from 'react';
import GreetingProps from '../interfaces/GreetingProps'

// interface GreetingProps {
//   firstname: string;
//   name: string;
// }

const Greeting: React.FC<GreetingProps> = ({ firstname,name }) => {
  return <h1>Bonjour, {firstname} {name} !</h1>;
}

export default Greeting;


