/**
 * DVA Contact Module - GOOGLE SHEETS INTEGRATION VIA APPS SCRIPT
 * Version: 4.2 - Enhanced with URL Protection & New Success Card
 * Path: D:\dva\DVA-Volleyball-Website\assets\js\modules\contact.js
 */

// PREVENT DUPLICATE CLASS DECLARATIONS
if (typeof window.ContactModule === 'undefined') {
    
    class ContactModule {
        constructor() {
            this.isInitialized = false;
            this.formData = {};
            this.isSubmitting = false;
            this.escapeKeyHandler = null;
            
            // ✅ YOUR ACTUAL DEPLOYMENT URL - UPDATED
            this.GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyfpWaHtx9p6g6unLCfDY4j1cI-xTimkUI3_np-s5KDpv66IahI5Iey-GqvW2RIXIBj/exec';
            
            console.log('📞 DVA Contact Module initializing...');
            console.log('🔗 Google Sheets URL:', this.GOOGLE_SHEETS_URL);
            this.init();
        }

        async init() {
            try {
                console.log('🚀 Contact Module starting...');
                
                await this.waitForContactHTML();
                this.bindEvents();
                this.initializeAnimations();
                
                this.isInitialized = true;
                console.log('✅ Contact Module initialized successfully');
                
            } catch (error) {
                console.error('❌ Contact Module initialization failed:', error);
                this.showFallbackNotification();
            }
        }

        async waitForContactHTML() {
            console.log('⏳ Waiting for Contact HTML elements...');
            
            return new Promise((resolve, reject) => {
                let attempts = 0;
                const maxAttempts = 30;
                
                const checkElements = () => {
                    attempts++;
                    
                    const form = document.getElementById('dva-contact-form');
                    const contactMethods = document.querySelectorAll('.method-btn[data-contact]');
                    const formGroups = document.querySelectorAll('.form-group');
                    
                    if (form && contactMethods.length > 0 && formGroups.length > 0) {
                        console.log(`✅ Contact HTML ready after ${attempts} attempts`);
                        resolve();
                    } else if (attempts >= maxAttempts) {
                        console.error('❌ Contact HTML not found after 3 seconds');
                        reject(new Error('Contact HTML elements not found'));
                    } else {
                        setTimeout(checkElements, 100);
                    }
                };
                
                checkElements();
            });
        }

        bindEvents() {
            console.log('🔗 Binding contact events...');
            this.bindFormEvents();
            this.bindDirectContactEvents();
            this.bindValidationEvents();
            console.log('✅ All contact events bound');
        }

        // ✅ ENHANCED: Form event binding with URL protection
        bindFormEvents() {
            const form = document.getElementById('dva-contact-form');
            const newMessageBtn = document.getElementById('new-message-btn');
            
            if (form) {
                // ✅ PREVENT DEFAULT FORM SUBMISSION COMPLETELY
                form.addEventListener('submit', (e) => {
                    e.preventDefault(); // Stop default form submission
                    e.stopPropagation(); // Stop event bubbling
                    this.handleFormSubmit();
                    return false; // Extra prevention
                });
                
                // ✅ ADDITIONAL PREVENTION: SET FORM ATTRIBUTES
                form.setAttribute('action', 'javascript:void(0)');
                form.setAttribute('method', 'POST'); // Ensure POST method
                form.setAttribute('onsubmit', 'return false;'); // HTML prevention
                
                console.log('✅ Form submit event bound with URL protection');
            }
            
            if (newMessageBtn) {
                newMessageBtn.addEventListener('click', () => {
                    this.resetForm();
                });
            }
        }

        bindDirectContactEvents() {
            const methodBtns = document.querySelectorAll('.method-btn[data-contact]');
            console.log(`📞 Found ${methodBtns.length} direct contact buttons`);
            
            methodBtns.forEach((btn, index) => {
                const contactType = btn.getAttribute('data-contact');
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleDirectContact(contactType);
                });
            });
        }

        bindValidationEvents() {
            const inputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
            console.log(`📝 Found ${inputs.length} form inputs for validation`);
            
            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    this.validateField(input);
                });
                
                input.addEventListener('input', () => {
                    input.classList.remove('error');
                });
            });
        }

        // ===== FORM VALIDATION ===== //

        validateField(field) {
            const value = field.value.trim();
            const fieldName = field.name;
            let isValid = true;
            let errorMessage = '';

            if (field.required && !value) {
                isValid = false;
                errorMessage = 'Trường này là bắt buộc';
            }
            
            switch (fieldName) {
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (value && !emailRegex.test(value)) {
                        isValid = false;
                        errorMessage = 'Email không hợp lệ';
                    }
                    break;
                    
                case 'phone':
                    const phoneRegex = /^[0-9]{10,11}$/;
                    if (value && !phoneRegex.test(value.replace(/\s/g, ''))) {
                        isValid = false;
                        errorMessage = 'Số điện thoại không hợp lệ';
                    }
                    break;
                    
                case 'fullName':
                    if (value && value.length < 2) {
                        isValid = false;
                        errorMessage = 'Họ tên phải có ít nhất 2 ký tự';
                    }
                    break;
            }

            if (isValid) {
                field.classList.remove('error');
                field.classList.add('success');
                this.removeFieldError(field);
            } else {
                field.classList.remove('success');
                field.classList.add('error');
                this.showFieldError(field, errorMessage);
            }

            return isValid;
        }

        validateForm() {
            const form = document.getElementById('dva-contact-form');
            if (!form) {
                console.error('❌ Contact form not found for validation');
                return false;
            }
            
            const inputs = form.querySelectorAll('.form-input[required], .form-select[required], .form-textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isValid = false;
                }
            });

            return isValid;
        }

        showFieldError(field, message) {
            this.removeFieldError(field);
            
            const errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.style.cssText = `
                color: #EF4444;
                font-size: 0.85rem;
                margin-top: 4px;
                padding-left: 4px;
            `;
            errorElement.textContent = message;
            
            field.parentNode.appendChild(errorElement);
        }

        removeFieldError(field) {
            const existingError = field.parentNode.querySelector('.field-error');
            if (existingError) {
                existingError.remove();
            }
        }

        // ===== ENHANCED FORM SUBMISSION WITH URL PROTECTION ===== //

        async handleFormSubmit() {
            if (this.isSubmitting) return;
            
            console.log('📝 Processing form submission with Google Sheets integration...');
            
            if (!this.validateForm()) {
                this.showNotification('❌ Vui lòng kiểm tra lại thông tin đã nhập', 'error');
                return;
            }

            this.isSubmitting = true;
            this.showSubmissionLoading(true);

            try {
                // ✅ COLLECT FORM DATA
                this.collectFormData();
                
                console.log('📋 Form data collected:', this.formData);
                console.log('🔗 Sending to Google Sheets URL:', this.GOOGLE_SHEETS_URL);
                
                // ✅ SUBMIT TO GOOGLE APPS SCRIPT USING FORMDATA
                const formData = new FormData();
                
                // Map all form fields to FormData (matching Google Sheets headers)
                Object.keys(this.formData).forEach(key => {
                    formData.append(key, this.formData[key]);
                    console.log(`   📝 ${key}: ${this.formData[key]}`);
                });

                console.log('📤 Submitting FormData to Google Apps Script...');

                const response = await fetch(this.GOOGLE_SHEETS_URL, {
                    method: 'POST',
                    body: formData  // FormData, no headers needed
                });

                console.log('📡 Response status:', response.status);
                console.log('📡 Response OK:', response.ok);

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const result = await response.json();
                console.log('📊 Response data:', result);
                
                if (result.result !== 'success') {
                    throw new Error(result.error || result.message || 'Server returned error');
                }
                
                // ✅ CLEAN URL AFTER SUCCESSFUL SUBMISSION
                this.cleanUrlAfterSubmission();
                
                // Show success
                this.showSuccessMessage();
                this.showNotification('✅ Đã gửi thành công! Cảm ơn bạn đã liên hệ DVA.', 'success');
                
                console.log('✅ Form submitted successfully to Google Sheets');
                console.log('📊 Saved to row:', result.row);
                console.log('⏰ Timestamp:', result.timestamp);
                
            } catch (error) {
                console.error('❌ Form submission failed:', error);
                console.error('❌ Error details:', {
                    message: error.message,
                    url: this.GOOGLE_SHEETS_URL,
                    formData: this.formData
                });
                
                // ✅ CLEAN URL EVEN ON ERROR
                this.cleanUrlAfterSubmission();
                
                // Fallback to email
                console.log('🔄 Using email fallback...');
                this.sendViaEmail();
                this.showNotification('📧 Đã chuyển sang email backup. Vui lòng gửi email để hoàn tất!', 'info');
                
            } finally {
                this.isSubmitting = false;
                this.showSubmissionLoading(false);
            }
        }

        // ✅ NEW: CLEAN URL METHOD
        cleanUrlAfterSubmission() {
            try {
                // Remove any URL parameters that might have been added
                const cleanUrl = window.location.protocol + '//' + 
                                 window.location.host + 
                                 window.location.pathname + 
                                 window.location.hash; // Keep hash for SPA routing
                
                // Replace current history entry without adding new one
                if (window.history && window.history.replaceState) {
                    window.history.replaceState({}, document.title, cleanUrl);
                    console.log('🧹 URL cleaned:', cleanUrl);
                }
                
            } catch (error) {
                console.warn('⚠️ Could not clean URL:', error);
            }
        }

        // ✅ FORM DATA COLLECTION - MATCHES GOOGLE SHEETS HEADERS EXACTLY
        collectFormData() {
            const form = document.getElementById('dva-contact-form');
            if (!form) {
                throw new Error('Contact form not found');
            }
            
            const formData = new FormData(form);
            
            // ✅ MAP TO GOOGLE SHEETS HEADERS (must match Apps Script expectations)
            this.formData = {
                timestamp: new Date().toISOString(),                    // Column A: timestamp
                fullName: formData.get('fullName') || '',               // Column B: fullName  
                email: formData.get('email') || '',                     // Column C: email
                phone: formData.get('phone') || '',                     // Column D: phone
                teamName: formData.get('teamName') || 'Không có',      // Column E: teamName
                level: formData.get('level') || '',                     // Column F: level
                purpose: formData.get('purpose') || '',                 // Column G: purpose
                requirements: formData.get('requirements') || '',       // Column H: requirements
                source: 'DVA Contact Form'                              // Column I: source
            };
            
            console.log('📋 Form data mapped to Google Sheets format:', this.formData);
        }

        // ✅ EMAIL FALLBACK
        sendViaEmail() {
            const emailSubject = `🏐 DVA Contact: ${this.formData.purpose}`;
            
            const emailBody = `
🏐 DVA VOLLEYBALL - LIÊN HỆ MỚI

👤 THÔNG TIN LIÊN HỆ:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Họ và tên: ${this.formData.fullName}
• Email: ${this.formData.email}
• Điện thoại: ${this.formData.phone}
• Tên đội: ${this.formData.teamName}
• Trình độ: ${this.formData.level === 'middle' ? 'Middle (Trung cấp)' : 'Advanced (Nâng cao)'}

🎯 MỤC ĐÍCH LIÊN HỆ:
${this.formData.purpose}

📝 YÊU CẦU CHI TIẾT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${this.formData.requirements}

⏰ Thời gian gửi: ${new Date().toLocaleString('vi-VN')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏐 DVA Volleyball Club - Contact Form
            `.trim();
            
            const mailtoLink = `mailto:quocduyhoang42@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            
            setTimeout(() => {
                window.open(mailtoLink);
                console.log('📧 Email fallback opened');
            }, 1000);
            
            this.copyToClipboard(emailBody);
        }

        copyToClipboard(text) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    console.log('📋 Email content copied to clipboard');
                    setTimeout(() => {
                        this.showNotification('📋 Nội dung đã sao chép vào clipboard', 'success');
                    }, 2000);
                }).catch(err => {
                    console.warn('📋 Clipboard copy failed:', err);
                });
            }
        }

        showSubmissionLoading(show) {
            const submitBtn = document.getElementById('submit-btn');
            if (!submitBtn) return;
            
            const btnText = submitBtn.querySelector('.btn-text');
            const btnIcon = submitBtn.querySelector('.btn-icon');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            if (show) {
                submitBtn.disabled = true;
                if (btnText) btnText.style.display = 'none';
                if (btnIcon) btnIcon.style.display = 'none';
                if (btnLoading) btnLoading.style.display = 'flex';
            } else {
                submitBtn.disabled = false;
                if (btnText) btnText.style.display = 'inline';
                if (btnIcon) btnIcon.style.display = 'inline';
                if (btnLoading) btnLoading.style.display = 'none';
            }
        }

        // ✅ ENHANCED SUCCESS MESSAGE METHODS ===== //

       // ✅ ENHANCED SUCCESS MESSAGE WITH AUTO-GENERATED BUTTONS
showSuccessMessage() {
    const form = document.getElementById('dva-contact-form');
    const overlay = document.getElementById('dva-success-overlay');
    
    if (form && overlay) {
        // Hide form
        form.style.display = 'none';
        
        // Update success details
        this.updateSuccessDetails();
        
        // ✅ ENSURE BUTTONS ARE PRESENT
        this.ensureSuccessButtons();
        
        // Show overlay with animation
        overlay.style.display = 'flex';
        
        // Bind close events
        this.bindSuccessEvents();
        
        // Auto scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        console.log('✅ Enhanced success message displayed with auto-generated buttons');
    } else {
        this.showNotification('✅ Form submitted successfully!', 'success');
    }
}

// ✅ NEW: ENSURE SUCCESS BUTTONS ARE PRESENT
ensureSuccessButtons() {
    const successCard = document.querySelector('.success-content-enhanced');
    let successActions = document.querySelector('.success-actions');
    
    // Remove existing buttons if any to avoid duplicates
    if (successActions) {
        successActions.remove();
    }
    
    // Create new buttons container
    if (successCard) {
        const buttonsHTML = `
            <div class="success-actions" style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px; width: 100%; opacity: 1; visibility: visible;">
                <button class="action-btn close" id="new-contact-btn" style="
                    display: flex !important; 
                    align-items: center !important; 
                    justify-content: center !important; 
                    gap: 10px !important; 
                    padding: 14px 20px !important; 
                    border-radius: 12px !important; 
                    font-weight: 600 !important; 
                    font-size: 0.9rem !important; 
                    border: none !important; 
                    cursor: pointer !important; 
                    width: 100% !important; 
                    background: linear-gradient(135deg, #FF6B35, #FF8A65) !important; 
                    color: white !important; 
                    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.3) !important;
                    transition: all 0.3s ease !important;
                    font-family: inherit !important;
                ">
                    <span class="btn-icon" style="font-size: 1.1rem;">📝</span>
                    <span class="btn-text">Gửi Tin Nhắn Mới</span>
                </button>
                
                <button class="action-btn home" id="go-home-btn" style="
                    display: flex !important; 
                    align-items: center !important; 
                    justify-content: center !important; 
                    gap: 10px !important; 
                    padding: 14px 20px !important; 
                    border-radius: 12px !important; 
                    font-weight: 600 !important; 
                    font-size: 0.9rem !important; 
                    border: none !important; 
                    cursor: pointer !important; 
                    width: 100% !important; 
                    background: linear-gradient(135deg, #0066FF, #4F9CFF) !important; 
                    color: white !important; 
                    box-shadow: 0 6px 20px rgba(0, 102, 255, 0.3) !important;
                    transition: all 0.3s ease !important;
                    font-family: inherit !important;
                ">
                    <span class="btn-icon" style="font-size: 1.1rem;">🏠</span>
                    <span class="btn-text">Quay Về Trang Chủ</span>
                </button>
            </div>
        `;
        
        successCard.insertAdjacentHTML('beforeend', buttonsHTML);
        
        // Add hover effects
        this.addButtonHoverEffects();
        
        console.log('✅ Success buttons auto-generated and added');
    } else {
        console.error('❌ Success card content not found');
    }
}

// ✅ NEW: ADD HOVER EFFECTS TO BUTTONS
addButtonHoverEffects() {
    const buttons = document.querySelectorAll('.success-actions .action-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
            if (this.classList.contains('close')) {
                this.style.boxShadow = '0 8px 25px rgba(255, 107, 53, 0.4)';
            } else if (this.classList.contains('home')) {
                this.style.boxShadow = '0 8px 25px rgba(0, 102, 255, 0.4)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            if (this.classList.contains('close')) {
                this.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.3)';
            } else if (this.classList.contains('home')) {
                this.style.boxShadow = '0 6px 20px rgba(0, 102, 255, 0.3)';
            }
        });
    });
}

// ✅ UPDATED: Success event binding for auto-generated buttons
bindSuccessEvents() {
    // Remove existing event listeners to avoid duplicates
    const existingNewBtn = document.getElementById('new-contact-btn');
    const existingHomeBtn = document.getElementById('go-home-btn');
    
    if (existingNewBtn) {
        existingNewBtn.replaceWith(existingNewBtn.cloneNode(true));
    }
    if (existingHomeBtn) {
        existingHomeBtn.replaceWith(existingHomeBtn.cloneNode(true));
    }
    
    // Bind new events
    const newContactBtn = document.getElementById('new-contact-btn');
    if (newContactBtn) {
        newContactBtn.addEventListener('click', () => {
            console.log('📝 New contact button clicked');
            this.resetForm();
        });
    }
    
    const goHomeBtn = document.getElementById('go-home-btn');
    if (goHomeBtn) {
        goHomeBtn.addEventListener('click', () => {
            console.log('🏠 Go home button clicked');
            this.goToHomePage();
        });
    }
    
    // Click outside to close
    const overlay = document.getElementById('dva-success-overlay');
    if (overlay) {
        // Remove existing listener
        overlay.replaceWith(overlay.cloneNode(true));
        
        // Add new listener
        const newOverlay = document.getElementById('dva-success-overlay');
        newOverlay.addEventListener('click', (e) => {
            if (e.target === newOverlay) {
                this.resetForm();
            }
        });
    }
    
    // ESC key to close (remove existing listener first)
    document.removeEventListener('keydown', this.escapeKeyHandler);
    this.escapeKeyHandler = (e) => {
        if (e.key === 'Escape') {
            this.resetForm();
        }
    };
    document.addEventListener('keydown', this.escapeKeyHandler);
    
    console.log('✅ Success events bound to auto-generated buttons');
}


        updateSuccessDetails() {
            // Update purpose display
            const purposeDisplay = document.getElementById('success-purpose-display');
            if (purposeDisplay && this.formData.purpose) {
                purposeDisplay.textContent = this.formData.purpose;
            }
            
            // Update submission count (you can store this in localStorage)
            const submissionCount = localStorage.getItem('dva-submission-count') || 0;
            const newCount = parseInt(submissionCount) + 1;
            localStorage.setItem('dva-submission-count', newCount);
            
            const statSubmissions = document.getElementById('stat-submissions');
            if (statSubmissions) {
                statSubmissions.textContent = newCount;
            }
        }

        // ✅ UPDATED: Success event binding for new buttons
        bindSuccessEvents() {
            // New contact button
            const newContactBtn = document.getElementById('new-contact-btn');
            if (newContactBtn) {
                newContactBtn.addEventListener('click', () => this.resetForm());
            }
            
            // ✅ NEW: Home button
            const goHomeBtn = document.getElementById('go-home-btn');
            if (goHomeBtn) {
                goHomeBtn.addEventListener('click', () => this.goToHomePage());
            }
            
            // Click outside to close
            const overlay = document.getElementById('dva-success-overlay');
            if (overlay) {
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        this.resetForm();
                    }
                });
            }
            
            // ESC key to close
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.resetForm();
                }
            });
        }

        hideSuccessMessage() {
            const overlay = document.getElementById('dva-success-overlay');
            if (overlay) {
                overlay.style.animation = 'overlayFadeOut 0.3s ease-out forwards';
                setTimeout(() => {
                    overlay.style.display = 'none';
                    overlay.style.animation = '';
                }, 300);
            }
        }

        // ✅ NEW: Go to home page method
        goToHomePage() {
            this.hideSuccessMessage();
            
            // ✅ CLEAN URL BEFORE NAVIGATION
            this.cleanUrlAfterSubmission();
            
            // Small delay to ensure URL is cleaned
            setTimeout(() => {
                // Navigate to home page
                if (window.router && typeof window.router.navigateTo === 'function') {
                    // If using SPA router
                    window.router.navigateTo('/');
                } else if (window.location.hash) {
                    // If using hash routing
                    window.location.hash = '#/home';
                } else {
                    // Fallback to home page
                    window.location.href = '/';
                }
                
                console.log('🏠 Navigating to home page with clean URL...');
            }, 100);
        }

        // ✅ ENHANCED: RESET FORM WITH URL CLEANING
        resetForm() {
            const form = document.getElementById('dva-contact-form');
            const overlay = document.getElementById('dva-success-overlay');
            
            if (!form) return;
            
            // Hide success overlay
            this.hideSuccessMessage();
            
            // ✅ CLEAN URL WHEN RESETTING
            this.cleanUrlAfterSubmission();
            
            // Reset form
            form.reset();
            
            // Remove validation classes
            const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
            inputs.forEach(input => {
                input.classList.remove('error', 'success');
            });
            
            // Remove error messages
            const errors = form.querySelectorAll('.field-error');
            errors.forEach(error => error.remove());
            
            // Show form
            setTimeout(() => {
                form.style.display = 'block';
                form.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
            
            // Reset form data
            this.formData = {};
            
            console.log('🔄 Enhanced form reset completed with URL cleaning');
        }

        handleDirectContact(contactType) {
            console.log('📞 Handling direct contact:', contactType);
            
            const contactActions = {
                phone: {
                    action: () => window.open('tel:0768299329'),
                    message: '📞 Đang gọi...'
                },
                zalo: {
                    action: () => window.open('https://zalo.me/0768299329'),
                    message: '💬 Đang mở Zalo...'
                },
                facebook: {
                    action: () => window.open('https://facebook.com/dva-volleyball'),
                    message: '📘 Đang mở Facebook...'
                },
                email: {
                    action: () => window.open('mailto:dvavolleyballclub@gmail.com'),
                    message: '📧 Đang mở email...'
                }
            };

            const contact = contactActions[contactType];
            if (contact) {
                this.showNotification(contact.message, 'info');
                setTimeout(contact.action, 500);
            }
        }

        showNotification(message, type = 'success') {
            const existingNotification = document.querySelector('.dva-notification');
            if (existingNotification) {
                existingNotification.remove();
            }

            const notification = document.createElement('div');
            notification.className = 'dva-notification';
            notification.textContent = message;
            
            const colors = {
                success: 'linear-gradient(135deg, #10B981, #34D399)',
                error: 'linear-gradient(135deg, #EF4444, #F87171)',
                info: 'linear-gradient(135deg, #0066FF, #4F9CFF)'
            };
            
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                background: ${colors[type] || colors.success};
                color: white;
                padding: 16px 24px;
                border-radius: 12px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                font-weight: 600;
                font-size: 14px;
                max-width: 320px;
                animation: slideInRight 0.3s ease-out;
                backdrop-filter: blur(20px);
            `;

            this.addNotificationStyles();
            document.body.appendChild(notification);

            setTimeout(() => {
                if (notification.parentNode) {
                    notification.style.animation = 'slideOutRight 0.3s ease-out';
                    setTimeout(() => {
                        notification.remove();
                    }, 300);
                }
            }, 4000);
        }

        addNotificationStyles() {
            if (!document.querySelector('#dva-notification-styles')) {
                const style = document.createElement('style');
                style.id = 'dva-notification-styles';
                style.textContent = `
                    @keyframes slideInRight {
                        from {
                            transform: translateX(100%);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }
                    @keyframes slideOutRight {
                        from {
                            transform: translateX(0);
                            opacity: 1;
                        }
                        to {
                            transform: translateX(100%);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
        }

        showFallbackNotification() {
            this.showNotification(
                '⚠️ Contact form failed to load. Please try refreshing the page.', 
                'error'
            );
        }

        initializeAnimations() {
            setTimeout(() => {
                this.setupScrollAnimations();
                this.setupStaggeredAnimations();
            }, 300);
        }

        setupScrollAnimations() {
            try {
                const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-in');
                        }
                    });
                }, observerOptions);

                const animatedElements = document.querySelectorAll(
                    '.intro-item, .contact-method, .form-group'
                );
                
                console.log(`🎬 Setting up scroll animations for ${animatedElements.length} elements`);
                
                animatedElements.forEach(el => {
                    el.classList.add('animate-on-scroll');
                    observer.observe(el);
                });
                
            } catch (error) {
                console.warn('Scroll animation setup failed:', error);
            }
        }

        setupStaggeredAnimations() {
            const formGroups = document.querySelectorAll('.form-group');
            formGroups.forEach((group, index) => {
                group.style.opacity = '0';
                group.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    group.style.transition = 'all 0.5s ease';
                    group.style.opacity = '1';
                    group.style.transform = 'translateY(0)';
                }, index * 100 + 200);
            });
        }

        cleanup() {
    console.log('🧹 Cleaning up Contact Module...');
    this.isInitialized = false;
    
    const notifications = document.querySelectorAll('.dva-notification');
    notifications.forEach(notification => notification.remove());
    
    const reloadBtn = document.querySelector('button[style*="bottom: 20px"]');
    if (reloadBtn) reloadBtn.remove();
    
    // ✅ CLEAN UP EVENT LISTENERS
    if (this.escapeKeyHandler) {
        document.removeEventListener('keydown', this.escapeKeyHandler);
        this.escapeKeyHandler = null;
    }
    
    // Remove auto-generated buttons
    const successActions = document.querySelector('.success-actions');
    if (successActions) {
        successActions.remove();
    }
}

    }

    // EXPOSE CLASS GLOBALLY
    window.ContactModule = ContactModule;
    console.log('✅ DVA ContactModule class defined successfully');

} else {
    console.log('⚠️ ContactModule already exists, skipping redefinition');
}

// ===== MODULE INITIALIZATION ===== //

document.addEventListener('navigationChange', (e) => {
    const currentPage = e.detail ? e.detail.page : null;
    
    if (currentPage === 'contact') {
        setTimeout(() => {
            if (!window.contactModuleInstance && window.ContactModule) {
                console.log('🚀 Creating DVA Contact module instance');
                window.contactModuleInstance = new window.ContactModule();
            }
        }, 200);
    } else {
        if (window.contactModuleInstance) {
            window.contactModuleInstance.cleanup();
            window.contactModuleInstance = null;
        }
    }
});

// Direct initialization for contact page
if (window.location.hash.includes('#/contact')) {
    setTimeout(() => {
        if (window.ContactModule && !window.contactModuleInstance) {
            console.log('🔄 Direct DVA Contact initialization');
            window.contactModuleInstance = new window.ContactModule();
        }
    }, 500);
}

console.log('📞 DVA Contact Module loaded successfully');
