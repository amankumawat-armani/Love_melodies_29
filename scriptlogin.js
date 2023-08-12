document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      
  
      // You can add your login logic here, such as checking username and password
  
      // For demonstration purposes, let's just log the entered values
      console.log("email:", username);
      console.log("Password:", password);
      fetch('https://foodapi.cyclic.app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: username, password: password })

    })
    


    .then(response => response.json())
    .then(data => {
      console.log(data); // Log the response to inspect it
      const responseDiv = document.getElementById('response');
      console.log(data.message);
      const apiResponse = {
        
    };
      
      if (apiResponse.success) {
        console.log("Login successful");
        // Redirect to index.html after a brief delay
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000); // 2 seconds delay
    } else {
        console.log("Login failed");
        // Show a popup or error message
        alert("Login failed. Please check your credentials.");
    }
  })
  

    });
  });