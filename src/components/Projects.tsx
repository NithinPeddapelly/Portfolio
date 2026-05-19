import React, { useMemo, useState } from 'react';
import Carousel from './Carousel';
import eonImg1 from '../assets/E-01.png';
import eonImg2 from '../assets/E-02.png';
import lynoImg1 from '../assets/L-01.png';
import lynoImg2 from '../assets/L-02.png';
import lynoImg3 from '../assets/L-03.png';
import lynoImg4 from '../assets/L-4.png';
import bakingImg15 from '../assets/B1.png';
import bakingImg14 from '../assets/B2.png';
import bakingImg13 from '../assets/B3.png';
import bakingImg12 from '../assets/B4.png';
import bakingImg11 from '../assets/B5.png';
import bakingImg10 from '../assets/B6.png';
import bakingImg9 from '../assets/B7.png';
import bakingImg8 from '../assets/B8.png';
import bakingImg7 from '../assets/B9.png';
import bakingImg6 from '../assets/B10.png';
import bakingImg5 from '../assets/B11.png';
import bakingImg4 from '../assets/B12.png';
import bakingImg3 from '../assets/B13.png';
import bakingImg2 from '../assets/B14.png';
import bakingImg1 from '../assets/B15.png';
import { ExternalLink, Github, Server, Video, GitBranch, Shield } from 'lucide-react';

type Domain = 'Full-Stack' | 'Frontend' | 'Real-Time' | 'Systems' | 'AI';

type Project = {
  id: number;
  name: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string[];
  icon: React.ReactNode;
  gradient: string;
  highlights: string[];
  metrics: Array<{ label: string; value: string }>;
  domains: Domain[];
  liveUrl?: string;
  codeUrl?: string;
  preview: 'eon' | 'lyno' | 'bakingCottage' | 'abstract';
  status: string;
  progress?: number;
  details?: {
    current: string[];
    goals: string[];
    takeaway: string;
  };
};

const domainFilters: Array<'All' | Domain> = ['All', 'Full-Stack', 'Frontend', 'Real-Time', 'Systems', 'AI'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | Domain>('All');

  const projects: Project[] = [
    {
      id: 1,
      name: 'The Baking Cottage Website',
      period: 'May 2026 - May 2026',
      startDate: '2026-05',
      endDate: '2026-05',
      description:
        'Built a conversion-focused bakery website with a multi-section homepage, curated galleries, testimonials, Instagram integration, WhatsApp ordering, contact flows, and a location map.',
      techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel Analytics'],
      icon: <Server className="w-8 h-8" />,
      gradient: 'from-rose-500 to-orange-500',
      highlights: ['Animated Landing Experience', 'Category-Based Gallery', 'WhatsApp Ordering Flow', 'Analytics Integration'],
      metrics: [
        { label: 'Site Sections', value: '10+' },
        { label: 'Gallery Categories', value: '6' },
        { label: 'Primary CTA', value: 'WhatsApp' }
      ],
      domains: ['Frontend', 'Full-Stack'],
      liveUrl: 'https://baking-cottage-site.vercel.app/',
      preview: 'bakingCottage',
      status: 'Live - Client Project',
      progress: 90,
      details: {
        current: [
          'Delivers a polished storefront with hero, gallery, testimonials, about, contact, and location sections.',
          'Uses category-driven gallery logic and image-heavy presentation to sell custom cakes visually.',
          'Routes customers into WhatsApp for custom order inquiries instead of a generic contact form only.',
          'Adds social proof and locality through Instagram feed, testimonials, and embedded map support.'
        ],
        goals: [
          'Turn the inquiry flow into a proper order management or checkout system.',
          'Add backend content management for gallery items, offers, and testimonials.',
          'Improve SEO and local discovery for Edinburgh search intent.',
          'Add richer customer journey analytics and order tracking.'
        ],
        takeaway:
          'This is a complete client-ready business site delivered and sold to The Baking Cottage. The source code is private because it was handed over as part of the engagement. The live site is publicly accessible via the link above.'
      }
    },
    {
      id: 2,
      name: 'Portfolio Website',
      period: 'Sep 2025 - Sep 2025',
      startDate: '2025-09',
      endDate: '2025-09',
      description:
        'Designed and deployed a personal portfolio to present projects, skills, contact pathways, and visual case studies with a responsive, performance-oriented frontend architecture.',
      techStack: ['React 18', 'Vite', 'Tailwind CSS', 'EmailJS', 'GitHub Pages'],
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-cyan-500 to-blue-600',
      highlights: ['Responsive Project Showcase', 'EmailJS Contact Workflow', 'Performance-Focused UI', 'GitHub Pages Deployment'],
      metrics: [
        { label: 'Featured Projects', value: '5' },
        { label: 'Deployment', value: 'GitHub Pages' },
        { label: 'Contact Flow', value: 'EmailJS' }
      ],
      domains: ['Frontend'],
      liveUrl: 'https://nithinpeddapelly.github.io/Portfolio/',
      codeUrl: 'https://github.com/NithinPeddapelly/Portfolio',
      preview: 'abstract',
      status: 'Live',
      progress: 100,
      details: {
        current: [
          'Shows featured projects in a filterable card layout with screenshots and action buttons.',
          'Includes a strong hero section, skills overview, about section, achievements, and contact area.',
          'Uses a polished visual system to communicate experience quickly and clearly.',
          'Is deployed and already serving as the main public-facing portfolio.'
        ],
        goals: [
          'Add deeper case studies for each project with problems, decisions, and outcomes.',
          'Introduce a small blog or notes area for technical writing.',
          'Keep refining motion, spacing, and content hierarchy as the project list grows.',
          'Optionally add analytics-driven improvements to the most visited sections.'
        ],
        takeaway:
          'This is the most complete project in the set because it is already live and is functioning as the personal showcase site. The remaining work is refinement rather than core feature completion.'
      }
    },
    {
      id: 3,
      name: 'AI Chatbot Platform',
      period: 'Aug 2025 - Aug 2025',
      startDate: '2025-08',
      endDate: '2025-08',
      description:
        'Created a no-code chatbot application with Nhost authentication, Apollo GraphQL queries and mutations, protected routes, and chat creation and message navigation flows.',
      techStack: ['React 18', 'Apollo Client', 'GraphQL', 'Nhost', 'Netlify'],
      icon: <Server className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-teal-600',
      highlights: ['GraphQL Data Layer', 'No-Code Chatbot Flows', 'Real-Time State Updates', 'Netlify Deployment'],
      metrics: [
        { label: 'Data Layer', value: 'GraphQL' },
        { label: 'Backend', value: 'Nhost' },
        { label: 'Hosting', value: 'Netlify' }
      ],
      domains: ['AI', 'Full-Stack'],
      liveUrl: 'https://chatbot19n.netlify.app/',
      codeUrl: 'https://github.com/NithinPeddapelly/ai-chatbot',
      preview: 'abstract',
      status: 'Live',
      progress: 96,
      details: {
        current: [
          'Provides login and sign-up flows backed by Nhost authentication.',
          'Uses Apollo Client and GraphQL to read and create chats from the frontend.',
          'Protects the chat experience behind authenticated routes.',
          'Supports chat list loading, new chat creation, and navigation into message threads.'
        ],
        goals: [
          'Improve the message composition and AI response experience.',
          'Add richer conversation management, search, and organization.',
          'Refine error handling and loading states across the auth and chat flows.',
          'Stabilize the no-code backend workflow and document the architecture more clearly.'
        ],
        takeaway:
          'The assessment scope is already implemented well enough to show the idea, but it still reads like a strong prototype rather than a mature product because the chat experience and administration layers can go further.'
      }
    },
    {
      id: 4,
      name: 'EON - Version Control System',
      period: 'Apr 2025 - Sep 2025',
      startDate: '2025-04',
      endDate: '2025-09',
      description:
        'Built a CLI-driven version control prototype with local workspace initialization, file staging, snapshot sealing, S3 sync, and rewind support for sealed states.',
      techStack: ['Node.js', 'Git Concepts', 'CLI', 'JavaScript', 'AWS'],
      icon: <GitBranch className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-600',
      highlights: ['Project Bootstrapper', 'Local File Staging', 'Snapshot Sealing', 'S3 Upload/Download'],
      metrics: [
        { label: 'Paradigm', value: 'Snapshot-based VCS prototype' },
        { label: 'Interface', value: 'CLI' },
        { label: 'Implemented Flow', value: 'Init, stage, seal, sync, rewind' }
      ],
      domains: ['Systems'],
      codeUrl: 'https://github.com/NithinPeddapelly/eon',
      preview: 'eon',
      status: 'Open Source',
      progress: 68,
      details: {
        current: [
          'Creates a local .eonPaths workspace and a sealed snapshot store.',
          'Stages files into a sealing area, then snapshots them with a UUID seal.',
          'Uploads and downloads sealed content to and from S3.',
          'Supports a basic rewind by copying files from a selected seal back into the project root.'
        ],
        goals: [
          'Branch creation, switching, and merge tracking.',
          'Diffing, status, commit history, and safer restore flows.',
          'Conflict resolution, refs/tags, and remote collaboration.',
          'A more complete data model and a UI that feels closer to a real VCS.'
        ],
        takeaway:
          'Right now EON is a snapshot-based VCS prototype with around one-fifth of the intended product behavior in place. It proves the core idea, but it is still far from a full Git-like version control system.'
      }
    },
    {
      id: 5,
      name: 'Lyno - Video Communication Platform',
      period: 'Feb 2025 - Apr 2025',
      startDate: '2025-02',
      endDate: '2025-04',
      description:
        'Engineered a real-time video communication platform using WebRTC and Socket.IO with auth-gated routes, meeting keys, call history, and in-call media controls.',
      techStack: ['WebRTC', 'Socket.IO', 'React', 'Node.js', 'Real-Time Systems'],
      icon: <Video className="w-8 h-8" />,
      gradient: 'from-blue-500 to-teal-600',
      highlights: ['WebRTC Signaling', 'Real-Time Event Transport', 'Modular Full-Stack Architecture', 'Production Deployment'],
      metrics: [
        { label: 'Media Transport', value: 'WebRTC' },
        { label: 'Realtime Layer', value: 'Socket.IO' },
        { label: 'Architecture', value: 'Frontend + Backend' }
      ],
      domains: ['Real-Time', 'Full-Stack'],
      liveUrl: 'https://lyno-frontend.onrender.com/',
      codeUrl: 'https://github.com/NithinPeddapelly/Lyno',
      preview: 'lyno',
      status: 'Live',
      progress: 85,
      details: {
        current: [
          'Supports a join-by-key flow that routes users into meetings.',
          'Uses WebRTC for audio/video streams and Socket.IO for signaling and real-time events.',
          'Includes history tracking so users can revisit prior meetings.',
          'Adds core call controls like camera, microphone, screen share, chat, and meeting navigation.'
        ],
        goals: [
          'Fix remaining deployment and routing rough edges so the app feels production-safe.',
          'Improve authentication, state management, and UX polish across the meeting flow.',
          'Add stronger security and optional end-to-end encryption.',
          'Expand media quality features such as better noise handling and adaptive behavior.'
        ],
        takeaway:
          'Lyno already has the main ingredients of a real-time meeting product. The remaining work is mostly hardening: making it more reliable, more secure, and smoother to use at scale.'
      }
    }
  ];

  const visibleProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      if (activeFilter === 'All') {
        return true;
      }
      return project.domains.includes(activeFilter);
    });

    const preferredOrder = [
      'EON - Version Control System',
      'Lyno - Video Communication Platform',
      'The Baking Cottage Website',
      'Portfolio Website',
      'AI Chatbot Platform'
    ];

    const orderIndex = new Map(preferredOrder.map((name, index) => [name, index]));

    return filtered.sort((a, b) => {
      const aIndex = orderIndex.get(a.name) ?? Number.MAX_SAFE_INTEGER;
      const bIndex = orderIndex.get(b.name) ?? Number.MAX_SAFE_INTEGER;

      if (aIndex !== bIndex) {
        return aIndex - bIndex;
      }

      return b.endDate.localeCompare(a.endDate);
    });
  }, [activeFilter, projects]);

  const renderPreview = (project: Project) => {
    if (project.preview === 'bakingCottage') {
      return (
        <Carousel
          images={[bakingImg1, bakingImg2, bakingImg3, bakingImg4, bakingImg5, bakingImg6, bakingImg7, bakingImg8, bakingImg9, bakingImg10, bakingImg11, bakingImg12, bakingImg13, bakingImg14, bakingImg15]}
          altPrefix="The Baking Cottage Screenshot"
        />
      );
    }

    if (project.preview === 'eon') {
      return (
        <Carousel
          images={[eonImg1, eonImg2]}
          altPrefix="EON Screenshot"
        />
      );
    }

    if (project.preview === 'lyno') {
      return (
        <Carousel
          images={[lynoImg1, lynoImg2, lynoImg3, lynoImg4]}
          altPrefix="Lyno Screenshot"
        />
      );
    }

    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan-300">Project Snapshot</span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20">
            {project.status}
          </span>
        </div>
        <div>
          <p className="text-2xl font-bold leading-tight">{project.name}</p>
          <p className="mt-3 text-slate-300 text-sm">{project.period}</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <div key={tech} className="rounded-lg border border-white/20 bg-white/10 px-2 py-2 text-xs text-center font-medium">
              {tech}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-white">
  <div className="container mx-auto px-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
            A selected body of work spanning full-stack systems, real-time platforms, and modern product-focused frontend engineering
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {domainFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${
                  activeFilter === filter
                    ? 'border-slate-900 bg-slate-900 text-white shadow-[0_8px_20px_-10px_rgba(15,23,42,0.8)]'
                    : 'border-slate-300 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-md'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">Sorted by most recent completion date</p>
        </div>

  <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {visibleProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-2 border-slate-200 text-lg"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    {project.icon}
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                      {project.period}
                    </span>
                    <span className="px-3 py-1 bg-white/15 rounded-full text-sm font-medium backdrop-blur-sm">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              </div>

              {/* Carousel Screenshot */}
              <div className="h-[480px] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
                {renderPreview(project)}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 to-transparent pointer-events-none"></div>
              </div>

              {/* Project Content */}
              <div className="p-10">
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.details ? (
                  <details open className="mb-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                    <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900 focus:outline-none">
                      Project Deep Dive
                    </summary>

                    <div className="mt-5 space-y-5 text-slate-600">
                      <div>
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                            Estimated completion
                          </span>
                          <span className="text-sm font-bold text-slate-900">{project.progress ?? 0}%</span>
                        </div>
                        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 transition-all duration-700"
                            style={{ width: `${project.progress ?? 0}%` }}
                          />
                        </div>
                        <p className="mt-2 text-sm text-slate-500">
                          This is an estimate of how much of the intended VCS experience is implemented today.
                        </p>
                      </div>

                      <div>
                        <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                          What it can do now
                        </h5>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {project.details.current.map((item) => (
                            <li key={item} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                          What I am aiming for
                        </h5>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {project.details.goals.map((item) => (
                            <li key={item} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-cyan-200 bg-cyan-50 px-4 py-4 text-sm text-slate-700">
                        {project.details.takeaway}
                      </div>
                    </div>
                  </details>
                ) : null}

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Highlights:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Impact Signals:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                        <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">{metric.label}</p>
                        <p className="text-sm font-semibold text-slate-800 mt-1">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-1 items-center justify-center gap-2 rounded-xl border border-sky-500/30 bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-3.5 font-semibold text-white shadow-[0_12px_30px_-16px_rgba(2,132,199,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:from-sky-500 hover:to-blue-600 hover:shadow-[0_16px_34px_-14px_rgba(2,132,199,0.85)] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                    >
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      Live Demo
                    </a>
                  ) : (
                    <div className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-4 py-3.5 font-semibold text-slate-500">
                      <ExternalLink className="h-4 w-4" />
                      Run Locally
                    </div>
                  )}

                  {project.codeUrl ? (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 font-semibold text-white shadow-[0_10px_24px_-14px_rgba(15,23,42,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-800 hover:shadow-[0_14px_28px_-12px_rgba(15,23,42,0.95)] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
                    >
                      <Github className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      Source Code
                    </a>
                  ) : (
                    <div
                      title={project.name === 'The Baking Cottage Website' ? 'Repo is private - sold as part of the client engagement' : undefined}
                      className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-4 py-3.5 font-semibold text-slate-500"
                    >
                      <Github className="h-4 w-4" />
                      {project.name === 'The Baking Cottage Website' ? 'Client - Repo Private' : 'Code Private'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;