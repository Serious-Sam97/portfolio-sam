import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-semibold mb-6">Contato</h2>
      <ul>
        <li>Email: samir@email.com</li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/serioussam"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/serioussam
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/serioussam"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/serioussam
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;