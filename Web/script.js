// Resources Data
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
        pdfs: "9 PDFs",
        videos: "Video Courses",
        link: "https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub/releases/tag/v1.0-python"
    },
    {
        id: 3,
        title: "Java Bundle",
        category: "programming",
        icon: "coffee",
        description: "Comprehensive Java programming with 45-day roadmap and handwritten notes.",
        pdfs: "5 PDFs",
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
        pdfs: "2 PDFs",
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
    }
];

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const filterTabs = document.querySelectorAll('.filter-tab');
const searchInput = document.getElementById('searchInput');
const resourcesGrid = document.getElementById('resourcesGrid');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Create Resource Card
function createResourceCard(resource) {
    const categoryNames = {
        'programming': 'Programming',
        'web': 'Web Development',
        'cs': 'CS Fundamentals',
        'specialized': 'Specialized'
    };

    return `
        <div class="resource-card" data-category="${resource.category}">
            <div class="resource-header">
                <div class="resource-icon">
                    <i data-feather="${resource.icon}"></i>
                </div>
                <h3 class="resource-title">${resource.title}</h3>
            </div>
            <div class="resource-category">${categoryNames[resource.category]}</div>
            <p class="resource-description">${resource.description}</p>
            <div class="resource-meta">
                <span><i data-feather="book" style="width: 16px; height: 16px; vertical-align: middle;"></i> ${resource.pdfs}</span>
                <span><i data-feather="video" style="width: 16px; height: 16px; vertical-align: middle;"></i> ${resource.videos}</span>
            </div>
            <a href="${resource.link}" target="_blank" class="resource-link">Download Resources</a>
        </div>
    `;
}

// Display Resources
function displayResources(resourcesToDisplay) {
    if (resourcesToDisplay.length === 0) {
        resourcesGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <h3 style="color: var(--text-secondary); font-size: 1.5rem;">No resources found</h3>
                <p style="color: var(--text-light); margin-top: 1rem;">Try adjusting your search or filter</p>
            </div>
        `;
        return;
    }

    resourcesGrid.innerHTML = resourcesToDisplay.map(resource => createResourceCard(resource)).join('');
    
    // Re-initialize Feather icons for dynamically added content
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Filter Resources
let currentCategory = 'all';
let currentSearchTerm = '';

function filterResources() {
    let filtered = resources;

    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(resource => resource.category === currentCategory);
    }

    // Filter by search term
    if (currentSearchTerm) {
        filtered = filtered.filter(resource => 
            resource.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            resource.description.toLowerCase().includes(currentSearchTerm.toLowerCase())
        );
    }

    displayResources(filtered);
}

// Filter Tab Click
filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.getAttribute('data-category');
        filterResources();
    });
});

// Search Input
searchInput.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value;
    filterResources();
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Initial display of resources
    displayResources(resources);

    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.feature-card, .resource-card, .about-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll to top button (optional enhancement)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    justify-content: center;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to resource cards
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.resource-card')) {
        e.target.closest('.resource-card').style.borderColor = 'var(--primary-color)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.resource-card')) {
        e.target.closest('.resource-card').style.borderColor = 'var(--border-color)';
    }
});

// Console message
console.log('%cComplete Coding Resources Hub', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with care by Mohammad Faiz', 'color: #64748b; font-size: 14px;');
console.log('%cGitHub: https://github.com/Mohammad-Faiz-Cloud-Engineer/Complete-Coding-Resources-Hub', 'color: #64748b; font-size: 12px;');
