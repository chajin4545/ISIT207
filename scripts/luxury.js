window.onload = function() {
    document.getElementById('porsche').addEventListener('click', function() {
        window.location.href = 'http://localhost:8080/reservation.html?carName=Porsche%20Taycan%20&price=660.00&imagePath=assets/images/porsche_taycan.png';
    });

    document.getElementById('lotus').addEventListener('click', function() {
        window.location.href = 'http://localhost:8080/reservation.html?carName=Lotus%20Emeya%20&price=728.00&imagePath=assets/images/lotus_emeya.png';
    });
};