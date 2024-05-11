document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    loginUser(username, password);
  });
  
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    signUpUser(username, password);
  });
  
  function loginUser(username, password) {
    // Perform client-side validation if needed
    
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.href = '/success'; // Redirect to success page
    } else {
      document.getElementById('loginErrorMessage').textContent = data.message;
    }
  })
  .catch(error => console.error('Error:', error));
}

function signUpUser(username, password) {
  // Perform client-side validation if needed
  
  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      window.location.href = '/success'; // Redirect to success page
    } else {
      document.getElementById('signupErrorMessage').textContent = data.message;
    }
  })
  .catch(error => console.error('Error:', error));
}  