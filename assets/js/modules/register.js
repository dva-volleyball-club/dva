/**
 * DVA Register Module - Based on existing Contact Form
 * Path: D:\dva\DVA-Volleyball-Website\assets\js\modules\register.js
 */

// PREVENT DUPLICATE CLASS DECLARATIONS
if (typeof window.RegisterModule === 'undefined') {

    class RegisterModule {
        constructor() {
            this.isInitialized = false;
            this.eventListeners = [];
            this.observers = [];
            this.isSubmitting = false;
            
            // Use existing validation patterns
            this.validationPatterns = {
                email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                phone: /^[\+]?[0-9\s\-\(\)]{10,15}$/,
                url: /^https?:\/\/.+\..+/
            };

            // Google Apps Script URL from existing code
            this.GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxZp3TswdiPpth82v7jX9mRwtB00nLdork7Al-BWlgGH_PkLV3gc1IOqzXt11BVOk9l1w/exec';
            
           
            this.init();
        }

        async init() {
            try {
                await this.waitForElements();
                this.setupModuleScope();
                this.bindEvents();
                this.setupAnimations();
                this.initFormValidation();
                
                this.isInitialized = true;
            
                
                document.dispatchEvent(new CustomEvent('registerModuleReady', {
                    detail: { instance: this }
                }));
                
            } catch (error) {
                console.error('❌ Register Module initialization failed:', error);
            }
        }

        setupModuleScope() {
            this.moduleContainer = document.querySelector('.dva-register');
            if (!this.moduleContainer) {
                throw new Error('Register module container not found');
            }
         
        }

        async waitForElements() {
            return new Promise((resolve, reject) => {
                let attempts = 0;
                const maxAttempts = 30;

                const checkElements = () => {
                    attempts++;
                    const registerModule = document.querySelector('.dva-register');

                    if (registerModule) {
                        const form = registerModule.querySelector('#registration-form');
                        const modal = registerModule.querySelector('#registration-success-modal');
                        const toastContainer = registerModule.querySelector('#toast-container');

                        if (form && modal && toastContainer) {
                          
                            resolve();
                            return;
                        }
                    }
                    
                    if (attempts >= maxAttempts) {
                        console.error('❌ Register elements not found after', attempts, 'attempts');
                        reject(new Error('Register elements not found'));
                    } else {
                        setTimeout(checkElements, 150);
                    }
                };

                checkElements();
            });
        }

        bindEvents() {
            

            const form = this.moduleContainer.querySelector('#registration-form');
            if (form) {
                // Form submission
                const submitHandler = (e) => {
                    this.handleFormSubmit(e);
                };
                form.addEventListener('submit', submitHandler);
                this.eventListeners.push({ element: form, event: 'submit', handler: submitHandler });

                // Real-time validation
                const inputs = form.querySelectorAll('input, select, textarea');
                inputs.forEach(input => {
                    const blurHandler = () => this.validateField(input);
                    const inputHandler = () => this.clearFieldError(input);
                    
                    input.addEventListener('blur', blurHandler);
                    input.addEventListener('input', inputHandler);
                    
                    this.eventListeners.push({ element: input, event: 'blur', handler: blurHandler });
                    this.eventListeners.push({ element: input, event: 'input', handler: inputHandler });
                });
            }

          
        }

        initFormValidation() {
            
            
            // Add validation CSS if not already present
            if (!document.getElementById('register-validation-styles')) {
                const style = document.createElement('style');
                style.id = 'register-validation-styles';
                style.textContent = `
                    .dva-register .form-group.error input,
                    .dva-register .form-group.error select {
                        border-color: #e74c3c !important;
                        background-color: rgba(231, 76, 60, 0.1) !important;
                    }
                    
                    .dva-register .form-group.success input,
                    .dva-register .form-group.success select {
                        border-color: #27ae60 !important;
                        background-color: rgba(39, 174, 96, 0.1) !important;
                    }
                `;
                
                document.head.appendChild(style);
             
            }
            
          
        }

        async handleFormSubmit(e) {
            e.preventDefault();
            
            if (this.isSubmitting) return;
            
            const form = e.target;
            const formType = form.dataset.form;
            
           
            
            // Validate entire form
            if (!this.validateForm(form)) {
            
                this.showFormMessage('error', 'Please correct the errors above and try again.');
                return;
            }
            
   
            
            this.isSubmitting = true;
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;
            
            try {
                // Collect form data - EXACTLY as in original code
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                
             
                
                // Add form type and timestamp - EXACTLY as in original code
                data.formType = formType;
                data.timestamp = new Date().toISOString();
                data.submissionDate = new Date().toLocaleString('vi-VN');
                
                // Calculate age from birth year
                if (data.birthyear) {
                    data.age = new Date().getFullYear() - parseInt(data.birthyear);
                }
                
                // Format position display name
                if (data.position) {
                    const positionNames = {
                        'outside-hitter': 'Outside Hitter',
                        'middle-blocker': 'Middle Blocker',
                        'setter': 'Setter',
                        'libero': 'Libero',
                        'opposite': 'Opposite Hitter'
                    };
                    data.positionDisplay = positionNames[data.position] || data.position;
                }
                
         
                
                // Use enhanced submission method from original code
                const success = await this.sendToGoogleSheetsEnhanced(data);
                
                if (success) {
       
                    // Show success modal instead of simple message
                    this.showSuccessModal(data);
                    form.reset();
                    this.resetFormValidation(formType);
                    
                    // Track successful submission
                    this.trackFormSubmission(formType, data);
                    
                } else {
                    throw new Error('All submission methods failed');
                }
                
            } catch (error) {
                console.error('💥 Form submission error:', error);
                // Show error toast
                this.showToast('error', 'Registration Failed', 'Sorry, there was an error submitting your registration. Please try again or contact us directly at 0768 299 329.');
            } finally {
                this.isSubmitting = false;
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        }

        // Enhanced function with multiple fallback methods - EXACTLY from original code
        async sendToGoogleSheetsEnhanced(data) {
      
            
            // Method 1: Form submission (most reliable)
            try {
                const formResult = await this.sendToGoogleSheets(data);
                if (formResult) {
       
                    return true;
                }
            } catch (error) {
          
            }
            
            // Method 2: Direct URL (fallback)
            try {
                const urlResult = this.sendToGoogleSheetsViaURL(data);
                if (urlResult) {
              
                    return true;
                }
            } catch (error) {
      
            }
            
            // Method 3: Image pixel technique
            try {
     
                
                const params = new URLSearchParams(data);
                const img = new Image();
                
                return new Promise((resolve) => {
                    img.onload = () => {
                 
                        resolve(true);
                    };
                    
                    img.onerror = () => {
           
                        resolve(true); // Still assume success
                    };
                    
                    img.src = `${this.GOOGLE_SCRIPT_URL}?${params.toString()}`;
                    
                    // Timeout after 5 seconds
                    setTimeout(() => {
                    
                        resolve(true);
                    }, 5000);
                });
                
            } catch (error) {
     
            }
            
            // If all methods fail
      
            this.saveToLocalStorage(data);
            return false;
        }

        // EXACTLY from original code
        async sendToGoogleSheets(data) {
            return new Promise((resolve, reject) => {
                try {
                
                    // Create invisible iframe to handle response
                    const iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.name = 'registration_frame';
                    document.body.appendChild(iframe);
                    
                    // Create form
                    const form = document.createElement('form');
                    form.method = 'GET';
                    form.action = this.GOOGLE_SCRIPT_URL;
                    form.target = 'registration_frame';
                    form.style.display = 'none';
                    
                    // Add all data as hidden inputs
                    Object.keys(data).forEach(key => {
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = key;
                        input.value = String(data[key] || '');
                        form.appendChild(input);
                    });
                    
                    // Handle iframe load
                    iframe.onload = function() {
            
                        
                        try {
                            // Try to read response (may fail due to CORS)
                            const responseText = iframe.contentDocument.body.textContent;
                     
                        } catch (error) {
                       
                        }
                        
                        // Clean up
                        setTimeout(() => {
                            if (document.body.contains(form)) document.body.removeChild(form);
                            if (document.body.contains(iframe)) document.body.removeChild(iframe);
                        }, 1000);
                        
                        resolve(true);
                    };
                    
                    iframe.onerror = function() {
                        console.error('❌ Form submission failed');
                        
                        // Clean up
                        if (document.body.contains(form)) document.body.removeChild(form);
                        if (document.body.contains(iframe)) document.body.removeChild(iframe);
                        
                        resolve(false);
                    };
                    
                    // Submit form
                    document.body.appendChild(form);
                    form.submit();
                    
    
                    
                } catch (error) {
                    console.error('❌ Form submission error:', error);
                    
                    // Fallback: Save to localStorage
                    this.saveToLocalStorage(data);
                    resolve(false);
                }
            });
        }

        // Alternative method using direct URL navigation - EXACTLY from original code
        sendToGoogleSheetsViaURL(data) {
            try {
       
                
                const params = new URLSearchParams();
                Object.keys(data).forEach(key => {
                    params.append(key, String(data[key] || ''));
                });
                
                const url = `${this.GOOGLE_SCRIPT_URL}?${params.toString()}`;
        
                
                // Open in new tab to see result
                const newWindow = window.open(url, '_blank');
                
                if (newWindow) {
              
                    // Close the tab after 3 seconds
                    setTimeout(() => {
                        newWindow.close();
                    }, 3000);
                    return true;
                } else {
   
                    return false;
                }
                
            } catch (error) {
                console.error('❌ URL method failed:', error);
                return false;
            }
        }

        // Fallback: Save to localStorage - EXACTLY from original code
        saveToLocalStorage(data) {
            try {
                const submissions = JSON.parse(localStorage.getItem('dva_registrations') || '[]');
                submissions.push({
                    ...data,
                    id: Date.now(),
                    status: 'pending'
                });
                localStorage.setItem('dva_registrations', JSON.stringify(submissions));
        
            } catch (error) {
                console.error('Error saving to localStorage:', error);
            }
        }

        // Function to show success modal - ADAPTED from original
        showSuccessModal(data) {
            const modal = this.moduleContainer.querySelector('#registration-success-modal');
            if (modal) {
                // Update content with user data
                const playerName = data.fullname || 'Player';
                const position = data.positionDisplay || data.position || 'Player';
                
                // Customize message
                const messageElement = modal.querySelector('.success-message');
                if (messageElement) {
                    messageElement.innerHTML = `
                        Thank you <strong>${playerName}</strong> for registering as a <strong>${position}</strong>!<br>
                        Our Leader will review your application and contact you soon.
                    `;
                }
                
                // Show modal
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
                
                // Show success toast as well
                this.showToast('success', 'Registration Submitted!', 'Your application has been sent successfully.');
                
              
            }
        }

        // Function to close success modal
        closeSuccessModal() {
            const modal = this.moduleContainer.querySelector('#registration-success-modal');
            if (modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        }

        // Function to go to home page
        goToHomePage() {
            this.closeSuccessModal();
            window.location.href = '#/home';
        }

        // Enhanced toast notification system - EXACTLY from original code
        showToast(type, title, message, duration = 5000) {
            const container = this.moduleContainer.querySelector('#toast-container');
            if (!container) return;
            
            const toastId = 'toast-' + Date.now();
            const icons = {
                success: 'fas fa-check',
                error: 'fas fa-times',
                warning: 'fas fa-exclamation'
            };
            
            const toast = document.createElement('div');
            toast.className = `toast-notification ${type}`;
            toast.id = toastId;
            toast.innerHTML = `
                <div class="toast-icon">
                    <i class="${icons[type]}"></i>
                </div>
                <div class="toast-content">
                    <div class="toast-title">${title}</div>
                    <div class="toast-message">${message}</div>
                </div>
                <button class="toast-close" onclick="registerModule.closeToast('${toastId}')">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            container.appendChild(toast);
            
            // Auto remove after duration
            setTimeout(() => {
                this.closeToast(toastId);
            }, duration);
        }

        // Function to close toast
        closeToast(toastId) {
            const toast = document.getElementById(toastId);
            if (toast) {
                toast.style.animation = 'toastSlideOut 0.3s ease';
                setTimeout(() => {
                    if (toast.parentElement) {
                        toast.parentElement.removeChild(toast);
                    }
                }, 300);
            }
        }

        // Validation functions - EXACTLY from original code
        validateForm(form) {
            let isValid = true;
            const inputs = form.querySelectorAll('input, select, textarea');
            
            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isValid = false;
                }
            });
            
            // Additional cross-field validations for registration form
            if (form.dataset.form === 'registration') {
                isValid = this.validateRegistrationFields(form) && isValid;
            }
            
            return isValid;
        }

        validateRegistrationFields(form) {
            let isValid = true;
            
            // Check if spike reach is greater than block reach
            const spikeReach = parseInt(form.querySelector('[name="spikereach"]').value);
            const blockReach = parseInt(form.querySelector('[name="blockreach"]').value);
            
            if (spikeReach && blockReach && spikeReach <= blockReach) {
                this.showFieldError(form.querySelector('[name="spikereach"]'), 'Spike reach should typically be higher than block reach.');
                isValid = false;
            }
            
            // Check reasonable height vs reach relationship
            const height = parseInt(form.querySelector('[name="height"]').value);
            if (height && spikeReach && (spikeReach - height) < 40) {
                this.showFieldError(form.querySelector('[name="spikereach"]'), 'Spike reach seems too low compared to your height. Please double-check.');
                isValid = false;
            }
            
            // Age validation based on birth year
            const birthYear = parseInt(form.querySelector('[name="birthyear"]').value);
            if (birthYear) {
                const age = new Date().getFullYear() - birthYear;
                if (age < 8 || age > 50) {
                    this.showFieldError(form.querySelector('[name="birthyear"]'), 'Age must be between 8 and 50 years.');
                    isValid = false;
                }
            }
            
            return isValid;
        }

        validateField(field) {
            const value = field.value.trim();
            const fieldName = field.name;
            const fieldType = field.type;
            const isRequired = field.hasAttribute('required');
            
            // Clear previous error
            this.clearFieldError(field);
            
            // Required field validation
            if (isRequired && !value) {
                this.showFieldError(field, 'This field is required.');
                return false;
            }
            
            // Skip other validations if field is empty and not required
            if (!value && !isRequired) {
                return true;
            }
            
            // Phone validation
            if (fieldType === 'tel' || fieldName.includes('phone')) {
                if (!this.validationPatterns.phone.test(value)) {
                    this.showFieldError(field, 'Please enter a valid phone number (10-15 digits).');
                    return false;
                }
            }
            
            // Birth year validation
            if (fieldName === 'birthyear') {
                const year = parseInt(value);
                const currentYear = new Date().getFullYear();
                if (year < 1960 || year > currentYear - 8) {
                    this.showFieldError(field, `Birth year must be between 1960 and ${currentYear - 8}.`);
                    return false;
                }
            }
            
            // Height validation
            if (fieldName === 'height') {
                const height = parseInt(value);
                if (height < 150 || height > 220) {
                    this.showFieldError(field, 'Height must be between 150 and 220 cm.');
                    return false;
                }
            }
            
            // Weight validation
            if (fieldName === 'weight') {
                const weight = parseInt(value);
                if (weight < 40 || weight > 150) {
                    this.showFieldError(field, 'Weight must be between 40 and 150 kg.');
                    return false;
                }
            }
            
            // Jersey number validation
            if (fieldName === 'jersey') {
                const jersey = parseInt(value);
                if (jersey < 1 || jersey > 99) {
                    this.showFieldError(field, 'Jersey number must be between 1 and 99.');
                    return false;
                }
            }
            
            // Reach validation
            if (fieldName === 'spikereach' || fieldName === 'blockreach') {
                const reach = parseInt(value);
                if (reach < 200 || reach > 380) {
                    this.showFieldError(field, 'Reach must be between 200 and 380 cm.');
                    return false;
                }
            }
            
            // Name validation
            if (fieldName === 'fullname') {
                if (value.length < 2) {
                    this.showFieldError(field, 'Full name must be at least 2 characters.');
                    return false;
                }
                if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(value)) {
                    this.showFieldError(field, 'Full name should only contain letters and spaces.');
                    return false;
                }
            }
            
            // Mark field as valid
            field.closest('.form-group').classList.add('success');
            return true;
        }

        showFieldError(field, message) {
            const formGroup = field.closest('.form-group');
            formGroup.classList.remove('success');
            formGroup.classList.add('error');
            
            let errorElement = formGroup.querySelector('.error-message');
            if (!errorElement) {
                errorElement = document.createElement('div');
                errorElement.className = 'error-message';
                formGroup.appendChild(errorElement);
            }
            
            errorElement.textContent = message;
        }

        clearFieldError(field) {
            const formGroup = field.closest('.form-group');
            formGroup.classList.remove('error', 'success');
            
            const errorElement = formGroup.querySelector('.error-message');
            if (errorElement) {
                errorElement.remove();
            }
        }

        resetFormValidation(formType) {
            const form = this.moduleContainer.querySelector(`[data-form="${formType}"]`);
            if (form) {
                const formGroups = form.querySelectorAll('.form-group');
                formGroups.forEach(group => {
                    group.classList.remove('error', 'success');
                    const errorElement = group.querySelector('.error-message');
                    if (errorElement) {
                        errorElement.remove();
                    }
                });
            }
        }

        // Form messages
        showFormMessage(type, message) {
            const activeForm = this.moduleContainer.querySelector('.contact-form.active');
            if (!activeForm) return;
            
            let messageElement = activeForm.querySelector('.form-message');
            if (!messageElement) {
                messageElement = document.createElement('div');
                messageElement.className = 'form-message';
                activeForm.insertBefore(messageElement, activeForm.firstChild);
            }
            
            messageElement.className = `form-message ${type} show`;
            messageElement.textContent = message;
            
            // Auto-hide success messages after 8 seconds
            if (type === 'success') {
                setTimeout(() => {
                    messageElement.classList.remove('show');
                }, 8000);
            }
        }

        trackFormSubmission(formType, data) {
     
            
            // Track registration specific data
            if (formType === 'registration') {
                
            }
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

        // Public methods
        getModuleStats() {
            return {
                initialized: this.isInitialized,
                isSubmitting: this.isSubmitting
            };
        }

        cleanup() {
            

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
    window.RegisterModule = RegisterModule;
   

} else {
    
}

// MODULE INITIALIZATION
document.addEventListener('navigationChange', (e) => {
    const currentPage = e.detail?.page;
    

    if (currentPage === 'register') {
        setTimeout(() => {
            if (!window.registerModuleInstance && window.RegisterModule) {
         
                try {
                    window.registerModuleInstance = new window.RegisterModule();
                    window.registerModule = window.registerModuleInstance; // For global access
                } catch (error) {
                    console.error('❌ Failed to create Register module instance:', error);
                }
            } else if (window.registerModuleInstance && !window.registerModuleInstance.isInitialized) {
               
                window.registerModuleInstance.init();
            }
        }, 300);
    }
});

// Direct initialization if already on register page
if (window.location.hash.includes('#/register')) {
    setTimeout(() => {
        if (window.RegisterModule && !window.registerModuleInstance) {
          
            try {
                window.registerModuleInstance = new window.RegisterModule();
                window.registerModule = window.registerModuleInstance;
            } catch (error) {
                console.error('❌ Direct initialization failed:', error);
            }
        }
    }, 1000);
}

// Make functions globally available for HTML onclick handlers
window.closeSuccessModal = function() {
    if (window.registerModuleInstance) {
        window.registerModuleInstance.closeSuccessModal();
    }
};

window.goToHomePage = function() {
    if (window.registerModuleInstance) {
        window.registerModuleInstance.goToHomePage();
    }
};


