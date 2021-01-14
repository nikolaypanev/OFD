import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Textbox from './components/article/Textbox';
import { Link } from 'react-router-dom';
import Sidebar from 'react-sidebar';


import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: MediaQueryList.matches,
      sidebarOpen: false // default state
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
          <Sidebar
          // Add sidebar content here
          // wrap items in divs
            sidebar={<b><br></br>  
              <div className="home">
                <Link style={linkStyle} to="/"> Hauptseite </Link>
              </div>
              <div className="contents">
                <Link style={linkStyle} to="/"> Inhaltsverzeichnis </Link>
              </div>
              <div className="about">
                <Link style={linkStyle} to="/"> Impressum </Link>
              </div>
            </b>}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
            >

{/* added in a narrow top ribbon when outside of the sidebar tag
            <Route path="/">
              <Link style={linkStyle} to="/"> Hauptseite </Link>
            </Route>
            <Route>
              <Link style={linkStyle} to="/"> Inhaltsverzeichnis </Link>
            </Route>
            <Route>
             <Link style={linkStyle} to="/"> Impressum </Link>
            </Route> */}
           
            <button onClick={() => this.onSetSidebarOpen(true)}>
              Open sidebar
            </button>
            
          </Sidebar>
          
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
}

const linkStyle = {
  textDecoration: "none",
  color: "black",
  marginLeft: "10px", // 10px space to the left
  marginRight: "10px"
}

export default App;