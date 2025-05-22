import React, { useEffect, useState } from 'react';
import MatrixRainBackground from '../MatrixRainBackground';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [ aboutMe, setAboutMe ] = useState(false);

  const openResume = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer')
  }

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
        {
          aboutMe ? (
            <div className={`${isMobile ? 'w-lvw p-3' : 'w-100'} mb-8`}>
              <p onClick={() => setAboutMe(false)} className='text-lg pb-5 cursor-pointer underline'> Go Back </p>
              <p className='text-center'>Fullstack Developer and Software Architect with over 8 years of experience delivering robust and scalable systems for companies in Brazil and abroad. Solid background in both backend (Java, PHP) and modern frontend (React, Vue.js), working across monolithic and microservices architectures. Experienced in cloud and on-premises projects, always focused on code quality, security, and performance. Skilled at translating business needs into clear technical solutions, managing the full development lifecycle from design to deployment.Fullstack </p>
            </div>
          ) : (
            <div className='flex gap-8 justify-center mb-8'>
              <button onClick={() => setAboutMe(true)} className='bg-purple-900'>
                <p>About Me</p>
              </button>
              <Link to={'/projects'} className='bg-purple-900 button'>
                <p className='--color-green'>Personal Projects</p>
              </Link>
              <button onClick={() => openResume()} className='bg-purple-900'>
                <p>Resume/CV</p>
              </button>
            </div>
          )
        }
        <div className="max-w-xl bg-black/70 p-8 rounded-2xl shadow-lg border border-green-700/40">
          <div className="flex gap-8 justify-center mb-2">
            <a href="https://github.com/Serious-Sam97" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/samir-antoun-freitas-aniz/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              LinkedIn
            </a>
            <a href="mailto:samiraniz.jar@gmail.com" className="hover:scale-110 transition">
              Email
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
  );
};

export default Home;
