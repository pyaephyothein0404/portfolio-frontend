// Configuration - UPDATE THIS URL when you deploy your Django backend
const API_URL = 'https://your-backend-app.railway.app/api/contact/';
// For local testing: const API_URL = 'http://localhost:8000/api/contact/';

// ========================================
// THEME TOGGLE FUNCTIONALITY
// ========================================
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Update theme icon based on current theme
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnSpinner = document.getElementById('btn-spinner');
const notification = document.getElementById('notification');

// Show notification
function showNotification(message, type) {
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Form submission handler
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
    };
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Disable submit button and show loading state
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    btnSpinner.classList.remove('hidden');
    
    try {
        // Send POST request to Django API
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Success
            showNotification(data.message || 'Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } else {
            // Error from server
            const errorMessage = data.error || data.message || 'Failed to send message. Please try again.';
            showNotification(errorMessage, 'error');
        }
    } catch (error) {
        // Network error or other issues
        console.error('Error submitting form:', error);
        showNotification(
            'Unable to connect to the server. Please try again later or contact me directly at +66 969347540',
            'error'
        );
    } finally {
        // Re-enable submit button and restore original state
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
        btnSpinner.classList.add('hidden');
    }
});

// Prevent notification from staying if page is reloaded
window.addEventListener('beforeunload', () => {
    notification.classList.remove('show');
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-indigo-600', 'font-bold');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-indigo-600', 'font-bold');
        }
    });
});

// Add parallax effect to hero section (optional enhancement)
window.addEventListener('scroll', () => {
    const hero = document.getElementById('home');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Console log for developers
console.log('%c👋 Hello, Developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cInterested in how this was built?', 'font-size: 14px; color: #666;');
console.log('%cCheck out the source code on GitHub: https://github.com/pyaephyothein', 'font-size: 14px; color: #6366f1;');
console.log('%c\nBuilt with ❤️ using HTML5, Tailwind CSS, and Vanilla JavaScript', 'font-size: 12px; color: #999;');
