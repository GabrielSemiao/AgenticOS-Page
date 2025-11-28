"use client";

import { useEffect, useRef } from "react";

export const DotScreenShader = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      const dotSize = 2;
      const spacing = 20;
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          const distance = Math.sqrt(
            Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2)
          );

          const wave = Math.sin(distance * 0.01 - time * 0.5) * 0.5 + 0.5;
          const opacity = wave * 0.3;

          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 0.01;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: "pixelated" }}
    />
  );
};