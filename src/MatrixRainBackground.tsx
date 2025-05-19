import React, { useEffect, useRef } from 'react';

const MatrixRainBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fontSize = 18;
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンabcdefghijklmnopqrstuvwxyz0123456789';
    let columns: number[] = [];
    let animationFrameId: number;
    let lastTime = 0;
    const frameDelay = 60;

    function resizeCanvas(canvas: HTMLCanvasElement) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = [];
      for (let x = 0; x < canvas.width / fontSize; x++) {
        columns[x] = Math.random() * canvas.height / fontSize;
      }
    }

    function draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;
      ctx.fillStyle = '#19FF19';
      for (let i = 0; i < columns.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, columns[i] * fontSize);

        if (Math.random() > 0.975) {
          columns[i] = 0;
        }

        if (Math.random() > 0.2) {
          columns[i]++;
        }
      }
    }

    function animate(now: number) {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx && now - lastTime > frameDelay) {
          draw(canvas, ctx);
          lastTime = now;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        resizeCanvas(canvas);
        window.addEventListener('resize', () => resizeCanvas(canvas));
        animate(performance.now());
      }
    }

    return () => {
      window.removeEventListener('resize', () => {});
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.19,
      }}
      aria-hidden="true"
    />
  );
};

export default MatrixRainBackground;
