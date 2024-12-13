document.addEventListener('DOMContentLoaded', () => {
    // Theme Management
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('site-theme');

    // Initial theme setup
    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    } else {
        // Prefer dark mode by default
        document.body.classList.add('dark-mode');
    }

    // Theme toggle functionality
    themeToggle?.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save theme preference
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('site-theme', theme);
    });

    // Newsletter Signup
    const newsletterForm = document.querySelector('form');
    newsletterForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // Basic email validation
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Thank you for subscribing!');
            e.target.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for Animations
    const observers = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade');
            }
        });
    }, { threshold: 0.1 });

    // Observe articles and sections for animations
    document.querySelectorAll('article, section').forEach(el => {
        observers.observe(el);
    });
});
