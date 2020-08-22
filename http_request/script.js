loadUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => showUsers(data));
}

showUsers = (users) => {
  let usersEl = document.getElementById("users");
  for (i = 0; i < users.length; i++) {
    usersEl.innerHTML += `<p>${users[i].name}`;
  }
}

loadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => displayUser(data));
}

displayUser = user => {
  let userEl = document.getElementById('user')
  userEl.style.display = 'block';
  document.getElementById('name').value = user.name;
  document.getElementById('address').value = user.address.street;
}

editUser = (event) => {
  event.preventDefault();
  const currentUserName = document.getElementById('name').value;
  fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({'name': currentUserName}),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

scrollToTop = () => { 
  window.scrollTo(0, 0); 
} 