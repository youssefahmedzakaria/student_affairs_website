const registerForm = document.querySelector('form');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('Conpassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  const existingAdmins = JSON.parse(localStorage.getItem('admins')) || [];
  const adminExists = existingAdmins.find((admin) => admin.email === email);

  if (adminExists) {
    alert('Admin with this email already exists!');
    return;
  }

  const newAdmin = {
    id: Date.now(),
    firstName,
    lastName,
    username,
    email,
    password,
  };

  existingAdmins.push(newAdmin);

  localStorage.setItem('admins', JSON.stringify(existingAdmins));

  alert('Registration successful!');
  registerForm.reset();
});
