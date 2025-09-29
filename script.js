function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function toggleLogin() {
  document.getElementById('loginModal').classList.toggle('hidden');
}

function toggleAccount() {
  document.getElementById('accountDropdown').classList.toggle('hidden');
}

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    alert(`Login successful as ${email} (mock test)`);
    toggleLogin();
  } else {
    alert('Please fill in both fields.');
  }
});

document.getElementById('settings-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const nickname = document.getElementById('nickname').value.trim();
  const profilePic = document.getElementById('profile-pic').files[0];

  if (nickname) {
    alert(`Nickname saved: ${nickname}`);
  }

  if (profilePic) {
    alert(`Profile picture uploaded: ${profilePic.name}`);
  }
});
