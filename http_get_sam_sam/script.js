const url = "https://jsonplaceholder.typicode.com/users";

let usersEl = document.getElementById("addressTable");
let userEl = document.getElementById("editEl");
let tableEl = document.getElementById("addressEl");
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
    </tr>`
  }
}

editUser = (userId) => {
  const user = getUser(userId);
}

getUser = id => {
  const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
  fetch(userUrl)
    .then(response => {
      tableEl.style.display = 'block';
      usersBtn.style.display = 'block';
      userEl.style.display = 'none';
      return response.json();
    })
    .then(data => {
      tableEl.style.display = 'none';
      usersBtn.style.display = 'none';
      userEl.style.display = 'block';
      document.getElementById("nameInput").value = data.name;
      document.getElementById("addressStreet").value = data.address.street;
      document.getElementById("addressSuite").value = data.address.suite;
      document.getElementById("addressCity").value = data.address.city;
      userEl.children[0].id = id;
    })
    .catch(err => console.log(err));
}

saveUser = (event) => {
  event.preventDefault();
  const id = userEl.children[0].id;
  const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
  const name = document.getElementById("nameInput").value;
  const street = document.getElementById("addressStreet").value;
  const suite = document.getElementById("addressSuite").value;
  const city = document.getElementById("addressCity").value;
  const user = {
    name: name,
    address: {
      street: street,
      suite: suite,
      city: city
    }
  }
  fetch(userUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

usersBtn.addEventListener("click", function () { getUsers() });