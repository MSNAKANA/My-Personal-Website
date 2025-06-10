// Hamburger Menu Functions
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
        closeMenu();
    }
});

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update URL hash
    window.location.hash = sectionId;
}

// Show section based on URL hash on page load
window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
