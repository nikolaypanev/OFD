import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Textbox from './components/article/Textbox';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="headerRibbon">
          <Header />
          <header className="App-header">
            <Textbox />
          </header>
        </div>
      </div>
    </Router>
  );
}

export default App;
