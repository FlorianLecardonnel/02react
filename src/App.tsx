import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
// import {formatdate, formatmail} from './utils/formatStrings'
import Greetings from "./components/Greetings";

import GreetingProps from "./interfaces/GreetingProps";

import TestPassFunction from "./components/TestPassFunction";

import NameList from "./components/NameList";

import NameListProps from "./interfaces/NameListProps";

import Task from './interfaces/Task'; 
// interface GreetingProps {
//   firstname: string;
//   name: string;
// }
function App() {
  let greetObject: GreetingProps = {
    firstname: "Florian",
    name: "Lecardonnel",
  };
  let testAlertParent = (value: string) => alert(value);

  let tasksList:Task[] = [];
  tasksList.push(
    {title:"learn react",description:"so good"});
  tasksList.push(
    {title:"learn mongo db",description:"wow"});
  
  let listTask:NameListProps = { tasks:tasksList };

  return (
    <div className="App">
      <header className="App-header">
        <Greetings {...greetObject} />
        <TestPassFunction
          testAlert={(value: string) => testAlertParent(value)}
        />
        <NameList {...listTask} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
