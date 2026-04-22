// Wait for DOM to be fully loaded before executing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

let deferredPrompt;
let shouldReloadForUpdate = false;
let hasReloadedForUpdate = false;

const SERVICE_WORKER_UPDATE_INTERVAL = 30 * 60 * 1000;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then((registration) => {
                window.setInterval(() => {
                    if (document.visibilityState !== 'visible') {
                        return;
                    }

                    registration.update().catch((error) => {
                        console.warn('[PWA] Service Worker update check failed:', error);
                    });
                }, SERVICE_WORKER_UPDATE_INTERVAL);

                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    if (!newWorker) {
                        return;
                    }

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state !== 'installed' || !navigator.serviceWorker.controller) {
                            return;
                        }

                        shouldReloadForUpdate = window.confirm('New version available! Reload to update?');
                        if (shouldReloadForUpdate) {
                            newWorker.postMessage({ type: 'SKIP_WAITING' });
                        }
                    });
                });
            })
            .catch((error) => {
                console.error('[PWA] Service Worker registration failed:', error);
            });
    });

    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (hasReloadedForUpdate || !shouldReloadForUpdate) {
            return;
        }

        hasReloadedForUpdate = true;
        window.location.reload();
    });
}

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;

    const installBanner = document.getElementById('pwaInstallBanner');
    if (installBanner) {
        installBanner.classList.add('show');
    }
});

window.addEventListener('appinstalled', () => {
    deferredPrompt = null;

    const installBanner = document.getElementById('pwaInstallBanner');
    if (installBanner) {
        installBanner.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const installBtn = document.getElementById('pwaInstallBtn');
    const dismissBtn = document.getElementById('pwaDismissBtn');
    const installBanner = document.getElementById('pwaInstallBanner');

    if (installBtn) {
        installBtn.addEventListener('click', async () => {
            if (!deferredPrompt) {
                return;
            }

            try {
                deferredPrompt.prompt();
                await deferredPrompt.userChoice;
            } finally {
                deferredPrompt = null;
                if (installBanner) {
                    installBanner.classList.remove('show');
                }
            }
        });
    }

    if (dismissBtn && installBanner) {
        dismissBtn.addEventListener('click', () => {
            installBanner.classList.remove('show');
        });
    }
});

window.addEventListener('load', () => {
    const isPwaDisplayMode = window.matchMedia('(display-mode: standalone)').matches;
    const isLegacyStandalone = typeof window.navigator.standalone === 'boolean' && window.navigator.standalone;

    if (isPwaDisplayMode || isLegacyStandalone) {
        document.body.classList.add('pwa-mode');
    }

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

    const ICONS = {
        'book-open': '<path d="M2 5.5A2.5 2.5 0 0 1 4.5 3H10a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4.5A2.5 2.5 0 0 0 2 18.5z"></path><path d="M22 5.5A2.5 2.5 0 0 0 19.5 3H14a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h5.5a2.5 2.5 0 0 1 2.5 2.5z"></path>',
        book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 17A2.5 2.5 0 0 0 4 19.5V5a2 2 0 0 1 2-2h14v14"></path>',
        briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="3" y1="13" x2="21" y2="13"></line>',
        code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
        coffee: '<path d="M18 8h1a3 3 0 0 1 0 6h-1"></path><path d="M2 8h16v5a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></path><line x1="6" y1="3" x2="6" y2="6"></line><line x1="10" y1="3" x2="10" y2="6"></line><line x1="14" y1="3" x2="14" y2="6"></line>',
        cpu: '<rect x="7" y="7" width="10" height="10" rx="2"></rect><rect x="10" y="10" width="4" height="4"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line>',
        database: '<ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v8c0 1.66 3.58 3 8 3s8-1.34 8-3V5"></path><path d="M4 9c0 1.66 3.58 3 8 3s8-1.34 8-3"></path>',
        file: '<path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline>',
        'file-text': '<path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="15" y2="17"></line>',
        globe: '<circle cx="12" cy="12" r="9"></circle><line x1="3" y1="12" x2="21" y2="12"></line><path d="M12 3a14 14 0 0 1 0 18"></path><path d="M12 3a14 14 0 0 0 0 18"></path>',
        layers: '<polygon points="12 2 3 7 12 12 21 7 12 2"></polygon><polyline points="3 12 12 17 21 12"></polyline><polyline points="3 17 12 22 21 17"></polyline>',
        'message-circle': '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H7l-4 3 1.5-5.5A8.5 8.5 0 1 1 21 11.5z"></path>',
        monitor: '<rect x="3" y="4" width="18" height="13" rx="2"></rect><line x1="8" y1="20" x2="16" y2="20"></line><line x1="12" y1="17" x2="12" y2="20"></line>',
        server: '<rect x="3" y="4" width="18" height="6" rx="2"></rect><rect x="3" y="14" width="18" height="6" rx="2"></rect><line x1="7" y1="7" x2="7.01" y2="7"></line><line x1="7" y1="17" x2="7.01" y2="17"></line><line x1="11" y1="7" x2="17" y2="7"></line><line x1="11" y1="17" x2="17" y2="17"></line>',
        smartphone: '<rect x="7" y="2" width="10" height="20" rx="2"></rect><line x1="11" y1="18" x2="13" y2="18"></line>',
        target: '<circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="3"></circle><line x1="12" y1="2" x2="12" y2="5"></line><line x1="12" y1="19" x2="12" y2="22"></line><line x1="2" y1="12" x2="5" y2="12"></line><line x1="19" y1="12" x2="22" y2="12"></line>',
        terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
        'trending-up': '<polyline points="3 17 9 11 13 15 21 7"></polyline><polyline points="14 7 21 7 21 14"></polyline>',
        video: '<rect x="2" y="6" width="14" height="12" rx="2"></rect><polygon points="16 10 22 7 22 17 16 14"></polygon>',
        wifi: '<path d="M2 8a15 15 0 0 1 20 0"></path><path d="M5 12a10 10 0 0 1 14 0"></path><path d="M8.5 16a5 5 0 0 1 7 0"></path><circle cx="12" cy="20" r="1"></circle>',
        zap: '<polygon points="13 2 4 14 11 14 9 22 20 9 13 9 13 2"></polygon>'
    };

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = String(text);
        return div.innerHTML;
    }

    function sanitizeResourceLink(link) {
        try {
            const parsedUrl = new URL(link);
            return parsedUrl.protocol === 'https:' ? parsedUrl.href : '#';
        } catch (error) {
            console.warn('Ignoring invalid resource URL:', link, error);
            return '#';
        }
    }

    function createIconMarkup(iconName, className = 'resource-icon-svg', size = 24) {
        const iconBody = ICONS[iconName] || ICONS.file;
        return `<svg class="${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${iconBody}</svg>`;
    }

    function createResourceCard(resource) {
        const categoryLabel = CATEGORY_NAMES[resource.category] || 'Resources';
        const resourceLink = sanitizeResourceLink(resource.link);

        return `
        <div class="resource-card" data-category="${escapeHtml(resource.category)}">
            <div class="resource-header">
                <div class="resource-icon">
                    ${createIconMarkup(resource.icon)}
                </div>
                <h3 class="resource-title">${escapeHtml(resource.title)}</h3>
            </div>
            <div class="resource-category">${escapeHtml(categoryLabel)}</div>
            <p class="resource-description">${escapeHtml(resource.description)}</p>
            <div class="resource-meta">
                <span>${createIconMarkup('book', 'resource-meta-icon', 16)} ${escapeHtml(resource.pdfs)}</span>
                <span>${createIconMarkup('video', 'resource-meta-icon', 16)} ${escapeHtml(resource.videos)}</span>
            </div>
            <a href="${escapeHtml(resourceLink)}" target="_blank" rel="noopener noreferrer" class="resource-link">Download Resources</a>
        </div>
    `;
    }

    function displayResources(resourcesToDisplay) {
        resourcesGrid.removeAttribute('aria-busy');

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
    }

    function setActiveFilterTab(selectedTab) {
        filterTabs.forEach(tab => {
            const isSelected = tab === selectedTab;
            tab.classList.toggle('active', isSelected);
            tab.setAttribute('aria-selected', String(isSelected));
            tab.setAttribute('tabindex', isSelected ? '0' : '-1');
        });
    }

    let currentCategory = 'all';
    let currentSearchTerm = '';
    let filterTransitionTimeout;

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

        clearTimeout(filterTransitionTimeout);
        resourcesGrid.setAttribute('aria-busy', 'true');

        const existingCards = document.querySelectorAll('.resource-card');
        if (existingCards.length > 0) {
            existingCards.forEach((card, index) => {
                card.style.transition = `opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.02}s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.02}s`;
                card.style.opacity = '0';
                card.style.transform = 'translateY(-10px) scale(0.98)';
            });

            filterTransitionTimeout = window.setTimeout(() => displayResources(filtered), 300);
            return;
        }

        displayResources(filtered);
    }

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            setActiveFilterTab(tab);
            currentCategory = tab.getAttribute('data-category') || 'all';
            filterResources();
        });
    });

    let searchTimeout;
    const supportsIntersectionObserver = 'IntersectionObserver' in window;

    const observer = supportsIntersectionObserver
        ? new IntersectionObserver((entries, activeObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                activeObserver.unobserve(entry.target);
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        })
        : null;

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        if (!observer) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            return;
        }

        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(card);
    });

    let scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (!scrollToTopBtn) {
        scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>';
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

    displayResources(resources);

    let searchLoadingTimeout;
    searchInput.addEventListener('input', (event) => {
        clearTimeout(searchTimeout);
        clearTimeout(searchLoadingTimeout);

        resourcesGrid.style.opacity = '0.5';
        resourcesGrid.style.pointerEvents = 'none';

        searchTimeout = setTimeout(() => {
            const value = event.target && typeof event.target.value === 'string' ? event.target.value : '';
            currentSearchTerm = value.trim();
            filterResources();

            searchLoadingTimeout = setTimeout(() => {
                resourcesGrid.style.opacity = '1';
                resourcesGrid.style.pointerEvents = 'auto';
            }, 120);
        }, CONFIG.SEARCH_DEBOUNCE);
    });

    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }, { passive: true });

    const hero = document.querySelector('.hero');
    if (hero) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (ticking) {
                return;
            }

            window.requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                const limitedScroll = Math.min(scrolled, CONFIG.PARALLAX_MAX_SCROLL);
                hero.style.setProperty('--scroll-offset', limitedScroll * CONFIG.PARALLAX_SPEED);
                hero.style.setProperty('--scroll-opacity', 1 - (limitedScroll / CONFIG.PARALLAX_MAX_SCROLL));
                ticking = false;
            });

            ticking = true;
        }, { passive: true });
    }

    const animateOnScroll = () => {
        const sections = document.querySelectorAll('.section-header');
        if (!supportsIntersectionObserver) {
            sections.forEach(section => section.classList.add('animate-in'));
            return;
        }

        const sectionObserver = new IntersectionObserver((entries, activeObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add('animate-in');
                activeObserver.unobserve(entry.target);
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        sections.forEach(section => sectionObserver.observe(section));
    };

    animateOnScroll();

    setTimeout(() => {
        document.body.style.removeProperty('opacity');
        document.body.style.removeProperty('transition');
    }, 600);

    filterTabs.forEach((tab, index) => {
        tab.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                const nextTab = filterTabs[index + 1] || filterTabs[0];
                nextTab.focus();
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                const previousTab = filterTabs[index - 1] || filterTabs[filterTabs.length - 1];
                previousTab.focus();
            } else if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                tab.click();
            }
        });
    });

    const searchContainer = searchInput.parentElement;
    if (!searchContainer) {
        return;
    }

    const searchClearBtn = document.createElement('button');
    searchClearBtn.className = 'search-clear';
    searchClearBtn.type = 'button';
    searchClearBtn.textContent = '×';
    searchClearBtn.setAttribute('aria-label', 'Clear search');
    searchClearBtn.hidden = true;
    searchContainer.appendChild(searchClearBtn);

    searchInput.addEventListener('input', () => {
        searchClearBtn.hidden = searchInput.value.length === 0;
    });

    searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearchTerm = '';
        searchClearBtn.hidden = true;
        resourcesGrid.style.opacity = '1';
        resourcesGrid.style.pointerEvents = 'auto';
        filterResources();
        searchInput.focus();
    });
}
