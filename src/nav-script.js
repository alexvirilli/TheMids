document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav .container ul li a');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (currentUrl.includes(link.getAttribute('href'))) {
            link.parentElement.classList.add('active'); // Set the parent li to active
        } else {
            link.parentElement.classList.remove('active');
        }
    });
});
