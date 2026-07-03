'use client';
import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { EVENTS } from '../data';

const COPIES = 4;

export default function LiveSets() {
  const railRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; sl: number } | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const setWidth = useCallback(() => {
    const el = railRef.current;
    if (!el || el.children.length <= EVENTS.length) return 0;
    const c = el.children as HTMLCollectionOf<HTMLElement>;
    return c[EVENTS.length].offsetLeft - c[0].offsetLeft;
  }, []);

  const wrap = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const oneSet = setWidth();
    if (!oneSet) return;
    if (el.scrollLeft >= 2 * oneSet) {
      el.scrollLeft -= oneSet;
      if (dragRef.current) dragRef.current.sl -= oneSet;
    }
  }, [setWidth]);

  const onDown = (ev: React.PointerEvent) => {
    const el = railRef.current;
    if (!el) return;
    el.style.cursor = 'grabbing';
    dragRef.current = { x: ev.clientX, sl: el.scrollLeft };
  };

  const onMove = (ev: React.PointerEvent) => {
    if (!dragRef.current) return;
    const el = railRef.current;
    if (!el) return;
    el.scrollLeft = dragRef.current.sl - (ev.clientX - dragRef.current.x);
    wrap();
  };

  const onUp = () => {
    const el = railRef.current;
    if (el) el.style.cursor = 'grab';
    dragRef.current = null;
  };

  const tiles = [];
  for (let c = 0; c < COPIES; c++) {
    for (const e of EVENTS) {
      const uid = `${e.id}_c${c}`;
      const isHov = hovered === uid;
      tiles.push({ ...e, uid, isHov });
    }
  }

  return (
    <section id="live" style={{
      position: 'relative',
      background: 'radial-gradient(125% 90% at 72% 0%, var(--deep0) 0%, var(--deep) 55%, var(--deep2) 100%)',
      color: 'var(--invtext)', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '5%', right: '2%', fontFamily: "'Shippori Mincho', serif", fontSize: 'clamp(96px,17vw,230px)', lineHeight: 0.86, writingMode: 'vertical-rl', color: 'rgba(242,235,221,0.05)', pointerEvents: 'none', userSelect: 'none', fontWeight: 700 }}>現場</div>

      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,8vw,108px) clamp(20px,5vw,56px) clamp(28px,4vw,40px)' }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: '0.16em', color: 'var(--gold)', textTransform: 'uppercase' }}>LIVE SETS / 01</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginTop: 12 }}>
          <h2 style={{ fontSize: 'clamp(30px,4.5vw,52px)', fontWeight: 800, letterSpacing: '-0.02em', margin: 0, maxWidth: '15ch' }}>Offline, on the scene</h2>
          <p className="liveset-hint" style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'rgba(242,235,221,0.62)', maxWidth: '36ch', lineHeight: 1.65, margin: 0 }}>Drag to see more, hover to focus.</p>
        </div>
        <div className="liveset-stats">
          {[['8', 'HACKATHON/EVENTS'], ['5', 'ACTIVITIES'], ['∞', 'Matchas consumed'], ['♡++', 'Good company']].map(([val, label]) => (
            <div key={label}>
              <div style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>{val}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'rgba(242,235,221,0.6)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 5 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={railRef}
        data-crate=""
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        onScroll={wrap}
        style={{
          display: 'flex', gap: 28, overflowX: 'auto', overflowY: 'hidden',
          padding: `68px 56px clamp(60px,8vw,92px)`,
          paddingLeft: 'max(clamp(20px,5vw,56px), calc(50vw - 534px))',
          cursor: 'grab', scrollbarWidth: 'none', userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        {tiles.map(e => (
          <div
            key={e.uid}
            className={`liveset-tile${e.isHov ? ' is-hov' : ''}`}
            style={{ flex: '0 0 auto', width: 'clamp(186px,62vw,232px)', cursor: 'pointer', position: 'relative', transformOrigin: 'bottom center' }}
            onMouseEnter={() => setHovered(e.uid)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={`liveset-card-inner${e.isHov ? ' is-hov' : ''}`}>
              {/* Disc behind sleeve */}
              <div style={{
                position: 'absolute', top: 0, left: '50%', width: '92%', aspectRatio: '1/1',
                borderRadius: '50%', transform: 'translateX(-50%) translateY(2%)',
                transition: 'opacity .35s ease', opacity: e.isHov ? 0 : 1, zIndex: 0,
                background: 'repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0 1.5px, rgba(0,0,0,0) 1.5px 4px), radial-gradient(circle, #2a241f, #14100c 72%)',
                boxShadow: '0 16px 32px -14px rgba(0,0,0,0.65)',
              }} />
              {/* Sleeve / photo */}
              <div style={{ position: 'relative', zIndex: 2, aspectRatio: '1/1', borderRadius: 3, overflow: 'hidden', background: '#e9e0cf', boxShadow: '0 20px 44px -20px rgba(0,0,0,0.72), inset 0 0 0 1px rgba(255,255,255,0.08)' }}>
                {e.img && (
                  <Image
                    src={e.img} alt={e.name} fill draggable={false}
                    style={{ objectFit: 'cover', objectPosition: e.imgPos }}
                  />
                )}
                <div style={{
                  position: 'absolute', left: 0, right: 0, bottom: 0,
                  padding: '16px 14px 13px',
                  background: 'linear-gradient(to top, rgba(14,10,7,0.9) 0%, rgba(14,10,7,0.55) 52%, rgba(14,10,7,0) 100%)',
                  pointerEvents: 'none',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: '0.08em', color: 'var(--gold)' }}>{e.cat}</span>
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.05, marginTop: 7, color: '#f7f1e6' }}>{e.name}</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10.5, color: 'rgba(242,235,221,0.8)', marginTop: 4 }}>{e.type} · {e.role}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'rgba(242,235,221,0.5)', marginTop: 13, letterSpacing: '0.05em' }}>
                <svg viewBox="0 0 24 24" width={11} height={11} fill="currentColor" style={{ flex: '0 0 auto' }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                {e.place}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
