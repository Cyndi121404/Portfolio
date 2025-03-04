document.addEventListener('DOMContentLoaded', function() {
    const navMobile = document.querySelector('.nav-mobile');
    const navLinks = document.querySelector('.nav-links');

    navMobile.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            navLinks.style.transform = 'translate(0)';
        } else {
            navLinks.style.transform = 'translate(100%)';
        }
    });
});
