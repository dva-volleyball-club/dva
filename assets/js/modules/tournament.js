/**
 * DVA Tournament Module - COMPLETE WITH ALL METHODS - FIXED SYNTAX ERROR
 * Path: D:\dva\DVA-Volleyball-Website\assets\js\modules\tournament.js
 */

// PREVENT DUPLICATE CLASS DECLARATIONS
if (typeof window.TournamentModule === 'undefined') {
    
    class TournamentModule {
        constructor() {
            this.currentSection = 'standings';
            this.isInitialized = false;
            
            console.log('🏆 Tournament Module initializing with static data...');
            this.init();
        }

        async init() {
            try {
                // SIMPLIFIED - Check data immediately
                if (!this.checkTournamentData()) {
                    console.error('❌ Tournament data not available');
                    this.showDataMissingError();
                    return;
                }

                await this.waitForElements();
                this.detectInitialSection();
                this.bindEvents();
                this.renderContent();

                this.isInitialized = true;
                console.log('✅ Tournament Module initialized successfully');

            } catch (error) {
                console.error('❌ Tournament Module initialization failed:', error);
                this.showError('Failed to initialize tournament module');
            }
        }

        // SIMPLIFIED DATA CHECK - NO WAITING
        checkTournamentData() {
            const hasData = window.tournamentData && 
                           window.tournamentData.teams && 
                           window.tournamentData.matches && 
                           window.tournamentData.awards;
            
            if (hasData) {
                console.log('✅ Tournament data found:', {
                    teams: Object.keys(window.tournamentData.teams).length,
                    matches: Object.keys(window.tournamentData.matches).length,
                    awards: Object.keys(window.tournamentData.awards.individual).length
                });
            }
            
            return hasData;
        }

        async waitForElements() {
            return new Promise((resolve, reject) => {
                let attempts = 0;
                const maxAttempts = 20;

                const checkElements = () => {
                    attempts++;
                    const tournamentContent = document.getElementById('tournament-content');

                    if (tournamentContent) {
                        console.log('✅ Tournament elements found');
                        resolve();
                    } else if (attempts >= maxAttempts) {
                        console.error('❌ Tournament elements not found');
                        reject(new Error('Tournament elements not found'));
                    } else {
                        setTimeout(checkElements, 100);
                    }
                };

                checkElements();
            });
        }

        detectInitialSection() {
            const path = window.location.hash.replace('#/', '');
            const parts = path.split('/');
            
            if (parts[0] === 'tournament' && parts[1]) {
                this.currentSection = parts[1];
                console.log('🎯 Initial section: ' + this.currentSection);
            }

            this.updateTabStates();
        }

        bindEvents() {
            console.log('🔗 Binding tournament events...');

            document.querySelectorAll('.tournament-tab').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const section = tab.getAttribute('data-section');
                    if (section && section !== this.currentSection) {
                        console.log('🔄 Switching to ' + section + ' section');
                        
                        // Update URL
                        const newUrl = '#/tournament/' + section;
                        history.replaceState(null, null, newUrl);
                        
                        // Switch section
                        this.switchSection(section);
                    }
                });
            });

            console.log('✅ Tournament events bound');
        }

        switchSection(section) {
            if (section === this.currentSection) return;

            console.log('🔄 Switching to ' + section + ' section');

            this.currentSection = section;
            this.updateTabStates();
            this.renderContent();
        }

        updateTabStates() {
            document.querySelectorAll('.tournament-tab').forEach(tab => {
                const section = tab.getAttribute('data-section');
                const isActive = section === this.currentSection;
                
                if (isActive) {
                    tab.style.background = 'rgba(255, 107, 53, 0.15)';
                    tab.style.borderColor = 'rgba(255, 107, 53, 0.3)';
                    tab.style.color = 'white';
                } else {
                    tab.style.background = 'rgba(255, 255, 255, 0.05)';
                    tab.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    tab.style.color = '#8B949E';
                }
                
                tab.classList.toggle('active', isActive);
            });
        }

        renderContent() {
            console.log('🎨 Rendering ' + this.currentSection + ' content');

            const content = document.getElementById('tournament-content');
            if (!content) {
                console.error('❌ Tournament content container not found');
                return;
            }

            // Show loading briefly
            content.innerHTML = this.createLoadingHTML();

            setTimeout(() => {
                try {
                    // RENDERING LOGIC
                    switch (this.currentSection) {
                        case 'standings':
                            this.renderStandings(content);
                            break;
                        case 'results':
                            this.renderResults(content);
                            break;
                        case 'awards':
                            this.renderAwards(content);
                            break;
                        default:
                            this.renderStandings(content);
                    }
                } catch (error) {
                    console.error('❌ Error rendering content:', error);
                    this.showError('Failed to render ' + this.currentSection + ' content: ' + error.message);
                }
            }, 300);
        }

        renderStandings(content) {
            if (!window.tournamentData || !window.tournamentData.teams) {
                this.showError('Tournament standings data not available');
                return;
            }

            const teams = window.tournamentData.teams;
            const sortedTeams = Object.values(teams).sort((a, b) => a.placement - b.placement);

            const standingsHTML = [
                '<div class="standings-container">',
                '    <div class="section-header">',
                '        <h2 class="section-title">Tournament Standings</h2>',
                '        <p class="section-subtitle">Final team rankings and performance statistics</p>',
                '    </div>',
                '',
                '    <div class="standings-grid">'
            ];

            // Add team cards
            sortedTeams.forEach(team => {
                standingsHTML.push(this.createStandingCard(team));
            });

            standingsHTML.push(
                '    </div>',
                '',
                '    <div class="standings-legend">',
                '        <div class="legend-item">',
                '            <span class="legend-color" style="background: rgba(255, 215, 0, 0.7);"></span>',
                '            <span>Champion</span>',
                '        </div>',
                '        <div class="legend-item">',
                '            <span class="legend-color" style="background: rgba(192, 192, 192, 0.7);"></span>',
                '            <span>Runner-up</span>',
                '        </div>',
                '        <div class="legend-item">',
                '            <span class="legend-color" style="background: rgba(205, 127, 50, 0.7);"></span>',
                '            <span>Third Place</span>',
                '        </div>',
                '    </div>',
                '</div>'
            );

            content.innerHTML = standingsHTML.join('\n');
            console.log('✅ Standings rendered successfully');
        }

        renderResults(content) {
            if (!window.tournamentData || !window.tournamentData.matches) {
                this.showError('Tournament results data not available');
                return;
            }

            const matches = window.tournamentData.matches;
            const matchesByStage = this.groupMatchesByStage(matches);

            const resultsHTML = [
                '<div class="results-container">',
                '    <div class="section-header">',
                '        <h2 class="section-title">Tournament Results</h2>',
                '        <p class="section-subtitle">Complete match results from all tournament stages</p>',
                '    </div>'
            ];

            // Add stages
            Object.entries(matchesByStage).forEach(([stage, stageMatches]) => {
                resultsHTML.push(
                    '    <div class="stage-section">',
                    '        <div class="stage-header">',
                    '            <h3 class="stage-title">' + this.formatStageName(stage) + '</h3>',
                    '            <span class="stage-count">' + stageMatches.length + ' matches</span>',
                    '        </div>',
                    '        <div class="matches-grid">'
                );

                stageMatches.forEach(match => {
                    resultsHTML.push(this.createMatchCard(match));
                });

                resultsHTML.push(
                    '        </div>',
                    '    </div>'
                );
            });

            resultsHTML.push('</div>');
            content.innerHTML = resultsHTML.join('\n');
            console.log('✅ Results rendered successfully');
        }

        renderAwards(content) {
            if (!window.tournamentData || !window.tournamentData.awards) {
                this.showError('Tournament awards data not available');
                return;
            }

            const awards = window.tournamentData.awards;

            const awardsHTML = [
                '<div class="awards-container">',
                '    <div class="section-header">',
                '        <h2 class="section-title">Tournament Awards</h2>',
                '        <p class="section-subtitle">Celebrating the champions and outstanding individual performances</p>',
                '    </div>',
                '',
                '    <!-- TEAM AWARDS - PODIUM STYLE -->',
                '    <div class="awards-section">',
                '        <div class="awards-section-header">',
                '            <h3 class="awards-section-title">🏆 Championship Podium</h3>',
                '        </div>',
                '        <div class="team-awards-grid">'
            ];

            // Add podium cards
            awardsHTML.push(
                this.createPodiumTeamCard(awards.team.champion, 'Champion', '🏆', '#FFD700', 1),
                this.createPodiumTeamCard(awards.team.runnerUp, 'Runner-up', '🥈', '#C0C0C0', 2),
                this.createPodiumTeamCard(awards.team.thirdPlace, 'Third Place', '🥉', '#CD7F32', 3)
            );

            awardsHTML.push(
                '        </div>',
                '    </div>',
                '',
                '    <!-- INDIVIDUAL AWARDS -->',
                '    <div class="awards-section">',
                '        <div class="awards-section-header">',
                '            <h3 class="awards-section-title">⭐ Individual Excellence Awards</h3>',
                '            <p style="color: rgba(255,255,255,0.7); margin-top: 8px;">Recognizing outstanding individual performances</p>',
                '        </div>',
                '        <div class="individual-awards-grid">'
            );

            // Add individual awards
            Object.entries(awards.individual).forEach(([awardName, awardData]) => {
                awardsHTML.push(this.createIndividualCard(awardName, awardData));
            });

            awardsHTML.push(
                '        </div>',
                '    </div>',
                '</div>'
            );

            content.innerHTML = awardsHTML.join('\n');
            console.log('✅ Awards rendered successfully');
        }

        // ===== CARD CREATION METHODS ===== //

        createStandingCard(team) {
            const placementClass = team.placement === 1 ? 'champion' : 
                                 team.placement === 2 ? 'runnerup' : 
                                 team.placement === 3 ? 'third' : '';
            
            const fallbackSVG = this.createTeamFallbackSVG(team);

            return [
                '<div class="standing-card ' + placementClass + '">',
                '    <div class="standing-position">',
                '        <div class="position-number" style="color: ' + team.color + '">' + team.placement + '</div>',
                '        <div class="position-label">Position</div>',
                '    </div>',
                '    ',
                '    <div class="team-info">',
                '        <div class="team-logo">',
                '            <img src="' + team.logo + '" alt="' + team.name + '" ',
                '                 onerror="this.src=\'' + fallbackSVG + '\'">',
                '        </div>',
                '        <div class="team-details">',
                '            <h3 class="team-name" style="color: ' + team.color + '">' + team.name + '</h3>',
                '            <div class="team-meta">',
                '                <span>Captain: ' + team.captain + '</span>',
                '                <span>Coach: ' + team.coach + '</span>',
                '            </div>',
                '        </div>',
                '    </div>',
                '    ',
                '    <div class="team-stats">',
                '        <div class="stat-item">',
                '            <span class="stat-value">' + team.wins + '</span>',
                '            <span class="stat-label">Wins</span>',
                '        </div>',
                '        <div class="stat-item">',
                '            <span class="stat-value">' + team.losses + '</span>',
                '            <span class="stat-label">Losses</span>',
                '        </div>',
                '        <div class="stat-item">',
                '            <span class="stat-value">' + team.winRate + '%</span>',
                '            <span class="stat-label">Win Rate</span>',
                '        </div>',
                '    </div>',
                '</div>'
            ].join('\n');
        }

        createPodiumTeamCard(award, title, icon, color, rank) {
            const teams = window.tournamentData.teams;
            const team = teams[award.team];
            const fallbackSVG = this.createTeamFallbackSVG(team);

            return [
                '<div class="team-award-card" style="--award-color: ' + color + '" data-rank="' + rank + '">',
                '    <div class="award-position">',
                '        <div class="award-icon" style="color: ' + color + '">' + icon + '</div>',
                '        <div class="award-title">' + title + '</div>',
                '        <div class="award-achievement">' + award.achievement + '</div>',
                '    </div>',
                '    ',
                '    <div class="award-team">',
                '        <img src="' + team.logo + '" alt="' + team.name + '" ',
                '             onerror="this.src=\'' + fallbackSVG + '\'"',
                '             class="award-team-logo">',
                '        <h3 class="award-team-name" style="color: ' + team.color + '">' + team.name + '</h3>',
                '    </div>',
                '    ',
                '    <div class="award-prize">' + award.prize + '</div>',
                '</div>'
            ].join('\n');
        }

        createIndividualCard(awardName, awardData) {
            const teams = window.tournamentData.teams;
            const team = teams[awardData.team];
            
            if (!team) {
                console.warn('Team not found for award:', awardName, awardData.team);
                return '';
            }

            const fallbackSVG = this.createPlayerFallbackSVG(awardData);
            const isSpecial = awardData.special || false;
            const specialAttr = isSpecial ? ' data-special="true"' : '';
            const rankHTML = awardData.rank ? '<div class="award-rank">#' + awardData.rank + '</div>' : '';

            return [
                '<div class="individual-award-card"' + specialAttr + '>',
                '    <div class="award-header">',
                '        <div class="award-header-left">',
                '            <div class="award-icon-individual">' + awardData.icon + '</div>',
                '            <div class="award-name">' + awardName + '</div>',
                '        </div>',
                '        ' + rankHTML,
                '    </div>',
                '',
                '    <div class="award-player">',
                '        <div class="player-avatar">',
                '            <img src="' + awardData.avatar + '" alt="' + awardData.player + '"',
                '                 onerror="this.src=\'' + fallbackSVG + '\'"',
                '                 class="award-player-img">',
                '        </div>',
                '        <div class="player-info">',
                '            <h3 class="player-name">' + awardData.player + '</h3>',
                '            <div class="player-team" style="color: ' + team.color + '">' + team.name + '</div>',
                '            <div class="player-stats">' + awardData.stats + '</div>',
                '        </div>',
                '    </div>',
                '',
                '    <div class="award-prize-individual">' + awardData.prize + '</div>',
                '</div>'
            ].join('\n');
        }

        // FIXED: CREATE MATCH CARD METHOD
        createMatchCard(match) {
            const teams = window.tournamentData.teams;
            const team1 = teams[match.team1];
            const team2 = teams[match.team2];
            
            if (!team1 || !team2) {
                console.warn('Missing team data for match:', match.id);
                return [
                    '<div class="match-card error">',
                    '    <div class="match-error">',
                    '        <p>⚠️ Match data incomplete</p>',
                    '        <small>Match ID: ' + match.id + '</small>',
                    '    </div>',
                    '</div>'
                ].join('\n');
            }
            
            const isCompleted = match.status === 'completed';
            const team1Logo = this.createTeamFallbackSVG(team1);
            const team2Logo = this.createTeamFallbackSVG(team2);
            const team1Winner = match.score1 > match.score2 ? ' winner' : '';
            const team2Winner = match.score2 > match.score1 ? ' winner' : '';

            const matchHTML = [
                '<div class="match-card" data-match="' + match.id + '">',
                '    <div class="match-header">',
                '        <div class="match-stage">' + this.formatStageName(match.stage) + '</div>',
                '        <div class="match-date">' + this.formatDate(match.date) + ' • ' + match.time + '</div>',
                '    </div>',
                '',
                '    <div class="match-teams">',
                '        <div class="match-team' + team1Winner + '">',
                '            <img src="' + team1.logo + '" alt="' + team1.name + '" ',
                '                 onerror="this.src=\'' + team1Logo + '\'"',
                '                 class="team-logo-small">',
                '            <span class="team-name-short">' + team1.shortName + '</span>',
                '            <span class="team-score">' + (isCompleted ? match.score1 : '-') + '</span>',
                '        </div>',
                '        ',
                '        <div class="match-vs">VS</div>',
                '        ',
                '        <div class="match-team' + team2Winner + '">',
                '            <span class="team-score">' + (isCompleted ? match.score2 : '-') + '</span>',
                '            <span class="team-name-short">' + team2.shortName + '</span>',
                '            <img src="' + team2.logo + '" alt="' + team2.name + '" ',
                '                 onerror="this.src=\'' + team2Logo + '\'"',
                '                 class="team-logo-small">',
                '        </div>',
                '    </div>'
            ];

            if (isCompleted) {
                const setsScore = match.sets ? match.sets.map(set => set.team1 + '-' + set.team2).join(', ') : 'N/A';
                const mvpHTML = match.mvp ? '<div class="match-mvp">MVP: ' + match.mvp + '</div>' : '';
                
                matchHTML.push(
                    '',
                    '    <div class="match-details">',
                    '        <div class="sets-score">',
                    '            Sets: ' + setsScore,
                    '        </div>',
                    '        ' + mvpHTML,
                    '    </div>'
                );
            } else {
                matchHTML.push(
                    '',
                    '    <div class="match-status">',
                    '        <span class="status-badge ' + match.status + '">' + match.status + '</span>',
                    '    </div>'
                );
            }

            matchHTML.push('</div>');
            return matchHTML.join('\n');
        }

        // ===== UTILITY METHODS ===== //

        groupMatchesByStage(matches) {
            const stages = {};
            Object.values(matches).forEach(match => {
                if (!stages[match.stage]) {
                    stages[match.stage] = [];
                }
                stages[match.stage].push(match);
            });
            
            const stageOrder = ['group', 'quarterfinal', 'semifinal', 'third-place', 'final'];
            const sortedStages = {};
            stageOrder.forEach(stage => {
                if (stages[stage]) {
                    sortedStages[stage] = stages[stage].sort((a, b) => {
                        return a.id.localeCompare(b.id, undefined, { numeric: true });
                    });
                }
            });
            
            return sortedStages;
        }

        formatStageName(stage) {
            const names = {
                'group': 'Group Stage',
                'quarterfinal': 'Quarterfinals',
                'semifinal': 'Semifinals',
                'third-place': 'Third Place Match',
                'final': 'Final'
            };
            return names[stage] || stage.charAt(0).toUpperCase() + stage.slice(1);
        }

        formatDate(dateString) {
            try {
                const date = new Date(dateString);
                return date.toLocaleDateString('vi-VN', { 
                    day: '2-digit', 
                    month: '2-digit', 
                    year: 'numeric' 
                });
            } catch (error) {
                return dateString;
            }
        }

        createTeamFallbackSVG(team) {
            const initials = team.shortName || team.name.split(' ').map(n => n[0]).join('').substr(0, 3);
            const svgContent = [
                '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">',
                '    <circle cx="40" cy="40" r="35" fill="' + team.color + '" opacity="0.8"/>',
                '    <text x="40" y="48" text-anchor="middle" fill="white" font-size="16" font-weight="bold">',
                '        ' + initials,
                '    </text>',
                '</svg>'
            ].join('');
            
            return 'data:image/svg+xml,' + encodeURIComponent(svgContent);
        }

        createPlayerFallbackSVG(player) {
            const initials = player.player.split(' ').map(n => n[0]).join('').substr(0, 2);
            const svgContent = [
                '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">',
                '    <circle cx="40" cy="40" r="35" fill="#FF6B35" opacity="0.8"/>',
                '    <text x="40" y="48" text-anchor="middle" fill="white" font-size="20" font-weight="bold">',
                '        ' + initials,
                '    </text>',
                '</svg>'
            ].join('');
            
            return 'data:image/svg+xml,' + encodeURIComponent(svgContent);
        }

        createLoadingHTML() {
            return [
                '<div class="tournament-loading" style="display: flex; flex-direction: column; align-items: center; gap: 20px; padding: 60px; color: rgba(255, 255, 255, 0.7);">',
                '    <div style="width: 40px; height: 40px; border: 3px solid rgba(255, 107, 53, 0.2); border-left: 3px solid #FF6B35; border-radius: 50%; animation: spin 1s linear infinite;"></div>',
                '    <p>Loading tournament data...</p>',
                '    <style>',
                '        @keyframes spin {',
                '            0% { transform: rotate(0deg); }',
                '            100% { transform: rotate(360deg); }',
                '        }',
                '    </style>',
                '</div>'
            ].join('\n');
        }

        showDataMissingError() {
            const content = document.getElementById('tournament-content');
            if (content) {
                content.innerHTML = [
                    '<div class="error-message" style="text-align: center; padding: 60px 20px; color: rgba(255,255,255,0.7);">',
                    '    <h3 style="color: #FF6B35; margin-bottom: 16px;">⚠️ Tournament Data Not Available</h3>',
                    '    <p style="margin-bottom: 16px;">The tournament data file could not be loaded.</p>',
                    '    <p style="margin-bottom: 24px; font-size: 14px;">Check that <code>assets/js/data/tournament.js</code> exists and is properly formatted.</p>',
                    '    <button onclick="location.reload()" ',
                    '            style="padding: 12px 24px; background: #FF6B35; border: none; border-radius: 8px; color: white; cursor: pointer; font-size: 14px; font-weight: 600;">',
                    '        Reload Page',
                    '    </button>',
                    '</div>'
                ].join('\n');
            }
        }

        showError(message) {
            const content = document.getElementById('tournament-content');
            if (content) {
                content.innerHTML = [
                    '<div class="error-message" style="text-align: center; padding: 60px 20px; color: rgba(255,255,255,0.7);">',
                    '    <h3 style="color: #FF6B35; margin-bottom: 16px;">⚠️ ' + message + '</h3>',
                    '    <p style="margin-bottom: 24px;">Please try refreshing the page or check the console for more details.</p>',
                    '    <button onclick="location.reload()" ',
                    '            style="padding: 12px 24px; background: #FF6B35; border: none; border-radius: 8px; color: white; cursor: pointer; font-size: 14px; font-weight: 600;">',
                    '        Refresh Page',
                    '    </button>',
                    '</div>'
                ].join('\n');
            }
        }
    }

    // EXPOSE CLASS GLOBALLY
    window.TournamentModule = TournamentModule;
    console.log('✅ TournamentModule class defined successfully with all methods');

} else {
    console.log('⚠️ TournamentModule already exists, skipping redefinition');
}

// SIMPLE INITIALIZATION
document.addEventListener('navigationChange', (e) => {
    const currentPage = e.detail ? e.detail.page : null;
    console.log('📍 Navigation change detected:', currentPage);

    if (currentPage === 'tournament') {
        setTimeout(() => {
            if (!window.tournamentModuleInstance && window.TournamentModule) {
                console.log('🚀 Creating tournament module instance');
                window.tournamentModuleInstance = new window.TournamentModule();
            }
        }, 500);
    }
});

// Direct initialization if already on tournament page
if (window.location.hash.includes('#/tournament')) {
    setTimeout(() => {
        if (window.TournamentModule && !window.tournamentModuleInstance) {
            console.log('🔄 Direct tournament initialization');
            window.tournamentModuleInstance = new window.TournamentModule();
        }
    }, 1500);
}
