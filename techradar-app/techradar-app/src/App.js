import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Textbox from './components/article/Textbox';
import { Link } from 'react-router-dom';
import Sidebar from 'react-sidebar';

import { Button, Card } from 'react-bootstrap'
import { Form, FormControl } from 'react-bootstrap'
import Collapsible from 'react-collapsible'

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: MediaQueryList.matches,
      sidebarOpen: false, // default state
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
            // wrap items in divs for better css reference
            sidebar={<b><br></br>

              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
              <br></br>
              
              <div className="home">
                  <Button variant="link">
                    <Link style={linkStyle} to="/"> Hauptseite </Link>
                  </Button>
              </div>
              <br></br>

              <div className="contents">
                  <Collapsible trigger={<Button className="contentsButton" variant="link"> Inhaltsverzeichnis </Button>}>
                    <div className="contentInnerClass">
                      {/*TODO: add sample content*/}    
                      <ol>
                        <li><Button><Link to="kapitel1.html">Kapitel 1</Link></Button></li>
                        <li><Button><Link to="kapitel2.html">Kapitel 2</Link></Button></li>
                        <li><Button><Link to="kapitel3.html">Kapitel 3</Link></Button></li>
                        <li><Button><Link to="kapitel4.html">Kapitel 4</Link></Button></li>
                      </ol>
                    </div>
                  </Collapsible>
              </div>

              <div className="about">
                <Card>
                  <Button variant="link">
                    <Link style={linkStyle} to="/"> Impressum </Link>
                  </Button>
                </Card>
              </div>
            </b>}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
          >

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