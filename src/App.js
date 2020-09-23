import React, { useState, useEffect } from 'react';
import Container from "./components/Container"
import Table from "./components/Table/index"
import './App.css';
import API from "./utils/API";
import TableText from "./components/TableText";
import Jumbotron from "./components/Jumbotron";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    API.getUsersData().then((userData) => {
      setUsers(userData);
      setFilteredUsers(userData);
    })
  }, []);

  function sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir === "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir === "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount === 0 && dir === "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  function filterResults() {
    const filterResultsValue = document.getElementById("filterInput").value;
    let filteredUsersData = users.filter((user) => {
      return (
        user.name.includes(filterResultsValue) || user.gender.includes(filterResultsValue) || user.email.includes(filterResultsValue) || user.location.includes(filterResultsValue)
      )
    });
    setFilteredUsers(filteredUsersData);
  }

  return (
    <Container>
      <Jumbotron filterResults={filterResults} />
      <Table sortTable={sortTable}>
        {filteredUsers.map(({ image, name, gender, email, location, _id }) => (
          <TableText
            image={image}
            name={name}
            gender={gender}
            email={email}
            location={location}
            key={_id++}
          />
        ))}
      </Table>
    </Container>
  );
}

export default App;
