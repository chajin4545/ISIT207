document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const carName = params.get('carName');
    const price = params.get('price');
    const imagePath = params.get('imagePath');

    document.getElementById('carName').textContent = carName || 'Default Car Name';
    document.getElementById('priceTag').textContent = '$' + (price || '0.00');
    document.getElementById('carImage').src = imagePath || 'default_image_path.jpg';
    document.getElementById('carImage').alt = carName || 'Car Image';

    const pricePerDay = parseFloat(params.get('price')) || 0;

    const pickUpDateInput = document.getElementById('pickUpDate');
    const dropOffDateInput = document.getElementById('dropOffDate');
    const totalCostDisplay = document.getElementById('totalCostDisplay');
    const errorMessage = document.getElementById('errorMessage');
    const bookNowButton = document.getElementById('bookNowButton');

    function calculateTotalCost() {
        const pickUpDate = new Date(pickUpDateInput.value);
        const dropOffDate = new Date(dropOffDateInput.value);
        let error = false;

        if (dropOffDate <= pickUpDate) {
            errorMessage.textContent = 'Drop-off date must be after the pick-up date.';
            totalCostDisplay.textContent = 'Total Cost: $0';
            error = true;
        } else {
            errorMessage.textContent = ''; // Clear any previous error messages
            error = false;
        }

        const diffTime = Math.abs(dropOffDate - pickUpDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Calculate difference in days
        const totalCost = pricePerDay * diffDays;

        totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
        return !error ? totalCost : false;
    }

    pickUpDateInput.addEventListener('change', calculateTotalCost);
    dropOffDateInput.addEventListener('change', calculateTotalCost);

    bookNowButton.addEventListener('click', function() {
        const totalCost = calculateTotalCost();
        if (totalCost !== false) { // Ensures no error before proceeding
            window.location.href = `payment.html?totalPrice=${totalCost}`;
        } else {
            // Optionally disable the button or give feedback
            bookNowButton.disabled = true;
            setTimeout(() => bookNowButton.disabled = false, 2000); // Re-enable after 2 seconds
        }
    });
});