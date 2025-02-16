document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    const Enquiryform = document.querySelector('.contact-form form'); // Select the form

    Enquiryform.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const submitButton = Enquiryform.querySelector('button[type="submit"]');
        
        // Change the button's text and color
        submitButton.textContent = 'Submitted Successfully!';
        submitButton.style.backgroundColor = 'green';

        // Reset the form fields
        Enquiryform.reset();

        // Optionally, revert the button's style and text after some time or upon further user actions
        setTimeout(() => {
            submitButton.textContent = 'Send';
            submitButton.style.backgroundColor = ''; // Revert to original style
        }, 5000); // Change 5000 to the number of milliseconds you want the message to show
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault()
        const vehicleType = document.getElementById('vehicleType').value;
        const pickupDate = document.getElementById('pickupDate').value;
        const returnDate = document.getElementById('returnDate').value;
        const errorMessageDisplay = document.getElementById('reserErrorMsg');

        
        let redirectUrl = '';
        errorMessageDisplay.textContent = ''; 
        const now = new Date();
        const year = now.getFullYear(); // Extracts the year
        const month = now.getMonth() + 1; // Extracts the month and adjusts for 0 indexing
        const day = now.getDate();
        const formattedMonth = month < 10 ? '0' + month : month;
        const formattedDay = day < 10 ? '0' + day : day;

        // Returns the date in the desired format
        const todayDate = `${year}-${formattedMonth}-${formattedDay}`;
        console.log(todayDate);

        if (pickupDate !== '' && pickupDate < todayDate) {
            errorMessageDisplay.textContent = 'Pick-up date cannot be a past date.';
            errorMessageDisplay.classList.add('error-message');
            return;
        }
        else if (returnDate !=='' && returnDate <= pickupDate) {
            errorMessageDisplay.textContent = 'Return date must be after the pick-up date.';
            errorMessageDisplay.classList.add('error-message');
            return;
        }else if (pickupDate !=='' && returnDate === '') {
            errorMessageDisplay.textContent = 'Enter Return Date';
            errorMessageDisplay.classList.add('error-message');
            return;
        }else if (pickupDate ==='' && returnDate !== '') {
            errorMessageDisplay.textContent = 'Enter Pick up Date';
            errorMessageDisplay.classList.add('error-message');
            return;
        }
        else{
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

            // Initialize an array to hold query parameters if needed
            let queryParams = [];

            if (pickupDate) {
                queryParams.push(`pickupDate=${encodeURIComponent(pickupDate)}`);
            }
            if (returnDate) {
                queryParams.push(`returnDate=${encodeURIComponent(returnDate)}`);
            }

            // Append query parameters to the URL if any
            if (queryParams.length > 0) {
                redirectUrl += `?${queryParams.join('&')}`;
            }

            // Redirect to the appropriate page
            window.location.href = redirectUrl;
        }
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
