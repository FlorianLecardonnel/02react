import React from 'react';
import NameListProps from '../interfaces/NameListProps'
import Task from '../interfaces/Task';
import TaskRow from './TaskRow'

const NameList: React.FC<NameListProps> = ({ tasks }) => {
    return (
      <ul>
        {tasks.map((task:Task, index:any) => (
          <>
            <TaskRow index={index} task={task}/>
          </>
        ))}
      </ul>
    );
  }
  export default NameList;