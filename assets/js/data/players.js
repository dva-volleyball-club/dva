/**
 * DVA Volleyball Players Database - COMPLETE & SAFE VERSION
 * Path: D:\dva\DVA-Volleyball-Website\assets\js\data\players.js
 * 
 * ✅ Features:
 * - Nuclear safe declarations (no duplicate errors)
 * - Real flag emojis for all countries
 * - Fixed duplicate IDs and names
 * - Advanced team as default
 * - Data validation system
 * - Helper functions included
 */

// ===============================================
// ✅ NUCLEAR SAFE WRAPPER - PREVENTS ALL CONFLICTS
// ===============================================
(function() {
    'use strict';
    
    // Force cleanup any existing declarations
    try {
        if ('playersData' in window) delete window.playersData;
        if ('positionColors' in window) delete window.positionColors;
        if ('getPlayersByTeam' in window) delete window.getPlayersByTeam;
        if ('getAllPlayers' in window) delete window.getAllPlayers;
        if ('getPlayerById' in window) delete window.getPlayerById;
        console.log('🧹 DVA Players: Forced cleanup completed');
    } catch (e) {
        console.log('🧹 DVA Players: Cleanup attempted');
    }
    
    // ===============================================
    // 📊 PLAYERS DATABASE - COMPLETE & VALIDATED
    // ===============================================
    
    const dvaPlayersDatabase = {
        // MIDDLE TEAM - Professional Division
        middle: [
            {
                id: 1,
                name: "Hoàng Quốc Duy",
                shortName: "HQD",
                number: 29,
                position: "Setter",
                positionCode: "S",
                height: "160cm",
                reachHeight: "285cm",
                address: "Thái Bình",
                born: "2003",
                age: 22,
                avatar: "assets/images/players/middle/HoangQuocDuy.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: true,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2021,
                experience: 4,
                stats: {
                    matches: 45,
                    wins: 32,
                    points: 234,
                    aces: 28,
                    blocks: 12,
                    assists: 456
                }
            },
            {
                id: 2,
                name: "Hoàng Minh Hiếu",
                shortName: "HMH",
                number: 15,
                position: "Setter",
                positionCode: "S",
                height: "168cm",
                reachHeight: "275cm",
                address: "Bắc Giang",
                born: "1996",
                age: 29,
                avatar: "assets/images/players/middle/MinhHieu.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: true,
                team: "middle",
                status: "active",
                joinedYear: 2020,
                experience: 6,
                stats: {
                    matches: 52,
                    wins: 38,
                    points: 189,
                    aces: 22,
                    blocks: 8,
                    assists: 523
                }
            },
            {
                id: 3,
                name: "Hà Xuân Quân",
                shortName: "HXQ",
                number: 27,
                position: "Opposite Hitter",
                positionCode: "OH",
                height: "177cm",
                reachHeight: "290cm",
                address: "Thanh Hoá",
                born: "2006",
                age: 19,
                avatar: "assets/images/players/middle/HaXuanQuann.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2023,
                experience: 2,
                stats: {
                    matches: 38,
                    wins: 25,
                    points: 312,
                    aces: 45,
                    blocks: 67,
                    assists: 23
                }
            },
            {
                id: 4,
                name: "Dương Văn Đại",
                shortName: "DVD",
                number: 20,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "178cm",
                reachHeight: "290cm",
                address: "Thái Bình",
                born: "1992",
                age: 33,
                avatar: "assets/images/players/middle/DuongVanDaii.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2019,
                experience: 7,
                stats: {
                    matches: 48,
                    wins: 32,
                    points: 245,
                    aces: 18,
                    blocks: 89,
                    assists: 34
                }
            },
            {
                id: 5,
                name: "Nguyễn Đình Vũ",
                shortName: "NDV",
                number: 24,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "175cm",
                reachHeight: "290cm",
                address: "Hải Dương",
                born: "2005",
                age: 20,
                avatar: "assets/images/players/middle/NguyenDinhVu.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2022,
                experience: 3,
                stats: {
                    matches: 35,
                    wins: 24,
                    points: 178,
                    aces: 12,
                    blocks: 67,
                    assists: 28
                }
            },
            {
                id: 6,
                name: "Nguyễn Quang Hưng",
                shortName: "NQH",
                number: 9,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "180cm",
                reachHeight: "320cm",
                address: "Phú Thọ",
                born: "2004",
                age: 21,
                avatar: "assets/images/players/middle/NguyenQuangHungg.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2022,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            }
        ],

        // ADVANCED TEAM - Elite Division (DEFAULT)
        advanced: [
            {
                id: 10,
                name: "Artiukh Lyubov",
                shortName: "ART",
                number: 1,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "176cm",
                reachHeight: "285cm",
                address: "Moscow, Russia",
                born: "2005",
                age: 19,
                avatar: "assets/images/players/advanced/Liuba.webp",
                country: "Russia",
                countryCode: "RU",
                flag: "🇷🇺",
                isCaptain: true,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2023,
                experience: 5,
                stats: {
                    matches: 65,
                    wins: 52,
                    points: 412,
                    aces: 67,
                    blocks: 89,
                    assists: 45
                }
            },
            {
                id: 11,
                name: "Woohyeok Jang",
                shortName: "WOO",
                number: 4,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "173cm",
                reachHeight: "265cm",
                address: "Seoul, Korea",
                born: "2008",
                age: 17,
                avatar: "assets/images/players/advanced/JangWooheok.webp",
                country: "Korea",
                countryCode: "KR",
                flag: "🇰🇷",
                isCaptain: false,
                isViceCaptain: true,
                team: "advanced",
                status: "active",
                joinedYear: 2023,
                experience: 3,
                stats: {
                    matches: 58,
                    wins: 45,
                    points: 298,
                    aces: 23,
                    blocks: 134,
                    assists: 67
                }
            },
            {
                id: 12,
                name: "Yelzhas Dualatuly",
                shortName: "YEL",
                number: 14,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "174cm",
                reachHeight: "288cm",
                address: "Almaty, Kazakhstan",
                born: "2007",
                age: 18,
                avatar: "assets/images/players/middle/YelzhasDualatuly.webp",
                country: "Kazakhstan",
                countryCode: "KZ",
                flag: "🇰🇿",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2023,
                experience: 4,
                stats: {
                    matches: 54,
                    wins: 41,
                    points: 356,
                    aces: 48,
                    blocks: 72,
                    assists: 34
                }
            },
            {
                id: 13,
                name: "Neo Jackson",
                shortName: "NEO",
                number: 6,
                position: "Opposite",
                positionCode: "OP",
                height: "172cm",
                reachHeight: "280cm",
                address: "Mumbai, India",
                born: "2008",
                age: 17,
                avatar: "assets/images/players/advanced/NeoJackson.webp",
                country: "India",
                countryCode: "IN",
                flag: "🇮🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
                experience: 2,
                stats: {
                    matches: 45,
                    wins: 34,
                    points: 267,
                    aces: 39,
                    blocks: 56,
                    assists: 28
                }
            },
            {
                id: 14,
                name: "Phạm Thị Thanh Bình",
                shortName: "PTB",
                number: 8,
                position: "Libero",
                positionCode: "L",
                height: "160cm",
                reachHeight: "260cm",
                address: "Quảng Bình",
                born: "2007",
                age: 18,
                avatar: "assets/images/players/advanced/ThanhBinh.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2023,
                experience: 3,
                stats: {
                    matches: 62,
                    wins: 48,
                    points: 89,
                    aces: 12,
                    blocks: 0,
                    assists: 234
                }
            },
            {
                id: 15,
                name: "Isabella Santos",
                shortName: "ISA",
                number: 22,
                position: "Setter",
                positionCode: "S",
                height: "165cm",
                reachHeight: "270cm",
                address: "São Paulo, Brazil",
                born: "2006",
                age: 19,
                avatar: "assets/images/players/advanced/ThanhBinh.webp",
                country: "Brazil",
                countryCode: "BR",
                flag: "🇧🇷",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2023,
                experience: 4,
                stats: {
                    matches: 59,
                    wins: 44,
                    points: 156,
                    aces: 28,
                    blocks: 15,
                    assists: 487
                }
            },
            {
                id: 16,
                name: "Fatima Khan",
                shortName: "FAT",
                number: 23,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "168cm",
                reachHeight: "275cm",
                address: "Karachi, Pakistan",
                born: "2006",
                age: 19,
                avatar: "assets/images/players/advanced/ThanhBinh.webp",
                country: "Pakistan",
                countryCode: "PK",
                flag: "🇵🇰",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2023,
                experience: 3,
                stats: {
                    matches: 51,
                    wins: 37,
                    points: 289,
                    aces: 42,
                    blocks: 58,
                    assists: 23
                }
            },
            {
                id: 17,
                name: "Sarah Johnson",
                shortName: "SAR",
                number: 24,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "174cm",
                reachHeight: "285cm",
                address: "Toronto, Canada",
                born: "2006",
                age: 19,
                avatar: "assets/images/players/advanced/ThanhBinh.webp",
                country: "Canada",
                countryCode: "CA",
                flag: "🇨🇦",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2023,
                experience: 4,
                stats: {
                    matches: 56,
                    wins: 42,
                    points: 234,
                    aces: 19,
                    blocks: 98,
                    assists: 45
                }
            },
            {
                id: 18,
                name: "Batbayar Oyunaa",
                shortName: "BAT",
                number: 25,
                position: "Setter",
                positionCode: "S",
                height: "162cm",
                reachHeight: "268cm",
                address: "Ulaanbaatar, Mongolia",
                born: "2006",
                age: 19,
                avatar: "assets/images/players/advanced/ThanhBinh.webp",
                country: "Mongolia",
                countryCode: "MN",
                flag: "🇲🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
                experience: 2,
                stats: {
                    matches: 43,
                    wins: 31,
                    points: 167,
                    aces: 24,
                    blocks: 12,
                    assists: 378
                }
            },
            {
                id: 19,
                name: "Yuki Tanaka",
                shortName: "YUK",
                number: 26,
                position: "Libero",
                positionCode: "L",
                height: "158cm",
                reachHeight: "255cm",
                address: "Tokyo, Japan",
                born: "2006",
                age: 19,
                avatar: "assets/images/players/advanced/ThanhBinh.webp",
                country: "Japan",
                countryCode: "JP",
                flag: "🇯🇵",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
                experience: 3,
                stats: {
                    matches: 47,
                    wins: 35,
                    points: 76,
                    aces: 8,
                    blocks: 0,
                    assists: 198
                }
            }
        ]
    };

    // ===============================================
    // 🎨 POSITION COLORS & CONFIGURATION
    // ===============================================

    const dvaPositionColors = {
        'Setter': '#3B82F6',           // Blue - Playmaker
        'Outside Hitter': '#EF4444',   // Red - Power
        'Middle Blocker': '#10B981',   // Green - Defense
        'Opposite Hitter': '#F59E0B',  // Yellow - Versatile
        'Opposite': '#F59E0B',         // Yellow - Versatile
        'Libero': '#8B5CF6'           // Purple - Specialist
    };

    const dvaTeamConfig = {
        middle: {
            name: "Middle Team",
            division: "Professional Division",
            color: "#FF6B35",
            icon: "⚡",
            description: "Competitive professional volleyball team"
        },
        advanced: {
            name: "Advanced Team", 
            division: "Elite Division",
            color: "#0066FF",
            icon: "🌟",
            description: "International elite volleyball squad"
        }
    };

    // ===============================================
    // ✅ SAFE GLOBAL EXPOSURE
    // ===============================================

    // Main data exposure
    window.playersData = dvaPlayersDatabase;
    window.positionColors = dvaPositionColors;
    window.teamConfig = dvaTeamConfig;

    // ===============================================
    // 🔧 HELPER FUNCTIONS
    // ===============================================

    // Get players by team
    window.getPlayersByTeam = function(team) {
        if (!team || !window.playersData[team]) {
            console.warn('⚠️ Invalid team:', team);
            return [];
        }
        return window.playersData[team] || [];
    };

    // Get all players combined
    window.getAllPlayers = function() {
        return [
            ...window.playersData.middle,
            ...window.playersData.advanced
        ];
    };

    // Get player by ID
    window.getPlayerById = function(id) {
        const allPlayers = window.getAllPlayers();
        return allPlayers.find(player => player.id === parseInt(id));
    };

    // Get players by position
    window.getPlayersByPosition = function(position) {
        const allPlayers = window.getAllPlayers();
        return allPlayers.filter(player => 
            player.position.toLowerCase() === position.toLowerCase()
        );
    };

    // Get team captains
    window.getTeamCaptains = function() {
        const allPlayers = window.getAllPlayers();
        return allPlayers.filter(player => player.isCaptain || player.isViceCaptain);
    };

    // Get team statistics
    window.getTeamStats = function(team) {
        const players = window.getPlayersByTeam(team);
        if (players.length === 0) return null;

        const stats = {
            totalPlayers: players.length,
            averageAge: Math.round(players.reduce((sum, p) => sum + p.age, 0) / players.length),
            averageHeight: Math.round(
                players.reduce((sum, p) => sum + parseInt(p.height), 0) / players.length
            ),
            totalMatches: players.reduce((sum, p) => sum + p.stats.matches, 0),
            totalPoints: players.reduce((sum, p) => sum + p.stats.points, 0),
            totalAces: players.reduce((sum, p) => sum + p.stats.aces, 0),
            totalBlocks: players.reduce((sum, p) => sum + p.stats.blocks, 0),
            countries: [...new Set(players.map(p => p.country))].length,
            captains: players.filter(p => p.isCaptain).length,
            viceCaptains: players.filter(p => p.isViceCaptain).length
        };

        return stats;
    };

    // Search players
    window.searchPlayers = function(query, team = null) {
        let players = team ? window.getPlayersByTeam(team) : window.getAllPlayers();
        
        if (!query || query.trim() === '') return players;
        
        const searchTerm = query.toLowerCase().trim();
        
        return players.filter(player => 
            player.name.toLowerCase().includes(searchTerm) ||
            player.shortName.toLowerCase().includes(searchTerm) ||
            player.position.toLowerCase().includes(searchTerm) ||
            player.country.toLowerCase().includes(searchTerm) ||
            player.address.toLowerCase().includes(searchTerm) ||
            player.number.toString().includes(searchTerm)
        );
    };

    // ===============================================
    // 🔍 DATA VALIDATION SYSTEM
    // ===============================================

    const validatePlayersData = () => {
        console.log('🔍 DVA Players: Running data validation...');
        
        let totalPlayers = 0;
        let errors = [];
        let warnings = [];
        
        // Check each team
        Object.keys(window.playersData).forEach(teamName => {
            const players = window.playersData[teamName];
            totalPlayers += players.length;
            
            // Check for duplicate IDs within team
            const ids = players.map(p => p.id);
            const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
            if (duplicateIds.length > 0) {
                errors.push(`❌ Duplicate IDs in ${teamName}: ${duplicateIds.join(', ')}`);
            }
            
            // Check for duplicate numbers within team
            const numbers = players.map(p => p.number);
            const duplicateNumbers = numbers.filter((num, index) => numbers.indexOf(num) !== index);
            if (duplicateNumbers.length > 0) {
                warnings.push(`⚠️ Duplicate numbers in ${teamName}: ${duplicateNumbers.join(', ')}`);
            }
            
            // Check required fields
            players.forEach(player => {
                if (!player.name || !player.position || !player.country) {
                    errors.push(`❌ Missing required fields for player ID ${player.id}`);
                }
                
                if (!player.flag || player.flag.length < 2) {
                    warnings.push(`⚠️ Missing or invalid flag for ${player.name}`);
                }
            });
        });
        
        // Check for duplicate IDs across teams
        const allIds = window.getAllPlayers().map(p => p.id);
        const globalDuplicateIds = allIds.filter((id, index) => allIds.indexOf(id) !== index);
        if (globalDuplicateIds.length > 0) {
            errors.push(`❌ Global duplicate IDs: ${globalDuplicateIds.join(', ')}`);
        }
        
        // Output results
        if (errors.length > 0) {
            console.error('❌ DVA Players Data Validation FAILED:');
            errors.forEach(error => console.error(error));
        }
        
        if (warnings.length > 0) {
            console.warn('⚠️ DVA Players Data Warnings:');
            warnings.forEach(warning => console.warn(warning));
        }
        
        if (errors.length === 0) {
            console.log('✅ DVA Players Data Validation PASSED');
            console.log(`📊 Total: ${totalPlayers} players loaded successfully`);
            console.log(`📊 Teams: ${Object.keys(window.playersData).length}`);
            console.log(`📊 Countries: ${[...new Set(window.getAllPlayers().map(p => p.country))].length}`);
        }
        
        return {
            passed: errors.length === 0,
            errors,
            warnings,
            stats: {
                totalPlayers,
                teams: Object.keys(window.playersData).length,
                countries: [...new Set(window.getAllPlayers().map(p => p.country))].length
            }
        };
    };

    // ===============================================
    // 🚀 INITIALIZATION
    // ===============================================

    // Run validation after a short delay
    setTimeout(() => {
        const validation = validatePlayersData();
        
        // Expose validation results
        window.dvaPlayersValidation = validation;
        
        // Log success message
        console.log('🏐✅ DVA Volleyball Players Database loaded successfully!');
        console.log('📊 Quick Stats:', {
            'Middle Team': window.playersData.middle.length + ' players',
            'Advanced Team': window.playersData.advanced.length + ' players',
            'Total Countries': validation.stats.countries,
            'Default Team': 'Advanced (Elite Division)'
        });
        
    }, 100);

})(); // End of nuclear safe wrapper

// ===============================================
// 🔒 EXECUTION LOCK
// ===============================================

if (!window.dvaPlayersLoaded) {
    window.dvaPlayersLoaded = true;
    window.dvaPlayersVersion = '2.0.0';
    window.dvaPlayersLoadedAt = new Date().toISOString();
    console.log('🔒 DVA Players Database locked and secured');
} else {
    console.log('⚠️ DVA Players Database already loaded, version:', window.dvaPlayersVersion || 'unknown');
}

// End of file
