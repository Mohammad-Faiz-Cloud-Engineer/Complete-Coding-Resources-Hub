// Wait for DOM to be fully loaded before executing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Hide page loader when everything is ready
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 500);
        }, 300);
    }
});

function init() {
    'use strict';

    // Configuration constants
    const CONFIG = {
        SCROLL_THRESHOLD: 50,
        NAV_OFFSET: 80,
        SCROLL_TO_TOP_THRESHOLD: 500,
        SEARCH_DEBOUNCE: 300,
        ANIMATION_DELAY: 10,
        RIPPLE_DURATION: 600,
        PARALLAX_MAX_SCROLL: 800,
        PARALLAX_SPEED: 0.5
    };

    const CATEGORY_NAMES = {
        programming: 'Programming',
        web: 'Web Development',
        cs: 'CS Fundamentals',
        specialized: 'Specialized'
    };

    const resources = [
    {
        id: 1,
        title: "DSA Complete Pack",
        category: "cs",
        icon: "book-open",
        description: "Master Data Structures & Algorithms with comprehensive notes and structured learning plans.",
        pdfs: "5 PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-dsa"
    },
    {
        id: 2,
        title: "Python Bundle",
        category: "programming",
        icon: "code",
        description: "Complete Python from basics to advanced with 30-day learning plan and eBooks.",
        pdfs: "10 PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-python"
    },
    {
        id: 3,
        title: "Java Bundle",
        category: "programming",
        icon: "coffee",
        description: "Comprehensive Java programming with 45-day roadmap and handwritten notes.",
        pdfs: "6 PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-java"
    },
    {
        id: 4,
        title: "SQL & Database",
        category: "cs",
        icon: "database",
        description: "Complete DBMS concepts, SQL queries, operators, and database design.",
        pdfs: "8 PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-sql"
    },
    {
        id: 5,
        title: "Interview Preparation",
        category: "specialized",
        icon: "briefcase",
        description: "Complete interview Q&A, TCS NQT questions, and preparation materials.",
        pdfs: "3 PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-interview"
    },
    {
        id: 6,
        title: "Web Development",
        category: "web",
        icon: "globe",
        description: "HTML deep dive notes and 45-day web development learning plan.",
        pdfs: "10 PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-webdev"
    },
    {
        id: 7,
        title: "JavaScript",
        category: "web",
        icon: "file-text",
        description: "Handwritten notes and easiest explanations for JavaScript mastery.",
        pdfs: "4 PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-javascript"
    },
    {
        id: 8,
        title: "ReactJS",
        category: "web",
        icon: "zap",
        description: "Complete React.js guide for modern frontend development.",
        pdfs: "1 PDF",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-react"
    },
    {
        id: 9,
        title: "NodeJS",
        category: "web",
        icon: "server",
        description: "Node.js handwritten notes for backend development mastery.",
        pdfs: "1 PDF",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-nodejs"
    },
    {
        id: 10,
        title: "C++ Programming",
        category: "programming",
        icon: "cpu",
        description: "EBook, handwritten notes, and complete C++ roadmap.",
        pdfs: "4 PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-cpp"
    },
    {
        id: 11,
        title: "C Programming",
        category: "programming",
        icon: "terminal",
        description: "C programming fundamentals with handwritten notes.",
        pdfs: "4 PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-c"
    },
    {
        id: 12,
        title: "Operating System",
        category: "cs",
        icon: "monitor",
        description: "Complete OS concepts with handwritten notes.",
        pdfs: "1 PDF",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-os"
    },
    {
        id: 13,
        title: "Computer Networking",
        category: "cs",
        icon: "wifi",
        description: "Network notes and common differences explained.",
        pdfs: "2 PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-networking"
    },
    {
        id: 14,
        title: "OOP Concepts",
        category: "cs",
        icon: "target",
        description: "Object-oriented programming differences and concepts.",
        pdfs: "1 PDF",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-oop"
    },
    {
        id: 15,
        title: "Machine Learning",
        category: "specialized",
        icon: "trending-up",
        description: "Complete ML handwritten notes and concepts.",
        pdfs: "1 PDF",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-ml"
    },
    {
        id: 16,
        title: "Android Development",
        category: "specialized",
        icon: "smartphone",
        description: "Android development short notes and essentials.",
        pdfs: "3 PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-android"
    },
    {
        id: 17,
        title: "PHP Programming",
        category: "programming",
        icon: "layers",
        description: "PHP programming notes for web development.",
        pdfs: "2 PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-php"
    },
    {
        id: 18,
        title: "Resume Template",
        category: "specialized",
        icon: "file",
        description: "ATS-friendly resume template for job applications.",
        pdfs: "1 PDF",
        videos: "Career Resources",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-resume"
    },
    {
        id: 19,
        title: "Large Language Model",
        category: "specialized",
        icon: "message-circle",
        description: "Comprehensive guide to LLMs, transformers, and AI language models.",
        pdfs: "Multiple PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-llm"
    }
    ];

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const searchInput = document.getElementById('searchInput');
    const resourcesGrid = document.getElementById('resourcesGrid');
    const navbar = document.querySelector('.navbar');

    // Early return if critical elements are missing
    if (!hamburger || !navMenu || !resourcesGrid || !searchInput || !navbar) {
        console.error('Critical DOM elements not found');
        return;
    }

    function setMenuOpen(isOpen) {
        navMenu.classList.toggle('active', isOpen);
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    hamburger.addEventListener('click', () => {
        setMenuOpen(!navMenu.classList.contains('active'));
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (!navMenu.classList.contains('active')) return;
        setMenuOpen(false);
        hamburger.focus();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) {
                console.warn(`Target element not found for href: ${href}`);
                return;
            }
            e.preventDefault();
            const offsetTop = target.offsetTop - CONFIG.NAV_OFFSET;
            window.scrollTo({ top: Math.max(0, offsetTop), behavior: 'smooth' });
        });
    });

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > CONFIG.SCROLL_THRESHOLD) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');

        let current = '';
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - CONFIG.NAV_OFFSET)) current = section.getAttribute('id') || '';
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    }, { passive: true });

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function createResourceCard(resource) {
        const categoryLabel = CATEGORY_NAMES[resource.category] || 'Resources';

        return `
        <div class="resource-card" data-category="${escapeHtml(resource.category)}">
            <div class="resource-header">
                <div class="resource-icon">
                    <i data-feather="${escapeHtml(resource.icon)}"></i>
                </div>
                <h3 class="resource-title">${escapeHtml(resource.title)}</h3>
            </div>
            <div class="resource-category">${escapeHtml(categoryLabel)}</div>
            <p class="resource-description">${escapeHtml(resource.description)}</p>
            <div class="resource-meta">
                <span><i data-feather="book" style="width: 16px; height: 16px; vertical-align: middle;"></i> ${escapeHtml(resource.pdfs)}</span>
                <span><i data-feather="video" style="width: 16px; height: 16px; vertical-align: middle;"></i> ${escapeHtml(resource.videos)}</span>
            </div>
            <a href="${escapeHtml(resource.link)}" target="_blank" rel="noopener noreferrer" class="resource-link">Download Resources</a>
        </div>
    `;
    }

    function replaceFeatherIcons() {
        if (typeof window.feather === 'undefined') {
            console.warn('Feather icons library not loaded - using fallback');
            // Add fallback class to show we're missing icons
            document.body.classList.add('no-feather-icons');
            return;
        }
        try {
            window.feather.replace();
            document.body.classList.remove('no-feather-icons');
        } catch (error) {
            console.error('Error replacing feather icons:', error);
            document.body.classList.add('no-feather-icons');
        }
    }

    function displayResources(resourcesToDisplay) {
        if (resourcesToDisplay.length === 0) {
            resourcesGrid.innerHTML = `
                <div class="resources-empty" role="status" aria-live="polite">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 1rem; opacity: 0.3;">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <h3>No resources found</h3>
                    <p>Try adjusting your search or filter.</p>
                </div>
            `;
            return;
        }

        resourcesGrid.innerHTML = resourcesToDisplay.map(resource => createResourceCard(resource)).join('');
        replaceFeatherIcons();

        const resourceCards = document.querySelectorAll('.resource-card');
        resourceCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.95)';
            requestAnimationFrame(() => {
                setTimeout(() => {
                    card.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`;
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                }, CONFIG.ANIMATION_DELAY);
            });
        });

        // Add ripple effect to cards
        addRippleEffect();
    }

    let currentCategory = 'all';
    let currentSearchTerm = '';

    function filterResources() {
        let filtered = resources;

        if (currentCategory !== 'all') {
            filtered = filtered.filter(resource => resource.category === currentCategory);
        }

        if (currentSearchTerm) {
            const term = currentSearchTerm.toLowerCase();
            filtered = filtered.filter(resource =>
                resource.title.toLowerCase().includes(term) ||
                resource.description.toLowerCase().includes(term)
            );
        }

        const existingCards = document.querySelectorAll('.resource-card');
        if (existingCards.length > 0) {
            existingCards.forEach((card, index) => {
                card.style.transition = `opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.02}s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.02}s`;
                card.style.opacity = '0';
                card.style.transform = 'translateY(-10px) scale(0.98)';
            });

            setTimeout(() => displayResources(filtered), 300);
        } else {
            displayResources(filtered);
        }
    }

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.getAttribute('data-category') || 'all';
            filterResources();
        });
    });

    let searchTimeout;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        });
    }, observerOptions);

    // Animate feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(el);
    });

    // Create scroll-to-top button if it doesn't exist
    let scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (!scrollToTopBtn) {
        scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>';
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollToTopBtn);
    }

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            scrollToTopBtn.classList.toggle('is-visible', window.scrollY > CONFIG.SCROLL_TO_TOP_THRESHOLD);
        }, 100);
    }, { passive: true });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Initialize resources on load
    replaceFeatherIcons();
    displayResources(resources);

    // Add ripple effect to interactive elements
    function addRippleEffect() {
        const cards = document.querySelectorAll('.resource-card, .feature-card');
        cards.forEach(card => {
            card.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), CONFIG.RIPPLE_DURATION);
            });
        });
    }

    // Add loading state to search
    let searchLoadingTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        clearTimeout(searchLoadingTimeout);
        
        // Show loading state
        resourcesGrid.style.opacity = '0.5';
        resourcesGrid.style.pointerEvents = 'none';
        
        searchTimeout = setTimeout(() => {
            const value = e.target && typeof e.target.value === 'string' ? e.target.value : '';
            currentSearchTerm = value.trim();
            filterResources();
            
            searchLoadingTimeout = setTimeout(() => {
                resourcesGrid.style.opacity = '1';
                resourcesGrid.style.pointerEvents = 'auto';
            }, 100);
        }, CONFIG.SEARCH_DEBOUNCE);
    });

    // Add smooth scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }, { passive: true });

    // Add parallax effect to hero using CSS transform (better performance)
    const hero = document.querySelector('.hero');
    if (hero) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.scrollY;
                    if (scrolled < CONFIG.PARALLAX_MAX_SCROLL) {
                        hero.style.setProperty('--scroll-offset', scrolled * CONFIG.PARALLAX_SPEED);
                        hero.style.setProperty('--scroll-opacity', 1 - (scrolled / CONFIG.PARALLAX_MAX_SCROLL));
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // Animate sections on scroll
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('.section-header');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        sections.forEach(section => observer.observe(section));
    };

    animateOnScroll();

    // Remove initial page load animation styles
    setTimeout(() => {
        document.body.style.removeProperty('opacity');
        document.body.style.removeProperty('transition');
    }, 600);

    // Add copy link functionality to resource cards
    document.addEventListener('click', (e) => {
        if (e.target.closest('.resource-card')) {
            const card = e.target.closest('.resource-card');
            const link = card.querySelector('.resource-link');
            if (link && e.target !== link && !e.target.closest('.resource-link')) {
                // Optional: Add visual feedback when clicking card
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 100);
            }
        }
    });

    // Add keyboard navigation for filter tabs
    filterTabs.forEach((tab, index) => {
        tab.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                const nextTab = filterTabs[index + 1] || filterTabs[0];
                nextTab.focus();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevTab = filterTabs[index - 1] || filterTabs[filterTabs.length - 1];
                prevTab.focus();
            } else if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                tab.click();
            }
        });
    });

    // Add search clear button
    const searchClearBtn = document.createElement('button');
    searchClearBtn.className = 'search-clear';
    searchClearBtn.innerHTML = '×';
    searchClearBtn.setAttribute('aria-label', 'Clear search');
    searchClearBtn.style.display = 'none';
    searchInput.parentElement.appendChild(searchClearBtn);

    searchInput.addEventListener('input', () => {
        searchClearBtn.style.display = searchInput.value ? 'flex' : 'none';
    });

    searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearchTerm = '';
        searchClearBtn.style.display = 'none';
        filterResources();
        searchInput.focus();
    });
}
