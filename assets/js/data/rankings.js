/**
 * DVA Volleyball Rankings Database - BEST PLAYERS BY POSITION
 */

if (typeof window.rankingsData === 'undefined') {
    const rankingsData = {
        middle: {
            teamName: "Middle Division",
            color: "#0066FF",
            totalPlayers: 35,
            positions: {
                "Outside Hitter": [
                    { id: 1, name: "Victor Le Thibert", avatar: "assets/images/players/middle/VictorLeThibert.webp", number: 1, score: 98 },
                    { id: 8, name: "Yelzhas Dualatuly", avatar: "assets/images/players/middle/YelzhasDualatuly.webp", number: 14, score: 95 },
                    { id: 35, name: "Artiukh Lyubov", avatar: "assets/images/players/women/ArtiukhLyubov.webp", number: 9, score: 92 },
                    { id: 37, name: "Phùng Kiến Quốc", avatar: "assets/images/players/middle/PhungKienQuoc.webp", number: 12, score: 89 },
                    { id: 39, name: "Thái Hoàng Quân", avatar: "assets/images/players/middle/ThaiHoangQuan.webp", number: 16, score: 86 }
                ],
                "Middle Blocker": [
                    { id: 3, name: "Nông Văn Thuận", avatar: "assets/images/players/middle/NongVanThuan.webp", number: 4, score: 97 },
                    { id: 4, name: "Ali Janjua", avatar: "assets/images/players/middle/AliJanjua.webp", number: 20, score: 94 },
                    { id: 36, name: "Woohyeok Jang", avatar: "assets/images/players/middle/WoohyeokJang.webp", number: 8, score: 91 },
                    { id: 38, name: "Trần Tuấn Kiệt", avatar: "assets/images/players/middle/TranTuanKiet.webp", number: 15, score: 88 },
                    { id: 40, name: "Nguyễn Quang Minh", avatar: "assets/images/players/middle/NguyenQuangMinh.webp", number: 19, score: 85 }
                ],
                "Opposite Hitter": [
                    { id: 5, name: "Ngô Lý Quang Huy", avatar: "assets/images/players/middle/NgoLyQuangHuy.webp", number: 6, score: 99 },
                    { id: 41, name: "Hà Xuân Quân", avatar: "assets/images/players/advanced/HaXuanQuan.webp", number: 11, score: 94 },
                    { id: 42, name: "Mai Hoàng Anh", avatar: "assets/images/players/middle/MaiHoangAnh.webp", number: 18, score: 90 },
                    { id: 43, name: "Neo Jackson", avatar: "assets/images/players/middle/NeoJacksonManjunathan.webp", number: 21, score: 87 }
                ],
                "Setter": [
                    { id: 6, name: "Trịnh Duy Đông", avatar: "assets/images/players/advanced/TrinhDuyDong.webp", number: 29, score: 98 },
                    { id: 45, name: "Sami Sam Janjua", avatar: "assets/images/players/middle/SamiSamJanjua.webp", number: 3, score: 95 },
                    { id: 46, name: "Hoàng Đình Trọng", avatar: "assets/images/players/middle/HoangDinhTrong.webp", number: 7, score: 91 },
                    { id: 47, name: "Vì Văn Tài", avatar: "assets/images/players/middle/ViVanTai.webp", number: 13, score: 88 },
                    { id: 48, name: "Hoàng Quốc Duy", avatar: "assets/images/players/advanced/HoangQuocDuy.webp", number: 17, score: 85 }
                ],
                "Libero": [
                    { id: 49, name: "Nguyễn Xuân Trường", avatar: "assets/images/players/advanced/NguyenXuanTruong.webp", number: 5, score: 96 },
                    { id: 50, name: "Egshiglen Munkhbaatar", avatar: "assets/images/players/women/MunkhbaatarEgshiglen.webp", number: 10, score: 92 }
                ]
                
            }
        },
        advanced: {
            teamName: "Advanced Division",
            color: "#FF6B35",
            totalPlayers: 28,
            positions: {
                "Outside Hitter": [
                    { id: 3, name: "Đỗ Xuân Đạt", avatar: "assets/images/players/advanced/DoXuanDat.webp", number: 9, score: 95 },
                    { id: 29, name: "Hoàng Việt Anh", avatar: "assets/images/players/advanced/HoangVietAnh.webp", number: 9, score: 95 },
                    { id: 11, name: "Nguyễn Quang Hưng", avatar: "assets/images/players/advanced/NguyenQuangHung.webp", number: 27, score: 92 },
                    { id: 18, name: "Đặng Đình Bảo Thanh", avatar: "assets/images/players/advanced/DangDinhBaoThanh.webp", number: 18, score: 88 },
                    { id: 16, name: "Cao Minh Chiến", avatar: "assets/images/players/advanced/CaoMinhChien.webp", number: 7, score: 85 },
                    { id: 27, name: "Bùi Tuấn Thành", avatar: "assets/images/players/advanced/BuiTuanThanh.webp", number: 13, score: 82 }
                ],
                "Middle Blocker": [
                    { id: 10, name: "Nguyễn Văn Thắng", avatar: "assets/images/players/advanced/NguyenVanThang.webp", number: 24, score: 94 },
                    { id: 11, name: "Đoàn Nam Cường", avatar: "assets/images/players/advanced/DoanNamCuong.webp", number: 12, score: 91 },
                    { id: 17, name: "Trần Ngọc Lâm", avatar: "assets/images/players/advanced/TranNgocLam.webp", number: 19, score: 87 },
                    { id: 18, name: "Nguyễn Đình Vũ", avatar: "assets/images/players/advanced/NguyenDinhVu.webp", number: 11, score: 84 },
                    { id: 25, name: "Nguyễn Minh Tuấn Anh", avatar: "assets/images/players/advanced/NguyenMinhTuanAnh.webp", number: 8, score: 81 }
                ],
                "Opposite Hitter": [
                    { id: 12, name: "Bùi Ngọc Chiến", avatar: "assets/images/players/advanced/BuiNgocChien.webp", number: 8, score: 93 },
                    { id: 19, name: "Nông Đức Trưởng", avatar: "assets/images/players/advanced/NongDucTruong.webp", number: 16, score: 89 },
                    { id: 23, name: "Lê Hoàng Xuân", avatar: "assets/images/players/advanced/LeHoangXuan.webp", number: 21, score: 86 },
                    { id: 29, name: "Hà Xuân Quân", avatar: "assets/images/players/advanced/HaXuanQuan.webp", number: 14, score: 83 },
                    { id: 31, name: "Nguyễn Đình Quốc Khánh", avatar: "assets/images/players/advanced/NguyenDinhQuocKhanh.webp", number: 25, score: 80 }
                ],
                "Setter": [
                    { id: 13, name: "Hoàng Minh Hiếu", avatar: "assets/images/players/advanced/HoangMinhHieu.webp", number: 3, score: 96 },
                    { id: 20, name: "Hoàng Quốc Duy", avatar: "assets/images/players/advanced/HoangQuocDuy.webp", number: 2, score: 92 },
                    { id: 26, name: "Trịnh Duy Đông", avatar: "assets/images/players/advanced/TrinhDuyDong.webp", number: 4, score: 88 },
                    { id: 30, name: "Nguyễn Ngọc Bảo", avatar: "assets/images/players/advanced/NguyenNgocBao.webp", number: 22, score: 85 }
                ],
                "Libero": [
                    { id: 14, name: "Nguyễn Tùng Dương", avatar: "assets/images/players/advanced/NguyenTungDuong.webp", number: 5, score: 97 },
                    { id: 21, name: "Nguyễn Xuân Trường", avatar: "assets/images/players/advanced/NguyenXuanTruong.webp", number: 15, score: 93 },
                    { id: 24, name: "Trần Hoàng Khôi", avatar: "assets/images/players/advanced/TranHoangKhoi.webp", number: 6, score: 89 }
                ]
                
            }
        }
    };

    // Position colors for consistency
    const positionColors = {
        'Outside Hitter': '#EF4444',   
        'Middle Blocker': '#10B981',
        'Opposite Hitter': '#F59E0B',
        'Setter': '#3B82F6',
        'Libero': '#8B5CF6'
    };

    window.rankingsData = rankingsData;
    window.rankingPositionColors = positionColors;

    
}
