// Every entry here is sourced from the current resume (src/assets/Nithin_Peddapelly_Resume.pdf)
// or the public GitHub profile (NithinPeddapelly). Nothing is added that neither source supports.
export const profile = {
  name: 'Nithin Peddapelly',
  location: 'Edinburgh, United Kingdom',
  github: 'https://github.com/NithinPeddapelly',
  linkedin: 'https://www.linkedin.com/in/nithinpeddapelly/',
  blog: 'https://nithinpeddapelly.blogspot.com/',
  tagline: 'MSc Computing student at Edinburgh Napier University (graduating Sep 2027), seeking a software engineering internship or graduate role. I build full-stack web apps in TypeScript, React and Node.js.',
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
    name: 'Lyno – Real-Time Video Calling',
    period: '2025',
    description: 'Peer-to-peer video and audio calls with screen sharing and in-call chat over a Socket.IO signalling server and WebRTC mesh connections. JWT + bcrypt auth, request validation, rate limiting and security headers on the API.',
    stack: ['TypeScript', 'React', 'Node.js', 'Socket.IO', 'WebRTC', 'MongoDB', 'Docker'],
    status: 'Live',
    live: 'https://lyno-frontend.onrender.com/',
    code: 'https://github.com/NithinPeddapelly/Lyno',
    note: 'Containerised with Docker Compose; a GitHub Actions pipeline type-checks, builds and produces images on each push. Deployed on Render.',
  },
  {
    name: 'Nextcloud Guest Lifecycle Manager',
    period: '2026 – present',
    description: 'MSc group project: a governance layer for Nextcloud guest accounts covering owner tracking, expiry dates, inactivity reviews, renewal and revocation.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Nextcloud OCS API', 'Docker Compose'],
    status: 'In progress',
    code: 'https://github.com/NithinPeddapelly/Guest-Account-Lifecycle-Manager',
    note: 'I built the Express backend that reads guest and login data from the OCS API and stores lifecycle data in PostgreSQL, with an hourly review scheduler.',
  },
  {
    name: 'The Baking Cottage',
    period: 'May 2026',
    description: 'Freelance website for an Edinburgh bakery: responsive design, filterable cake gallery, WhatsApp ordering and a location map. Includes client handover with quotation, acceptance and IP assignment documents.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    status: 'Live · client project',
    live: 'https://baking-cottage-site.vercel.app/',
    code: 'https://github.com/NithinPeddapelly/baking-cottage-site',
  },
  {
    name: 'Eon – Version Control CLI',
    period: 'In progress',
    description: 'Git-inspired CLI: stage files, create snapshots, restore a snapshot, and push and pull snapshots to AWS S3.',
    stack: ['Node.js', 'AWS S3'],
    status: 'In progress',
    code: 'https://github.com/NithinPeddapelly/eon',
    note: 'Next: REST API with authentication, snapshot history and diffs.',
  },
  {
    name: 'AI Chatbot Platform',
    period: 'Aug 2025',
    description: 'No-code chatbot app with Nhost auth, Apollo GraphQL queries/mutations and protected routes.',
    stack: ['React', 'Apollo Client', 'GraphQL', 'Nhost'],
    status: 'Live prototype',
    live: 'https://chatbot19n.netlify.app/',
    code: 'https://github.com/NithinPeddapelly/ai-chatbot',
  },
];

export const timeline = [
  { when: 'June 2026 – present', title: 'Customer Assistant (part-time)', where: 'Morrisons, Edinburgh', detail: 'Part-time alongside my MSc.', kind: 'experience' },
  { when: 'Jan 2026 – Sep 2027 (expected)', title: 'MSc Computing', where: 'Edinburgh Napier University, UK', detail: 'Currently working on the Nextcloud Guest Lifecycle Manager group project.', kind: 'education' },
  { when: 'Sep 2022 – Jul 2024', title: 'Lead Graphic Designer', where: 'Avinya (student body)', detail: 'Led a design team of three producing promotional material for campus events and mentored junior designers.', kind: 'experience' },
  { when: 'Cisco ThingQbator', title: 'Team Leader, ParkFair', where: 'Incubation programme', detail: 'Led a team of four from concept to a working prototype of a parking space finder app (Flutter, Firebase). Finalist in all three stages; Award for Excellence.', kind: 'experience' },
  { when: '2021 – 2024', title: 'BTech Computer Science & IT', where: 'MLR Institute of Technology (JNTU-H), India', detail: 'Computer Science and Information Technology.', kind: 'education' },
] as const;

export const skills = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Java (DSA)', 'SQL'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Material UI', 'HTML', 'CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'Socket.IO', 'WebRTC', 'REST APIs', 'JWT auth'] },
  { title: 'Data', items: ['MongoDB (Mongoose)', 'Prisma', 'SQLite', 'PostgreSQL'] },
  { title: 'Tools', items: ['Git', 'GitHub Actions', 'Docker', 'AWS S3', 'Vercel', 'Render'] },
];

export const achievements = [
  { title: 'Award for Excellence', detail: 'Cisco ThingQbator incubation programme, ParkFair team.' },
  { title: 'Runner-up', detail: 'Esprit-Critique critical thinking competition.' },
  { title: 'DSA with Java (Alpha)', detail: 'Apna College certification.' },
  { title: 'SQL (Basic, Intermediate)', detail: 'HackerRank certification.' },
];
