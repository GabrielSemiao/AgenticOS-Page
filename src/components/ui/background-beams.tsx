"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [beams, setBeams] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      color: string;
    }>
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid pattern (subtle)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    let beamId = 0;
    const colors = ["#7c3aed", "#06b6d4"];

    const createBeam = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 300 + 200;
      const targetX = x + Math.cos(angle) * distance;
      const targetY = y + Math.sin(angle) * distance;

      const newBeam = {
        id: beamId++,
        x,
        y,
        targetX,
        targetY,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setBeams((prev) => [...prev, newBeam]);

      setTimeout(() => {
        setBeams((prev) => prev.filter((beam) => beam.id !== newBeam.id));
      }, 1500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.95) {
        createBeam(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="absolute inset-0 pointer-events-none">
        {beams.map((beam) => (
          <motion.div
            key={beam.id}
            initial={{
              x: beam.x,
              y: beam.y,
              opacity: 0,
            }}
            animate={{
              x: beam.targetX,
              y: beam.targetY,
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="absolute w-1 h-1"
            style={{
              background: `radial-gradient(circle, ${beam.color} 0%, transparent 70%)`,
              boxShadow: `0 0 20px ${beam.color}, 0 0 40px ${beam.color}`,
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                width: "200px",
                height: "2px",
                background: `linear-gradient(to right, ${beam.color}, transparent)`,
                transformOrigin: "left center",
                transform: `rotate(${Math.atan2(
                  beam.targetY - beam.y,
                  beam.targetX - beam.x
                )}rad)`,
              }}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};