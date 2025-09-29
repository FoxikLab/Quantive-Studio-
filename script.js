function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function toggleModal() {
  document.getElementById('loginModal').classList.toggle('hidden');
}

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    console.log('Logging in with:', email, password);
    alert('Login successful (mock)');
    toggleModal();
  } else {
    alert('Please fill in both fields.');
  }
});
