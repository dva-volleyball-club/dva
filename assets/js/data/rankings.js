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
                    { id: 1, name: "Yelzhas Dualatuly", avatar: "assets/images/players/advanced/Liuba.webp", number: 1, score: 98 },
                    { id: 8, name: "Phùng Kiến Quốc", avatar: "assets/images/players/advanced/YelzhasDualatuly.webp", number: 14, score: 95 },
                    { id: 35, name: "Lê Phương Nam", avatar: "assets/images/players/advanced/SarahMitchell.webp", number: 9, score: 92 },
                    { id: 37, name: "Nguyễn Khánh Huy", avatar: "assets/images/players/advanced/EmmaRodriguez.webp", number: 12, score: 89 },
                    { id: 39, name: "Artiukh Lyubov", avatar: "assets/images/players/advanced/AnnaKowalski.webp", number: 16, score: 86 }
                ],
                "Middle Blocker": [
                    { id: 3, name: "Trần Ngọc Lâm", avatar: "assets/images/players/advanced/JangWooheok.webp", number: 4, score: 97 },
                    { id: 4, name: "Hà Mạnh Hùng", avatar: "assets/images/players/middle/DuongVanDaii.webp", number: 20, score: 94 },
                    { id: 36, name: "Woohyeok Jang", avatar: "assets/images/players/advanced/MariaPetrova.webp", number: 8, score: 91 },
                    { id: 38, name: "Trần Tuấn Kiệt", avatar: "assets/images/players/advanced/YukiTanaka.webp", number: 15, score: 88 },
                    { id: 40, name: "Ali Nam Janjua", avatar: "assets/images/players/advanced/SophieLaurent.webp", number: 19, score: 85 }
                ],
                "Opposite Hitter": [
                    { id: 5, name: "Ngô Quang Huy", avatar: "assets/images/players/advanced/NeoJackson.webp", number: 6, score: 99 },
                    { id: 41, name: "Lê Minh Hoàng", avatar: "assets/images/players/advanced/IsabellaSantos.webp", number: 11, score: 94 },
                    { id: 42, name: "Nông Đức Trưởng", avatar: "assets/images/players/advanced/NatashaVolkov.webp", number: 18, score: 90 },
                    { id: 43, name: "Mai Hoàng Anh", avatar: "assets/images/players/advanced/ChloeThompson.webp", number: 21, score: 87 },
                    { id: 44, name: "Hoàng Quốc Khánh", avatar: "assets/images/players/advanced/ZaraAhmed.webp", number: 24, score: 84 }
                ],
                "Setter": [
                    { id: 6, name: "Trịnh Duy Đông", avatar: "assets/images/players/middle/HoangQuocDuy.webp", number: 29, score: 98 },
                    { id: 45, name: "Sami", avatar: "assets/images/players/advanced/ElenaPopovic.webp", number: 3, score: 95 },
                    { id: 46, name: "Hoàng Đình Trọng", avatar: "assets/images/players/advanced/MiaAndersson.webp", number: 7, score: 91 },
                    { id: 47, name: "Vì Văn Tài", avatar: "assets/images/players/advanced/LunaGarcia.webp", number: 13, score: 88 },
                    { id: 48, name: "Nguyễn Trọng Hiếu", avatar: "assets/images/players/advanced/JadeWilliams.webp", number: 17, score: 85 }
                ],
                "Libero": [
                    { id: 7, name: "Phạm Thị Thanh Bình", avatar: "assets/images/players/advanced/ThanhBinh.webp", number: 20, score: 99 },
                    { id: 49, name: "Nguyễn Xuân Trường", avatar: "assets/images/players/advanced/OliviaChen.webp", number: 5, score: 96 },
                    { id: 50, name: "Enkhtaivan Lkham", avatar: "assets/images/players/advanced/AriaNakamura.webp", number: 10, score: 92 },
                    { id: 51, name: "Egshiglen", avatar: "assets/images/players/advanced/AvaJohnson.webp", number: 14, score: 89 },
                    { id: 52, name: "Nguyễn Chấn Hiệp", avatar: "assets/images/players/advanced/GraceKim.webp", number: 22, score: 86 }
                ]
                
            }
        },
        advanced: {
            teamName: "Advanced Division",
            color: "#FF6B35",
            totalPlayers: 28,
            positions: {
                "Outside Hitter": [
                    { id: 3, name: "Đỗ Văn Đạt", avatar: "assets/images/players/middle/NguyenQuangHungg.webp", number: 9, score: 95 },
                    { id: 11, name: "Nguyễn Quang Hưng", avatar: "assets/images/players/middle/HaXuanQuann.webp", number: 27, score: 92 },
                    { id: 18, name: "Phan Tiến Nam", avatar: "assets/images/players/middle/NguyenHoangBao.webp", number: 18, score: 88 },
                    { id: 16, name: "Cao Minh Chiến", avatar: "assets/images/players/middle/LeQuangHuy.webp", number: 7, score: 85 },
                    { id: 27, name: "Bùi Tuấn Thành", avatar: "assets/images/players/middle/TranVanMinh.webp", number: 13, score: 82 }
                ],
                "Middle Blocker": [
                    { id: 10, name: "Nguyễn Văn Thắng", avatar: "assets/images/players/middle/NguyenDinhVu.webp", number: 24, score: 94 },
                    { id: 11, name: "Nguyễn Đình Vũ", avatar: "assets/images/players/middle/TranVanLong.webp", number: 12, score: 91 },
                    { id: 17, name: "Trần Ngọc Lâm", avatar: "assets/images/players/middle/DuongVanDaii.webp", number: 19, score: 87 },
                    { id: 18, name: "Nguyễn Đức Linh", avatar: "assets/images/players/middle/TranMinhTam.webp", number: 11, score: 84 },
                    { id: 25, name: "Nguyễn Minh Tuấn Anh", avatar: "assets/images/players/middle/VoThanhTung.webp", number: 8, score: 81 }
                ],
                "Opposite Hitter": [
                    { id: 12, name: "Bùi Ngọc Chiến", avatar: "assets/images/players/middle/NguyenThanhTrung.webp", number: 8, score: 93 },
                    { id: 19, name: "Nông Đức Trưởng", avatar: "assets/images/players/middle/VuThanhSon.webp", number: 16, score: 89 },
                    { id: 23, name: "Hà Xuân Quân", avatar: "assets/images/players/middle/HoangVanDuc.webp", number: 21, score: 86 },
                    { id: 29, name: "Dương Quang Khải", avatar: "assets/images/players/middle/LeCongMinh.webp", number: 14, score: 83 },
                    { id: 31, name: "Lại Đức Hạnh", avatar: "assets/images/players/middle/PhamQuangHuy.webp", number: 25, score: 80 }
                ],
                "Setter": [
                    { id: 13, name: "Hoàng Minh Hiếu", avatar: "assets/images/players/middle/LeMinhDuc.webp", number: 3, score: 96 },
                    { id: 20, name: "Hoàng Quốc Duy", avatar: "assets/images/players/middle/HoangVanKhoi.webp", number: 2, score: 92 },
                    { id: 26, name: "Trịnh Duy Đông", avatar: "assets/images/players/middle/NguyenMinhQuang.webp", number: 4, score: 88 },
                    { id: 30, name: "Nguyễn Ngọc Bảo", avatar: "assets/images/players/middle/TranDucAnh.webp", number: 22, score: 85 },
                    { id: 32, name: "Vì Văn Tài", avatar: "assets/images/players/middle/VuHoangLong.webp", number: 17, score: 82 }
                ],
                "Libero": [
                    { id: 14, name: "Nguyễn Tùng Dương", avatar: "assets/images/players/middle/PhamVanAn.webp", number: 5, score: 97 },
                    { id: 21, name: "Nguyễn Xuân Trường", avatar: "assets/images/players/middle/MinhHieu.webp", number: 15, score: 93 },
                    { id: 24, name: "Phạm Thị Thanh Bình", avatar: "assets/images/players/middle/LeThanhSon.webp", number: 6, score: 89 },
                    { id: 28, name: "Ngô Tùng Lâm", avatar: "assets/images/players/middle/NguyenXuanThanh.webp", number: 10, score: 86 },
                    { id: 33, name: "Hữu Lưu", avatar: "assets/images/players/middle/TranMinhTu.webp", number: 23, score: 83 }
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

    console.log('✅ Rankings data loaded:', {
        middle: Object.keys(rankingsData.middle.positions).length + ' positions',
        advanced: Object.keys(rankingsData.advanced.positions).length + ' positions'
    });
}
