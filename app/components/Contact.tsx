'use client';

const LINKS = [
  { num: '01', label: 'GitHub', sub: '@natcodes', href: 'https://github.com/natashaejercito', external: true },
  { num: '02', label: 'LinkedIn', sub: '@natashaejercito', href: 'https://www.linkedin.com/in/natashaejercito/', external: true },
  { num: '03', label: 'Instagram', sub: '@tashaejercito', href: 'https://www.instagram.com/tashaejercito/', external: true },
  { num: '04', label: 'Résumé', sub: 'Resume_Natasha Ejercito.pdf', href: 'https://drive.google.com/file/d/1lPyrt462W2pTpz2jHN2CmtoWu-D1b2Dy/view?usp=sharing', external: true },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--deep)', color: 'var(--invtext)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(72px,9vw,120px) clamp(20px,5vw,56px)' }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: '0.16em', color: '#d8a73f', textTransform: 'uppercase' }}>CONNECT with Nat</div>
        <h2 style={{ fontSize: 'clamp(32px,5.5vw,50px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.0, margin: '18px 0 0', maxWidth: '18ch' }}>
          Hello y'all, thanks for being here ♡ 
        </h2>
        <p style={{ fontSize: 'clamp(16px,1.6vw,19px)', color: 'rgba(250,247,240,0.72)', maxWidth: '50ch', margin: '22px 0 0', lineHeight: 1.55 }}>
          Follow me on social media, check out my work, or reach out to me via email. I love connecting with new people and collaborating on exciting projects!
        </p>
        <div style={{ marginTop: 48, borderTop: '1px solid rgba(255,255,255,0.13)' }}>
          {LINKS.map((link, i) => (
            <a
              key={link.num}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex', alignItems: 'center', gap: 'clamp(14px,3vw,28px)',
                padding: '22px 4px',
                borderBottom: i < LINKS.length - 1 ? '1px solid rgba(255,255,255,0.13)' : undefined,
                textDecoration: 'none', color: 'inherit',
                transition: 'padding-left .2s, color .2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.paddingLeft = '14px'; e.currentTarget.style.color = '#d8a73f'; }}
              onMouseLeave={e => { e.currentTarget.style.paddingLeft = '4px'; e.currentTarget.style.color = 'inherit'; }}
            >
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: '#d8a73f', flex: '0 0 auto' }}>{link.num}</span>
              <span style={{ flex: 1, fontSize: 'clamp(20px,2.6vw,32px)', fontWeight: 600 }}>{link.label}</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: 'rgba(250,247,240,0.72)' }}>{link.sub}</span>
              <span style={{ fontSize: 18, flex: '0 0 auto' }}>↗</span>
            </a>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '26px clamp(20px,5vw,56px)', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.5)' }}>
          <span>BUILT BY NAT AND CLAUDE DESIGN</span>
          <a href="#top" style={{ color: 'inherit', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#d8a73f')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
          >BACK TO TOP ↑</a>
        </div>
      </div>
    </section>
  );
}
