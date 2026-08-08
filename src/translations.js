export const translations = {
  es: {
    nav: {
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      langToggle: "EN"
    },
    hero: {
      role: "Security-Oriented Full-Stack Developer",
      title: "Construyo software",
      titleHighlight: "seguro, escalable",
      titleEnd: "y orientado al negocio.",
      description: "Tengo experiencia entregando soluciones reales, desde arquitecturas DevSecOps complejas hasta plataformas end-to-end para clientes B2B.",
      btnProjects: "Ver Proyectos",
      btnCV: "Descargar CV"
    },
    projectsSection: {
      title: "Proyectos Destacados",
      subtitle: "Una selección de mi mejor trabajo, combinando arquitectura técnica y entrega de valor.",
      highlights: "Highlights",
      btnCode: "Ver Código",
      btnDemo: "Live Demo"
    },
    skillsSection: {
      title: "Habilidades Técnicas",
      subtitle: "Tecnologías y conceptos que manejo para construir software de extremo a extremo."
    },
    contactSection: {
      title: "¿Hablamos?",
      subtitle: "Actualmente estoy abierto a nuevas oportunidades en roles remotos como Security-Oriented Full-Stack o DevSecOps."
    },
    footer: "Construido con React y CSS Puro.",
    projects: [
      {
        title: "Precivox",
        type: "SaaS / DevSecOps",
        description: "Plataforma de Business Intelligence con arquitectura multi-tenant. Diseñada desde cero con foco en seguridad, escalabilidad y aislamiento de datos por cliente.",
        tags: ["React", "Node.js", "RBAC", "Multi-tenant", "Recharts"],
        features: [
          { icon: 'shield', text: 'Diseño de API robusta con RBAC y Rate Limiting a nivel de ruta.' },
          { icon: 'code', text: 'Aislamiento seguro de datos (Tenant Isolation) por tenant_id.' },
          { icon: 'users', text: 'Arquitectura escalable lista para integraciones OAuth.' }
        ],
        links: {
          github: "https://github.com/L-Esquivel/Precivox"
        }
      },
      {
        title: "MEK Management",
        type: "Freelance / Delivery",
        description: "Solución digital completa desarrollada end-to-end para una empresa de gestión, abarcando desde la toma de requerimientos hasta el pase a producción.",
        tags: ["WordPress", "Elementor", "Client Management", "Full-Stack"],
        features: [
          { icon: 'users', text: 'Toma de requerimientos y gestión directa con el cliente real.' },
          { icon: 'code', text: 'Entrega exitosa bajo presupuesto y deadlines estrictos.' },
          { icon: 'shield', text: 'Demuestra capacidad de llevar un producto de la idea a producción.' }
        ],
        links: {}
      }
    ],
    skillCategories: [
      {
        title: "Security & Architecture",
        skills: ["RBAC", "Multi-tenancy", "OAuth 2.0", "Rate Limiting", "Tenant Isolation", "API Design"]
      },
      {
        title: "Backend & DevOps",
        skills: ["Python", "Flask", "PostgreSQL", "Docker", "Gunicorn", "Git"]
      },
      {
        title: "Frontend",
        skills: ["React", "JavaScript (ES6+)", "Vite", "Recharts", "i18n"]
      }
    ]
  },
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      langToggle: "ES"
    },
    hero: {
      role: "Security-Oriented Full-Stack Developer",
      title: "I build",
      titleHighlight: "secure, scalable",
      titleEnd: "and business-oriented software.",
      description: "I have experience delivering real-world solutions, from complex DevSecOps architectures to end-to-end platforms for B2B clients.",
      btnProjects: "View Projects",
      btnCV: "Download Resume"
    },
    projectsSection: {
      title: "Featured Projects",
      subtitle: "A selection of my best work, combining technical architecture and value delivery.",
      highlights: "Highlights",
      btnCode: "View Code",
      btnDemo: "Live Demo"
    },
    skillsSection: {
      title: "Technical Skills",
      subtitle: "Technologies and concepts I use to build end-to-end software."
    },
    contactSection: {
      title: "Let's Talk",
      subtitle: "I am currently open to new remote opportunities as a Security-Oriented Full-Stack Developer or DevSecOps Engineer."
    },
    footer: "Built with React and Pure CSS.",
    projects: [
      {
        title: "Precivox",
        type: "SaaS / DevSecOps",
        description: "Business Intelligence platform with multi-tenant architecture. Designed from scratch with a focus on security, scalability, and per-client data isolation.",
        tags: ["React", "Node.js", "RBAC", "Multi-tenant", "Recharts"],
        features: [
          { icon: 'shield', text: 'Robust API design with RBAC and route-level Rate Limiting.' },
          { icon: 'code', text: 'Secure data isolation (Tenant Isolation) by tenant_id.' },
          { icon: 'users', text: 'Scalable architecture ready for OAuth integrations.' }
        ],
        links: {
          github: "https://github.com/L-Esquivel/Precivox"
        }
      },
      {
        title: "MEK Management",
        type: "Freelance / Delivery",
        description: "Complete digital solution developed end-to-end for a management company, from requirement gathering to production deployment.",
        tags: ["WordPress", "Elementor", "Client Management", "Full-Stack"],
        features: [
          { icon: 'users', text: 'Requirement gathering and direct management with real clients.' },
          { icon: 'code', text: 'Successful delivery under budget and strict deadlines.' },
          { icon: 'shield', text: 'Demonstrates the ability to take a product from idea to production.' }
        ],
        links: {}
      }
    ],
    skillCategories: [
      {
        title: "Security & Architecture",
        skills: ["RBAC", "Multi-tenancy", "OAuth 2.0", "Rate Limiting", "Tenant Isolation", "API Design"]
      },
      {
        title: "Backend & DevOps",
        skills: ["Python", "Flask", "PostgreSQL", "Docker", "Gunicorn", "Git"]
      },
      {
        title: "Frontend",
        skills: ["React", "JavaScript (ES6+)", "Vite", "Recharts", "i18n"]
      }
    ]
  }
};
