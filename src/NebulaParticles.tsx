import React from 'react';

const particles = [
  // Center
  { size: 110, x: 0, y: 0, color: 'rgba(0,255,255,0.21)', blur: 11, anim: 'pulse1', z: 10 },
  { size: 88, x: 12, y: -18, color: 'rgba(180,0,255,0.18)', blur: 10, anim: 'pulse2', z: 9 },
  { size: 70, x: -15, y: 24, color: 'rgba(255,0,130,0.15)', blur: 8, anim: 'pulse3', z: 8 },
  { size: 58, x: 30, y: 24, color: 'rgba(255,255,255,0.13)', blur: 7, anim: 'pulse4', z: 8 },
  // Internal Ring
  { size: 96, x: 92, y: 4, color: 'rgba(60,255,255,0.14)', blur: 13, anim: 'cloud1', z: 5 },
  { size: 80, x: -88, y: -22, color: 'rgba(0,130,255,0.12)', blur: 14, anim: 'cloud2', z: 4 },
  { size: 70, x: 28, y: 94, color: 'rgba(170,0,255,0.13)', blur: 12, anim: 'cloud3', z: 4 },
  { size: 58, x: -35, y: 88, color: 'rgba(255,100,200,0.10)', blur: 10, anim: 'cloud4', z: 4 },
  // External ring
  { size: 130, x: 110, y: -64, color: 'rgba(0,255,180,0.08)', blur: 15, anim: 'halo1', z: 2 },
  { size: 120, x: -135, y: 35, color: 'rgba(0,220,255,0.11)', blur: 16, anim: 'halo2', z: 2 },
  { size: 100, x: 60, y: 130, color: 'rgba(200,0,255,0.08)', blur: 13, anim: 'halo3', z: 2 },
  { size: 80, x: -55, y: 128, color: 'rgba(255,255,255,0.07)', blur: 10, anim: 'halo4', z: 1 },
];

type NebulaWithBlendedImageProps = {
  imgSrc: string;
  imgAlt?: string;
  imgSize?: number;
};

const NebulaWithBlendedImage: React.FC<NebulaWithBlendedImageProps> = ({
  imgSrc,
  imgAlt = "Imagem central",
  imgSize = 140,
}) => (
  <div
    className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    style={{ overflow: 'hidden' }}
    aria-hidden="true"
  >
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: 'translate(-50%, -50%)',
        width: 440,
        height: 440,
        pointerEvents: 'none',
      }}
    >
      {/* Particles */}
      {particles.map((p, idx) => (
        <span
          key={idx}
          className="absolute"
          style={{
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: '50%',
            filter: `blur(${p.blur}px)`,
            zIndex: p.z,
            transform: `translate(-50%, -50%)`,
            animation: `${p.anim} ${10 + (idx % 6) * 1.2}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 20,
          borderRadius: '50%',
          width: imgSize + 36,
          height: imgSize + 36,
          pointerEvents: 'none',
          boxShadow:
            '0 0 38px 22px rgba(120,220,255,0.21), 0 0 92px 100px rgba(30,60,120,0.19)',
          overflow: 'visible',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 180,
            height: 180,
            borderRadius: '50%',
            objectFit: 'cover',
            maskImage: 'radial-gradient(circle, white 68%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle, white 68%, transparent 100%)',
            display: 'block',
            pointerEvents: 'none',
            zIndex: 20,
            animation: 'slowSpin 300s linear infinite',
          }}
          draggable={false}
        />
      </div>
    </div>
    {/*Stars in the backgrounnd */}
    {Array.from({ length: 38 }).map((_, i) => (
      <span
        key={`star${i}`}
        className="absolute bg-white rounded-full opacity-40"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${1.1 + Math.random() * 2.2}px`,
          height: `${1.1 + Math.random() * 2.2}px`,
          filter: 'blur(0.6px)',
          animation: `starTwinkle ${2.5 + Math.random() * 4.5}s ease-in-out infinite alternate`,
        }}
      />
    ))}
  </div>
);

export default NebulaWithBlendedImage;
