import React, { useEffect, useState } from 'react';
import MatrixRainBackground from '../MatrixRainBackground';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [aboutMe, setAboutMe] = useState(false);

  const openResume = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
  };

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

        {aboutMe ? (
          <div className={`${isMobile ? 'w-full p-3' : 'w-[560px]'} mb-8`}>
            <button
              onClick={() => setAboutMe(false)}
              aria-label="Close about me"
              className="text-lg pb-5 cursor-pointer underline text-green-300 hover:text-green-100 transition-colors"
            >
              ← Go Back
            </button>
            <p className="text-green-100 text-center leading-relaxed mb-3">
              Fullstack Developer and Software Architect with 8+ years of experience delivering robust, scalable systems for companies in Brazil and abroad.
            </p>
            <p className="text-green-200/70 text-center leading-relaxed text-sm">
              Solid background in backend (Java, PHP) and modern frontend (React, Vue.js), across monolithic and microservices architectures. Experienced in cloud and on-premises environments, always focused on code quality, security, and performance.
            </p>
          </div>
        ) : (
          <div className="flex gap-4 justify-center mb-8 flex-wrap">
            <button
              onClick={() => setAboutMe(true)}
              aria-label="Read about me"
              className="px-6 py-2 rounded-lg border border-green-500/50 text-green-300 hover:bg-green-900/30 hover:border-green-400 transition-all font-medium"
            >
              About Me
            </button>
            <Link
              to="/projects"
              aria-label="View personal projects"
              className="px-6 py-2 rounded-lg border border-green-500/50 text-green-300 hover:bg-green-900/30 hover:border-green-400 transition-all font-medium"
            >
              Personal Projects
            </Link>
            <button
              onClick={openResume}
              aria-label="Open resume PDF"
              className="px-6 py-2 rounded-lg border border-green-500/50 text-green-300 hover:bg-green-900/30 hover:border-green-400 transition-all font-medium"
            >
              Resume / CV
            </button>
          </div>
        )}

        <div className="max-w-xl bg-black/70 p-8 rounded-2xl shadow-lg border border-green-700/40">
          <div className="flex gap-8 justify-center mb-4">
            <a
              href="https://github.com/Serious-Sam97"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-green-300 hover:text-green-100 hover:scale-110 transition-all"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samir-antoun-freitas-aniz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-green-300 hover:text-green-100 hover:scale-110 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="mailto:samiraniz.jar@gmail.com"
              aria-label="Send email"
              className="text-green-300 hover:text-green-100 hover:scale-110 transition-all"
            >
              Email
            </a>
          </div>
          <p className="text-lg text-green-100 text-center mb-2">
            São Paulo • <span className="font-bold text-green-400">PHP, Java, Javascript</span>
          </p>
          <p className="text-green-400 text-center text-md">
            <span className="text-green-500">Contact:</span> samiraniz.jar@gmail.com
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
