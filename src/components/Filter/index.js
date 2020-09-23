import React from "react"

function Filter ({filterResults}) {
  return (
    <p className="lead">
      Or type to filter results here: <input id="filterInput" onChange={filterResults}></input>
    </p>
  )
}

export default Filter;