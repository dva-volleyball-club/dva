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
                    avatar: "assets/images/players/middle/NguyenQuangHungg.webp"
                },
                {
                    id: 2,
                    name: "Phùng Trung Diễn",
                    number: 25,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/Liuba.webp"
                },
                // 2 MIDDLE BLOCKERS
                {
                    id: 3,
                    name: "Lê Hải Dương",
                    number: 4,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/advanced/JangWooheok.webp"
                },
                {
                    id: 4,
                    name: "Đỗ Văn Đạt",
                    number: 20,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/middle/DuongVanDaii.webp"
                },
                // 1 OPPOSITE HITTER
                {
                    id: 5,
                    name: "Bùi Ngọc Chiến",
                    number: 6,
                    position: "Opposite Hitter",
                    avatar: "assets/images/players/advanced/NeoJackson.webp"
                },
                // 1 SETTER
                {
                    id: 6,
                    name: "Hoàng Quốc Duy",
                    number: 29,
                    position: "Setter",
                    avatar: "assets/images/players/middle/HoangQuocDuy.webp",
                    isCaptain: true
                },
                // 1 LIBERO
                {
                    id: 7,
                    name: "Nguyễn Tùng Dương",
                    number: 20,
                    position: "Libero",
                    avatar: "assets/images/players/advanced/ThanhBinh.webp",
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
                    avatar: "assets/images/players/middle/HaXuanQuann.webp"
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
                    avatar: "assets/images/players/middle/HoangQuocKhanh.webp"
                },
                {
                    id: 11,
                    name: "Dương Quang Khải",
                    number: 12,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/middle/DuongQuangKhai.webp"
                },
                // 1 OPPOSITE HITTER
                {
                    id: 12,
                    name: "Nông Đức Trưởng",
                    number: 8,
                    position: "Opposite Hitter",
                    avatar: "assets/images/players/middle/NongDucTruong.webp"
                },
                // 1 SETTER
                {
                    id: 13,
                    name: "Trịnh Duy Đông",
                    number: 3,
                    position: "Setter",
                    avatar: "assets/images/players/middle/LeMinhDuc.webp",
                    isCaptain: true
                },
                // 1 LIBERO
                {
                    id: 14,
                    name: "Nguyễn Xuân Trường",    
                    number: 5,
                    position: "Libero",
                    avatar: "assets/images/players/middle/PhamVanAn.webp",
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
                    avatar: "assets/images/players/middle/PhanTienNam.webp"
                },
                {
                    id: 16,
                    name: "Nguyễn Thế Anh",
                    number: 7,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/middle/NguyenTheAnh.webp"
                },
                // 2 MIDDLE BLOCKERS
                {
                    id: 17,
                    name: "Đoàn Nam Cường",
                    number: 19,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/middle/DuongVanDaii.webp" // Using existing
                },
                {
                    id: 18,
                    name: "Nguyễn Văn Thắng",
                    number: 11,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/middle/TranMinhTam.webp"
                },
                // 1 OPPOSITE HITTER
                {
                    id: 19,
                    name: "Nguyễn Văn Lộc",
                    number: 16,
                    position: "Opposite Hitter",
                    avatar: "assets/images/players/middle/VuThanhSon.webp"
                },
                // 1 SETTER
                {
                    id: 20,
                    name: "Hoàng Minh Hiếu",
                    number: 2,
                    position: "Setter",
                    avatar: "assets/images/players/middle/HoangVanKhoi.webp",
                    isCaptain: true
                },
                // 1 LIBERO
                {
                    id: 21,
                    name: "Bùi Văn Sơn",
                    number: 15,
                    position: "Libero",
                    avatar: "assets/images/players/middle/MinhHieu.webp",
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
            avatar: "data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2260%22%20fill%3D%22%23FF6B35%22/%3E%3Ctext%20x%3D%2260%22%20y%3D%2270%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2224%22%20font-weight%3D%22bold%22%3ENVĐ%3C/text%3E%3C/svg%3E",
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
            title: "Content Creator & Setter Specialist",
            description: "5+ years volleyball experience with specialty in setter position and creative content development",
            avatar: "data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2260%22%20fill%3D%22%23FF6B35%22/%3E%3Ctext%20x%3D%2260%22%20y%3D%2265%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2218%22%20font-weight%3D%22bold%22%3EHMH%3C/text%3E%3Ctext%20x%3D%2260%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2210%22%3ESETTER%3C/text%3E%3C/svg%3E",
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
                avatar: "data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2260%22%20fill%3D%22%230066FF%22/%3E%3Ctext%20x%3D%2260%22%20y%3D%2265%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2218%22%20font-weight%3D%22bold%22%3EPKQ%3C/text%3E%3Ctext%20x%3D%2260%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%229%22%3EOUT-HIT%3C/text%3E%3C/svg%3E",
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

console.log('✅ Simple teams data loaded successfully:', {
    teams: Object.keys(window.teamsData).length,
    leadership: Object.keys(window.leadershipData).length
});
