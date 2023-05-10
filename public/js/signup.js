const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Get the username and password from the signup form inputs
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
   
  
    if (name && email && password) {
      // Send a POST request to the users route to create a new user
      try {
        await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
          });
            // Redirect to the dashboard after successful signup
            document.location.replace('/dashboard');
          } catch (error) {
            console.log(error);
            alert("Failed to signup");
          }
        }
  };

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);