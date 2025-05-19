import React from 'react';
import NebulaBackground from '../NebulaParticles';

const projects = [
  {
    title: "Backlog de Jogos",
    desc: "Organizador pessoal de jogos (backend Java, frontend React).",
    image: "/backlog.png",
    stack: ['Java', 'Spring Boot', 'React', 'Tailwind'],
    repo: "https://github.com/serioussam/backlog",
    live: "https://backlog-serioussam.vercel.app/"
  },
  {
    title: "Sistema Freelancer",
    desc: "Plataforma para entrega de projetos a clientes.",
    image: "/freelancer.png",
    stack: ['Node', 'Next.js', 'Tailwind'],
    repo: "https://github.com/serioussam/freelancer",
    live: "https://freelancer-serioussam.vercel.app/"
  },
];

const Projects: React.FC = () => (
  <div className="pb-96 relative min-h-screen">
    <NebulaBackground imgSrc='/nebulosa.png' imgSize={150} />
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-screen h-screen">
      <div className='bg-gradient-to-b from-[#1e2537]/50 to-[#21242b]/50 p-10 rounded-lg'>
        <h2 className="text-3xl font-bold text-blue-200 mb-10 text-center">Projetos em Destaque</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {projects.map((proj) => (
            <div key={proj.title} className="rounded-2xl shadow-xl bg-white/10 border border-cyan-400/20 flex flex-col items-center hover:scale-105 transition p-6">
              <img src={proj.image} alt={proj.title} className="rounded-xl w-full h-44 object-cover mb-5 border-2 border-white/10 shadow" />
              <h3 className="text-2xl font-semibold text-cyan-300 mb-2">{proj.title}</h3>
              <p className="text-gray-200 mb-4">{proj.desc}</p>
              <div className="flex gap-3 mb-4 flex-wrap justify-center">
                {proj.stack.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-cyan-800 text-cyan-100 text-xs font-bold shadow">{s}</span>
                ))}
              </div>
              <div className="flex gap-5">
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-600 transition">Live</a>
                <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-gray-900 text-cyan-300 border border-cyan-500 rounded-full font-bold hover:bg-cyan-900 transition">Code</a>
              </div>
            </div>
          ))}
        </div>    
      </div>
    </div>
  </div>
);

export default Projects;
