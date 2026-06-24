'use client';
import { PaletteName, PALETTES } from '../data';

const PALETTE_NAMES: PaletteName[] = ['Warm Wax', 'Midnight Press', 'Cool Mint'];

interface NavProps {
  palette: PaletteName;
  onPaletteChange: (p: PaletteName) => void;
}

export default function Nav({ palette, onPaletteChange }: NavProps) {
  const next = () => {
    const i = PALETTE_NAMES.indexOf(palette);
    onPaletteChange(PALETTE_NAMES[(i + 1) % PALETTE_NAMES.length]);
  };

  return (
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(13px,2.2vw,28px)', flexWrap: 'wrap' }}>
          {[['#live', 'Live Sets'], ['#about', 'Liner Notes'], ['#work', 'Releases'], ['#setup', 'The Setup']].map(([href, label]) => (
            <a key={href} href={href} style={{ textDecoration: 'none', color: 'var(--muted)', fontSize: 14, fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >{label}</a>
          ))}
          <button
            onClick={next}
            title={`Theme: ${palette}`}
            style={{
              fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: '0.04em',
              color: 'var(--ink)', border: '1px solid var(--line)',
              padding: '6px 12px', borderRadius: 4, background: 'var(--card)',
              cursor: 'pointer', whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--line)')}
          >
            ◑ {palette}
          </button>
          <a href="https://drive.google.com/file/d/1z_xQ7DbDp3KVIeServzrEqhxnyHwP_V-/view?usp=sharing"
            target="_blank" rel="noopener"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: '0.04em', color: 'var(--ink)', border: '1px solid var(--line)', padding: '8px 14px', borderRadius: 4, background: 'var(--card)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--line)')}
          >Résumé</a>
        </div>
      </div>
    </nav>
  );
}
