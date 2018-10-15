import React, { Component } from 'react';
import './App.css';
import {
  ListGroup, 
  ListGroupItem } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Activities extends Component {

  constructor(props) {
    super(props);

    this.state = { activities: [] };
  }

  componentDidMount() {
    const activitiesUrl = "http://localhost:8282/hubs/harmony-hub/activities";
    fetch(activitiesUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ activities: data.activities });
      })
  }

  onStartActivity(activity) {
    console.log(`Starting activity: ${activity.label}`);
    // eslint-disable-next-line 
    const activitiesPostUrl = `http://localhost:8282/hubs/harmony-hub/activities/${activity.slug}`;
    //fetch(activitiesPostUrl, { method: "POST" });
  }

  render() {
    const activitiesList = this.state.activities
      .map(a => (
        <ListGroupItem className="App-list-item" key={a.id}>
          {a.label}
          <span className="App-icon">
            <FontAwesomeIcon icon="play" size="2x" onClick={() => this.onStartActivity(a)} />
          </span>
        </ListGroupItem>));

    return (
      <ListGroup>
        { activitiesList }
      </ListGroup>);
  }
}

export default Activities;
