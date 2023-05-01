import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div className="name">
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Name;
