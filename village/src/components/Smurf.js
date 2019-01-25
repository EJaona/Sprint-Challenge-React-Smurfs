import React from "react";

const Smurf = props => {
  return (
    <div
      className="Smurf"
      style={{
        border: "1px solid black",
        width: "30%",
        margin: "1.5% auto",
        padding: "1%"
      }}
    >
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div>
        <small
          style={{
            border: "1px solid black",
            margin: "0 1%",
            padding: "1%",
            cursor: "pointer"
          }}
          onClick={_ => props.deleteSmurf(props.id)}
        >
          Delete Smurf
        </small>
        <small
          style={{
            border: "1px solid black",
            margin: "0 1%",
            padding: "1%",
            cursor: "pointer"
          }}
        >
          Edit Smurf
        </small>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
