import React from 'react';
import { Code2, Globe, Database, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Java","JavaScript","Python","c"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React", "Node.js", "Express", "HTML/CSS", "REST APIs"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "GraphQL"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Cloud & Deployment",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Git","AWS", "Docker", "CI/CD"],
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} text-white p-4 rounded-xl mb-6 flex items-center gap-3 group-hover:scale-105 transition-transform duration-300`}>
                {category.icon}
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="font-medium text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Additional Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "WebRTC", "Socket.io", "Tailwind CSS", "Material-UI", "Jest", "Webpack", 
                "VS Code", "Postman", "Figma", "Data Science", "Data Structures", "Algorithms"
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-teal-100 hover:to-blue-100 rounded-full text-slate-700 font-medium transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;