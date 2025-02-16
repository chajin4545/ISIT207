window.onload = function() {
    document.getElementById('tesla').addEventListener('click', function() {
        window.location.href = 'http://localhost:8080/reservation.html?carName=Tesla%20Model%203%20&price=160.00&imagePath=assets/images/tesla_model_3_front.png';
    });

    document.getElementById('byd').addEventListener('click', function() {
        window.location.href = 'http://localhost:8080/reservation.html?carName=BYD%20Seal%20&price=128.00&imagePath=assets/images/byd_seal_front.png';
    });
};