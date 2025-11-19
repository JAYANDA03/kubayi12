
// Accordion functionality
document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    });
});

// Lightbox functionality
document.querySelectorAll('.lightbox-img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightboxOverlay';
        lightbox.style.position = 'fixed';
        lightbox.style.top = 0;
        lightbox.style.left = 0;
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0,0,0,0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.cursor = 'pointer';

        const imgClone = document.createElement('img');
        imgClone.src = img.src;
        imgClone.style.maxWidth = '80%';
        imgClone.style.maxHeight = '80%';

        lightbox.appendChild(imgClone);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        const feedback = document.getElementById('formFeedback');

        if (name && email && subject && message) {
            feedback.style.color = 'green';
            feedback.textContent = 'Thank you! Your message has been sent.';
            contactForm.reset();
        } else {
            feedback.style.color = 'red';
            feedback.textContent = 'Please fill out all fields correctly.';
        }
    });
}

