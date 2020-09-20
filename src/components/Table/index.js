import React from "react";
import TableTitle from "../TableTitle"
import TableText from "../TableText/"

function Table({sortTable}) {
  return (
    <table id="myTable" className="table table-hover">
      <thead>
        <TableTitle sortTable={sortTable}>
        </TableTitle>
      </thead>
      <tbody>
        <TableText>
        </TableText>
      </tbody>
    </table>
  )
}

export default Table;