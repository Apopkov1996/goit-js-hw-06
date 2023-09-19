
const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', submitForm);
const profile = {};

function submitForm(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === '' || password.value === '') {
    alert('Please fill all the fields');
  } else {
    profile.email = email.value;
    profile.password = password.value;

  }
  event.currentTarget.reset();
}
