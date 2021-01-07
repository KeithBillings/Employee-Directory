import React from "react"

function Filter ({filterResults}) {
  return (
    <p className="lead">
      Search: <input id="filterInput" onChange={filterResults}></input>
    </p>
  )
}

export default Filter;