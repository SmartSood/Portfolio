import { useEffect, useRef } from 'react';
import './ParticleText.css';

interface ParticleTextProps {
  text?: string;
  duration?: number;
}

const ParticleText = ({ text = 'SMARTH SOOD', duration = 1500 }: ParticleTextProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let start = performance.now();
    let particles: Array<{ x: number; y: number; tx: number; ty: number; seed: number }> = [];

    const draw = (now: number) => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      if (canvas.width !== width * ratio || canvas.height !== height * ratio) {
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        context.setTransform(ratio, 0, 0, ratio, 0, 0);

        const offscreen = document.createElement('canvas');
        const offscreenContext = offscreen.getContext('2d');
        if (!offscreenContext) return;
        const fontSize = Math.min(112, Math.max(42, width * 0.14));
        offscreen.width = width;
        offscreen.height = height;
        offscreenContext.font = `800 ${fontSize}px Inter, sans-serif`;
        offscreenContext.textAlign = 'center';
        offscreenContext.textBaseline = 'middle';
        offscreenContext.fillStyle = '#fff';
        offscreenContext.fillText(text, width / 2, height / 2);
        const pixels = offscreenContext.getImageData(0, 0, width, height).data;
        particles = [];
        for (let y = 0; y < height; y += 4) {
          for (let x = 0; x < width; x += 4) {
            if (pixels[(y * width + x) * 4 + 3] > 80) {
              const seed = ((x * 17 + y * 31) % 101) / 101;
              particles.push({
                x: reducedMotion ? x : x + Math.cos(seed * 30) * 110,
                y: reducedMotion ? y : y + Math.sin(seed * 30) * 80,
                tx: x,
                ty: y,
                seed
              });
            }
          }
        }
        start = now;
      }

      const progress = reducedMotion ? 1 : Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        const x = particle.x + (particle.tx - particle.x) * eased;
        const y = particle.y + (particle.ty - particle.y) * eased;
        context.fillStyle = particle.seed > 0.55 ? '#7dd3a7' : '#72a9ff';
        context.globalAlpha = 0.45 + eased * 0.55;
        context.fillRect(x, y, 2.4, 2.4);
      });
      context.globalAlpha = 1;
      frame = window.requestAnimationFrame(draw);
    };

    frame = window.requestAnimationFrame(draw);
    return () => window.cancelAnimationFrame(frame);
  }, [duration, text]);

  return <canvas ref={canvasRef} className="particle-text" aria-label={text} role="img" />;
};

export default ParticleText;