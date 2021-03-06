import React, { Component } from "react";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Nav from "./components/Nav";

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

  addSmurf = _ => {
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

  deleteSmurf = id => {
    {
      this.state.smurfs.find(smurf => {
        if (smurf.id === id) {
          axios
            .delete(`http://localhost:3333/smurfs/${smurf.id}`)
            .then(response =>
              this.setState({
                smurfs: response.data
              })
            )
            .catch(error => console.log(error));
        }
      });
    }
  };

  editSmurf = id => {
    {
      this.state.smurfs.find(smurf => {
        if (smurf.id === id) {
          axios
            .put(
              `http://localhost:3333/smurfs/${smurf.id}`,
              this.state.newSmurf
            )
            .then(response =>
              this.setState({
                smurfs: response.data,
                newSmurf: {
                  id: "",
                  name: "",
                  height: "",
                  age: ""
                }
              })
            )
            .catch(error => console.log(error));
        }
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              smurf={this.state.newSmurf}
              addSmurf={this.addSmurf}
              handleInputChange={this.handleInputChange}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              editSmurf={this.editSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
