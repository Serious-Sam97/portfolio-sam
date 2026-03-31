import React from 'react';
import MatrixRainBackground from '../MatrixRainBackground';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="relative min-h-screen font-mono w-screen">
    <MatrixRainBackground />
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-8xl font-extrabold text-green-300">404</h1>
      <p className="text-green-200 text-xl">Page not found.</p>
      <Link
        to="/"
        aria-label="Back to home"
        className="mt-4 px-6 py-2 rounded-lg border border-green-500/50 text-green-300 hover:bg-green-900/30 hover:border-green-400 transition-all font-medium"
      >
        ← Back to Home
      </Link>
    </main>
  </div>
);

export default NotFound;
