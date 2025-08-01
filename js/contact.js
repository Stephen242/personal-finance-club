document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        name: `${firstName} ${lastName}`,
        email: email,
        message: message
    };

    const url = 'https://script.google.com/macros/s/AKfycbwhih5-OSu2Kie0YAqt4uaeKBKAF5Wbo7PDXPbPafBWTprWuZZmcLbL4xj-0KC29SgQqg/exec';

    // Disable form and show loading state
    const submitButton = document.querySelector('.submit-button');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log('Success:', data);
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contactForm').reset();
    })
    .catch((err) => {
        console.error('Error:', err);
        alert('Sorry, there was an error sending your message. Please try again later.');
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    });
});
