document.addEventListener('DOMContentLoaded', () => {
    if (isLoggedIn()) {
        LoggedInUI();
    } else {
        LoggedOutUI();
    }
});


function login(username, password) {

    if (username === 'radhika' && password === 'radhika123') {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('username', username);
        LoggedInUI();
    } else {
        alert('Invalid credentials');
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    LoggedOutUI();
}

function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

function LoggedInUI() {
    document.getElementById('Ptag').style.display = "none";
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'block';
    document.getElementById('username').textContent = `Hello, ${localStorage.getItem('username')}, Welcome to my website, Glad to see you.`;
}

function LoggedOutUI() {
    document.getElementById('Ptag').style.display = "block";
    document.getElementById('login-btn').style.display = 'block';
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('username').textContent = '';
}

document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username-input').value;
    const password = document.getElementById('password-input').value;
    login(username, password);
});

document.getElementById('logout-btn').addEventListener('click', logout);
