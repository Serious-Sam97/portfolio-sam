import React, { useEffect, useState } from 'react';
import MatrixRainBackground from '../MatrixRainBackground';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <div className={`relative min-h-screen font-mono w-screen ${isMobile ? 'px-10' : ''}`}>
      <MatrixRainBackground />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl md:text-7xl font-extrabold text-green-300 drop-shadow-glow mb-4 text-center">
          Samir Aniz
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-green-200 mb-8 text-center">
          Senior Software Engineer
        </h2>
        <div className='flex gap-8 justify-center mb-8'>
          <button className='bg-purple-900'>
            <p>About Me</p>
          </button>
          <Link to={'/projects'} className='bg-purple-900 button'>
            <p className='--color-green'>Personal Projects</p>
          </Link>
          <button className='bg-purple-900'>
            <p>Resume</p>
          </button>
        </div>
        <div className="max-w-xl bg-black/70 p-8 rounded-2xl shadow-lg border border-green-700/40">
          <div className="flex gap-8 justify-center mb-2">
            <a href="https://github.com/Serious-Sam97" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <img src="/github-mark-white.svg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/samir-antoun-freitas-aniz/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <img src="/linkedin.svg" alt="LinkedIn"/>
            </a>
            <a href="mailto:samiraniz.jar@gmail.com" className="hover:scale-110 transition">
              <img src="/mail.svg" alt="Email"/>
            </a>
          </div>
          <p className="text-lg text-green-100 text-center mb-2">
            São Paulo • <span className="font-bold text-green-400">PHP, Java, Javacript</span>
          </p>
          <p className="text-green-400 text-center text-md">
            <span className="text-green-500">Contato:</span> samiraniz.jar@gmail.com
          </p>
        </div>
      </main>
    </div>
    // <section className="flex flex-col items-center justify-center min-h-[85vh] px-4 text-center bg-gradient-to-b from-[#232526] via-[#3a3a4e] to-[#222C3C] relative">
    //   <img
    //     src="/avatar.png"
    //     alt="Avatar de Serious Sam"
    //     className="w-36 h-36 rounded-full border-4 border-cyan-400 shadow-xl mb-6 object-cover"
    //   />
    //   <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow mb-2">
    //     Samir / Serious Sam
    //   </h1>
    //   <h2 className="text-xl md:text-2xl text-cyan-200 mb-1 font-semibold">
    //     Senior Backend Developer
    //   </h2>
    //   <p className="max-w-xl text-lg text-gray-200 mb-5">
    //     Backend Java & Cloud | Soluções para empresas e freelas | Coding e games todos os dias.
    //   </p>
      // <div className="flex gap-6 mt-4 justify-center">
      //   <a href="https://github.com/serioussam" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
      //     <img src="/github-mark-white.svg" alt="GitHub" className="w-8 h-8" />
      //   </a>
      //   <a href="https://linkedin.com/in/serioussam" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
      //     <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
      //   </a>
      //   <a href="mailto:samir@email.com" className="hover:scale-110 transition">
      //     <img src="/mail.svg" alt="Email" className="w-8 h-8" />
      //   </a>
      // </div>
    // </section>
  );
};

export default Home;
