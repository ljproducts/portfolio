// Professional Portfolio JavaScript - Complete Kawaii Version with Instagram Menu Tab Case Study
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initProgressIndicator();
    initScrollAnimations();
    initCaseStudies();
    initContactForm();
    initFloatingElements();
    
    console.log('✨ Kawaii Portfolio loaded successfully!');
    
    // Navigation and smooth scrolling
    function initNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        const sections = document.querySelectorAll('section[id]');
        
        // Navigation click handlers
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = item.getAttribute('data-section');
                const section = document.getElementById(sectionId);
                
                if (section) {
                    section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Scroll button handlers
        const scrollButtons = document.querySelectorAll('[data-scroll]');
        scrollButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const target = button.getAttribute('data-scroll');
                const section = document.getElementById(target);
                
                if (section) {
                    section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Update active navigation on scroll
        function updateActiveNav() {
            const scrollPosition = window.pageYOffset + window.innerHeight / 2;
            
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                    navItems.forEach(nav => nav.classList.remove('active'));
                    if (navItems[index]) {
                        navItems[index].classList.add('active');
                    }
                }
            });
        }
        
        // Throttled scroll handler
        let ticking = false;
        function handleScroll() {
            updateActiveNav();
            updateProgressIndicator();
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(handleScroll);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick);
        updateActiveNav(); // Initial call
    }
    
    // Progress indicator with food-themed icons
    function initProgressIndicator() {
        const progressIcon = document.getElementById('progressIcon');
        const progressFill = document.querySelector('.progress-fill');
        const progressTrail = document.getElementById('progressTrail');
        
        // Section icons mapping based on requirements
        const sectionIcons = {
            'hero': '🌾',      // flour
            'skills': '🥄',    // mixing spoon
            'projects': '🍞',  // bread/dough
            'case-studies': '🥐', // croissant
            'articles': '📖',  // reading
            'contact': '📧'    // connect
        };
        
        window.updateProgressIndicator = function() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrollTop = window.pageYOffset;
            const progress = Math.min((scrollTop / documentHeight) * 100, 100);
            
            // Update progress bar
            if (progressFill) {
                progressFill.style.width = progress + '%';
            }
            
            // Update progress bar aria value
            if (progressTrail) {
                progressTrail.setAttribute('aria-valuenow', Math.round(progress));
            }
            
            // Update icon based on current section
            if (progressIcon) {
                const sections = document.querySelectorAll('section[id]');
                const scrollPosition = window.pageYOffset + window.innerHeight / 2;
                
                let currentSection = 'hero';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                        currentSection = section.id;
                    }
                });
                
                const newIcon = sectionIcons[currentSection] || '🌾';
                if (progressIcon.textContent !== newIcon) {
                    progressIcon.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        progressIcon.textContent = newIcon;
                        progressIcon.style.transform = 'scale(1)';
                    }, 150);
                }
            }
        };
        
        // Initial call
        updateProgressIndicator();
    }
    
    // Scroll-triggered animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animations for better visual effect
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, index * 100);
                }
            });
        }, observerOptions);
        
        // Observe all animatable elements
        const animatableElements = document.querySelectorAll('[data-animate]');
        animatableElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Case study modal functionality with comprehensive Instagram Menu Tab case study
    function initCaseStudies() {
        const modal = document.getElementById('caseStudyModal');
        const modalContent = document.getElementById('caseStudyContent');
        const openButtons = document.querySelectorAll('[data-open]');
        const closeElements = document.querySelectorAll('[data-close]');
        
        // Case study data - INCLUDING COMPREHENSIVE INSTAGRAM MENU TAB
        const caseStudies = {
            'instagram-menu-tab': {
                title: 'Instagram Menu Tab Feature',
                company: 'Product Strategy Case Study',
                icon: '📱',
                challenge: 'Small food businesses struggle with menu management on Instagram - no direct menu tab, manual updates, limited in-app tools, and customer confusion when trying to find menu information',
                process: [
                    'Conducted extensive user research with target personas including food truck owners, restaurant managers, and Instagram users',
                    'Defined core problems through stakeholder interviews and competitive analysis of existing social media business tools',
                    'Designed comprehensive solution with dynamic menu management, filtering capabilities, and seamless integration with Instagram Stories',
                    'Developed go-to-market strategy with phased rollout plan targeting major metropolitan food markets',
                    'Created detailed user personas: "Busy Foodie" (customers) and "Ambitious Owner" (business operators)',
                    'Established metrics framework including engagement rates, conversion tracking, and business adoption rates'
                ],
                outcome: 'Comprehensive product strategy with projected 20-30% conversion rate improvement and detailed rollout plan across major metropolitan areas. Strategy includes persona-driven design, measurable KPIs, and scalable implementation framework',
                skills: ['Product Strategy', 'User Research', 'Go-to-Market Planning', 'Personas Development', 'Metrics Planning'],
                personas: [
                    {
                        name: 'The Busy Foodie',
                        demographics: 'Ages 25-40, Urban professionals, Regular Instagram users',
                        painPoints: 'Difficulty finding current menus, confusion about availability, time-consuming menu searches',
                        goals: 'Quick access to menu information, easy ordering process, discover new food options'
                    },
                    {
                        name: 'The Ambitious Owner',
                        demographics: 'Small business owners, Food trucks, Local restaurants',
                        painPoints: 'Manual menu updates, limited tools, customer confusion, missed sales opportunities',
                        goals: 'Streamlined menu management, increased customer engagement, better conversion rates'
                    }
                ],
                metrics: [
                    'User Engagement: 25% increase in profile visits from menu tab',
                    'Conversion Rate: 20-30% improvement in story-to-order conversion',
                    'Business Adoption: Target 15% of food businesses in pilot markets',
                    'Customer Satisfaction: 85%+ positive feedback on menu accessibility'
                ],
                goToMarket: [
                    'Phase 1: Beta testing with 100 select food businesses in NYC and LA',
                    'Phase 2: Rollout to major metropolitan areas (SF, Chicago, Austin)',
                    'Phase 3: National expansion with enhanced features and analytics',
                    'Partnership strategy with food delivery apps and POS systems'
                ]
            },
            'henny-penny': {
                title: 'Henny Penny Installation & Training Program',
                company: 'Acosta',
                icon: '🥘',
                challenge: 'Standardize training protocols across multiple markets while ensuring regulatory compliance and performance consistency',
                process: [
                    'Partnered with field teams to understand local challenges and requirements',
                    'Developed standardized training materials and assessment criteria', 
                    'Coordinated and delivered training sessions across multiple markets',
                    'Implemented tracking systems to measure effectiveness and compliance'
                ],
                outcome: 'Improved performance consistency and regulatory alignment across all locations',
                skills: ['Multi-market Coordination', 'Compliance Management', 'Training Standardization']
            },
            'graba': {
                title: 'Food & Beverage Strategy Consultation',
                company: 'Grab\'a',
                icon: '🍽️',
                challenge: 'Enhance F&B offerings based on market insights while optimizing event experience and client satisfaction',
                process: [
                    'Conducted systematic customer feedback analysis',
                    'Performed competitive research to identify gaps and opportunities',
                    'Collaborated with stakeholders to align product selection',
                    'Refined service execution based on insights gathered'
                ],
                outcome: 'Optimized event experience and improved client satisfaction through data-driven F&B decisions',
                skills: ['Customer Research', 'Competitive Analysis', 'Stakeholder Alignment']
            },
            'panda-js': {
                title: 'Panda J\'s: From Concept to Market Success',
                company: 'Panda J\'s (Founded)',
                icon: '🐼',
                challenge: 'Build profitable catering business from concept using limited resources while achieving product-market fit',
                process: [
                    'Applied Agile-inspired development cycles to prioritize offerings',
                    'Conducted A/B testing on recipes and presentation styles',
                    'Established customer feedback loops for continuous improvement',
                    'Coordinated with suppliers and clients to optimize operations',
                    'Monitored trends and adapted offerings based on market analysis'
                ],
                outcome: 'Built successful 6-year business with strong customer retention and proven market fit',
                skills: ['Product-Market Fit', 'Iterative Development', 'Customer Validation', 'Business Development']
            }
        };
        
        // Open case study
        openButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const caseStudyId = button.getAttribute('data-open');
                openCaseStudy(caseStudyId);
            });
        });
        
        // Close case study
        closeElements.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                closeCaseStudy();
            });
        });
        
        function openCaseStudy(caseStudyId) {
            const study = caseStudies[caseStudyId];
            if (!study || !modal || !modalContent) return;
            
            // Build comprehensive content for Instagram Menu Tab case study
            let contentHTML = `
                <div class="case-study-content">
                    <div class="case-study-header">
                        <div class="case-study-icon">${study.icon}</div>
                        <h2 id="caseStudyTitle">${study.title}</h2>
                        <p class="case-study-company">${study.company}</p>
                    </div>
                    
                    <div class="case-study-section">
                        <h3>🎯 Challenge</h3>
                        <p>${study.challenge}</p>
                    </div>
                    
                    <div class="case-study-section">
                        <h3>🛠️ Process & Methodology</h3>
                        <ul>
                            ${study.process.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>`;
            
            // Add comprehensive sections for Instagram Menu Tab
            if (caseStudyId === 'instagram-menu-tab') {
                contentHTML += `
                    <div class="case-study-section">
                        <h3>👥 User Personas</h3>
                        ${study.personas.map(persona => `
                            <div class="persona-card">
                                <h4>${persona.name}</h4>
                                <p><strong>Demographics:</strong> ${persona.demographics}</p>
                                <p><strong>Pain Points:</strong> ${persona.painPoints}</p>
                                <p><strong>Goals:</strong> ${persona.goals}</p>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="case-study-section">
                        <h3>📊 Key Metrics & KPIs</h3>
                        <ul class="metrics-list">
                            ${study.metrics.map(metric => `<li>${metric}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="case-study-section">
                        <h3>🚀 Go-to-Market Strategy</h3>
                        <ul class="gtm-list">
                            ${study.goToMarket.map(phase => `<li>${phase}</li>`).join('')}
                        </ul>
                    </div>`;
            }
            
            contentHTML += `
                    <div class="case-study-section">
                        <h3>📊 Outcome & Impact</h3>
                        <p>${study.outcome}</p>
                    </div>
                    
                    <div class="case-study-section">
                        <h3>🚀 Key Skills Applied</h3>
                        <div class="skills-used">
                            ${study.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                        </div>
                    </div>
                </div>`;
            
            modalContent.innerHTML = contentHTML;
            
            // Add case study specific styles
            const style = document.createElement('style');
            style.textContent = `
                .case-study-content {
                    max-width: 700px;
                }
                .case-study-header {
                    text-align: center;
                    margin-bottom: var(--space-32);
                }
                .case-study-icon {
                    font-size: 60px;
                    margin-bottom: var(--space-16);
                }
                .case-study-header h2 {
                    font-size: var(--font-size-3xl);
                    font-weight: var(--font-weight-bold);
                    margin: 0 0 var(--space-8) 0;
                    background: var(--gradient-primary);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .case-study-company {
                    color: var(--color-text-secondary);
                    font-size: var(--font-size-lg);
                    font-weight: var(--font-weight-medium);
                    margin: 0;
                }
                .case-study-section {
                    margin-bottom: var(--space-24);
                }
                .case-study-section h3 {
                    font-size: var(--font-size-xl);
                    font-weight: var(--font-weight-semibold);
                    margin: 0 0 var(--space-12) 0;
                    color: var(--color-text);
                }
                .case-study-section p {
                    line-height: var(--line-height-normal);
                    color: var(--color-text-secondary);
                    margin: 0;
                }
                .case-study-section ul {
                    padding-left: var(--space-20);
                    margin: var(--space-12) 0 0 0;
                }
                .case-study-section li {
                    margin-bottom: var(--space-8);
                    line-height: var(--line-height-normal);
                    color: var(--color-text-secondary);
                }
                .persona-card {
                    background: var(--color-bg-1);
                    padding: var(--space-16);
                    border-radius: var(--radius-base);
                    margin-bottom: var(--space-12);
                }
                .persona-card h4 {
                    color: var(--color-text);
                    font-size: var(--font-size-lg);
                    margin: 0 0 var(--space-8) 0;
                }
                .metrics-list li, .gtm-list li {
                    background: var(--color-bg-2);
                    padding: var(--space-8) var(--space-12);
                    border-radius: var(--radius-sm);
                    margin-bottom: var(--space-6);
                    list-style: none;
                }
                .metrics-list, .gtm-list {
                    padding-left: 0;
                }
                .skills-used {
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--space-8);
                    margin-top: var(--space-12);
                }
                .skill-badge {
                    background: var(--gradient-secondary);
                    color: var(--color-text);
                    padding: var(--space-6) var(--space-12);
                    border-radius: var(--radius-full);
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-medium);
                }
            `;
            document.head.appendChild(style);
            
            // Show modal
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            // Focus management for accessibility
            modal.setAttribute('aria-labelledby', 'caseStudyTitle');
            const closeButton = modal.querySelector('.modal__close');
            if (closeButton) {
                closeButton.focus();
            }
        }
        
        function closeCaseStudy() {
            if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
                
                // Return focus to the button that opened the modal
                const activeButton = document.querySelector('[data-open]:focus');
                if (activeButton) {
                    activeButton.focus();
                }
            }
        }
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
                closeCaseStudy();
            }
        });
    }
    
    // Contact form handling
    function initContactForm() {
        const form = document.getElementById('contactForm');
        const downloadBtn = document.getElementById('downloadResume');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const formData = new FormData(form);
                const name = formData.get('name')?.trim();
                const email = formData.get('email')?.trim();
                const message = formData.get('message')?.trim();
                
                // Validation
                if (!name || !email || !message) {
                    showMessage('Please fill in all fields! 🥺', 'error');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showMessage('Please enter a valid email address! 📧', 'error');
                    return;
                }
                
                // Simulate form submission
                const submitButton = form.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                
                submitButton.innerHTML = 'Sending... 🚀';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    showMessage('Thank you for your message! I\'ll get back to you within 24 hours! 💕', 'success');
                    form.reset();
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                }, 2000);
            });
        }
        
        // Resume download simulation
        if (downloadBtn) {
            downloadBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                const originalText = downloadBtn.innerHTML;
                downloadBtn.innerHTML = 'Preparing... 📄';
                downloadBtn.disabled = true;
                
                setTimeout(() => {
                    showMessage('Resume download ready! In a real implementation, this would download the PDF! 📥', 'success');
                    downloadBtn.innerHTML = originalText;
                    downloadBtn.disabled = false;
                }, 1500);
            });
        }
        
        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
        
        function showMessage(message, type) {
            // Remove existing messages
            const existingMessage = document.querySelector('.notification-message');
            if (existingMessage) {
                existingMessage.remove();
            }
            
            // Create message element
            const messageElement = document.createElement('div');
            messageElement.className = 'notification-message';
            messageElement.innerHTML = message;
            messageElement.setAttribute('role', 'alert');
            messageElement.setAttribute('aria-live', 'polite');
            
            const bgColor = type === 'error' ? '#FF6B6B' : 'var(--kawaii-mint)';
            
            messageElement.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: ${bgColor};
                color: var(--color-text);
                padding: var(--space-20) var(--space-24);
                border-radius: var(--radius-lg);
                box-shadow: var(--shadow-hover);
                z-index: 10000;
                font-weight: var(--font-weight-medium);
                text-align: center;
                max-width: 400px;
                animation: message-in 0.5s ease-out;
            `;
            
            // Add CSS animation if not already present
            if (!document.querySelector('#message-animations')) {
                const style = document.createElement('style');
                style.id = 'message-animations';
                style.textContent = `
                    @keyframes message-in {
                        from {
                            opacity: 0;
                            transform: translate(-50%, -50%) scale(0.9);
                        }
                        to {
                            opacity: 1;
                            transform: translate(-50%, -50%) scale(1);
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            document.body.appendChild(messageElement);
            
            // Auto remove after 4 seconds
            setTimeout(() => {
                if (messageElement.parentNode) {
                    messageElement.style.animation = 'message-in 0.3s ease-in reverse';
                    setTimeout(() => {
                        messageElement.remove();
                    }, 300);
                }
            }, 4000);
        }
    }
    
    // Enhanced floating elements
    function initFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating-element');
        
        floatingElements.forEach((element, index) => {
            // Randomize animation properties
            const randomDelay = Math.random() * 3;
            const randomDuration = 5 + Math.random() * 3;
            
            element.style.animationDelay = randomDelay + 's';
            element.style.animationDuration = randomDuration + 's';
            
            // Add subtle click interaction
            element.addEventListener('click', () => {
                element.style.animation = 'none';
                element.style.transform = 'scale(1.3) rotate(360deg)';
                element.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    element.style.animation = `float-around ${randomDuration}s ease-in-out infinite`;
                    element.style.transform = '';
                    element.style.transition = '';
                }, 600);
            });
        });
        
        // Article click handlers
        const articleCards = document.querySelectorAll('.article-card');
        articleCards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.querySelector('h3').textContent;
                const source = card.querySelector('.muted').textContent;
                
                const messageElement = document.createElement('div');
                messageElement.innerHTML = `
                    <div style="text-align: center; margin-bottom: var(--space-16); font-size: 40px;">📚</div>
                    <h3 style="margin: 0 0 var(--space-8) 0; color: var(--color-text); font-size: var(--font-size-xl);">"${title}"</h3>
                    <p style="margin: 0 0 var(--space-12) 0; color: var(--color-text-secondary); font-style: italic;">${source}</p>
                    <p style="margin: 0 0 var(--space-16) 0; color: var(--color-text-secondary); line-height: var(--line-height-normal);">
                        This is a sample article for portfolio demonstration. 
                        In a real implementation, this would open the actual article! 🎨
                    </p>
                    <button onclick="this.parentElement.remove()" class="btn btn--primary btn--sm">
                        Got it! 👍
                    </button>
                `;
                
                messageElement.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: var(--color-surface);
                    padding: var(--space-24);
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-hover);
                    z-index: 10000;
                    max-width: 400px;
                    text-align: center;
                    backdrop-filter: blur(10px);
                    border: 1px solid var(--color-border);
                `;
                
                document.body.appendChild(messageElement);
            });
        });
    }
});

// Export updateProgressIndicator for external use if needed
window.updateProgressIndicator = window.updateProgressIndicator || function() {
    console.log('Progress indicator not initialized yet');
};