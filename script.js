function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function toggleLogin() {
  document.getElementById('loginModal').classList.toggle('hidden');
}

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    alert(`Přihlášení úspěšné jako ${email} (mock test)`);
    toggleLogin();
  } else {
    alert('Vyplň prosím email i heslo.');
  }
});
