document.addEventListener('DOMContentLoaded', function() {
    const payButton = document.getElementById('payButton');
    const formContainer = document.querySelector('.form-container');
    const loadingAnimation = document.getElementById('loadingAnimation');
    const paymentResult = document.getElementById('paymentResult');
    const homeButton = document.getElementById('homeButton');

    payButton.addEventListener('click', function() {
        if (!validateCardDetails()) {
            alert('Please check your card details.');
            return;
        }

        // Hide form and other elements
        formContainer.style.display = 'none';
        paymentResult.style.display = 'none';
        homeButton.style.display = 'none';

        // Show loading animation
        loadingAnimation.style.display = 'block';

        // Simulate payment process
        setTimeout(() => {
            loadingAnimation.style.display = 'none';
            paymentResult.textContent = 'Payment successful!';
            paymentResult.style.display = 'block';
            homeButton.style.display = 'block';
        }, 5000);
    });

    homeButton.addEventListener('click', function() {
        window.location.href = 'index.html'; // Direct the user to the home page
    });
});

function validateCardDetails() {
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;

    // Basic validation logic
    return cardNumber && cardHolder && expirationDate && cvv;
}
