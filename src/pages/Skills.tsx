import React from 'react';

const skills = [
  { name: 'Java', icon: '/java.svg', color: 'bg-[#f89820]' },
  { name: 'Spring Boot', icon: '/spring.svg', color: 'bg-[#6db33f]' },
  { name: 'React', icon: '/react.svg', color: 'bg-[#61dafb]' },
  { name: 'Tailwind', icon: '/tailwindcss.svg', color: 'bg-[#38bdf8]' },
  { name: 'Docker', icon: '/docker.svg', color: 'bg-[#2496ed]' },
  { name: 'AWS', icon: '/aws.svg', color: 'bg-[#ff9900]' },
];

const Skills: React.FC = () => (
  <section className="py-14 bg-[#202736] text-center">
    <h2 className="text-3xl font-bold text-cyan-300 mb-8">Skills & Tech</h2>
    <div className="flex flex-wrap justify-center gap-7">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className={`flex flex-col items-center p-5 rounded-xl shadow-md ${skill.color} bg-opacity-20 hover:scale-105 transition`}
        >
          <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
          <span className="font-semibold text-white">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
