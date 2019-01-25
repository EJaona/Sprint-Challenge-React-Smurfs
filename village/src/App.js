import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {
        id: "",
        name: "",
        height: "",
        age: ""
      }
    };
  }
  componentDidMount = () => {
    axios // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  };

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  handleInputChange = e => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
      }
    });
  };

  addSmurf = event => {
    // event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post("http://localhost:3333/smurfs", this.state.newSmurf)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));

    this.setState({
      newSmurf: {
        id: "",
        name: "",
        height: "",
        age: ""
      }
    });
  };

  render() {
    return (
      <div className="App">
        <SmurfForm
          smurf={this.state.newSmurf}
          addSmurf={this.addSmurf}
          handleInputChange={this.handleInputChange}
        />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
