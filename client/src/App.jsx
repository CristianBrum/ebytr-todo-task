import React, { } from 'react';
import './App.css';
import Header from './components/Header';

import Routes from './routes';

const App = () => (
  <>
    <div>
      <Header />
      <div className="todo-app">
        <Routes />
      </div>
    </div>
  </>
);

export default App;
