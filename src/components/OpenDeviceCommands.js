import React, { Component } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { harmonyApiBaseUrl } from '../config';

class OpenDeviceCommands extends Component {

  render() {
  	  const deviceCommandsRoute = `/devices/${this.props.harmonyItem.slug}/commands`
    return (
      <Link to="/devices" className="nav-link">
        <span className="App-icon">
            <FontAwesomeIcon icon="arrow-right" size="2x" />
          </span>
      </Link>);
  }
}

export default OpenDeviceCommands;