import Image from 'next/image';
import { PORTRAIT_URL } from '../data';

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--band)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(72px,9vw,120px) clamp(20px,5vw,56px)' }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: '0.16em', color: 'var(--accent)', textTransform: 'uppercase' }}>Liner Notes / Side A</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(34px,5vw,68px)', marginTop: 26, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 22px' }}>About the artist</h2>
            <p style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(18px,1.7vw,21px)', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 18px' }}>
              Natasha is a developer and data analyst that admires software development. She likes building frontend interfaces in Next.js and CMS platforms like WordPress, learning backend with Node and database management such as TablePlus, and experimenting in machine learning with Python.
            </p>
            <p style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(18px,1.7vw,21px)', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>
              You&apos;ll see her offline playing volleyball, helping organize the largest and most unique hackathons, obsessing over matcha cafes in Toronto, and chatting with Claude about kawaii side project ideas.
            </p>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'var(--muted)', marginTop: 26, letterSpacing: '0.04em' }}>— N.E., recorded in Toronto&nbsp;</div>
          </div>

          <div>
            <div style={{ position: 'relative', aspectRatio: '4/5', border: '1px solid #cfc4b0', borderRadius: 3, overflow: 'hidden' }}>
              <Image src={PORTRAIT_URL} alt="Natasha Ejercito" fill style={{ objectFit: 'cover', objectPosition: '50% 28%' }} />
            </div>
            <div style={{ marginTop: 20, borderTop: '1px solid #cfc4b0' }}>
              {[
                ['ARTIST', 'Natasha Ejercito'],
                ['FORMAT', 'Software'],
                ['GENRE', 'Frontend · Data · AI/ML · Backend'],
                ['LABEL', 'Student · Intern'],
              ].map(([label, val], i, arr) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : undefined, fontFamily: "'Space Mono', monospace", fontSize: 12 }}>
                  <span style={{ color: 'var(--muted)', letterSpacing: '0.06em' }}>{label}</span>
                  <span style={{ fontWeight: 700 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(34px,5vw,68px)', marginTop: 'clamp(40px,5vw,64px)' }}>
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: '0.14em', color: 'var(--ink)', textTransform: 'uppercase', paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>Side A — Experience</div>
            {[
              { code: 'A1', role: 'Operations & Data Analyst Intern', org: 'ventureLAB', year: 'ongoing' },
              { code: 'A2', role: 'Frontend Developer', org: 'Hack the Valley', year: '2025' },
              { code: 'A3', role: 'Support Services Officer', org: 'Seneca Polytechnic', year: '2024' },
            ].map((item, i, arr) => (
              <div key={item.code} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 14, padding: '15px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : undefined }}>
                <span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'var(--accent)', marginRight: 12 }}>{item.code}</span>
                  <span style={{ fontWeight: 600 }}>{item.role}</span>
                  <span style={{ color: 'var(--muted)' }}> · {item.org}</span>
                </span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'var(--muted)', flex: '0 0 auto' }}>{item.year}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: '0.14em', color: 'var(--ink)', textTransform: 'uppercase', paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>Side B — Selected</div>
            {[
              { code: 'B1', role: 'Operations Lead', org: 'SOON Hackathon', year: 'ongoing' },
              { code: 'B2', role: 'Sponsorship Coordinator', org: 'Hack the Valley', year: 'ongoing' },
              { code: 'B3', role: 'Sponsorship Director', org: 'GDG UTSC', year: '2025' },
            ].map((item, i, arr) => (
              <div key={item.code} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 14, padding: '15px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : undefined }}>
                <span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'var(--accent)', marginRight: 12 }}>{item.code}</span>
                  <span style={{ fontWeight: 600 }}>{item.role}</span>
                  <span style={{ color: 'var(--muted)' }}> · {item.org}</span>
                </span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'var(--muted)', flex: '0 0 auto' }}>{item.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
