import React, { Component } from 'react';
import './App.css';
import {
  ListGroup, 
  ListGroupItem } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class HarmonyItems extends Component {

  constructor(props) {
    super(props);

    this.state = { harmonyItems: [] };
  }

  componentDidMount() {
      const harmonyUrl = `http://localhost:8282/hubs/harmony-hub/${this.props.harmonyName}`;
      fetch(harmonyUrl)
        .then(response => response.json())
        .then(data => {
          this.setState({ harmonyItems: data[this.props.harmonyName] });
        })
  }

  onStart(harmonyItem) {
    console.log(`Starting ${this.props.harmonyName}: ${harmonyItem.label}`);
    // eslint-disable-next-line 
    const harmonyPostUrl = `http://localhost:8282/hubs/harmony-hub/${this.props.harmonyName}/${harmonyItem.slug}`;
    //fetch(harmonyPostUrl, { method: "POST" });
  }

  render() {
    const harmonyItems = this.state.harmonyItems
      .map(a => (
        <ListGroupItem className="App-list-item" key={a.id}>
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
