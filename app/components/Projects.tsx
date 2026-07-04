'use client';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { PROJECTS, GENRE_LABELS, Project } from '../data';

const STACK_EXIT_MS = 420;

const GENRES = [
  { key: 'ALL', label: 'All Releases' },
  { key: 'WEB', label: 'Web' },
  { key: 'OSS', label: 'AI/ML' },
  { key: 'LAB', label: 'Backend' },
];

const DISC_RINGS = [
  { top: '13%', left: '50%', transform: 'translateX(-50%)', width: '56%', height: '56%' },
  { top: '18%', right: '13%', width: '44%', height: '44%' },
  { top: '12%', left: '12%', width: '50%', height: '50%' },
  { top: '15%', left: '50%', transform: 'translateX(-50%)', width: '64%', height: '64%' },
  { top: '20%', left: '15%', width: '40%', height: '40%' },
  { top: '14%', right: '15%', width: '52%', height: '52%' },
  { top: '16%', left: '50%', transform: 'translateX(-50%)', width: '48%', height: '48%' },
  { top: '18%', left: '14%', width: '46%', height: '46%' },
];

interface ProjectsProps {
  onPlay: (p: Project) => void;
}

function AlbumArt({ p, i, liftDisc }: { p: Project; i: number; liftDisc: boolean }) {
  const ink = p.dark ? 'rgba(247,243,236,0.95)' : 'rgba(26,20,14,0.9)';
  const ringCol = p.dark ? 'rgba(247,243,236,0.42)' : 'rgba(26,20,14,0.32)';
  const ring = DISC_RINGS[i % DISC_RINGS.length];
  const genreLabel = GENRE_LABELS[p.genre] || p.genre;

  return (
    <div style={{ position: 'relative', overflow: 'visible' }}>
      {/* Disc */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', width: '93%', aspectRatio: '1/1',
        borderRadius: '50%',
        transform: `translateX(-50%) translateY(${liftDisc ? '-33%' : '4%'})`,
        transition: 'transform .45s cubic-bezier(.2,.7,.2,1)', zIndex: 1,
        background: 'repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0 1.5px, rgba(0,0,0,0) 1.5px 4px), radial-gradient(circle, oklch(0.23 0.01 60), oklch(0.15 0.006 58) 72%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 12px 26px -12px rgba(0,0,0,0.55)',
      }}>
        <div style={{ width: '30%', aspectRatio: '1/1', borderRadius: '50%', background: p.color, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#e7e1d6' }} />
        </div>
      </div>
      {/* Cover */}
      <div style={{
        position: 'relative', zIndex: 2, width: '100%', aspectRatio: '1/1',
        background: p.color, color: ink, borderRadius: 2, padding: 15,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        overflow: 'hidden',
        boxShadow: '0 1px 2px rgba(40,30,20,0.16), inset 0 0 0 1px rgba(255,255,255,0.12)',
      }}>
        {/* Ring decoration */}
        <div style={{ position: 'absolute', borderRadius: '50%', border: `1.5px solid ${ringCol}`, pointerEvents: 'none', zIndex: 1, ...ring }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: '0.04em', fontWeight: 700 }}>{p.catalog}</span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: '0.06em', opacity: 0.6 }}>33⅓</span>
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 'clamp(16px,1.7vw,21px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.015em' }}>{p.title}</div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7, marginTop: 6 }}>{genreLabel}</div>
        </div>
        {/* GitHub icon as barcode */}
        <svg viewBox="0 0 16 16" style={{ position: 'absolute', right: 15, bottom: 15, zIndex: 2, width: 30, height: 30, opacity: 0.9 }}>
          <defs><clipPath id={`ghbc-${p.id}`}><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" /></clipPath></defs>
          <g clipPath={`url(#ghbc-${p.id})`} fill="currentColor">
            {[[0,1.1],[1.6,0.5],[2.5,1.3],[4.3,0.6],[5.2,1.5],[7.1,0.5],[7.9,1],[9.2,1.4],[10.9,0.5],[11.7,1.2],[13.3,0.6],[14.2,1.5]].map(([x, w]) => (
              <rect key={x} x={x} y={0} width={w} height={16} />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Projects({ onPlay }: ProjectsProps) {
  const [genre, setGenre] = useState('ALL');
  const [hovered, setHovered] = useState<string | null>(null);
  const [stackIndex, setStackIndex] = useState(0);
  const [prevGenre, setPrevGenre] = useState(genre);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [exiting, setExiting] = useState<{ p: Project; idx: number; popped: boolean } | null>(null);
  const [exitAnimating, setExitAnimating] = useState(false);
  const dragStartY = useRef<number | null>(null);
  const dragMoved = useRef(false);
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentGenreRef = useRef(genre);

  const all = [...PROJECTS];
  const filtered = genre === 'ALL' ? all : all.filter(p => p.genre === genre);

  if (genre !== prevGenre) {
    setPrevGenre(genre);
    setStackIndex(0);
    setExiting(null);
    setExitAnimating(false);
  }

  useEffect(() => {
    currentGenreRef.current = genre;
  }, [genre]);

  useEffect(() => () => {
    if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
  }, []);

  const stackLen = filtered.length;
  const peekCount = Math.min(2, stackLen - 1);
  const frontProject = filtered[stackIndex];

  function goNext() {
    if (exiting) return;
    const p = frontProject;
    const genreAtSwipe = genre;
    setExiting({ p, idx: stackIndex, popped: p.id === activeId });
    setExitAnimating(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setExitAnimating(true)));
    exitTimeoutRef.current = setTimeout(() => {
      if (currentGenreRef.current !== genreAtSwipe) return;
      setStackIndex(i => (i + 1) % stackLen);
      setExiting(null);
      setExitAnimating(false);
    }, STACK_EXIT_MS);
  }

  function onFrontPointerUp(e: React.PointerEvent) {
    onStackPointerUp(e, frontProject);
  }

  function onStackPointerDown(e: React.PointerEvent) {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStartY.current = e.clientY;
    dragMoved.current = false;
  }
  function onStackPointerMove(e: React.PointerEvent) {
    if (dragStartY.current == null) return;
    if (Math.abs(e.clientY - dragStartY.current) > 10) dragMoved.current = true;
  }
  function onStackPointerUp(e: React.PointerEvent, p: Project) {
    if (dragStartY.current == null) return;
    const delta = e.clientY - dragStartY.current;
    dragStartY.current = null;
    if (delta < -40) {
      goNext();
    } else if (!dragMoved.current) {
      setActiveId(p.id);
      onPlay(p);
    }
  }

  return (
    <section id="work" style={{
      background: 'radial-gradient(125% 90% at 72% 0%, var(--deep0) 0%, var(--deep) 55%, var(--deep2) 100%)',
      color: 'var(--invtext)', position: 'relative',
    }}>
      <style>{`
        .projects-grid { display: grid; }
        .projects-stack { display: none; }
        @media (max-width: 640px) {
          .projects-grid { display: none; }
          .projects-stack { display: flex; }
        }
      `}</style>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,56px) clamp(60px,8vw,96px)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: '0.16em', color: 'var(--gold)', textTransform: 'uppercase' }}>Releases / 02</div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, letterSpacing: '-0.02em', margin: '10px 0 0' }}>Projects</h2>
          </div>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'rgba(250,247,240,0.6)', maxWidth: '34ch', lineHeight: 1.6, margin: 0 }}>
            Hover to pull a sleeve, click to drop the needle.
          </p>
        </div>

        {/* Genre tabs */}
        <div data-crate="" style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginTop: 30, paddingLeft: 2, borderBottom: '1px solid rgba(255,255,255,0.15)', overflowX: 'auto', flexWrap: 'nowrap' }}>
          {GENRES.map(g => {
            const active = genre === g.key;
            return (
              <button
                key={g.key}
                onClick={() => setGenre(g.key)}
                style={{
                  appearance: 'none', cursor: 'pointer',
                  fontFamily: "'Space Mono', monospace", fontSize: 12,
                  letterSpacing: '0.07em', textTransform: 'uppercase',
                  padding: '9px 16px 8px', borderRadius: '4px 4px 0 0',
                  border: `1px solid ${active ? 'var(--gold)' : 'rgba(255,255,255,0.18)'}`,
                  borderBottom: active ? '2px solid var(--gold)' : '1px solid rgba(255,255,255,0.18)',
                  background: active ? 'rgba(227,164,62,0.14)' : 'rgba(255,255,255,0.04)',
                  color: active ? 'var(--gold)' : 'rgba(250,247,240,0.6)',
                  transform: active ? 'translateY(-3px)' : 'none',
                  transition: 'all .2s',
                  fontWeight: active ? 700 : 400,
                  marginBottom: '-1px',
                  flex: '0 0 auto',
                  whiteSpace: 'nowrap',
                }}
              >{g.label}</button>
            );
          })}
        </div>

        {/* Project grid (desktop / tablet) */}
        <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(228px,1fr))', gap: 'clamp(26px,3vw,42px) clamp(20px,2.4vw,32px)', marginTop: 40 }}>
          {filtered.map((p, i) => {
            const isHov = hovered === p.id;
            const genreLabel = GENRE_LABELS[p.genre] || p.genre;
            return (
              <div
                key={p.id}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onPlay(p)}
                style={{
                  cursor: 'pointer',
                  transition: 'transform .3s cubic-bezier(.2,.7,.2,1)',
                  transform: isHov ? 'translateY(-4px)' : 'none',
                }}
              >
                <AlbumArt p={p} i={i} liftDisc={isHov} />
                <div style={{ marginTop: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
                  <span style={{ fontWeight: 600, fontSize: 15 }}>{p.title}</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'rgba(250,247,240,0.55)', flex: '0 0 auto' }}>{p.year}</span>
                </div>
                <div style={{ fontSize: 13, color: 'rgba(250,247,240,0.7)', lineHeight: 1.45, marginTop: 5 }}>{p.desc}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10.5, color: 'var(--gold)', letterSpacing: '0.05em', marginTop: 9 }}>{p.catalog} · {genreLabel}</div>
              </div>
            );
          })}
        </div>

        {/* Project stack (mobile): swipe up to browse, tap to play */}
        <div className="projects-stack" style={{ flexDirection: 'column', alignItems: 'center', marginTop: 56 }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 280, aspectRatio: '1/1', paddingTop: 32 }}>
            {Array.from({ length: peekCount }, (_, k) => k + 1).map(back => {
              const idx = (stackIndex + back) % stackLen;
              const p = filtered[idx];
              const scale = 1 - back * 0.06;
              const liftY = back * -16;
              const rotate = back === 1 ? -3 : 4;
              return (
                <div
                  key={p.id}
                  style={{
                    position: 'absolute', top: 32, left: 0, right: 0,
                    zIndex: 3 - back,
                    opacity: back === 1 ? 0.85 : 0.6,
                    transform: `translateY(${liftY}px) rotate(${rotate}deg) scale(${scale})`,
                    transition: 'transform .38s cubic-bezier(.2,.7,.2,1), opacity .38s',
                  }}
                >
                  <AlbumArt p={p} i={idx} liftDisc={false} />
                </div>
              );
            })}
            {!exiting && (
              <div
                key={frontProject.id}
                onPointerDown={onStackPointerDown}
                onPointerMove={onStackPointerMove}
                onPointerUp={onFrontPointerUp}
                style={{
                  position: 'absolute', top: 32, left: 0, right: 0,
                  zIndex: 3,
                  touchAction: 'none',
                  cursor: 'pointer',
                  transition: 'transform .38s cubic-bezier(.2,.7,.2,1)',
                }}
              >
                <AlbumArt p={frontProject} i={stackIndex} liftDisc={frontProject.id === activeId} />
              </div>
            )}
            {exiting && (
              <div
                style={{
                  position: 'absolute', top: 32, left: 0, right: 0,
                  zIndex: 10, pointerEvents: 'none',
                  transition: `transform ${STACK_EXIT_MS}ms cubic-bezier(.3,.7,.4,1), opacity ${STACK_EXIT_MS}ms ease`,
                  transform: exitAnimating ? 'translateY(-64px) rotate(-8deg) scale(0.74)' : 'translateY(0px) rotate(0deg) scale(1)',
                  opacity: exitAnimating ? 0 : 1,
                }}
              >
                <AlbumArt p={exiting.p} i={exiting.idx} liftDisc={exiting.popped} />
              </div>
            )}
          </div>
          <div style={{ marginTop: 15, width: '100%', maxWidth: 280, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontWeight: 600, fontSize: 15 }}>{frontProject.title}</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'rgba(250,247,240,0.55)', flex: '0 0 auto' }}>{frontProject.year}</span>
            </div>
            <div style={{ fontSize: 13, color: 'rgba(250,247,240,0.7)', lineHeight: 1.45, marginTop: 5, textAlign: 'left' }}>{frontProject.desc}</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10.5, color: 'var(--gold)', letterSpacing: '0.05em', marginTop: 9, textAlign: 'left' }}>{frontProject.catalog} · {GENRE_LABELS[frontProject.genre] || frontProject.genre}</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'rgba(250,247,240,0.45)', marginTop: 16 }}>
              ▲ swipe for next · {stackIndex + 1} / {stackLen}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
