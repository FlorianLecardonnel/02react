import React from "react";

const TaskRow: React.FC<any> = ({ index, task }) => {
  return (
    <div>
      <li key={index}>{task.title}</li>
      <li key={index}>{task.description}</li>
      
      <li key={index}><button onClick={modify(task.id)}>Modify</button></li>
      <li key={index}><button>Delete</button></li>
    </div>
  );
};

export default TaskRow;
