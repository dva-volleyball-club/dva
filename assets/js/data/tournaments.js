/**
 * DVA Volleyball Tournament Data - COMPLETE FIXED VERSION
 * Path: D:\dva\DVA-Volleyball-Website\assets\js\data\tournament.js
 */

console.log('🏆 Loading tournament data...');

// PREVENT DUPLICATE DATA LOADING
if (typeof window.tournamentData === 'undefined') {
    window.tournamentData = {
        // Tournament Info
        tournament: {
            id: 'dva-championship-2025',
            name: 'DVA Championship 2025',
            subtitle: 'November Volleyball Tournament',
            startDate: '2025-11-15',
            endDate: '2025-11-17',
            location: 'DVA Sports Complex',
            status: 'completed',
            totalTeams: 8,
            totalMatches: 20, // 12 group + 4 QF + 2 SF + 1 3rd + 1 Final
            description: 'Annual championship tournament featuring top volleyball teams'
        },

        // 8 Teams Data with Corrected Stats
        teams: {
            'team-1': {
                id: 'team-1',
                name: 'Thunder Eagles',
                shortName: 'TEA',
                logo: 'assets/images/teams/thunder-eagles.png',
                color: '#FF6B35',
                captain: 'Nguyễn Quang Hưng',
                coach: 'Trần Minh Hoàng',
                wins: 6,
                losses: 2,
                setsWon: 18,
                setsLost: 9,
                pointsFor: 425,
                pointsAgainst: 340,
                winRate: 75.0,
                placement: 1 // CHAMPION
            },
            'team-2': {
                id: 'team-2',
                name: 'Lightning Wolves',
                shortName: 'LWO',
                logo: 'assets/images/teams/lightning-wolves.png',
                color: '#0066FF',
                captain: 'Lê Minh Đức',
                coach: 'Phạm Văn Tùng',
                wins: 5,
                losses: 3,
                setsWon: 16,
                setsLost: 13,
                pointsFor: 380,
                pointsAgainst: 360,
                winRate: 62.5,
                placement: 3 // THIRD PLACE
            },
            'team-3': {
                id: 'team-3',
                name: 'Storm Dragons',
                shortName: 'SDR',
                logo: 'assets/images/teams/storm-dragons.png',
                color: '#10B981',
                captain: 'Woohyeok Jang',
                coach: 'Nguyễn Thành Long',
                wins: 5,
                losses: 3,
                setsWon: 17,
                setsLost: 12,
                pointsFor: 395,
                pointsAgainst: 345,
                winRate: 62.5,
                placement: 2 // RUNNER-UP
            },
            'team-4': {
                id: 'team-4',
                name: 'Fire Phoenix',
                shortName: 'FPH',
                logo: 'assets/images/teams/fire-phoenix.png',
                color: '#F59E0B',
                captain: 'Neo Jackson',
                coach: 'Hoàng Văn Đức',
                wins: 4,
                losses: 4,
                setsWon: 14,
                setsLost: 15,
                pointsFor: 350,
                pointsAgainst: 365,
                winRate: 50.0,
                placement: 4
            },
            'team-5': {
                id: 'team-5',
                name: 'Ice Tigers',
                shortName: 'ITI',
                logo: 'assets/images/teams/ice-tigers.png',
                color: '#8B5CF6',
                captain: 'Artiukh Lyubov',
                coach: 'Trần Văn Minh',
                wins: 3,
                losses: 5,
                setsWon: 12,
                setsLost: 16,
                pointsFor: 330,
                pointsAgainst: 370,
                winRate: 37.5,
                placement: 5
            },
            'team-6': {
                id: 'team-6',
                name: 'Wind Hawks',
                shortName: 'WHA',
                logo: 'assets/images/teams/wind-hawks.png',
                color: '#EF4444',
                captain: 'Yelzhas Dualatuly',
                coach: 'Lê Thanh Sơn',
                wins: 3,
                losses: 5,
                setsWon: 11,
                setsLost: 17,
                pointsFor: 315,
                pointsAgainst: 385,
                winRate: 37.5,
                placement: 6
            },
            'team-7': {
                id: 'team-7',
                name: 'Earth Bears',
                shortName: 'EBE',
                logo: 'assets/images/teams/earth-bears.png',
                color: '#84CC16',
                captain: 'Phạm Thị Thanh Bình',
                coach: 'Nguyễn Văn An',
                wins: 2,
                losses: 6,
                setsWon: 9,
                setsLost: 18,
                pointsFor: 295,
                pointsAgainst: 405,
                winRate: 25.0,
                placement: 7
            },
            'team-8': {
                id: 'team-8',
                name: 'Shadow Cats',
                shortName: 'SCA',
                logo: 'assets/images/teams/shadow-cats.png',
                color: '#6B7280',
                captain: 'Hoàng Quốc Duy',
                coach: 'Vũ Thanh Long',
                wins: 1,
                losses: 7,
                setsWon: 7,
                setsLost: 21,
                pointsFor: 270,
                pointsAgainst: 435,
                winRate: 12.5,
                placement: 8
            }
        },

        // COMPLETE 20 MATCHES (12 Group + 4 QF + 2 SF + 1 3rd + 1 Final)
        matches: {
            // GROUP STAGE - 12 MATCHES
            'match-1': {
                id: 'match-1',
                stage: 'group',
                round: 1,
                date: '2025-11-15',
                time: '08:00',
                team1: 'team-1',
                team2: 'team-5',
                score1: 3,
                score2: 1,
                sets: [
                    { team1: 25, team2: 21 },
                    { team1: 23, team2: 25 },
                    { team1: 25, team2: 18 },
                    { team1: 25, team2: 22 }
                ],
                status: 'completed',
                mvp: 'Nguyễn Quang Hưng'
            },
            'match-2': {
                id: 'match-2',
                stage: 'group',
                round: 1,
                date: '2025-11-15',
                time: '09:30',
                team1: 'team-2',
                team2: 'team-6',
                score1: 3,
                score2: 0,
                sets: [
                    { team1: 25, team2: 18 },
                    { team1: 25, team2: 20 },
                    { team1: 25, team2: 16 }
                ],
                status: 'completed',
                mvp: 'Lê Minh Đức'
            },
            'match-3': {
                id: 'match-3',
                stage: 'group',
                round: 1,
                date: '2025-11-15',
                time: '11:00',
                team1: 'team-3',
                team2: 'team-7',
                score1: 3,
                score2: 2,
                sets: [
                    { team1: 25, team2: 23 },
                    { team1: 22, team2: 25 },
                    { team1: 20, team2: 25 },
                    { team1: 25, team2: 18 },
                    { team1: 15, team2: 12 }
                ],
                status: 'completed',
                mvp: 'Woohyeok Jang'
            },
            'match-4': {
                id: 'match-4',
                stage: 'group',
                round: 1,
                date: '2025-11-15',
                time: '12:30',
                team1: 'team-4',
                team2: 'team-8',
                score1: 3,
                score2: 0,
                sets: [
                    { team1: 25, team2: 17 },
                    { team1: 25, team2: 19 },
                    { team1: 25, team2: 21 }
                ],
                status: 'completed',
                mvp: 'Neo Jackson'
            },
            'match-5': {
                id: 'match-5',
                stage: 'group',
                round: 2,
                date: '2025-11-15',
                time: '14:00',
                team1: 'team-1',
                team2: 'team-6',
                score1: 3,
                score2: 1,
                sets: [
                    { team1: 25, team2: 20 },
                    { team1: 22, team2: 25 },
                    { team1: 25, team2: 19 },
                    { team1: 25, team2: 23 }
                ],
                status: 'completed',
                mvp: 'Nguyễn Quang Hưng'
            },
            'match-6': {
                id: 'match-6',
                stage: 'group',
                round: 2,
                date: '2025-11-15',
                time: '15:30',
                team1: 'team-2',
                team2: 'team-7',
                score1: 3,
                score2: 2,
                sets: [
                    { team1: 23, team2: 25 },
                    { team1: 25, team2: 21 },
                    { team1: 25, team2: 23 },
                    { team1: 20, team2: 25 },
                    { team1: 15, team2: 10 }
                ],
                status: 'completed',
                mvp: 'Lê Minh Đức'
            },
            'match-7': {
                id: 'match-7',
                stage: 'group',
                round: 2,
                date: '2025-11-15',
                time: '17:00',
                team1: 'team-3',
                team2: 'team-8',
                score1: 3,
                score2: 1,
                sets: [
                    { team1: 25, team2: 18 },
                    { team1: 23, team2: 25 },
                    { team1: 25, team2: 21 },
                    { team1: 25, team2: 19 }
                ],
                status: 'completed',
                mvp: 'Woohyeok Jang'
            },
            'match-8': {
                id: 'match-8',
                stage: 'group',
                round: 2,
                date: '2025-11-15',
                time: '18:30',
                team1: 'team-4',
                team2: 'team-5',
                score1: 2,
                score2: 3,
                sets: [
                    { team1: 25, team2: 23 },
                    { team1: 22, team2: 25 },
                    { team1: 25, team2: 20 },
                    { team1: 23, team2: 25 },
                    { team1: 12, team2: 15 }
                ],
                status: 'completed',
                mvp: 'Artiukh Lyubov'
            },
            'match-9': {
                id: 'match-9',
                stage: 'group',
                round: 3,
                date: '2025-11-15',
                time: '20:00',
                team1: 'team-1',
                team2: 'team-2',
                score1: 3,
                score2: 2,
                sets: [
                    { team1: 25, team2: 23 },
                    { team1: 22, team2: 25 },
                    { team1: 20, team2: 25 },
                    { team1: 25, team2: 21 },
                    { team1: 15, team2: 11 }
                ],
                status: 'completed',
                mvp: 'Nguyễn Quang Hưng'
            },
            'match-10': {
                id: 'match-10',
                stage: 'group',
                round: 3,
                date: '2025-11-16',
                time: '08:00',
                team1: 'team-3',
                team2: 'team-4',
                score1: 3,
                score2: 1,
                sets: [
                    { team1: 25, team2: 21 },
                    { team1: 23, team2: 25 },
                    { team1: 25, team2: 19 },
                    { team1: 25, team2: 22 }
                ],
                status: 'completed',
                mvp: 'Woohyeok Jang'
            },
            'match-11': {
                id: 'match-11',
                stage: 'group',
                round: 3,
                date: '2025-11-16',
                time: '09:30',
                team1: 'team-5',
                team2: 'team-7',
                score1: 3,
                score2: 1,
                sets: [
                    { team1: 25, team2: 22 },
                    { team1: 23, team2: 25 },
                    { team1: 25, team2: 19 },
                    { team1: 25, team2: 21 }
                ],
                status: 'completed',
                mvp: 'Artiukh Lyubov'
            },
            'match-12': {
                id: 'match-12',
                stage: 'group',
                round: 3,
                date: '2025-11-16',
                time: '11:00',
                team1: 'team-6',
                team2: 'team-8',
                score1: 3,
                score2: 2,
                sets: [
                    { team1: 25, team2: 27 },
                    { team1: 25, team2: 20 },
                    { team1: 23, team2: 25 },
                    { team1: 25, team2: 18 },
                    { team1: 15, team2: 13 }
                ],
                status: 'completed',
                mvp: 'Yelzhas Dualatuly'
            },
            
            // QUARTERFINALS - 4 MATCHES
            'match-13': {
                id: 'match-13',
                stage: 'quarterfinal',
                round: 1,
                date: '2025-11-16',
                time: '13:00',
                team1: 'team-1',
                team2: 'team-8',
                score1: 3,
                score2: 0,
                sets: [
                    { team1: 25, team2: 16 },
                    { team1: 25, team2: 18 },
                    { team1: 25, team2: 20 }
                ],
                status: 'completed',
                mvp: 'Nguyễn Quang Hưng'
            },
            'match-14': {
                id: 'match-14',
                stage: 'quarterfinal',
                round: 1,
                date: '2025-11-16',
                time: '14:30',
                team1: 'team-2',
                team2: 'team-7',
                score1: 3,
                score2: 1,
                sets: [
                    { team1: 25, team2: 22 },
                    { team1: 23, team2: 25 },
                    { team1: 25, team2: 19 },
                    { team1: 25, team2: 21 }
                ],
                status: 'completed',
                mvp: 'Lê Minh Đức'
            },
            'match-15': {
                id: 'match-15',
                stage: 'quarterfinal',
                round: 1,
                date: '2025-11-16',
                time: '16:00',
                team1: 'team-3',
                team2: 'team-6',
                score1: 3,
                score2: 2,
                sets: [
                    { team1: 25, team2: 27 },
                    { team1: 25, team2: 20 },
                    { team1: 23, team2: 25 },
                    { team1: 25, team2: 18 },
                    { team1: 15, team2: 13 }
                ],
                status: 'completed',
                mvp: 'Woohyeok Jang'
            },
            'match-16': {
                id: 'match-16',
                stage: 'quarterfinal',
                round: 1,
                date: '2025-11-16',
                time: '17:30',
                team1: 'team-4',
                team2: 'team-5',
                score1: 1,
                score2: 3,
                sets: [
                    { team1: 25, team2: 23 },
                    { team1: 20, team2: 25 },
                    { team1: 22, team2: 25 },
                    { team1: 18, team2: 25 }
                ],
                status: 'completed',
                mvp: 'Artiukh Lyubov'
            },
            
            // SEMIFINALS - 2 MATCHES
            'match-17': {
                id: 'match-17',
                stage: 'semifinal',
                round: 1,
                date: '2025-11-17',
                time: '10:00',
                team1: 'team-1',
                team2: 'team-2',
                score1: 3,
                score2: 2,
                sets: [
                    { team1: 25, team2: 23 },
                    { team1: 22, team2: 25 },
                    { team1: 20, team2: 25 },
                    { team1: 25, team2: 21 },
                    { team1: 15, team2: 11 }
                ],
                status: 'completed',
                mvp: 'Nguyễn Quang Hưng'
            },
            'match-18': {
                id: 'match-18',
                stage: 'semifinal',
                round: 1,
                date: '2025-11-17',
                time: '11:30',
                team1: 'team-3',
                team2: 'team-5',
                score1: 3,
                score2: 1,
                sets: [
                    { team1: 25, team2: 21 },
                    { team1: 23, team2: 25 },
                    { team1: 25, team2: 19 },
                    { team1: 25, team2: 22 }
                ],
                status: 'completed',
                mvp: 'Woohyeok Jang'
            },
            
            // THIRD PLACE MATCH - 1 MATCH
            'match-19': {
                id: 'match-19',
                stage: 'third-place',
                round: 1,
                date: '2025-11-17',
                time: '14:00',
                team1: 'team-2',
                team2: 'team-5',
                score1: 3,
                score2: 1,
                sets: [
                    { team1: 25, team2: 20 },
                    { team1: 22, team2: 25 },
                    { team1: 25, team2: 18 },
                    { team1: 25, team2: 23 }
                ],
                status: 'completed',
                mvp: 'Lê Minh Đức'
            },
            
            // FINAL - 1 MATCH
            'match-20': {
                id: 'match-20',
                stage: 'final',
                round: 1,
                date: '2025-11-17',
                time: '16:00',
                team1: 'team-1',
                team2: 'team-3',
                score1: 3,
                score2: 1,
                sets: [
                    { team1: 25, team2: 22 },
                    { team1: 23, team2: 25 },
                    { team1: 25, team2: 19 },
                    { team1: 25, team2: 21 }
                ],
                status: 'completed',
                mvp: 'Nguyễn Quang Hưng'
            }
        },

        // ENHANCED AWARDS - Team & Individual with Aligned Prizes
        awards: {
            // TEAM AWARDS - Podium Style
            team: {
                champion: {
                    team: 'team-1', // Thunder Eagles
                    prize: '$10,000',
                    trophy: '🏆',
                    rank: 1,
                    achievement: 'Tournament Champions'
                },
                runnerUp: {
                    team: 'team-3', // Storm Dragons  
                    prize: '$6,000',
                    trophy: '🥈',
                    rank: 2,
                    achievement: 'Tournament Runners-up'
                },
                thirdPlace: {
                    team: 'team-2', // Lightning Wolves
                    prize: '$3,500',
                    trophy: '🥉',
                    rank: 3,
                    achievement: 'Third Place'
                }
            },
            
            // INDIVIDUAL AWARDS - Complete Set (2 OH, 2 MB, 1 OP, 1 Setter, 1 Libero, 1 MVP)
            individual: {
                'Best Outside Hitter 1': {
                    player: 'Nguyễn Quang Hưng',
                    team: 'team-1',
                    avatar: 'assets/images/players/middle/NguyenQuangHungg.webp',
                    stats: '22.5 points/match, 65% attack efficiency',
                    prize: '$800',
                    icon: '⚡',
                    rank: 1
                },
                'Best Outside Hitter 2': {
                    player: 'Yelzhas Dualatuly',
                    team: 'team-6',
                    avatar: 'assets/images/players/advanced/YelzhasDualatuly.webp',
                    stats: '19.8 points/match, 58% attack efficiency',
                    prize: '$600',
                    icon: '⚡',
                    rank: 2
                },
                'Best Middle Blocker 1': {
                    player: 'Woohyeok Jang',
                    team: 'team-3',
                    avatar: 'assets/images/players/advanced/JangWooheok.webp',
                    stats: '4.2 blocks/match, 72% attack efficiency',
                    prize: '$800',
                    icon: '🛡️',
                    rank: 1
                },
                'Best Middle Blocker 2': {
                    player: 'Nguyễn Đình Vũ',
                    team: 'team-1',
                    avatar: 'assets/images/players/middle/NguyenDinhVu.webp',
                    stats: '3.8 blocks/match, 68% attack efficiency',
                    prize: '$600',
                    icon: '🛡️',
                    rank: 2
                },
                'Best Opposite Hitter': {
                    player: 'Neo Jackson',
                    team: 'team-4',
                    avatar: 'assets/images/players/advanced/NeoJackson.webp',
                    stats: '20.3 points/match, 61% attack efficiency',
                    prize: '$700',
                    icon: '💥'
                },
                'Best Setter': {
                    player: 'Lê Minh Đức',
                    team: 'team-2',
                    avatar: 'assets/images/players/middle/LeMinhDuc.webp',
                    stats: '48.7 assists/match, 85% set accuracy',
                    prize: '$700',
                    icon: '🎯'
                },
                'Best Libero': {
                    player: 'Phạm Thị Thanh Bình',
                    team: 'team-7',
                    avatar: 'assets/images/players/advanced/ThanhBinh.webp',
                    stats: '18.5 digs/match, 92% reception accuracy',
                    prize: '$700',
                    icon: '🥅'
                },
                'Tournament MVP': {
                    player: 'Nguyễn Quang Hưng',
                    team: 'team-1',
                    avatar: 'assets/images/players/middle/NguyenQuangHungg.webp',
                    stats: 'Outstanding tournament performance',
                    prize: '$1,500',
                    icon: '👑',
                    special: true // SPECIAL MVP STYLING
                }
            }
        },

        // Tournament Statistics
        stats: {
            totalAttendees: 3200,
            totalSets: 68,
            totalPoints: 3850,
            longestMatch: { id: 'match-3', duration: '2h 55min' },
            highestScore: { match: 'match-1', set: 1, score: '25-21' },
            mostMVPs: { player: 'Nguyễn Quang Hưng', count: 5 }
        },

        // Additional Data for Enhanced Features
        venue: {
            name: 'DVA Sports Complex',
            capacity: 4500,
            courts: 2,
            address: '123 DVA Street, Volleyball City'
        },

        sponsors: [
            { name: 'DVA Volleyball', logo: 'assets/images/sponsors/dva-logo.png' },
            { name: 'SportsTech', logo: 'assets/images/sponsors/sportstech.png' },
            { name: 'VolleyGear', logo: 'assets/images/sponsors/volleygear.png' }
        ]
    };

    // LOG SUCCESS
    console.log('✅ Tournament data loaded successfully');
    console.log('🏆 Data structure validation:', {
        teams: Object.keys(window.tournamentData.teams).length,
        totalMatches: Object.keys(window.tournamentData.matches).length,
        groupStageMatches: Object.values(window.tournamentData.matches).filter(m => m.stage === 'group').length,
        playoffMatches: Object.values(window.tournamentData.matches).filter(m => m.stage !== 'group').length,
        teamAwards: Object.keys(window.tournamentData.awards.team).length,
        individualAwards: Object.keys(window.tournamentData.awards.individual).length,
        mvpSpecial: Object.values(window.tournamentData.awards.individual).filter(a => a.special).length
    });

    // VALIDATE DATA INTEGRITY
    const validation = {
        hasAllTeams: Object.keys(window.tournamentData.teams).length === 8,
        hasAllMatches: Object.keys(window.tournamentData.matches).length === 20,
        hasGroupMatches: Object.values(window.tournamentData.matches).filter(m => m.stage === 'group').length === 12,
        hasIndividualAwards: Object.keys(window.tournamentData.awards.individual).length === 8,
        hasMVP: Object.values(window.tournamentData.awards.individual).some(a => a.special === true)
    };

    if (Object.values(validation).every(v => v === true)) {
        console.log('✅ All data validation checks passed!');
    } else {
        console.warn('⚠️ Data validation issues:', validation);
    }

} else {
    console.log('⚠️ Tournament data already loaded, skipping redefinition');
}

// EXPOSE FOR DEBUGGING
if (typeof window !== 'undefined') {
    window.debugTournament = () => {
        console.table(Object.values(window.tournamentData.teams).map(t => ({
            name: t.name,
            placement: t.placement,
            wins: t.wins,
            losses: t.losses,
            winRate: t.winRate + '%'
        })));
    };
}
