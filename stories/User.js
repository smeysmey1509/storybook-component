import "./user.css";

export const createUser = ({ columns } = {}) => {
  const columnTable = columns;

  const users = ["Mouy", "Tey", "Houy", "Noynoy", "Leng"];

  // Create the main container for the user table
  const userPermission = document.createElement("div");
  userPermission.classList.add("user-table");

  // Create the table element
  const table = document.createElement("table");

  // Create the table header and header row
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  columnTable.forEach((column) => {
    const th = document.createElement("th");
    th.textContent = column;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);

  // Create the table body
  const tbody = document.createElement("tbody");

  // Add rows for each user in the users array
  users.forEach((user) => {
    const row = document.createElement("tr");

    // Create and append the name cell
    const nameCell = document.createElement("td");
    nameCell.textContent = user;
    row.appendChild(nameCell);

    // Create and append a checkbox for each permission column
    for (let i = 1; i < columnTable.length; i++) {
      const checkboxCell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList = "permission-checkbox";
      // Event listener to change the background color of the checkbox when checked
      checkbox.addEventListener("change", (event) => {
        if (event.target.checked) {
          event.target.classList.add("checked");
        } else {
          event.target.classList.remove("checked");
        }
      });

      checkbox.name = `${columnTable[i]}-${user}`;
      checkbox.value = `${columnTable[i]}`;

      checkboxCell.appendChild(checkbox);
      row.appendChild(checkboxCell);
    }

    tbody.appendChild(row);
  });

  // Append the table elements to the userPermission div
  table.appendChild(thead);
  table.appendChild(tbody);
  userPermission.appendChild(table);

  return userPermission;
};
