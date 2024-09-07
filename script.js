document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formResponse = document.getElementById('formResponse');

    fetch('https://your-heroku-app.herokuapp.com/submit-form', { // Replace with your Heroku URL
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        formResponse.textContent = data.message;
    })
    .catch(error => {
        formResponse.textContent = 'Error sending message.';
    });
});
