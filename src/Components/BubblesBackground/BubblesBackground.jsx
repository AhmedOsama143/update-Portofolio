import { useEffect, useRef } from "react";

export default function BubblesBackground({
  count = 60,
  minRadius = 2,
  maxRadius = 6,
  speed = 0.6,
  color = "rgba(255,255,255,0.35)",
  respectReducedMotion = true,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const reduceMotion =
      respectReducedMotion &&
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resizeToParent() {
      const parent = canvas.parentElement || document.body;
      const w = Math.max(1, parent.clientWidth);
      const h = Math.max(1, parent.clientHeight);

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      bubblesRef.current = makeBubbles(w, h);
    }

    function makeBubbles(cw, ch) {
      return Array.from({ length: count }).map(() => ({
        x: Math.random() * cw,
        y: Math.random() * ch,
        r: Math.random() * (maxRadius - minRadius) + minRadius,
        vy: -(Math.random() * 0.6 + 0.2) * speed,
        vx: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.5 + 0.25,
      }));
    }

    function draw() {
      const cw = canvas.width / dpr;
      const ch = canvas.height / dpr;

      ctx.clearRect(0, 0, cw, ch);

      const bubbles = bubblesRef.current;

      for (const b of bubbles) {
        b.x += b.vx;
        b.y += b.vy;

        if (b.y + b.r < 0) {
          b.y = ch + b.r;
          b.x = Math.random() * cw;
        }
        if (b.x < -20) b.x = cw + 20;
        if (b.x > cw + 20) b.x = -20;

        const grd = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r * 1.4);
        grd.addColorStop(0, color);
        grd.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r * 1.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = b.alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        resizeToParent();
      });
      ro.observe(canvas.parentElement || document.body);
    } else {
      // fallback
      resizeToParent();
      window.addEventListener("resize", resizeToParent);
    }

    if (!reduceMotion) {
      resizeToParent();
      rafRef.current = requestAnimationFrame(draw);
    } else {
      resizeToParent();
      const cw = canvas.width / dpr;
      const ch = canvas.height / dpr;
      ctx.clearRect(0, 0, cw, ch);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", resizeToParent);
    };
  }, [count, minRadius, maxRadius, speed, color, respectReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
