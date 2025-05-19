import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[85vh] px-4 text-center bg-gradient-to-b from-[#232526] via-[#3a3a4e] to-[#222C3C] relative">
      <img
        src="/avatar.png"
        alt="Avatar de Serious Sam"
        className="w-36 h-36 rounded-full border-4 border-cyan-400 shadow-xl mb-6 object-cover"
      />
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow mb-2">
        Samir / Serious Sam
      </h1>
      <h2 className="text-xl md:text-2xl text-cyan-200 mb-1 font-semibold">
        Senior Backend Developer
      </h2>
      <p className="max-w-xl text-lg text-gray-200 mb-5">
        Backend Java & Cloud | Soluções para empresas e freelas | Coding e games todos os dias.
      </p>
      <div className="flex gap-6 mt-4 justify-center">
        <a href="https://github.com/serioussam" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
          <img src="/github-mark-white.svg" alt="GitHub" className="w-8 h-8" />
        </a>
        <a href="https://linkedin.com/in/serioussam" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
          <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="mailto:samir@email.com" className="hover:scale-110 transition">
          <img src="/mail.svg" alt="Email" className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Home;
