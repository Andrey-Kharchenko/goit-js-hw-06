const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handSubmit);

function handSubmit(event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    return alert('Please fill in all fields.');
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData);

  loginForm.reset();
}