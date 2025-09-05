import React from 'react';
import { Trophy, Award, Star, AlignCenterVertical as Certificate } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Cisco Finalist",
      description: "Recognized for the ParkFair startup project and received an Award for Excellence.",
      color: "from-yellow-500 to-orange-600",
      year: "2023"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Esprit-Critique",
      description: "Runner-up in university-level critical thinking and problem-solving competition",
      color: "from-purple-500 to-pink-600",
      year: "2022"
    },
    {
      icon: <Certificate className="w-8 h-8" />,
      title: "ECET 2014 Rank",
      description: "Secured a competitive rank of 2014 in a state-level engineering entrance exam",
      color: "from-blue-500 to-cyan-600",
      year: "2021"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Full Stack Developer",
      description: "Completed comprehensive MERN stack certification program",
      color: "from-green-500 to-teal-600",
      year: "2024"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Milestones that reflect my commitment to continuous learning and excellence
          </p>
        </div>

  <div className="w-full flex justify-center">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{width: '900px', maxWidth: '100%'}}>
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br ${achievement.color} rounded-full transform translate-x-8 -translate-y-8`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`bg-gradient-to-r ${achievement.color} text-white p-4 rounded-xl mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>

                {/* Year Badge */}
                <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {achievement.year}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
  </div>

        {/* Additional Certifications */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Technical Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Java - Alpha (DSA with Java)  Apna College - 2024",
                "Machine Learning & Image Processing - Cisco ThingQbator -2022",
                "Mobile Application Development - Cisco ThingQbator -2022",
                "SQL (Basic & Intermediate) - HackerRank -2022",
                "Duolingo English Test - Score: 120 -2024"
              ].map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 transition-all duration-300 group cursor-default"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-slate-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;