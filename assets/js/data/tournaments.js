/**
 * DVA Volleyball Tournament Data - COMPLETE FIXED VERSION
 * Path: D:\dva\DVA-Volleyball-Website\assets\js\data\tournament.js
 */



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
                name: 'BVC',
                shortName: 'BVC',
                logo: 'assets/images/tournaments/standing/BVC.webp',
                color: '#FF6B35',
                captain: 'Đặng Văn Huy',
                coach: 'Văn Phương',
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
                name: 'VĂN QUÁN',
                shortName: 'VQ',
                logo: 'assets/images/tournaments/standing/VQ.webp',
                color: '#0066FF',
                captain: 'Hải Đăng',
                coach: 'Mốc Zen',
                wins: 5,
                losses: 3,
                setsWon: 16,
                setsLost: 13,
                pointsFor: 380,
                pointsAgainst: 360,
                winRate: 62.5,
                placement: 2 // THIRD PLACE
            },
            'team-3': {
                id: 'team-3',
                name: 'AVC',
                shortName: 'AVC',
                logo: 'assets/images/tournaments/standing/AVC.webp',
                color: '#10B981',
                captain: 'Lê Xuân Khánh',
                coach: 'Lê Xuân Khánh',
                wins: 5,
                losses: 3,
                setsWon: 17,
                setsLost: 12,
                pointsFor: 395,
                pointsAgainst: 345,
                winRate: 62.5,
                placement: 3 // RUNNER-UP
            },
            'team-4': {
                id: 'team-4',
                name: 'SHARKS',
                shortName: 'SHA',
                logo: 'assets/images/tournaments/standing/SHARKS.webp',
                color: '#F59E0B',
                captain: 'Phạm Huy Giáp',
                coach: 'Phạm Huy Giáp',
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
                name: 'DVA ADVANCED',
                shortName: 'DA',
                logo: 'assets/images/tournaments/standing/DVA.webp',
                color: '#8B5CF6',
                captain: 'Hoàng Quốc Duy',
                coach: 'Hoàng Minh Hiếu',
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
                name: 'NIPPON',
                shortName: 'NIP',
                logo: 'assets/images/tournaments/standing/NIPPON.webp',
                color: '#EF4444',
                captain: 'Ngô Thành Công',
                coach: 'Hà Minh Huy',
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
                name: 'DVA MIDDLE',
                shortName: 'DM',
                logo: 'assets/images/tournaments/standing/DVA.webp',
                color: '#84CC16',
                captain: 'Nguyễn Ngọc Bảo',
                coach: 'Phạm Anh Quân',
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
                name: 'BUV',
                shortName: 'BUV',
                logo: 'assets/images/tournaments/standing/BUV.webp',
                color: '#6B7280',
                captain: 'Trần Hùng Cường',
                coach: 'Lê Quang Duy',
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
            // VQ-NIPPON
            'match-1': {
                id: 'match-1',
                stage: 'group',
                round: 1,
                date: '2025-08-03',
                time: '08:00',
                team1: 'team-2',
                team2: 'team-6',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 15 },
                    { team1: 25, team2: 21 }
                ],
                status: 'completed',
                mvp: 'Cao Cường'
            }, 
            //BVC-DA
            'match-2': {
                id: 'match-2',
                stage: 'group',
                round: 1,
                date: '2025-08-03',
                time: '08:00',
                team1: 'team-1',
                team2: 'team-5',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 15 },
                    { team1: 25, team2: 20 }
                ],
                status: 'completed',
                mvp: 'Kim Phong'
            },
            //SHARKS-BUV
            'match-3': {
                id: 'match-3',
                stage: 'group',
                round: 1,
                date: '2025-08-03',
                time: '09:00',
                team1: 'team-4',
                team2: 'team-8',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 14 },
                    { team1: 25, team2: 19 }
                ],
                status: 'completed',
                mvp: 'Huy Giáp'
            },
            //DM-AVC
            'match-4': {
                id: 'match-4',
                stage: 'group',
                round: 1,
                date: '2025-08-03',
                time: '09:00',
                team1: 'team-7',
                team2: 'team-3',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 23, team2: 25 },
                    { team1: 19, team2: 25 }
                ],
                status: 'completed',
                mvp: 'Phạm Anh Quân'
            },
            //VQ-SHARKS
            'match-5': {
                id: 'match-5',
                stage: 'group',
                round: 1,
                date: '2025-08-03',
                time: '10:00',
                team1: 'team-2',
                team2: 'team-4',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 22 },
                    { team1: 25, team2: 18 }
                ],
                status: 'completed',
                mvp: 'Đình Khang'
            },
            //DA-DM
            'match-6': {
                id: 'match-6',
                stage: 'group',
                round: 2,
                date: '2025-08-03',
                time: '10:00',
                team1: 'team-5',
                team2: 'team-7',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 21 },
                    { team1: 26, team2: 24 }
                ],
                status: 'completed',
                mvp: 'Phạm Anh Quân'
            },
            //NIPPON-BUV
            'match-7': {
                id: 'match-7',
                stage: 'group',
                round: 2,
                date: '2025-08-03',
                time: '11:00',
                team1: 'team-6',
                team2: 'team-8',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 19 },
                    { team1: 25, team2: 24 }
                ],
                status: 'completed',
                mvp: 'Hà Minh Huy'
            },
            //BVC-AVC
            'match-8': {
                id: 'match-8',
                stage: 'group',
                round: 2,
                date: '2025-08-03',
                time: '11:00',
                team1: 'team-1',
                team2: 'team-3',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 21 },
                    { team1: 25, team2: 20 }
                ],
                status: 'completed',
                mvp: 'Kim Phong'
            },
            //VQ-BUV
            'match-9': {
                id: 'match-9',
                stage: 'group',
                round: 3,
                date: '2025-08-03',
                time: '12:30',
                team1: 'team-2',
                team2: 'team-8',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 13 },
                    { team1: 25, team2: 18 }
                ],
                status: 'completed',
                mvp: 'Đình Khang'
            },
            //AVC-DM
            'match-10': {
                id: 'match-10',
                stage: 'group',
                round: 3,
                date: '2025-08-03',
                time: '12:30',
                team1: 'team-3',
                team2: 'team-7',
                score1: 2,
                score2: 1,
                sets: [
                    { team1: 18, team2: 25 },
                    { team1: 25, team2: 15 },
                    { team1: 15, team2: 12 }
                ],
                status: 'completed',
                mvp: 'Lê Xuân Khánh'
            },
            //SHARKS-NIPPON
            'match-11': {
                id: 'match-11',
                stage: 'group',
                round: 3,
                date: '2025-08-03',
                time: '13:30',
                team1: 'team-4',
                team2: 'team-6',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 21 },
                    { team1: 25, team2: 22 }
                ],
                status: 'completed',
                mvp: 'Huy Giáp'
            },
            //BVC-DM
            'match-12': {
                id: 'match-12',
                stage: 'group',
                round: 3,
                date: '2025-08-03',
                time: '13:30',
                team1: 'team-1',
                team2: 'team-7',
                score1: 2,
                score2: 1,
                sets: [
                    { team1: 25, team2: 20 },
                    { team1: 23, team2: 25 },
                    { team1: 17, team2: 15 }
                ],
                status: 'completed',
                mvp: 'Kim Phong'
            },
            
            // QUARTERFINALS - 4 MATCHES
            //BVC-BUV
            'match-13': {
                id: 'match-13',
                stage: 'quarterfinal',
                round: 1,
                date: '2025-08-03',
                time: '14:30',
                team1: 'team-1',
                team2: 'team-8',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 7 },
                    { team1: 25, team2: 16 }
                ],
                status: 'completed',
                mvp: 'Đăng Hải'
            },
            //VQ-DA
            'match-14': {
                id: 'match-14',
                stage: 'quarterfinal',
                round: 1,
                date: '2025-08-03',
                time: '14:30',
                team1: 'team-2',
                team2: 'team-7',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 20 },
                    { team1: 25, team2: 22 }
                ],
                status: 'completed',
                mvp: 'Cao Cường'
            },
            //AVC-NIPPON
            'match-15': {
                id: 'match-15',
                stage: 'quarterfinal',
                round: 1,
                date: '2025-08-03',
                time: '15:30',
                team1: 'team-3',
                team2: 'team-6',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 20 },
                    { team1: 25, team2: 22 }
                ],
                status: 'completed',
                mvp: 'Lê Xuân Khánh'
            },
            //SHARKS-DA
            'match-16': {
                id: 'match-16',
                stage: 'quarterfinal',
                round: 1,
                date: '2025-08-03',
                time: '15:30',
                team1: 'team-4',
                team2: 'team-5',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 23 },
                    { team1: 25, team2: 19 }
                ],
                status: 'completed',
                mvp: 'Phạm Huy Giáp'
            },
            
            // SEMIFINALS - 2 MATCHES
            //VQ-AVC
            'match-17': {
                id: 'match-17',
                stage: 'semifinal',
                round: 1,
                date: '2025-08-03',
                time: '17:00',
                team1: 'team-2',
                team2: 'team-3',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 19 },
                    { team1: 26, team2: 24 }
                ],
                status: 'completed',
                mvp: 'Đình Khang'
            },
            //BVC-SHARKS
            'match-18': {
                id: 'match-18',
                stage: 'semifinal',
                round: 1,
                date: '2025-08-03',
                time: '17:00',
                team1: 'team-1',
                team2: 'team-4',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 9 },
                    { team1: 25, team2: 22 }
                ],
                status: 'completed',
                mvp: 'Đăng Hải'
            },
            
            // THIRD PLACE MATCH - 1 MATCH
            //AVC-SHARKS
            'match-19': {
                id: 'match-19',
                stage: 'third-place',
                round: 1,
                date: '2025-08-03',
                time: '18:30',
                team1: 'team-3',
                team2: 'team-4',
                score1: 2,
                score2: 0,
                sets: [
                    { team1: 25, team2: 22 },
                    { team1: 22, team2: 23 }
                ],
                status: 'completed',
                mvp: 'Lê Xuân Khánh'
            },
            
            // FINAL - 1 MATCH
            //BVC-VQ
            'match-20': {
                id: 'match-20',
                stage: 'final',
                round: 1,
                date: '2025-08-03',
                time: '19:45',
                team1: 'team-1',
                team2: 'team-2',
                score1: 2,
                score2: 1,
                sets: [
                    { team1: 23, team2: 25 },
                    { team1: 25, team2: 21 },
                    { team1: 15, team2: 12 }
                ],
                status: 'completed',
                mvp: 'Đăng Hải'
            }
        },

        // ENHANCED AWARDS - Team & Individual with Aligned Prizes
        awards: {
            // TEAM AWARDS - Podium Style
            team: {
                champion: {
                    team: 'team-1', // Thunder Eagles
                    prize: '2.500.000 VND',
                    trophy: '🏆',
                    rank: 1,
                    achievement: 'Tournament Champions'
                },
                runnerUp: {
                    team: 'team-2', // Storm Dragons  
                    prize: '1.500.000 VND',
                    trophy: '🥈',
                    rank: 2,
                    achievement: 'Tournament Runners-up'
                },
                thirdPlace: {
                    team: 'team-3', // Lightning Wolves
                    prize: '500.000 VND',
                    trophy: '🥉',
                    rank: 3,
                    achievement: 'Third Place'
                }
            },
            
            // INDIVIDUAL AWARDS - Complete Set (2 OH, 2 MB, 1 OP, 1 Setter, 1 Libero, 1 MVP)
            individual: {
                'Best Outside Hitter 1': {
                    player: 'Cao Cường',
                    team: 'team-2',
                    avatar: 'assets/images/tournaments/awards/CaoCuong.webp',
                    stats: '22.5 points/match, 65% attack efficiency',
                    prize: '200.000 VND',
                    icon: '⚡',
                    rank: 1
                },
                'Best Outside Hitter 2': {
                    player: 'Kim Phong',
                    team: 'team-1',
                    avatar: 'assets/images/tournaments/awards/KimPhong.webp',
                    stats: '19.8 points/match, 58% attack efficiency',
                    prize: '200.000 VND',
                    icon: '⚡',
                    rank: 2
                },
                'Best Middle Blocker 1': {
                    player: 'Văn Phương',
                    team: 'team-1',
                    avatar: 'assets/images/tournaments/awards/VanPhuong.webp',
                    stats: '4.2 blocks/match, 72% attack efficiency',
                    prize: '200.000 VND',
                    icon: '🛡️',
                    rank: 1
                },
                'Best Middle Blocker 2': {
                    player: 'Đình Hưởng',
                    team: 'team-3',
                    avatar: 'assets/images/tournaments/awards/DinhHuong.webp',
                    stats: '3.8 blocks/match, 68% attack efficiency',
                    prize: '200.000 VND',
                    icon: '🛡️',
                    rank: 2
                },
                'Best Opposite Hitter': {
                    player: 'Đình Khang',
                    team: 'team-2',
                    avatar: 'assets/images/tournaments/awards/DinhKhang.webp',
                    stats: '20.3 points/match, 61% attack efficiency',
                    prize: '200.000 VND',
                    icon: '💥'
                },
                'Best Setter': {
                    player: 'Văn Huy',
                    team: 'team-1',
                    avatar: 'assets/images/tournaments/awards/VanHuy.webp',
                    stats: '48.7 assists/match, 85% set accuracy',
                    prize: '200.000 VND',
                    icon: '🎯'
                },
                'Best Libero': {
                    player: 'Duy Phan',
                    team: 'team-4',
                    avatar: 'assets/images/tournaments/awards/DuyPhan.webp',
                    stats: '18.5 digs/match, 92% reception accuracy',
                    prize: '200.000 VND',
                    icon: '🥅'
                },
                'Tournament MVP': {
                    player: 'Đăng Hải',
                    team: 'team-1',
                    avatar: 'assets/images/tournaments/awards/DangHai.webp',
                    stats: 'Outstanding tournament performance',
                    prize: '300.000 VND',
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

    

    // VALIDATE DATA INTEGRITY
    const validation = {
        hasAllTeams: Object.keys(window.tournamentData.teams).length === 8,
        hasAllMatches: Object.keys(window.tournamentData.matches).length === 20,
        hasGroupMatches: Object.values(window.tournamentData.matches).filter(m => m.stage === 'group').length === 12,
        hasIndividualAwards: Object.keys(window.tournamentData.awards.individual).length === 8,
        hasMVP: Object.values(window.tournamentData.awards.individual).some(a => a.special === true)
    };

    if (Object.values(validation).every(v => v === true)) {
      
    } else {
        console.warn('⚠️ Data validation issues:', validation);
    }

} else {
   
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
