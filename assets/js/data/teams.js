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
                    name: "Đồng Hữu Hiếu",
                    number: 9,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/DongHuuHieu.webp"
                },
                
                {
                    id: 100,
                    name: "Hoàng Việt Anh",
                    number: 25,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/HoangVietAnh.webp"
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
                // {
                //     id: 104,
                //     name: "Trần Ngọc Lâm",
                //     number: 20,
                //     position: "Middle Blocker",
                //     avatar: "assets/images/players/advanced/TranNgocLam.webp"
                // },
                // 1 OPPOSITE HITTER
                {
                    id: 5,
                    name: "Lê Hoàng Xuân",
                    number: 6,
                    position: "Opposite Hitter",
                    avatar: "assets/images/players/advanced/LeHoangXuan.webp"
                },
                {
                    id: 101,
                    name: "Bùi Ngọc Chiến",
                    number: 6,
                    position: "Opposite Hitter",
                    avatar: "assets/images/players/advanced/BuiNgocChien.webp"
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
                {
                    id: 102,
                    name: "Trịnh Duy Đông",
                    number: 29,
                    position: "Setter",
                    avatar: "assets/images/players/advanced/TrinhDuyDong.webp",
                },
                // 1 LIBERO
                {
                    id: 7,
                    name: "Nguyễn Tùng Dương",
                    number: 20,
                    position: "Libero",
                    avatar: "assets/images/players/advanced/NguyenTungDuong.webp",
                    isLibero: true
                },
                {
                    id: 103,
                    name: "Trần Hoàng Khôi",
                    number: 20,
                    position: "Libero",
                    avatar: "assets/images/players/advanced/TranHoangKhoi.webp",
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
                    name: "Đặng Đình Bảo Thanh",
                    number: 14,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/DangDinhBaoThanh.webp"
                },
                {
                    id: 9,
                    name: "Cao Minh Chiến",
                    number: 14,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/CaoMinhChien.webp"
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
                    name: "Trần Hoàng Khôi",    
                    number: 2,
                    position: "Libero",
                    avatar: "assets/images/players/advanced/TranHoangKhoi.webp",
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
                    name: "Đặng Tuấn Anh",
                    number: 7,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/DangTuanAnh.webp"
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
                    name: "Hà Xuân Quân",
                    number: 16,
                    position: "Opposite Hitter",
                    avatar: "assets/images/players/advanced/HaXuanQuan.webp"
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
                    name: "Nguyễn Xuân Trường",    
                    number: 5,
                    position: "Libero",
                    avatar: "assets/images/players/advanced/NguyenXuanTruong.webp",
                    isLibero: true
                }
            ]
        },
        teamD: {
            name: "Team D",
            rank: 4,
            description: "Development Division - Rising talents",
            color: "#10B981",
            formation: "5-1",
            players: [
                // 2 OUTSIDE HITTERS
                {
                    id: 15,
                    name: "Phạm Anh Quân",
                    number: 18,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/PhamAnhQuan.webp"
                },
                {
                    id: 16,
                    name: "Nguyễn Tiến Bảo Hưng",
                    number: 7,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/advanced/NguyenTienBaoHung.webp"
                },
                // 2 MIDDLE BLOCKERS
                {
                    id: 17,
                    name: "Trần Ngọc Lâm",
                    number: 19,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/advanced/TranNgocLam.webp" // Using existing
                },
                {
                    id: 18,
                    name: "Nguyễn Minh Tuấn Anh",
                    number: 11,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/advanced/NguyenMinhTuanAnh.webp"
                },
                // 1 OPPOSITE HITTER
                {
                    id: 19,
                    name: "Nguyễn Đình Quốc Khánh",
                    number: 16,
                    position: "Opposite Hitter",
                    avatar: "assets/images/players/advanced/NguyenDinhQuocKhanh.webp"
                },
                // 1 SETTER
                {
                    id: 20,
                    name: "Nguyễn Ngọc Bảo",
                    number: 2,
                    position: "Setter",
                    avatar: "assets/images/players/advanced/NguyenNgocBao.webp",
                    isCaptain: true
                },
                // 1 LIBERO
                {
                    id: 21,
                    name: "Nguyễn Thị Quỳnh Như",    
                    number: 5,
                    position: "Libero",
                    avatar: "assets/images/players/women/NguyenThiQuynhNhu.webp",
                    isLibero: true
                }
            ]
        },
        teamY: {
            name: "Team Young",
            rank: 5,
            description: "Development Division - Rising talents",
            color: "#cbcb1bff",
            formation: "5-1",
            players: [
                // 2 OUTSIDE HITTERS
                {
                    id: 15,
                    name: "Victor Le Thibert",
                    number: 11,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/middle/VictorLeThibert.webp"
                },
                {
                    id: 16,
                    name: "Yelzhas Dualatuly",
                    number: 18,
                    position: "Outside Hitter",
                    avatar: "assets/images/players/middle/YelzhasDualatuly.webp"
                },
                // 2 MIDDLE BLOCKERS
                {
                    id: 17,
                    name: "Woohyeok Jang",
                    number: 17,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/middle/WoohyeokJang.webp"
                },
                {
                    id: 18,
                    name: "Phùng Kiến Quốc",
                    number: 20,
                    position: "Middle Blocker",
                    avatar: "assets/images/players/middle/PhungKienQuoc.webp"
                },
                // 1 OPPOSITE HITTER
                {
                    id: 19,
                    name: "Mai Hoàng Anh",
                    number: 26,
                    position: "Opposite Hitter",
                    avatar: "assets/images/players/middle/MaiHoangAnh.webp"
                },
                {
                    id: 19,
                    name: "Seung Gi Lee",
                    number: 30,
                    position: "Opposite Hitter",
                    avatar: "assets/images/players/middle/SeungGiLee.webp"
                },
                // 1 SETTER
                {
                    id: 20,
                    name: "Hoàng Quốc Duy",
                    number: 2,
                    position: "Setter",
                    avatar: "assets/images/players/advanced/HoangQuocDuy.webp",
                    
                },
                {
                    id: 20,
                    name: "Sami Sam Janjua",
                    number: 3,
                    position: "Setter",
                    avatar: "assets/images/players/middle/SamiSamJanjua.webp",
                    
                },
                // 1 LIBERO
                {
                    id: 21,
                    name: "Đào Nhật Minh",    
                    number: 18,
                    position: "Libero",
                    avatar: "assets/images/players/middle/DaoNhatMinh.webp",
                    isLibero: true,
                    isCaptain: true
                }
            ]
        },
        
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
        middleLeader2:
            {
                id: 104,
                name: "Đào Nhật Minh",
                title: "DVA Middle Assistant Leader & Team Captain RGSV School",
                description: "Assistant leader of DVA Middle team and captain of RGSV School volleyball team, specializing in Outside Hitter position. Also can play other position. Hoping to gain experience.",
                avatar: "assets/images/players/middle/DaoNhatMinh.webp",
                achievements: [
                    "+4 years of experience in volleyball specializing in Libero position",
                    "RGSV School team captain",
                    "Libero & Outside Hitter"
                ],
                social: {
                    linkedin: "#",
                    facebook: "#",
                    email: "nhatminh@dva.volleyball"
                },
                specialty: "Outside Hitter",
                school: "RGSV School",
                role: "Assistant Leader & Captain"
            }
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


