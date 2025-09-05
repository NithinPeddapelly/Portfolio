import React from 'react';
import profileImg from '../assets/profile.jpg';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 transform rotate-12 scale-150"></div>
      </div>
      
  <div className="container mx-auto px-10 z-10">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left text-[1.25rem] lg:text-[2.5rem]">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Nithin</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-slate-300 mb-10 leading-relaxed">
                I build scalable, elegant solutions with curiosity and precision
              </p>
              <div className="flex gap-6 justify-center lg:justify-start mb-10">
                <a 
                  href="https://github.com/NithinPeddapelly" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800/50 hover:bg-teal-600 rounded-full transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-6 h-6 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/nithinpeddapelly/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800/50 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-white" />
                </a>
              </div>
              <button 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-5 px-12 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 transform hover:-translate-y-1 text-xl"
              >
                Explore My Work
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[26rem] h-[26rem] bg-gradient-to-br from-teal-400 to-blue-500 rounded-full p-3 animate-pulse">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-500/20 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;