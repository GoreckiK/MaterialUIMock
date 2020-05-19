import React from 'react';
import './App.css';
import MainView from "./containers/MainView";
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

function App() {
  return (
    <div className="App">
      <DndProvider backend={html5}>
        <MainView/>
      </DndProvider>
    </div>
  );
}

export default App;
