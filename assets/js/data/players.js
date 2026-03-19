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
       
    } catch (e) {
      
    }
    
    // ===============================================
    // 📊 PLAYERS DATABASE - COMPLETE & VALIDATED
    // ===============================================
    
    const dvaPlayersDatabase = {
        // MIDDLE TEAM - Professional Division
        middle: [
            {
                id: 203,
                name: "Woohyeok Jang",
                shortName: "WJ",
                number: 17,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "173cm",
                reachHeight: "270cm",
                address: "Seoul",
                born: "2008",
                age: 17,
                avatar: "assets/images/players/middle/WoohyeokJang.webp",
                country: "Korea",
                countryCode: "KR",
                flag: "🇰🇷",
                isCaptain: false,
                isViceCaptain: true,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 204,
                name: "Yelzhas Dualatuly LJ",
                shortName: "LJ",
                number: 18,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "174cm",
                reachHeight: "288cm",
                address: "Karkaraly",
                born: "2007",
                age: 18,
                avatar: "assets/images/players/middle/YelzhasDualatuly.webp",
                country: "Kazakhstan",
                countryCode: "KZ",
                flag: "🇰🇿",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 205,
                name: "Neojackson Manjunathan",
                shortName: "NEO",
                number: 6,
                position: "Opposite Hitter",
                positionCode: "OP",
                height: "175cm",
                reachHeight: "280cm",
                address: "Salem",
                born: "2009",
                age: 17,
                avatar: "assets/images/players/middle/NeoJacksonManjunathan.webp",
                country: "India",
                countryCode: "IN",
                flag: "🇮🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 207,
                name: "Ali Janjua",
                shortName: "AL",
                number: 20,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "183cm",
                reachHeight: "290cm",
                address: "Hà Nội",
                born: "2006",
                age: 17,
                avatar: "assets/images/players/middle/AliJanjua.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 206,
                name: "Sami Sam Janjua",
                shortName: "SAM",
                number: 23,
                position: "Setter",
                positionCode: "S",
                height: "174cm",
                reachHeight: "275cm",
                address: "Hà Nội",
                born: "2008",
                age: 19,
                avatar: "assets/images/players/middle/SamiSamJanjua.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 834,
                name: "Victor Le Thibert",
                shortName: "VLT",
                number: 11,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "184cm",
                reachHeight: "315cm",
                address: "Toronto",
                born: "2010",
                age: 16,
                avatar: "assets/images/players/middle/VictorLeThibert.webp",
                country: "Canada",
                countryCode: "CA",
                flag: "🇨🇦",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 209,
                name: "Phùng Kiến Quốc",
                shortName: "PKQ",
                number: 20,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "175cm",
                reachHeight: "280cm",
                address: "Hà Nội",
                born: "2008",
                age: 17,
                avatar: "assets/images/players/middle/PhungKienQuoc.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: true,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 210,
                name: "Trần Tuấn Kiệt",
                shortName: "TTK",
                number: 20,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "178cm",
                reachHeight: "285cm",
                address: "Hà Nội",
                born: "2007",
                age: 17,
                avatar: "assets/images/players/middle/TranTuanKiet.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 211,
                name: "Mai Hoàng Anh",
                shortName: "MHA",
                number: 26,
                position: "Opposite Hitter",
                positionCode: "OP",
                height: "174cm",
                reachHeight: "265cm",
                address: "Hà Nội",
                born: "2006",
                age: 17,
                avatar: "assets/images/players/middle/MaiHoangAnh.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 212,
                name: "Đỗ Văn Đạt",
                shortName: "DVD",
                number: 8,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "178cm",
                reachHeight: "290cm",
                address: "Thanh Hoá",
                born: "2004",
                age: 21,
                avatar: "assets/images/players/advanced/DoVanDat.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 213,
                name: "Nông Văn Thuận",
                shortName: "NVT",
                number: 8,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "170cm",
                reachHeight: "290cm",
                address: "Tuyên Quang",
                born: "2000",
                age: 25,
                avatar: "assets/images/players/middle/NongVanThuan.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 216,
                name: "Nguyễn Ngọc Khánh Huy",
                shortName: "NNKH",
                number: 31,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "177cm",
                reachHeight: "300cm",
                address: "Thanh Hoá",
                born: "2007",
                age: 18,
                avatar: "assets/images/players/middle/NguyenNgocKhanhHuy.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 217,
                name: "Nguyễn Quang Minh",
                shortName: "NQM",
                number: 12,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "169cm",
                reachHeight: "290cm",
                address: "Ninh Bình",
                born: "2006",
                age: 20,
                avatar: "assets/images/players/middle/NguyenQuangMinh.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 218,
                name: "Thái Hoàng Quân",
                shortName: "THQ",
                number: 1,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "180cm",
                reachHeight: "308cm",
                address: "Hà Tĩnh",
                born: "2007",
                age: 18,
                avatar: "assets/images/players/middle/ThaiHoangQuan.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 219,
                name: "Cấn Trung Anh",
                shortName: "CTA",
                number: 21,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "168cm",
                reachHeight: "280cm",
                address: "Tuyên Quang",
                born: "2004",
                age: 21,
                avatar: "assets/images/players/middle/CanTrungAnh.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 220,
                name: "Vì Văn Tài",
                shortName: "VVT",
                number: 11,
                position: "Setter",
                positionCode: "S",
                height: "165cm",
                reachHeight: "275cm",
                address: "Sơn La",
                born: "2006",
                age: 21,
                avatar: "assets/images/players/middle/ViVanTai.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
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
                id: 221,
                name: "Hoàng Đình Trọng",
                shortName: "HDT",
                number: 5,
                position: "Setter",
                positionCode: "S",
                height: "173cm",
                reachHeight: "295cm",
                address: "Hà Nội",
                born: "2006",
                age: 19,
                avatar: "assets/images/players/middle/HoangDinhTrong.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 223,
                name: "Đào Nhật Minh",
                shortName: "DNM",
                number: 18,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "173cm",
                reachHeight: "290cm",
                address: "Thanh Hoá",
                born: "2010",
                age: 21,
                avatar: "assets/images/players/middle/DaoNhatMinh.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: true,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 224,
                name: "Seung Gi Lee",
                shortName: "SG",
                number: 30,
                position: "Opposite Hitter",
                positionCode: "OP",
                height: "172cm",
                reachHeight: "278cm",
                address: "Seoul",
                born: "2010",
                age: 21,
                avatar: "assets/images/players/middle/SeungGiLee.webp",
                country: "Korea",
                countryCode: "KR",
                flag: "🇰🇷",
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
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
                id: 225,
                name: "Nate ScottSills",
                shortName: "NSS",
                number: 7,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "177cm",
                reachHeight: "290cm",
                address: "London",
                born: "2000",
                age: 20,
                avatar: "assets/images/players/middle/NateScottSills.webp",
                country: "England",
                countryCode: "GB",
                flag: "🇬🇧",  // England flag emoji
                isCaptain: false,
                isViceCaptain: true,
                team: "middle",
                status: "active",
                joinedYear: 2026,
                experience: 5,
                stats: {
                    matches: 68,
                    wins: 52,
                    points: 289,
                    aces: 34,
                    blocks: 76,
                    assists: 23
                }
            },
            {
                id: 226,
                name: "Filbert",
                shortName: "CHOK",
                number: 9,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "189cm",
                reachHeight: "335cm",
                address: "Lagos",
                born: "2005",
                age: 18,
                avatar: "assets/images/players/middle/Filbert.webp",
                country: "Nigeria",
                countryCode: "NG",
                flag: "🇳🇬",  // Nigeria flag emoji
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2025,
                experience: 6,
                stats: {
                    matches: 72,
                    wins: 48,
                    points: 312,
                    aces: 12,
                    blocks: 145,
                    assists: 8
                }
            },
            
            {
                id: 837,
                name: "Richard Hung Le",
                shortName: "RHL",
                number: 3,
                position: "Setter",
                positionCode: "S",
                height: "179cm",
                reachHeight: "300cm",
                address: "Sydney",
                born: "1995",
                age: 17,
                avatar: "assets/images/players/middle/RichardHungLe.webp",
                country: "Australia",
                countryCode: "AU",
                flag: "🇦🇺",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2026,
                experience: 4,
                stats: {
                    matches: 62,
                    wins: 47,
                    points: 198,
                    aces: 28,
                    blocks: 34,
                    assists: 456
                }
            },

            // Player 2
            {
                id: 838,
                name: "Amanda Tong",
                shortName: "AT",
                number: 15,
                position: "Libero",
                positionCode: "L",
                height: "158cm",
                reachHeight: "260cm",
                address: "Sydney",
                born: "1999",
                age: 16,
                avatar: "assets/images/players/middle/AmandaTong.webp",
                country: "Australia",
                countryCode: "AU",
                flag: "🇦🇺",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2026,
                experience: 3,
                stats: {
                    matches: 58,
                    wins: 41,
                    points: 156,
                    aces: 45,
                    blocks: 12,
                    assists: 89
                }
            },
            {
                id: 839,
                name: "Jenna Emilie Busse",
                shortName: "JEB",
                number: 5,
                position: "Libero",
                positionCode: "L",
                height: "165cm",
                reachHeight: "260cm",
                address: "Cape Town",
                born: "1995",
                age: 31,
                avatar: "assets/images/players/middle/JennaEmilieBusse.webp",
                country: "South Africa",
                countryCode: "ZA",
                flag: "🇿🇦" ,
                isCaptain: false,
                isViceCaptain: false,
                team: "middle",
                status: "active",
                joinedYear: 2026,
                experience: 5,
                stats: {
                    matches: 71,
                    wins: 49,
                    points: 301,
                    aces: 31,
                    blocks: 112,
                    assists: 67
                }
            },
            {
                id: 840,
                name: "Chu Thị Ngọc",
                shortName: "CTN",
                number: 12,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "177cm",
                reachHeight: "294cm",
                address: "Nghệ An",
                born: "1999",
                age: 17,
                avatar: "assets/images/players/middle/ChuThiNgoc.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: true,
                team: "middle",
                status: "active",
                joinedYear: 2025,
                experience: 5,
                stats: {
                    matches: 65,
                    wins: 50,
                    points: 275,
                    aces: 38,
                    blocks: 82,
                    assists: 56
                }
            },
            {
                id: 841,
                name: "Anna Dinh",
                shortName: "AD",
                number: 12,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "165cm",
                reachHeight: "270cm",
                address: "Hà Nội",
                born: "2005",
                age: 17,
                avatar: "assets/images/players/middle/AnnaDinh.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: true,
                team: "middle",
                status: "active",
                joinedYear: 2025,
                experience: 5,
                stats: {
                    matches: 65,
                    wins: 50,
                    points: 275,
                    aces: 38,
                    blocks: 82,
                    assists: 56
                }
            },
            {
                id: 576,
                name: "Sota Kobayashi",
                shortName: "SK",
                number: 12,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "180cm",
                reachHeight: "295cm",
                address: "Kyoto",
                born: "2010",
                age: 17,
                avatar: "assets/images/players/middle/SotaKobayashi.webp",
                country: "Japan",
                countryCode: "JP",
                flag: "🇯🇵",
                isCaptain: false,
                isViceCaptain: true,
                team: "middle",
                status: "active",
                joinedYear: 2026,
                experience: 5,
                stats: {
                    matches: 65,
                    wins: 50,
                    points: 275,
                    aces: 38,
                    blocks: 82,
                    assists: 56
                }
            }





        ],

        // ADVANCED TEAM - Elite Division (DEFAULT)
        advanced: [
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
                avatar: "assets/images/players/advanced/HoangQuocDuy.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: true,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2023,
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
                avatar: "assets/images/players/advanced/HoangMinhHieu.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: true,
                team: "advanced",
                status: "active",
                joinedYear: 2023,
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
                avatar: "assets/images/players/advanced/HaXuanQuan.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
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
                name: "Dương Xuân Đại",
                shortName: "DXD",
                number: 20,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "178cm",
                reachHeight: "285cm",
                address: "Thái Bình",
                born: "1992",
                age: 33,
                avatar: "assets/images/players/advanced/DuongVanDai.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2025,
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
                avatar: "assets/images/players/advanced/NguyenDinhVu.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
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
                name: "Đỗ Xuân Đạt",
                shortName: "DXD",
                number: 4,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "183cm",
                reachHeight: "327cm",
                address: "Thanh Hoá",
                born: "2004",
                age: 21,
                avatar: "assets/images/players/advanced/DoXuanDat.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2025,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 7,
                name: "Trịnh Duy Đông",
                shortName: "TDD",
                number: 10,
                position: "Setter",
                positionCode: "S",
                height: "170cm",
                reachHeight: "285cm",
                address: "Thái Bình",
                born: "2005",
                age: 20,
                avatar: "assets/images/players/advanced/TrinhDuyDong.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 8,
                name: "Phan Bá Khánh",
                shortName: "PBK",
                number: 22,
                position: "Opposite Hitter",
                positionCode: "OP",
                height: "178cm",
                reachHeight: "310cm",
                address: "Nghệ An",
                born: "2005",
                age: 20,
                avatar: "assets/images/players/advanced/PhanBaKhanh.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 10,
                name: "Nguyễn Quang Hưng",
                shortName: "NQH",
                number: 8,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "180cm",
                reachHeight: "320cm",
                address: "Phú Thọ",
                born: "2004",
                age: 21,
                avatar: "assets/images/players/advanced/NguyenQuangHung.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2025,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 11,
                name: "Bùi Ngọc Chiến",
                shortName: "BNC",
                number: 8,
                position: "Opposite Hitter",
                positionCode: "OH",
                height: "175cm",
                reachHeight: "315cm",
                address: "Ninh Bình",
                born: "2004",
                age: 21,
                avatar: "assets/images/players/advanced/BuiNgocChien.webp",
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
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 12,
                name: "Lê Hải Dương",
                shortName: "LHD",
                number: 14,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "176cm",
                reachHeight: "310cm",
                address: "Hải Dương",
                born: "2004",
                age: 21,
                avatar: "assets/images/players/advanced/LeHaiDuong.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 13,
                name: "Phạm Anh Quân",
                shortName: "PAQ",
                number: 23,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "180cm",
                reachHeight: "310cm",
                address: "Hoà Bình",
                born: "2006",
                age: 19,
                avatar: "assets/images/players/advanced/PhamAnhQuan.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 14,
                name: "Lê Hải Nam",
                shortName: "LHN",
                number: 10,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "170cm",
                reachHeight: "290cm",
                address: "Thanh Hoá",
                born: "2004",
                age: 21,
                avatar: "assets/images/players/advanced/LeHaiNam.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 18,
                name: "Nguyễn Tiến Bảo Hưng",
                shortName: "NTBH",
                number: 21,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "175cm",
                reachHeight: "305cm",
                address: "Nghệ An",
                born: "2004",
                age: 22,
                avatar: "assets/images/players/advanced/NguyenTienBaoHung.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 19,
                name: "Nguyễn Tùng Dương",
                shortName: "NTD",
                number: 16,
                position: "Libero",
                positionCode: "L",
                height: "169cm",
                reachHeight: "280cm",
                address: "Vĩnh Phúc",
                born: "2005",
                age: 22,
                avatar: "assets/images/players/advanced/NguyenTungDuong.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 20,
                name: "Bùi Tuấn Thành",
                shortName: "BTT",
                number: 12,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "168cm",
                reachHeight: "290cm",
                address: "Tuyên Quang",
                born: "1999",
                age: 24,
                avatar: "assets/images/players/advanced/BuiTuanThanh.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 21,
                name: "Nông Đức Trưởng",
                shortName: "NDT",
                number: 23,
                position: "Opposite Hitter",
                positionCode: "OP",
                height: "178cm",
                reachHeight: "315cm",
                address: "Hà Giang",
                born: "1997",
                age: 28,
                avatar: "assets/images/players/advanced/NongDucTruong.webp",
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
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 22,
                name: "Lê Hoàng Xuân",
                shortName: "LHX",
                number: 9,
                position: "Opposite Hitter",
                positionCode: "OP",
                height: "180cm",
                reachHeight: "320cm",
                address: "Cà Mau",
                born: "2005",
                age: 20,
                avatar: "assets/images/players/advanced/LeHoangXuan.webp",
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
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 23,
                name: "Hoàng Quốc Khánh",
                shortName: "HQK",
                number: 24,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "175cm",
                reachHeight: "280cm",
                address: "Phú Thọ",
                born: "2004",
                age: 20,
                avatar: "assets/images/players/advanced/HoangQuocKhanh.webp",
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
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 24,
                name: "Hoàng Việt Anh",
                shortName: "HVA",
                number: 11,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "183cm",
                reachHeight: "317cm",
                address: "Hà Giang",
                born: "2007",
                age: 20,
                avatar: "assets/images/players/advanced/HoangVietAnh.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2025,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 25,
                name: "Phan Tiến Nam",
                shortName: "PTN",
                number: 19,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "181cm",
                reachHeight: "300cm",
                address: "Phú Thọ",
                born: "1999",
                age: 26,
                avatar: "assets/images/players/advanced/PhanTienNam.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2025,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            // {
            //     id: 26,
            //     name: "Nguyễn Thế Anh",
            //     shortName: "NTA",
            //     number: 20,
            //     position: "Outside Hitter",
            //     positionCode: "OH",
            //     height: "170cm",
            //     reachHeight: "295cm",
            //     address: "Vĩnh Phúc",
            //     born: "1997",
            //     age: 26,
            //     avatar: "assets/images/players/advanced/NguyenTheAnh.webp",
            //     country: "Vietnam",
            //     countryCode: "VN",
            //     flag: "🇻🇳",
            //     isCaptain: false,
            //     isViceCaptain: false,
            //     team: "advanced",
            //     status: "active",
            //     joinedYear: 2023,
            //     experience: 3,
            //     stats: {
            //         matches: 42,
            //         wins: 28,
            //         points: 287,
            //         aces: 34,
            //         blocks: 45,
            //         assists: 12
            //     }
            // },
            {
                id: 27,
                name: "Nguyễn Văn Thắng",
                shortName: "NVT",
                number: 9,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "172cm",
                reachHeight: "290cm",
                address: "Hà Nam",
                born: "1999",
                age: 26,
                avatar: "assets/images/players/advanced/NguyenVanThang.webp",
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
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 28,
                name: "Nguyễn Xuân Trường",
                shortName: "NXT",
                number: 29,
                position: "Libero",
                positionCode: "L",
                height: "160cm",
                reachHeight: "260cm",
                address: "Bắc Giang",
                born: "2006",
                age: 20,
                avatar: "assets/images/players/advanced/NguyenXuanTruong.webp",
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
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            // {
            //     id: 29,
            //     name: "Đặng Tuấn Anh",
            //     shortName: "DTA",
            //     number: 14,
            //     position: "Outside Hitter",
            //     positionCode: "OH",
            //     height: "175cm",
            //     reachHeight: "300cm",
            //     address: "Hưng Yên",
            //     born: "2005",
            //     age: 20,
            //     avatar: "assets/images/players/advanced/DangTuanAnh.webp",
            //     country: "Vietnam",
            //     countryCode: "VN",
            //     flag: "🇻🇳",
            //     isCaptain: false,
            //     isViceCaptain: false,
            //     team: "advanced",
            //     status: "active",
            //     joinedYear: 2025,
            //     experience: 3,
            //     stats: {
            //         matches: 42,
            //         wins: 28,
            //         points: 287,
            //         aces: 34,
            //         blocks: 45,
            //         assists: 12
            //     }
            // },
            {
                id: 30,
                name: "Trần Ngọc Lâm",
                shortName: "TNL",
                number: 21,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "188cm",
                reachHeight: "320cm",
                address: "Hà Nam",
                born: "2003",
                age: 22,
                avatar: "assets/images/players/advanced/TranNgocLam.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2025,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 31,
                name: "Đặng Đình Bảo Thanh",
                shortName: "DDBT",
                number: 14,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "178cm",
                reachHeight: "320cm",
                address: "Hà Tĩnh",
                born: "2007",
                age: 18,
                avatar: "assets/images/players/advanced/DangDinhBaoThanh.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2025,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 33,
                name: "Nguyễn Đình Quốc Khánh",
                shortName: "NDQK",
                number: 6,
                position: "Opposite Hitter",
                positionCode: "OP",
                height: "178cm",
                reachHeight: "310cm",
                address: "Thanh Hoá",
                born: "2007",
                age: 18,
                avatar: "assets/images/players/advanced/NguyenDinhQuocKhanh.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2025,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 32,
                name: "Nguyễn Ngọc Bảo",
                shortName: "NNB",
                number: 3,
                position: "Setter",
                positionCode: "S",
                height: "168cm",
                reachHeight: "270cm",
                address: "Yên Bái",
                born: "2001",
                age: 24,
                avatar: "assets/images/players/advanced/NguyenNgocBao.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 34,
                name: "Cao Minh Chiến",
                shortName: "CMC",
                number: 6,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "170cm",
                reachHeight: "310cm",
                address: "Nghệ An",
                born: "2000",
                age: 25,
                avatar: "assets/images/players/advanced/CaoMinhChien.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2025,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 34,
                name: "Trần Hoàng Khôi",
                shortName: "THK",
                number: 2,
                position: "Libero",
                positionCode: "L",
                height: "174cm",
                reachHeight: "285cm",
                address: "Nghệ An",
                born: "2006",
                age: 19,
                avatar: "assets/images/players/advanced/TranHoangKhoi.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2025,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 35,
                name: "Đoàn Nam Cường",
                shortName: "DNC",
                number: 97,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "180cm",
                reachHeight: "295cm",
                address: "Nam Định",
                born: "1997",
                age: 28,
                avatar: "assets/images/players/advanced/DoanNamCuong.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "advanced",
                status: "active",
                joinedYear: 2024,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            // {
            //     id: 36,
            //     name: "Hoàng Nam Giang",
            //     shortName: "HNG",
            //     number: 11,
            //     position: "Outside Hitter",
            //     positionCode: "OH",
            //     height: "178cm",
            //     reachHeight: "300cm",
            //     address: "Nghệ An",
            //     born: "1999",
            //     age: 28,
            //     avatar: "assets/images/players/advanced/HoangNamGiang.webp",
            //     country: "Vietnam",
            //     countryCode: "VN",
            //     flag: "🇻🇳",
            //     isCaptain: false,
            //     isViceCaptain: false,
            //     team: "advanced",
            //     status: "active",
            //     joinedYear: 2025,
            //     experience: 3,
            //     stats: {
            //         matches: 42,
            //         wins: 28,
            //         points: 287,
            //         aces: 34,
            //         blocks: 45,
            //         assists: 12
            //     }
            // }


        ],

        // Women Team
        women: [
            {
                id: 300,
                name: "Munkhbaatar Egshiglen",
                shortName: "RE",
                number: 1,
                position: "Libero",
                positionCode: "L",
                height: "169cm",
                reachHeight: "270cm",
                address: "Ulaanbaatar",
                born: "2007",
                age: 19,
                avatar: "assets/images/players/women/MunkhbaatarEgshiglen.webp",
                country: "Mongolia",
                countryCode: "MN",
                flag: "🇲🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "women",
                status: "active",
                joinedYear: 2025,
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
                id: 301,
                name: "Artiukh Lyubov",
                shortName: "ART",
                number: 4,
                position: "Outside Hitter",
                positionCode: "OH",
                height: "176cm",
                reachHeight: "280cm",
                address: "Moscow",
                born: "2006",
                age: 19,
                avatar: "assets/images/players/women/ArtiukhLyubov.webp",
                country: "Russia",
                countryCode: "RU",
                flag: "🇷🇺",
                isCaptain: false,
                isViceCaptain: false,
                team: "women",
                status: "active",
                joinedYear: 2025,
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
                id: 302,
                name: "Enkhtaivan Lkham",
                shortName: "EL",
                number: 17,
                position: "Middle Blocker",
                positionCode: "MB",
                height: "169cm",
                reachHeight: "250cm",
                address: "Ulaanbaatar",
                born: "2003",
                age: 22,
                avatar: "assets/images/players/women/EnkhtaivanLkham.webp",
                country: "Mongolia",
                countryCode: "MN",
                flag: "🇲🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "women",
                status: "active",
                joinedYear: 2025,
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
                id: 303,
                name: "Phạm Thị Đoan Trang",
                shortName: "PDTD",
                number: 16,
                position: "Libero",
                positionCode: "L",
                height: "150cm",
                reachHeight: "245cm",
                address: "Nghệ An",
                born: "2003",
                age: 21,
                avatar: "assets/images/players/women/PhamThiDoanTrang.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "women",
                status: "active",
                joinedYear: 2024,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 304,
                name: "Nguyễn Thị Quỳnh Như",
                shortName: "NTQN",
                number: 21,
                position: "Libero",
                positionCode: "L",
                height: "155cm",
                reachHeight: "250cm",
                address: "Quảng Bình",
                born: "2001",
                age: 22,
                avatar: "assets/images/players/women/NguyenThiQuynhNhu.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "women",
                status: "active",
                joinedYear: 2023,
                experience: 3,
                stats: {
                    matches: 42,
                    wins: 28,
                    points: 287,
                    aces: 34,
                    blocks: 45,
                    assists: 12
                }
            },
            {
                id: 305,
                name: "Hoàng Mai Hạnh",
                shortName: "HMH",
                number: 18,
                position: "Libero",
                positionCode: "L",
                height: "157cm",
                reachHeight: "245cm",
                address: "Hà Giang",
                born: "2006",
                age: 19,
                avatar: "assets/images/players/women/HoangMaiHanh.webp",
                country: "Vietnam",
                countryCode: "VN",
                flag: "🇻🇳",
                isCaptain: false,
                isViceCaptain: false,
                team: "women",
                status: "active",
                joinedYear: 2025,
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
        
        
        
    }, 100);

})(); // End of nuclear safe wrapper

// ===============================================
// 🔒 EXECUTION LOCK
// ===============================================

if (!window.dvaPlayersLoaded) {
    window.dvaPlayersLoaded = true;
    window.dvaPlayersVersion = '2.0.0';
    window.dvaPlayersLoadedAt = new Date().toISOString();
  
} else {
    
}

// End of file
