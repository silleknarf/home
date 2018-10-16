import React, { Component } from 'react';
import './App.css';
import {
  ListGroup, 
  ListGroupItem } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { harmonyApiBaseUrl } from '../config';

class HarmonyItems extends Component {

  constructor(props) {
    super(props);

    this.state = { harmonyItems: [] };
  }

  componentDidMount() {
      const harmonyUrl = `${harmonyApiBaseUrl}/hubs/harmony-hub/${this.props.harmonyName}`;
      fetch(harmonyUrl)
        .then(response => response.json())
        .then(data => {
          this.setState({ harmonyItems: data[this.props.harmonyName] });
        })
  }

  onStart(harmonyItem) {
    console.log(`Starting ${this.props.harmonyName}: ${harmonyItem.label}`);
    const harmonyPostUrl = `${harmonyApiBaseUrl}/hubs/harmony-hub/${this.props.harmonyName}/${harmonyItem.slug}`;
    fetch(harmonyPostUrl, { method: "POST" });
  }

  render() {
    const harmonyItems = this.state.harmonyItems
      .map((a, index) => (
        <ListGroupItem className="App-list-item" key={index}>
          {a.label}
          <span className="App-icon">
            <FontAwesomeIcon icon="play" size="2x" onClick={() => this.onStart(a)} />
          </span>
        </ListGroupItem>));

    return (
        <ListGroup> 
          { harmonyItems }
        </ListGroup>);
  }
}

export default HarmonyItems;
