// Every claim here is backed by a public repo, a live site or a certificate.
export const profile = {
  name: 'Nithin Peddapelly',
  location: 'Edinburgh, Scotland, UK',
  github: 'https://github.com/NithinPeddapelly',
  linkedin: 'https://www.linkedin.com/in/nithinpeddapelly/',
  blog: 'https://nithinpeddapelly.blogspot.com/',
  tagline: 'MSc Computing student at Edinburgh Napier University (graduating Sep 2027), building full-stack web apps with TypeScript, React and Node.js. Looking for a software engineering internship or graduate role.',
};

export type Project = {
  name: string;
  period: string;
  description: string;
  stack: string[];
  status: string;
  live?: string;
  code?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    name: 'Lyno – Video Calling',
    period: '2025 – 2026',
    description: 'Browser video calling: peer-to-peer video and audio over WebRTC with a Socket.IO signalling server, screen sharing, in-call chat, JWT login and meeting history.',
    stack: ['TypeScript', 'React', 'Node.js', 'Socket.IO', 'WebRTC', 'MongoDB', 'Docker'],
    status: 'Live',
    live: 'https://lyno-frontend.onrender.com/',
    code: 'https://github.com/NithinPeddapelly/Lyno',
    note: 'STUN only for now, so calls can fail on restrictive networks. No automated tests yet.',
  },
  {
    name: 'The Baking Cottage Website',
    period: 'May – Jul 2026',
    description: 'Freelance client site for an Edinburgh bakery: filterable cake gallery, WhatsApp ordering, map and testimonials. Designed, built, deployed and handed over.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    status: 'Live · client project',
    live: 'https://baking-cottage-site.vercel.app/',
    code: 'https://github.com/NithinPeddapelly/baking-cottage-site',
  },
  {
    name: 'Nextcloud Guest Lifecycle Manager',
    period: '2026 – present',
    description: 'MSc project: a governance layer for Nextcloud guest accounts covering owner tracking, expiry dates, inactivity reviews, renewal and revocation.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Nextcloud OCS API', 'Docker Compose'],
    status: 'In progress',
    note: 'Repository is private while the module is being assessed.',
  },
  {
    name: 'Eon – Version Control CLI',
    period: '2025',
    description: 'Git-inspired command-line tool: initialise a project, stage files, seal snapshots, rewind to a snapshot and sync snapshots with AWS S3.',
    stack: ['Node.js', 'yargs', 'AWS S3'],
    status: 'Prototype',
    code: 'https://github.com/NithinPeddapelly/eon',
    note: 'Branching, authentication and a web UI are not built yet.',
  },
  {
    name: 'ParkFair – Parking App',
    period: '2022 – 2023',
    description: 'Android parking space finder taken from idea to prototype by a four-person team I led through the Cisco ThingQbator incubation programme.',
    stack: ['Flutter', 'Firebase'],
    status: 'Award for Excellence',
    note: 'No public repository.',
  },
];

export const timeline = [
  { when: 'Jan 2026 – Sep 2027', title: 'MSc Computing (Professional Placement pathway)', where: 'Edinburgh Napier University', detail: 'Group project: Nextcloud Guest Lifecycle Manager.', kind: 'education' },
  { when: 'May – Jul 2026', title: 'Freelance Web Developer', where: 'The Baking Cottage, Edinburgh', detail: 'Built and handed over a production website for a local bakery.', kind: 'experience' },
  { when: 'Sep 2022 – Jul 2024', title: 'Lead Graphic Designer', where: 'Avinya Student Body', detail: 'Led a three-person team producing promotional material for campus events.', kind: 'experience' },
  { when: '2022 – 2023', title: 'Team Leader, ParkFair', where: 'Cisco ThingQbator Incubation Programme', detail: 'Led four people from idea to prototype; Award for Excellence.', kind: 'experience' },
  { when: 'Sep 2021 – Sep 2024', title: 'BTech Computer Science & IT', where: 'MLR Institute of Technology (JNTU-H), India', detail: 'Data structures and algorithms in Java; first full-stack projects.', kind: 'education' },
] as const;

export const skills = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'SQL'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Material UI', 'HTML', 'CSS'] },
  { title: 'Backend & Data', items: ['Node.js', 'Express', 'Socket.IO', 'WebRTC', 'REST APIs', 'JWT', 'MongoDB', 'PostgreSQL'] },
  { title: 'Tools', items: ['Git', 'GitHub Actions', 'Docker', 'AWS S3', 'Vercel', 'Render'] },
  { title: 'Learning', items: ['Python', 'Machine learning'] },
];

export const achievements = [
  { title: 'Cisco ThingQbator – Award for Excellence', detail: 'Finalist with the ParkFair startup.' },
  { title: 'Esprit-Critique – Runner-up', detail: 'Critical thinking competition.' },
  { title: 'Certificates', detail: 'DSA with Java (Apna College) · SQL (HackerRank) · ML & Image Processing (Cisco).' },
];
