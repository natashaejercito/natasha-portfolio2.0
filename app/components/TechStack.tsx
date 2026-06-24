export default function TechStack() {
  const rows = [
    { label: 'Languages', items: ['Javascript', 'Typescript', 'Python', 'C++', 'SQL', 'HTML/CSS', 'PHP'] },
    { label: 'Frameworks', items: ['Next.js', 'Node', 'Postgres'] },
    { label: 'Infrastructure', items: ['AWS'] },
    { label: 'Tools', items: ['Linux', 'Figma', 'TablePlus', 'WordPress', 'Git'] },
  ];

  const pill = (item: string) => (
    <span key={item} style={{ padding: '7px 14px', border: '1px solid var(--line)', borderRadius: 999, fontSize: 14, background: 'var(--card)' }}>
      {item}
    </span>
  );

  return (
    <section id="setup" style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(72px,9vw,120px) clamp(20px,5vw,56px)' }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: '0.16em', color: 'var(--accent)', textTransform: 'uppercase' }}>The Setup / Signal Chain</div>
      <h2 style={{ fontSize: 'clamp(30px,4.5vw,52px)', fontWeight: 800, letterSpacing: '-0.02em', margin: '10px 0 0' }}>Tech Stack</h2>
      <div style={{ marginTop: 38, borderTop: '1px solid var(--line)' }}>
        {rows.map((row, i) => (
          <div key={row.label} style={{
            display: 'grid', gridTemplateColumns: 'minmax(110px,200px) 1fr',
            gap: 'clamp(16px,3vw,40px)', padding: '24px 0',
            borderBottom: i < rows.length - 1 ? '1px solid var(--line)' : undefined,
          }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase', paddingTop: 5 }}>{row.label}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>{row.items.map(pill)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
