// main.js - Main JavaScript functionality for DiabeLife Landing Page

class DiabeLifeApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupAnimations();
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupFormHandlers();
        this.setupCounterAnimations();
        this.setupIntersectionObserver();
    }

    setupEventListeners() {
        // Navigation scroll effect
        window.addEventListener('scroll', () => {
            this.handleNavbarScroll();
        });

        // Mobile menu toggle
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Language toggle
        this.setupLanguageToggle();

        // CTA buttons
        this.setupCTAButtons();

        // Post interactions
        this.setupPostInteractions();

        // Resize handler
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    setupLanguageToggle() {
        const langToggle = document.getElementById('langToggle');
        const flagIcon = langToggle.querySelector('.flag-icon');
        const langText = langToggle.querySelector('.lang-text');
        
        let isSpanish = true; // Start with Spanish
        
        langToggle.addEventListener('click', () => {
            if (isSpanish) {
                // Switch to English
                flagIcon.textContent = '🇺🇸';
                langText.textContent = 'EN';
                // Trigger language change to English
                if (window.i18n) {
                    window.i18n.changeLanguage('en');
                }
                isSpanish = false;
            } else {
                // Switch to Spanish
                flagIcon.textContent = '🇪🇸';
                langText.textContent = 'ES';
                // Trigger language change to Spanish
                if (window.i18n) {
                    window.i18n.changeLanguage('es');
                }
                isSpanish = true;
            }
        });
    }

    handleNavbarScroll() {
        const header = document.querySelector('.header');
        const scrollY = window.scrollY;

        if (scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    }

    setupMobileMenu() {
        const navLinks = document.querySelectorAll('.nav__link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
    }

    toggleMobileMenu() {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const icon = navToggle.querySelector('i');

        navMenu.classList.toggle('nav__menu--active');
        
        if (navMenu.classList.contains('nav__menu--active')) {
            icon.className = 'fas fa-times';
            document.body.style.overflow = 'hidden';
        } else {
            icon.className = 'fas fa-bars';
            document.body.style.overflow = '';
        }
    }

    closeMobileMenu() {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const icon = navToggle.querySelector('i');

        navMenu.classList.remove('nav__menu--active');
        icon.className = 'fas fa-bars';
        document.body.style.overflow = '';
    }

    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupCTAButtons() {
        const ctaButtons = document.querySelectorAll('.btn');
        
        ctaButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const buttonText = button.textContent.trim();
                const dataI18n = button.getAttribute('data-i18n');
                
                if (buttonText.includes('Comenzar') || buttonText.includes('Get Started') || 
                    dataI18n === 'cta.patient' || buttonText.includes('Paciente') || buttonText.includes('Patient')) {
                    this.handlePatientSignup(e);
                } else if (dataI18n === 'cta.doctor' || buttonText.includes('Médico') || buttonText.includes('Doctor')) {
                    this.handleDoctorSignup(e);
                } else if (buttonText.includes('Demo') || buttonText.includes('Ver Demo') || buttonText.includes('Watch Demo')) {
                    this.handleDemoRequest(e);
                } else if (buttonText.includes('Iniciar') || buttonText.includes('Sign In')) {
                    this.handleLogin(e);
                } else if (buttonText.includes('Plan Básico') || buttonText.includes('Basic Plan')) {
                    this.handlePricingSelection(e, 'basic', '$10');
                } else if (buttonText.includes('Plan Premium') || buttonText.includes('Premium Plan')) {
                    this.handlePricingSelection(e, 'premium', '$30');
                } else if (buttonText.includes('Contactar Ventas') || buttonText.includes('Contact Sales')) {
                    this.handlePricingSelection(e, 'professional', '$100');
                }
            });
        });
    }

    handlePatientSignup(e) {
        e.preventDefault();
        this.showNotification('Redirigiendo a la aplicación...', 'success');
        // Simulate redirect
        setTimeout(() => {
            console.log('Redirecting to patient signup...');
        }, 2000);
    }

    handleDoctorSignup(e) {
        e.preventDefault();
        this.showNotification('Redirigiendo a la aplicación...', 'success');
        // Simulate redirect
        setTimeout(() => {
            console.log('Redirecting to doctor signup...');
        }, 2000);
    }

    handleDemoRequest(e) {
        e.preventDefault();
        this.showNotification('¡Demo solicitada! Se enviará un enlace a su correo.', 'info');
        this.openDemoModal();
    }

    handleLogin(e) {
        e.preventDefault();
        this.showNotification('Redirigiendo al inicio de sesión...', 'info');
        // Simulate redirect
        setTimeout(() => {
            console.log('Redirecting to login...');
        }, 1000);
    }

    handlePricingSelection(e, planType, price) {
        e.preventDefault();
        
        if (planType === 'professional') {
            this.showNotification('¡Solicitud de contacto enviada! Nuestro equipo de ventas se comunicará contigo pronto.', 'success');
            this.openContactSalesModal(price);
        } else {
            this.showNotification(`¡Plan ${planType === 'basic' ? 'Básico' : 'Premium'} seleccionado! Redirigiendo al checkout...`, 'success');
            this.openPaymentModal(planType, price);
        }
    }

    openPaymentModal(planType, price) {
        // Create payment modal
        const modal = document.createElement('div');
        modal.className = 'payment-modal';
        modal.innerHTML = `
            <div class="payment-modal__content">
                <div class="payment-modal__header">
                    <h3>Suscripción a DiabeLife</h3>
                    <button class="payment-modal__close">&times;</button>
                </div>
                <div class="payment-modal__body">
                    <div class="selected-plan">
                        <h4>Plan ${planType === 'basic' ? 'Básico' : 'Premium'}</h4>
                        <div class="plan-price">${price}/mes</div>
                    </div>
                    <form class="payment-form">
                        <div class="form-group">
                            <label for="payment-name">Nombre completo:</label>
                            <input type="text" id="payment-name" required>
                        </div>
                        <div class="form-group">
                            <label for="payment-email">Correo electrónico:</label>
                            <input type="email" id="payment-email" required>
                        </div>
                        <div class="form-group">
                            <label for="payment-card">Número de tarjeta:</label>
                            <input type="text" id="payment-card" placeholder="1234 5678 9012 3456" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="payment-expiry">MM/AA:</label>
                                <input type="text" id="payment-expiry" placeholder="12/25" required>
                            </div>
                            <div class="form-group">
                                <label for="payment-cvv">CVV:</label>
                                <input type="text" id="payment-cvv" placeholder="123" required>
                            </div>
                        </div>
                        <button type="submit" class="btn btn--primary">Confirmar Suscripción</button>
                    </form>
                </div>
            </div>
        `;

        this.setupModalStyles(modal, 'payment');
        this.setupModalEvents(modal, 'payment');
    }

    openContactSalesModal(price) {
        // Create contact sales modal
        const modal = document.createElement('div');
        modal.className = 'contact-modal';
        modal.innerHTML = `
            <div class="contact-modal__content">
                <div class="contact-modal__header">
                    <h3>Plan Profesional - ${price}/mes</h3>
                    <button class="contact-modal__close">&times;</button>
                </div>
                <div class="contact-modal__body">
                    <p>Nuestro equipo de ventas se pondrá en contacto contigo para ofrecerte una demostración personalizada y configurar tu cuenta profesional.</p>
                    <form class="contact-form">
                        <div class="form-group">
                            <label for="contact-name">Nombre completo:</label>
                            <input type="text" id="contact-name" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-email">Correo electrónico:</label>
                            <input type="email" id="contact-email" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-phone">Teléfono:</label>
                            <input type="tel" id="contact-phone" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-organization">Organización/Clínica:</label>
                            <input type="text" id="contact-organization" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-patients">Número aproximado de pacientes:</label>
                            <select id="contact-patients" required>
                                <option value="">Seleccionar...</option>
                                <option value="1-50">1-50 pacientes</option>
                                <option value="51-100">51-100 pacientes</option>
                                <option value="101-500">101-500 pacientes</option>
                                <option value="500+">Más de 500 pacientes</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn--primary">Solicitar Contacto</button>
                    </form>
                </div>
            </div>
        `;

        this.setupModalStyles(modal, 'contact');
        this.setupModalEvents(modal, 'contact');
    }

    setupModalStyles(modal, type) {
        const modalStyles = `
            .${type}-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease-out;
            }
            .${type}-modal__content {
                background: white;
                border-radius: 1rem;
                width: 90%;
                max-width: 500px;
                max-height: 90vh;
                overflow-y: auto;
                animation: slideInUp 0.3s ease-out;
            }
            .${type}-modal__header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem;
                border-bottom: 1px solid #e5e7eb;
            }
            .${type}-modal__close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #6b7280;
            }
            .${type}-modal__body {
                padding: 1.5rem;
            }
            .selected-plan {
                text-align: center;
                padding: 1rem;
                background: #f3f4f6;
                border-radius: 0.5rem;
                margin-bottom: 1.5rem;
            }
            .plan-price {
                font-size: 2rem;
                font-weight: bold;
                color: #2563eb;
            }
            .form-row {
                display: grid;
                grid-template-columns: 2fr 1fr;
                gap: 1rem;
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
    }

    setupModalEvents(modal, type) {
        const closeBtn = modal.querySelector(`.${type}-modal__close`);
        const form = modal.querySelector(`.${type === 'payment' ? 'payment' : 'contact'}-form`);

        closeBtn.addEventListener('click', () => {
            this.closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modal);
            }
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (type === 'payment') {
                this.handlePaymentSubmit(form, modal);
            } else {
                this.handleContactSubmit(form, modal);
            }
        });
    }

    handlePaymentSubmit(form, modal) {
        // Simulate payment processing
        this.showNotification('¡Pago procesado exitosamente! Bienvenido a DiabeLife.', 'success');
        console.log('Payment processed:', new FormData(form));
        this.closeModal(modal);
    }

    handleContactSubmit(form, modal) {
        // Simulate contact request
        this.showNotification('¡Solicitud enviada! Nos pondremos en contacto contigo pronto.', 'success');
        console.log('Contact request submitted:', new FormData(form));
        this.closeModal(modal);
    }

    closeModal(modal) {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            if (modal.parentNode) {
                document.body.removeChild(modal);
                document.body.style.overflow = '';
            }
        }, 300);
    }

    openDemoModal() {
        // Create demo modal
        const modal = document.createElement('div');
        modal.className = 'demo-modal';
        modal.innerHTML = `
            <div class="demo-modal__content">
                <div class="demo-modal__header">
                    <h3>Solicitar Demo de DiabeLife</h3>
                    <button class="demo-modal__close">&times;</button>
                </div>
                <div class="demo-modal__body">
                    <form class="demo-form">
                        <div class="form-group">
                            <label for="demo-name">Nombre completo:</label>
                            <input type="text" id="demo-name" required>
                        </div>
                        <div class="form-group">
                            <label for="demo-email">Correo electrónico:</label>
                            <input type="email" id="demo-email" required>
                        </div>
                        <div class="form-group">
                            <label for="demo-role">Soy:</label>
                            <select id="demo-role" required>
                                <option value="">Seleccionar...</option>
                                <option value="patient">Paciente</option>
                                <option value="doctor">Médico</option>
                                <option value="other">Otro profesional de salud</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="demo-message">Mensaje (opcional):</label>
                            <textarea id="demo-message" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn--primary">Solicitar Demo</button>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Add modal styles
        const modalStyles = `
            .demo-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease-out;
            }
            .demo-modal__content {
                background: white;
                border-radius: 1rem;
                width: 90%;
                max-width: 500px;
                max-height: 90vh;
                overflow-y: auto;
                animation: slideInUp 0.3s ease-out;
            }
            .demo-modal__header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem;
                border-bottom: 1px solid #e5e7eb;
            }
            .demo-modal__close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #6b7280;
            }
            .demo-modal__body {
                padding: 1.5rem;
            }
            .form-group {
                margin-bottom: 1rem;
            }
            .form-group label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 500;
                color: #374151;
            }
            .form-group input,
            .form-group select,
            .form-group textarea {
                width: 100%;
                padding: 0.75rem;
                border: 1px solid #d1d5db;
                border-radius: 0.5rem;
                font-size: 1rem;
            }
            .form-group input:focus,
            .form-group select:focus,
            .form-group textarea:focus {
                outline: none;
                border-color: #2563eb;
                box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideInUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);

        // Setup modal event listeners
        const closeBtn = modal.querySelector('.demo-modal__close');
        const form = modal.querySelector('.demo-form');

        closeBtn.addEventListener('click', () => {
            this.closeDemoModal(modal, styleSheet);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeDemoModal(modal, styleSheet);
            }
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleDemoFormSubmit(form, modal, styleSheet);
        });
    }

    closeDemoModal(modal, styleSheet) {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(modal);
            document.head.removeChild(styleSheet);
            document.body.style.overflow = '';
        }, 300);
    }

    handleDemoFormSubmit(form, modal, styleSheet) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate API call
        this.showNotification('Demo solicitada correctamente. Le contactaremos pronto.', 'success');
        console.log('Demo request submitted:', data);
        
        this.closeDemoModal(modal, styleSheet);
    }

    setupPostInteractions() {
        const postActions = document.querySelectorAll('.post-action');
        
        postActions.forEach(action => {
            action.addEventListener('click', (e) => {
                e.preventDefault();
                this.handlePostAction(action);
            });
        });
    }

    handlePostAction(action) {
        const icon = action.querySelector('i');
        const counter = action.querySelector('span');
        let count = parseInt(counter.textContent);

        if (icon.classList.contains('fa-heart')) {
            if (action.classList.contains('liked')) {
                action.classList.remove('liked');
                icon.style.color = '';
                count--;
            } else {
                action.classList.add('liked');
                icon.style.color = '#ef4444';
                count++;
            }
        } else if (icon.classList.contains('fa-comment')) {
            this.showNotification('Función de comentarios próximamente disponible.', 'info');
        } else if (icon.classList.contains('fa-share')) {
            this.handleShare();
            count++;
        }

        counter.textContent = count;
    }

    handleShare() {
        if (navigator.share) {
            navigator.share({
                title: 'DiabeLife - Comunidad de Diabetes',
                text: 'Descubre DiabeLife, la plataforma integral para el manejo de diabetes',
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(window.location.href).then(() => {
                this.showNotification('Enlace copiado al portapapeles', 'success');
            });
        }
    }

    setupCounterAnimations() {
        const counters = document.querySelectorAll('.stat__number');
        
        counters.forEach(counter => {
            const target = counter.textContent;
            counter.textContent = '0';
            
            const updateCounter = () => {
                const current = parseInt(counter.textContent);
                const increment = Math.ceil(parseInt(target.replace(/\D/g, '')) / 100);
                
                if (current < parseInt(target.replace(/\D/g, ''))) {
                    counter.textContent = current + increment + target.replace(/\d/g, '');
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target;
                }
            };
            
            // Start animation when element is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    entry.target.style.opacity = '1';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.feature-card, .post-card, .doctor-feature, .sidebar-widget');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }

    setupAnimations() {
        // Add staggered animation to feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
        });

        // Add hover effects to buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
            });
        });
    }

    setupFormHandlers() {
        // Newsletter signup (if exists)
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSignup(e.target);
            });
        }
    }

    handleNewsletterSignup(form) {
        const email = form.querySelector('input[type="email"]').value;
        
        if (this.validateEmail(email)) {
            this.showNotification('¡Suscripción exitosa! Gracias por unirte a DiabeLife.', 'success');
            form.reset();
        } else {
            this.showNotification('Por favor, ingrese un correo electrónico válido.', 'error');
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <span class="notification__message">${message}</span>
                <button class="notification__close">&times;</button>
            </div>
        `;

        // Add notification styles
        const notificationStyles = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;
                color: white;
                z-index: 10000;
                animation: slideInRight 0.3s ease-out;
                max-width: 400px;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
            }
            .notification--success { background-color: #10b981; }
            .notification--error { background-color: #ef4444; }
            .notification--info { background-color: #2563eb; }
            .notification--warning { background-color: #f59e0b; }
            .notification__content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            .notification__close {
                background: none;
                border: none;
                color: white;
                font-size: 1.25rem;
                cursor: pointer;
                opacity: 0.8;
            }
            .notification__close:hover {
                opacity: 1;
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;

        // Add styles if not already added
        if (!document.querySelector('#notification-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'notification-styles';
            styleSheet.textContent = notificationStyles;
            document.head.appendChild(styleSheet);
        }

        document.body.appendChild(notification);

        // Setup close functionality
        const closeBtn = notification.querySelector('.notification__close');
        closeBtn.addEventListener('click', () => {
            this.hideNotification(notification);
        });

        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                this.hideNotification(notification);
            }
        }, 5000);
    }

    hideNotification(notification) {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }

    handleResize() {
        // Close mobile menu on resize
        if (window.innerWidth > 768) {
            this.closeMobileMenu();
        }
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.diabeLifeApp = new DiabeLifeApp();
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add additional CSS for mobile menu
const additionalStyles = `
    @media (max-width: 768px) {
        .nav__menu {
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            height: calc(100vh - 80px);
            background: white;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 2rem;
            transition: top 0.3s ease-in-out;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            z-index: 1000;
        }
        
        .nav__menu--active {
            top: 80px;
        }
        
        .nav__item {
            margin: 1rem 0;
        }
        
        .nav__link {
            font-size: 1.125rem;
            padding: 0.5rem 1rem;
        }
    }
    
    .loaded {
        animation: fadeIn 0.5s ease-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

// Add the additional styles to the document
const additionalStyleSheet = document.createElement('style');
additionalStyleSheet.textContent = additionalStyles;
document.head.appendChild(additionalStyleSheet);

// FAQ Accordion functionality
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // If this item wasn't active, open it
    if (!isActive) {
        faqItem.classList.add('active');
    }
}
