/**
 * DVA Volleyball Footer Component - SyncSoft Style
 */
class FooterComponent {
    constructor() {
        this.isInitialized = false;
        this.statsAnimated = false;
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.render();
            });
        } else {
            this.render();
        }
    }

    async render() {
        try {
            await this.loadFooterHTML();
            
            setTimeout(() => {
                this.bindAllEvents();
                this.setupScrollEffects();
                this.initStatsAnimation();
                this.isInitialized = true;
               
            }, 100);
            
        } catch (error) {
            console.warn('Loading footer inline due to error:', error);
            this.renderInlineFooter();
            setTimeout(() => {
                this.bindAllEvents();
                this.setupScrollEffects();
                this.initStatsAnimation();
            }, 100);
        }
    }

    async loadFooterHTML() {
        try {
            const response = await fetch('components/footer.html');
            if (!response.ok) throw new Error('Failed to load footer');
            
            const footerHTML = await response.text();
            const footerContainer = document.getElementById('footer-container');
            
            if (footerContainer) {
                footerContainer.innerHTML = footerHTML;
            } else {
                // Create container if not exists
                const container = document.createElement('div');
                container.id = 'footer-container';
                container.innerHTML = footerHTML;
                document.body.appendChild(container);
            }
        } catch (error) {
            throw error;
        }
    }

    renderInlineFooter() {
        const footerHTML = `
            <footer class="syncsoft-footer dva-footer" id="syncsoft-footer">
                <div class="footer-bg-effects">
                    <div class="footer-grid"></div>
                    <div class="footer-orb-1"></div>
                    <div class="footer-orb-2"></div>
                </div>
                
                <div class="footer-container">
                    <!-- Footer Main Content -->
                    <div class="footer-main">
                        <div class="footer-brand-section">
                            <div class="footer-brand">
                                <div class="footer-logo-wrapper">
                                    <img src="assets/images/logo/dva.png" alt="DVA Volleyball" class="footer-logo">
                                    <div class="logo-glow-footer"></div>
                                </div>
                                <div class="footer-brand-text">
                                    <h3 class="footer-brand-title">DVA Volleyball</h3>
                                    <p class="footer-tagline">Excellence in Every Spike</p>
                                </div>
                            </div>
                            
                            <p class="footer-description">
                                Transform your volleyball journey with professional training programs designed for champions. 
                                Join elite players and experience the power of excellence.
                            </p>
                            
                            <div class="footer-stats">
                                <div class="footer-stat">
                                    <span class="stat-number" data-target="500">0</span>
                                    <span class="stat-label">Players Trained</span>
                                </div>
                                <div class="footer-stat">
                                    <span class="stat-number" data-target="15">0</span>
                                    <span class="stat-label">Championships</span>
                                </div>
                                <div class="footer-stat">
                                    <span class="stat-number" data-target="98">0</span>
                                    <span class="stat-label">Success Rate</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="footer-links-grid">
                            <div class="footer-links-section">
                                <h4 class="footer-section-title">Navigation</h4>
                                <ul class="footer-links">
                                    <li><a href="#/home" class="footer-link">Home</a></li>
                                    <li><a href="#/ranking" class="footer-link">Ranking</a></li>
                                    <li><a href="#/tournament" class="footer-link">Tournament</a></li>
                                    <li><a href="#/players" class="footer-link">Players</a></li>
                                    <li><a href="#/information" class="footer-link">Information</a></li>
                                    <li><a href="#/news" class="footer-link">News</a></li>
                                    <li><a href="#/register" class="footer-link">Register</a></li>
                                </ul>
                            </div>
                            
                            <div class="footer-links-section">
                                <h4 class="footer-section-title">Programs</h4>
                                <ul class="footer-links">
                                    <li><a href="#/programs/training" class="footer-link">Professional Training</a></li>
                                    <li><a href="#/programs/coaching" class="footer-link">Elite Coaching</a></li>
                                    <li><a href="#/programs/camps" class="footer-link">Summer Camps</a></li>
                                    <li><a href="#/programs/workshops" class="footer-link">Skills Workshops</a></li>
                                </ul>
                            </div>
                            
                            <div class="footer-links-section">
                                <h4 class="footer-section-title">Resources</h4>
                                <ul class="footer-links">
                                    <li><a href="#/resources/events" class="footer-link">Events</a></li>
                                    <li><a href="#/resources/gallery" class="footer-link">Gallery</a></li>
                                    <li><a href="#/resources/blog" class="footer-link">Blog</a></li>
                                    <li><a href="#/contact" class="footer-link">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Newsletter -->
                    <div class="footer-newsletter">
                        <div class="newsletter-glass">
                            <div class="newsletter-content">
                                <div class="newsletter-text">
                                    <h4 class="newsletter-title">Stay in the Game</h4>
                                    <p class="newsletter-description">Get exclusive updates on tournaments and training programs.</p>
                                </div>
                                
                                <form class="newsletter-form" id="newsletter-form">
                                    <div class="newsletter-input-group">
                                        <input type="email" class="newsletter-input" placeholder="Enter your email" required>
                                        <button type="submit" class="newsletter-btn">
                                            <span>Subscribe</span>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M5 12h14M12 5l7 7-7 7"/>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Footer Bottom -->
                    <div class="footer-bottom">
                        <div class="footer-bottom-content">
                            <div class="footer-copyright">
                                <p>&copy; 2025 DVA Volleyball Club. All rights reserved.</p>
                                <p class="footer-inspired">Inspired by <span class="highlight-text">VNL 2025 FIVB</span></p>
                            </div>
                            
                            <div class="footer-social">
                                <a href="#" class="social-link" aria-label="Facebook">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                    </svg>
                                </a>
                                <a href="#" class="social-link" aria-label="Instagram">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                    </svg>
                                </a>
                                <a href="#" class="social-link" aria-label="YouTube">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                                        <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        <div class="footer-legal">
                            <a href="#/privacy" class="legal-link">Privacy</a>
                            <span>•</span>
                            <a href="#/terms" class="legal-link">Terms</a>
                            <span>•</span>
                            <a href="#/contact" class="legal-link">Contact</a>
                        </div>
                    </div>
                </div>
                
                <button class="scroll-to-top-modern" id="scroll-to-top" aria-label="Scroll to top">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 15l-6-6-6 6"/>
                    </svg>
                </button>
            </footer>
        `;
        
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = footerHTML;
        }
    }

    bindAllEvents() {
       
        
        // Newsletter form
        this.bindNewsletterEvents();
        
        // Scroll to top
        this.bindScrollToTopEvents();
        
        // Footer links
        this.bindFooterLinks();
        
        // Social links tracking
        this.bindSocialLinks();
        
      
    }

    bindNewsletterEvents() {
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSubmit(e);
            });
        }
    }

    handleNewsletterSubmit(e) {
        const email = e.target.querySelector('input[type="email"]').value;
        const button = e.target.querySelector('button');
        
        // Show loading state
        button.innerHTML = '<span>Subscribing...</span>';
        button.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            button.innerHTML = '✅ <span>Subscribed!</span>';
            button.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
            
            // Reset after 3 seconds
            setTimeout(() => {
                button.innerHTML = `
                    <span>Subscribe</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                `;
                button.disabled = false;
                button.style.background = '';
                e.target.reset();
            }, 3000);
            
        }, 1500);
        
    
    }

    bindScrollToTopEvents() {
        const scrollButton = document.getElementById('scroll-to-top');
        if (scrollButton) {
            scrollButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                // Add ripple effect
                this.addRippleEffect(scrollButton);
            });
        }
    }

    addRippleEffect(button) {
        const ripple = button.querySelector('.scroll-ripple');
        if (ripple) {
            ripple.style.animation = 'none';
            setTimeout(() => {
                ripple.style.animation = 'ripple 0.6s linear';
            }, 10);
        }
    }

    bindFooterLinks() {
        const footerLinks = document.querySelectorAll('.footer-link');
        footerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
              
                // Add navigation logic here
            });
        });
    }

    bindSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = link.getAttribute('aria-label');
               
                
                // Add actual social media URLs
                const socialUrls = {
                    'Facebook': 'https://www.facebook.com/profile.php?id=61552198143397',
                    'Instagram': 'https://www.instagram.com/nathan_hquoc/?igsh=aHA1ajI5c20xd2g%3D&utm_source=qr', 
                    'YouTube': 'https://youtube.com',
                    'Twitter': 'https://twitter.com',
                    'LinkedIn': 'https://www.linkedin.com/in/ho%C3%A0ng-qu%E1%BB%91c-duy-7428b3330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                };
                
                if (socialUrls[platform]) {
                    window.open(socialUrls[platform], '_blank');
                }
            });
        });
    }

    setupScrollEffects() {
        const scrollButton = document.getElementById('scroll-to-top');
        
        window.addEventListener('scroll', () => {
            if (scrollButton) {
                if (window.scrollY > 300) {
                    scrollButton.classList.add('visible');
                } else {
                    scrollButton.classList.remove('visible');
                }
            }
        }, { passive: true });
    }

    initStatsAnimation() {
        const stats = document.querySelectorAll('.stat-number');
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.statsAnimated) {
                    this.animateStats();
                    this.statsAnimated = true;
                }
            });
        }, observerOptions);

        if (stats.length > 0) {
            observer.observe(stats[0].parentElement.parentElement);
        }
    }

    animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        
        stats.forEach((stat, index) => {
            const target = parseInt(stat.getAttribute('data-target'));
            let current = 0;
            const increment = target / 60; // 60 frames for 1 second animation
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + (target === 98 ? '%' : '+');
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + (target === 98 ? '%' : '+');
                }
            }, 16); // ~60fps
        });
    }

    // Public methods
    updateFooterStats(stats) {
        Object.keys(stats).forEach(key => {
            const statElement = document.querySelector(`[data-target="${stats[key]}"]`);
            if (statElement) {
                statElement.setAttribute('data-target', stats[key]);
            }
        });
    }
}

// Initialize footer component
document.addEventListener('DOMContentLoaded', () => {
    const footerComponent = new FooterComponent();
    
    // Export for global access
    if (typeof window !== 'undefined') {
        window.FooterComponent = FooterComponent;
        window.footerComponent = footerComponent;
    }
});
