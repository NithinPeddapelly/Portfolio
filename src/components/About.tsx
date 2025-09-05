import React from 'react';
import { BookOpen, Code, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const journey = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Started with Java",
      description: "My programming journey began with Java, where I learned the fundamentals of object-oriented programming and software development."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Self-taught MERN Stack",
      description: "I dove deep into modern web development, mastering MongoDB, Express, React, and Node.js through hands-on projects and continuous learning."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Exploring Data Science & AI",
      description: "Currently expanding into Data Science & AI, fascinated by the potential to create intelligent solutions that can make a real-world impact."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Building for Impact",
      description: "I focus on creating scalable, user-centric applications that solve real problems with clean, maintainable code."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              I'm a passionate software developer who believes in writing code that not only works, but tells a story. 
              My journey has been one of continuous learning, from mastering the fundamentals to exploring cutting-edge technologies.
            </p>
          </div>

          {/* Personal Story */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12 mb-12">
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="text-xl leading-relaxed mb-6">
                My programming adventure started with <strong className="text-blue-600">Java</strong>, where I fell in love with 
                the logic and structure of coding. But I knew there was more to explore beyond the classroom.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                So I embarked on a self-learning journey into the <strong className="text-teal-600">MERN stack</strong>, 
                building project after project, making mistakes, learning from them, and gradually crafting my skills 
                into something I'm truly proud of.
              </p>
              <p className="text-xl leading-relaxed">
                Now, I'm diving into <strong className="text-purple-600">Data Science</strong>, excited about the 
                possibilities of creating intelligent systems. Each day brings new challenges, and I wouldn't have it any other way.
              </p>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="grid md:grid-cols-2 gap-6">
            {journey.map((step, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">My Development Philosophy</h3>
            <p className="text-lg lg:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              "Great software isn't just about making things work. It's about crafting solutions that are elegant, 
              scalable, and meaningful. I believe in writing code that future-me (and my teammates) will thank me for."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;