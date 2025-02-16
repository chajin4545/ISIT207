window.onload = function() {
    document.getElementById('kia').addEventListener('click', function() {
        window.location.href = 'http://localhost:8080/reservation.html?carName=KIA%20EV9%20&price=260.00&imagePath=assets/images/kia_ev9.png';
    });

    document.getElementById('volvo').addEventListener('click', function() {
        window.location.href = 'http://localhost:8080/reservation.html?carName=Volvo%20C40%20&price=218.00&imagePath=assets/images/volvo_c40.png';
    });
};