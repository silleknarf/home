import React, { Component } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

class OpenDeviceCommands extends Component {

  render() {
  	const deviceCommandsRoute = `/devices/${this.props.harmonyItem.slug}/commands`;
    return (
      <Link to={deviceCommandsRoute} className="nav-link">
        <span className="App-icon">
            <FontAwesomeIcon icon="arrow-right" size="2x" />
          </span>
      </Link>);
  }
}

export default OpenDeviceCommands;