/**
 * DVA Services Module - INJECT HTML DIRECTLY (FIXED VERSION)
 * Path: D:\dva\DVA-Volleyball-Website\assets\js\modules\services.js
 */

// PREVENT DUPLICATE CLASS DECLARATIONS
if (typeof window.ServicesModule === 'undefined') {
    
    class ServicesModule {
        constructor() {
            this.isInitialized = false;
            
            console.log('🏐 DVA Services Module initializing...');
            this.init();
        }

        async init() {
            try {
                console.log('🚀 Injecting Services HTML directly...');
                
                // ✅ INJECT HTML DIRECTLY INTO MAIN CONTENT
                this.injectServicesHTML();
                
                // Initialize after HTML injection
                setTimeout(() => {
                    this.bindEvents();
                    this.initializeAnimations();
                    this.isInitialized = true;
                    console.log('✅ Services Module initialized successfully');
                }, 500);
                
            } catch (error) {
                console.error('❌ Services Module initialization failed:', error);
            }
        }

        // ✅ INJECT COMPLETE HTML DIRECTLY
        injectServicesHTML() {
            const mainContent = document.getElementById('main-content');
            if (!mainContent) {
                console.error('❌ Main content container not found');
                return;
            }

            const servicesHTML = `
            <div class="dva-services">
                <!-- Hero Section -->
                <section class="services-hero">
                    <div class="hero-content">
                        <h1 class="hero-title">🏐 DVA Volleyball Services</h1>
                        <p class="hero-subtitle">
                            Cho thuê sân bóng chuyền chuyên nghiệp với đầy đủ tiện nghi hiện đại
                        </p>
                        <div class="hero-highlights">
                            <span class="highlight-badge">⭐ Sân Indoor Chuyên Nghiệp</span>
                            <span class="highlight-badge">🏐 Mikasa V200W</span>
                            <span class="highlight-badge">🛡️ An Ninh 24/7</span>
                        </div>
                    </div>
                </section>

                <div class="services-container">
                    <!-- Court Information Section -->
                    <section class="court-info-section">
                        <div class="section-header">
                            <h2 class="section-title">🏐 Thông Tin Sân Bóng Chuyền</h2>
                            <p class="section-subtitle">Sân indoor chuyên nghiệp với đầy đủ trang thiết bị</p>
                        </div>
                        
                        <div class="court-overview">
                            <div class="court-gallery">
                                <div class="gallery-main">
                                    <img src="assets/images/services/court-main.jpg" alt="Sân bóng chuyền DVA" 
                                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                    <div class="image-placeholder" style="display: none;">
                                        <div class="placeholder-content">
                                            <span class="placeholder-icon">🏐</span>
                                            <span class="placeholder-text">Sân Bóng Chuyền Chính</span>
                                            <small>Ảnh sẽ được cập nhật</small>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="gallery-grid">
                                    <div class="gallery-item">
                                        <img src="assets/images/services/mikasa-ball.jpg" alt="Bóng Mikasa V200W"
                                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                        <div class="image-placeholder" style="display: none;">
                                            <span class="placeholder-icon">🏐</span>
                                            <span class="placeholder-text">Mikasa V200W</span>
                                        </div>
                                    </div>
                                    
                                    <div class="gallery-item">
                                        <img src="assets/images/services/court-side.jpg" alt="Góc nhìn sân"
                                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                        <div class="image-placeholder" style="display: none;">
                                            <span class="placeholder-icon">📸</span>
                                            <span class="placeholder-text">Góc Nhìn Sân</span>
                                        </div>
                                    </div>
                                    
                                    <div class="gallery-item">
                                        <img src="assets/images/services/security.jpg" alt="Khu vực an ninh"
                                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                        <div class="image-placeholder" style="display: none;">
                                            <span class="placeholder-icon">🛡️</span>
                                            <span class="placeholder-text">An Ninh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="court-details">
                                <div class="court-features">
                                    <div class="feature-item">
                                        <span class="feature-icon">🏐</span>
                                        <div class="feature-content">
                                            <h3>Sân Indoor Chuyên Nghiệp</h3>
                                            <p>Sân bóng chuyền trong nhà với nền cao su chuyên dụng</p>
                                        </div>
                                    </div>
                                    
                                    <div class="feature-item">
                                        <span class="feature-icon">⭐</span>
                                        <div class="feature-content">
                                            <h3>2 Quả Bóng Mikasa V200W</h3>
                                            <p>Bóng thi đấu chính thức FIVB, chất lượng quốc tế</p>
                                        </div>
                                    </div>
                                    
                                    <div class="feature-item">
                                        <span class="feature-icon">🛡️</span>
                                        <div class="feature-content">
                                            <h3>Khuôn Viên Quân Đội</h3>
                                            <p>Đảm bảo an ninh tuyệt đối 24/7</p>
                                        </div>
                                    </div>
                                    
                                    <div class="feature-item">
                                        <span class="feature-icon">📍</span>
                                        <div class="feature-content">
                                            <h3>Địa Chỉ: 155 Trường Chinh</h3>
                                            <p>Vị trí thuận lợi, dễ dàng di chuyển</p>
                                        </div>
                                    </div>
                                    
                                    <div class="feature-item">
                                        <span class="feature-icon">🎯</span>
                                        <div class="feature-content">
                                            <h3>Setter Care</h3>
                                            <p>Hỗ trợ 1 Setter chuyên nghiệp khi cần thiết</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Pricing Section -->
                    <section class="pricing-section">
                        <div class="section-header">
                            <h2 class="section-title">💰 Bảng Giá & Gói Dịch Vụ</h2>
                            <p class="section-subtitle">Giá cả hợp lý với nhiều ưu đãi hấp dẫn</p>
                        </div>
                        
                        <div class="pricing-grid">
                            <!-- Hourly Rate -->
                            <div class="pricing-card featured">
                                <div class="pricing-header">
                                    <div class="pricing-icon">⏰</div>
                                    <h3 class="pricing-title">Thuê Theo Giờ</h3>
                                    <div class="pricing-badge">Phổ Biến</div>
                                </div>
                                
                                <div class="pricing-amount">
                                    <span class="price">550.000</span>
                                    <span class="currency">VNĐ</span>
                                    <span class="unit">/ giờ</span>
                                </div>
                                
                                <ul class="pricing-features">
                                    <li>🏐 Sân indoor chuyên nghiệp</li>
                                    <li>⭐ 2 quả bóng Mikasa V200W</li>
                                    <li>💡 Hệ thống chiếu sáng LED</li>
                                    <li>🛡️ Bảo vệ an ninh 24/7</li>
                                    <li>🚿 Phòng thay đồ & tắm</li>
                                    <li>💧 Nước uống miễn phí</li>
                                </ul>
                                
                                <button class="pricing-btn primary" data-action="booking">
                                    📞 Đặt Sân Ngay
                                </button>
                            </div>

                            <!-- Monthly Rate -->
                            <div class="pricing-card">
                                <div class="pricing-header">
                                    <div class="pricing-icon">📅</div>
                                    <h3 class="pricing-title">Thuê Theo Tháng</h3>
                                    <div class="pricing-discount">Tiết kiệm 20%</div>
                                </div>
                                
                                <div class="pricing-amount">
                                    <span class="price">12.000.000</span>
                                    <span class="currency">VNĐ</span>
                                    <span class="unit">/ tháng</span>
                                </div>
                                
                                <ul class="pricing-features">
                                    <li>✅ Tất cả ưu đãi gói theo giờ</li>
                                    <li>🎯 Setter care miễn phí</li>
                                    <li>⚡ Ưu tiên đặt lịch</li>
                                    <li>💰 Giảm giá 20% so với thuê lẻ</li>
                                    <li>🏆 Tư vấn kỹ thuật chuyên nghiệp</li>
                                    <li>🎪 Tổ chức giải đấu nội bộ</li>
                                </ul>
                                
                                <button class="pricing-btn secondary" data-action="consultation">
                                    💬 Tư Vấn Chi Tiết
                                </button>
                            </div>

                            <!-- Event Package -->
                            <div class="pricing-card premium">
                                <div class="pricing-header">
                                    <div class="pricing-icon">🏆</div>
                                    <h3 class="pricing-title">Gói Sự Kiện</h3>
                                    <div class="pricing-special">Chủ Nhật</div>
                                </div>
                                
                                <div class="pricing-amount">
                                    <span class="price-text">Liên Hệ</span>
                                    <span class="unit">/ sự kiện</span>
                                </div>
                                
                                <ul class="pricing-features">
                                    <li>🏐 2 sân liền kề cả ngày Chủ Nhật</li>
                                    <li>🎵 Hệ thống âm thanh chuyên nghiệp</li>
                                    <li>🪑 Bàn ghế cho khán giả</li>
                                    <li>👨‍⚖️ Trọng tài chuyên nghiệp</li>
                                    <li>📹 Quay phim - chụp ảnh</li>
                                    <li>🏆 Tổ chức lễ trao giải</li>
                                </ul>
                                
                                <button class="pricing-btn premium-btn" data-action="event">
                                    🎪 Tổ Chức Sự Kiện
                                </button>
                            </div>
                        </div>
                    </section>

                    <!-- Schedule Section -->
                    <section class="schedule-section">
                        <div class="section-header">
                            <h2 class="section-title">📅 Lịch Sân Có Sẵn</h2>
                            <p class="section-subtitle">Khung giờ hoạt động trong tuần</p>
                        </div>
                        
                        <div class="schedule-grid">
                            <div class="schedule-card">
                                <div class="schedule-header">
                                    <div class="schedule-icon">🗓️</div>
                                    <div class="schedule-days">Thứ 2, 4, 7</div>
                                </div>
                                <div class="schedule-time">19:00 - 21:30</div>
                                <div class="schedule-status available">✅ Có sẵn</div>
                                <div class="schedule-note">Tối trong tuần</div>
                            </div>
                            
                            <div class="schedule-card">
                                <div class="schedule-header">
                                    <div class="schedule-icon">📅</div>
                                    <div class="schedule-days">Thứ 6</div>
                                </div>
                                <div class="schedule-time">18:00 - 19:30</div>
                                <div class="schedule-status available">✅ Có sẵn</div>
                                <div class="schedule-note">Chiều tối thứ 6</div>
                            </div>
                            
                            <div class="schedule-card">
                                <div class="schedule-header">
                                    <div class="schedule-icon">🌅</div>
                                    <div class="schedule-days">Chủ Nhật</div>
                                </div>
                                <div class="schedule-time">16:00 - 19:00</div>
                                <div class="schedule-status available">✅ Có sẵn</div>
                                <div class="schedule-note">Chiều Chủ Nhật</div>
                            </div>
                            
                            <div class="schedule-card">
                                <div class="schedule-header">
                                    <div class="schedule-icon">☀️</div>
                                    <div class="schedule-days">Thứ 7</div>
                                </div>
                                <div class="schedule-time">12:00 - 16:00</div>
                                <div class="schedule-status available">✅ Có sẵn</div>
                                <div class="schedule-note">Trưa thứ 7</div>
                            </div>
                        </div>
                        
                        <div class="schedule-notice">
                            <div class="notice-icon">⚠️</div>
                            <div class="notice-content">
                                <h4>Lưu Ý Quan Trọng</h4>
                                <p>Vui lòng đặt sân trước <strong>1-2 ngày</strong> để đảm bảo có chỗ</p>
                            </div>
                        </div>
                    </section>

                    <!-- Contact Section -->
                    <section class="contact-section">
                        <div class="section-header">
                            <h2 class="section-title">📞 Liên Hệ Đặt Sân</h2>
                            <p class="section-subtitle">Liên hệ ngay với Quốc Duy để đặt sân và nhận tư vấn</p>
                        </div>
                        
                        <div class="contact-content">
                            <div class="contact-info">
                                <div class="contact-card main">
                                    <div class="contact-avatar">
                                        <img src="assets/images/contact/quoc-duy.jpg" alt="Quốc Duy"
                                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                        <div class="avatar-placeholder" style="display: none;">
                                            <span>QD</span>
                                        </div>
                                    </div>
                                    <div class="contact-details">
                                        <h3>Quốc Duy</h3>
                                        <p>Quản lý sân bóng chuyền</p>
                                        <div class="contact-phone">
                                            <span class="phone-icon">📱</span>
                                            <span class="phone-number">0768 299 329</span>
                                            <span class="phone-label">(Zalo)</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="contact-buttons">
                                    <button class="contact-btn phone" data-contact="phone">
                                        <span class="btn-icon">📞</span>
                                        <span class="btn-text">Gọi Ngay</span>
                                    </button>
                                    
                                    <button class="contact-btn zalo" data-contact="zalo">
                                        <span class="btn-icon">💬</span>
                                        <span class="btn-text">Chat Zalo</span>
                                    </button>
                                    
                                    <button class="contact-btn facebook" data-contact="facebook">
                                        <span class="btn-icon">📘</span>
                                        <span class="btn-text">Facebook</span>
                                    </button>
                                    
                                    <button class="contact-btn instagram" data-contact="instagram">
                                        <span class="btn-icon">📸</span>
                                        <span class="btn-text">Instagram</span>
                                    </button>
                                </div>
                            </div>
                            
                            <div class="location-info">
                                <div class="location-card">
                                    <div class="location-header">
                                        <span class="location-icon">📍</span>
                                        <h4>Địa Chỉ Sân</h4>
                                    </div>
                                    <p class="location-address">155 Trường Chinh</p>
                                    <p class="location-note">Khuôn viên quân đội - An ninh tuyệt đối</p>
                                </div>
                                
                                <div class="hours-card">
                                    <div class="hours-header">
                                        <span class="hours-icon">🕐</span>
                                        <h4>Giờ Phục Vụ</h4>
                                    </div>
                                    <p class="hours-time">6:00 - 22:00</p>
                                    <p class="hours-note">Hàng ngày trong tuần</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Booking CTA -->
                    <section class="booking-cta">
                        <div class="cta-content">
                            <div class="cta-text">
                                <h2>🚀 Sẵn Sàng Đặt Sân?</h2>
                                <p>Đừng chờ đợi! Liên hệ ngay để đảm bảo có chỗ cho đội của bạn</p>
                                <p><strong>Sân DVA</strong> - Nơi đam mê bóng chuyền được thăng hoa!</p>
                            </div>
                            <div class="cta-actions">
                                <button class="cta-btn primary" data-action="booking">
                                    <span class="btn-icon">🏐</span>
                                    <span class="btn-text">Đặt Sân Ngay</span>
                                </button>
                                <button class="cta-btn secondary" data-action="consultation">
                                    <span class="btn-icon">💬</span>
                                    <span class="btn-text">Tư Vấn Miễn Phí</span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            `;

            mainContent.innerHTML = servicesHTML;
            console.log('✅ Services HTML injected successfully');
        }

        bindEvents() {
            console.log('🔗 Binding services events...');

            // Add delay to ensure DOM is ready
            setTimeout(() => {
                this.bindContactButtons();
                this.bindBookingButtons();
                this.bindActionButtons();
                this.bindScheduleCards();
            }, 100);
        }

        bindContactButtons() {
            const contactBtns = document.querySelectorAll('.contact-btn[data-contact]');
            console.log(`📞 Found ${contactBtns.length} contact buttons`);
            
            contactBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const contactType = btn.getAttribute('data-contact');
                    this.handleContact(contactType);
                });
            });
        }

        bindBookingButtons() {
            const bookingBtns = document.querySelectorAll('[data-action="booking"]');
            console.log(`🏐 Found ${bookingBtns.length} booking buttons`);
            
            bookingBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleBooking();
                });
            });
        }

        bindActionButtons() {
            const consultationBtns = document.querySelectorAll('[data-action="consultation"]');
            const eventBtns = document.querySelectorAll('[data-action="event"]');
            
            console.log(`💬 Found ${consultationBtns.length} consultation buttons`);
            console.log(`🎪 Found ${eventBtns.length} event buttons`);
            
            consultationBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleConsultation();
                });
            });
            
            eventBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleEventBooking();
                });
            });
        }

        bindScheduleCards() {
            const scheduleCards = document.querySelectorAll('.schedule-card');
            console.log(`📅 Found ${scheduleCards.length} schedule cards`);
            
            scheduleCards.forEach(card => {
                card.addEventListener('click', () => {
                    const days = card.querySelector('.schedule-days')?.textContent || '';
                    const time = card.querySelector('.schedule-time')?.textContent || '';
                    this.handleScheduleBooking(days, time);
                });
            });
        }

        // Contact handlers
        handleContact(contactType) {
            console.log('📞 Handling contact:', contactType);
            
            const contactActions = {
                phone: {
                    action: () => window.open('tel:0768299329'),
                    message: '📞 Đang gọi Quốc Duy...'
                },
                zalo: {
                    action: () => window.open('https://zalo.me/0768299329'),
                    message: '💬 Đang mở Zalo chat...'
                },
                facebook: {
                    action: () => window.open('https://facebook.com/hoangquocduy'),
                    message: '📘 Đang mở Facebook...'
                },
                instagram: {
                    action: () => window.open('https://instagram.com/hoangquocduy'),
                    message: '📸 Đang mở Instagram...'
                }
            };

            const contact = contactActions[contactType];
            if (contact) {
                this.showNotification(contact.message);
                setTimeout(contact.action, 500);
            }
        }

        handleBooking() {
            const message = `🏐 ĐẶT SÂN BÓNG CHUYỀN DVA

📍 Địa chỉ: 155 Trường Chinh
💰 Giá: 550.000 VNĐ/giờ  
🏐 Bao gồm: 2 quả bóng Mikasa V200W
🛡️ An ninh: Khuôn viên quân đội

⚠️ Lưu ý: Đặt trước 1-2 ngày

Vui lòng cho tôi biết:
- Ngày giờ muốn đặt
- Số lượng người chơi
- Thời gian thuê sân

Cảm ơn bạn! 🙏`;
            
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://zalo.me/0768299329?message=${encodedMessage}`);
            this.showNotification('🏐 Chuyển hướng đến Zalo để đặt sân...');
        }

        handleConsultation() {
            const message = `💬 TƯ VẤN DỊCH VỤ DVA VOLLEYBALL

Tôi muốn tư vấn về:
□ Thuê sân theo giờ
□ Thuê sân theo tháng (giảm 20%)
□ Gói sự kiện/giải đấu
□ Dịch vụ Setter care

📞 Liên hệ: Quốc Duy - 0768 299 329
📍 Địa chỉ: 155 Trường Chinh

Cảm ơn bạn quan tâm! 🏐`;
            
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://zalo.me/0768299329?message=${encodedMessage}`);
            this.showNotification('💬 Chuyển hướng đến Zalo để tư vấn...');
        }

        handleEventBooking() {
            const message = `🎪 TỔ CHỨC SỰ KIỆN/GIẢI ĐẤU DVA

🏐 Gói sự kiện bao gồm:
- 2 sân liền kề cả ngày Chủ Nhật
- Hệ thống âm thanh chuyên nghiệp
- Bàn ghế cho khán giả
- Trọng tài chuyên nghiệp
- Quay phim - chụp ảnh
- Tổ chức lễ trao giải

Thông tin sự kiện cần tư vấn:
- Loại giải đấu: _____________
- Số đội tham gia: ___________
- Ngày tổ chức: _____________

📞 Liên hệ: Quốc Duy - 0768 299 329`;
            
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://zalo.me/0768299329?message=${encodedMessage}`);
            this.showNotification('🎪 Chuyển hướng đến Zalo để tổ chức sự kiện...');
        }

        handleScheduleBooking(days, time) {
            const message = `📅 ĐẶT SÂN THEO LỊCH: ${days} ${time}

🏐 Thông tin:
- Khung giờ: ${time}
- Ngày: ${days}
- Giá: 550.000 VNĐ/giờ

💡 Ưu đãi thuê cố định theo tháng:
- Giảm 20% so với thuê lẻ
- Setter care miễn phí

📍 155 Trường Chinh
⚠️ Đặt trước 1-2 ngày`;
            
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://zalo.me/0768299329?message=${encodedMessage}`);
            this.showNotification(`📅 Đặt sân ${days} ${time}...`);
        }

        showNotification(message) {
            const notification = document.createElement('div');
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed; top: 20px; right: 20px; z-index: 10000;
                background: linear-gradient(135deg, #FF6B35, #FF8A65);
                color: white; padding: 16px 24px; border-radius: 12px;
                box-shadow: 0 8px 32px rgba(255, 107, 53, 0.4);
                font-weight: 600; font-size: 14px; max-width: 320px;
            `;

            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 3000);
        }

        initializeAnimations() {
            setTimeout(() => {
                const cards = document.querySelectorAll('.pricing-card, .schedule-card, .feature-item');
                cards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.transition = 'all 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100 + 200);
                });
            }, 600);
        }

        cleanup() {
            console.log('🧹 Cleaning up Services Module...');
            this.isInitialized = false;
        }
    }

    window.ServicesModule = ServicesModule;
    console.log('✅ DVA ServicesModule class defined successfully');

} else {
    console.log('⚠️ ServicesModule already exists, skipping redefinition');
}

// INITIALIZATION
document.addEventListener('navigationChange', (e) => {
    const currentPage = e.detail ? e.detail.page : null;
    
    if (currentPage === 'services') {
        setTimeout(() => {
            if (!window.servicesModuleInstance && window.ServicesModule) {
                console.log('🚀 Creating DVA Services module instance');
                window.servicesModuleInstance = new window.ServicesModule();
            }
        }, 200);
    } else {
        if (window.servicesModuleInstance) {
            window.servicesModuleInstance.cleanup();
            window.servicesModuleInstance = null;
        }
    }
});

if (window.location.hash.includes('#/services')) {
    setTimeout(() => {
        if (window.ServicesModule && !window.servicesModuleInstance) {
            console.log('🔄 Direct DVA Services initialization');
            window.servicesModuleInstance = new window.ServicesModule();
        }
    }, 500);
}

console.log('🏐 DVA Services Module loaded successfully');
