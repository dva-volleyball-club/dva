/**
 * DVA Volleyball SPA Router - FIXED CSS MANAGEMENT & CONSISTENT PADDING
 * 
 * D:\dva\DVA-Volleyball-Website\assets\js\router.js
 */

class DVARouter {
    constructor() {
        this.routes = {};
        this.currentRoute = '';
        this.currentSubRoute = '';
        this.defaultRoute = 'home';
        this.basePath = '';
        this.loadedModules = new Set();
        this.activeCSS = new Set(); // TRACK ACTIVE CSS FILES
        
        this.init();
    }

    init() {
        // Define routes (keeping your existing routes)
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
            'players/middle': { 
                module: 'players',
                title: 'Middle Team - DVA Volleyball',
                file: 'pages/players.html',
                css: 'assets/css/modules/players.css',
                js: 'assets/js/modules/players.js',
                data: ['assets/js/data/players.js'],
                team: 'middle'
            },
            'players/advanced': { 
                module: 'players',
                title: 'Advanced Team - DVA Volleyball',
                file: 'pages/players.html',
                css: 'assets/css/modules/players.css',
                js: 'assets/js/modules/players.js',
                data: ['assets/js/data/players.js'],
                team: 'advanced'
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
            'ranking/middle': { 
                module: 'ranking',
                title: 'Middle Division Rankings - DVA Volleyball',
                file: 'pages/ranking.html',
                css: 'assets/css/modules/ranking.css',
                js: 'assets/js/modules/ranking.js',
                data: ['assets/js/data/rankings.js'],
                division: 'middle'
            },
            'ranking/advanced': { 
                module: 'ranking',
                title: 'Advanced Division Rankings - DVA Volleyball',
                file: 'pages/ranking.html',
                css: 'assets/css/modules/ranking.css',
                js: 'assets/js/modules/ranking.js',
                data: ['assets/js/data/rankings.js'],
                division: 'advanced'
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
            'tournament/standings': { 
                module: 'tournament',
                title: 'Tournament Standings - DVA Volleyball',
                file: 'pages/tournament.html',
                css: 'assets/css/modules/tournament.css',
                js: 'assets/js/modules/tournament.js',
                data: ['assets/js/data/tournaments.js'],
                section: 'standings'
            },
            'tournament/results': { 
                module: 'tournament',
                title: 'Tournament Results - DVA Volleyball',
                file: 'pages/tournament.html',
                css: 'assets/css/modules/tournament.css',
                js: 'assets/js/modules/tournament.js',
                data: ['assets/js/data/tournaments.js'],
                section: 'results'
            },
            'tournament/awards': { 
                module: 'tournament',
                title: 'Tournament Awards - DVA Volleyball',
                file: 'pages/tournament.html',
                css: 'assets/css/modules/tournament.css',
                js: 'assets/js/modules/tournament.js',
                data: ['assets/js/data/tournament.js'],
                section: 'awards'
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
            'services': {
                title: 'Services - DVA Volleyball Court Rental',
                description: 'Dịch vụ cho thuê sân bóng chuyền chuyên nghiệp DVA. Giá 550.000đ/h, sân indoor, bóng Mikasa V200W.',
                keywords: 'dva volleyball, thuê sân bóng chuyền, sân indoor, mikasa, 155 trường chinh',
                content: 'pages/services.html',
                css: 'assets/css/modules/services.css'
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
        
        console.log('🔄 DVA Router initialized with CSS management');
    }

    setupEventListeners() {
        // Handle browser navigation (back/forward buttons)
        window.addEventListener('popstate', (e) => {
            this.handleRoute(this.getCurrentPath(), false);
        });

        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#/"], a[href^="/"], a[data-page], [data-page], [data-division]');
            
            if (link) {
                e.preventDefault();
                
                let path = '';
                
                // Get path from data-division attribute (ranking tabs)
                if (link.hasAttribute('data-division')) {
                    const division = link.getAttribute('data-division');
                    path = `ranking/${division}`;
                    console.log('🏆 Division tab clicked:', division);
                }
                // Get path from data-page attribute (header format)
                else if (link.hasAttribute('data-page')) {
                    path = link.getAttribute('data-page');
                } else {
                    // Get path from href
                    path = link.getAttribute('href');
                    
                    // Remove # prefix if present
                    if (path.startsWith('#/')) {
                        path = path.substring(2);
                    } else if (path.startsWith('/')) {
                        path = path.substring(1);
                    }
                }
                
                console.log('🔗 Navigation click detected:', path);
                this.navigate(path);
            }
        });

        // Handle hash change events (fallback)
        window.addEventListener('hashchange', () => {
            this.handleRoute(this.getCurrentPath(), false);
        });

        console.log('✅ Router event listeners setup complete');
    }

    handleInitialRoute() {
        const path = this.getCurrentPath();
        console.log('🎯 Initial route:', path || this.defaultRoute);
        this.handleRoute(path || this.defaultRoute, false);
    }

    getCurrentPath() {
        // Try to get path from hash first (current setup)
        const hash = window.location.hash;
        if (hash) {
            return hash.substring(2); // Remove #/
        }
        
        // Try to get path from pathname (for future clean URLs)
        const pathname = window.location.pathname;
        if (pathname && pathname !== '/' && pathname !== '/index.html') {
            return pathname.substring(1); // Remove leading /
        }
        
        return '';
    }

    navigate(path) {
        console.log(`🧭 Navigating to: ${path}`);
        
        // Clean path
        const cleanPath = path.replace(/^\/+/, ''); // Remove leading slashes
        
        // Update URL - use hash for now, but clean format
        window.history.pushState({}, '', `#/${cleanPath}`);
        
        // Handle route
        this.handleRoute(cleanPath, true);
    }

    

    async handleRoute(path, addToHistory = true) {
        console.log(`📍 Handling route: ${path}`);
        
        // Clean path
        path = path || this.defaultRoute;
        const parts = path.split('/');
        const mainRoute = parts[0];
        const subRoute = parts[1];
        
        // Get route config
        let routeConfig = this.routes[path]; // Try full path first
        if (!routeConfig) {
            routeConfig = this.routes[mainRoute]; // Fallback to main route
        }
        
        if (!routeConfig) {
            console.warn(`❌ Route not found: ${path}`);
            this.handle404();
            return;
        }

        // Update current route
        this.currentRoute = mainRoute;
        this.currentSubRoute = subRoute || '';
        
        // Update page title
        document.title = routeConfig.title;
        
        // Update active navigation
        this.updateActiveNavigation(mainRoute);
        
        // Show loading state
        this.showLoading(true);
        
        try {
            // CLEANUP PREVIOUS MODULE CSS - CRITICAL FIX!
            this.cleanupPreviousModule(mainRoute);
            
            // Load data files first
            if (routeConfig.data) {
                await this.loadDataFiles(routeConfig.data);
            }
            
            // Load route content
            await this.loadRouteContent(routeConfig);
            
            // DISPATCH NAVIGATION EVENT
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
            
            // Handle sub-route specific logic
            if (routeConfig.module === 'ranking' && subRoute) {
                setTimeout(() => {
                    document.dispatchEvent(new CustomEvent('rankingDivisionRoute', {
                        detail: { 
                            division: subRoute,
                            fullPath: path
                        }
                    }));
                }, 200);
            }
            
            if (routeConfig.module === 'tournament' && subRoute) {
                setTimeout(() => {
                    document.dispatchEvent(new CustomEvent('tournamentSectionRoute', {
                        detail: { 
                            section: subRoute,
                            fullPath: path
                        }
                    }));
                }, 200);
            }
            
            if (routeConfig.module === 'players' && subRoute) {
                setTimeout(() => {
                    document.dispatchEvent(new CustomEvent('playerTeamRoute', {
                        detail: { team: subRoute }
                    }));
                }, 200);
            }
            
            // Hide loading state
            this.showLoading(false);
            
            console.log(`✅ Route loaded successfully: ${path}`);
            
        } catch (error) {
            console.error(`❌ Error loading route ${path}:`, error);
            this.showError(error);
        }
    }
    

    // FIXED: Cleanup Previous Module CSS - CONSISTENT APPROACH
    cleanupPreviousModule(newModule) {
        console.log(`🧹 Cleaning up CSS before loading ${newModule}...`);
        
        // Remove all module-specific CSS except the new one - CONSISTENT CLEANUP
        const moduleCSS = ['home', 'players', 'ranking', 'tournament', 'information', 'news', 'register', 'contact'];
        
        moduleCSS.forEach(module => {
            if (module !== newModule) {
                const cssId = `${module}-css`;
                const existingCSS = document.getElementById(cssId);
                if (existingCSS) {
                    console.log(`🗑️ Removing ${module} CSS`);
                    existingCSS.remove();
                    this.activeCSS.delete(cssId);
                }
            }
        });

        // Cleanup previous module instances
        this.cleanupModuleInstances(newModule);
        
        console.log(`✅ Previous module cleanup completed for ${newModule}`);
    }

    // ENHANCED: Cleanup Module Instances - ALL MODULES
    cleanupModuleInstances(newModule) {
        // Cleanup all module instances if switching away
        const moduleInstances = {
            'players': 'playersModule',
            'tournament': 'tournamentModuleInstance', 
            'ranking': 'rankingModule',
            'information': 'informationModuleInstance',
            'home': 'homeModuleInstance',
            'news': 'newsModuleInstance',
            'register': 'registerModuleInstance',
            'contact': 'contactModuleInstance'
        };

        Object.entries(moduleInstances).forEach(([module, instanceName]) => {
            if (module !== newModule && window[instanceName]) {
                console.log(`🧹 Cleaning up ${module} module instance`);
                if (typeof window[instanceName].cleanup === 'function') {
                    window[instanceName].cleanup();
                }
                window[instanceName] = null;
            }
        });
    }

    async loadDataFiles(dataFiles) {
        const promises = dataFiles.map(dataFile => this.loadJS(dataFile, `data-${dataFile.split('/').pop()}`));
        await Promise.all(promises);
        console.log('✅ Data files loaded:', dataFiles);
    }

    async loadRouteContent(routeConfig) {
        const { file, css, js, module } = routeConfig;
        
        console.log(`📥 Loading content for ${module}...`);
        
        // Load CSS first (with consistent namespace)
        if (css) {
            await this.loadCSS(css, `${module}-css`);
            this.activeCSS.add(`${module}-css`);
        }
        
        // Load HTML content with fallback
        await this.loadHTMLWithFallback(file, module);
        
        // Load JavaScript module (if exists and not already loaded)
        if (js && !this.loadedModules.has(module)) {
            await this.loadJS(js, `${module}-js`);
            this.loadedModules.add(module);
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // CONSISTENT CSS loading with conflict detection
        async loadCSS(cssPath, id) {
    return new Promise((resolve, reject) => {
        // Xóa CSS cũ nếu có
        const existingCSS = document.getElementById(id);
        if (existingCSS) {
            existingCSS.remove();
            console.log(`🗑️ Removed old CSS: ${id}`);
        }
        
        console.log(`🎨 Loading CSS: ${cssPath}`);
        
        // MIME TYPE FIX: Validate first
        const testUrl = `${cssPath}?v=${Date.now()}`;
        
        fetch(testUrl, { method: 'HEAD' })
            .then(response => {
                const contentType = response.headers.get('content-type');
                console.log(`📋 ${cssPath} - Status: ${response.status}, MIME: ${contentType}`);
                
                if (!response.ok) {
                    throw new Error(`File not found: ${response.status}`);
                }
                
                // WARNING for unexpected MIME types but continue
                if (contentType && contentType.includes('text/html')) {
                    console.warn(`⚠️ HTML MIME type detected for CSS: ${cssPath}`);
                    console.warn(`🔧 This indicates Live Server configuration issue`);
                }
                
                // Proceed with CSS loading regardless of MIME type
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = testUrl;
                link.id = id;
                
                // ENHANCED data attributes
                link.setAttribute('data-module', id.replace('-css', ''));
                link.setAttribute('data-type', 'module-css');
                link.setAttribute('data-loaded-at', new Date().toISOString());
                link.setAttribute('data-mime-validated', 'true');
                
                link.onload = () => {
                    console.log(`✅ CSS loaded successfully: ${cssPath}`);
                    
                    // Verify CSS actually loaded
                    setTimeout(() => {
                        const computedStyles = window.getComputedStyle(document.body);
                        console.log(`🎨 CSS verification for ${id}:`, {
                            sheets: document.styleSheets.length,
                            linkExists: !!document.getElementById(id)
                        });
                    }, 100);
                    
                    resolve();
                };
                
                link.onerror = (error) => {
                    console.error(`❌ CSS link error for ${cssPath}:`, error);
                    
                    // FALLBACK: Try inline CSS loading
                    this.loadCSSFallback(cssPath, id)
                        .then(resolve)
                        .catch(() => resolve()); // Don't fail the whole route
                };
                
                // ENHANCED insertion logic
                const insertionPoint = this.findBestCSSInsertionPoint();
                if (insertionPoint) {
                    document.head.insertBefore(link, insertionPoint);
                } else {
                    document.head.appendChild(link);
                }
                
            })
            .catch(error => {
                console.error(`❌ CSS validation failed for ${cssPath}:`, error);
                
                // TRY FALLBACK METHOD
                this.loadCSSFallback(cssPath, id)
                    .then(resolve)
                    .catch(() => resolve()); // Don't block navigation
            });
    });
}

// NEW: Fallback CSS loading method
async loadCSSFallback(cssPath, id) {
    try {
        console.log(`🚨 Fallback CSS loading: ${cssPath}`);
        
        const response = await fetch(cssPath);
        let cssText = await response.text();
        
        // If we got HTML instead of CSS, try to extract or skip
        if (cssText.includes('<!DOCTYPE html>') || cssText.includes('<html>')) {
            console.error(`❌ Got HTML instead of CSS for: ${cssPath}`);
            throw new Error('HTML response instead of CSS');
        }
        
        // Create inline style element
        const style = document.createElement('style');
        style.id = id;
        style.setAttribute('data-module', id.replace('-css', ''));
        style.setAttribute('data-type', 'module-css-inline');
        style.setAttribute('data-loaded-at', new Date().toISOString());
        style.setAttribute('data-fallback-load', 'true');
        style.textContent = cssText;
        
        document.head.appendChild(style);
        console.log(`✅ Fallback CSS loaded: ${cssPath}`);
        
        return Promise.resolve();
    } catch (error) {
        console.error(`❌ Fallback CSS failed: ${cssPath}`, error);
        return Promise.reject(error);
    }
}

// NEW: Find best insertion point for CSS
findBestCSSInsertionPoint() {
    // Try to insert before component CSS
    const componentCSS = document.querySelector('link[href*="components/"]');
    if (componentCSS) return componentCSS;
    
    // Try to insert before the last CSS link
    const allCSS = document.querySelectorAll('link[rel="stylesheet"]');
    if (allCSS.length > 0) return allCSS[allCSS.length - 1].nextSibling;
    
    // Insert before first script tag
    const firstScript = document.querySelector('script');
    return firstScript;
}


    async loadJS(jsPath, id) {
        return new Promise((resolve, reject) => {
            if (document.getElementById(id)) {
                resolve();
                return;
            }
            
            console.log(`📜 Loading JS: ${jsPath}`);
            
            const script = document.createElement('script');
            script.src = `${jsPath}?v=${Date.now()}`;
            script.id = id;
            script.defer = true;
            script.type = 'text/javascript'; // Explicit MIME type
            
            script.onload = () => {
                console.log(`✅ JS loaded: ${jsPath}`);
                resolve();
            };
            
            script.onerror = () => {
                console.warn(`⚠️ JS failed to load: ${jsPath}`);
                resolve(); // Don't fail the whole route for missing JS
            };
            
            document.head.appendChild(script);
        });
    }

    async loadHTMLWithFallback(filePath, module) {
        try {
            console.log(`📄 Trying to load HTML: ${filePath}`);
            
            const response = await fetch(filePath);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const html = await response.text();
            
            // Insert content into main container
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.innerHTML = html;
                console.log(`✅ HTML loaded from file: ${filePath}`);
            } else {
                throw new Error('Main content container not found');
            }
            
        } catch (error) {
            console.warn(`⚠️ HTML file not found, using fallback content for ${module}:`, error.message);
            this.loadFallbackContent(module);
        }
    }

    // ENHANCED: Consistent fallback content with module initialization
    loadFallbackContent(module) {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) {
            console.error('❌ Main content container not found');
            return;
        }

        let content = '';

        switch (module) {
            case 'home':
                content = this.getHomeContent();
                break;
            case 'players':
                content = this.getPlayersContent();
                break;
            case 'ranking':
                content = this.getRankingContent();
                break;
            case 'tournament':
                content = this.getTournamentContent();
                break;
            case 'information':
                content = this.getInformationContent();
                break;
            case 'news':
                content = this.getNewsContent();
                break;
            case 'register':
                content = this.getRegisterContent();
                break;
            case 'services':
                content = this.getServicesContent();
                break;
            case 'contact':
                content = this.getContactContent();
                break;
            default:
                content = this.get404Content();
        }

        mainContent.innerHTML = content;
        console.log(`✅ Fallback content loaded for ${module}`);
        
        // ENHANCED: Module initialization after content loaded
        setTimeout(() => {
            this.initializeFallbackModule(module);
        }, 300);
    }

    // NEW: Initialize modules after fallback content loaded
    initializeFallbackModule(module) {
        const moduleClasses = {
            'information': 'InformationModule',
            'tournament': 'TournamentModule',
            'players': 'PlayersModule',
            'ranking': 'RankingModule',
            'home': 'HomeModule',
            'news': 'NewsModule',
            'register': 'RegisterModule',
            'contact': 'ContactModule'
        };

        const instanceNames = {
            'information': 'informationModuleInstance',
            'tournament': 'tournamentModuleInstance',
            'players': 'playersModuleInstance',
            'ranking': 'rankingModuleInstance',
            'home': 'homeModuleInstance',
            'news': 'newsModuleInstance',
            'register': 'registerModuleInstance',
            'contact': 'contactModuleInstance'
        };

        const className = moduleClasses[module];
        const instanceName = instanceNames[module];

        if (className && window[className] && !window[instanceName]) {
            console.log(`🚀 Initializing ${module} module from fallback...`);
            try {
                window[instanceName] = new window[className]();
            } catch (error) {
                console.warn(`⚠️ Failed to initialize ${module} module:`, error);
            }
        }
    }

    // FIXED: Tournament Content - NO CUSTOM PADDING-TOP
    getTournamentContent() {
        console.log('🏆 Creating tournament content with consistent CSS');
        
        return `
            <div class="dva-tournament" style="background: var(--syncsoft-dark); min-height: 100vh;">
                <div class="container">
                    <!-- Tournament Header -->
                    <section class="tournament-hero" style="padding: 60px 0; text-align: center;">
                        <h1 style="font-size: 3.5rem; font-weight: 900; background: linear-gradient(135deg, #FF6B35 0%, #FF8A65 50%, #0066FF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 20px;">
                            Tournament 2025
                        </h1>
                        <p style="font-size: 1.2rem; color: #8B949E; margin-bottom: 40px;">
                            DVA Championship featuring 8 teams competing for glory
                        </p>
                    </section>

                    <!-- Tournament Tabs -->
                    <section class="tournament-tabs-section" style="margin-bottom: 40px;">
                        <div class="tournament-tabs" style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                            <a href="#/tournament/standings" class="tournament-tab active" data-section="standings" style="display: flex; align-items: center; gap: 12px; padding: 16px 24px; background: rgba(255, 107, 53, 0.15); border: 1px solid rgba(255, 107, 53, 0.3); border-radius: 12px; color: white; text-decoration: none; transition: all 0.3s ease;">
                                <span style="font-size: 1.5rem;">🏆</span>
                                <span style="font-weight: 600;">Standings</span>
                            </a>
                            <a href="#/tournament/results" class="tournament-tab" data-section="results" style="display: flex; align-items: center; gap: 12px; padding: 16px 24px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; color: #8B949E; text-decoration: none; transition: all 0.3s ease;">
                                <span style="font-size: 1.5rem;">📊</span>
                                <span style="font-weight: 600;">Results</span>
                            </a>
                            <a href="#/tournament/awards" class="tournament-tab" data-section="awards" style="display: flex; align-items: center; gap: 12px; padding: 16px 24px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; color: #8B949E; text-decoration: none; transition: all 0.3s ease;">
                                <span style="font-size: 1.5rem;">🏅</span>
                                <span style="font-weight: 600;">Awards</span>
                            </a>
                        </div>
                    </section>

                    <!-- Tournament Content -->
                    <section id="tournament-content" style="min-height: 400px;">
                        <div class="tournament-initial-loading" style="display: flex; flex-direction: column; align-items: center; gap: 20px; padding: 60px; color: rgba(255, 255, 255, 0.7);">
                            <div style="width: 40px; height: 40px; border: 3px solid rgba(255, 107, 53, 0.2); border-left: 3px solid #FF6B35; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                            <p><strong>Loading Tournament Data...</strong></p>
                            <p><small>Preparing standings, results, and awards...</small></p>
                        </div>
                    </section>
                </div>
            </div>

            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                .tournament-tab:hover {
                    background: rgba(255, 107, 53, 0.2) !important;
                    border-color: rgba(255, 107, 53, 0.5) !important;
                    color: white !important;
                    transform: translateY(-2px);
                }
            </style>
        `;
    }

    // FIXED: Consistent fallback content - NO CUSTOM PADDING
    getHomeContent() {
        return `<div class="dva-home" style="background: var(--syncsoft-dark); min-height: 100vh;">
            <div class="container">
                <section style="padding: 60px 0; text-align: center;">
                    <h1 style="font-size: 3.5rem; font-weight: 900; color: white; margin-bottom: 20px;">🏠 DVA Volleyball - Home</h1>
                    <p style="font-size: 1.2rem; color: #8B949E;">Welcome to DVA Volleyball Club</p>
                </section>
            </div>
        </div>`;
    }

    getPlayersContent() {
        return `<div class="dva-players" style="background: var(--syncsoft-dark); min-height: 100vh;">
            <div class="container">
                <section style="padding: 60px 0; text-align: center;">
                    <h1 style="font-size: 3.5rem; font-weight: 900; color: white; margin-bottom: 20px;">👥 Players</h1>
                    <p style="font-size: 1.2rem; color: #8B949E;">Meet our volleyball players</p>
                </section>
            </div>
        </div>`;
    }

    getRankingContent() {
        return `<div class="dva-ranking" style="background: var(--syncsoft-dark); min-height: 100vh;">
            <div class="container">
                <section style="padding: 60px 0; text-align: center;">
                    <h1 style="font-size: 3.5rem; font-weight: 900; color: white; margin-bottom: 20px;">🏆 Rankings</h1>
                    <p style="font-size: 1.2rem; color: #8B949E;">Player rankings and statistics</p>
                </section>
            </div>
        </div>`;
    }

    // FIXED: Information Content - NO CUSTOM PADDING
    getInformationContent() {
        return `<div class="dva-information" style="background: var(--syncsoft-dark); min-height: 100vh;">
            <div class="container">
                <section style="padding: 60px 0; text-align: center;">
                    <h1 style="font-size: 3.5rem; font-weight: 900; color: white; margin-bottom: 20px;">ℹ️ Information</h1>
                    <p style="font-size: 1.2rem; color: #8B949E;">Club information and requirements</p>
                </section>
            </div>
        </div>`;
    }

    getNewsContent() {
        return `<div class="dva-news" style="background: var(--syncsoft-dark); min-height: 100vh;">
            <div class="container">
                <section style="padding: 60px 0; text-align: center;">
                    <h1 style="font-size: 3.5rem; font-weight: 900; color: white; margin-bottom: 20px;">📰 News</h1>
                    <p style="font-size: 1.2rem; color: #8B949E;">Latest news coming soon...</p>
                </section>
            </div>
        </div>`;
    }

    getRegisterContent() {
        return `<div class="dva-register" style="background: var(--syncsoft-dark); min-height: 100vh;">
            <div class="container">
                <section style="padding: 60px 0; text-align: center;">
                    <h1 style="font-size: 3.5rem; font-weight: 900; color: white; margin-bottom: 20px;">📝 Register</h1>
                    <p style="font-size: 1.2rem; color: #8B949E;">Registration form coming soon...</p>
                </section>
            </div>
        </div>`;
    }

    getServicesContent() {
    return `<div class="dva-services" style="background: var(--syncsoft-dark); min-height: 100vh;">
        <div class="container">
            <section style="padding: 60px 0; text-align: center;">
                <h1 style="font-size: 3.5rem; font-weight: 900; color: white; margin-bottom: 20px;">🔧 Services</h1>
                <p style="font-size: 1.2rem; color: #8B949E;">Court rental services loading...</p>
            </section>
        </div>
    </div>`;
}

    getContactContent() {
        return `<div class="dva-contact" style="background: var(--syncsoft-dark); min-height: 100vh;">
            <div class="container">
                <section style="padding: 60px 0; text-align: center;">
                    <h1 style="font-size: 3.5rem; font-weight: 900; color: white; margin-bottom: 20px;">📞 Contact Us</h1>
                    <p style="font-size: 1.2rem; color: #8B949E;">Contact information coming soon...</p>
                </section>
            </div>
        </div>`;
    }

     get404Content() {
    return `
        <!-- SEO & Meta Tags -->
        <div class="dva-404" itemscope itemtype="https://schema.org/WebPage">
            <meta itemprop="name" content="404 - Page Not Found | DVA Volleyball Club">
            <meta itemprop="description" content="Oops! The page you're looking for doesn't exist. Return to DVA Volleyball Club homepage or explore our players, news, and tournaments.">
            
            <!-- Background Effects -->
            <div class="dva-404-bg" aria-hidden="true">
                <div class="floating-orb orb-1"></div>
                <div class="floating-orb orb-2"></div>
                <div class="floating-orb orb-3"></div>
                <div class="glass-grid"></div>
            </div>

            <!-- Main 404 Content -->
            <main class="dva-404-container" role="main">
                <!-- DVA Logo & Branding -->
                <header class="dva-brand-section">
                    <div class="dva-logo-glass">
                        <!-- Logo placeholder - replace with your image path -->
                        <img src="assets/images/logo/dva.png" 
                             alt="DVA Volleyball Club Logo" 
                             class="dva-logo-img"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                        
                        <!-- Fallback volleyball icon -->
                        <div class="volleyball-fallback" style="display:none;">
                            <svg width="60" height="60" viewBox="0 0 60 60" class="volleyball-svg" aria-label="Volleyball icon">
                                <circle cx="30" cy="30" r="26" fill="#FF6B35" stroke="#fff" stroke-width="2"/>
                                <path d="M 10 30 Q 30 15 50 30" stroke="#fff" stroke-width="1.5" fill="none"/>
                                <path d="M 10 30 Q 30 45 50 30" stroke="#fff" stroke-width="1.5" fill="none"/>
                                <line x1="30" y1="4" x2="30" y2="56" stroke="#fff" stroke-width="1.5"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="dva-brand-text">
                        <h1 class="dva-title">DVA</h1>
                        <p class="dva-subtitle">Volleyball Excellence</p>
                    </div>
                </header>

                <!-- 404 Error Display -->
                <section class="error-display" aria-labelledby="error-heading">
                    <div class="error-code">
                        <span class="digit-four">4</span>
                        <div class="volleyball-zero">
                            <div class="volleyball-spin">🏐</div>
                        </div>
                        <span class="digit-four">4</span>
                    </div>
                    
                    <h2 id="error-heading" class="error-title">
                        Spike Out of Bounds!
                    </h2>
                    
                    <p class="error-description">
                        The page you're looking for has been blocked out! 
                        <br class="desktop-break">
                        Let's get you back in the game.
                    </p>
                </section>

                <!-- Action Buttons -->
                <section class="dva-actions" role="group" aria-label="Navigation options">
                    <button onclick="dvaRouter.navigate('home')" class="btn-primary-dva" aria-label="Return to homepage">
                        <span class="btn-icon">🏠</span>
                        <span class="btn-text">Back to Home</span>
                    </button>
                    
                    <button onclick="dvaRouter.navigate('players')" class="btn-secondary-dva" aria-label="View team players">
                        <span class="btn-icon">🏃‍♂️</span>
                        <span class="btn-text">View Players</span>
                    </button>

                    <button onclick="history.back()" class="btn-ghost-dva" aria-label="Go to previous page">
                        <span class="btn-icon">↩️</span>
                        <span class="btn-text">Go Back</span>
                    </button>
                </section>
            </main>

            <!-- SEO Schema Markup -->
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "404 - Page Not Found",
                "description": "DVA Volleyball Club 404 error page",
                "url": "${window.location.href}",
                "isPartOf": {
                    "@type": "WebSite",
                    "name": "DVA Volleyball Club",
                    "url": "${window.location.origin}"
                },
                "inLanguage": "vi-VN",
                "mainEntity": {
                    "@type": "SportsOrganization",
                    "name": "DVA Volleyball Club",
                    "sport": "Volleyball"
                }
            }
            </script>

            <!-- 404 Glassmorphism Styles -->
            <style>
                /* ===== DVA 404 GLASSMORPHISM - MOBILE FIRST ===== */
                
                /* CSS Variables */
                :root {
                    --dva-orange: #FF6B35;
                    --dva-blue: #0066FF;
                    --dva-dark: #0a0f1c;
                    --dva-dark-light: #1a1f2e;
                    --glass-bg: rgba(255, 255, 255, 0.08);
                    --glass-border: rgba(255, 255, 255, 0.12);
                    --text-primary: #ffffff;
                    --text-secondary: #b8c5d6;
                    --text-muted: #64748b;
                }

                /* Base Container */
                .dva-404 {
                    background: linear-gradient(135deg, var(--dva-dark) 0%, var(--dva-dark-light) 50%, #0f1419 100%);
                    min-height: 100vh;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
                    line-height: 1.6;
                    padding: 1rem;
                    box-sizing: border-box;
                }

                /* Background Effects */
                .dva-404-bg {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 1;
                }

                .floating-orb {
                    position: absolute;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--dva-orange), var(--dva-blue));
                    opacity: 0.06;
                    animation: float-smooth 8s ease-in-out infinite;
                }

                .orb-1 {
                    width: 200px;
                    height: 200px;
                    top: -100px;
                    right: -100px;
                    animation-delay: 0s;
                }

                .orb-2 {
                    width: 150px;
                    height: 150px;
                    bottom: -75px;
                    left: -75px;
                    animation-delay: 3s;
                }

                .orb-3 {
                    width: 100px;
                    height: 100px;
                    top: 40%;
                    left: 20%;
                    animation-delay: 6s;
                }

                .glass-grid {
                    background-image: 
                        linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
                    background-size: 30px 30px;
                    position: absolute;
                    inset: 0;
                    animation: grid-shift 20s linear infinite;
                }

                @keyframes float-smooth {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(10px, -15px) rotate(90deg); }
                    50% { transform: translate(-5px, 10px) rotate(180deg); }
                    75% { transform: translate(-10px, -5px) rotate(270deg); }
                }

                @keyframes grid-shift {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(30px, 30px); }
                }

                /* Main Container */
                .dva-404-container {
                    text-align: center;
                    color: var(--text-primary);
                    max-width: 500px;
                    width: 100%;
                    z-index: 10;
                    position: relative;
                    background: var(--glass-bg);
                    backdrop-filter: blur(20px);
                    border: 1px solid var(--glass-border);
                    border-radius: 24px;
                    padding: 2rem;
                    box-shadow: 
                        0 8px 32px rgba(0, 0, 0, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }

                /* DVA Branding */
                .dva-brand-section {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .dva-logo-glass {
                    position: relative;
                    padding: 1rem;
                    background: linear-gradient(135deg, var(--dva-orange), var(--dva-blue));
                    border-radius: 20px;
                    box-shadow: 
                        0 8px 25px rgba(255, 107, 53, 0.25),
                        0 0 0 1px rgba(255, 255, 255, 0.1);
                    animation: logo-pulse 3s ease-in-out infinite;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 80px;
                    min-height: 80px;
                }

                .dva-logo-img {
                    width: 60px;
                    height: 60px;
                    object-fit: contain;
                    border-radius: 12px;
                }

                .volleyball-fallback {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .volleyball-svg {
                    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
                }

                @keyframes logo-pulse {
                    0%, 100% { transform: scale(1); box-shadow: 0 8px 25px rgba(255, 107, 53, 0.25); }
                    50% { transform: scale(1.05); box-shadow: 0 12px 35px rgba(255, 107, 53, 0.35); }
                }

                .dva-brand-text {
                    text-align: left;
                }

                .dva-title {
                    font-size: 2rem;
                    font-weight: 900;
                    margin: 0;
                    background: linear-gradient(135deg, var(--dva-orange), var(--dva-blue));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                }

                .dva-subtitle {
                    margin: 0;
                    color: var(--text-secondary);
                    font-weight: 500;
                    font-size: 0.875rem;
                    letter-spacing: 1px;
                    opacity: 0.8;
                }

                /* Error Display */
                .error-display {
                    margin-bottom: 2rem;
                }

                .error-code {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                    font-size: 4rem;
                    font-weight: 900;
                }

                .digit-four {
                    color: var(--dva-orange);
                    text-shadow: 
                        0 0 20px rgba(255, 107, 53, 0.5),
                        0 0 40px rgba(255, 107, 53, 0.2);
                    animation: digit-glitch 3s ease-in-out infinite;
                }

                .volleyball-zero {
                    position: relative;
                    width: 80px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--glass-bg);
                    border: 2px solid var(--glass-border);
                    border-radius: 50%;
                    backdrop-filter: blur(10px);
                }

                .volleyball-spin {
                    font-size: 2.5rem;
                    animation: volleyball-bounce 2s ease-in-out infinite;
                }

                @keyframes volleyball-bounce {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(180deg); }
                }

                @keyframes digit-glitch {
                    0%, 95%, 100% { transform: translate(0); }
                    5% { transform: translate(-1px, 1px); }
                    10% { transform: translate(1px, -1px); }
                }

                .error-title {
                    font-size: 1.75rem;
                    margin-bottom: 1rem;
                    color: var(--text-primary);
                    font-weight: 700;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                }

                .error-description {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    margin-bottom: 2rem;
                    opacity: 0.9;
                }

                .desktop-break {
                    display: none;
                }

                /* Action Buttons */
                .dva-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    align-items: center;
                }

                .btn-primary-dva,
                .btn-secondary-dva,
                .btn-ghost-dva {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.875rem 1.5rem;
                    border: none;
                    border-radius: 16px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    text-decoration: none;
                    width: 100%;
                    max-width: 240px;
                    backdrop-filter: blur(10px);
                }

                .btn-primary-dva {
                    background: linear-gradient(135deg, var(--dva-orange), #ff8c5a);
                    color: white;
                    box-shadow: 
                        0 4px 15px rgba(255, 107, 53, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.2);
                }

                .btn-primary-dva:hover {
                    transform: translateY(-2px);
                    box-shadow: 
                        0 8px 25px rgba(255, 107, 53, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.2);
                }

                .btn-secondary-dva {
                    background: var(--glass-bg);
                    color: var(--text-primary);
                    border: 1px solid var(--glass-border);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }

                .btn-secondary-dva:hover {
                    background: rgba(255, 255, 255, 0.12);
                    transform: translateY(-2px);
                    box-shadow: 
                        0 8px 25px rgba(0, 0, 0, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.15);
                }

                .btn-ghost-dva {
                    background: transparent;
                    color: var(--text-secondary);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .btn-ghost-dva:hover {
                    color: var(--dva-orange);
                    border-color: var(--dva-orange);
                    background: rgba(255, 107, 53, 0.05);
                    transform: translateY(-1px);
                }

                .btn-icon {
                    font-size: 1.1rem;
                    opacity: 0.9;
                }

                .btn-text {
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }

                /* Desktop Responsive */
                @media (min-width: 640px) {
                    .dva-404-container {
                        padding: 2.5rem;
                    }

                    .dva-brand-section {
                        flex-direction: row;
                    }

                    .dva-brand-text {
                        text-align: left;
                    }

                    .error-code {
                        font-size: 5rem;
                        gap: 1rem;
                    }

                    .volleyball-zero {
                        width: 100px;
                        height: 100px;
                    }

                    .volleyball-spin {
                        font-size: 3rem;
                    }

                    .error-title {
                        font-size: 2.25rem;
                    }

                    .error-description {
                        font-size: 1.125rem;
                    }

                    .desktop-break {
                        display: inline;
                    }

                    .dva-actions {
                        flex-direction: row;
                        justify-content: center;
                        flex-wrap: wrap;
                    }

                    .btn-primary-dva,
                    .btn-secondary-dva,
                    .btn-ghost-dva {
                        width: auto;
                        min-width: 140px;
                    }
                }

                @media (min-width: 768px) {
                    .dva-404 {
                        padding: 2rem;
                    }

                    .orb-1 {
                        width: 300px;
                        height: 300px;
                        top: -150px;
                        right: -150px;
                    }

                    .orb-2 {
                        width: 200px;
                        height: 200px;
                        bottom: -100px;
                        left: -100px;
                    }

                    .glass-grid {
                        background-size: 40px 40px;
                    }
                }

                /* High contrast mode support */
                @media (prefers-contrast: high) {
                    .dva-404-container {
                        background: rgba(0, 0, 0, 0.9);
                        border: 2px solid #ffffff;
                    }
                    
                    .btn-primary-dva,
                    .btn-secondary-dva,
                    .btn-ghost-dva {
                        border: 2px solid currentColor;
                    }
                }

                /* Reduced motion support */
                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }

                /* Focus states for accessibility */
                .btn-primary-dva:focus,
                .btn-secondary-dva:focus,
                .btn-ghost-dva:focus {
                    outline: 2px solid var(--dva-orange);
                    outline-offset: 2px;
                }
            </style>
        </div>
    `;
}

    updateActiveNavigation(currentPath) {
        console.log(`🎯 Updating navigation for: ${currentPath}`);
        
        // Update desktop navigation
        const navItems = document.querySelectorAll('.nav-item-modern, [data-page]');
        navItems.forEach(item => {
            const page = item.getAttribute('data-page');
            if (page) {
                item.classList.toggle('active', page === currentPath);
            }
        });
        
        // Update mobile navigation  
        const mobileItems = document.querySelectorAll('.mobile-nav-item');
        mobileItems.forEach(item => {
            const page = item.getAttribute('data-page');
            if (page) {
                item.classList.toggle('active', page === currentPath);
            }
        });

        // Update ranking tabs
        const rankingTabs = document.querySelectorAll('.ranking-tab');
        rankingTabs.forEach(tab => {
            const division = tab.getAttribute('data-division');
            if (division) {
                const isActive = this.currentSubRoute === division || 
                                (this.currentRoute === 'ranking' && this.currentSubRoute === '' && division === 'middle');
                tab.classList.toggle('active', isActive);
            }
        });

        // Update tournament tabs
        const tournamentTabs = document.querySelectorAll('.tournament-tab');
        tournamentTabs.forEach(tab => {
            const section = tab.getAttribute('data-section');
            if (section) {
                const isActive = this.currentSubRoute === section || 
                                (this.currentRoute === 'tournament' && this.currentSubRoute === '' && section === 'standings');
                tab.classList.toggle('active', isActive);
            }
        });
        
        console.log(`✅ Active navigation updated: ${currentPath} (sub: ${this.currentSubRoute})`);
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
        
        mainContent.innerHTML = this.get404Content();
    }

    // Public methods
    getCurrentRoute() {
        return this.currentRoute;
    }

    getCurrentSubRoute() {
        return this.currentSubRoute;
    }

    getCurrentFullPath() {
        return this.currentSubRoute ? `${this.currentRoute}/${this.currentSubRoute}` : this.currentRoute;
    }

    getActiveCSS() {
        return Array.from(this.activeCSS);
    }

    isActiveRoute(path) {
        return this.currentRoute === path;
    }
}

// Initialize router
let dvaRouter;

document.addEventListener('DOMContentLoaded', () => {
    dvaRouter = new DVARouter();
    
    // Export globally
    if (typeof window !== 'undefined') {
        window.dvaRouter = dvaRouter;
    }
    
    console.log('🚀 DVA Router ready with consistent CSS management!');
});

// Also initialize if DOM already loaded
if (document.readyState !== 'loading') {
    dvaRouter = new DVARouter();
    if (typeof window !== 'undefined') {
        window.dvaRouter = dvaRouter;
    }
}

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DVARouter;
}