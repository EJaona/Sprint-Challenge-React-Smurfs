import React, { Component } from "react";

class SmurfForm extends Component {
  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.props.handleInputChange}
            placeholder="name"
            value={this.props.smurf.name}
            name="name"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="age"
            value={this.props.smurf.age}
            name="age"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="height"
            value={this.props.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
