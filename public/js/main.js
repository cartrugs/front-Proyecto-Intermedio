
// evento submit para acceso de usuarios
form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    if (ev.target.id === 'incioSesion') {
        return loginUser(email, password);
    };
    if (ev.target.id === 'creaCuenta') {
        return createUser(email, password);
    };
});

