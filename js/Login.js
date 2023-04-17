const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginForm = document.querySelector('form');

const admins = JSON.parse(localStorage.getItem('admins')) || [];

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  const admin = admins.find(admin => admin.email === email && admin.password === password);

  if (admin) {
    alert('Login successful!');
    window.location.href = 'home.html';
    sessionStorage.setItem("LoggedInAdmin", "true");

  } else {
    alert('Invalid email or password.');
  }

  localStorage.setItem('admins', JSON.stringify(admins));
});
