"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import style from './style.module.css';

interface CodeLine {
  id: number;
  text: string;
  color: string;
  position: { top: string; left: string };
  speed: number;
}

const codeSnippets = [
  // TypeScript
  { text: 'const user: User = { name: "Florent", role: "Dev" };', color: '#2feaa8' },
  { text: 'interface Props { skills: string[]; };', color: '#2feaa8' },
  { text: 'type Response<T> = { data: T; status: number; };', color: '#2feaa8' },
  { text: 'async function fetchData(): Promise<void> { }', color: '#2feaa8' },
  
  // PHP
  { text: '$user = new User($name, $email);', color: '#2feaa8' },
  { text: 'public function __construct() { }', color: '#2feaa8' },
  { text: 'return view("home", compact("data"));', color: '#2feaa8' },
  { text: 'Route::get("/api", [Controller::class]);', color: '#2feaa8' },
  
  // SQL
  { text: 'SELECT users.name FROM users WHERE active = 1', color: '#2feaa8' },
  { text: 'JOIN orders ON users.id = orders.user_id', color: '#2feaa8' },
  { text: 'UPDATE users SET status = "active"', color: '#2feaa8' },
  { text: 'CREATE INDEX idx_email ON users(email);', color: '#2feaa8' },
  
  // Bash
  { text: 'npm install && npm run build', color: '#2feaa8' },
  { text: 'docker-compose up -d --build', color: '#2feaa8' },
  { text: 'git commit -m "feat: new feature"', color: '#2feaa8' },
  { text: 'curl -X POST https://api/products', color: '#2feaa8' },
];

export default function CodeBackground() {
  const [codeLines, setCodeLines] = useState<CodeLine[]>([]);

  useEffect(() => {
    const addCodeLine = () => {
      const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      const newLine: CodeLine = {
        id: Date.now() + Math.random(),
        text: snippet.text,
        color: snippet.color,
        position: {
          top: `${Math.random() * 80 + 10}%`,
          left: `${Math.random() * 80 + 10}%`,
        },
        speed: Math.random() * 20 + 10, // Vitesse entre 10 et 30
      };

      setCodeLines((prev) => [...prev, newLine]);

      // Supprimer la ligne après 6 secondes
      setTimeout(() => {
        setCodeLines((prev) => prev.filter((line) => line.id !== newLine.id));
      }, 6000);
    };

    // Ajouter une ligne toutes les 2 secondes
    const interval = setInterval(addCodeLine, 2000);

    // Ajouter quelques lignes au démarrage
    for (let i = 0; i < 3; i++) {
      setTimeout(() => addCodeLine(), i * 800);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.code_background}>
      <AnimatePresence>
        {codeLines.map((line) => (
          <Parallax 
            key={line.id} 
            speed={line.speed}
            className={style.parallax_wrapper}
            style={{
              position: 'absolute',
              top: line.position.top,
              left: line.position.left,
            }}
          >
            <motion.div
              className={style.code_line}
              style={{
                color: line.color,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 1
              }}
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ 
                  duration: 2,
                  ease: "easeInOut"
                }}
                style={{ 
                  display: "inline-block",
                  overflow: "hidden",
                  whiteSpace: "nowrap"
                }}
              >
                {line.text}
              </motion.span>
            </motion.div>
          </Parallax>
        ))}
      </AnimatePresence>
    </div>
  );
}
