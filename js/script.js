// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Validation (on Contact page)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const email = document.getElementById('email').value;
        if (!email.includes('@')) {
            alert('Please enter a valid email.');
            e.preventDefault();
        } else {
            alert('Form submitted! (Simulated)');
        }
    });
}