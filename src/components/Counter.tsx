import React, { useState, useEffect} from 'react';
import Task from '../interfaces/Task'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  // exemple avec tack et modification des valeurs de l'objet 
  const task: Task = { "title": "learn react", "description": "top" };
  const [taskState, setTaskState] = useState(task);

  const handleChange = (attribut: string, value: string) => {
      setTaskState({ ...taskState, [attribut]: value })
  }
  useEffect(() => {
    console.log('Count value changed');
  }, [count]);
  
  return (
    <>
    <div><p>Count: {count}</p><button onClick={() => setCount(count + 1)}>Increment</button></div>
    <div>
        <input type="text" value={taskState.title} 
        onChange={(e) => handleChange("title", e.target.value)}></input><br />
        <textarea rows= {5} value={taskState.description} 
        onChange={(e) => handleChange("description", e.target.value)}></textarea>
        <p>Count: {count}</p><button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    </>
  );
}

export default Counter;