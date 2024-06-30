document.querySelector('#loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    /* fetch('http://localhost:4000/api/login', {*/
    fetch('https://jakosaka.pythonanywhere.com/api/login', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful');
            window.location.href = 'crud.html';  // ir a crud.htl despues del logueo exitoso
        } else {
            alert('Login failed: ' + data.message);
        }
    });
});