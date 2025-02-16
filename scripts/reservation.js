document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const carName = params.get('carName');
    const price = params.get('price');
    const imagePath = params.get('imagePath');
    var totalCostVal = 0;

    // Set car details
    document.getElementById('carName').textContent = carName || 'Default Car Name';
    document.getElementById('priceTag').textContent = '$' + (price || '0.00');
    document.getElementById('carImage').src = imagePath || 'default_image_path.jpg';
    document.getElementById('carImage').alt = carName || 'Car Image';

    // References to date input fields and elements for displaying costs and messages
    const pickUpDateInput = document.getElementById('pickUpDate');
    const dropOffDateInput = document.getElementById('dropOffDate');
    const totalCostDisplay = document.getElementById('totalCostDisplay');
    const errorMessage = document.getElementById('errorMessage');
    const bookNowButton = document.getElementById('bookNowButton');

    const pricePerDay = parseFloat(price) || 0;
    const now = new Date();
    const todayDate = now.toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    // Function to update and display total cost without validation
    function updateTotalCost() {
        const pickUpDateInputValue = pickUpDateInput.value;
        const dropOffDateInputValue = dropOffDateInput.value;
        if (pickUpDateInputValue && dropOffDateInputValue) {
            const pickUpDate = new Date(pickUpDateInputValue);
            const dropOffDate = new Date(dropOffDateInputValue);
            if (dropOffDate >= pickUpDate) {
                const diffTime = dropOffDate.getTime() - pickUpDate.getTime();
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Add 1 to include the starting day
                const totalCost = pricePerDay * diffDays;
                totalCostVal = totalCost
                totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
            }
        }
    }

    // Function to handle validations and booking
    function handleBooking() {
        const pickUpDate = pickUpDateInput.value;
        const dropOffDate = dropOffDateInput.value;
        const pickUpLocation = document.getElementById('pickUpLocation').value;
        const dropOffLocation = document.getElementById('dropOffLocation').value;

        // Check if the pick-up location is the default option
        if (pickUpLocation === "Choose Pick-up Location") {
            errorMessage.textContent = 'Please select a pick-up location.';
            return false;
        }

        // Check if the drop-off location is the default option
        if (dropOffLocation === "Choose Drop-Off Location") {
            errorMessage.textContent = 'Please select a drop-off location.';
            return false;
        }

        if (dropOffDate === '') {
            errorMessage.textContent = 'Enter Drop-off Date';
            totalCostDisplay.textContent = 'Total Cost: $0';
            return false;
        } else if (pickUpDate === '') {
            errorMessage.textContent = 'Enter Pick-Up Date';
            totalCostDisplay.textContent = 'Total Cost: $0';
            return false;
        }else if (pickUpDate < todayDate) {
            errorMessage.textContent = 'Pick-up date cannot be a past date.';
            totalCostDisplay.textContent = 'Total Cost: $0';
            return false;
        } else if (dropOffDate < pickUpDate) {
            errorMessage.textContent = 'Drop-off date must be after the pick-up date.';
            totalCostDisplay.textContent = 'Total Cost: $0';
            return false;
        } else {
            errorMessage.textContent = ''; // Clear any previous error messages
            return updateTotalCost(); // Update the cost display and proceed
        }
    }
    function emptyMessage() {
        errorMessage.textContent = '';
    }

    // Event listeners for input changes and button click
    pickUpDateInput.addEventListener('change', updateTotalCost);
    pickUpDateInput.addEventListener('change', emptyMessage);
    dropOffDateInput.addEventListener('change', updateTotalCost);
    dropOffDateInput.addEventListener('change', emptyMessage);

    bookNowButton.addEventListener('click', function() {
        const isBookingValid = handleBooking();
        if (isBookingValid !== false) { // Proceed if no error
            window.location.href = `payment.html?totalPrice=${totalCostVal}`;
        } else {
            bookNowButton.disabled = true;
            setTimeout(() => bookNowButton.disabled = false, 2000); // Re-enable after 2 seconds
        }
    });

    // Autofill the date inputs on initial load
    if (params.get('pickupDate')) {
        pickUpDateInput.value = params.get('pickupDate');
    }
    if (params.get('returnDate')) {
        dropOffDateInput.value = params.get('returnDate');
    }
    updateTotalCost(); // Initial cost calculation if dates are already set
});
