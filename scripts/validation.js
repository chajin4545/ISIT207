document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.querySelector('form');
    reservationForm.addEventListener('submit', function(event) {
        const pickUpDate = document.getElementById('pick_up_date').value;
        const returnDate = document.getElementById('return_date').value;

        if (new Date(pickUpDate) >= new Date(returnDate)) {
            alert('Return date must be after the pick-up date.');
            event.preventDefault(); // Prevent form submission
        }
    });
});
