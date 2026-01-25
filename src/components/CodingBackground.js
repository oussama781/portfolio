import { useEffect, useRef } from 'react';

export default function CodingBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Code snippets to display - Professional software engineering code
    const codeSnippets = [
      'const engineer = new SoftwareEngineer();',
      'function buildPortfolio() { return <App />; }',
      '@SpringBootApplication public class Portfolio {}',
      'async def deploy(): return {"status": "live"}',
      'interface Developer { skills: string[]; }',
      'docker-compose up -d',
      'npm run build && npm run deploy',
      'git push origin main',
      'const portfolio = { name: "Engineer" };',
      'SELECT * FROM projects WHERE status = "live"',
    ];

    // Particles for code lines
    const particles = [];
    const particleCount = 25;

    class CodeParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -30;
        this.speed = 0.3 + Math.random() * 1.2;
        // Increased opacity for better visibility in light mode
        const isDark = document.documentElement.classList.contains('dark');
        this.opacity = isDark 
          ? 0.35 + Math.random() * 0.35 
          : 0.55 + Math.random() * 0.35;
        this.codeIndex = Math.floor(Math.random() * codeSnippets.length);
        this.color = ['#06b6d4', '#00d4ff', '#22d3ee', '#67e8f9'][Math.floor(Math.random() * 4)];
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height + 50) {
          this.reset();
          this.y = -30;
        }
      }

      draw() {
        const code = codeSnippets[this.codeIndex];
        if (!code) return;

        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.font = '13px "Courier New", "Fira Code", monospace';
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        
        ctx.fillText(code, this.x, this.y);
        
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new CodeParticle());
      particles[i].y = Math.random() * canvas.height;
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90 dark:opacity-55"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
