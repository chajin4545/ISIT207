document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const vehicleType = document.getElementById('vehicleType').value;
        const pickupDate = document.getElementById('pickupDate').value;
        const returnDate = document.getElementById('returnDate').value;

        let redirectUrl = '';

        // Determine the redirection URL based on the vehicle type
        switch (vehicleType) {
            case 'sedan':
                redirectUrl = 'sedan.html';
                break;
            case 'suv':
                redirectUrl = 'SUV.html';
                break;
            case 'luxury':
                redirectUrl = 'luxury.html';
                break;
            default:
                alert('Please select a valid vehicle type.');
                return; // Stop the function if no valid type is selected
        }

        // Append the pickup and return dates as query parameters
        redirectUrl += `?pickupDate=${encodeURIComponent(pickupDate)}&returnDate=${encodeURIComponent(returnDate)}`;

        // Redirect to the appropriate page
        window.location.href = redirectUrl;
    });

    document.getElementById('sedan-card').addEventListener('click', function() {
        window.location.href = 'sedan.html';
    });

    // Event listener for the SUV div
    document.getElementById('suv-card').addEventListener('click', function() {
        window.location.href = 'SUV.html';
    });

    // Event listener for the luxury div
    document.getElementById('luxury-card').addEventListener('click', function() {
        window.location.href = 'luxury.html';
    });
});
