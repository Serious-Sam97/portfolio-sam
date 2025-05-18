import React from 'react';

const Resume: React.FC = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-semibold mb-6">Currículo</h2>
      <ul className="space-y-4">
        <li>
          <strong>Thoughtworks</strong> – Senior Software Engineer (Backend Java)<br />
          <span className="text-sm text-gray-400">2023–presente</span>
        </li>
        <li>
          <strong>Cambridge (freelas)</strong> – Desenvolvimento de soluções customizadas<br />
          <span className="text-sm text-gray-400">2023–presente</span>
        </li>
      </ul>
    </section>
  );
};

export default Resume;