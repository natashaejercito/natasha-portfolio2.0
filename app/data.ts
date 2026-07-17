export const PROJECTS = [
  { id: 'sa-001', catalog: 'NE-001', title: 'NatBlog', genre: 'WEB', year: '2026', desc: 'Using CMS fundamentals to build my personal blog.', color: 'var(--accent)', dark: true, repo: 'https://github.com/natashaejercito/wp-natblog' },
  { id: 'sa-002', catalog: 'NE-002', title: 'Alignly', genre: 'OSS', year: '2026', desc: 'A career alignment tool for students searching for an internship or co-op.', color: '#d6a23c', dark: false, repo: 'https://alignly-career.vercel.app/' },
  { id: 'sa-003', catalog: 'NE-003', title: 'My Tamagotchi', genre: 'OSS', year: '2026', desc: 'A digital pet game built with React and TypeScript.', color: '#d6a23c', dark: false, repo: 'https://github.com/natashaejercito/my-tamagotchi' },
  { id: 'sa-004', catalog: 'NE-004', title: 'Volleyball Statistics', genre: 'LAB', year: '2026', desc: 'Helps to identify mistakes and to leverage skills in the sport.', color: '#3f7d72', dark: true, repo: 'https://github.com/natashaejercito/volleyball-stats' },
  { id: 'sa-005', catalog: 'NE-005', title: 'Pomodoro Timer', genre: 'WEB', year: '2025', desc: 'A simple application that uses the fundamentals of HTML, CSS, and JS.', color: '#9ab0bf', dark: false, repo: 'https://github.com/natashaejercito/pomodoro-timer' },
  { id: 'sa-006', catalog: 'NE-006', title: 'Pretty Plants Info', genre: 'WEB', year: '2025', desc: 'A website to know more about the pretty plants we surround ourselves with.', color: '#9c5a3c', dark: true, repo: 'https://github.com/natashaejercito/pretty-plants-info' },
  { id: 'sa-007', catalog: 'NE-007', title: 'Haiku Generator', genre: 'OSS', year: '2025', desc: 'An AI generator that enforces 5-7-5 syllable rule.', color: '#d6a23c', dark: false, repo: 'https://github.com/natashaejercito/haiku-ai-generator' },
  { id: 'sa-008', catalog: 'NE-008', title: 'Discography Artist', genre: 'WEB', year: '2025', desc: 'Fan girling over Wave to Earth showcasing their indie surf-rock music + other info.', color: '#3f7d72', dark: true, repo: 'https://github.com/natashaejercito/wave-to-earth' }
] as const;

export const PORTRAIT_URL = 'https://res.cloudinary.com/aprltygr/image/upload/v1783049542/IMG_0822_nldf4e.jpg';

export const EVENTS = [
  { id: 'lv-07', cat: 'LIVE-01', name: 'Bruno Mars', type: 'Offline Activity', role: '1st concert', place: 'Rogers Stadium', img: 'https://res.cloudinary.com/aprltygr/image/upload/v1783050495/IMG_7926_x5ndr9.jpg', imgPos: '74% 45%' },
  { id: 'lv-02', cat: 'LIVE-02', name: 'SOON Hackathon', type: 'Organizer', role: 'Ops lead', place: 'Uxbridge', img: 'https://res.cloudinary.com/aprltygr/image/upload/v1783049542/4CC8D107-7C6F-4584-AE92-3EE7F12F3295_jr4j4t.jpg', imgPos: '18% 50%' },
  { id: 'lv-05', cat: 'LIVE-03', name: 'Next Wave of LLMs', type: 'Spotify Event', role: 'Attendee', place: 'Toronto', img: 'https://res.cloudinary.com/aprltygr/image/upload/v1783053809/IMG_7700_dq2vtx.jpg', imgPos: '50% 35%' },
  { id: 'lv-04', cat: 'LIVE-04', name: 'Wu Wei', type: 'Café', role: 'Best matcha so far', place: 'Toronto', img: 'https://res.cloudinary.com/aprltygr/image/upload/v1783049985/IMG_5028_dkonom.jpg', imgPos: '50% 50%' },
  { id: 'lv-03', cat: 'LIVE-05', name: 'GDG UTSC', type: 'AI Conference', role: 'Director', place: 'Scarborough', img: 'https://res.cloudinary.com/aprltygr/image/upload/v1783049542/IMG_0834_vzlov8.jpg', imgPos: '40% 35%' },
  { id: 'lv-01', cat: 'LIVE-06', name: 'Hack the Valley X', type: 'Hackathon', role: 'Hacker · Frontend', place: 'Scarborough', img: 'https://res.cloudinary.com/aprltygr/image/upload/v1783050589/IMG_5987_pr7siw.jpg', imgPos: '50% 50%' },
  { id: 'lv-08', cat: 'LIVE-07', name: 'Fam', type: 'loves', role: 'lil sis + cousins', place: 'Toronto', img: 'https://res.cloudinary.com/aprltygr/image/upload/v1783049543/IMG_5249_lxabrg.jpg', imgPos: '50% 40%' },
  { id: 'lv-06', cat: 'LIVE-08', name: 'Volleyball', type: 'Offline Activity', role: 'Drop-in', place: 'Toronto',  img: 'https://res.cloudinary.com/aprltygr/image/upload/v1783050802/IMG_3614_bvgydt.jpg', imgPos: '55% 40%' },
] as const;

export const GENRE_LABELS: Record<string, string> = {
  WEB: 'Web',
  OSS: 'AI/ML',
  LAB: 'Backend',
};

export const PALETTES = {
  'Warm Wax': {
    bg: '#f4ede0', ink: '#2c2521', accent: '#c2452e', muted: '#6d6052',
    line: '#dcd2bf', card: '#fbf6ec', band: '#ebe3d2',
    deep0: '#6a0e1a', deep: '#550712', deep2: '#44050e',
    gold: '#e3a43e', gold2: '#d8a73f', invtext: '#f2ebdd',
    navbg: 'rgba(244,237,224,0.82)',
  },
  'Midnight Press': {
    bg: '#1a1714', ink: '#ece3d4', accent: '#e0673f', muted: '#9b8f7e',
    line: '#352f28', card: '#221d18', band: '#201b16',
    deep0: '#2a1d16', deep: '#140d0a', deep2: '#080605',
    gold: '#e7ab4a', gold2: '#dca33f', invtext: '#f2ebdd',
    navbg: 'rgba(20,17,14,0.82)',
  },
  'Cool Mint': {
    bg: '#eef1e8', ink: '#22302a', accent: '#2f7d6b', muted: '#5f6f66',
    line: '#cdd6c8', card: '#f6f8f1', band: '#e3e9dd',
    deep0: '#1a4f45', deep: '#123a33', deep2: '#0c2b26',
    gold: '#caa24a', gold2: '#bf9a3f', invtext: '#eef3ea',
    navbg: 'rgba(238,241,232,0.82)',
  },
} as const;

export type PaletteName = keyof typeof PALETTES;
export type Project = typeof PROJECTS[number];
export type Event = typeof EVENTS[number];
