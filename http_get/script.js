const url = "https://jsonplaceholder.typicode.com/users";
let loaderEl = document.getElementById("loader");
let usersEl = document.getElementById("users");

getUsersList = () => {
  fetch(url)
    .then(response => {
      loaderEl.style.display = 'block';
      usersEl.style.display = 'none';
      return response.json();
    })
    .then(result => {
      fillUsersList(result);
    })
    .catch(err => showError(err));
}

fillUsersList = users => {
  usersEl.innerHTML = '';
  for (i = 0; i < users.length; i++) {
    const currentUser = users[i];
    usersEl.innerHTML += `
    <p><b>Name:</b> ${currentUser.name}</p>
    <p><b>Username:</b> ${currentUser.username}</p>
    <button onclick="editUser(${currentUser.id})">Edit</button>
    <hr>
    `;
  }
  loaderEl.style.display = 'none';
  usersEl.style.display = 'block';
}

showError = err => {
  usersEl.innerHTML = "Something went wrong"
  loaderEl.style.display = 'none';
  usersEl.style.display = 'block';
}

editUser = id => {
  getUser(id);
}

getUser = id => {
  const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
  fetch(userUrl)
    .then(response => {
      loaderEl.style.display = 'block';
      usersEl.style.display = 'none';
      return response.json();
    })
    .then(result => {
      usersEl.innerHTML = JSON.stringify(result);
      loaderEl.style.display = 'none';
      usersEl.style.display = 'block';
    })
    .catch(err => showError(err));
}

let listBtn = document.getElementById("listBtn");
listBtn.addEventListener("click", function () { getUsersList() });