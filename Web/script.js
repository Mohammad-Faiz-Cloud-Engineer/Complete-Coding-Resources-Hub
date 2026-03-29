// Wait for DOM to be fully loaded before executing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function init() {
    'use strict';

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
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({ top: Math.max(0, offsetTop), behavior: 'smooth' });
        });
    });

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');

        let current = '';
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 100)) current = section.getAttribute('id') || '';
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
        const categoryNames = {
            programming: 'Programming',
            web: 'Web Development',
            cs: 'CS Fundamentals',
            specialized: 'Specialized'
        };

        const categoryLabel = categoryNames[resource.category] || 'Resources';

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
            console.warn('Feather icons library not loaded');
            return;
        }
        try {
            window.feather.replace();
        } catch (error) {
            console.error('Error replacing feather icons:', error);
        }
    }

    function displayResources(resourcesToDisplay) {
        if (resourcesToDisplay.length === 0) {
            resourcesGrid.innerHTML = `
                <div class="resources-empty" role="status" aria-live="polite">
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
                }, 10);
            });
        });
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
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const value = e.target && typeof e.target.value === 'string' ? e.target.value : '';
            currentSearchTerm = value.trim();
            filterResources();
        }, 200);
    });

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
            scrollToTopBtn.classList.toggle('is-visible', window.scrollY > 500);
        }, 100);
    }, { passive: true });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Initialize resources on load
    replaceFeatherIcons();
    displayResources(resources);
}
