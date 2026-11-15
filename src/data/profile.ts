// Every entry here is sourced from the resume (src/assets/Nithin_Dev_2026.pdf),
// the GitHub profile (NithinPeddapelly) or the previous version of this site.
export const profile = {
  name: 'Nithin Peddapelly',
  location: 'Edinburgh, Scotland, UK',
  github: 'https://github.com/NithinPeddapelly',
  linkedin: 'https://www.linkedin.com/in/nithinpeddapelly/',
  blog: 'https://nithinpeddapelly.blogspot.com/',
  tagline: 'MSc Computing student at Edinburgh Napier University (expected Jun 2027), building full-stack and real-time systems and learning machine learning.',
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
    name: 'Eon – Version Control System',
    period: '2025',
    description: 'Git-inspired, snapshot-based version control prototype: workspace init, file staging, snapshot sealing, S3 sync and rewind.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'AWS EC2/S3'],
    status: 'Prototype · open source',
    code: 'https://github.com/NithinPeddapelly/eon',
    note: 'Load-tested with LoadRunner and profiled with JConsole/VisualVM (resume). Roughly a fifth of the intended feature set is built.',
  },
  {
    name: 'Lyno – Video Conferencing',
    period: 'Feb – Apr 2025',
    description: 'WebRTC signalling server with Socket.IO, meeting keys, call history and in-call controls; network behaviour analysed with Wireshark.',
    stack: ['WebRTC', 'Socket.IO', 'React', 'Node.js', 'MongoDB', 'JWT'],
    status: 'Live',
    live: 'https://lyno-frontend.onrender.com/',
    code: 'https://github.com/NithinPeddapelly/Lyno',
  },
  {
    name: 'House Price Prediction Model',
    period: '2024',
    description: 'Team ML project: feature engineering, algorithm tuning and a Python GUI. The resume reports a 16% accuracy improvement.',
    stack: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'],
    status: 'Academic project',
    note: 'No public repository.',
  },
  {
    name: 'ParkFair – Parking App',
    period: '2022 – 2024',
    description: 'Android app led by a 4-person team through Cisco ThingQbator, ending with an Award for Excellence. Resume reports a 35% cut in parking search time.',
    stack: ['Flutter', 'Java', 'MongoDB', 'Firebase'],
    status: 'Award winner',
    note: 'No public repository.',
  },
  {
    name: 'The Baking Cottage Website',
    period: 'May 2026',
    description: 'Client bakery site in Edinburgh: animated landing page, category gallery, Instagram feed, WhatsApp ordering and map.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'Live · client project',
    live: 'https://baking-cottage-site.vercel.app/',
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
  { when: 'Jan 2025 – Present', title: 'MSc Computing (Professional Placement pathway)', where: 'Edinburgh Napier University', detail: 'Expected graduation Jun 2027. Modules: Management of Software Projects, Digital Business Environments, Web Design & Development.', kind: 'education' },
  { when: '2022 – 2024', title: 'Team Leader, ParkFair', where: 'Cisco ThingQbator Incubation Programme', detail: 'Led four people from idea to prototype; Award for Excellence.', kind: 'experience' },
  { when: 'Sep 2022 – Jul 2024', title: 'Lead Graphic Designer', where: 'Avinya Student Body', detail: 'Managed a 3-person team producing 40+ promotional materials.', kind: 'experience' },
  { when: '2021 – 2024', title: 'B.Tech Computer Science & IT', where: 'JNTU-H, MLRIT, India', detail: 'CGPA 6.92 / 10. Ranked 2014 in TS-ECET 2021.', kind: 'education' },
] as const;

export const skills = [
  { title: 'AI / ML (learning)', items: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'ML & Image Processing (Cisco cert.)'] },
  { title: 'Languages & Frameworks', items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C', 'PHP', 'React', 'Node.js', 'Express', 'Flutter'] },
  { title: 'Data & Cloud', items: ['MongoDB', 'MySQL', 'Firebase', 'GraphQL', 'AWS EC2', 'AWS S3', 'Azure'] },
  { title: 'Tools & Platforms', items: ['Git', 'GitHub', 'Linux', 'Bash', 'WebRTC', 'Socket.io', 'Wireshark', 'LoadRunner', 'VisualVM'] },
];

export const achievements = [
  { title: 'Cisco ThingQbator – Award for Excellence', detail: 'Finalist with the ParkFair startup.' },
  { title: 'Esprit-Critique – Runner-up (Silver)', detail: 'Critical thinking competition, 280+ participants.' },
  { title: 'TS-ECET 2021 – Rank 2014', detail: 'State engineering entrance exam.' },
];
