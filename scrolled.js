window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar'); // Select the navbar
    if (window.scrollY > 0) { // If the page is scrolled down
        navbar.classList.add('scrolled'); // Add the shadow effect
    } else {
        navbar.classList.remove('scrolled'); // Remove the shadow when at the top
    }
});
