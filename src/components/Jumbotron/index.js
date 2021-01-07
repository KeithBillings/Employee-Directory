import React from "react";
import Filter from "../Filter";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">
          Click on a table header to sort by that field alphabetically.
        </p>
        <p className="lead">You may search by name, gender, email, or location. Not case sensitive.</p>
        <Filter filterResults={props.filterResults} />
      </div>
    </div>
  );
}

export default Jumbotron;
