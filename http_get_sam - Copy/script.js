const url = "https://jsonplaceholder.typicode.com/users";

let usersEl = document.getElementById("addressTable");
let usersBtn = document.getElementById("usersBtn");

getUsers = () => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      fillUsersTable(result);
    })
    .catch(err => usersEl.innerHTML = "No Users to show");
}

fillUsersTable = (users) => {
  usersEl.innerHTML = "";
  for (i = 0; i < users.length; i++) {
    usersEl.innerHTML += `<tr>
    <td>${users[i].name}</td>
    <td>${users[i].address.street}, ${users[i].address.suite}</td>
    <td>${users[i].address.city}</td>
    <td><button onclick="editUser(${users[i].id})">Edit user</button></td>
    </tr>`;
  }
}

editUser = (userId) => {
  window.location.href = `user.html?id=${userId}`;
}

usersBtn.addEventListener("click", function () { getUsers() });