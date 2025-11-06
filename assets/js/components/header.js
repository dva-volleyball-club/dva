/**
 * DVA Volleyball Header Component - FIXED  INTEGRATION
 * D:\dva\DVA-Volleyball-Website\assets\js\components\header.js
 */
class HeaderComponent {
    constructor() {
        this.isInitialized = false;
        this.mobileMenuOpen = false;
        this.activeDropdown = null;
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
        // FORCE sử dụng inline header thay vì load file
        console.log('🚀 Using inline header with all 8 menu items...');
        this.renderInlineHeader();
        
        setTimeout(() => {
            this.bindAllEvents();
            this.setupScrollEffects();
            this.debugMobileMenu();
            this.isInitialized = true;
            console.log('✅ Header component loaded with mobile menu');
        }, 100);
    }

    // ĐÂY LÀ VẤN ĐỀ - File header.html không đầy đủ, nên ta force inline
    async loadHeaderHTML() {
        // Skip loading file, use inline instead
        throw new Error('Force inline header');
    }

    renderInlineHeader() {
        const headerHTML = `
            <header class="syncsoft-header dva-header" id="dva-header">
                <div class="header-glass-bg"></div>
                <div class="header-container">
                    <div class="logo-section">
                        <a href="#/home" class="logo-link-modern">
                            <div class="logo-wrapper">
                                <img src="assets/images/logo/dva.png" alt="DVA Volleyball" class="logo-img-modern">
                                <div class="logo-glow"></div>
                            </div>
                            <div class="brand-text-modern">
                                <span class="brand-primary">DVA</span>
                                <span class="brand-secondary">Volleyball</span>
                            </div>
                        </a>
                    </div>

                    <nav class="nav-modern" role="navigation">
                        <div class="nav-glass-container">
                            <a href="/home" class="nav-item-modern active" data-page="home">
                                <span class="nav-text">Home</span>
                                <div class="nav-indicator"></div>
                            </a>
                            <a href="/ranking" class="nav-item-modern" data-page="ranking">
                                <span class="nav-text">Ranking</span>
                                <div class="nav-indicator"></div>
                            </a>
                            <a href="/tournament" class="nav-item-modern" data-page="tournament">
                                <span class="nav-text">Tournament</span>
                                <div class="nav-indicator"></div>
                            </a>
                            <a href="/players/advanced" class="nav-item-modern" data-page="players">
                                <span class="nav-text">Players</span>
                                <div class="nav-indicator"></div>
                            </a>
                            <a href="/information" class="nav-item-modern" data-page="information">
                                <span class="nav-text">Information</span>
                                <div class="nav-indicator"></div>
                            </a>
                            <a href="/news" class="nav-item-modern" data-page="news">
                                <span class="nav-text">News</span>
                                <div class="nav-indicator"></div>
                            </a>
                            <a href="/register" class="nav-item-modern" data-page="register">
                                <span class="nav-text">Register</span>
                                <div class="nav-indicator"></div>
                            </a>
                        </div>
                    </nav>

                    <div class="header-actions">


                        <a href="#/contact" class="cta-btn-modern">
                            <span class="btn-text">Contact Us</span>
                            <div class="btn-shine"></div>
                        </a>
                    </div>

                    <button class="mobile-menu-btn-modern" id="mobile-menu-btn" aria-label="Open menu">
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                </div>

                <!-- MOBILE MENU - COMPLETE WITH ALL 8 ITEMS -->
                <div class="mobile-nav-overlay" id="mobile-nav-overlay">
                    <div class="mobile-nav-backdrop"></div>
                    <div class="mobile-nav-content">
                        <!-- Mobile Header -->
                        <div class="mobile-nav-header">
                            <div class="mobile-nav-brand">
                                <img src="assets/images/logo/dva.png" alt="DVA Volleyball" class="mobile-nav-logo">
                                <span class="mobile-brand-text">DVA Volleyball</span>
                            </div>
                            <button class="mobile-close-btn" id="mobile-close-btn" type="button" aria-label="Close menu">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 6L6 18"/>
                                    <path d="M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        
                        <!-- Mobile Body - ALL 8 MENU ITEMS -->
                        <div class="mobile-nav-body">
                            <nav class="mobile-nav-menu">
                                <!-- 1. HOME -->
                                <a href="/home" class="mobile-nav-item active" data-page="home">
                                    <div class="mobile-nav-icon">🏠</div>
                                    <span class="mobile-nav-text">Home</span>
                                    <div class="mobile-nav-arrow">›</div>
                                </a>
                                
                                <!-- 2. RANKING -->
                                <a href="/ranking" class="mobile-nav-item" data-page="ranking">
                                    <div class="mobile-nav-icon">🏆</div>
                                    <span class="mobile-nav-text">Ranking</span>
                                    <div class="mobile-nav-arrow">›</div>
                                </a>
                                
                                <!-- 3. TOURNAMENT -->
                                <a href="/tournament" class="mobile-nav-item" data-page="tournament">
                                    <div class="mobile-nav-icon">🏐</div>
                                    <span class="mobile-nav-text">Tournament</span>
                                    <div class="mobile-nav-arrow">›</div>
                                </a>
                                
                                <!-- 4. PLAYERS -->
                                <a href="/players/advanced" class="mobile-nav-item" data-page="players">
                                    <div class="mobile-nav-icon">👥</div>
                                    <span class="mobile-nav-text">Players</span>
                                    <div class="mobile-nav-arrow">›</div>
                                </a>
                                
                                <!-- 5. INFORMATION -->
                                <a href="/information" class="mobile-nav-item" data-page="information">
                                    <div class="mobile-nav-icon">ℹ️</div>
                                    <span class="mobile-nav-text">Information</span>
                                    <div class="mobile-nav-arrow">›</div>
                                </a>
                                
                                <!-- 6. NEWS -->
                                <a href="/news" class="mobile-nav-item" data-page="news">
                                    <div class="mobile-nav-icon">📰</div>
                                    <span class="mobile-nav-text">News</span>
                                    <div class="mobile-nav-arrow">›</div>
                                </a>
                                
                                <!-- 7. REGISTER -->
                                <a href="/register" class="mobile-nav-item" data-page="register">
                                    <div class="mobile-nav-icon">📝</div>
                                    <span class="mobile-nav-text">Register</span>
                                    <div class="mobile-nav-arrow">›</div>
                                </a>
                                <!-- 9. CONTACT US -->
                                <a href="#/contact" class="mobile-nav-item" data-page="contact">
                                    <div class="mobile-nav-icon">📞</div>
                                    <span class="mobile-nav-text">Contact Us</span>
                                    <div class="mobile-nav-arrow">›</div>
                                </a>

                                <div class="mobile-app-info">
                                    <p class="app-version">DVA Volleyball v1.0</p>
                                    <p class="app-copyright">&copy; 2025 DVA Club</p>
                                </div>
                            </nav>
                            
                            
                        </div>
                    </div>
                </div>
                
                <div class="header-gradient"></div>
            </header>
        `;
        
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            headerContainer.innerHTML = headerHTML;
            console.log('✅ Inline header with 8 menu items created');
        } else {
            // Create container if not exists
            const container = document.createElement('div');
            container.id = 'header-container';
            container.innerHTML = headerHTML;
            document.body.prepend(container);
            console.log('✅ Header container created with inline header');
        }
    }

    // ... (rest of your methods remain exactly the same)
    bindAllEvents() {
        console.log('🔗 Binding all header events...');
        
        // Mobile menu events - QUAN TRỌNG NHẤT
        this.bindMobileMenuEvents();
        
        // Desktop navigation events
        this.bindNavigationEvents();
        
        // Dropdown events  
        this.bindDropdownEvents();
        
        // Global events
        this.bindGlobalEvents();
        
        console.log('✅ All header events bound successfully');
    }

    bindMobileMenuEvents() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileOverlay = document.getElementById('mobile-nav-overlay');
        const mobileCloseBtn = document.getElementById('mobile-close-btn');
        const mobileBackdrop = document.querySelector('.mobile-nav-backdrop');

        console.log('📱 Binding mobile menu events...');
        console.log('Elements found:', {
            button: !!mobileMenuBtn,
            overlay: !!mobileOverlay,
            closeBtn: !!mobileCloseBtn,
            backdrop: !!mobileBackdrop
        });

        // Mobile menu toggle
        if (mobileMenuBtn) {
            // Remove existing listeners to prevent duplicates
            mobileMenuBtn.replaceWith(mobileMenuBtn.cloneNode(true));
            const newMobileBtn = document.getElementById('mobile-menu-btn');
            
            newMobileBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleMobileMenu();
            });
        }

        // Close button
        if (mobileCloseBtn) {
            mobileCloseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('❌ Mobile close button clicked!');
                this.closeMobileMenu();
            });
        }

        // Backdrop click to close
        if (mobileBackdrop) {
            mobileBackdrop.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('🖱️ Mobile backdrop clicked!');
                this.closeMobileMenu();
            });
        }

        

        
    }

    // ... (all other methods remain the same)

    toggleMobileMenu() {
        console.log('🔄 Toggling mobile menu. Current state:', this.mobileMenuOpen);
        
        if (this.mobileMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    openMobileMenu() {
        console.log('📂 Opening mobile menu...');
        
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileOverlay = document.getElementById('mobile-nav-overlay');
        
        if (mobileBtn && mobileOverlay) {
            this.mobileMenuOpen = true;
            
            // Add active class với logging
            mobileBtn.classList.add('active');
            mobileOverlay.classList.add('active');
            
            console.log('Button classes:', mobileBtn.className);
            console.log('Overlay classes:', mobileOverlay.className);
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            
            // Check if all menu items are visible - ✅ NOW SHOWS 8 ITEMS
            const menuItems = document.querySelectorAll('.mobile-nav-item');
            console.log(`📋 Menu items found: ${menuItems.length}/8 expected`);
            menuItems.forEach((item, index) => {
                const text = item.querySelector('.mobile-nav-text')?.textContent;
                const page = item.getAttribute('data-page');
                console.log(`${index + 1}. ${text} (${page})`);
            });
            
            // Focus management
            const closeBtn = document.getElementById('mobile-close-btn');
            if (closeBtn) {
                setTimeout(() => closeBtn.focus(), 300);
            }
            
            console.log('✅ Mobile menu opened successfully');
        } else {
            console.error('❌ Cannot open mobile menu - elements not found');
            console.error('Missing:', {
                button: !mobileBtn,
                overlay: !mobileOverlay
            });
        }
    }

    closeMobileMenu() {
        console.log('📁 Closing mobile menu...');
        
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileOverlay = document.getElementById('mobile-nav-overlay');
        
        if (mobileBtn && mobileOverlay) {
            this.mobileMenuOpen = false;
            
            // Remove active class
            mobileBtn.classList.remove('active');
            mobileOverlay.classList.remove('active');
            
            // Restore body scroll
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            
            // Return focus to menu button
            mobileBtn.focus();
            
            console.log('✅ Mobile menu closed successfully');
        } else {
            console.error('❌ Cannot close mobile menu - elements not found');
        }
    }

    // Debug function để kiểm tra mobile menu structure
    debugMobileMenu() {
        console.log('🔧 DEBUGGING MOBILE MENU STRUCTURE...');
        
        const overlay = document.getElementById('mobile-nav-overlay');
        const content = overlay?.querySelector('.mobile-nav-content');
        const header = overlay?.querySelector('.mobile-nav-header');
        const body = overlay?.querySelector('.mobile-nav-body');
        const menu = overlay?.querySelector('.mobile-nav-menu');
        const items = overlay?.querySelectorAll('.mobile-nav-item');
        const footer = overlay?.querySelector('.mobile-nav-footer');
        
        console.log('Mobile Menu Structure:');
        console.log('├── Overlay:', !!overlay);
        console.log('├── Content:', !!content);
        console.log('├── Header:', !!header);
        console.log('├── Body:', !!body);
        console.log('├── Menu:', !!menu);
        console.log('├── Items:', items?.length || 0, '/8 expected');
        console.log('└── Footer:', !!footer);
        
        if (items && items.length > 0) {
            console.log('\n📋 All Menu Items:');
            items.forEach((item, index) => {
                const text = item.querySelector('.mobile-nav-text')?.textContent;
                const page = item.getAttribute('data-page');
                const icon = item.querySelector('.mobile-nav-icon')?.textContent;
                console.log(`  ${index + 1}. ${icon} ${text} (${page})`);
            });
        } else {
            console.error('❌ NO MENU ITEMS FOUND!');
        }
        
        // Check CSS styles
        if (overlay) {
            const styles = window.getComputedStyle(overlay);
            console.log('\nOverlay Styles:');
            console.log('- Position:', styles.position);
            console.log('- Z-index:', styles.zIndex);
            console.log('- Display:', styles.display);
        }
    }

    bindNavigationEvents() {
        const navItems = document.querySelectorAll('.nav-item-modern:not(.dropdown-trigger)');
        
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                this.updateActiveNavigation(item);
                
                document.dispatchEvent(new CustomEvent('navigationChange', {
                    detail: { 
                        page: item.dataset.page,
                        url: item.href,
                        element: item
                    }
                }));
            });
        });
    }

    bindDropdownEvents() {
        const dropdownTrigger = document.getElementById('players-btn');
        const dropdownMenu = document.getElementById('players-menu');
        
        if (dropdownTrigger && dropdownMenu) {
            dropdownTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleDropdown(dropdownTrigger, dropdownMenu);
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!dropdownTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) {
                    this.closeDropdown(dropdownTrigger, dropdownMenu);
                }
            });
        }
    }

    toggleDropdown(trigger, menu) {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        
        if (isOpen) {
            this.closeDropdown(trigger, menu);
        } else {
            this.openDropdown(trigger, menu);
        }
    }

    openDropdown(trigger, menu) {
        trigger.setAttribute('aria-expanded', 'true');
        menu.removeAttribute('hidden');
    }

    closeDropdown(trigger, menu) {
        trigger.setAttribute('aria-expanded', 'false');
        menu.setAttribute('hidden', '');
    }

    updateActiveNavigation(activeItem) {
        // Remove active from all nav items
        const allNavItems = document.querySelectorAll('.nav-item-modern, .mobile-nav-item');
        allNavItems.forEach(item => item.classList.remove('active'));
        
        // Add active to clicked item
        activeItem.classList.add('active');
        
        // Update corresponding mobile/desktop item
        const page = activeItem.dataset.page;
        const correspondingItems = document.querySelectorAll(`[data-page="${page}"]`);
        correspondingItems.forEach(item => item.classList.add('active'));
    }

    bindGlobalEvents() {
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.mobileMenuOpen) {
                this.closeMobileMenu();
            }
        });

        // Resize events
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024 && this.mobileMenuOpen) {
                this.closeMobileMenu();
            }
        });
    }

    setupScrollEffects() {
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

    // Public methods for external use
    setActivePage(page) {
        const navItem = document.querySelector(`[data-page="${page}"]`);
        if (navItem) {
            this.updateActiveNavigation(navItem);
        }
    }

    getCurrentPage() {
        const activeItem = document.querySelector('.nav-item-modern.active, .mobile-nav-item.active');
        return activeItem ? activeItem.dataset.page : 'home';
    }
}

// Initialize header component
document.addEventListener('DOMContentLoaded', () => {
    const headerComponent = new HeaderComponent();
    
    // Export for global access
    if (typeof window !== 'undefined') {
        window.HeaderComponent = HeaderComponent;
        window.headerComponent = headerComponent;
        
        // Global debug functions
        window.debugMobileMenu = () => headerComponent.debugMobileMenu();
    }
});
