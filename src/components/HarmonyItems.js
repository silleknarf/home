import React, { Component } from 'react';
import './App.css';
import {
  ListGroup, 
  ListGroupItem } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import { harmonyApiBaseUrl } from '../config';

class HarmonyItems extends Component {

  constructor(props) {
    super(props);

    this.state = { harmonyItems: [] };
  }

  componentDidMount() {
    const harmonyUrl = this.props.harmonyRouteProvider
        ? this.props.harmonyRouteProvider(this.props)  
        : `${harmonyApiBaseUrl}/hubs/harmony-hub/${this.props.harmonyName}`;
    fetch(harmonyUrl)
      .then(response => response.json())
      .then(data => {
          this.setState({ harmonyItems: data[this.props.harmonyName] });
        })
  }

  render() {
    const harmonyItems = this.state.harmonyItems
      .map((hi, index) => {
        const rowControl = React.cloneElement(
          this.props.rowControl,
          { 
            harmonyItem: hi,
            harmonyName: this.props.harmonyName 
          });
        return (
          <ListGroupItem className="App-list-item" key={index}>
            {hi.label}
            { rowControl }
          </ListGroupItem>);
      });

    return (
      <ListGroup> 
        { harmonyItems }
      </ListGroup>);
  }
}

export default HarmonyItems;