import { useEffect, useRef } from 'react';

interface SplashCursorProps {
  color?: string;
}

const SplashCursor = ({ color = '#5eead4' }: SplashCursorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    const pointer = { x: -100, y: -100, px: -100, py: -100 };
    const trails: Array<{ x: number; y: number; radius: number; alpha: number }> = [];
    let frame = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const move = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      const distance = Math.hypot(pointer.x - pointer.px, pointer.y - pointer.py);
      if (distance > 2) {
        trails.push({ x: pointer.x, y: pointer.y, radius: Math.min(46, 12 + distance * 0.35), alpha: 0.42 });
        pointer.px = pointer.x;
        pointer.py = pointer.y;
      }
    };
    const render = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let index = trails.length - 1; index >= 0; index -= 1) {
        const trail = trails[index];
        trail.radius += 1.8;
        trail.alpha -= 0.018;
        if (trail.alpha <= 0) trails.splice(index, 1);
      }
      trails.forEach((trail) => {
        context.beginPath();
        context.arc(trail.x, trail.y, trail.radius, 0, Math.PI * 2);
        context.fillStyle = color;
        context.globalAlpha = trail.alpha;
        context.shadowBlur = 24;
        context.shadowColor = color;
        context.fill();
      });
      context.globalAlpha = 1;
      context.shadowBlur = 0;
      frame = window.requestAnimationFrame(render);
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    frame = window.requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
      window.cancelAnimationFrame(frame);
    };
  }, [color]);

  return <canvas ref={canvasRef} className="splash-cursor" aria-hidden="true" />;
};

export default SplashCursor;