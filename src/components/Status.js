import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import { harmonyApiBaseUrl } from '../config';

class Status extends Component {

  constructor(props) {
    super(props);

    this.state = { off: true };
  }

  componentDidMount() {
      const harmonyUrl = `${harmonyApiBaseUrl}/hubs/harmony-hub/status`;
      fetch(harmonyUrl)
        .then(response => response.json())
        .then(data => {
            this.setState({ 
              off: data.off,
              currentActivity: data.current_activity.label
            });
        })
  }

  render() {
    const colour = this.state.off ? "danger" : "success";
    return (
        <span> 
            <Badge color={colour}> Harmony Hub: { this.state.off ? "Off" : "On"} </Badge>
            { this.state.currentActivity && <Badge color="primary">Activity: { this.state.currentActivity } </Badge> }
        </span>);
  }
}

export default Status;
