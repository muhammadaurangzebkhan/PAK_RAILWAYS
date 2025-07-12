document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    // These credentials should be managed more securely in a real-world application.
    const ADMIN_USER = 'admin';
    const ADMIN_PASS = 'password123';

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the form from submitting in the traditional way

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Check if the credentials are correct
            if (username === ADMIN_USER && password === ADMIN_PASS) {
                // If correct, set a flag in sessionStorage.
                // sessionStorage is cleared when the browser tab is closed.
                sessionStorage.setItem('isLoggedIn', 'true');

                // Redirect to the master input page
                window.location.href = 'master_input.html';
            } else {
                // If incorrect, show an error message.
                if (errorMessage) {
                    errorMessage.textContent = 'Invalid username or password. Please try again.';
                }
            }
        });
    }
});
