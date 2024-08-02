document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const containerMenu = document.getElementById('containerMenu');

    menuToggle.addEventListener('click', function() {
        containerMenu.classList.toggle('active');
    });
});