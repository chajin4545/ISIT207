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

    document.getElementById('porsche').addEventListener('click', function() {
        window.location.href = buildURL('reservation.html', 'Porsche Taycan', '660.00', 'assets/images/porsche_taycan.png');
    });

    document.getElementById('lotus').addEventListener('click', function() {
        window.location.href = buildURL('reservation.html', 'Lotus Emeya', '728.00', 'assets/images/lotus_emeya.png');
    });
};