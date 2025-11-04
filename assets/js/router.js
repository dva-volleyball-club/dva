/**
 * DVA Router - FIXED SERVICES FLASH ISSUE
 * Path: assets/js/router.js
 */

class DVARouter {
    constructor() {
        this.routes = {};
        this.currentRoute = '';
        this.currentSubRoute = '';
        this.defaultRoute = 'home';
        this.basePath = '';
        this.loadedModules = new Set();
        this.activeCSS = new Set();
        this.cssLoadPromises = new Map();
        this.isNavigating = false;
        
        // ✅ SELF-INJECTING MODULES (NO HTML FILES NEEDED)
        this.selfInjectingModules = ['services'];
        
        this.init();
    }

    init() {
        // Define routes
        this.routes = {
            '': { 
                module: 'home',
                title: 'Home - DVA Volleyball',
                file: 'pages/home.html',
                css: 'assets/css/modules/home.css',
                js: 'assets/js/modules/home.js',
                data: ['assets/js/data/teams.js']
            },
            'home': { 
                module: 'home',
                title: 'Home - DVA Volleyball',
                file: 'pages/home.html',
                css: 'assets/css/modules/home.css',
                js: 'assets/js/modules/home.js',
                data: ['assets/js/data/teams.js']
            },
            'players': { 
                module: 'players',
                title: 'Players - DVA Volleyball',
                file: 'pages/players.html',
                css: 'assets/css/modules/players.css',
                js: 'assets/js/modules/players.js',
                data: ['assets/js/data/players.js'],
                subRoutes: ['middle', 'advanced'],
                defaultSubRoute: 'advanced'
            },
            'ranking': { 
                module: 'ranking',
                title: 'Rankings - DVA Volleyball',
                file: 'pages/ranking.html',
                css: 'assets/css/modules/ranking.css',
                js: 'assets/js/modules/ranking.js',
                data: ['assets/js/data/rankings.js'],
                subRoutes: ['middle', 'advanced']
            },
            'tournament': { 
                module: 'tournament',
                title: 'Tournament - DVA Volleyball',
                file: 'pages/tournament.html',
                css: 'assets/css/modules/tournament.css',
                js: 'assets/js/modules/tournament.js',
                data: ['assets/js/data/tournaments.js'],
                subRoutes: ['standings', 'results', 'awards']
            },
            'information': { 
                module: 'information',
                title: 'Information - DVA Volleyball',
                file: 'pages/information.html',
                css: 'assets/css/modules/information.css',
                js: 'assets/js/modules/information.js'
            },
            'news': { 
                module: 'news',
                title: 'News - DVA Volleyball',
                file: 'pages/news.html',
                css: 'assets/css/modules/news.css',
                js: 'assets/js/modules/news.js',
                data: ['assets/js/data/news.js']
            },
            'register': { 
                module: 'register',
                title: 'Register - DVA Volleyball',
                file: 'pages/register.html',
                css: 'assets/css/modules/register.css',
                js: 'assets/js/modules/register.js'
            },
            // ✅ SERVICES - SPECIAL HANDLING
            'services': {
                module: 'services',
                title: 'Services - DVA Volleyball Court Rental',
                description: 'Dịch vụ cho thuê sân bóng chuyền chuyên nghiệp DVA. Giá 550.000đ/h, sân indoor, bóng Mikasa V200W.',
                keywords: 'dva volleyball, thuê sân bóng chuyền, sân indoor, mikasa, 155 trường chinh',
                selfInject: true, // ✅ MARK AS SELF-INJECTING
                css: 'assets/css/modules/services.css',
                js: 'assets/js/modules/services.js'
            },
            'contact': { 
                module: 'contact',
                title: 'Contact - DVA Volleyball',
                file: 'pages/contact.html',
                css: 'assets/css/modules/contact.css',
                js: 'assets/js/modules/contact.js'
            }
        };

        // Initialize router
        this.setupEventListeners();
        this.handleInitialRoute();
        
        console.log('🔄 DVA Router initialized with SERVICES FIX');
    }

    setupEventListeners() {
        // Handle browser navigation
        window.addEventListener('popstate', (e) => {
            this.handleRoute(this.getCurrentPath(), false);
        });

        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#/"], a[href^="/"], a[data-page], [data-page], [data-division]');
            
            if (link) {
                e.preventDefault();
                
                let path = '';
                
                if (link.hasAttribute('data-division')) {
                    const division = link.getAttribute('data-division');
                    path = `ranking/${division}`;
                } else if (link.hasAttribute('data-page')) {
                    path = link.getAttribute('data-page');
                } else {
                    path = link.getAttribute('href');
                    
                    if (path.startsWith('#/')) {
                        path = path.substring(2);
                    } else if (path.startsWith('/')) {
                        path = path.substring(1);
                    }
                }
                
                this.navigate(path);
            }
        });

        // Handle hash changes
        window.addEventListener('hashchange', () => {
            if (!this.isNavigating) {
                this.handleRoute(this.getCurrentPath(), false);
            }
        });

        console.log('✅ Router event listeners setup complete');
    }

    navigate(path) {
        if (this.isNavigating) {
            console.log('⏸️ Navigation in progress, ignoring...');
            return;
        }
        
        console.log(`🧭 Navigating to: ${path}`);
        
        const cleanPath = path.replace(/^\/+/, '');
        window.history.pushState({}, '', `#/${cleanPath}`);
        this.handleRoute(cleanPath, true);
    }

    async handleRoute(path, addToHistory = true) {
        if (this.isNavigating) {
            console.log('⏸️ Already navigating, please wait...');
            return;
        }
        
        this.isNavigating = true;
        
        console.log(`📍 Handling route: ${path}`);
        
        try {
            path = path || this.defaultRoute;
            const parts = path.split('/');
            const mainRoute = parts[0];
            const subRoute = parts[1];
            
            let routeConfig = this.routes[path];
            if (!routeConfig) {
                routeConfig = this.routes[mainRoute];
            }
            
            if (!routeConfig) {
                console.warn(`❌ Route not found: ${path}`);
                this.handle404();
                return;
            }

            this.currentRoute = mainRoute;
            this.currentSubRoute = subRoute || '';
            
            document.title = routeConfig.title;
            this.updateActiveNavigation(mainRoute);
            
            // ✅ CHECK FOR SELF-INJECTING MODULES
            if (this.selfInjectingModules.includes(mainRoute) || routeConfig.selfInject) {
                console.log(`🚀 Self-injecting module detected: ${mainRoute}`);
                await this.loadSelfInjectingModule(routeConfig);
            } else {
                // Normal module loading
                this.showLoading(true);
                await this.cleanupPreviousModule(mainRoute);
                
                if (routeConfig.data) {
                    await this.loadDataFiles(routeConfig.data);
                }
                
                await this.loadRouteContent(routeConfig);
                await this.waitForContentReady();
                this.showLoading(false);
            }
            
            this.dispatchNavigationEvents(mainRoute, subRoute, path, routeConfig);
            console.log(`✅ Route loaded successfully: ${path}`);
            
        } catch (error) {
            console.error(`❌ Error loading route ${path}:`, error);
            this.showError(error);
        } finally {
            this.isNavigating = false;
        }
    }

    // ✅ NEW: SPECIAL HANDLING FOR SELF-INJECTING MODULES
    async loadSelfInjectingModule(routeConfig) {
        const { module, css, js } = routeConfig;
        
        console.log(`⚡ Loading self-injecting module: ${module}`);
        
        try {
            // Show minimal loading
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.innerHTML = `
                    <div class="module-preparing" style="
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        min-height: 60vh;
                        color: white;
                        gap: 15px;
                    ">
                        <div class="loading-spinner" style="
                            width: 30px;
                            height: 30px;
                            border: 2px solid rgba(255, 107, 53, 0.2);
                            border-left: 2px solid #FF6B35;
                            border-radius: 50%;
                            animation: spin 1s linear infinite;
                        "></div>
                        <p>Preparing ${module}...</p>
                    </div>
                    <style>
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    </style>
                `;
            }
            
            // Cleanup previous modules
            await this.cleanupPreviousModule(module);
            
            // Load CSS first (optional but recommended)
            if (css) {
                const cssPromise = this.loadCSS(css, `${module}-css`);
                this.cssLoadPromises.set(`${module}-css`, cssPromise);
                await cssPromise;
                this.activeCSS.add(`${module}-css`);
            }
            
            // Load and initialize JS module (this will inject HTML)
            if (js && !this.loadedModules.has(module)) {
                await this.loadJS(js, `${module}-js`);
                this.loadedModules.add(module);
            }
            
            // Wait for module to initialize
            await this.waitForSelfInjectingModuleReady(module);
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            console.log(`✅ Self-injecting module loaded: ${module}`);
            
        } catch (error) {
            console.error(`❌ Self-injecting module failed: ${module}`, error);
            throw error;
        }
    }

    // ✅ WAIT FOR SELF-INJECTING MODULE TO BE READY
    async waitForSelfInjectingModuleReady(module) {
        return new Promise((resolve) => {
            const maxAttempts = 10;
            let attempts = 0;
            
            const checkReady = () => {
                attempts++;
                
                // Check if content was injected
                const mainContent = document.getElementById('main-content');
                const hasContent = mainContent && 
                                 mainContent.innerHTML && 
                                 !mainContent.innerHTML.includes('module-preparing') &&
                                 mainContent.innerHTML.length > 200;
                
                if (hasContent || attempts >= maxAttempts) {
                    console.log(`✅ Self-injecting module ready: ${module} (attempts: ${attempts})`);
                    resolve();
                } else {
                    setTimeout(checkReady, 200);
                }
            };
            
            // Start checking after short delay
            setTimeout(checkReady, 300);
        });
    }

    async waitForContentReady() {
        return new Promise(resolve => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    resolve();
                });
            });
        });
    }

    getCurrentPath() {
        const hash = window.location.hash;
        if (hash) {
            return hash.substring(2);
        }
        
        const pathname = window.location.pathname;
        if (pathname && pathname !== '/' && pathname !== '/index.html') {
            return pathname.substring(1);
        }
        
        return '';
    }

    // ... (rest of the methods remain the same as in your current router)
    
    async cleanupPreviousModule(newModule) {
        console.log(`🧹 Cleaning up CSS before loading ${newModule}...`);
        
        await Promise.all(Array.from(this.cssLoadPromises.values()));
        
        const moduleCSS = ['home', 'players', 'ranking', 'tournament', 'information', 'news', 'register', 'contact', 'services'];
        
        const removePromises = moduleCSS.map(module => {
            if (module !== newModule) {
                const cssId = `${module}-css`;
                const existingCSS = document.getElementById(cssId);
                if (existingCSS) {
                    return new Promise(resolve => {
                        console.log(`🗑️ Removing ${module} CSS`);
                        existingCSS.remove();
                        this.activeCSS.delete(cssId);
                        this.cssLoadPromises.delete(cssId);
                        setTimeout(resolve, 50);
                    });
                }
            }
            return Promise.resolve();
        });

        await Promise.all(removePromises);
        this.cleanupModuleInstances(newModule);
        console.log(`✅ Previous module cleanup completed for ${newModule}`);
    }

    cleanupModuleInstances(newModule) {
        const moduleInstances = {
            'players': 'playersModule',
            'tournament': 'tournamentModuleInstance', 
            'ranking': 'rankingModule',
            'information': 'informationModuleInstance',
            'home': 'homeModuleInstance',
            'news': 'newsModuleInstance',
            'register': 'registerModuleInstance',
            'contact': 'contactModuleInstance',
            'services': 'servicesModuleInstance'
        };

        Object.entries(moduleInstances).forEach(([module, instanceName]) => {
            if (module !== newModule && window[instanceName]) {
                console.log(`🧹 Cleaning up ${module} module instance`);
                if (typeof window[instanceName].cleanup === 'function') {
                    try {
                        window[instanceName].cleanup();
                    } catch (error) {
                        console.warn(`⚠️ Cleanup error for ${module}:`, error);
                    }
                }
                window[instanceName] = null;
            }
        });
    }

    async loadDataFiles(dataFiles) {
        const promises = dataFiles.map(dataFile => 
            this.loadJS(dataFile, `data-${dataFile.split('/').pop()}`)
        );
        await Promise.all(promises);
        console.log('✅ Data files loaded:', dataFiles);
    }

    async loadRouteContent(routeConfig) {
        const { file, css, js, module } = routeConfig;
        
        console.log(`📥 Loading content for ${module}...`);
        
        if (css) {
            const cssPromise = this.loadCSS(css, `${module}-css`);
            this.cssLoadPromises.set(`${module}-css`, cssPromise);
            await cssPromise;
            this.activeCSS.add(`${module}-css`);
        }
        
        await this.loadHTMLWithFallback(file, module);
        
        if (js && !this.loadedModules.has(module)) {
            await this.loadJS(js, `${module}-js`);
            this.loadedModules.add(module);
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async loadCSS(cssPath, id) {
        return new Promise((resolve, reject) => {
            const existingCSS = document.getElementById(id);
            if (existingCSS) {
                existingCSS.remove();
                console.log(`🗑️ Removed old CSS: ${id}`);
            }
            
            console.log(`🎨 Loading CSS: ${cssPath}`);
            
            const testUrl = `${cssPath}?v=${Date.now()}`;
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = testUrl;
            link.id = id;
            link.setAttribute('data-module', id.replace('-css', ''));
            link.setAttribute('data-type', 'module-css');
            
            let timeout;
            
            link.onload = () => {
                clearTimeout(timeout);
                console.log(`✅ CSS loaded successfully: ${cssPath}`);
                resolve();
            };
            
            link.onerror = (error) => {
                clearTimeout(timeout);
                console.error(`❌ CSS link error for ${cssPath}:`, error);
                console.warn(`⚠️ CSS failed to load, continuing anyway...`);
                resolve(); // Don't block navigation
            };
            
            timeout = setTimeout(() => {
                console.warn(`⏱️ CSS load timeout for ${cssPath}`);
                resolve();
            }, 5000);
            
            document.head.appendChild(link);
        });
    }

    async loadJS(jsPath, id) {
        return new Promise((resolve) => {
            if (document.getElementById(id)) {
                resolve();
                return;
            }
            
            console.log(`📜 Loading JS: ${jsPath}`);
            
            const script = document.createElement('script');
            script.src = `${jsPath}?v=${Date.now()}`;
            script.id = id;
            script.defer = true;
            script.type = 'text/javascript';
            
            let timeout;
            
            script.onload = () => {
                clearTimeout(timeout);
                console.log(`✅ JS loaded: ${jsPath}`);
                resolve();
            };
            
            script.onerror = () => {
                clearTimeout(timeout);
                console.warn(`⚠️ JS failed to load: ${jsPath}`);
                resolve();
            };
            
            timeout = setTimeout(() => {
                console.warn(`⏱️ JS load timeout for ${jsPath}`);
                resolve();
            }, 10000);
            
            document.head.appendChild(script);
        });
    }

    async loadHTMLWithFallback(filePath, module) {
        try {
            console.log(`📄 Loading HTML: ${filePath}`);
            
            const response = await fetch(`${filePath}?v=${Date.now()}`);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const html = await response.text();
            
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.innerHTML = html;
                console.log(`✅ HTML loaded: ${filePath}`);
            } else {
                throw new Error('Main content container not found');
            }
            
        } catch (error) {
            console.warn(`⚠️ HTML file not found, using fallback for ${module}:`, error.message);
            this.loadFallbackContent(module);
        }
    }

    loadFallbackContent(module) {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) {
            console.error('❌ Main content container not found');
            return;
        }

        const fallbackContent = {
            'services': this.getServicesContent()
            // ... other fallbacks
        };

        mainContent.innerHTML = fallbackContent[module] || this.get404Content();
        console.log(`✅ Fallback content loaded for ${module}`);
        
        setTimeout(() => this.initializeFallbackModule(module), 200);
    }

    getServicesContent() {
        return `
            <div class="dva-services" style="background: var(--dva-dark, #0a0f1c); min-height: 100vh;">
                <div class="container">
                    <section style="padding: 60px 0; text-align: center;">
                        <h1 style="font-size: 3.5rem; font-weight: 900; color: white; margin-bottom: 20px;">🏐 Services</h1>
                        <p style="font-size: 1.2rem; color: #8B949E;">Court rental services loading...</p>
                        <div style="margin-top: 30px;">
                            <div style="
                                width: 40px;
                                height: 40px;
                                border: 3px solid rgba(255, 107, 53, 0.2);
                                border-left: 3px solid #FF6B35;
                                border-radius: 50%;
                                animation: spin 1s linear infinite;
                                margin: 0 auto;
                            "></div>
                        </div>
                    </section>
                </div>
            </div>
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `;
    }

    dispatchNavigationEvents(mainRoute, subRoute, path, routeConfig) {
        document.dispatchEvent(new CustomEvent('navigationChange', {
            detail: { 
                page: mainRoute,
                subRoute: subRoute,
                fullPath: path,
                url: window.location.href,
                division: routeConfig.division,
                team: routeConfig.team
            }
        }));
    }

    updateActiveNavigation(currentPath) {
        console.log(`🎯 Updating navigation for: ${currentPath}`);
        
        const navItems = document.querySelectorAll('.nav-item-modern, [data-page]');
        navItems.forEach(item => {
            const page = item.getAttribute('data-page');
            if (page) {
                item.classList.toggle('active', page === currentPath);
            }
        });
        
        const mobileItems = document.querySelectorAll('.mobile-nav-item');
        mobileItems.forEach(item => {
            const page = item.getAttribute('data-page');
            if (page) {
                item.classList.toggle('active', page === currentPath);
            }
        });
        
        console.log(`✅ Active navigation updated: ${currentPath}`);
    }

    showLoading(show) {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        
        if (show) {
            mainContent.innerHTML = `
                <div class="route-loading" style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 50vh;
                    color: white;
                    gap: 20px;
                ">
                    <div class="loading-spinner" style="
                        width: 40px;
                        height: 40px;
                        border: 3px solid rgba(255, 107, 53, 0.2);
                        border-left: 3px solid #FF6B35;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    "></div>
                    <p class="loading-text">Loading page...</p>
                </div>
                
                <style>
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            `;
        }
    }

    showError(error) {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        
        mainContent.innerHTML = `
            <div class="route-error" style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 50vh;
                color: white;
                text-align: center;
                padding: 40px;
            ">
                <div class="error-icon" style="font-size: 4rem; margin-bottom: 20px;">⚠️</div>
                <h2>Page Loading Error</h2>
                <p>Sorry, there was an error loading this page.</p>
                <p class="error-details" style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">${error.message}</p>
                <button onclick="window.location.reload()" class="retry-btn" style="
                    margin-top: 20px;
                    padding: 12px 24px;
                    background: #FF6B35;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                ">
                    Try Again
                </button>
            </div>
        `;
    }

    handle404() {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        
        mainContent.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 60vh;
                color: white;
                text-align: center;
            ">
                <div style="font-size: 6rem; margin-bottom: 20px;">4🏐4</div>
                <h2>Page Not Found</h2>
                <p>This page doesn't exist or has been moved.</p>
                <button onclick="dvaRouter.navigate('home')" style="
                    margin-top: 20px;
                    padding: 12px 24px;
                    background: #FF6B35;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                ">
                    Back to Home
                </button>
            </div>
        `;
    }

    handleInitialRoute() {
        const path = this.getCurrentPath();
        console.log('🎯 Initial route:', path || this.defaultRoute);
        this.handleRoute(path || this.defaultRoute, false);
    }

    getCurrentRoute() {
        return this.currentRoute;
    }

    getCurrentSubRoute() {
        return this.currentSubRoute;
    }
}

// Initialize router
let dvaRouter;

document.addEventListener('DOMContentLoaded', () => {
    dvaRouter = new DVARouter();
    
    if (typeof window !== 'undefined') {
        window.dvaRouter = dvaRouter;
    }
    
    console.log('🚀 DVA Router ready with SERVICES FLASH FIX!');
});

if (document.readyState !== 'loading') {
    dvaRouter = new DVARouter();
    if (typeof window !== 'undefined') {
        window.dvaRouter = dvaRouter;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DVARouter;
}
