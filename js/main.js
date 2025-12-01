/**
 * RANK ZONE - Main JavaScript
 * Handles mobile navigation, smooth scrolling, and interactive elements
 */

(function() {
    'use strict';

    // DOM Elements
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav a, .mobile-nav a');

    /**
     * Mobile Menu Toggle
     */
    function initMobileMenu() {
        if (!mobileMenuBtn || !mobileNav) return;

        mobileMenuBtn.addEventListener('click', toggleMobileMenu);

        // Close menu when clicking a link
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileNav.contains(e.target) &&
                !mobileMenuBtn.contains(e.target) &&
                mobileNav.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                closeMobileMenu();
                mobileMenuBtn.focus();
            }
        });
    }

    function toggleMobileMenu() {
        const isExpanded = mobileNav.classList.contains('active');
        mobileNav.classList.toggle('active');
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);

        // Update icon
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    }

    function closeMobileMenu() {
        mobileNav.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');

        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }

    /**
     * Header Scroll Effect
     * Adds a shadow when scrolling down
     */
    function initHeaderScroll() {
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.boxShadow = 'none';
            }

            lastScroll = currentScroll;
        }, { passive: true });
    }

    /**
     * Smooth Scroll for Anchor Links
     */
    function initSmoothScroll() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        const headerHeight = header ? header.offsetHeight : 0;
                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    /**
     * Active Navigation Link Highlighting
     */
    function initActiveNavHighlight() {
        const sections = document.querySelectorAll('section[id]');

        if (sections.length === 0) return;

        function highlightNav() {
            const scrollPosition = window.scrollY + 150;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', highlightNav, { passive: true });
        highlightNav(); // Initial call
    }

    /**
     * Intersection Observer for Fade-in Animations
     */
    function initScrollAnimations() {
        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Add fade-in class to animatable elements
        const animatableElements = document.querySelectorAll(
            '.service-card, .portfolio-item, .blog-card, .creative-card'
        );

        animatableElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }

    /**
     * Orbit Animation Pause on Hover
     */
    function initOrbitInteraction() {
        const hubGraphic = document.querySelector('.hub-graphic');
        const hubOrbit = document.querySelector('.hub-orbit');

        if (!hubGraphic || !hubOrbit) return;

        hubGraphic.addEventListener('mouseenter', () => {
            hubOrbit.style.animationPlayState = 'paused';
        });

        hubGraphic.addEventListener('mouseleave', () => {
            hubOrbit.style.animationPlayState = 'running';
        });
    }

    /**
     * Creative Scroll Keyboard Navigation
     */
    function initCreativeScroll() {
        const scrollContainer = document.querySelector('.creative-scroll');
        if (!scrollContainer) return;

        scrollContainer.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                scrollContainer.scrollBy({ left: 350, behavior: 'smooth' });
            } else if (e.key === 'ArrowLeft') {
                scrollContainer.scrollBy({ left: -350, behavior: 'smooth' });
            }
        });
    }

    /**
     * Initialize All Functions
     */
    function init() {
        initMobileMenu();
        initHeaderScroll();
        initSmoothScroll();
        initActiveNavHighlight();
        initScrollAnimations();
        initOrbitInteraction();
        initCreativeScroll();
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Add CSS for fade-in animations
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
        }
        nav a.active {
            color: var(--accent-teal);
        }
        nav a.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);

})();
