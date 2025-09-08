document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'admin' && password === '1234') {
            alert('¡Inicio de sesión exitoso!')

            window.location.href = 'toparaPremium.html';
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    });

});