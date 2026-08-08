import { ArrowRight, Download, Terminal } from 'lucide-react';

export default function Hero({ t }) {
  return (
    <section className="section" style={{ paddingTop: '8rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="hero-content">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', marginBottom: '2rem', fontSize: '0.875rem', color: 'var(--accent-color)' }}>
          <Terminal size={16} />
          <span>{t.role}</span>
        </div>
        
        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          {t.title} <br />
          <span className="text-gradient">{t.titleHighlight}</span><br />
          {t.titleEnd}
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '650px', marginBottom: '3rem', lineHeight: '1.6' }}>
          {t.description}
        </p>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--text-primary)', color: 'var(--bg-color)', padding: '0.875rem 1.5rem', borderRadius: '8px', fontWeight: '600', transition: 'transform 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            {t.btnProjects} <ArrowRight size={18} />
          </a>
          <a href="/cv.pdf" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.5rem', borderRadius: '8px', fontWeight: '600', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', transition: 'all 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.background = 'var(--glass-bg)' }}>
            {t.btnCV} <Download size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
