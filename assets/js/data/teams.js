/**
 * DVA Volleyball Teams Database - SIMPLE CARD LAYOUT
 */

if (typeof window.teamsData === 'undefined') {
    const teamsData = {
        teamA: {
            name: "Team A",
            rank: 1,
            description: "Elite Division - Our strongest lineup", 
            color: "#FF6B35",
            formation: "6-2",
            players: [
                // 2 OUTSIDE HITTERS
                {
                    id: 1,
                    name: "Nguyễn Quang Hưng",
                    number: 9,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/NguyenQuangHung.webp"
                },
                {
                    id: 2,
                    name: "Bùi Ngọc Chiến",
                    number: 25,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/BuiNgocChien.webp"
                },
                // 2 MIDDLE BLOCKERS
                {
                    id: 3,
                    name: "Lê Hải Dương",
                    number: 4,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/advanced/LeHaiDuong.webp"
                },
                {
                    id: 4,
                    name: "Đỗ Xuân Đạt",
                    number: 20,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/advanced/DoXuanDat.webp"
                },
                // 1 OPPOSITE HITTER
                {
                    id: 5,
                    name: "Lê Hoàng Xuân",
                    number: 6,
                    position: "Opposite Hitter",
                    avatar: "assets/images/players/advanced/LeHoangXuan.webp"
                },
                // 1 SETTER
                {
                    id: 6,
                    name: "Hoàng Quốc Duy",
                    number: 29,
                    position: "Setter",
                    avatar: "assets/images/players/advanced/HoangQuocDuy.webp",
                    isCaptain: true
                },
                // 1 LIBERO
                {
                    id: 7,
                    name: "Nguyễn Tùng Dương",
                    number: 20,
                    position: "Libero",
                    avatar: "assets/images/players/advanced/NguyenTungDuong.webp",
                    isLibero: true
                }
            ]
        },
        teamB: {
            name: "Team B",
            rank: 2,
            description: "Professional Division - Strong competitive team",
            color: "#0066FF",
            formation: "5-1",
            players: [
                // 2 OUTSIDE HITTERS
                {
                    id: 8,
                    name: "Bùi Tuấn Thành",
                    number: 27,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/BuiTuanThanh.webp"
                },
                {
                    id: 9,
                    name: "Cao Minh Chiến",
                    number: 14,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/YelzhasDualatuly.webp"
                },
                // 2 MIDDLE BLOCKERS
                {
                    id: 10,
                    name: "Hoàng Quốc Khánh",
                    number: 24,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/advanced/HoangQuocKhanh.webp"
                },
                {
                    id: 11,
                    name: "Dương Quang Khải",
                    number: 12,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/advanced/DuongQuangKhai.webp"
                },
                // 1 OPPOSITE HITTER
                {
                    id: 12,
                    name: "Nông Đức Trưởng",
                    number: 8,
                    position: "Opposite Hitter",
                    avatar: "assets/images/players/advanced/NongDucTruong.webp"
                },
                // 1 SETTER
                {
                    id: 13,
                    name: "Trịnh Duy Đông",
                    number: 3,
                    position: "Setter",
                    avatar: "assets/images/players/advanced/TrinhDuyDong.webp",
                    isCaptain: true
                },
                // 1 LIBERO
                {
                    id: 14,
                    name: "Nguyễn Xuân Trường",    
                    number: 5,
                    position: "Libero",
                    avatar: "assets/images/players/advanced/NguyenXuanTruong.webp",
                    isLibero: true
                }
            ]
        },
        teamC: {
            name: "Team C",
            rank: 3,
            description: "Development Division - Rising talents",
            color: "#10B981",
            formation: "6-2",
            players: [
                // 2 OUTSIDE HITTERS
                {
                    id: 15,
                    name: "Phan Tiến Nam",
                    number: 18,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/PhanTienNam.webp"
                },
                {
                    id: 16,
                    name: "Nguyễn Thế Anh",
                    number: 7,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/NguyenTheAnh.webp"
                },
                // 2 MIDDLE BLOCKERS
                {
                    id: 17,
                    name: "Đoàn Nam Cường",
                    number: 19,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/advanced/DoanNamCuong.webp" // Using existing
                },
                {
                    id: 18,
                    name: "Nguyễn Văn Thắng",
                    number: 11,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/advanced/NguyenVanThang.webp"
                },
                // 1 OPPOSITE HITTER
                {
                    id: 19,
                    name: "Nguyễn Văn Lộc",
                    number: 16,
                    position: "Opposite Hitter",
                    avatar: "assets/images/players/advanced/NguyenVanLoc.webp"
                },
                // 1 SETTER
                {
                    id: 20,
                    name: "Hoàng Minh Hiếu",
                    number: 2,
                    position: "Setter",
                    avatar: "assets/images/players/advanced/HoangMinhHieu.webp",
                    isCaptain: true
                },
                // 1 LIBERO
                {
                    id: 21,
                    name: "Bùi Văn Sơn",
                    number: 15,
                    position: "Libero",
                    avatar: "assets/images/players/advanced/BuiVanSon.webp",
                    isLibero: true
                }
            ]
        }
    };

    window.teamsData = teamsData;
}

// LEADERSHIP DATA
if (typeof window.leadershipData === 'undefined') {
    const leadershipData = {
        founder: {
            id: 100,
            name: "Hoàng Quốc Duy",
            title: "Manager & Leader",
            description: "Vision to build a volleyball community in Hanoi area at many different levels",
            avatar: "assets/images/players/advanced/HoangQuocDuy.webp",
            achievements: [
                "3+ years in volleyball management",
                "Always toward the community", 
                "Sports development advocate"
            ],
            social: {
                linkedin: "#",
                facebook: "#",
                email: "quocduyhoang42@gmail.com"
            }
        },
        contentCreator: {
            id: 101,
            name: "Hoàng Minh Hiếu",
            title: "Content Creator & Setter",
            description: "5+ years volleyball experience with specialty in setter position and creative content development",
            avatar: "assets/images/players/advanced/HoangMinhHieu.webp",
            achievements: [
                "5+ years volleyball experience",
                "Setter position", 
                "Creative content developer",
                "Sports media creator"
            ],
            social: {
                linkedin: "#",
                facebook: "https://facebook.com/hoangminhhieu.dva",
                email: "Hieuhm01.19@gmail.com",
                youtube: "#"
            },
            specialty: "Setter Position",
            experience: "5+ years",
            role: "Content Creator & Player"
        },
    
        middleLeader: {
                id: 103,
                name: "Phùng Kiến Quốc",
                title: "DVA Middle Assistant Leader & Team Captain",
                description: "Assistant leader of DVA Middle team and captain of HORIZON High School volleyball team, specializing in Outside Hitter position",
                avatar: "assets/images/players/middle/PhungKienQuoc.webp",
                achievements: [
                    "DVA Middle assistant leader",
                    "HORIZON High School team captain",
                    "Outside Hitter",
                    "Youth team development leader"
                ],
                social: {
                    linkedin: "#",
                    facebook: "#",
                    email: "kienquoc@dva.volleyball"
                },
                specialty: "Outside Hitter",
                school: "HORIZON High School",
                role: "Assistant Leader & Captain"
            },
    };

    window.leadershipData = leadershipData;
}

// POSITION COLORS
if (typeof window.teamPositionColors === 'undefined') {
    const teamPositionColors = {
        'Setter': '#3B82F6',
        'Outside Hitter': '#EF4444',   
        'Middle Blocker': '#10B981',
        'Opposite Hitter': '#F59E0B',
        'Libero': '#8B5CF6'
    };

    window.teamPositionColors = teamPositionColors;
}

// FORMATION INFO
if (typeof window.formationInfo === 'undefined') {
    const formationInfo = {
        '6-2': 'Two setters with 6 attackers when setters are in back row',
        '5-1': 'One setter with 5 attackers - most common formation', 
        '4-2': 'Two setters always in front row with 4 attackers'
    };

    window.formationInfo = formationInfo;
}


