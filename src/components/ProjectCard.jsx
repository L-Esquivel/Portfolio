import { ExternalLink, ShieldCheck, Code, Users } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, labels }) {
  const { title, description, tags, type, features, links } = project;
  
  return (
    <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {type}
          </span>
          <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>{title}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', maxWidth: '800px' }}>{description}</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          {links.github && (
            <a href={links.github} target="_blank" rel="noreferrer" style={{ padding: '0.5rem', borderRadius: '8px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title={labels.btnCode}>
              <GithubIcon size={20} />
            </a>
          )}
          {links.live && (
            <a href={links.live} target="_blank" rel="noreferrer" style={{ padding: '0.5rem', borderRadius: '8px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title={labels.btnDemo}>
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {tags.map((tag, idx) => (
          <span key={idx} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
        <h4 style={{ fontSize: '0.875rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>{labels.highlights}</h4>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', listStyle: 'none' }}>
          {features.map((feat, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <div style={{ color: 'var(--accent-color)', marginTop: '2px' }}>
                {feat.icon === 'shield' && <ShieldCheck size={18} />}
                {feat.icon === 'code' && <Code size={18} />}
                {feat.icon === 'users' && <Users size={18} />}
              </div>
              <span style={{ lineHeight: '1.4' }}>{feat.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
