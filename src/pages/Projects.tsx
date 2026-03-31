import React, { useState, useEffect } from 'react';
import NebulaBackground from '../NebulaParticles';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "VortexOS",
    wip: false,
    desc: "A simulated operating system inspired by Windows 98, featuring movable windows, process management, a functional task manager, file explorer, notepad, and a game progress tracker. All integrated in an interactive web environment.",
    image: "/vortexos.png",
    stack: ['Java', 'Spring Boot', 'React', 'Tailwind', 'Postgres'],
    repo: "https://github.com/Serious-Sam97/vortexos",
    secondRepo: 'https://github.com/Serious-Sam97/vortexos-frontend',
    live: "https://vortexos-seven.vercel.app/"
  },
  {
    title: "Yondra",
    wip: true,
    desc: "A modern, lightweight project management platform inspired by agile workflows. Offers a fast and intuitive experience for teams managing tasks, sprints, and boards. Designed for clarity, speed, and control — without the bloat.",
    image: "/yondra.jpg",
    stack: ['Laravel 12', 'React', 'Next.js'],
    repo: "https://github.com/Serious-Sam97/yondra",
    secondRepo: 'https://github.com/Serious-Sam97/yondra-frontend',
    live: "https://yondra-thunder.vercel.app/dashboard"
  },
  {
    title: "Retro Artisan",
    wip: false,
    desc: "A scraper that automatically fetches box art for your game ROMs by scanning your roms folder and matching each title against online databases.",
    image: "/retroartisan.jpg",
    stack: ['Swift'],
    repo: "https://github.com/Serious-Sam97/retro-artisan",
    live: ""
  },
  {
    title: "RustyNES",
    wip: false,
    desc: "A NES emulator written in Rust that accurately recreates the 6502 CPU, PPU, and memory architecture of the original hardware. A great learning resource for low-level programming and emulation techniques.",
    image: "/nes.png",
    stack: ['Rust'],
    repo: "https://github.com/Serious-Sam97/rusty_nes",
    live: ""
  },
  {
    title: "Peek Cam",
    wip: false,
    desc: "Uses OpenCV to detect and recognize faces via your webcam.\n\n• main.py — Real-time face detection\n• register_face.py — Captures and stores faces for recognition training",
    image: "/faces.png",
    stack: ['Python', 'OpenCV'],
    repo: "https://github.com/Serious-Sam97/peek-cam",
    live: ""
  },
  {
    title: "Portfolio Sam",
    wip: false,
    desc: "This portfolio :)",
    image: "/portifolio.png",
    stack: ['Javascript', 'React', 'Tailwind'],
    repo: "https://github.com/Serious-Sam97/portfolio-sam",
    live: "https://portfolio-sam-97.vercel.app/"
  },
  {
    title: "ROMs Management Scripts",
    wip: false,
    desc: "PowerShell scripts to efficiently filter and organize large ROM sets, removing duplicates and unwanted regions. Designed to streamline curation of massive game collections.",
    image: "",
    stack: ['Powershell'],
    repo: "https://github.com/Serious-Sam97/roms-managment-scripts",
    live: ""
  },
];

const DESC_LIMIT = 110;

type SortOption = 'all' | 'live' | 'wip_first';

interface Project {
  title: string;
  wip: boolean;
  desc: string;
  image: string;
  stack: string[];
  repo: string;
  secondRepo?: string;
  live: string;
}

interface ProjectCardProps {
  proj: Project;
  index: number;
  visible: boolean;
  expanded: boolean;
  onToggleExpand: () => void;
  onFilterByStack: (stack: string) => void;
  isLast: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ proj, index, visible, expanded, onToggleExpand, onFilterByStack, isLast }) => {
  const needsTruncate = proj.desc.length > DESC_LIMIT;
  const displayDesc = needsTruncate && !expanded
    ? proj.desc.slice(0, DESC_LIMIT).trimEnd() + '…'
    : proj.desc;

  return (
    <div
      className={`rounded-2xl shadow-xl bg-white/10 border border-cyan-400/20 flex flex-col hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.15)] transition-all duration-300 ${isLast ? 'md:col-span-2 md:max-w-xl md:mx-auto md:w-full' : ''}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.4s ease ${index * 80}ms, transform 0.4s ease ${index * 80}ms, box-shadow 0.3s, scale 0.3s`,
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-2xl h-52 shrink-0">
        {proj.image ? (
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-cyan-900/40 to-blue-900/30 flex items-center justify-center">
            <span className="text-cyan-500/30 text-7xl font-extrabold select-none">{proj.title[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {proj.wip && (
          <span className="absolute top-3 right-3 px-2.5 py-1 bg-amber-500/90 text-black text-xs font-bold rounded-full shadow">
            Work in Progress
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">{proj.title}</h3>

        <div className="mb-4 flex-1">
          <p style={{ whiteSpace: 'pre-line' }} className="text-gray-300 text-sm leading-relaxed">
            {displayDesc}
          </p>
          {needsTruncate && (
            <button
              onClick={onToggleExpand}
              aria-label={expanded ? `Show less for ${proj.title}` : `Read more about ${proj.title}`}
              className="text-cyan-400 text-xs mt-1 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              {expanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>

        {/* Stack badges */}
        <div className="flex gap-2 flex-wrap mb-5">
          {proj.stack.map((s) => (
            <button
              key={s}
              onClick={() => onFilterByStack(s)}
              aria-label={`Filter by ${s}`}
              className="px-3 py-1 rounded-full bg-cyan-900/50 border border-cyan-700/40 text-cyan-200 text-xs font-bold hover:bg-cyan-700/50 hover:border-cyan-400 transition-colors cursor-pointer"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {proj.live && (
            <a
              href={proj.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${proj.title} live`}
              className="flex-1 text-center px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-full transition-colors text-sm"
            >
              Live
            </a>
          )}
          {proj.secondRepo ? (
            <>
              <a
                href={proj.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${proj.title} backend repository`}
                className="flex-1 text-center px-4 py-2 bg-gray-900 border border-cyan-500 text-cyan-300 hover:bg-cyan-900/40 font-bold rounded-full transition-colors text-sm"
              >
                Backend
              </a>
              <a
                href={proj.secondRepo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${proj.title} frontend repository`}
                className="flex-1 text-center px-4 py-2 bg-gray-900 border border-cyan-500 text-cyan-300 hover:bg-cyan-900/40 font-bold rounded-full transition-colors text-sm"
              >
                Frontend
              </a>
            </>
          ) : (
            <a
              href={proj.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${proj.title} source code`}
              className="flex-1 text-center px-4 py-2 bg-gray-900 border border-cyan-500 text-cyan-300 hover:bg-cyan-900/40 font-bold rounded-full transition-colors text-sm"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'live', label: 'Has Live' },
  { value: 'wip_first', label: 'WIP First' },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('all');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const allStacks = [...new Set(projects.flatMap((p) => p.stack))].sort();

  const stackCount = (stack: string) => projects.filter((p) => p.stack.includes(stack)).length;

  let filteredProjects = activeFilter
    ? projects.filter((p) => p.stack.includes(activeFilter))
    : [...projects];

  if (sortBy === 'live') filteredProjects = filteredProjects.filter((p) => p.live);
  if (sortBy === 'wip_first') filteredProjects = [...filteredProjects].sort((a, b) => (b.wip ? 1 : 0) - (a.wip ? 1 : 0));

  const toggleExpand = (title: string) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });
  };

  const handleFilterByStack = (stack: string) => {
    setActiveFilter((prev) => (prev === stack ? null : stack));
  };

  return (
    <div className="project-padding relative min-h-screen">
      <NebulaBackground imgSrc='/nebulosa.png' imgSize={150} />
      <div className="relative z-10 flex flex-col items-center justify-start pt-10 min-h-screen w-screen">
        <div className="bg-gradient-to-b from-[#1e2537]/50 to-[#21242b]/50 p-10 rounded-lg w-full max-w-5xl mx-auto">

          {/* Header */}
          <div className="relative flex items-center justify-center mb-8">
            <Link
              to="/"
              aria-label="Back to home"
              className="absolute left-0 text-sm font-bold text-blue-200 underline hover:text-blue-100 transition-colors"
            >
              ← Back
            </Link>
            <h2 className="text-3xl font-bold text-blue-200">Projects</h2>
          </div>

          {/* Sort options */}
          <div className="flex gap-2 justify-center mb-4">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSortBy(opt.value)}
                aria-label={`Sort: ${opt.label}`}
                aria-pressed={sortBy === opt.value}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                  sortBy === opt.value
                    ? 'bg-blue-600 border-blue-400 text-white'
                    : 'bg-transparent border-blue-700/40 text-blue-300 hover:border-blue-400 hover:text-blue-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Stack filter */}
          <div className="flex gap-2 flex-wrap justify-center mb-8">
            {allStacks.map((stack) => (
              <button
                key={stack}
                onClick={() => handleFilterByStack(stack)}
                aria-label={`Filter by ${stack}`}
                aria-pressed={activeFilter === stack}
                className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  activeFilter === stack
                    ? 'bg-cyan-500 border-cyan-400 text-white shadow-[0_0_10px_rgba(34,211,238,0.4)]'
                    : 'bg-transparent border-cyan-700/50 text-cyan-400 hover:border-cyan-400 hover:text-cyan-300'
                }`}
              >
                {stack} ({stackCount(stack)})
              </button>
            ))}
            {activeFilter && (
              <button
                onClick={() => setActiveFilter(null)}
                aria-label="Clear stack filter"
                className="px-3 py-1 rounded-full text-xs font-bold border border-red-500/50 text-red-400 hover:border-red-400 transition-all cursor-pointer"
              >
                Clear ✕
              </button>
            )}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((proj, index) => {
              const isLast = filteredProjects.length % 2 !== 0 && index === filteredProjects.length - 1;
              return (
                <ProjectCard
                  key={proj.title}
                  proj={proj}
                  index={index}
                  visible={visible}
                  expanded={expandedCards.has(proj.title)}
                  onToggleExpand={() => toggleExpand(proj.title)}
                  onFilterByStack={handleFilterByStack}
                  isLast={isLast}
                />
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-400 py-16">
              No projects found
              {activeFilter && <> for <span className="text-cyan-300">"{activeFilter}"</span></>}
              {sortBy === 'live' && <span className="text-cyan-300"> with a live demo</span>}
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
