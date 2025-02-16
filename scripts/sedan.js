window.onload = function() {
    // Function to get URL parameters
    function getURLParameter(name) {
        return new URLSearchParams(window.location.search).get(name);
    }

    // Check for pickupDate and returnDate in the URL
    const pickupDate = getURLParameter('pickupDate');
    const returnDate = getURLParameter('returnDate');

    // Function to build the URL with additional parameters if they exist
    function buildURL(baseURL, carName, price, imagePath) {
        let url = `${baseURL}?carName=${encodeURIComponent(carName)}&price=${price}&imagePath=${encodeURIComponent(imagePath)}`;
        if (pickupDate && returnDate) {
            url += `&pickupDate=${encodeURIComponent(pickupDate)}&returnDate=${encodeURIComponent(returnDate)}`;
        }
        return url;
    }

    document.getElementById('tesla').addEventListener('click', function() {
        window.location.href = buildURL('reservation.html', 'Tesla Model 3', '160.00', 'assets/images/tesla_model_3_front.png');
    });

    document.getElementById('byd').addEventListener('click', function() {
        window.location.href = buildURL('reservation.html', 'BYD Seal', '128.00', 'assets/images/byd_seal_front.png');
    });
};