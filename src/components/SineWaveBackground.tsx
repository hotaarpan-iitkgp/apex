import React, { useEffect, useRef } from 'react';

interface SineWaveBackgroundProps {
  className?: string;
}

export const SineWaveBackground: React.FC<SineWaveBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = canvas.width = canvas.offsetWidth * dpr;
      height = canvas.height = canvas.offsetHeight * dpr;
    };

    window.addEventListener('resize', handleResize);

    // Animation time tracker
    let t = 0;

    const render = () => {
      t += 0.008; // Smooth, gentle velocity

      ctx.clearRect(0, 0, width, height);

      const dpr = window.devicePixelRatio || 1;
      const centerY = height * 0.52; // Slightly below vertical center for perfect balance behind text

      // Check for dark mode to adjust waveform colors and opacities
      const isDarkMode = document.documentElement.classList.contains('dark');

      // 1. Engineering Grid Pattern (Millimeter Graph Paper feel)
      const gridSize = 32 * dpr;
      ctx.lineWidth = 0.6 * dpr;
      ctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.035)' : 'rgba(2, 54, 102, 0.045)';

      ctx.beginPath();
      // Vertical grid lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      // Horizontal grid lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Subtle major grid axis (horizontal center line)
      ctx.beginPath();
      ctx.strokeStyle = isDarkMode ? 'rgba(56, 189, 248, 0.08)' : 'rgba(2, 132, 199, 0.08)';
      ctx.lineWidth = 1 * dpr;
      ctx.setLineDash([4 * dpr, 4 * dpr]);
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();
      ctx.setLineDash([]); // reset dash

      // 2. Waveforms Configuration (Three-Phase & Characteristic Harmonics)
      // Colors match reference: crisp electrical cyan/blue, warm amber/copper, and subtle indigo
      const waves = [
        {
          // Phase A: Primary Blue/Cyan Wave (dominant like in the reference image)
          color: isDarkMode ? 'rgba(56, 189, 248, 0.55)' : 'rgba(2, 132, 199, 0.48)',
          lineWidth: 1.6 * dpr,
          amplitude: height * 0.16,
          wavelength: width * 0.22, // ~4.5 cycles across screen
          speed: 1.0,
          phaseOffset: 0,
          hasNode: true,
          nodeColor: isDarkMode ? '#38bdf8' : '#0284c7',
        },
        {
          // Phase B: Elegant Golden Amber / Bronze Wave (like the secondary brown/amber curve in ref)
          color: isDarkMode ? 'rgba(245, 158, 11, 0.40)' : 'rgba(180, 83, 9, 0.32)',
          lineWidth: 1.3 * dpr,
          amplitude: height * 0.09,
          wavelength: width * 0.42, // Longer, sweeping harmonic
          speed: 0.7,
          phaseOffset: (2 * Math.PI) / 3, // 120 deg shift
          hasNode: true,
          nodeColor: isDarkMode ? '#f59e0b' : '#b45309',
        },
        {
          // Phase C: Delicate Slate / Sky Blue 3rd Phase
          color: isDarkMode ? 'rgba(147, 197, 253, 0.30)' : 'rgba(96, 165, 250, 0.26)',
          lineWidth: 1.1 * dpr,
          amplitude: height * 0.12,
          wavelength: width * 0.28,
          speed: 1.2,
          phaseOffset: (4 * Math.PI) / 3, // 240 deg shift
          hasNode: false,
          nodeColor: '#60a5fa',
        },
        {
          // High-frequency subtle envelope (carrier ripple)
          color: isDarkMode ? 'rgba(56, 189, 248, 0.15)' : 'rgba(3, 105, 161, 0.12)',
          lineWidth: 0.8 * dpr,
          amplitude: height * 0.04,
          wavelength: width * 0.08,
          speed: 2.2,
          phaseOffset: Math.PI / 4,
          hasNode: false,
          nodeColor: '#38bdf8',
        }
      ];

      // Draw each sinusoidal wave
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.lineWidth;

        const k = (2 * Math.PI) / wave.wavelength;
        const currentPhase = t * wave.speed + wave.phaseOffset;

        let nodeX = 0;
        let nodeY = 0;
        const targetNodeCycle = 2.2; // place node around 40-50% screen width

        for (let x = 0; x <= width; x += 2 * dpr) {
          // Pure sinusoidal wave with subtle dampening at extreme margins
          const y = centerY + Math.sin(x * k - currentPhase) * wave.amplitude;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }

          // Compute node coordinate at specific phase position
          if (wave.hasNode && Math.abs(x - width * 0.44) < 3 * dpr) {
            nodeX = x;
            nodeY = y;
          }
        }
        ctx.stroke();

        // Draw small precision node circle if enabled (matching the dot in the IIT reference)
        if (wave.hasNode && nodeX > 0) {
          ctx.beginPath();
          ctx.fillStyle = wave.nodeColor;
          ctx.arc(nodeX, nodeY, 3.5 * dpr, 0, Math.PI * 2);
          ctx.fill();

          // Subtle halo ring around node
          ctx.beginPath();
          ctx.strokeStyle = wave.nodeColor;
          ctx.lineWidth = 1 * dpr;
          ctx.globalAlpha = 0.4;
          ctx.arc(nodeX, nodeY, 7 * dpr, 0, Math.PI * 2);
          ctx.stroke();
          ctx.globalAlpha = 1.0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default SineWaveBackground;
