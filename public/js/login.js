const loginFormHandler = async (event) => {
    event.preventDefault();

    // get login values
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert("Failed to login")
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler)