"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Star = {
  id: number;
  x: number;
  y: number;
  angle: number;
  length: number;
  color: string;
};

export const ShootingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const colors = ["#A78BFA", "#38BDF8", "#818CF8"];
    let id = 0;

    const createStar = () => {
      const angle = Math.random() * 90 + 45; // Between 45 and 135 degrees
      const startFromTop = Math.random() > 0.5;
      
      const newStar: Star = {
        id: id++,
        x: Math.random() * window.innerWidth,
        y: startFromTop ? -50 : Math.random() * (window.innerHeight / 2),
        angle,
        length: Math.random() * 100 + 80,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setStars((prev) => [...prev, newStar]);

      // Remove star after animation
      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== newStar.id));
      }, 2000);
    };

    // Create shooting stars at random intervals (2-4 seconds)
    const interval = setInterval(() => {
      createStar();
    }, Math.random() * 2000 + 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{
              x: star.x,
              y: star.y,
              opacity: 0,
            }}
            animate={{
              x: star.x + Math.cos((star.angle * Math.PI) / 180) * 600,
              y: star.y + Math.sin((star.angle * Math.PI) / 180) * 600,
              opacity: [0, 1, 1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="absolute"
            style={{
              width: `${star.length}px`,
              height: "2px",
              background: `linear-gradient(to right, ${star.color}, transparent)`,
              transform: `rotate(${star.angle}deg)`,
              boxShadow: `0 0 6px ${star.color}`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};