import React from "react";
import TableTitle from "../TableTitle"

function Table(props) {
  return (
    <table id="myTable" className="table table-hover">
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