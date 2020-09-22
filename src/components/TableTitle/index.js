import React from "react";

function TableTitle({sortTable}) {

  return (
    <>
      <tr>
        <th scope="col">Image</th>
        <th scope="col" data-name="name" onClick={() => sortTable(0)}>Name</th>
        <th scope="col" data-name="name" onClick={() => sortTable(1)}>Gender</th>
        <th scope="col" data-name="email" onClick={() => sortTable(2)}>Email</th>
        <th scope="col" data-name="location" onClick={() => sortTable(3)}>Location</th>
      </tr>
    </>
  )
}

export default TableTitle;