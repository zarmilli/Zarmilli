// Change navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
    } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('scrolled');
    }
});

// Fade-in effect on scroll
window.addEventListener('scroll', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add('visible');
        }
    });
});

// Fade-in effect on scroll
window.addEventListener('scroll', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add('visible');
        }
    });
});

// Fade-in effect on scroll
window.addEventListener('scroll', function () {
    const galleryItems = document.querySelectorAll('.fade-in');
    galleryItems.forEach(item => {
        const position = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            item.classList.add('visible');
        }
    });
});

// Parallax effect for gallery items
window.addEventListener('scroll', function () {
    const galleryItems = document.querySelectorAll('.gallery-item::before');
    galleryItems.forEach(item => {
        const scrollY = window.scrollY;
        item.style.transform = `translateY(${scrollY * 0.05}px)`;
    });
});
