// ========================================
// MAIN JAVASCRIPT FILE
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Initialize all functions
    initNavigation();
    initMobileMenu();
    initScrollEffects();
});

// ========================================
// NAVIGATION FUNCTIONS
// ========================================

/**
 * Initialize navigation functionality
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add smooth scrolling for anchor links
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ========================================
// SCROLL EFFECTS
// ========================================

/**
 * Initialize scroll effects for header
 */
function initScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for enhanced blur and transparency
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Optional: Hide/show header on scroll (uncomment if needed)
        // if (scrollTop > lastScrollTop && scrollTop > 100) {
        //     header.style.transform = 'translateY(-100%)';
        // } else {
        //     header.style.transform = 'translateY(0)';
        // }
        
        lastScrollTop = scrollTop;
    });
}

// ========================================
// MOBILE MENU FUNCTIONS
// ========================================

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    // Add mobile menu toggle functionality here
    // This can be expanded based on your needs
    console.log('Mobile menu initialized');
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Add loading animation
 */
function showLoading() {
    // Add loading functionality
    console.log('Loading...');
}

/**
 * Hide loading animation
 */
function hideLoading() {
    // Hide loading functionality
    console.log('Loading complete');
}

// ========================================
// EVENT LISTENERS
// ========================================

// Add any additional event listeners here 