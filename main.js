// ==========================================
// COSTA BRAVA TRUFFLES - JAVASCRIPT
// Modern, Smooth, Interactive
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // LOADING SCREEN
    // ==========================================
    
    const loadingScreen = document.getElementById('loadingScreen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1500);
    });
    
    // ==========================================
    // NAVIGATION SCROLL EFFECT
    // ==========================================
    
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ==========================================
    // MOBILE MENU
    // ==========================================
    
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ==========================================
    // FADE IN ON SCROLL ANIMATION
    // ==========================================
    
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
    // ==========================================
    // BACK TO TOP BUTTON
    // ==========================================
    
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ==========================================
    // CONTACT FORM SUBMISSION
    // ==========================================
    
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const collection = document.getElementById('collection').value;
        const message = document.getElementById('message').value;
        
        // Get collection name
        const collectionSelect = document.getElementById('collection');
        const collectionText = collectionSelect.options[collectionSelect.selectedIndex].text;
        
        // Create email body
        const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Collection Interest: ${collectionText}

Message:
${message}
        `.trim();
        
        // Create mailto link
        const mailtoLink = `mailto:costabravatruffles@gmail.com?subject=Order Inquiry from ${name}&body=${encodeURIComponent(emailBody)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Thank you for your inquiry! Your email client will open shortly. If it doesn\'t, please email us directly at costabravatruffles@gmail.com');
        
        // Reset form
        contactForm.reset();
    });
    
    // ==========================================
    // NEWSLETTER FORM SUBMISSION
    // ==========================================
    
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Create mailto link
        const mailtoLink = `mailto:costabravatruffles@gmail.com?subject=Newsletter Subscription&body=Please subscribe me to the Costa Brava Truffles newsletter:%0D%0A%0D%0AEmail: ${email}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Thank you for subscribing! Your email client will open shortly.');
        
        // Reset form
        newsletterForm.reset();
    });
    
    // ==========================================
    // PARALLAX EFFECT ON HERO
    // ==========================================
    
    const heroBg = document.querySelector('.hero-bg');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = document.querySelector('.hero').offsetHeight;
        
        if (scrolled < heroHeight) {
            const parallaxSpeed = 0.5;
            heroBg.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
        }
    });
    
    // ==========================================
    // LAZY LOADING FOR IMAGES
    // ==========================================
    
    const lazyImages = document.querySelectorAll('[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
    
    // ==========================================
    // CURSOR ANIMATION (Optional luxury feature)
    // ==========================================
    
    // Uncomment if you want a custom cursor effect
    /*
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
    */
    
    // ==========================================
    // PRODUCT CARD TILT EFFECT (Optional)
    // ==========================================
    
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // ==========================================
    // SCROLL PROGRESS INDICATOR
    // ==========================================
    
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.classList.add('scroll-progress');
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };
    
    // Uncomment to enable scroll progress bar
    // createScrollProgress();
    
    // ==========================================
    // CONSOLE MESSAGE (Optional branding)
    // ==========================================
    
    console.log(
        '%cCOSTA BRAVA TRUFFLES',
        'font-size: 20px; font-weight: bold; color: #2B9EB3; font-family: serif;'
    );
    console.log(
        '%cHandcrafted Excellence | L\'Estartit, Catalonia',
        'font-size: 12px; color: #666; letter-spacing: 2px;'
    );
    console.log('Website crafted with love 🍫');
    
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Preload critical images
const preloadImages = [
    'https://www.genspark.ai/api/files/s/53AGUfM9?cache_control=3600',
    'https://www.genspark.ai/api/files/s/fwnCf59R?cache_control=3600'
];

preloadImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
});

// ==========================================
// HANDLE EXTERNAL LINK CLICKS
// ==========================================

document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ==========================================
// KEYBOARD ACCESSIBILITY
// ==========================================

document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const hamburger = document.getElementById('hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ==========================================
// DETECT DEVICE TYPE
// ==========================================

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const isTablet = /iPad|Android/i.test(navigator.userAgent) && window.innerWidth >= 768;

if (isMobile) {
    document.body.classList.add('mobile-device');
}

if (isTablet) {
    document.body.classList.add('tablet-device');
}

// ==========================================
// SMOOTH REVEAL ANIMATION ON PAGE LOAD
// ==========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});