
const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', submitForm);
const profile = {};

function submitForm(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email;
  const password = e.currentTarget.elements.password;

  if (email.value === '' || password.value === '') {
    return alert('Please fill all the fields');
  } 
  
  profile.email = email.value;
  profile.password = password.value;
  console.log(profile);

  
  e.currentTarget.reset();
}
