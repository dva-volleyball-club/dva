/**
 * DVA News Module - ENHANCED WITH MODAL SYSTEM
 * Path: D:\dva\DVA-Volleyball-Website\assets\js\modules\news.js
 */

// PREVENT DUPLICATE CLASS DECLARATIONS
if (typeof window.NewsModule === 'undefined') {
    
    class NewsModule {
        constructor() {
            this.currentPage = 1;
            this.itemsPerPage = 6;
            this.currentFilter = '';
            this.isInitialized = false;
            this.eventListeners = [];
            this.observers = [];
            this.allNews = [];
            this.filteredNews = [];
            this.currentModal = null;
            this.modalEscapeHandler = null;
 
            this.init();
        }

        async init() {
            try {
                await this.waitForElements();
                this.setupModuleScope();
                this.loadNewsData();
                this.bindEvents();
                this.renderNews();
                this.setupAnimations();
                
                this.isInitialized = true;
         
                
                document.dispatchEvent(new CustomEvent('newsModuleReady', {
                    detail: { instance: this }
                }));
                
            } catch (error) {
                console.error('❌ News Module initialization failed:', error);
            }
        }

        setupModuleScope() {
            this.moduleContainer = document.querySelector('.dva-news');
            if (!this.moduleContainer) {
                throw new Error('News module container not found');
            }
       
        }

        async waitForElements() {
            return new Promise((resolve, reject) => {
                let attempts = 0;
                const maxAttempts = 30;

                const checkElements = () => {
                    attempts++;
                    const newsModule = document.querySelector('.dva-news');

                    if (newsModule) {
                        const essentialElements = [
                            '.news-search-container',
                            '.news-grid',
                            '.news-pagination'
                        ];

                        const allFound = essentialElements.every(selector => 
                            newsModule.querySelector(selector)
                        );

                        if (allFound) {
                       
                            resolve();
                            return;
                        }
                    }
                    
                    if (attempts >= maxAttempts) {
                        console.error('❌ News elements not found after', attempts, 'attempts');
                        reject(new Error('News elements not found'));
                    } else {
                        setTimeout(checkElements, 150);
                    }
                };

                checkElements();
            });
        }

        loadNewsData() {
            if (window.newsData) {
                this.allNews = [...window.newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
                this.filteredNews = [...this.allNews];
           
            } else {
                console.warn('⚠️ News data not found');
                this.allNews = [];
                this.filteredNews = [];
            }
        }

        bindEvents() {
   

            const searchInput = this.moduleContainer.querySelector('.news-search-input');
            if (searchInput) {
                const searchHandler = (e) => {
                    this.handleSearch(e.target.value);
                };
                searchInput.addEventListener('input', searchHandler);
                this.eventListeners.push({ element: searchInput, event: 'input', handler: searchHandler });
            }

            const clearButton = this.moduleContainer.querySelector('.search-clear-btn');
            if (clearButton) {
                const clearHandler = () => {
                    this.clearSearch();
                };
                clearButton.addEventListener('click', clearHandler);
                this.eventListeners.push({ element: clearButton, event: 'click', handler: clearHandler });
            }

        }

        handleSearch(query) {
            this.currentFilter = query.toLowerCase().trim();
            
            if (this.currentFilter === '') {
                this.filteredNews = [...this.allNews];
            } else {
                this.filteredNews = this.allNews.filter(news => {
                    const searchText = this.removeVietnameseTones(
                        `${news.title} ${news.content} ${news.category} ${news.tags.join(' ')}`
                    ).toLowerCase();
                    const searchQuery = this.removeVietnameseTones(this.currentFilter);
                    
                    return searchText.includes(searchQuery);
                });
            }

            this.currentPage = 1;
            this.renderNews();
            this.updateSearchUI();
            
        }

        removeVietnameseTones(str) {
            return str
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd')
                .replace(/Đ/g, 'D');
        }

        clearSearch() {
            const searchInput = this.moduleContainer.querySelector('.news-search-input');
            if (searchInput) {
                searchInput.value = '';
                this.handleSearch('');
            }
        }

        updateSearchUI() {
            const clearButton = this.moduleContainer.querySelector('.search-clear-btn');
            const searchCounter = this.moduleContainer.querySelector('.search-results-count');
            
            if (clearButton) {
                clearButton.style.display = this.currentFilter ? 'flex' : 'none';
            }
            
            if (searchCounter) {
                if (this.currentFilter) {
                    searchCounter.textContent = `Tìm thấy ${this.filteredNews.length} kết quả`;
                    searchCounter.style.display = 'block';
                } else {
                    searchCounter.style.display = 'none';
                }
            }
        }

        renderNews() {
            const newsGrid = this.moduleContainer.querySelector('.news-grid');
            if (!newsGrid) return;

            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            const currentNews = this.filteredNews.slice(startIndex, endIndex);

            if (currentNews.length === 0) {
                newsGrid.innerHTML = this.getEmptyStateHTML();
                this.renderPagination();
                return;
            }

            newsGrid.innerHTML = currentNews.map(news => this.createNewsCard(news)).join('');
            this.renderPagination();
            this.animateCards();
        }

        createNewsCard(news) {
            const formatDate = (dateStr) => {
                const date = new Date(dateStr);
                return date.toLocaleDateString('vi-VN', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
            };

            return `
                <article class="news-card ${news.featured ? 'featured' : ''}" data-news-id="${news.id}">
                    <div class="news-card-image">
                        <img src="${news.image}" alt="${news.title}" loading="lazy" />
                        <div class="news-card-overlay">
                            <span class="news-category">${news.category}</span>
                            ${news.featured ? '<span class="featured-badge">🔥 Nổi bật</span>' : ''}
                        </div>
                    </div>
                    
                    <div class="news-card-content">
                        <div class="news-meta">
                            <span class="news-date">📅 ${formatDate(news.date)}</span>
                            <span class="news-time">⏰ ${news.time}</span>
                            <span class="news-read-time">📖 ${news.readTime} phút đọc</span>
                        </div>
                        
                        <h3 class="news-title">${news.title}</h3>
                        
                        <p class="news-excerpt">${this.truncateText(news.content, 120)}</p>
                        
                        <div class="news-location">
                            <span class="location-icon">📍</span>
                            <span>${news.location}</span>
                        </div>
                        
                        <div class="news-tags">
                            ${news.tags.slice(0, 3).map(tag => 
                                `<span class="news-tag">#${tag}</span>`
                            ).join('')}
                        </div>
                        
                        <div class="news-footer">
                            <span class="news-author">✍️ ${news.author}</span>
                            <button class="read-more-btn" onclick="newsModule.showNewsDetail(${news.id})">
                                Đọc tiếp
                                <span class="btn-arrow">→</span>
                            </button>
                        </div>
                    </div>
                </article>
            `;
        }

        truncateText(text, maxLength) {
            if (text.length <= maxLength) return text;
            return text.substring(0, maxLength).trim() + '...';
        }

        getEmptyStateHTML() {
            if (this.currentFilter) {
                return `
                    <div class="empty-state">
                        <div class="empty-icon">🔍</div>
                        <h3>Không tìm thấy kết quả</h3>
                        <p>Không có bài viết nào khớp với từ khóa "<strong>${this.currentFilter}</strong>"</p>
                        <button class="clear-search-btn" onclick="newsModule.clearSearch()">
                            Xóa bộ lọc
                        </button>
                    </div>
                `;
            } else {
                return `
                    <div class="empty-state">
                        <div class="empty-icon">📰</div>
                        <h3>Chưa có tin tức</h3>
                        <p>Hiện tại chưa có bài viết nào được đăng tải.</p>
                    </div>
                `;
            }
        }

        renderPagination() {
            const paginationContainer = this.moduleContainer.querySelector('.news-pagination');
            if (!paginationContainer) return;

            const totalPages = Math.ceil(this.filteredNews.length / this.itemsPerPage);
            
            if (totalPages <= 1) {
                paginationContainer.innerHTML = '';
                return;
            }

            let paginationHTML = `
                <button class="pagination-btn prev-btn ${this.currentPage === 1 ? 'disabled' : ''}" 
                        onclick="newsModule.changePage(${this.currentPage - 1})" 
                        ${this.currentPage === 1 ? 'disabled' : ''}>
                    ← Trước
                </button>
            `;

            // Show page numbers
            for (let i = 1; i <= totalPages; i++) {
                if (i === 1 || i === totalPages || (i >= this.currentPage - 2 && i <= this.currentPage + 2)) {
                    paginationHTML += `
                        <button class="pagination-btn page-btn ${i === this.currentPage ? 'active' : ''}" 
                                onclick="newsModule.changePage(${i})">
                            ${i}
                        </button>
                    `;
                } else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
                    paginationHTML += `<span class="pagination-dots">...</span>`;
                }
            }

            paginationHTML += `
                <button class="pagination-btn next-btn ${this.currentPage === totalPages ? 'disabled' : ''}" 
                        onclick="newsModule.changePage(${this.currentPage + 1})" 
                        ${this.currentPage === totalPages ? 'disabled' : ''}>
                    Sau →
                </button>
            `;

            paginationContainer.innerHTML = paginationHTML;
        }

        changePage(page) {
            const totalPages = Math.ceil(this.filteredNews.length / this.itemsPerPage);
            
            if (page < 1 || page > totalPages || page === this.currentPage) {
                return;
            }

            this.currentPage = page;
            this.renderNews();

            // Smooth scroll to top of news section
            const newsSection = this.moduleContainer.querySelector('.news-hero');
            if (newsSection) {
                newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

        }

        animateCards() {
            const cards = this.moduleContainer.querySelectorAll('.news-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }

        setupAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            this.moduleContainer.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });

            this.observers.push(observer);
        }

        // ===== MODAL SYSTEM - ENHANCED ===== //

        // ENHANCED: Show news detail in beautiful modal instead of alert
        showNewsDetail(newsId) {
            const news = this.allNews.find(n => n.id === newsId);
            if (!news) return;

            this.openNewsModal(news);
         
        }

        // NEW: Open news modal with full content
        openNewsModal(news) {
            // Remove existing modal if any
            this.closeNewsModal();

            const modal = this.createNewsModal(news);
            document.body.appendChild(modal);
            
            // Animate modal in
            requestAnimationFrame(() => {
                modal.classList.add('show');
            });

            // Add event listeners
            this.bindModalEvents(modal);
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Track modal state
            this.currentModal = modal;
        }

        // NEW: Create news modal HTML
        createNewsModal(news) {
            const modal = document.createElement('div');
            modal.className = 'news-modal-overlay';
            modal.setAttribute('data-news-id', news.id);

            const formatDate = (dateStr) => {
                const date = new Date(dateStr);
                return date.toLocaleDateString('vi-VN', { 
                    weekday: 'long',
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
            };

            const formatFullContent = (content) => {
                // Split content into paragraphs for better readability
                return content.split('\n').filter(p => p.trim()).map(paragraph => 
                    `<p>${paragraph.trim()}</p>`
                ).join('');
            };

            modal.innerHTML = `
                <div class="news-modal-container">
                    <div class="news-modal-content">
                        
                        <!-- Modal Header -->
                        <div class="news-modal-header">
                            <div class="modal-header-left">
                                <span class="news-modal-category">${news.category}</span>
                                ${news.featured ? '<span class="modal-featured-badge">🔥 Nổi bật</span>' : ''}
                            </div>
                            <button class="news-modal-close" title="Đóng">
                                <span class="close-icon">✕</span>
                            </button>
                        </div>

                        <!-- Modal Hero Image -->
                        <div class="news-modal-hero">
                            <img src="${news.image}" alt="${news.title}" class="modal-hero-image" />
                            <div class="modal-image-overlay">
                                <div class="modal-image-gradient"></div>
                            </div>
                        </div>

                        <!-- Modal Body -->
                        <div class="news-modal-body">
                            
                            <!-- Title & Meta -->
                            <div class="modal-title-section">
                                <h1 class="modal-title">${news.title}</h1>
                                
                                <div class="modal-meta-grid">
                                    <div class="modal-meta-item">
                                        <span class="meta-icon">📅</span>
                                        <span class="meta-text">${formatDate(news.date)}</span>
                                    </div>
                                    <div class="modal-meta-item">
                                        <span class="meta-icon">⏰</span>
                                        <span class="meta-text">${news.time}</span>
                                    </div>
                                    <div class="modal-meta-item">
                                        <span class="meta-icon">📍</span>
                                        <span class="meta-text">${news.location}</span>
                                    </div>
                                    <div class="modal-meta-item">
                                        <span class="meta-icon">📖</span>
                                        <span class="meta-text">${news.readTime} phút đọc</span>
                                    </div>
                                    <div class="modal-meta-item">
                                        <span class="meta-icon">✍️</span>
                                        <span class="meta-text">${news.author}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="modal-content-section">
                                <div class="modal-article-content">
                                    ${formatFullContent(news.content)}
                                </div>
                                
                                <!-- Tags -->
                                <div class="modal-tags-section">
                                    <h4>Tags liên quan:</h4>
                                    <div class="modal-tags">
                                        ${news.tags.map(tag => 
                                            `<span class="modal-tag" onclick="newsModule.searchByTag('${tag}')">#${tag}</span>`
                                        ).join('')}
                                    </div>
                                </div>
                            </div>

                        </div>

                        

                    </div>
                </div>
            `;

            return modal;
        }

        // NEW: Bind modal event listeners
        bindModalEvents(modal) {
            // Close on overlay click
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeNewsModal();
                }
            });

            // Close on close button click
            const closeBtn = modal.querySelector('.news-modal-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    this.closeNewsModal();
                });
            }

            // Close on Escape key
            const escapeHandler = (e) => {
                if (e.key === 'Escape') {
                    this.closeNewsModal();
                }
            };
            
            document.addEventListener('keydown', escapeHandler);
            
            // Store handler for cleanup
            this.modalEscapeHandler = escapeHandler;
        }

        // NEW: Close news modal
        closeNewsModal() {
            const modal = document.querySelector('.news-modal-overlay');
            if (modal) {
                modal.classList.add('closing');
                
                setTimeout(() => {
                    if (modal.parentNode) {
                        modal.parentNode.removeChild(modal);
                    }
                }, 300);
            }

            // Restore body scroll
            document.body.style.overflow = '';
            
            // Remove escape handler
            if (this.modalEscapeHandler) {
                document.removeEventListener('keydown', this.modalEscapeHandler);
                this.modalEscapeHandler = null;
            }
            
            // Clear modal reference
            this.currentModal = null;
            
      
        }

        // NEW: Search by tag from modal
        searchByTag(tag) {
            this.closeNewsModal();
            
            setTimeout(() => {
                const searchInput = this.moduleContainer.querySelector('.news-search-input');
                if (searchInput) {
                    searchInput.value = tag;
                    this.handleSearch(tag);
                    
                    // Scroll to search results
                    const searchSection = this.moduleContainer.querySelector('.news-search-section');
                    if (searchSection) {
                        searchSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }, 400);
            
          
        }

        // NEW: Share news functionality
        shareNews(newsId) {
            const news = this.allNews.find(n => n.id === newsId);
            if (!news) return;

            if (navigator.share) {
                navigator.share({
                    title: news.title,
                    text: news.content.substring(0, 100) + '...',
                    url: window.location.href
                }).catch(console.error);
            } else {
                // Fallback: Copy to clipboard
                const shareText = `${news.title}\n\n${news.content.substring(0, 200)}...\n\n📰 DVA Volleyball Club`;
                navigator.clipboard.writeText(shareText).then(() => {
                    this.showToast('📋 Đã sao chép nội dung để chia sẻ!');
                }).catch(() => {
                    this.showToast('📤 Chia sẻ không khả dụng');
                });
            }
        
        }

        // NEW: Print news functionality  
        printNews(newsId) {
            const news = this.allNews.find(n => n.id === newsId);
            if (!news) return;

            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>${news.title} - DVA Volleyball</title>
                    <style>
                        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 40px; line-height: 1.6; }
                        .print-header { border-bottom: 2px solid #FF6B35; padding-bottom: 20px; margin-bottom: 30px; }
                        .print-title { color: #FF6B35; font-size: 2rem; margin: 0 0 10px 0; }
                        .print-meta { color: #666; font-size: 0.9rem; }
                        .print-content { margin: 30px 0; }
                        .print-footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 0.9rem; }
                        img { max-width: 100%; height: auto; }
                    </style>
                </head>
                <body>
                    <div class="print-header">
                        <h1 class="print-title">${news.title}</h1>
                        <div class="print-meta">
                            📅 ${new Date(news.date).toLocaleDateString('vi-VN')} | 
                            ⏰ ${news.time} | 
                            📍 ${news.location} | 
                            ✍️ ${news.author}
                        </div>
                    </div>
                    <div class="print-content">
                        ${news.content.split('\n').map(p => `<p>${p}</p>`).join('')}
                    </div>
                    <div class="print-footer">
                        <strong>DVA Volleyball Club</strong> - Excellence in Every Spike<br>
                        In lúc: ${new Date().toLocaleString('vi-VN')}
                    </div>
                </body>
                </html>
            `);
            
            printWindow.document.close();
            printWindow.focus();
            
            setTimeout(() => {
                printWindow.print();
                printWindow.close();
            }, 500);
            
            
        }

        // NEW: Show toast notification
        showToast(message, duration = 3000) {
            // Remove existing toast
            const existingToast = document.querySelector('.news-toast');
            if (existingToast) {
                existingToast.remove();
            }

            const toast = document.createElement('div');
            toast.className = 'news-toast';
            toast.textContent = message;
            
            document.body.appendChild(toast);
            
            // Animate in
            setTimeout(() => toast.classList.add('show'), 100);
            
            // Remove after duration
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, duration);
        }

        // ===== END MODAL SYSTEM ===== //

        // Public methods
        getModuleStats() {
            return {
                initialized: this.isInitialized,
                totalNews: this.allNews.length,
                filteredNews: this.filteredNews.length,
                currentPage: this.currentPage,
                currentFilter: this.currentFilter,
                modalOpen: !!this.currentModal
            };
        }

        cleanup() {
          

            // Close modal if open
            this.closeNewsModal();

            this.eventListeners.forEach(({ element, event, handler }) => {
                if (element && element.removeEventListener) {
                    element.removeEventListener(event, handler);
                }
            });
            this.eventListeners = [];

            this.observers.forEach(observer => {
                if (observer && observer.disconnect) {
                    observer.disconnect();
                }
            });
            this.observers = [];

            this.isInitialized = false;
          
        }
    }

    // EXPOSE CLASS GLOBALLY
    window.NewsModule = NewsModule;
   

} else {
    
}

// MODULE INITIALIZATION
document.addEventListener('navigationChange', (e) => {
    const currentPage = e.detail?.page;
   

    if (currentPage === 'news') {
        setTimeout(() => {
            if (!window.newsModuleInstance && window.NewsModule) {
             
                try {
                    window.newsModuleInstance = new window.NewsModule();
                    window.newsModule = window.newsModuleInstance; // For global access
                } catch (error) {
                    console.error('❌ Failed to create News module instance:', error);
                }
            } else if (window.newsModuleInstance && !window.newsModuleInstance.isInitialized) {
           
                window.newsModuleInstance.init();
            }
        }, 300);
    }
});

// Direct initialization if already on news page
if (window.location.hash.includes('#/news')) {
    setTimeout(() => {
        if (window.NewsModule && !window.newsModuleInstance) {
        
            try {
                window.newsModuleInstance = new window.NewsModule();
                window.newsModule = window.newsModuleInstance;
            } catch (error) {
                console.error('❌ Direct initialization failed:', error);
            }
        }
    }, 1000);
}

