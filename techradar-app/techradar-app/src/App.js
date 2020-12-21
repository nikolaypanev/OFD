import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="headerRibbon">
          <Header />
          <header className="App-header">
            <p>
              Hello World!
            </p>
          </header>
        </div>
      </div>
    </Router>
  );
}

export default App;
