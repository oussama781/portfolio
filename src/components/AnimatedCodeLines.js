import { useEffect, useState } from 'react';

export default function AnimatedCodeLines() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const codeSnippets = [
      { code: 'const engineer = new SoftwareEngineer();', color: '#00d4ff' },
      { code: 'function buildPortfolio() { return <App />; }', color: '#00ff88' },
      { code: '@SpringBootApplication public class Portfolio {}', color: '#ff6b9d' },
      { code: 'async def deploy(): return {"status": "live"}', color: '#ffd93d' },
      { code: 'interface Developer { skills: string[]; }', color: '#6bcf7f' },
      { code: 'docker-compose up -d', color: '#9d7ede' },
      { code: 'npm run build && npm run deploy', color: '#00d4ff' },
      { code: 'git push origin main', color: '#00ff88' },
      { code: 'const portfolio = { name: "Engineer" };', color: '#00d4ff' },
      { code: 'SELECT * FROM projects WHERE status = "live"', color: '#6bcf7f' },
    ];

    const generateLines = () => {
      const newLines = [];
      const lineCount = 20;

      for (let i = 0; i < lineCount; i++) {
        const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        newLines.push({
          id: `${i}-${Date.now()}`,
          code: snippet.code,
          color: snippet.color,
          left: Math.random() * 100,
          delay: Math.random() * 20,
          duration: 20 + Math.random() * 15,
        });
      }

      setLines(newLines);
    };

    generateLines();
    const interval = setInterval(generateLines, 35000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {lines.map((line) => (
          <div
            key={line.id}
            className="code-line-float absolute font-mono text-xs md:text-sm opacity-10 dark:opacity-15"
            style={{
              left: `${line.left}%`,
              color: line.color,
              animationDelay: `${line.delay}s`,
              animationDuration: `${line.duration}s`,
              textShadow: `0 0 8px ${line.color}, 0 0 16px ${line.color}40`,
            }}
          >
            {line.code}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes floatDown {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          5% {
            opacity: 0.1;
          }
          95% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(calc(100vh + 100px));
            opacity: 0;
          }
        }
        .code-line-float {
          animation: floatDown linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
}
