import React from "react";
import { NavLink } from "react-router-dom";

const Nav = _ => (
  <nav
    style={{
      display: "flex",
      justifyContent: "flex-end"
    }}
  >
    <NavLink
      to="/"
      style={{
        border: "1px solid black",
        margin: "1% 5%",
        padding: "1%",
        cursor: "pointer"
      }}
    >
      Village
    </NavLink>
    <NavLink
      to="/smurf-form"
      style={{
        border: "1px solid black",
        margin: "1% 5%",
        padding: "1%",
        cursor: "pointer"
      }}
    >
      Add Smurf
    </NavLink>
  </nav>
);

export default Nav;
