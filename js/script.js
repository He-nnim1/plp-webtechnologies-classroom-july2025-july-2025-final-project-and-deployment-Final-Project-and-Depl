// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMessage = document.getElementById('formMessage');

        // Simple validation
        if (!name || !email || !subject || !message) {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
            return;
        }

        // Success message
        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        formMessage.classList.add('success');
        formMessage.classList.remove('error');

        // Reset form
        contactForm.reset();

        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.classList.remove('success');
        }, 5000);
    });
}
