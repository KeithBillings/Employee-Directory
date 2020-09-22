import React from "react";
import "./style.css"

function TableText({ image, name, gender, email, location, _id }) {
  return (
    <>
      <tr>
        <th scope="row"><img src={image} alt="users" /></th>
        <td>{name}</td>
        <td>{gender}</td>
        <td>{email}</td>
        <td>{location}</td>
      </tr>
    </>
  )
}

export default TableText;