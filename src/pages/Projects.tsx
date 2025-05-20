import React from 'react';
import NebulaBackground from '../NebulaParticles';
import { Link } from 'react-router-dom';

const projects = [
  {
  title: "VortexOS",
  desc: "A simulated operating system inspired by Windows 98, featuring movable windows, process management, a functional task manager, file explorer, notepad, and a game progress tracker. All integrated in an interactive web environment.",
  image: "/vortexos.png",
  stack: ['Java', 'Spring Boot', 'React', 'Tailwind', 'Postgres'],
  repo: "https://github.com/Serious-Sam97/vortexos",
  secondRepo: 'https://github.com/Serious-Sam97/vortexos-frontend',
  live: "https://vortexos-seven.vercel.app/"
  },
  {
  title: "RustyNES",
  desc: "RustyNES is a NES (Nintendo Entertainment System) emulator written in Rust, designed to emulate the classic 8-bit gaming experience. This project aims to accurately recreate the behavior of the NES’s 6502 CPU, PPU (Picture Processing Unit), and memory architecture, making it a great learning resource for low-level programming, emulation techniques, and Rust development.",
  image: "/nes.png",
  stack: ['Rust'],
  repo: "https://github.com/Serious-Sam97/rusty_nes",
  live: ""
  },
  {
  title: "Portifolio Sam",
  desc: "This portifolio :)",
  image: "/portifolio.png",
  stack: ['Javascript', 'React.js', 'Tailwind'],
  repo: "https://github.com/Serious-Sam97/portfolio-sam",
  live: "https://portfolio-sam-97.vercel.app/"
  },
  {
  title: "ROMs Management Scripts",
  desc: "PowerShell scripts to efficiently filter and organize large ROM sets, removing duplicates and unwanted regions. Designed to streamline curation of massive game collections.",
  image: "",
  stack: ['Powershell'],
  repo: "https://github.com/Serious-Sam97/roms-managment-scripts",
  live: ""
  },
];

const Projects: React.FC = () => {
  return (
    <div className="project-padding relative min-h-screen">
      <NebulaBackground imgSrc='/nebulosa.png' imgSize={150} />
      <div className={`relative z-10 flex flex-col items-center ${projects.length <= 2 ? 'justify-center' : 'justify-start pt-10'} min-h-screen w-screen h-screen`}>
        <div className='bg-gradient-to-b from-[#1e2537]/50 to-[#21242b]/50 p-10 rounded-lg'>
          <div className='flex justify-between'>
            <Link to={'/'}>
              <p className="text-sm font-bold text-blue-200 mb-10 text-center cursor-pointer">Back</p>
            </Link>
            <h2 className="text-3xl font-bold text-blue-200 mb-10 text-center">Projects</h2>
            <h2 className="text-3xl font-bold text-blue-200 mb-10 text-center"></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {projects.map((proj) => (
              <div key={proj.title} className="rounded-2xl shadow-xl bg-white/10 border border-cyan-400/20 flex flex-col items-center justify-between hover:scale-105 transition p-6">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className={`rounded-xl w-full h-44 object-fill mb-5 border-2 border-white/10 shadow ${proj.image ? 'transition-transform duration-300 hover:scale-160' : ''}`} 
                />
                <h3 className="text-2xl font-semibold text-cyan-300 mb-2 text-center">{proj.title}</h3>
                <p className="text-gray-200 mb-4 text-center">{proj.desc}</p>
                <div className="flex gap-3 mb-4 flex-wrap justify-center">
                  {proj.stack.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-cyan-800 text-cyan-100 text-xs font-bold shadow">{s}</span>
                  ))}
                </div>
                <div className="flex gap-5">
                  {
                    proj.live ?
                    (<a href={proj.live} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-600 transition">Live</a>)
                    : ''
                  }
                  {
                    proj.secondRepo ? (
                      <div className='py-2'>
                        <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="px-5 mr-3 py-2 bg-gray-900 text-cyan-300 border border-cyan-500 rounded-full font-bold hover:bg-cyan-900 transition">Backend</a>
                        <a href={proj.secondRepo} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-gray-900 text-cyan-300 border border-cyan-500 rounded-full font-bold hover:bg-cyan-900 transition">Frontend</a>
                      </div>
                    ) : (
                      <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-gray-900 text-cyan-300 border border-cyan-500 rounded-full font-bold hover:bg-cyan-900 transition">Code</a>
                    )
                  }
                </div>
              </div>
            ))}
          </div>    
        </div>
      </div>
    </div>
  )
};

export default Projects;
