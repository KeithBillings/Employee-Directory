import React from "react";
import TableTitle from "../TableTitle";
import "./style.css";

function Table(props) {
  return (
    <table id="myTable" className="table table-dark table-hover">
      <thead>
        <TableTitle sortTable={props.sortTable}>
        </TableTitle>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  )
}

export default Table;