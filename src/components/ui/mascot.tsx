'use client';

import React from 'react';

interface MascotDotFace2Props {
  size?: number; 
  className?: string;
}

export default function Mascot({ size = 40, className }: MascotDotFace2Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [angle, setAngle] = React.useState(0);
  const [isBlinking, setIsBlinking] = React.useState(false);

  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const box = ref.current?.getBoundingClientRect();
      if (!box) return;
      const cx = box.left + box.width / 2;
      const cy = box.top + box.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      setAngle(Math.atan2(dy, dx));
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  React.useEffect(() => {
    const blink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 100);
    };
    
    const randomBlink = () => {
      blink();
      const nextBlink = 2000 + Math.random() * 3000;
      return setTimeout(randomBlink, nextBlink);
    };
    
    const timeout = randomBlink();
    return () => clearTimeout(timeout);
  }, []);

  const pupilOffset = Math.max(2, size * 0.09);
  const pupilSize = Math.max(4, size * 0.12);
  const spacing = Math.max(8, size * 0.22);     
  const tx = Math.cos(angle) * pupilOffset;
  const ty = Math.sin(angle) * pupilOffset;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        width: 35,
        height: 35,
        borderRadius: size / 3,
       
        position: 'relative',
   
        overflow: 'visible', 
      }}
    >
     
      {/* eyes */}
      <div
        className="transition-transform duration-75"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: `translate(calc(-50% - ${spacing / 2}px), -50%) translate(${tx}px, ${ty}px) scaleY(${isBlinking ? 0.1 : 1})`,
          width: pupilSize,
          height: pupilSize,
          borderRadius: pupilSize / 2,
          background: 'var(--foreground)',
        }}
      />

      <div
        className="transition-transform duration-75"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: `translate(calc(-50% + ${spacing / 2}px), -50%) translate(${tx}px, ${ty}px) scaleY(${isBlinking ? 0.1 : 1})`,
          width: pupilSize,
          height: pupilSize,
          borderRadius: pupilSize / 2,
          background: 'var(--foreground)',
        }}
      />
    </div>
  );
}