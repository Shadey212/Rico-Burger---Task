// Carousel
const images = ['/imgs/img1.webp', '/imgs/img2.webp'];
let currentSlide = 0;

function initCarousel() {
    const carousel = document.getElementById('carousel');

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Slide ' + (index + 1);
        img.classList.add('rounded-lg', 'carousel-item', index === 0 ? 'active' : 'hidden');
        carousel.appendChild(img);
    });

    setInterval(nextSlide, 5000);
}

function nextSlide() {
    const slides = document.querySelectorAll('#carousel img');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

initCarousel();

// Submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});