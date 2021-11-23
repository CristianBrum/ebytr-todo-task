import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import TasksProvider from './context/TasksProvider';

import Routes from './routes';

const App = () => (
  <>
    <Header />
    <div className="todo-app">
      <TasksProvider>
        <Routes />
      </TasksProvider>
    </div>
  </>
);

export default App;
