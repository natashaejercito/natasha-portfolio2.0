'use client';
import type React from 'react';
import { Project, GENRE_LABELS } from '../data';

interface NowPlayingProps {
  np: Project;
  spinning: boolean;
  onToggleSpin: () => void;
}

export default function NowPlaying({ np, spinning, onToggleSpin }: NowPlayingProps) {
  const play = spinning ? 'running' : 'paused';
  const genreLabel = GENRE_LABELS[np.genre] || np.genre;

  return (
    <div style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 50,
      height: 64, display: 'flex', alignItems: 'center', gap: 16,
      padding: '0 clamp(16px,4vw,40px)',
      background: 'var(--navbg)',
      backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
      borderTop: '1px solid var(--line)',
      overflow: 'hidden',
    }}>
      <style>{`
        .nowplaying-desktop-row { display: flex; }
        .nowplaying-mobile-row { display: none; }
        @media (max-width: 480px) {
          .nowplaying-desktop-row { display: none; }
          .nowplaying-mobile-row { display: flex; }
        }
      `}</style>

      <div className="nowplaying-desktop-row" style={{ alignItems: 'center', gap: 16, width: '100%' }}>
        {/* Mini disc */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 13, minWidth: 0, flex: 1 }}>
          <div style={discStyle(play)}>
            <span style={{ width: '38%', height: '38%', borderRadius: '50%', background: np.color }} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', minWidth: 0 }}>
              <span style={titleStyle}>{np.title}</span>
            </div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {np.catalog} • {genreLabel}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1.4, maxWidth: 520, minWidth: 0 }}>
          <button onClick={onToggleSpin} style={playButtonStyle} onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent)')} onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}>
            {spinning ? '❚❚' : '▶'}
          </button>
          <div style={{ flex: 1, height: 3, background: 'var(--line)', borderRadius: 2, position: 'relative', overflow: 'hidden', minWidth: 40 }}>
            <div style={{ height: '100%', background: 'var(--ink)', borderRadius: 2, animation: 'prog 210s linear infinite', animationPlayState: play }} />
          </div>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--muted)', flex: '0 0 auto' }}>33⅓</span>
          <a href={np.repo} target="_blank" rel="noopener noreferrer" title="View repository" style={githubLinkStyle} onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            <GithubIcon size={18} />
          </a>
        </div>

        {/* EQ + side label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, flex: 1, justifyContent: 'flex-end', minWidth: 0 }}>
          <EqBars play={play} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>SIDE A</span>
        </div>
      </div>

      {/* Mobile row: disc, title, play button (position follows title length), then EQ + github on the right */}
      <div className="nowplaying-mobile-row" style={{ alignItems: 'center', gap: 10, width: '100%' }}>
        <div style={discStyle(play)}>
          <span style={{ width: '38%', height: '38%', borderRadius: '50%', background: np.color }} />
        </div>
        <div style={{ minWidth: 0, flex: '0 1 auto', maxWidth: '38%' }}>
          <span style={titleStyle}>{np.title}</span>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {np.catalog} • {genreLabel}
          </div>
        </div>
        <button onClick={onToggleSpin} style={playButtonStyle} onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent)')} onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}>
          {spinning ? '❚❚' : '▶'}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: '0 0 auto', marginLeft: 'auto' }}>
          <EqBars play={play} />
          <a href={np.repo} target="_blank" rel="noopener noreferrer" title="View repository" style={githubLinkStyle} onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

function discStyle(play: 'running' | 'paused'): React.CSSProperties {
  return {
    width: 40, height: 40, borderRadius: '50%', flex: '0 0 auto',
    animation: 'spin 3s linear infinite', animationPlayState: play,
    background: 'repeating-radial-gradient(circle at 50% 50%,rgba(255,255,255,0.06) 0 1px,rgba(0,0,0,0) 1px 3px), radial-gradient(circle,oklch(0.24 0.01 60),oklch(0.16 0.006 58) 70%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  };
}

const titleStyle: React.CSSProperties = {
  fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block', maxWidth: '100%',
};

const playButtonStyle: React.CSSProperties = {
  width: 34, height: 34, borderRadius: '50%', border: 'none', cursor: 'pointer',
  background: 'var(--ink)', color: 'oklch(0.96 0.008 80)', fontSize: 11,
  display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto',
};

const githubLinkStyle: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', flex: '0 0 auto', textDecoration: 'none', transition: 'color .2s',
};

function GithubIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function EqBars({ play }: { play: 'running' | 'paused' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 17 }}>
      {[0.5, 0.72, 0.6, 0.82].map((dur, i) => (
        <span key={i} style={{
          width: 3, height: '100%', background: 'var(--accent)',
          transformOrigin: 'bottom',
          animation: `eq ${dur}s ease-in-out infinite alternate`,
          animationPlayState: play,
        }} />
      ))}
    </div>
  );
}
