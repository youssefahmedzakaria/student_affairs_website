const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    $.ajax({
        url: '/validate_login/',
        type: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
        },
        data: JSON.stringify({ email, password }),
        success: function(data) {
            if (data.valid) {
                alert('Login successful!');
                window.location.href = '../home';
                sessionStorage.setItem('LoggedInAdmin', 'true');
            } else {
                alert('Invalid email or password.');
            }
        },
        error: function(error) {
            console.error('An error occurred:', error);
        }
    });
});