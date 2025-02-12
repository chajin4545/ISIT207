document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu for small screens
    const menuButton = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('nav ul');

    if (menuButton) {
        menuButton.addEventListener('click', function() {
            navigation.classList.toggle('active');
        });
    }
});

