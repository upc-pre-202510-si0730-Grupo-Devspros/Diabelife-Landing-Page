// i18n.js - Internationalization system for DiabeLife Landing Page

class I18n {
    constructor() {
        this.currentLang = 'es';
        this.translations = {};
        this.init();
    }

    init() {
        // Load translations
        this.loadTranslations();

        // Set initial language from localStorage or browser preference
        const savedLang = localStorage.getItem('diabelife-lang');
        const browserLang = navigator.language.substring(0, 2);

        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        } else if (this.translations[browserLang]) {
            this.currentLang = browserLang;
        }

        // Apply initial language
        this.setLanguage(this.currentLang);

        // Setup language switcher
        this.setupLanguageSwitcher();
    }

    loadTranslations() {
        this.translations = {
            es: {
                // Meta
                title: "DiabeLife - Tu Comunidad de Diabetes",
                meta: {
                    description: "Plataforma integral para el manejo de diabetes. Conecta con médicos, otros pacientes y gestiona tu salud de manera inteligente."
                },

                // Navigation
                nav: {
                    home: "Inicio",
                    features: "Características",
                    community: "FAQ",
                    pricing: "Suscripciones",
                    contact: "Contacto"
                },

                // Hero Section
                hero: {
                    title: "Gestiona tu diabetes con inteligencia",
                    description: "Una plataforma integral que conecta pacientes con diabetes, médicos especialistas y una comunidad de apoyo. Monitorea, aprende y vive mejor con DiabeLife.",
                    cta: {
                        primary: "Comenzar Ahora",
                        secondary: "Ver Demo"
                    },
                    stats: {
                        users: "Usuarios Activos",
                        doctors: "Médicos Certificados",
                        satisfaction: "Satisfacción"
                    },
                    floating: {
                        appointment: "Cita: Dr. García",
                        community: "Comunidad: 5 nuevos posts"
                    }
                },

                // Features Section
                features: {
                    title: "Características Principales",
                    description: "Herramientas diseñadas específicamente para el manejo integral de la diabetes",
                    community: {
                        title: "Comunidad Activa",
                        description: "Conéctate con otros pacientes y médicos. Comparte experiencias, consejos y apoyo mutuo en nuestra comunidad global.",
                        feature1: "Posts de médicos especializados",
                        feature2: "Experiencias de pacientes reales",
                        feature3: "Grupos temáticos por tipo de diabetes",
                        feature4: "Moderación médica profesional"
                    },
                    reports: {
                        title: "Reportes Médicos",
                        description: "Los médicos pueden crear reportes detallados sobre el progreso de sus pacientes y compartir información vital.",
                        feature1: "Historial clínico digital",
                        feature2: "Seguimiento de glucosa",
                        feature3: "Análisis de tendencias",
                        feature4: "Reportes exportables"
                    },
                    appointments: {
                        title: "Gestión de Citas",
                        description: "Sistema inteligente de citas que facilita la comunicación entre médicos y pacientes.",
                        feature1: "Agenda automática de médicos",
                        feature2: "Recordatorios inteligentes",
                        feature3: "Teleconsultas disponibles",
                        feature4: "Historial de citas completo"
                    },
                    glucometer: {
                        title: "Glucómetro Virtual",
                        description: "Monitorea tus niveles de glucosa en tiempo real con nuestro innovador glucómetro virtual integrado a la plataforma.",
                        feature1: "Sincronización automática con dispositivos",
                        feature2: "Alertas de niveles críticos",
                        feature3: "Gráficos de tendencias en tiempo real",
                        feature4: "Registro automático de mediciones"
                    },
                    lifestyle: {
                        title: "Vida Saludable",
                        description: "Administra el registro y seguimiento de tu actividad física y alimentación diaria, con recomendaciones personalizadas para un estilo de vida saludable.",
                        feature1: "Seguimiento de pasos y ejercicios",
                        feature2: "Registro de alimentación diaria",
                        feature3: "Análisis de calorías y nutrientes",
                        feature4: "Recomendaciones personalizadas"
                    }
                },

                // FAQ Section
                faq: {
                    title: "Preguntas Frecuentes",
                    description: "Encuentra respuestas a las preguntas más comunes sobre DiabeLife",
                    questions: {
                        q1: {
                            question: "¿Cómo puede DiabeLife ayudarme a controlar mi diabetes?",
                            answer: "DiabeLife ofrece herramientas integrales para monitoreo continuo de glucosa, recordatorios de medicamentos, acceso a especialistas médicos y una comunidad de apoyo. Nuestros algoritmos inteligentes analizan tus patrones de glucosa para brindarte recomendaciones personalizadas."
                        },
                        q2: {
                            question: "¿Es segura la información médica que comparto en la plataforma?",
                            answer: "Absolutamente. DiabeLife cumple con todas las regulaciones HIPAA y utiliza encriptación de nivel bancario para proteger tu información médica. Tus datos se almacenan en servidores seguros y nunca se comparten sin tu consentimiento explícito."
                        },
                        q3: {
                            question: "¿Puedo usar DiabeLife junto con mi médico actual?",
                            answer: "¡Por supuesto! DiabeLife está diseñado para complementar, no reemplazar, la atención médica tradicional. Puedes compartir fácilmente tus reportes y datos con tu médico actual, y muchos profesionales ya forman parte de nuestra red."
                        },
                        q4: {
                            question: "¿Qué dispositivos de monitoreo son compatibles con DiabeLife?",
                            answer: "DiabeLife es compatible con los principales dispositivos de monitoreo continuo de glucosa (CGM) como Dexcom, FreeStyle Libre, y medidores tradicionales. También se integra con aplicaciones de salud populares y dispositivos wearables."
                        },
                        q5: {
                            question: "¿Puedo cancelar mi suscripción en cualquier momento?",
                            answer: "Sí, puedes cancelar tu suscripción en cualquier momento desde tu panel de usuario. No hay contratos a largo plazo ni penalizaciones por cancelación. Tu acceso continuará hasta el final del período de facturación actual."
                        }
                    }
                },

                // Pricing Section
                pricing: {
                    title: "Planes de Suscripción",
                    description: "Elige el plan que mejor se adapte a tus necesidades de manejo de diabetes",
                    guarantee: "Garantía de 30 días - Cancela cuando quieras",
                    basic: {
                        name: "Plan Básico",
                        price: "$10",
                        period: "/mes",
                        description: "Perfecto para comenzar tu viaje de control de diabetes",
                        cta: "Comenzar Plan Básico",
                        features: {
                            feature1: "Seguimiento básico de glucosa",
                            feature2: "Comunidad de pacientes",
                            feature3: "Recordatorios de medicamentos",
                            feature4: "Soporte por email",
                            feature5: "1 consulta médica virtual"
                        }
                    },
                    premium: {
                        name: "Plan Premium",
                        price: "$30",
                        period: "/mes",
                        description: "La opción más popular con herramientas avanzadas",
                        cta: "Elegir Plan Premium",
                        popular: "Más Popular",
                        features: {
                            feature1: "Todo lo del Plan Básico",
                            feature2: "Análisis avanzado de tendencias",
                            feature3: "Reportes médicos detallados",
                            feature4: "3 consultas médicas virtuales",
                            feature5: "Acceso a especialistas",
                            feature6: "Planes de alimentación personalizados"
                        }
                    },
                    professional: {
                        name: "Plan Profesional",
                        price: "$100",
                        period: "/mes",
                        description: "Para profesionales de la salud y uso clínico",
                        cta: "Contactar Ventas",
                        features: {
                            feature1: "Todo lo del Plan Premium",
                            feature2: "Panel de gestión de pacientes",
                            feature3: "Consultas ilimitadas",
                            feature4: "API para integración clínica",
                            feature5: "Soporte prioritario 24/7",
                            feature6: "Capacitación personalizada",
                            feature7: "Reportes para seguros médicos"
                        }
                    }
                },

                // CTA Section
                cta: {
                    title: "¿Listo para transformar tu manejo de la diabetes?",
                    description: "Únete a miles de pacientes y médicos que ya confían en DiabeLife para mejorar su calidad de vida.",
                    patient: "Soy Paciente",
                    doctor: "Soy Médico"
                },

                // Team Section
                team: {
                    title: "Nuestro Equipo",
                    description: "Conoce a los desarrolladores apasionados que están creando DiabeLife",
                    members: {
                        member1: {
                            name: "Integrante 1"
                        },
                        member2: {
                            name: "Integrante 2"
                        },
                        member3: {
                            name: "Stephano Espinoza"
                        },
                        member4: {
                            name: "Diego Véliz"
                        },
                        member5: {
                            name: "Integrante 5"
                        }
                    }
                },

                // Footer
                footer: {
                    description: "Transformando el cuidado de la diabetes a través de la tecnología y la comunidad.",
                    product: "Producto",
                    features: "Características",
                    pricing: "Precios",
                    security: "Seguridad",
                    api: "API",
                    support: "Soporte",
                    help: "Centro de Ayuda",
                    contact_support: "Contactar Soporte",
                    community_support: "Comunidad",
                    tutorials: "Tutoriales",
                    company: "Empresa",
                    about: "Sobre Nosotros",
                    careers: "Carreras",
                    press: "Prensa",
                    blog: "Blog",
                    legal: "Legal",
                    privacy: "Privacidad",
                    terms: "Términos",
                    cookies: "Cookies",
                    compliance: "Cumplimiento",
                    rights: "Todos los derechos reservados.",
                    disclaimer: "DiabeLife no reemplaza el consejo médico profesional. Siempre consulte con su médico."
                }
            },

            en: {
                // Meta
                title: "DiabeLife - Your Diabetes Community",
                meta: {
                    description: "Comprehensive platform for diabetes management. Connect with doctors, other patients and manage your health intelligently."
                },

                // Navigation
                nav: {
                    home: "Home",
                    features: "Features",
                    community: "FAQ",
                    pricing: "Pricing",
                    contact: "Contact"
                },

                // Hero Section
                hero: {
                    title: "Manage your diabetes with intelligence",
                    description: "A comprehensive platform that connects diabetes patients, specialist doctors and a support community. Monitor, learn and live better with DiabeLife.",
                    cta: {
                        primary: "Get Started",
                        secondary: "Watch Demo"
                    },
                    stats: {
                        users: "Active Users",
                        doctors: "Certified Doctors",
                        satisfaction: "Satisfaction"
                    },
                    floating: {
                        appointment: "Appointment: Dr. García",
                        community: "Community: 5 new posts"
                    }
                },

                // Features Section
                features: {
                    title: "Key Features",
                    description: "Tools specifically designed for comprehensive diabetes management",
                    community: {
                        title: "Active Community",
                        description: "Connect with other patients and doctors. Share experiences, tips and mutual support in our global community.",
                        feature1: "Posts from specialized doctors",
                        feature2: "Real patient experiences",
                        feature3: "Thematic groups by diabetes type",
                        feature4: "Professional medical moderation"
                    },
                    reports: {
                        title: "Medical Reports",
                        description: "Doctors can create detailed reports on their patients' progress and share vital information.",
                        feature1: "Digital medical history",
                        feature2: "Glucose tracking",
                        feature3: "Trend analysis",
                        feature4: "Exportable reports"
                    },
                    appointments: {
                        title: "Appointment Management",
                        description: "Intelligent appointment system that facilitates communication between doctors and patients.",
                        feature1: "Automatic doctor scheduling",
                        feature2: "Smart reminders",
                        feature3: "Teleconsultations available",
                        feature4: "Complete appointment history"
                    },
                    glucometer: {
                        title: "Virtual Glucometer",
                        description: "Monitor your glucose levels in real time with our innovative virtual glucometer integrated into the platform.",
                        feature1: "Automatic device synchronization",
                        feature2: "Critical level alerts",
                        feature3: "Real-time trend charts",
                        feature4: "Automatic measurement logging"
                    },
                    lifestyle: {
                        title: "Healthy Lifestyle",
                        description: "Manage the recording and tracking of your physical activity and daily nutrition, with personalized recommendations for a healthy lifestyle.",
                        feature1: "Step and exercise tracking",
                        feature2: "Daily nutrition logging",
                        feature3: "Calorie and nutrient analysis",
                        feature4: "Personalized recommendations"
                    }
                },

                // FAQ Section
                faq: {
                    title: "Frequently Asked Questions",
                    description: "Find answers to the most common questions about DiabeLife",
                    questions: {
                        q1: {
                            question: "How can DiabeLife help me control my diabetes?",
                            answer: "DiabeLife offers comprehensive tools for continuous glucose monitoring, medication reminders, access to medical specialists and a support community. Our intelligent algorithms analyze your glucose patterns to provide personalized recommendations."
                        },
                        q2: {
                            question: "Is the medical information I share on the platform secure?",
                            answer: "Absolutely. DiabeLife complies with all HIPAA regulations and uses bank-level encryption to protect your medical information. Your data is stored on secure servers and is never shared without your explicit consent."
                        },
                        q3: {
                            question: "Can I use DiabeLife alongside my current doctor?",
                            answer: "Of course! DiabeLife is designed to complement, not replace, traditional medical care. You can easily share your reports and data with your current doctor, and many professionals are already part of our network."
                        },
                        q4: {
                            question: "What monitoring devices are compatible with DiabeLife?",
                            answer: "DiabeLife is compatible with major continuous glucose monitoring (CGM) devices like Dexcom, FreeStyle Libre, and traditional meters. It also integrates with popular health apps and wearable devices."
                        },
                        q5: {
                            question: "Can I cancel my subscription at any time?",
                            answer: "Yes, you can cancel your subscription at any time from your user panel. There are no long-term contracts or cancellation penalties. Your access will continue until the end of the current billing period."
                        }
                    }
                },

                // Pricing Section
                pricing: {
                    title: "Subscription Plans",
                    description: "Choose the plan that best fits your diabetes management needs",
                    guarantee: "30-day guarantee - Cancel anytime",
                    basic: {
                        name: "Basic Plan",
                        price: "$10",
                        period: "/month",
                        description: "Perfect for starting your diabetes control journey",
                        cta: "Start Basic Plan",
                        features: {
                            feature1: "Basic glucose tracking",
                            feature2: "Patient community",
                            feature3: "Medication reminders",
                            feature4: "Email support",
                            feature5: "1 virtual medical consultation"
                        }
                    },
                    premium: {
                        name: "Premium Plan",
                        price: "$30",
                        period: "/month",
                        description: "The most popular option with advanced tools",
                        cta: "Choose Premium Plan",
                        popular: "Most Popular",
                        features: {
                            feature1: "Everything in Basic Plan",
                            feature2: "Advanced trend analysis",
                            feature3: "Detailed medical reports",
                            feature4: "3 virtual medical consultations",
                            feature5: "Access to specialists",
                            feature6: "Personalized meal plans"
                        }
                    },
                    professional: {
                        name: "Professional Plan",
                        price: "$100",
                        period: "/month",
                        description: "For healthcare professionals and clinical use",
                        cta: "Contact Sales",
                        features: {
                            feature1: "Everything in Premium Plan",
                            feature2: "Patient management panel",
                            feature3: "Unlimited consultations",
                            feature4: "API for clinical integration",
                            feature5: "24/7 priority support",
                            feature6: "Personalized training",
                            feature7: "Insurance reports"
                        }
                    }
                },

                // CTA Section
                cta: {
                    title: "Ready to transform your diabetes management?",
                    description: "Join thousands of patients and doctors who already trust DiabeLife to improve their quality of life.",
                    patient: "I'm a Patient",
                    doctor: "I'm a Doctor"
                },

                // Team Section
                team: {
                    title: "Our Team",
                    description: "Meet the passionate developers creating DiabeLife",
                    members: {
                        member1: {
                            name: "Member 1"
                        },
                        member2: {
                            name: "Member 2"
                        },
                        member3: {
                            name: "Stephano Espinoza"
                        },
                        member4: {
                            name: "Member 4"
                        },
                        member5: {
                            name: "Member 5"
                        }
                    }
                },

                // Footer
                footer: {
                    description: "Transforming diabetes care through technology and community.",
                    product: "Product",
                    features: "Features",
                    pricing: "Pricing",
                    security: "Security",
                    api: "API",
                    support: "Support",
                    help: "Help Center",
                    contact_support: "Contact Support",
                    community_support: "Community",
                    tutorials: "Tutorials",
                    company: "Company",
                    about: "About Us",
                    careers: "Careers",
                    press: "Press",
                    blog: "Blog",
                    legal: "Legal",
                    privacy: "Privacy",
                    terms: "Terms",
                    cookies: "Cookies",
                    compliance: "Compliance",
                    rights: "All rights reserved.",
                    disclaimer: "DiabeLife does not replace professional medical advice. Always consult with your doctor."
                }
            }
        };
    }

    setLanguage(lang) {
        if (!this.translations[lang]) return;

        this.currentLang = lang;
        localStorage.setItem('diabelife-lang', lang);

        // Update all elements with data-i18n attributes
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);

            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update document title and meta description
        const titleTranslation = this.getTranslation('title');
        if (titleTranslation) {
            document.title = titleTranslation;
        }

        const metaDescription = document.querySelector('meta[name="description"]');
        const descTranslation = this.getTranslation('meta.description');
        if (metaDescription && descTranslation) {
            metaDescription.setAttribute('content', descTranslation);
        }
    }

    getTranslation(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLang];

        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                return null;
            }
        }

        return translation;
    }

    setupLanguageSwitcher() {
        // This method is no longer needed as language switching is handled by main.js
        // but we keep it for backward compatibility and add the new changeLanguage method
    }

    // New method to be called by the toggle button
    changeLanguage(lang) {
        if (this.translations[lang]) {
            this.setLanguage(lang);
        }
    }
}

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});
