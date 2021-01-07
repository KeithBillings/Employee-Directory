import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import Table from "./components/Table/index";
import "./App.css";
import API from "./utils/API";
import TableText from "./components/TableText";
import Jumbotron from "./components/Jumbotron";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [direction, setDirection] = useState("asc");

  useEffect(() => {
    API.getUsersData().then((userData) => {
      setUsers(userData);
      setFilteredUsers(userData);
    });
  }, []);

  function sortTable(n) {
    const table: HTMLElement = document.getElementById("myTable");

    let shouldSwitch: boolean,
      switching: boolean = true;

    let switchcount: number,
      i: number = 0;

    // When a header is clicked it will initially sort A-Z
    // This will flip it back and forth between A-Z and Z-A each click
    if (direction === "asc") {
      setDirection("desc");
    } else {
      setDirection("asc");
    }

    // Make a loop that will continue until no switching has been done:
    while (switching) {
      let rows = table.rows;
      // Start by saying: no switching is done:
      switching = false;
      // Loop through all table rows (except the first, which contains table headers)
      let lengthOfRowsMinusTheHeader = rows.length - 1; // declaring this a variable instead of putting it in the second paramter of the following for loop to avoid a bug that is generated when formatting document with the Prettier extension. The formatting removes the needed parenthesis
      for (i = 1; i < lengthOfRowsMinusTheHeader; i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare, one from current row and one from the next: */
        let x = rows[i].getElementsByTagName("TD")[n];
        let y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place, based on the direction, asc or desc: */
        if (direction === "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (direction === "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /* If no switching has been done, run the while loop again. */
        if (switchcount === 0 && direction === "asc") {
          switching = true;
        }
      }
    }
  }

  function filterResults() {
    const filterResultsValue = document
      .getElementById("filterInput")
      .value.toLowerCase();

    let filteredUsersData = users.filter((user) => {
      return (
        user.name.includes(filterResultsValue) ||
        user.gender.includes(filterResultsValue) ||
        user.email.includes(filterResultsValue) ||
        user.location.includes(filterResultsValue) ||
        user.location.toLowerCase().includes(filterResultsValue)
      );
    });
    setFilteredUsers(filteredUsersData);
  }

  return (
    <Container>
      <Jumbotron filterResults={filterResults} />
      <Table sortTable={sortTable}>
        {filteredUsers.map(
          ({ image, name, gender, email, location }, index) => (
            <TableText
              image={image}
              name={name}
              gender={gender}
              email={email}
              location={location}
              key={index}
            />
          )
        )}
      </Table>
    </Container>
  );
}

export default App;
