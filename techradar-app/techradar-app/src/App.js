import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Textbox from './components/article/Textbox';
import sidebar from 'react-sidebar';

import './App.css';
import Sidebar from 'react-sidebar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
        <Router>
        <div className="App">
          <div className="headerRibbon">
          <Sidebar
            sidebar={<b>Sidebar content</b>}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
          >
            <button onClick={() => this.onSetSidebarOpen(true)}>
              Open sidebar
            </button>
          </Sidebar>
            <Header />
            <header className="App-header">
              <Textbox />
            </header>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
