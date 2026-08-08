import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon, WhatsAppIcon } from './Icons';

export default function Contact({ t }) {
  return (
    <section id="contact" className="section" style={{ textAlign: 'center', paddingBottom: '8rem' }}>
      <h2 className="section-title">{t.title}</h2>
      <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
        {t.subtitle}
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <a href="mailto:laer12346@gmail.com" className="glass-panel" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
          <Mail size={24} />
        </a>
        <a href="https://wa.me/573052568339" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
          <WhatsAppIcon size={24} />
        </a>
        <a href="https://www.linkedin.com/in/luisalejandroesquivelrojas/" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
          <LinkedinIcon size={24} />
        </a>
        <a href="https://github.com/L-Esquivel" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
          <GithubIcon size={24} />
        </a>
      </div>
    </section>
  );
}
