import React, { Component } from 'react';
import Activities from "./Activities";
import Devices from "./Devices";
import './App.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="App-nav" expand="md">
          <NavbarBrand>
            Home
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem className="App-nav-item">
              <Link to="/activities" className="nav-link">Activities</Link>
            </NavItem>
            <NavItem className="App-nav-item">
              <Link to="/devices" className="nav-link">Devices</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Activities} />
          <Route exact path='/activities' component={Activities} />
          <Route exact path='/devices' component={Devices} />
        </Switch>
      </div>
    );
  }
}

export default App;
