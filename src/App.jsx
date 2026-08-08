import { useState } from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { translations } from './translations';
import './App.css';

function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div className="app-container">
      <div className="container">
        <nav>
          <div className="logo">LE.</div>
          <div className="nav-links" style={{ alignItems: 'center' }}>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#skills">{t.nav.skills}</a>
            <a href="#contact">{t.nav.contact}</a>
            <button 
              onClick={toggleLang}
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                padding: '0.4rem 0.8rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '600',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }} 
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.background = 'var(--glass-bg)' }}
            >
              {t.nav.langToggle}
            </button>
          </div>
        </nav>

        <main>
          <Hero t={t.hero} />
          
          <section id="projects" className="section">
            <h2 className="section-title">{t.projectsSection.title}</h2>
            <p className="section-subtitle">{t.projectsSection.subtitle}</p>
            
            <div>
              {t.projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} labels={t.projectsSection} />
              ))}
            </div>
          </section>

          <Skills t={t.skillsSection} categories={t.skillCategories} />
          
          <div style={{ padding: '0 0 4rem 0', display: 'flex', justifyContent: 'center' }}>
            <div className="glass-panel" style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center', maxWidth: '800px', width: '100%' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {t.educationSection.text}
              </p>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600' }}>
                {t.educationSection.certs}
              </div>
            </div>
          </div>

          <Contact t={t.contactSection} />
        </main>
        
        <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          <p>© {new Date().getFullYear()} Luis Esquivel.</p>
        </footer>
      </div>
    </div>
  )
}

export default App;
