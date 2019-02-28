import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import eventList from "./components/event-list.component.js";
import editList from "./components/edit-event.component.js";
import addEvent from "./components/add-event.component.js";
import { Jumbotron, Navbar, Nav, TabContainer, Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <TabContainer>
          <Navbar bg="light">
            
            <Navbar.Brand href="#home"><h1 className="App-header">Free Speech</h1></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <li className="navbar-item">
                  <Link to="#events" className="nav-link">Events</Link>
                </li>
                <li className="navbar-item">
                  <Link to="#create" className="nav-link">Create Event</Link>
                </li>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br/>
          <Route path="/events" exact component={eventList} />
          <Route path="/edit" component={editList} />
          <Route path="/create" component={addEvent} />
        </TabContainer>
      </Router>
    );
  }
}
export default App;

