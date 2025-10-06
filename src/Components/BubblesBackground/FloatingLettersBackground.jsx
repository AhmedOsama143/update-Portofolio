import { useEffect, useRef } from "react";

export default function FloatingTitleLettersBackground({
  text = "FRONTEND DEVELOPER",
  count = 20,
  colors = ["#60A5FA", "#F472B6", "#34D399", "#FBBF24", "#A78BFA"],
  fontSizeRange = [22, 38],
  speed = 0.4,
  italic = true,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const letters = text.replace(/\s+/g, "").split("");

    const items = Array.from({ length: count }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      char: letters[Math.floor(Math.random() * letters.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      size:
        Math.random() * (fontSizeRange[1] - fontSizeRange[0]) +
        fontSizeRange[0],
      vy: -(Math.random() * 0.6 + 0.2) * speed,
      vx: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.5,
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      for (const i of items) {
        i.x += i.vx;
        i.y += i.vy;

        if (i.y + i.size < 0) {
          i.y = window.innerHeight + i.size;
          i.x = Math.random() * window.innerWidth;
        }
        if (i.x < -50) i.x = window.innerWidth + 50;
        if (i.x > window.innerWidth + 50) i.x = -50;

        ctx.globalAlpha = i.alpha;
        ctx.fillStyle = i.color;
        ctx.font = `${italic ? "italic " : ""}bold ${i.size}px 'Arial', sans-serif`;
        ctx.fillText(i.char, i.x, i.y);
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [text, count, colors, fontSizeRange, speed, italic]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
