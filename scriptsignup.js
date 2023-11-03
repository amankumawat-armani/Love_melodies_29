document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // You can add your signup logic here, such as creating a new user account
  
      // For demonstration purposes, let's just log the entered values
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);

      fetch('https://foodapi.cyclic.app/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: username, email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        const responseDiv = document.getElementById('response');
        console.log(data.message)
        responseDiv.innerHTML = 'API Response: ' + JSON.stringify(data);
        window.location.href = 'log.html';
    })
    .catch(error => {
        console.error('Error:', error);
    });

    });
  });
  
