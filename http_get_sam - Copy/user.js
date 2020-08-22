let backBtn = document.getElementById("backBtn");
let userEl = document.getElementById("editEl");

getUser = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
  fetch(userUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
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

backBtn.addEventListener("click", function () { window.location.href = `index.html` });
getUser();