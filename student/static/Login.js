const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    fetch('/validate_login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.valid) {
                alert('Login successful!');
                window.location.href = '../home';
                sessionStorage.setItem('LoggedInAdmin', 'true');
            } else {
                alert('Invalid email or password.');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
});