/**
 * DVA Volleyball Home Module - FIXED EVENT LISTENERS NAVIGATION
 */

// PREVENT DUPLICATE DECLARATION & ENSURE EVENT BINDING
if (typeof window.HomeModule !== 'undefined') {
    console.log('⚠️ HomeModule already exists, refreshing with events');
    // Cleanup existing module
    if (window.homeModule) {
        if (typeof window.homeModule.cleanup === 'function') {
            window.homeModule.cleanup();
        }
        delete window.homeModule;
    }
}

class HomeModule {
    constructor() {
        this.currentTeamIndex = 0;
        this.totalTeams = 0;
        this.isTransitioning = false;
        this.dataLoaded = false;
        this.elementsReady = false;
        this.eventsBound = false;
        this.keyboardHandler = null;
        this.boundMethods = {};
        
        console.log('🏠 Home Module constructor called');
        this.init();
    }

    async init() {
        console.log('📚 Initializing Home Module...');
        
        try {
            // CLEANUP FIRST
            this.cleanup();
            
            // FORCE DATA RELOAD
            await this.forceDataReload();
            await this.waitForElements();
            
            // BIND EVENTS AFTER ELEMENTS ARE READY
            this.bindEvents();
            this.renderTeams();
            this.renderLeadership();
            this.animateStats();
            this.initTeamCarousel();
            
            console.log('✅ Home Module initialized successfully');
            
        } catch (error) {
            console.error('❌ Home Module initialization failed:', error);
            // Retry after delay
            setTimeout(() => this.init(), 1000);
        }
    }

    // CLEANUP METHOD - REMOVE OLD LISTENERS
    cleanup() {
        console.log('🧹 Cleaning up old event listeners...');
        
        // Remove keyboard listener
        if (this.keyboardHandler) {
            document.removeEventListener('keydown', this.keyboardHandler);
            this.keyboardHandler = null;
        }
        
        // Remove button listeners
        const prevBtn = document.getElementById('team-prev');
        const nextBtn = document.getElementById('team-next');
        
        if (prevBtn && this.boundMethods.prevTeam) {
            prevBtn.removeEventListener('click', this.boundMethods.prevTeam);
        }
        
        if (nextBtn && this.boundMethods.nextTeam) {
            nextBtn.removeEventListener('click', this.boundMethods.nextTeam);
        }
        
        // Clear indicator listeners
        const indicators = document.querySelectorAll('.team-indicator');
        indicators.forEach((indicator, index) => {
            if (this.boundMethods[`indicator_${index}`]) {
                indicator.removeEventListener('click', this.boundMethods[`indicator_${index}`]);
            }
        });
        
        this.boundMethods = {};
        this.eventsBound = false;
        
        console.log('✅ Cleanup completed');
    }

    // FORCE DATA RELOAD - PREVENT NAVIGATION DATA LOSS
    async forceDataReload() {
        return new Promise((resolve) => {
            // Check if data exists
            if (window.teamsData && window.leadershipData && window.teamPositionColors) {
                console.log('✅ Existing data found');
                this.dataLoaded = true;
                resolve();
                return;
            }

            // Force reload teams.js if missing
            console.log('🔄 Reloading teams data...');
            
            const script = document.createElement('script');
            script.src = 'assets/js/data/teams.js?t=' + Date.now(); // Cache busting
            script.onload = () => {
                console.log('✅ Teams data reloaded');
                this.dataLoaded = true;
                resolve();
            };
            script.onerror = () => {
                console.error('❌ Failed to reload teams data');
                // Try alternative approach
                this.loadFallbackData();
                resolve();
            };
            
            document.head.appendChild(script);
        });
    }

    // FALLBACK DATA LOADING
    loadFallbackData() {
        console.log('🔄 Loading fallback data...');
        
        // Ensure data exists with fallback
        if (!window.teamsData) {
            window.teamsData = {
                teamA: {
                    name: "Team A", rank: 1, description: "Elite Division - Our strongest lineup", 
                    color: "#FF6B35", formation: "6-2",
                    players: [
                        { id: 1, name: "Nguyễn Quang Hưng", number: 9, position: "Outside Hitter", avatar: "assets/images/players/middle/NguyenQuangHungg.webp" },
                        { id: 2, name: "Đỗ Văn Đạt", number: 1, position: "Outside Hitter", avatar: "assets/images/players/advanced/Liuba.webp" },
                        { id: 3, name: "Trần Ngọc Lâm", number: 4, position: "Middle Blocker", avatar: "assets/images/players/advanced/JangWooheok.webp" },
                        { id: 4, name: "Lê Hải Dương", number: 20, position: "Middle Blocker", avatar: "assets/images/players/middle/DuongVanDaii.webp" },
                        { id: 5, name: "Bùi Ngọc Chiến", number: 6, position: "Opposite Hitter", avatar: "assets/images/players/advanced/NeoJackson.webp" },
                        { id: 6, name: "Hoàng Quốc Duy", number: 29, position: "Setter", avatar: "assets/images/players/middle/HoangQuocDuy.webp", isCaptain: true },
                        { id: 7, name: "Nguyễn Xuân Trường", number: 20, position: "Libero", avatar: "assets/images/players/advanced/ThanhBinh.webp", isLibero: true }
                    ]
                },
                teamB: {
                    name: "Team B", rank: 2, description: "Professional Division - Strong competitive team",
                    color: "#0066FF", formation: "5-1",
                    players: [
                        { id: 8, name: "Hà Xuân Quân", number: 27, position: "Outside Hitter", avatar: "assets/images/players/middle/HaXuanQuann.webp" },
                        { id: 9, name: "Yelzhas Dualatuly", number: 14, position: "Outside Hitter", avatar: "assets/images/players/advanced/YelzhasDualatuly.webp" },
                        { id: 10, name: "Nguyễn Đình Vũ", number: 24, position: "Middle Blocker", avatar: "assets/images/players/middle/NguyenDinhVu.webp" },
                        { id: 11, name: "Trần Văn Long", number: 12, position: "Middle Blocker", avatar: "assets/images/players/middle/TranVanLong.webp" },
                        { id: 12, name: "Nguyễn Thành Trung", number: 8, position: "Opposite Hitter", avatar: "assets/images/players/middle/NguyenThanhTrung.webp" },
                        { id: 13, name: "Lê Minh Đức", number: 3, position: "Setter", avatar: "assets/images/players/middle/LeMinhDuc.webp", isCaptain: true },
                        { id: 14, name: "Phạm Văn An", number: 5, position: "Libero", avatar: "assets/images/players/middle/PhamVanAn.webp", isLibero: true }
                    ]
                },
                teamC: {
                    name: "Team C", rank: 3, description: "Development Division - Rising talents",
                    color: "#10B981", formation: "6-2",
                    players: [
                        { id: 15, name: "Nguyễn Hoàng Bảo", number: 18, position: "Outside Hitter", avatar: "assets/images/players/middle/NguyenHoangBao.webp" },
                        { id: 16, name: "Lê Quang Huy", number: 7, position: "Outside Hitter", avatar: "assets/images/players/middle/LeQuangHuy.webp" },
                        { id: 17, name: "Đặng Văn Nam", number: 19, position: "Middle Blocker", avatar: "assets/images/players/middle/DuongVanDaii.webp" },
                        { id: 18, name: "Trần Minh Tâm", number: 11, position: "Middle Blocker", avatar: "assets/images/players/middle/TranMinhTam.webp" },
                        { id: 19, name: "Vũ Thanh Sơn", number: 16, position: "Opposite Hitter", avatar: "assets/images/players/middle/VuThanhSon.webp" },
                        { id: 20, name: "Hoàng Văn Khôi", number: 2, position: "Setter", avatar: "assets/images/players/middle/HoangVanKhoi.webp", isCaptain: true },
                        { id: 21, name: "Hoàng Minh Hiếu", number: 15, position: "Libero", avatar: "assets/images/players/middle/MinhHieu.webp", isLibero: true }
                    ]
                }
            };
        }

        if (!window.leadershipData) {
            window.leadershipData = {
                founder: { id: 100, name: "Nguyễn Văn Đức", title: "Founder & Chairman", description: "Visionary leader", avatar: "data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2260%22%20fill%3D%22%23FF6B35%22/%3E%3Ctext%20x%3D%2260%22%20y%3D%2270%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2224%22%20font-weight%3D%22bold%22%3ENVĐ%3C/text%3E%3C/svg%3E", achievements: ["15+ years experience"], social: { linkedin: "#", facebook: "#", email: "founder@dva.volleyball" } },
                headCoach: { id: 101, name: "Trần Thị Minh Châu", title: "Head Coach", description: "Experienced coach", avatar: "data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2260%22%20fill%3D%22%23FF6B35%22/%3E%3Ctext%20x%3D%2260%22%20y%3D%2270%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2224%22%20font-weight%3D%22bold%22%3ETTMC%3C/text%3E%3C/svg%3E", achievements: ["National champion"], social: { linkedin: "#", facebook: "#", email: "coach@dva.volleyball" } },
                manager: { id: 102, name: "Lê Văn Minh", title: "General Manager", description: "Strategic manager", avatar: "data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2260%22%20fill%3D%22%23FF6B35%22/%3E%3Ctext%20x%3D%2260%22%20y%3D%2270%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2224%22%20font-weight%3D%22bold%22%3ELVM%3C/text%3E%3C/svg%3E", achievements: ["Management expert"], social: { linkedin: "#", facebook: "#", email: "manager@dva.volleyball" } }
            };
        }

        if (!window.teamPositionColors) {
            window.teamPositionColors = {
                'Setter': '#3B82F6', 'Outside Hitter': '#EF4444', 'Middle Blocker': '#10B981',
                'Opposite Hitter': '#F59E0B', 'Libero': '#8B5CF6'
            };
        }

        if (!window.formationInfo) {
            window.formationInfo = {
                '6-2': 'Two setters with 6 attackers when setters are in back row',
                '5-1': 'One setter with 5 attackers - most common formation', 
                '4-2': 'Two setters always in front row with 4 attackers'
            };
        }

        console.log('✅ Fallback data loaded');
    }

    async waitForElements() {
        return new Promise((resolve, reject) => {
            const maxAttempts = 100;
            let attempts = 0;
            
            const checkElements = () => {
                attempts++;
                
                const teamSlider = document.getElementById('team-slider');
                const leadershipGrid = document.getElementById('leadership-grid');
                
                if (teamSlider && leadershipGrid) {
                    console.log('✅ Home elements found');
                    this.elementsReady = true;
                    resolve();
                } else if (attempts >= maxAttempts) {
                    console.error('❌ Home elements not found after', attempts, 'attempts');
                    reject(new Error('Home elements not found'));
                } else {
                    setTimeout(checkElements, 50);
                }
            };
            
            checkElements();
        });
    }

    // REFRESH DATA - For navigation comeback
    refreshData() {
        console.log('🔄 Refreshing home data and events...');
        if (this.elementsReady) {
            this.renderTeams();
            this.renderLeadership();
            this.animateStats();
            this.initTeamCarousel();
            // RE-BIND EVENTS AFTER REFRESH
            this.bindEvents();
        }
    }

    // FIXED EVENT BINDING - ALWAYS WORKS AFTER NAVIGATION
    bindEvents() {
        if (this.eventsBound) {
            console.log('⚠️ Events already bound, skipping...');
            return;
        }

        console.log('🔗 Binding navigation events...');
        
        // Wait a bit for DOM to be fully ready
        setTimeout(() => {
            this.actuallyBindEvents();
        }, 100);
    }

    actuallyBindEvents() {
        try {
            // Team navigation buttons
            const prevBtn = document.getElementById('team-prev');
            const nextBtn = document.getElementById('team-next');
            
            if (prevBtn && nextBtn) {
                // Create bound methods
                this.boundMethods.prevTeam = () => {
                    console.log('⬅️ Previous team clicked');
                    this.previousTeam();
                };
                
                this.boundMethods.nextTeam = () => {
                    console.log('➡️ Next team clicked');
                    this.nextTeam();
                };
                
                // Add event listeners
                prevBtn.addEventListener('click', this.boundMethods.prevTeam);
                nextBtn.addEventListener('click', this.boundMethods.nextTeam);
                
                console.log('✅ Navigation buttons bound');
            } else {
                console.error('❌ Navigation buttons not found');
            }
            
            // Keyboard navigation
            this.keyboardHandler = (e) => {
                if (document.querySelector('.dva-home')) {
                    if (e.key === 'ArrowLeft') {
                        console.log('⬅️ Left arrow pressed');
                        this.previousTeam();
                    } else if (e.key === 'ArrowRight') {
                        console.log('➡️ Right arrow pressed');
                        this.nextTeam();
                    }
                }
            };
            
            document.addEventListener('keydown', this.keyboardHandler);
            console.log('✅ Keyboard navigation bound');
            
            this.eventsBound = true;
            console.log('✅ All home events bound successfully');
            
        } catch (error) {
            console.error('❌ Error binding events:', error);
            
            // Retry after delay
            setTimeout(() => {
                this.eventsBound = false;
                this.bindEvents();
            }, 500);
        }
    }

    renderTeams() {
        const slider = document.getElementById('team-slider');
        const indicators = document.getElementById('team-indicators');
        
        if (!slider || !indicators) {
            console.error('❌ Team slider or indicators not found');
            return;
        }
        
        const teams = Object.keys(window.teamsData || {});
        if (teams.length === 0) {
            console.error('❌ No teams data available');
            return;
        }
        
        this.totalTeams = teams.length;
        
        // Render team slides
        slider.innerHTML = teams.map((teamKey, index) => {
            const team = window.teamsData[teamKey];
            return this.createTeamSlide(team, index);
        }).join('');
        
        // Render indicators
        indicators.innerHTML = teams.map((_, index) => 
            `<div class="team-indicator ${index === 0 ? 'active' : ''}" data-team="${index}"></div>`
        ).join('');
        
        // Bind indicator clicks - WITH DELAY TO ENSURE DOM IS READY
        setTimeout(() => {
            const indicatorElements = indicators.querySelectorAll('.team-indicator');
            indicatorElements.forEach((indicator, index) => {
                this.boundMethods[`indicator_${index}`] = () => {
                    console.log(`📍 Indicator ${index + 1} clicked`);
                    this.goToTeam(index);
                };
                
                indicator.addEventListener('click', this.boundMethods[`indicator_${index}`]);
            });
            
            console.log(`✅ ${indicatorElements.length} indicators bound`);
        }, 100);
        
        console.log(`✅ ${teams.length} teams rendered successfully`);
    }

    // Team Carousel Methods - IMPROVED LOGGING
    initTeamCarousel() {
        this.updateCarouselState();
        console.log('🎠 Team carousel initialized');
    }

    nextTeam() {
        console.log('🔄 Next team requested, current:', this.currentTeamIndex, 'total:', this.totalTeams, 'transitioning:', this.isTransitioning);
        
        if (this.isTransitioning) {
            console.log('⚠️ Already transitioning, ignoring');
            return;
        }
        
        if (this.currentTeamIndex < this.totalTeams - 1) {
            this.goToTeam(this.currentTeamIndex + 1);
        } else {
            console.log('⚠️ Already at last team');
        }
    }

    previousTeam() {
        console.log('🔄 Previous team requested, current:', this.currentTeamIndex, 'total:', this.totalTeams, 'transitioning:', this.isTransitioning);
        
        if (this.isTransitioning) {
            console.log('⚠️ Already transitioning, ignoring');
            return;
        }
        
        if (this.currentTeamIndex > 0) {
            this.goToTeam(this.currentTeamIndex - 1);
        } else {
            console.log('⚠️ Already at first team');
        }
    }

    goToTeam(index) {
        console.log('🎯 Going to team:', index, 'from:', this.currentTeamIndex);
        
        if (this.isTransitioning || index === this.currentTeamIndex) {
            console.log('⚠️ Cannot switch teams:', {
                isTransitioning: this.isTransitioning,
                sameIndex: index === this.currentTeamIndex
            });
            return;
        }
        
        this.isTransitioning = true;
        
        // Update slides
        const slides = document.querySelectorAll('.team-slide');
        const indicators = document.querySelectorAll('.team-indicator');
        
        console.log('📱 Found slides:', slides.length, 'indicators:', indicators.length);
        
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        
        this.currentTeamIndex = index;
        this.updateCarouselState();
        
        // Animation complete
        setTimeout(() => {
            this.isTransitioning = false;
            console.log('✅ Team switch completed to:', index + 1);
        }, 600);
        
        console.log(`🔄 Switched to team ${index + 1}`);
    }

    updateCarouselState() {
        const prevBtn = document.getElementById('team-prev');
        const nextBtn = document.getElementById('team-next');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentTeamIndex === 0;
            console.log('⬅️ Prev button disabled:', prevBtn.disabled);
        }
        
        if (nextBtn) {
            nextBtn.disabled = this.currentTeamIndex === this.totalTeams - 1;
            console.log('➡️ Next button disabled:', nextBtn.disabled);
        }
    }

    // REST OF METHODS STAY THE SAME...
    createTeamSlide(team, index) {
        const players = team.players;
        const positionGroups = {
            setters: players.filter(p => p.position === 'Setter'),
            outsideHitters: players.filter(p => p.position === 'Outside Hitter'),
            middleBlockers: players.filter(p => p.position === 'Middle Blocker'),
            oppositeHitters: players.filter(p => p.position === 'Opposite Hitter'),
            liberos: players.filter(p => p.position === 'Libero')
        };
        
        return `
            <div class="team-slide ${index === 0 ? 'active' : ''}" data-team="${index}">
                <div class="team-header-simple">
                    <div class="team-badge-simple" style="background: ${team.color}">
                        <span class="team-rank">#${team.rank}</span>
                    </div>
                    <div class="team-info-simple">
                        <h3 class="team-name-simple" style="color: ${team.color}">${team.name}</h3>
                        <p class="team-description-simple">${team.description}</p>
                        <div class="formation-simple">
                            <span class="formation-badge-simple">${team.formation} Formation</span>
                            <span class="formation-desc-simple">${window.formationInfo[team.formation]}</span>
                        </div>
                    </div>
                </div>

                <div class="team-players-grid">
                    ${players.map(player => this.createSimplePlayerCard(player)).join('')}
                </div>

                <div class="team-stats-simple">
                    <div class="stat-simple"><span class="stat-value">${players.length}</span><span class="stat-label">Players</span></div>
                    <div class="stat-simple"><span class="stat-value">${this.getAverageAge(players)}</span><span class="stat-label">Avg Age</span></div>
                    <div class="stat-simple"><span class="stat-value">${this.getCountries(players)}</span><span class="stat-label">Countries</span></div>
                    <div class="stat-simple"><span class="stat-value">${team.formation}</span><span class="stat-label">Formation</span></div>
                </div>

                <div class="position-breakdown-simple">
                    <h4>Position Breakdown</h4>
                    <div class="breakdown-grid-simple">
                        ${Object.entries(positionGroups).map(([groupName, players]) => 
                            players.length > 0 ? `
                                <div class="breakdown-item-simple">
                                    <div class="breakdown-header-simple">
                                        <span class="breakdown-count-simple">${players.length}</span>
                                        <span class="breakdown-label-simple">${groupName.replace(/([A-Z])/g, ' $1').trim()}</span>
                                    </div>
                                    <div class="breakdown-players-simple">
                                        ${players.map(player => `
                                            <div class="breakdown-player-simple">
                                                <span class="player-number-simple">#${player.number}</span>
                                                <span class="player-name-simple">${player.name.split(' ').slice(-1)[0]}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            ` : ''
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    createSimplePlayerCard(player) {
        const positionColor = window.teamPositionColors[player.position] || '#666';
        const positionAbbr = this.getPositionAbbreviation(player.position);
        const fallbackSVG = this.createPlayerFallbackSVG(player, positionColor, positionAbbr);
        
        return `
            <div class="simple-player-card" data-player="${player.id}">
                ${player.isCaptain ? '<div class="captain-badge-simple">C</div>' : ''}
                ${player.isLibero ? '<div class="libero-badge-simple">L</div>' : ''}
                
                <div class="simple-player-avatar">
                    <img src="${player.avatar}" alt="${player.name}" onerror="this.src='${fallbackSVG}'" class="player-image-simple">
                    
                </div>
                
                <div class="simple-player-info">
                    <h4 class="simple-player-name">${player.name}</h4>
                    <div class="simple-player-position" style="color: ${positionColor}">${player.position}</div>
                    <div class="simple-position-badge" style="background: ${positionColor}">${positionAbbr}</div>
                </div>
            </div>
        `;
    }

    createPlayerFallbackSVG(player, positionColor, positionAbbr) {
        const initials = player.name.split(' ').map(n => n[0]).join('');
        return `data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%2280%22%20height%3D%2280%22%20fill%3D%22${positionColor.replace('#', '%23')}%22/%3E%3Ctext%20x%3D%2240%22%20y%3D%2228%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2211%22%20font-weight%3D%22bold%22%3E${initials}%3C/text%3E%3Ctext%20x%3D%2240%22%20y%3D%2242%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%228%22%3E${positionAbbr}%3C/text%3E%3Ctext%20x%3D%2240%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2212%22%20font-weight%3D%22bold%22%3E%23${player.number}%3C/text%3E%3C/svg%3E`;
    }

    createLeaderFallbackSVG(leader) {
        const initials = leader.name.split(' ').map(n => n[0]).join('');
        return `data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2260%22%20fill%3D%22%23FF6B35%22/%3E%3Ctext%20x%3D%2260%22%20y%3D%2270%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2224%22%20font-weight%3D%22bold%22%3E${initials}%3C/text%3E%3C/svg%3E`;
    }

    getPositionAbbreviation(position) {
        const abbreviations = { 'Setter': 'S', 'Outside Hitter': 'OH', 'Middle Blocker': 'MB', 'Opposite Hitter': 'OP', 'Libero': 'L' };
        return abbreviations[position] || '?';
    }

    renderLeadership() {
        const grid = document.getElementById('leadership-grid');
        if (!grid) return;
        
        const leaders = Object.values(window.leadershipData || {});
        grid.innerHTML = leaders.map(leader => this.createLeaderCard(leader)).join('');
        console.log(`✅ ${leaders.length} leaders rendered`);
    }

    createLeaderCard(leader) {
        const fallbackSVG = this.createLeaderFallbackSVG(leader);
        
        return `
            <div class="leader-card" data-leader="${leader.id}">
                <div class="leader-avatar">
                    <img src="${leader.avatar}" alt="${leader.name}" onerror="this.src='${fallbackSVG}'">
                </div>
                <div class="leader-content">
                    <h3 class="leader-name">${leader.name}</h3>
                    <div class="leader-title">${leader.title}</div>
                    <p class="leader-description">${leader.description}</p>
                    <div class="leader-achievements">
                        ${(leader.achievements || []).map(achievement => 
                            `<div class="achievement-item"><div class="achievement-icon">✓</div><span>${achievement}</span></div>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    // Helper Methods
    getAverageAge(players) {
        const currentYear = new Date().getFullYear();
        const ages = players.map(p => {
            const birthYear = p.born ? parseInt(p.born) : currentYear - 25;
            return currentYear - birthYear;
        });
        return Math.round(ages.reduce((sum, age) => sum + age, 0) / ages.length);
    }

    getCountries(players) {
        const countries = new Set();
        players.forEach(player => {
            const country = player.country || 'Vietnam';
            countries.add(country);
        });
        return countries.size;
    }

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
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
}

// ENHANCED SAFE INITIALIZATION WITH EVENT MANAGEMENT
console.log('📜 Home.js loaded with enhanced event management');

function initHome() {
    if (document.querySelector('.dva-home')) {
        // ALWAYS CREATE FRESH MODULE TO ENSURE EVENTS WORK
        if (window.homeModule) {
            console.log('🧹 Cleaning up existing Home Module...');
            if (typeof window.homeModule.cleanup === 'function') {
                window.homeModule.cleanup();
            }
        }
        
        // Create new module
        console.log('🚀 Creating new Home Module with fresh events...');
        window.homeModule = new HomeModule();
    }
}

// Multiple initialization attempts
setTimeout(initHome, 50);
setTimeout(initHome, 200);
setTimeout(initHome, 500);

// Enhanced navigation listener
document.addEventListener('navigationChange', (e) => {
    if (e.detail?.page === 'home') {
        console.log('📍 Navigation to home detected, force reinit...');
        // Force reinit with delay to ensure DOM is ready
        setTimeout(initHome, 100);
    }
});

// DOM ready listener
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHome);
} else {
    initHome();
}

// Export for global access
if (typeof window !== 'undefined') {
    window.HomeModule = HomeModule;
}
