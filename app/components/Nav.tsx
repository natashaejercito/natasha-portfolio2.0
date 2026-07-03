'use client';
import { useState } from 'react';
import { PaletteName, PALETTES } from '../data';

const PALETTE_NAMES: PaletteName[] = ['Warm Wax', 'Midnight Press', 'Cool Mint'];

const NAV_LINKS: [string, string][] = [
  ['#live', 'Live Sets'],
  ['#about', 'Liner Notes'],
  ['#work', 'Releases'],
  ['#setup', 'The Setup'],
];

interface NavProps {
  palette: PaletteName;
  onPaletteChange: (p: PaletteName) => void;
}

export default function Nav({ palette, onPaletteChange }: NavProps) {
  const [open, setOpen] = useState(false);

  const next = () => {
    const i = PALETTE_NAMES.indexOf(palette);
    onPaletteChange(PALETTE_NAMES[(i + 1) % PALETTE_NAMES.length]);
  };

  const close = () => setOpen(false);

  return (
    <>
      <style>{`
        .nav-links { display: flex; align-items: center; gap: clamp(13px,2.2vw,28px); flex-wrap: wrap; }
        .nav-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; color: var(--ink); }
        .nav-mobile-menu { display: none; }
        @media (max-width: 640px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; flex-direction: column; justify-content: center; gap: 5px; }
          .nav-mobile-menu.open {
            display: flex; flex-direction: column; gap: 0;
            position: absolute; top: 64px; left: 0; right: 0;
            background: var(--navbg);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--line);
            padding: 8px 0 16px;
            z-index: 39;
          }
          .nav-mobile-menu.open a {
            padding: 12px clamp(20px,5vw,56px);
            text-decoration: none;
            color: var(--muted);
            font-size: 15px;
            font-weight: 500;
          }
          .nav-mobile-menu.open a:hover { color: var(--ink); }
          .nav-mobile-menu.open .resume-link {
            margin: 8px clamp(20px,5vw,56px) 0;
            font-family: 'Space Mono', monospace;
            font-size: 12px;
            letter-spacing: 0.04em;
            color: var(--ink);
            border: 1px solid var(--line);
            padding: 8px 14px;
            border-radius: 4px;
            background: var(--card);
            text-align: center;
          }
        }
      `}</style>

      <nav style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: 'var(--navbg)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--line)',
      }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto',
          padding: '0 clamp(20px,5vw,56px)',
          height: 64, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 16,
        }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', color: 'inherit', flex: '0 0 auto' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--ink)', boxShadow: '0 0 0 3px var(--bg), 0 0 0 4.5px var(--ink)' }} />
            <span style={{ fontWeight: 800, letterSpacing: '0.01em', fontSize: 15 }}>Natasha Ejercito</span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--muted)', letterSpacing: '0.06em' }}>SIDE A</span>
          </a>

          {/* Desktop links */}
          <div className="nav-links">
            {NAV_LINKS.map(([href, label]) => (
              <a key={href} href={href} style={{ textDecoration: 'none', color: 'var(--muted)', fontSize: 14, fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >{label}</a>
            ))}
            <a href="https://drive.google.com/file/d/10O6CRoHnWPagctsOr_RbGp740M5yK_gD/view?usp=sharing"
              target="_blank" rel="noopener"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: '0.04em', color: 'var(--ink)', border: '1px solid var(--line)', padding: '8px 14px', borderRadius: 4, background: 'var(--card)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--line)')}
            >Résumé</a>
          </div>

          {/* Hamburger button */}
          <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? (
              // X icon
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </svg>
            ) : (
              // Hamburger icon
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`nav-mobile-menu${open ? ' open' : ''}`}>
          {NAV_LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
          <a
            href="https://drive.google.com/file/d/10O6CRoHnWPagctsOr_RbGp740M5yK_gD/view?usp=sharing"
            target="_blank" rel="noopener"
            className="resume-link"
            onClick={close}
          >Résumé</a>
        </div>
      </nav>
    </>
  );
}
