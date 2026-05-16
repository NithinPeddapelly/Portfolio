import React from 'react';
import { BookOpen, Code, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const journey = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Engineering Fundamentals",
      description: "Built strong foundations in Java and object-oriented design, with a focus on writing clean, testable, and maintainable code."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Product Development",
      description: "Expanded into modern JavaScript and TypeScript ecosystems to build complete user-facing products from frontend experience to backend delivery."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Real-Time and Systems Thinking",
      description: "Delivered projects in real-time communication and developer tooling, deepening expertise in architecture, performance, and reliability."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Outcome-Driven Engineering",
      description: "I prioritize business impact and user value by combining technical rigor with practical product execution and iteration speed."
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
              MSc Computing student at Edinburgh Napier University (2027 graduate) with hands-on experience building production-grade systems in Python, JavaScript, and Java - passionate about the intersection of AI, program analysis, and security tooling.
            </p>
          </div>

          {/* Personal Story */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12 mb-12">
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="text-xl leading-relaxed mb-6">
                My programming adventure started with <strong className="text-blue-600">Java</strong>, where I fell in love with the logic and structure of coding. But I knew there was more to explore beyond the classroom.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                So I embarked on a self-learning journey into the <strong className="text-teal-600">MERN stack</strong>, building project after project, making mistakes, learning from them, and gradually crafting my skills into something I'm truly proud of.
              </p>
              <p className="text-xl leading-relaxed">
                Now, I'm diving into <strong className="text-purple-600">Data Science</strong>, excited about the possibilities of creating intelligent systems. Each day brings new challenges, and I wouldn't have it any other way.
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
              "I treat software as a long-term asset: understand the system deeply, solve the right problem, and ship code that teams and tools can confidently reason about."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;