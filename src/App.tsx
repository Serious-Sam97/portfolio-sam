import React from 'react';
import MatrixRainBackground from './MatrixRainBackground';

const App: React.FC = () => (
  <div className="relative min-h-screen font-mono w-screen">
    <MatrixRainBackground />
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl md:text-7xl font-extrabold text-green-300 drop-shadow-glow mb-4 text-center">
        Samir Aniz
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-green-200 mb-8 text-center">
        Senior Software Engineer
      </h2>
      <div className="max-w-xl bg-black/70 p-8 rounded-2xl shadow-lg border border-green-700/40">
        <p className="text-lg text-green-100 text-center mb-2">
          São Paulo • <span className="font-bold text-green-400">PHP, Java, Javacript</span>
        </p>
        <p className="text-green-400 text-center text-md">
          <span className="text-green-500">Contato:</span> serioussam@email.com
        </p>
      </div>
    </main>
  </div>
);

export default App;
