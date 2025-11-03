/**
 * DVA Volleyball - SyncSoft Style Application
 */
class DVAApp {
    constructor() {
        this.currentPage = 'home';
        this.isInitialized = false;
        this.init();
    }

    init() {
        console.log('🏐 DVA Volleyball App Starting - SyncSoft Style...');
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeApp();
            });
        } else {
            this.initializeApp();
        }
    }

    async initializeApp() {
        try {
            // Wait for CSS loaded
            await this.waitForCSSLoad();
            
            // Load SyncSoft-style home page
            await this.loadSyncSoftHome();
            
            // Initialize modern effects
            this.initModernEffects();
            this.initScrollEffects();
            
            this.isInitialized = true;
            console.log('✅ DVA Volleyball App Initialized - SyncSoft Style!');
            
            this.hideLoading();
            
        } catch (error) {
            console.error('❌ Error initializing app:', error);
        }
    }

    async loadSyncSoftHome() {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        
        mainContent.innerHTML = `
            <section class="hero-syncsoft">
                <div class="hero-bg-effects">
                    <div class="hero-grid"></div>
                    <div class="hero-orb-1"></div>
                    <div class="hero-orb-2"></div>
                </div>
                
                <div class="hero-container">
                    <div class="hero-content">
                        <div class="hero-text">
                            <div class="hero-badge">
                                <div class="badge-icon"></div>
                                Excellence in Sports
                            </div>
                            
                            <h1 class="hero-title">
                                Transform Your 
                                <br>Volleyball Journey
                            </h1>
                            
                            <p class="hero-subtitle">
                                At DVA Volleyball, we create championship-level training programs 
                                designed for your athletic growth. Join elite players and experience 
                                the power of professional volleyball development.
                            </p>
                            
                            <div class="hero-actions">
                                <a href="#/register" class="btn-primary-hero">
                                    <span>Start Training</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2"/>
                                    </svg>
                                </a>
                                <a href="#/tournament" class="btn-secondary-hero">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <polygon points="23 7 16 12 23 17 23 7" fill="currentColor"/>
                                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
                                    </svg>
                                    <span>Watch Demo</span>
                                </a>
                            </div>
                            
                            <div class="hero-stats">
                                <div class="stat-card">
                                    <span class="stat-number" data-target="500">0</span>
                                    <span class="stat-label">Players Trained</span>
                                </div>
                                <div class="stat-card">
                                    <span class="stat-number" data-target="15">0</span>
                                    <span class="stat-label">Championships</span>
                                </div>
                                <div class="stat-card">
                                    <span class="stat-number" data-target="98">0</span>
                                    <span class="stat-label">Success Rate</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="hero-visual">
                            <div class="hero-card-stack">
                                <div class="hero-card hero-card-1">
                                    <div class="card-header">
                                        <div class="card-icon">🏐</div>
                                        <div class="card-title">Team Performance</div>
                                    </div>
                                    <div class="card-metric">94%</div>
                                    <div class="card-label">Win Rate This Season</div>
                                </div>
                                
                                <div class="hero-card hero-card-2">
                                    <div class="card-header">
                                        <div class="card-icon">⭐</div>
                                        <div class="card-title">Player Growth</div>
                                    </div>
                                    <div class="card-metric">85%</div>
                                    <div class="card-label">Skill Improvement</div>
                                </div>
                                
                                <div class="hero-card hero-card-3">
                                    <div class="card-header">
                                        <div class="card-icon">🏆</div>
                                        <div class="card-title">Tournaments</div>
                                    </div>
                                    <div class="card-metric">12</div>
                                    <div class="card-label">This Year</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
        
        // Animate counters
        this.animateCounters();
    }

    initModernEffects() {
        // Parallax effect for hero orbs
        window.addEventListener('mousemove', (e) => {
            const orb1 = document.querySelector('.hero-orb-1');
            const orb2 = document.querySelector('.hero-orb-2');
            
            if (orb1 && orb2) {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                orb1.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
                orb2.style.transform = `translate(${x * -15}px, ${y * -15}px)`;
            }
        });
        
        // Card hover effects
        const heroCards = document.querySelectorAll('.hero-card');
        heroCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                heroCards.forEach(c => {
                    if (c !== card) {
                        c.style.opacity = '0.6';
                        c.style.transform += ' scale(0.95)';
                    }
                });
            });
            
            card.addEventListener('mouseleave', () => {
                heroCards.forEach(c => {
                    c.style.opacity = '';
                    c.style.transform = c.style.transform.replace(' scale(0.95)', '');
                });
            });
        });
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    let current = 0;
                    const increment = target / 50;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            counter.textContent = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    }

    async waitForCSSLoad() {
        return new Promise((resolve) => {
            const checkCSS = () => {
                const testElement = document.createElement('div');
                testElement.className = 'syncsoft-header';
                document.body.appendChild(testElement);
                
                const computedStyle = window.getComputedStyle(testElement);
                const cssLoaded = computedStyle.getPropertyValue('--syncsoft-primary');
                
                document.body.removeChild(testElement);
                
                if (cssLoaded) {
                    console.log('✅ SyncSoft CSS Loaded Successfully');
                    resolve();
                } else {
                    setTimeout(checkCSS, 50);
                }
            };
            
            checkCSS();
        });
    }

    hideLoading() {
        const loadingContainer = document.querySelector('.loading-container');
        if (loadingContainer) {
            loadingContainer.style.opacity = '0';
            setTimeout(() => {
                loadingContainer.style.display = 'none';
            }, 300);
        }
    }

    initScrollEffects() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const header = document.getElementById('dva-header');
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        }, { passive: true });
    }
}

// Initialize the app
const dvaApp = new DVAApp();

// Export for global access
if (typeof window !== 'undefined') {
    window.DVAApp = DVAApp;
    window.dvaApp = dvaApp;
}
