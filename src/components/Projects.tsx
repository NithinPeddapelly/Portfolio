import React from 'react';
import Carousel from './Carousel';
import eonImg1 from '../assets/E-01.png';
import eonImg2 from '../assets/E-02.png';
import lynoImg1 from '../assets/L-01.png';
import lynoImg2 from '../assets/L-02.png';
import lynoImg3 from '../assets/L-03.png';
import lynoImg4 from '../assets/L-4.png';
import { ExternalLink, Github, Server, Video, GitBranch, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "EON - Version Control System",
      description: "A Git-like version control system built from scratch with real-time commit tracking, branching, and AWS deployment capabilities. Features custom commands and distributed architecture.",
      techStack: ["Node.js", "AWS", "Git", "CLI", "JavaScript"],
      icon: <GitBranch className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
      features: ["Real-time Commits", "Custom Commands", "AWS Integration", "Branch Management"]
    },
    {
      id: 2,
      name: "Video Conferencing App",
      description: "Secure real-time video conferencing application built with WebRTC technology. Includes end-to-end encryption, screen sharing, and multi-participant support.",
      techStack: ["WebRTC", "React", "Socket.io", "Node.js", "Security"],
      icon: <Video className="w-8 h-8" />,
      gradient: "from-blue-500 to-teal-600",
      features: ["WebRTC Integration", "End-to-End Encryption", "Screen Sharing", "Real-time Chat"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
  <div className="container mx-auto px-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate my passion for building scalable, user-focused applications
          </p>
        </div>

  <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
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
              <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
                {index === 0 ? (
                  <Carousel
                    images={[eonImg1, eonImg2]}
                    altPrefix="EON Screenshot"
                  />
                ) : (
                  <Carousel
                    images={[lynoImg1, lynoImg2, lynoImg3, lynoImg4]}
                    altPrefix="Lyno Screenshot"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 to-transparent pointer-events-none"></div>
              </div>

              {/* Project Content */}
              <div className="p-10">
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {index === 0 ? (
                    <a
                      href="https://github.com/NithinPeddapelly/eon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      View Project
                    </a>
                  ) : (
                    <a
                      href="https://lyno-frontend.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      View Project
                    </a>
                  )}
                  {index === 0 ? (
                    <a
                      href="https://github.com/NithinPeddapelly/eon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      View Code
                    </a>
                  ) : (
                    <a
                      href="https://github.com/NithinPeddapelly/Lyno"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      View Code
                    </a>
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