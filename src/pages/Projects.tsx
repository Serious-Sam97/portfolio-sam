import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-semibold mb-6">Projetos</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold">Sistema de Backlog de Jogos</h3>
          <p>Organizador pessoal de jogos com backend em Java e frontend React.</p>
          <p className="text-sm text-gray-400">Stack: Java 21, Spring Boot, React, Tailwind</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;