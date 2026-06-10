/* ==========================================================================
   TRANSLATION DICTIONARY
   ========================================================================== */
const translations = {
  es: {
    // Header
    "nav-home": "Inicio",
    "nav-about": "Sobre Mí",
    "nav-skills": "Habilidades",
    "nav-experience": "Experiencia",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",
    
    // Hero
    "hero-badge-text": "Disponible para trabajar",
    "hero-greet": "Hola, soy",
    "hero-role-lead": "Desarrollador de Software especializado en",
    "hero-desc": "Egresado en Computación e Informática y estudiante de Ingeniería de Sistemas. Apasionado por diseñar y construir arquitecturas backend robustas, microservicios escalables y aplicaciones frontend altamente interactivas.",
    "hero-cta-contact": "Contactar",
    "hero-cta-projects": "Ver Proyectos",
    
    // About
    "about-title": "Sobre Mí",
    "about-subtitle": "Conoce mi trayectoria, formación y fortalezas",
    "about-heading": "¿Quién soy?",
    "about-p1": "Soy egresado de la carrera de <strong>Computación e Informática</strong> en el Instituto Superior Tecnológico Cibertec y actualmente continúo mi formación profesional cursando la carrera de <strong>Ingeniería de Sistemas</strong> en la Universidad Peruana de Ciencias Aplicadas (UPC).",
    "about-p2": "Me considero una persona autodidacta, analítica y orientada a resultados, con una fuerte capacidad de adaptación y resolución de problemas bajo metodologías ágiles. Gracias a mi formación dual (técnica y universitaria), cuento con una visión estratégica para comprender las necesidades de negocio y traducirlas en código eficiente y estructurado.",
    "about-strengths-title": "Fortalezas Clave",
    "str-1": "Analítico",
    "str-2": "Planificación y Orden",
    "str-3": "Auto-confianza",
    "str-4": "Orientado a Resultados",
    "str-5": "Perseverancia",
    "str-6": "Visión Estratégica",
    "about-btn-cv": "Descargar CV",
    "stat-edu-title": "Estudios Activos",
    "stat-edu-desc": "Ingeniería de Sistemas - UPC (Ago 2025 - Cursando)",
    "stat-exp-title": "Rol Actual",
    "stat-exp-desc": "Desarrollador de Software en Dirrehum PNP (C#, .NET, Blazor)",
    "stat-proj-title": "Proyectos Listos",
    "stat-proj-desc": "+6 Proyectos de Microservicios, APIs y Aplicaciones Web completas",
    
    // Skills
    "skills-title": "Habilidades Técnicas",
    "skills-subtitle": "Tecnologías y herramientas que domino agrupadas por nivel de experiencia",
    "skills-cat-adv": "Nivel Avanzado",
    "skills-cat-int": "Nivel Intermedio",
    "skills-cat-basic": "Nivel Básico / Familiar",
    
    // Experience
    "exp-title": "Trayectoria Profesional",
    "exp-subtitle": "Mi experiencia laboral en el sector tecnológico público e institucional",
    "exp-job1-title": "Desarrollador de Software",
    "exp-job1-desc": "Participo activamente en el diseño, desarrollo, mantenimiento y optimización de sistemas institucionales de gran escala orientados a la gestión de personal de la Policía Nacional del Perú.",
    "exp-job1-b1": "Implementación del Módulo de Suspendidos bajo arquitectura en capas con despliegue exitoso en producción.",
    "exp-job1-b2": "Desarrollo y mantenimiento de módulos administrativos utilizando C#, .NET Core, Blazor y SQL Server.",
    "exp-job1-b3": "Elaboración de documentación técnica detallada y soporte funcional a usuarios finales para garantizar la continuidad operativa.",
    "exp-job1-b4": "Análisis técnico de requerimientos, resolución de incidencias en sistemas legados y validaciones funcionales.",
    "exp-job2-title": "Soporte Técnico de TI",
    "exp-job2-desc": "Responsable de garantizar la disponibilidad y el correcto funcionamiento de la infraestructura computacional, redes y sistemas operativos de la unidad.",
    "exp-job2-b1": "Soporte preventivo y correctivo (Niveles 1 y 2) para computadores, servidores y periféricos institucionales.",
    "exp-job2-b2": "Configuración, actualización y despliegue de software propietario y sistemas operativos corporativos.",
    "exp-job2-b3": "Administración básica de servidores, incluyendo creación de usuarios, gestión de accesos y credenciales.",
    "exp-job2-b4": "Solución ágil de incidencias de red local, conectividad y seguridad básica.",
    
    // Projects
    "proj-title": "Proyectos Destacados",
    "proj-subtitle": "Una muestra de mis proyectos de software más relevantes. Filtra por tecnología para explorarlos.",
    "filter-all": "Todos",
    "filter-net": ".NET / C#",
    "filter-java": "Java / Spring Boot",
    "filter-angular": "Angular / Frontend",
    "filter-mobile": "Móvil (Android)",
    "p1-desc": "Plataforma web premium para estilistas con diseño personalizado \"Luxury Black & Gold\". Contiene portafolio, academia y secciones públicas con animaciones fluidas.",
    "p2-desc": "Sistema modular para operaciones policiales desarrollado bajo una arquitectura de microservicios con separación estricta de responsabilidades por dominio funcional.",
    "p3-desc": "Sistema integral desarrollado de principio a fin. Utiliza microservicios (Eureka, API Gateway, Auth y Personal), autenticación JWT y CRUD responsivo.",
    "p4-desc": "API REST y Backoffice administrativo para gestión de competiciones. Documentada con Swagger, pruebas unitarias robustas e integración CI/CD automatizada.",
    "p5-desc": "Aplicación web administrativa e institucional para la gestión y control comercial de la corporación LYM con interfaz de usuario integrada.",
    "p6-desc": "Aplicaciones móviles nativas desarrolladas para la plataforma Android. Incluye consumo de servicios REST, navegación avanzada y listas optimizadas.",
    "repo-private": "🔒 Repo Privado",
    
    // Contact
    "contact-title": "Contacto",
    "contact-subtitle": "¿Tienes algún proyecto en mente o buscas incorporar un programador a tu equipo? ¡Escríbeme!",
    "contact-info-title": "Información de Contacto",
    "contact-info-desc": "Puedes comunicarte conmigo a través de mi correo, teléfono o redes sociales. Responderé lo antes posible.",
    "c-label-email": "Correo Electrónico",
    "c-label-phone": "Teléfono / WhatsApp",
    "c-label-loc": "Ubicación",
    "c-val-loc": "Lima, Perú",
    "form-name": "Nombre Completo",
    "form-email": "Correo Electrónico",
    "form-msg": "Mensaje",
    "form-submit": "Enviar Mensaje",
    
    // Footer
    "foot-rights": "Todos los derechos reservados.",
    
    // Alert Feedbacks
    "form-success": "¡Mensaje enviado con éxito!",
    "form-loading": "Enviando mensaje..."
  },
  en: {
    // Header
    "nav-home": "Home",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-experience": "Experience",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    
    // Hero
    "hero-badge-text": "Open to Work",
    "hero-greet": "Hi, I am",
    "hero-role-lead": "Software Developer specialized in",
    "hero-desc": "Computer Science graduate and Systems Engineering student. Passionate about designing and building robust backend architectures, scalable microservices, and highly interactive frontend applications.",
    "hero-cta-contact": "Contact Me",
    "hero-cta-projects": "View Projects",
    
    // About
    "about-title": "About Me",
    "about-subtitle": "Get to know my career path, education, and strengths",
    "about-heading": "Who am I?",
    "about-p1": "I am a graduate in <strong>Computer Science</strong> from Cibertec Higher Technological Institute and currently continuing my professional education pursuing a degree in <strong>Systems Engineering</strong> at Universidad Peruana de Ciencias Aplicadas (UPC).",
    "about-p2": "I consider myself a self-taught, analytical, and results-oriented person, with a strong ability to adapt and solve problems under agile methodologies. Thanks to my dual background (technical and university level), I have a strategic vision to understand business needs and translate them into efficient and structured code.",
    "about-strengths-title": "Key Strengths",
    "str-1": "Analytical",
    "str-2": "Planning & Order",
    "str-3": "Self-confidence",
    "str-4": "Results Oriented",
    "str-5": "Perseverance",
    "str-6": "Strategic Vision",
    "about-btn-cv": "Download CV",
    "stat-edu-title": "Active Education",
    "stat-edu-desc": "Systems Engineering - UPC (Aug 2025 - Current)",
    "stat-exp-title": "Current Role",
    "stat-exp-desc": "Software Developer at Dirrehum PNP (C#, .NET, Blazor)",
    "stat-proj-title": "Projects Completed",
    "stat-proj-desc": "+6 Projects including Microservices, APIs, and complete Web Apps",
    
    // Skills
    "skills-title": "Technical Skills",
    "skills-subtitle": "Technologies and tools I master grouped by level of experience",
    "skills-cat-adv": "Advanced Level",
    "skills-cat-int": "Intermediate Level",
    "skills-cat-basic": "Basic / Familiar Level",
    
    // Experience
    "exp-title": "Professional Experience",
    "exp-subtitle": "My work experience in the public and institutional technology sector",
    "exp-job1-title": "Software Developer",
    "exp-job1-desc": "Active participant in the design, development, maintenance, and optimization of large-scale institutional systems for personnel management of the National Police of Peru.",
    "exp-job1-b1": "Implementation of the Suspended Module under layered architecture with successful deployment in production.",
    "exp-job1-b2": "Development and maintenance of administrative modules using C#, .NET Core, Blazor, and SQL Server.",
    "exp-job1-b3": "Creation of detailed technical documentation and functional support to end users to ensure operational continuity.",
    "exp-job1-b4": "Technical requirements analysis, legacy systems incident resolution, and functional validation.",
    "exp-job2-title": "IT Support Technician",
    "exp-job2-desc": "Responsible for guaranteeing availability and correct functioning of the compute infrastructure, networks, and operating systems of the unit.",
    "exp-job2-b1": "Preventive and corrective support (Levels 1 and 2) for computers, servers, and institutional peripherals.",
    "exp-job2-b2": "Configuration, update, and deployment of proprietary software and corporate operating systems.",
    "exp-job2-b3": "Basic server administration, including user creation, access management, and credentials.",
    "exp-job2-b4": "Agile solution of local network incidents, connectivity, and basic security.",
    
    // Projects
    "proj-title": "Featured Projects",
    "proj-subtitle": "A sample of my most relevant software projects. Filter by technology to explore.",
    "filter-all": "All",
    "filter-net": ".NET / C#",
    "filter-java": "Java / Spring Boot",
    "filter-angular": "Angular / Frontend",
    "filter-mobile": "Mobile (Android)",
    "p1-desc": "Premium web platform for stylists with custom \"Luxury Black & Gold\" design. Includes portfolio, academy, and public sections with smooth animations.",
    "p2-desc": "Modular system for police operations developed under a microservices architecture with strict separation of concerns by functional domain.",
    "p3-desc": "Comprehensive system developed from scratch. Features microservices (Eureka, API Gateway, Auth, and Personal), JWT authentication, and responsive CRUD.",
    "p4-desc": "REST API and administrative Backoffice for competition management. Documented with Swagger, robust unit tests, and automated CI/CD integration.",
    "p5-desc": "Administrative and institutional web application for commercial management and control of LYM Corporation, with integrated user interface.",
    "p6-desc": "Native mobile applications developed for the Android platform. Includes REST service consumption, advanced navigation, and optimized lists.",
    "repo-private": "🔒 Private Repo",
    
    // Contact
    "contact-title": "Contact",
    "contact-subtitle": "Have a project in mind or looking to hire a programmer? Write me!",
    "contact-info-title": "Contact Information",
    "contact-info-desc": "You can reach out via email, phone, or social networks. I will respond as soon as possible.",
    "c-label-email": "Email Address",
    "c-label-phone": "Phone / WhatsApp",
    "c-label-loc": "Location",
    "c-val-loc": "Lima, Peru",
    "form-name": "Full Name",
    "form-email": "Email Address",
    "form-msg": "Message",
    "form-submit": "Send Message",
    
    // Footer
    "foot-rights": "All rights reserved.",
    
    // Alert Feedbacks
    "form-success": "Message sent successfully!",
    "form-loading": "Sending message..."
  }
};

const typingWords = {
  es: ["C# / .NET", "Spring Boot", "Angular", "Java", "Arquitecturas Web"],
  en: ["C# / .NET", "Spring Boot", "Angular", "Java", "Web Architectures"]
};

/* ==========================================================================
   GLOBAL STATE & INITIALIZATION
   ========================================================================== */
let currentLang = localStorage.getItem("lang") || "es";
let currentTheme = localStorage.getItem("theme") || "dark";

document.addEventListener("DOMContentLoaded", () => {
  // Apply initial theme
  document.documentElement.setAttribute("data-theme", currentTheme);
  
  // Apply initial language translations
  updateLanguageElements(currentLang);
  
  // Initialize Components
  initThemeToggle();
  initLanguageToggle();
  initMobileMenu();
  initTypingEffect();
  initProjectFiltering();
  initScrollReveal();
  initContactForm();
  initActiveNavLinkOnScroll();
});

/* ==========================================================================
   THEME TOGGLE LOGIC
   ========================================================================== */
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  
  themeToggle.addEventListener("click", () => {
    const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    currentTheme = newTheme;
  });
}

/* ==========================================================================
   LANGUAGE TOGGLE LOGIC
   ========================================================================== */
function initLanguageToggle() {
  const langToggle = document.getElementById("lang-toggle");
  
  langToggle.addEventListener("click", () => {
    const newLang = currentLang === "es" ? "en" : "es";
    currentLang = newLang;
    localStorage.setItem("lang", newLang);
    
    // Toggle button label (shows the OTHER language available to switch to)
    langToggle.querySelector(".lang-label").textContent = newLang === "es" ? "EN" : "ES";
    
    // Update texts with fade transition
    document.body.style.opacity = 0;
    setTimeout(() => {
      updateLanguageElements(newLang);
      document.body.style.opacity = 1;
    }, 200);
  });
  
  // Set initial label correctly
  langToggle.querySelector(".lang-label").textContent = currentLang === "es" ? "EN" : "ES";
}

function updateLanguageElements(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      // Check if element contains HTML tags in its translation
      if (translations[lang][key].includes("<strong>") || translations[lang][key].includes("<b>")) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

/* ==========================================================================
   MOBILE MENU LOGIC
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const openIcon = menuToggle.querySelector(".menu-open-icon");
  const closeIcon = menuToggle.querySelector(".menu-close-icon");
  const navLinks = document.querySelectorAll(".nav-link");

  function toggleMenu() {
    navMenu.classList.toggle("active");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  }

  menuToggle.addEventListener("click", toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });
}

/* ==========================================================================
   TYPING EFFECT ANIMATION
   ========================================================================== */
function initTypingEffect() {
  const typingSpan = document.getElementById("typing-text");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;
  
  function type() {
    const words = typingWords[currentLang] || typingWords["es"];
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Deleting character
      typingSpan.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      // Typing character
      typingSpan.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 150;
    }
    
    // Typing cycle completed
    if (!isDeleting && charIndex === currentWord.length) {
      typingDelay = 2000; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Move to next word
      typingDelay = 500; // Pause before typing new word
    }
    
    setTimeout(type, typingDelay);
  }
  
  setTimeout(type, 1000);
}

/* ==========================================================================
   PROJECT FILTERING LOGIC
   ========================================================================== */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filterValue = btn.getAttribute("data-filter");
      
      projectCards.forEach(card => {
        const categories = card.getAttribute("data-category").split(" ");
        
        if (filterValue === "all" || categories.includes(filterValue)) {
          card.classList.remove("hide");
          setTimeout(() => {
            card.classList.remove("fade-out");
          }, 50);
        } else {
          card.classList.add("fade-out");
          card.addEventListener("transitionend", function hideCard(e) {
            if (e.propertyName === "opacity" && card.classList.contains("fade-out")) {
              card.classList.add("hide");
            }
            card.removeEventListener("transitionend", hideCard);
          });
        }
      });
    });
  });
}

/* ==========================================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".scroll-reveal");
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        
        // Trigger width animation on skill bars once visible
        if (entry.target.classList.contains("skills-grid")) {
          animateSkillBars();
        }
        
        // Once animated, we don't need to observe it anymore
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });
  
  revealElements.forEach(el => revealObserver.observe(el));
}

function animateSkillBars() {
  const progressBars = document.querySelectorAll(".skill-progress");
  progressBars.forEach(bar => {
    // Force transition repaint
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

/* ==========================================================================
   CONTACT FORM SUBMISSION SIMULATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.querySelector("span").textContent;
    
    // Change to loading state
    submitBtn.disabled = true;
    submitBtn.querySelector("span").textContent = translations[currentLang]["form-loading"];
    
    // Simulate API request
    setTimeout(() => {
      // Reset button
      submitBtn.disabled = false;
      submitBtn.querySelector("span").textContent = originalText;
      
      // Clear form inputs
      form.reset();
      
      // Trigger Custom Toast Message
      toastMsg.textContent = translations[currentLang]["form-success"];
      toast.classList.remove("hidden");
      
      // Auto Hide Toast
      setTimeout(() => {
        toast.classList.add("hidden");
      }, 4000);
      
    }, 1500);
  });
}

/* ==========================================================================
   ACTIVE NAVIGATION LINK ON SCROLL
   ========================================================================== */
function initActiveNavLinkOnScroll() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  
  window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - varHeaderOffset())) {
        current = section.getAttribute("id");
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
  
  function varHeaderOffset() {
    return window.innerWidth <= 768 ? 80 : 100;
  }
}
