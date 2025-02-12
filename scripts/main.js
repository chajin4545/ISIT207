document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeSpan = document.getElementsByClassName('close')[0];
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const loginError = document.getElementById('loginError');

    loginBtn.onclick = function() {
        
        loginModal.style.display = "block";
        
    }

    closeSpan.onclick = function() {
        loginModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    }

    loginForm.onsubmit = async function(event) {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const userId = formData.get('userId');
        const password = formData.get('password');
        const response = await fetch('assets/data/users.json');
        const users = await response.json();

        const user = users.users.find(u => u.id === userId && u.password === password);
        if (user) {
            loginBtn.textContent = `Hi ${user.id}`;
            logoutBtn.style.display = "block";
            loginModal.style.display = "none";
        } else {
            loginError.textContent = "Invalid username or password. Please try again.";
            loginError.style.display = "block";
        }
    }

    logoutBtn.onclick = function() {
        loginBtn.textContent = "Login";
        logoutBtn.style.display = "none";
        loginError.style.display = "none";
    }
});