/**
 * DVA News Data
 * Path: D:\dva\DVA-Volleyball-Website\assets\js\data\news.js
 */

window.newsData = [
    {
        id: 1,
        title: "Friendly Match Volleyball",
        content: "Trận bóng giao hữu giữa 3 đội : DVA - VINUNI - HORIZON",
        image: "assets/images/news/Vin.jpg",
        date: "2025-10-12",
        time: "09:00",
        location: "Nhà K, VinUniversity",
        category: "Giao hữu",
        tags: ["championship", "volleyball", "victory", "tournament","friendly"],
        featured: true,
        author: "DVA Media Team",
        readTime: 3
    },
    {
        id: 2,
        title: "Khai Mạc Khóa Đào Tạo HLV Bóng Chuyền Cơ Bản",
        content: "DVA Volleyball Club chính thức khai mạc khóa đào tạo huấn luyện viên bóng chuyền cơ bản dành cho các thành viên muốn phát triển kỹ năng huấn luyện. Khóa học kéo dài 6 tuần với sự hướng dẫn của các HLV giàu kinh nghiệm. Nội dung bao gồm kỹ thuật cơ bản, chiến thuật, và phương pháp giảng dạy hiệu quả.",
        image: "assets/images/news/train22.jpg",
        date: "2025-10-25",
        time: "19:00",
        location: "Trung tâm đào tạo DVA",
        category: "Đào tạo",
        tags: ["training", "coach", "education", "skills"],
        featured: false,
        author: "HLV Minh Đức",
        readTime: 2
    },
    {
        id: 3,
        title: "Giải Đấu Giao Hữu DVA Open 2025 Chính Thức Khởi Tranh",
        content: "Với sự tham gia của hơn 24 đội bóng từ khắp Hà Nội và các tỉnh lân cận, giải đấu giao hữu DVA Open 2025 đã chính thức khởi tranh. Giải đấu diễn ra theo thể thức vòng tròn tính điểm, hứa hẹn mang đến những trận cầu hấp dẫn và cơ hội giao lưu học hỏi giữa các đội bóng.",
        image: "assets/images/news/an1.jpg",
        date: "2025-10-22",
        time: "08:00",
        location: "Nhà thi đấu Thông Tin, Hà Nội",
        category: "Giải đấu",
        tags: ["tournament", "friendly", "open", "competition"],
        featured: true,
        author: "Ban tổ chức DVA Open",
        readTime: 4
    },
    {
        id: 4,
        title: "Thành Viên Mới Tham Gia DVA - Chào Mừng Lớp Tân Binh",
        content: "DVA Volleyball Club vui mừng chào đón 15 thành viên mới gia nhập câu lạc bộ trong tháng 10. Các thành viên mới sẽ tham gia chương trình đào tạo cơ bản 4 tuần để làm quen với phong cách thi đấu và văn hóa của DVA. Chúng tôi tin rằng sự bổ sung này sẽ làm cho đại gia đình DVA thêm mạnh mẽ.",
        image: "assets/images/news/train1.jpg",
        date: "2025-10-20",
        time: "18:30",
        location: "Sân tập DVA",
        category: "Thành viên",
        tags: ["members", "welcome", "training", "newcomers"],
        featured: false,
        author: "DVA Membership Team",
        readTime: 2
    },
    {
        id: 5,
        title: "Cập Nhật Trang Thiết Bị Sân Tập Mới",
        content: "Nhằm nâng cao chất lượng tập luyện, DVA đã đầu tư cập nhật hệ thống lưới thi đấu chuyên nghiệp Mikasa và bóng thi đấu chính thức V200W. Ngoài ra, sân tập cũng được trang bị thêm hệ thống âm thanh hiện đại và đèn LED tiêu chuẩn quốc tế. Tất cả nhằm tạo điều kiện tốt nhất cho các thành viên rèn luyện.",
        image: "assets/images/news/event1.jpg",
        date: "2025-10-18",
        time: "16:00",
        location: "Sân tập DVA",
        category: "Cơ sở vật chất",
        tags: ["equipment", "upgrade", "facility", "improvement"],
        featured: false,
        author: "DVA Facilities Team",
        readTime: 3
    },
    {
        id: 6,
        title: "Tournament FCB OPEN CUP",
        content: "Kéo dài 1 ngày tập trung vào các kỹ thuật spike hiện đại, cách đọc block đối phương và tối ưu hóa sức mạnh tấn công. Đây là cơ hội quý báu để các thành viên nâng cao trình độ chuyên môn.",
        image: "assets/images/news/cham1.jpg",
        date: "2025-10-15",
        time: "09:00",
        location: "Nhà thi đấu Thông Tin",
        category: "Workshop",
        tags: ["workshop", "spike", "technique", "national-coach"],
        featured: true,
        author: "HLV Nguyễn Thành Long",
        readTime: 5
    }
];

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { newsData: window.newsData };
}

console.log('📰 DVA News Data loaded successfully');
