import React, { Component } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { harmonyApiBaseUrl } from '../config';

class Start extends Component {

  onStart() {
    console.log(`Starting ${this.props.harmonyName}: ${harmonyItem.label}`);
    const harmonyPostUrl = `${harmonyApiBaseUrl}/hubs/harmony-hub/${this.props.harmonyName}/${this.props.harmonyItem.slug}`;
    fetch(harmonyPostUrl, { method: "POST" });
  }

  render() {
    return (
          <span className="App-icon">
            <FontAwesomeIcon icon="play" size="2x" onClick={() => this.onStart()} />
          </span>);
  }
}

export default Start;