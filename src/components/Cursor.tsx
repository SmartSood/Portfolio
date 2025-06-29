import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const requestRef = useRef<number>();

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const updateMousePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animatePosition = () => {
      setMousePosition({ x: mouseX, y: mouseY });
      requestRef.current = requestAnimationFrame(animatePosition);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseEnterWindow = () => setIsVisible(true);
    const handleMouseLeaveWindow = () => setIsVisible(false);

    // Hide native cursor completely
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    // Add event listeners for interactive elements
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [tabindex], [onclick], .cursor-pointer'
      );
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
        // Force cursor none on these elements
        (el as HTMLElement).style.cursor = 'none';
      });

      return interactiveElements;
    };

    let interactiveElements = updateInteractiveElements();

    // Re-scan for new interactive elements periodically
    const rescanInterval = setInterval(() => {
      // Remove old listeners
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      // Add new listeners
      interactiveElements = updateInteractiveElements();
    }, 1000);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', handleMouseEnterWindow);
    window.addEventListener('mouseleave', handleMouseLeaveWindow);
    
    // Start animation loop
    requestRef.current = requestAnimationFrame(animatePosition);

    // Force hide cursor on all elements
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
      html, body {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('mouseleave', handleMouseLeaveWindow);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      clearInterval(rescanInterval);
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      
      // Clean up style
      document.head.removeChild(style);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isClicking ? 0.6 : isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.5,
        }}
        style={{
          willChange: 'transform',
        }}
      />
      
      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-400 rounded-full pointer-events-none z-[9998] opacity-70"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isClicking ? 0.6 : isHovering ? 2.2 : 1,
          borderColor: isHovering ? '#8b5cf6' : '#3b82f6',
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
        style={{
          willChange: 'transform',
        }}
      />

      {/* Outer glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full pointer-events-none z-[9997] blur-sm"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.9 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 25,
          mass: 1,
        }}
        style={{
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default Cursor;