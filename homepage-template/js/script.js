// Basic script for dynamic content

// Update year in footer
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Customize username easily
const username = 'Your Name';
document.getElementById('username').textContent = username;

// Simple contact form handler (placeholder)
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out!');
    form.reset();
});
