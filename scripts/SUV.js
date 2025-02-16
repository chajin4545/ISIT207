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

    document.getElementById('kia').addEventListener('click', function() {
        window.location.href = buildURL('reservation.html', 'KIA EV9', '260.00', 'assets/images/kia_ev9.png');
    });

    document.getElementById('volvo').addEventListener('click', function() {
        window.location.href = buildURL('reservation.html', 'Volvo C40', '218.00', 'assets/images/volvo_c40.png');
    });
};