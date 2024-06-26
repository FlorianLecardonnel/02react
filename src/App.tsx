import React, { useState } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
// import {formatdate, formatmail} from './utils/formatStrings'
import Greetings from "./components/Greetings";

import GreetingProps from "./interfaces/GreetingProps";
import Counter from "./components/Counter";

import TestPassFunction from "./components/TestPassFunction";

import NameList from "./components/NameList";

import NameListProps from "./interfaces/NameListProps";

import Task from "./interfaces/Task";
// import IPost from "./interfaces/Post";
import Post from "./components/Post";

import ChatRoom from "./components/ChatRoom";

import CalculTva from "./components/CalculTva";



function App() {
  // Définition de l'objet pour les props de Greetings
  let greetObject: GreetingProps = {
    firstname: "Florian",
    name: "Lecardonnel",
  };

  // Fonction de test pour l'alerte, passée en tant que prop à un composant enfant
  let testAlertParent = (value: string) => alert(value);

  // Initialisation de la liste des tâches
  let tasksList: Task[] = [];
  tasksList.push({ title: "learn react", description: "so good" });
  tasksList.push({ title: "learn mongo db", description: "wow" });

  // Création de l'objet pour les props de NameList
  let listTask: NameListProps = { tasks: tasksList };

  // Utilisation de useState pour gérer l'état de l'identifiant du post
  const [idPostState, setIdPostState] = useState("1");

  // Fonction de gestion du changement de l'identifiant du post
  const handleChange = (value: string) => {
    setIdPostState(value);
  };
  const [roomId, setRoomId] = useState("general");

  return (
    <div className="App">
      <header className="App-header">
        <CalculTva/>
        {/* Champ de saisie pour changer l'identifiant du post */}
        <input
          type="text"
          value={idPostState}
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        {/* Composant Post avec l'identifiant passé en prop */}
        <Post postid={idPostState} />
        {/* Composant Counter */}
        <Counter />
        {/* Composant Greetings avec des props déstructurées */}
        <Greetings {...greetObject} />
        {/* Un autre composant Post sans props, probablement à supprimer */}
        <Post />
        {/* Composant TestPassFunction avec une fonction passée en prop */}
        <TestPassFunction
          testAlert={(value: string) => testAlertParent(value)}
        />
        {/* Composant NameList avec des tâches passées en props */}
        <NameList {...listTask} />
        <label>
          Choose the chat room:{" "}
          <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
            <option value="general">general</option>
            <option value="travel">travel</option>
            <option value="music">music</option>
          </select>
        </label>

        <ChatRoom roomId={roomId} />
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
