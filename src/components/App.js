import React, { Component } from 'react';
import HarmonyItems from "./HarmonyItems";
import Status from "./Status";
import Start from "./Start";
import OpenDeviceCommands from "./OpenDeviceCommands";
import './App.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
import { Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPowerOff, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { harmonyApiBaseUrl } from '../config';

library.add(faPlay);
library.add(faPowerOff);
library.add(faArrowRight)

class App extends Component {

  render() {
    const start = <Start />;
    const openDeviceCommands = <OpenDeviceCommands />;
    
    const activities = () => <HarmonyItems harmonyName="activities" rowControl={start}></HarmonyItems>;
    const devices = () => <HarmonyItems harmonyName="devices" rowControl={openDeviceCommands}></HarmonyItems>;
    const commands = () => <HarmonyItems harmonyName="commands" rowControl={start}></HarmonyItems>;
    const deviceCommandsHarmonyRouteProvider = (props) => `${harmonyApiBaseUrl}/hubs/harmony-hub/devices/${props.match.params.deviceSlug}/commands`;
    const deviceCommands = (props) => (
        <HarmonyItems harmonyName="commands" 
                      rowControl={start} 
                      harmonyRouteProvider={deviceCommandsHarmonyRouteProvider}
                      { ...props }>
        </HarmonyItems>);
    return (
      <div className="App">
        <Navbar className="App-nav" expand="md">
          <NavbarBrand>
            <span className="App-title">Home</span><Status />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem className="App-nav-item">
              <Link to="/activities" className="nav-link">Activities</Link>
            </NavItem>
            <NavItem className="App-nav-item">
              <Link to="/devices" className="nav-link">Devices</Link>
            </NavItem>
            <NavItem className="App-nav-item">
              <Link to="/commands" className="nav-link">Commands</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Route exact path='/' component={activities} />
        <Route exact path='/activities' component={activities} />
        <Route exact path='/devices' component={devices} />
        <Route exact path='/commands' component={commands} />
        <Route path='/devices/:deviceSlug/commands' component={deviceCommands} />
      </div>
    );
  }
}

export default App;