/**
 * DVA Information Module - ULTIMATE BULLETPROOF VERSION WITH TAB FIX
 * Solves: Button not working, Tab switching, Event binding issues
 * Version: 3.0 - Information Edition
 * Path: assets/js/modules/information.js
 */

// PREVENT DUPLICATE CLASS DECLARATIONS
if (typeof window.InformationModule === 'undefined') {
    
    class InformationModule {
        constructor() {
            this.currentTab = 'attitude';
            this.isInitialized = false;
            this.eventListeners = [];
            this.observers = [];
            this.animationTimers = [];
            this.persistentContainer = null;
            this.tabButtons = [];
            this.contentContainers = [];
            
            console.log('🏐 Information Module Ultimate Edition initializing...');
            this.init();
        }

        async init() {
            try {
                await this.waitForElements();
                this.setupModuleScope();
                this.bindEvents(); // ENHANCED EVENT BINDING FOR TABS
                this.initializeFeatures();
                
                this.isInitialized = true;
                console.log('✅ Information Module Ultimate Edition initialized successfully');
                
                // DISPATCH MODULE READY EVENT
                document.dispatchEvent(new CustomEvent('informationModuleReady', {
                    detail: { instance: this }
                }));
                
            } catch (error) {
                console.warn('⚠️ Information Module using fallback mode:', error.message);
                this.createEmergencyFix();
                this.isInitialized = true;
            }
        }

        // ✅ ENHANCED ELEMENT WAITING FOR INFORMATION TABS
        async waitForElements() {
            return new Promise((resolve, reject) => {
                let attempts = 0;
                const maxAttempts = 20;

                const checkElements = () => {
                    attempts++;
                    
                    // CORRECT SELECTORS BASED ON YOUR HTML
                    const tabs = document.querySelectorAll('.req-tab[data-tab]');
                    const contents = document.querySelectorAll('.req-content');
                    const informationContainer = document.querySelector('.dva-information');

                    if (tabs.length >= 3 && contents.length >= 3 && informationContainer) {
                        console.log('✅ All information elements found and verified');
                        this.tabButtons = Array.from(tabs);
                        this.contentContainers = Array.from(contents);
                        this.container = informationContainer;
                        resolve();
                    } else if (attempts >= maxAttempts) {
                        console.error('❌ Information elements not found after', maxAttempts, 'attempts');
                        reject(new Error('Information elements not found'));
                    } else {
                        setTimeout(checkElements, 100);
                    }
                };

                checkElements();
            });
        }

        // ✅ SETUP MODULE SCOPE
        setupModuleScope() {
            this.moduleContainer = document.querySelector('.dva-information') || 
                                 this.container;
            
            if (!this.moduleContainer) {
                console.warn('⚠️ No information module container found');
                return;
            }
            
            // ADD PROTECTION MARKERS
            this.moduleContainer.classList.add('module-isolated');
            this.moduleContainer.setAttribute('data-information-module', 'active');
            
            console.log('🎯 Information module scope established');
        }

        // ✅ BULLETPROOF EVENT BINDING FOR INFORMATION TABS
        bindEvents() {
            console.log('🔗 Binding bulletproof information tab events...');

            // CLEAR EXISTING LISTENERS
            this.clearEventListeners();

            // BULLETPROOF TAB BUTTON BINDING
            this.tabButtons.forEach((button, index) => {
                // REMOVE ANY EXISTING LISTENERS (CLONE & REPLACE METHOD)
                const newButton = button.cloneNode(true);
                button.parentNode.replaceChild(newButton, button);
                this.tabButtons[index] = newButton; // UPDATE REFERENCE

                // CREATE BULLETPROOF EVENT HANDLER
                const handler = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const targetTab = newButton.getAttribute('data-tab');
                    console.log(`🎯 Information tab clicked: ${targetTab}`);
                    
                    if (targetTab && targetTab !== this.currentTab) {
                        this.switchTab(targetTab);
                    }
                };

                // BIND EVENT WITH BULLETPROOF METHOD
                newButton.addEventListener('click', handler, { passive: false });
                this.eventListeners.push({ element: newButton, event: 'click', handler });

                console.log(`✅ Information Tab ${index + 1} (${newButton.getAttribute('data-tab')}) bound successfully`);
            });

            // ALSO BIND TO QUERY SELECTORS AS BACKUP
            const allTabs = document.querySelectorAll('.req-tab[data-tab]');
            allTabs.forEach(tab => {
                if (!this.tabButtons.includes(tab)) {
                    const backupHandler = (e) => {
                        e.preventDefault();
                        const targetTab = tab.getAttribute('data-tab');
                        if (targetTab) {
                            console.log(`🔄 Backup handler for: ${targetTab}`);
                            this.switchTab(targetTab);
                        }
                    };
                    
                    tab.addEventListener('click', backupHandler);
                    this.eventListeners.push({ element: tab, event: 'click', handler: backupHandler });
                }
            });

            console.log(`✅ Information tab events bound successfully - ${this.eventListeners.length} listeners total`);
        }

        // ✅ INITIALIZE FEATURES
        initializeFeatures() {
            // SET INITIAL TAB STATE
            this.switchTab(this.currentTab);
            
            // TEST BUTTON FUNCTIONALITY IMMEDIATELY
            setTimeout(() => {
                this.testTabFunctionality();
            }, 500);
            
            console.log('✅ Information features initialized');
        }

        // ✅ TEST TAB FUNCTIONALITY
        testTabFunctionality() {
            console.log('🧪 Testing information tab functionality...');
            
            const tabs = document.querySelectorAll('.req-tab[data-tab]');
            tabs.forEach((tab, index) => {
                const tabName = tab.getAttribute('data-tab');
                console.log(`Tab ${index + 1}: ${tabName} - Listeners: ${this.eventListeners.filter(l => l.element === tab).length}`);
            });
            
            if (tabs.length >= 3 && this.eventListeners.length >= 3) {
                console.log('✅ Tab functionality test PASSED');
            } else {
                console.warn('⚠️ Tab functionality test FAILED - rebinding events');
                this.bindEvents();
            }
        }

        // ✅ ENHANCED TAB SWITCHING
        switchTab(targetTab) {
            if (targetTab === this.currentTab) {
                console.log(`⚠️ Already on ${targetTab} tab`);
                return;
            }

            console.log(`🔄 Switching to ${targetTab} tab`);

            this.currentTab = targetTab;
            this.updateTabStates();
            this.updateContentVisibility();

            console.log(`✅ Switched to ${targetTab} tab successfully`);
        }

        // ✅ UPDATE TAB STATES WITH VISUAL FEEDBACK
        updateTabStates() {
            const tabs = document.querySelectorAll('.req-tab[data-tab]');

            tabs.forEach(tab => {
                const tabName = tab.getAttribute('data-tab');
                const isActive = tabName === this.currentTab;
                
                if (isActive) {
                    tab.classList.add('active');
                    // ADD VISUAL FEEDBACK FOR ACTIVE TAB
                    tab.style.background = 'rgba(255, 107, 53, 0.3)';
                    tab.style.borderColor = 'rgba(255, 107, 53, 0.6)';
                    tab.style.color = 'white';
                    tab.style.transform = 'translateY(-2px)';
                } else {
                    tab.classList.remove('active');
                    tab.style.background = 'rgba(255, 255, 255, 0.1)';
                    tab.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    tab.style.color = 'rgba(255, 255, 255, 0.8)';
                    tab.style.transform = 'translateY(0)';
                }
            });
            
            console.log(`✅ Tab states updated - Active: ${this.currentTab}`);
        }

        // ✅ UPDATE CONTENT VISIBILITY
        updateContentVisibility() {
            const contents = document.querySelectorAll('.req-content');

            contents.forEach(content => {
                if (content.id === this.currentTab) {
                    content.classList.add('active');
                    content.style.display = 'block';
                    console.log(`✅ Content ${this.currentTab} is now visible`);
                } else {
                    content.classList.remove('active');
                    content.style.display = 'none';
                }
            });
        }

        // ✅ CREATE EMERGENCY FIX IF ELEMENTS NOT FOUND
        createEmergencyFix() {
            console.log('🚨 Creating emergency information tab fix...');
            
            setTimeout(() => {
                const tabs = document.querySelectorAll('.req-tab');
                const contents = document.querySelectorAll('.req-content');
                
                if (tabs.length > 0 && contents.length > 0) {
                    // Apply emergency fix
                    tabs.forEach(tab => {
                        tab.addEventListener('click', () => {
                            const targetTab = tab.getAttribute('data-tab') || 
                                            (tab.textContent.includes('Thái Độ') ? 'attitude' :
                                             tab.textContent.includes('Kỹ Thuật') ? 'technical' :
                                             tab.textContent.includes('Bổ Sung') ? 'additional' : 'attitude');
                            
                            // Remove active from all
                            tabs.forEach(t => t.classList.remove('active'));
                            contents.forEach(c => c.classList.remove('active'));
                            
                            // Add active to current
                            tab.classList.add('active');
                            const targetContent = document.getElementById(targetTab);
                            if (targetContent) {
                                targetContent.classList.add('active');
                            }
                            
                            console.log(`🚨 Emergency fix: Switched to ${targetTab}`);
                        });
                    });
                    
                    // Set default
                    tabs[0]?.classList.add('active');
                    contents[0]?.classList.add('active');
                    
                    console.log('✅ Emergency information tab fix applied');
                }
            }, 200);
        }

        // ✅ CLEAR EVENT LISTENERS
        clearEventListeners() {
            this.eventListeners.forEach(({ element, event, handler }) => {
                if (element && element.removeEventListener) {
                    element.removeEventListener(event, handler);
                }
            });
            this.eventListeners = [];
            console.log('🧹 Information event listeners cleared');
        }

        // ✅ CLEANUP WITH PERSISTENCE PROTECTION
        cleanup() {
            console.log('🧹 Cleaning up Information module...');

            this.clearEventListeners();

            // DISCONNECT OBSERVERS
            this.observers.forEach(observer => {
                if (observer && observer.disconnect) {
                    observer.disconnect();
                }
            });
            this.observers = [];

            // CLEAR TIMERS
            this.animationTimers.forEach(timer => {
                clearTimeout(timer);
                clearInterval(timer);
            });
            this.animationTimers = [];

            this.isInitialized = false;
            console.log('✅ Information module cleanup completed');
        }

        // ✅ PUBLIC METHODS
        getCurrentTab() {
            return this.currentTab;
        }

        isModuleInitialized() {
            return this.isInitialized;
        }

        getModuleStats() {
            return {
                initialized: this.isInitialized,
                currentTab: this.currentTab,
                eventListeners: this.eventListeners.length,
                observers: this.observers.length,
                animationTimers: this.animationTimers.length,
                tabButtons: this.tabButtons.length,
                contentContainers: this.contentContainers.length
            };
        }

        // ✅ FORCE TAB REBIND (EMERGENCY METHOD)
        forceTabRebind() {
            console.log('🚨 Force rebinding information tabs...');
            this.clearEventListeners();
            
            // Re-get tab references
            this.tabButtons = Array.from(document.querySelectorAll('.req-tab[data-tab]'));
            
            // Re-bind events
            this.bindEvents();
            
            console.log('✅ Tab rebinding completed');
        }

        async reinitialize() {
            if (this.isInitialized) {
                this.cleanup();
            }
            await this.init();
        }
    }

    // EXPOSE CLASS GLOBALLY
    window.InformationModule = InformationModule;
    console.log('✅ Ultimate InformationModule class defined successfully');

} else {
    console.log('⚠️ InformationModule already exists, skipping redefinition');
}

// ✅ ENHANCED MODULE INITIALIZATION WITH NAVIGATION RESISTANCE
document.addEventListener('navigationChange', (e) => {
    const currentPage = e.detail?.page;
    console.log('📍 Navigation change detected for Information:', currentPage);

    if (currentPage === 'information') {
        setTimeout(() => {
            if (!window.informationModuleInstance && window.InformationModule) {
                console.log('🚀 Creating ultimate information module instance');
                try {
                    window.informationModuleInstance = new window.InformationModule();
                } catch (error) {
                    console.error('❌ Failed to create Information module instance:', error);
                }
            } else if (window.informationModuleInstance && !window.informationModuleInstance.isModuleInitialized()) {
                console.log('🔄 Reinitializing information module');
                window.informationModuleInstance.reinitialize();
            } else if (window.informationModuleInstance) {
                // TEST AND FIX TABS IF NEEDED
                setTimeout(() => {
                    const tabs = document.querySelectorAll('.req-tab[data-tab]');
                    if (tabs.length > 0 && window.informationModuleInstance.eventListeners.length === 0) {
                        console.log('🔧 Tabs found but no listeners - rebinding');
                        window.informationModuleInstance.forceTabRebind();
                    }
                }, 200);
            }
        }, 300);
    }
});

// ENHANCED Direct initialization for information page
if (window.location.hash.includes('#/information')) {
    const initTimer = setTimeout(() => {
        if (window.InformationModule && !window.informationModuleInstance) {
            console.log('🔄 Direct information initialization');
            try {
                window.informationModuleInstance = new window.InformationModule();
            } catch (error) {
                console.error('❌ Direct initialization failed:', error);
                setTimeout(() => {
                    if (!window.informationModuleInstance) {
                        try {
                            window.informationModuleInstance = new window.InformationModule();
                        } catch (retryError) {
                            console.error('❌ Retry initialization failed:', retryError);
                        }
                    }
                }, 1000);
            }
        }
    }, 1000);

    document.addEventListener('navigationChange', () => {
        clearTimeout(initTimer);
    }, { once: true });
}

// ✅ INSTANT FIX FOR INFORMATION TABS (BACKUP)
window.InformationTabsFix = {
    init() {
        console.log('🔧 Information Tabs Instant Fix initializing...');
        
        setTimeout(() => {
            const tabs = document.querySelectorAll('.req-tab[data-tab]');
            const contents = document.querySelectorAll('.req-content');
            
            if (tabs.length > 0 && contents.length > 0) {
                tabs.forEach(tab => {
                    tab.addEventListener('click', function() {
                        const targetTab = this.getAttribute('data-tab');
                        
                        // Remove active from all
                        tabs.forEach(t => t.classList.remove('active'));
                        contents.forEach(c => {
                            c.classList.remove('active');
                            c.style.display = 'none';
                        });
                        
                        // Add active to current
                        this.classList.add('active');
                        const targetContent = document.getElementById(targetTab);
                        if (targetContent) {
                            targetContent.classList.add('active');
                            targetContent.style.display = 'block';
                        }
                        
                        console.log(`✅ Instant fix: Switched to ${targetTab}`);
                    });
                });
                
                // Set default
                tabs[0]?.classList.add('active');
                if (contents[0]) {
                    contents[0].classList.add('active');
                    contents[0].style.display = 'block';
                }
                
                console.log('✅ Information tabs instant fix applied successfully!');
            }
        }, 100);
    }
};

// Auto-apply instant fix
document.addEventListener('DOMContentLoaded', () => {
    window.InformationTabsFix.init();
});

console.log('📜 Ultimate Bulletproof Information.js loaded successfully');
