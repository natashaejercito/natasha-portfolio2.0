'use client';
import { Project } from '../data';

interface HeroProps {
  spinning: boolean;
  onToggleSpin: () => void;
  np: Project;
}

export default function Hero({ spinning, onToggleSpin, np }: HeroProps) {
  const play = spinning ? 'running' : 'paused';
  const armDeg = spinning ? '40deg' : '-22deg';

  const titleWords = np.title.split(' ');
  const titleEl = titleWords.length > 1
    ? <>{titleWords.slice(0, -1).join(' ')}<br />{titleWords[titleWords.length - 1]}</>
    : np.title;

  return (
    <header id="top" style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(20px,5vw,56px)' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
        gap: 'clamp(32px,5vw,64px)', alignItems: 'center',
        padding: 'clamp(36px,6vw,72px) 0 clamp(48px,6vw,88px)',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 9,
            fontFamily: "'Space Mono', monospace", fontSize: 12,
            letterSpacing: '0.16em', color: 'var(--accent)', textTransform: 'uppercase',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)' }} />
            <span style={{ fontFamily: "'Shippori Mincho', serif", fontWeight: 600 }}>ようこそ</span> · EST. 2024
          </div>
          <h1 style={{
            fontSize: 'clamp(42px,7vw,90px)', lineHeight: 0.97,
            letterSpacing: '-0.025em', fontWeight: 800, margin: '20px 0 0',
          }}>
            Software developer,<br />spinning ideas<br />into{' '}
            <span style={{ fontFamily: 'Newsreader, serif', fontWeight: 400, fontStyle: 'italic', letterSpacing: 0 }}>systems.</span>
          </h1>
          <div style={{ display: 'flex', gap: 13, flexWrap: 'wrap', marginTop: 34 }}>
            <a href="#contact"
              style={{ textDecoration: 'none', background: 'var(--ink)', color: 'oklch(0.96 0.008 80)', padding: '14px 22px', borderRadius: 4, fontWeight: 600, fontSize: 15 }}
              onMouseEnter={e => (e.currentTarget.style.background = 'oklch(0.32 0.02 50)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
            >Connect</a>
            <a href="#about"
              style={{ textDecoration: 'none', border: '1px solid var(--line)', color: 'var(--ink)', padding: '14px 22px', borderRadius: 4, fontWeight: 600, fontSize: 15, background: 'var(--card)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--line)')}
            >About Natasha</a>
          </div>
        </div>

        {/* Turntable card */}
        <div style={{
          position: 'relative', width: 'min(100%,440px)', justifySelf: 'center',
          aspectRatio: '1/0.95',
          background: 'linear-gradient(158deg,oklch(0.42 0.022 62),oklch(0.31 0.018 56))',
          borderRadius: 16,
          boxShadow: '0 34px 64px -26px rgba(38,26,16,0.6), inset 0 1px 0 rgba(255,255,255,0.09)',
          padding: '7%',
        }}>
          {/* Vinyl disc */}
          <div style={{
            position: 'absolute', left: '6%', top: '8%', width: '73%', aspectRatio: '1/1',
            borderRadius: '50%',
            background: 'radial-gradient(circle,oklch(0.2 0.008 60),oklch(0.15 0.006 58))',
            boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.04), 0 6px 16px rgba(0,0,0,0.45)',
          }}>
            <div style={{
              position: 'absolute', inset: '5%', borderRadius: '50%',
              animation: `spin 6s linear infinite`,
              animationPlayState: play,
              background: 'repeating-radial-gradient(circle at 50% 50%,rgba(255,255,255,0.045) 0 1.5px,rgba(0,0,0,0) 1.5px 4.5px), radial-gradient(circle,oklch(0.24 0.01 60),oklch(0.16 0.006 58) 72%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 22px -6px rgba(0,0,0,0.5)',
            }}>
              <div style={{
                width: '41%', aspectRatio: '1/1', borderRadius: '50%',
                background: np.color,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: 1, color: np.dark ? 'rgba(247,243,236,0.95)' : 'rgba(26,20,14,0.9)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)',
              }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: '0.06em' }}>{np.catalog}</span>
                <span style={{ fontWeight: 700, fontSize: 'clamp(12px,1.5vw,15px)', lineHeight: 1.12, textAlign: 'center' }}>{titleEl}</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.65 }}>
                  {np.genre === 'WEB' ? 'Web' : np.genre === 'OSS' ? 'AI/ML' : np.genre === 'LAB' ? 'Backend' : 'Systems'}
                </span>
              </div>
              <span style={{ position: 'absolute', width: 7, height: 7, borderRadius: '50%', background: '#e7e1d6', boxShadow: '0 0 0 1px rgba(0,0,0,0.3)' }} />
            </div>
          </div>

          {/* Tonearm */}
          <div style={{ position: 'absolute', top: '6%', right: '11%', width: '30%', height: '48%' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(145deg,#e3ddd0,#b6afa1)', boxShadow: '0 2px 6px rgba(0,0,0,0.35)' }} />
            <div style={{
              position: 'absolute', top: 13, right: 13, width: 5, height: '74%',
              background: 'linear-gradient(#ddd6c9,#a9a190)', borderRadius: 5,
              transformOrigin: 'top center',
              transform: `rotate(${armDeg})`,
              transition: 'transform 0.9s cubic-bezier(.2,.7,.2,1)',
            }}>
              <div style={{ position: 'absolute', bottom: -7, left: -4, width: 13, height: 17, background: '#cfc8bb', borderRadius: 3, transform: 'rotate(20deg)' }} />
            </div>
          </div>

          {/* Play/pause button */}
          <button
            onClick={onToggleSpin}
            style={{
              position: 'absolute', bottom: '8%', right: '8%', width: 50, height: 50,
              borderRadius: '50%', border: 'none', cursor: 'pointer',
              background: 'var(--accent)', color: '#fff', fontSize: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 7px 16px -5px rgba(0,0,0,0.55)',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#d4593c')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
          >
            {spinning ? '❚❚' : '▶'}
          </button>
          <span style={{ position: 'absolute', bottom: '11%', left: '9%', fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em' }}>33⅓ RPM</span>
        </div>
      </div>
    </header>
  );
}
