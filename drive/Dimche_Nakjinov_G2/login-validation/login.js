let userData = [{
    email: 'knorr@live.com',
    password: 'ksGuQbzYPpW'
  },
  {
    email: 'rddesign@msn.com',
    password: '9Q6urHqy'
  },
  {
    email: 'chaffar@yahoo.ca',
    password: '4xaz2pyk'
  },
  {
    email: 'fatelk@mac.com',
    password: 'TAePJSb2ACX'
  },
  {
    email: 'luebke@me.com',
    password: 'EyFY8uhX'
  },
  {
    email: 'amichalo@mac.com',
    password: 'c7muQ6bxcA9QJKS'
  },
  {
    email: 'mallanmba@yahoo.ca',
    password: 'NqCGLmGtcFU'
  },
  {
    email: 'isaacson@att.net',
    password: 'PMjRGUug7Ff73Kt'
  },
  {
    email: 'aracne@aol.com',
    password: 'sBJU7JJR7Qx6f55'
  },
  {
    email: 'boser@comcast.net',
    password: 'DMXQRNj7BHZ'
  },
  {
    email: 'gtaylor@verizon.net',
    password: 'AbefrKfkbxHbP3u'
  },
  {
    email: 'firstpr@comcast.net',
    password: 'PGWPUtcwP'
  },
  {
    email: 'sumdumass@sbcglobal.net',
    password: '2DrCpjkk9mm8bjW'
  },
  {
    email: 'campbell@yahoo.com',
    password: 'ZmYZgaDq6'
  },
  {
    email: 'wetter@me.com',
    password: 'ppTG3pGAe'
  },
  {
    email: 'british@verizon.net',
    password: '67SbpGYvPJ2'
  }
]


let mailBtn = document.getElementById("loginBtn");
let root = document.getElementById("root");
let email = document.getElementById("email");
let pass = document.getElementById("pass");

function checkPassword() {

  for (i = 0; i < userData.length; i++) {
    if (email.value === userData[i].email && pass.value === userData[i].password) {
      root.innerHTML = "Succesful log in !";
      break;
    } else if (email.value !== userData[i].email && pass.value === userData[i].password) {
      root.innerHTML = "Wrong username !";
      break;
    } else if (email.value === userData[i].email && pass.value !== userData[i].password) {
      root.innerHTML = "Wrong password !";
      break;
    }
  }
}

mailBtn.addEventListener("click", function () {
  checkPassword();
})