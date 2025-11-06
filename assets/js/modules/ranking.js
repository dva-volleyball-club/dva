/**
 * DVA Volleyball Ranking Module - FIXED VERSION WITH NO SCROLL
 * Version: 2.1 - Fixed duplicate declaration
 */

// ✅ PREVENT DUPLICATE CLASS DECLARATIONS
if (typeof window.RankingModule === 'undefined') {
    
    class RankingModule {
        constructor() {
            this.currentDivision = 'middle';
            this.currentPosition = 'all';
            this.isInitialized = false;

           
            this.init();
        }

        async init() {
            try {
                // Wait for data and elements
                await this.waitForData();
                await this.waitForElements();

                // Bind events and render
                this.bindEvents();
                this.detectInitialDivision();
                this.renderRankings();
                this.animateStats();

                this.isInitialized = true;
               

            } catch (error) {
                console.error('❌ Ranking Module initialization failed:', error);
                this.showFallbackContent();
            }
        }

        // ✅ FALLBACK CONTENT FOR MISSING ELEMENTS
        showFallbackContent() {
            const grid = document.getElementById('rankings-grid');
            if (grid) {
                grid.innerHTML = `
                    <div class="ranking-fallback">
                        <div class="fallback-icon">🏆</div>
                        <h3>Rankings Coming Soon</h3>
                        <p>Player rankings will be available once the season starts.</p>
                    </div>
                `;
            }
        }

        async waitForData() {
            return new Promise((resolve) => {
                const checkData = () => {
                    if (window.rankingsData && window.rankingPositionColors) {
                       
                        resolve();
                    } else {
                        // Create fallback data if not found
                        if (!window.rankingsData) {
                            window.rankingsData = {
                                middle: {
                                    teamName: 'DVA Middle Division',
                                    color: '#FF6B35',
                                    totalPlayers: 0,
                                    positions: {}
                                },
                                advanced: {
                                    teamName: 'DVA Advanced Division', 
                                    color: '#0066FF',
                                    totalPlayers: 0,
                                    positions: {}
                                }
                            };
                        }
                        
                        if (!window.rankingPositionColors) {
                            window.rankingPositionColors = {
                                'Outside Hitter': '#FF6B35',
                                'Middle Blocker': '#0066FF',
                                'Opposite Hitter': '#FF8A65',
                                'Setter': '#4F9CFF',
                                'Libero': '#34D399'
                            };
                        }
                        
                      
                        resolve();
                    }
                };
                checkData();
            });
        }

        async waitForElements() {
            return new Promise((resolve, reject) => {
                const maxAttempts = 30; // ✅ Reduced attempts
                let attempts = 0;

                const checkElements = () => {
                    attempts++;
                    
                    const rankingGrid = document.getElementById('rankings-grid');
                    const rankingTabs = document.querySelectorAll('.ranking-tab');

                    if (rankingGrid) {
                        
                        if (rankingTabs.length === 0) {
                            
                        }
                        resolve();
                    } else if (attempts >= maxAttempts) {
                        console.error('❌ Ranking grid not found after max attempts');
                        this.createFallbackGrid();
                        resolve(); // Continue anyway
                    } else {
                        setTimeout(checkElements, 100);
                    }
                };

                checkElements();
            });
        }

        // ✅ CREATE FALLBACK GRID IF MISSING
        createFallbackGrid() {
            const rankingSection = document.querySelector('.dva-ranking') || document.body;
            if (rankingSection && !document.getElementById('rankings-grid')) {
                const fallbackGrid = document.createElement('div');
                fallbackGrid.id = 'rankings-grid';
                fallbackGrid.className = 'rankings-grid-fallback';
                rankingSection.appendChild(fallbackGrid);
                
            }
        }

        detectInitialDivision() {
            // Get division from URL
            const path = window.location.hash.replace('#/', '');
            const parts = path.split('/');
            
            if (parts[0] === 'ranking' && parts[1]) {
                this.currentDivision = parts[1];
               
            }

            // Update tab states
            this.updateTabStates();
        }

        bindEvents() {
           

            // Division tabs - NO SCROLL TO TOP
            document.querySelectorAll('.ranking-tab').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation(); // Prevent bubbling
                    
                    const division = tab.getAttribute('data-division');
                    if (division && division !== this.currentDivision) {
                        
                        
                        // Update URL without causing page reload
                        const newUrl = `#/ranking/${division}`;
                        history.replaceState(null, null, newUrl);
                        
                        // Switch division without scrolling
                        this.switchDivisionNoScroll(division);
                    }
                });
            });

            // Position filter buttons
            document.querySelectorAll('.position-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const position = btn.getAttribute('data-position');
                    this.filterByPosition(position);
                });
            });

            // Listen for router navigation events
            document.addEventListener('rankingDivisionRoute', (e) => {
                const { division } = e.detail;
              
                this.switchDivisionNoScroll(division);
            });

       
        }

        switchDivisionNoScroll(division) {
            if (division === this.currentDivision) return;

          

            // Remember scroll position
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            // Update division
            this.currentDivision = division;
            
            // Update tab states
            this.updateTabStates();
            
            // Re-render rankings
            this.renderRankings();

            // Restore scroll position after a short delay
            setTimeout(() => {
                window.scrollTo(0, currentScroll);
            }, 50);

            
        }

        updateTabStates() {
            document.querySelectorAll('.ranking-tab').forEach(tab => {
                const division = tab.getAttribute('data-division');
                const isActive = division === this.currentDivision;
                tab.classList.toggle('active', isActive);
            });
        }

        filterByPosition(position) {
            if (position === this.currentPosition) return;

          

            // Update button states
            document.querySelectorAll('.position-btn').forEach(btn => {
                const isActive = btn.getAttribute('data-position') === position;
                btn.classList.toggle('active', isActive);
            });

            this.currentPosition = position;
            this.renderRankings();
        }

        renderRankings() {
           

            const grid = document.getElementById('rankings-grid');
            if (!grid) {
                console.error('❌ Rankings grid not found');
                return;
            }

            const divisionData = window.rankingsData[this.currentDivision];
            if (!divisionData) {
                console.error('❌ No data for division:', this.currentDivision);
                this.showFallbackContent();
                return;
            }

            // Show loading briefly
            grid.innerHTML = `
                <div class="rankings-loading-brief">
                    <div class="loading-spinner-small"></div>
                    <p>Loading ${divisionData.teamName}...</p>
                </div>
            `;

            setTimeout(() => {
                if (this.currentPosition === 'all') {
                    this.renderAllPositions(grid, divisionData);
                } else {
                    this.renderSinglePosition(grid, divisionData, this.currentPosition);
                }
            }, 200);
        }

        renderAllPositions(grid, divisionData) {
            const positions = Object.keys(divisionData.positions);

            if (positions.length === 0) {
                this.showFallbackContent();
                return;
            }

            grid.innerHTML = `
                <div class="positions-overview">
                    <div class="division-header">
                        <h2 class="division-title" style="color: ${divisionData.color}">
                            ${divisionData.teamName} Rankings
                        </h2>
                        <div class="division-stats">
                            <span class="total-players">${divisionData.totalPlayers} Players</span>
                            <span class="total-positions">${positions.length} Positions</span>
                        </div>
                    </div>

                    <div class="positions-grid">
                        ${positions.map(position => this.createPositionColumn(position, divisionData.positions[position])).join('')}
                    </div>
                </div>
            `;
        }

        renderSinglePosition(grid, divisionData, position) {
            const players = divisionData.positions[position] || [];

            grid.innerHTML = `
                <div class="single-position-view">
                    <div class="position-header">
                        <div class="position-info">
                            <h2 class="position-title" style="color: ${window.rankingPositionColors[position]}">
                                Best ${position}s
                            </h2>
                            <div class="position-subtitle">${divisionData.teamName}</div>
                        </div>
                        <div class="position-count">${players.length} Players</div>
                    </div>

                    <div class="position-rankings">
                        ${players.map((player, index) => this.createRankingCard(player, index + 1, position)).join('')}
                    </div>
                </div>
            `;
        }

        createPositionColumn(position, players) {
            const positionColor = window.rankingPositionColors[position];
            const topPlayers = players.slice(0, 3); // Show top 3

            return `
                <div class="position-column" data-position="${position}">
                    <div class="position-column-header">
                        <div class="position-icon" style="background: ${positionColor}">
                            ${this.getPositionIcon(position)}
                        </div>
                        <div class="position-column-title">
                            <h3 style="color: ${positionColor}">${position}</h3>
                            <div class="position-subtitle">Top ${topPlayers.length}</div>
                        </div>
                    </div>

                    <div class="position-players">
                        ${topPlayers.map((player, index) => this.createCompactPlayerCard(player, index + 1, positionColor)).join('')}
                    </div>

                    <button class="view-all-btn" onclick="window.rankingModule?.filterByPosition('${position}')">
                        View All ${players.length} Players
                    </button>
                </div>
            `;
        }

        createCompactPlayerCard(player, rank, positionColor) {
            const fallbackSVG = this.createPlayerFallbackSVG(player, positionColor);
            const medalIcon = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;

            return `
                <div class="compact-player-card" data-rank="${rank}">
                    <div class="rank-badge" style="background: ${positionColor}">
                        ${medalIcon}
                    </div>
                    <div class="player-compact-info">
                        <div class="player-compact-avatar">
                            <img src="${player.avatar}" 
                                 alt="${player.name}"
                                 onerror="this.src='${fallbackSVG}'"
                                 class="compact-avatar-img">
                        </div>
                        <div class="player-compact-details">
                            <div class="player-compact-name">${player.name}</div>
                            <div class="player-compact-meta">
                                <span class="player-number">#${player.number}</span>
                                <span class="player-score">${player.score}★</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        createRankingCard(player, rank, position) {
            const positionColor = window.rankingPositionColors[position];
            const fallbackSVG = this.createPlayerFallbackSVG(player, positionColor);
            
            const medalClass = rank <= 3 ? `medal-${rank}` : '';
            const medalIcon = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;

            return `
                <div class="ranking-card ${medalClass}" data-rank="${rank}">
                    <div class="ranking-position">
                        <div class="rank-number">${medalIcon}</div>
                        <div class="rank-label">#${rank}</div>
                    </div>

                    <div class="ranking-player-info">
                        <div class="ranking-player-avatar">
                            <img src="${player.avatar}" 
                                 alt="${player.name}"
                                 onerror="this.src='${fallbackSVG}'"
                                 class="ranking-avatar-img">
                            <div class="player-ranking-number" style="background: ${positionColor}">
                                ${player.number}
                            </div>
                        </div>

                        <div class="ranking-player-details">
                            <h3 class="ranking-player-name">${player.name}</h3>
                            <div class="ranking-player-position" style="color: ${positionColor}">
                                ${position}
                            </div>
                            <div class="ranking-player-score">
                                <span class="score-label">Performance Score</span>
                                <div class="score-bar">
                                    <div class="score-fill" style="width: ${player.score}%; background: ${positionColor}"></div>
                                    <span class="score-text">${player.score}★</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        createPlayerFallbackSVG(player, positionColor) {
            const initials = player.name.split(' ').map(n => n[0]).join('').substr(0, 2);
            return `data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%2280%22%20height%3D%2280%22%20fill%3D%22${positionColor.replace('#', '%23')}%22/%3E%3Ctext%20x%3D%2240%22%20y%3D%2250%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2224%22%20font-weight%3D%22bold%22%3E${initials}%3C/text%3E%3C/svg%3E`;
        }

        getPositionIcon(position) {
            const icons = {
                'Outside Hitter': '⚡',
                'Middle Blocker': '🛡️',
                'Opposite Hitter': '💥',
                'Setter': '🎯',
                'Libero': '🥅'
            };
            return icons[position] || '🏐';
        }

        animateStats() {
            const statNumbers = document.querySelectorAll('.stat-number[data-target]');
            
            if (statNumbers.length === 0) return; // No stats to animate

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = parseInt(entry.target.getAttribute('data-target'));
                        this.animateNumber(entry.target, target);
                        observer.unobserve(entry.target);
                    }
                });
            });

            statNumbers.forEach(stat => observer.observe(stat));
        }

        animateNumber(element, target) {
            let current = 0;
            const increment = target / 30;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 50);
        }

        cleanup() {
            
            this.isInitialized = false;
        }
    }

    // EXPOSE CLASS GLOBALLY
    window.RankingModule = RankingModule;
    

} else {
    
}

// ===== MODULE INITIALIZATION ===== //



// Listen for navigation events
document.addEventListener('navigationChange', (e) => {
    const currentPage = e.detail?.page;

    if (currentPage === 'ranking') {
       
        
        setTimeout(() => {
            if (!window.rankingModule || !window.rankingModule.isInitialized) {
                if (window.RankingModule) {
                    window.rankingModule = new window.RankingModule();
                }
            } else {
                // Just refresh if module already exists
                window.rankingModule.detectInitialDivision();
                window.rankingModule.renderRankings();
            }
        }, 100);
    } else {
        // Cleanup when leaving ranking page
        if (window.rankingModule && window.rankingModule.cleanup) {
            window.rankingModule.cleanup();
            window.rankingModule = null;
        }
    }
});

// Initialize if already on ranking page
function tryInitRanking() {
    if (window.location.hash.includes('#/ranking') && (!window.rankingModule || !window.rankingModule.isInitialized)) {
     
        if (window.RankingModule) {
            window.rankingModule = new window.RankingModule();
        }
    }
}

setTimeout(tryInitRanking, 300);
setTimeout(tryInitRanking, 1000);
