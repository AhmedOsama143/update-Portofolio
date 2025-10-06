import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FloatingFAIcons({
  icons = [],
  count = 20,
  mobileCount = 6,
  colors = ["#60A5FA", "#F472B6", "#34D399", "#FBBF24", "#A78BFA"],
  sizeRange = [18, 34],
  duration = [10, 18],
  sway = 18,
  className = "",
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const generateItems = () => {
    if (!icons.length) return [];

    const total = isMobile ? mobileCount : count;
    const rand = (min, max) => Math.random() * (max - min) + min;

    const shuffledIcons = [...icons];
    for (let i = shuffledIcons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledIcons[i], shuffledIcons[j]] = [
        shuffledIcons[j],
        shuffledIcons[i],
      ];
    }

    return Array.from({ length: total }).map((_, i) => {
      const left = Math.random() * 100;
      const delay = -rand(0, 12);
      const dur = rand(duration[0], duration[1]);
      const size = rand(sizeRange[0], sizeRange[1]);
      const color = colors[Math.floor(Math.random() * colors.length)];
      const icon = shuffledIcons[i % shuffledIcons.length];
      const swayAmt = (Math.random() * 0.5 + 0.75) * sway;

      return { id: i, left, delay, dur, size, color, icon, swayAmt };
    });
  };

  useEffect(() => {
    setItems(generateItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  if (reduceMotion || !icons.length || !items.length) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <style>{`
        @keyframes floatTiltFA {
          0%   { transform: translate(-50%, 0) rotate(-10deg); opacity: 0; }
          8%   { opacity: 0.9; }
          50%  { transform: translate(calc(-50% + var(--sway)), -55vh) rotate(10deg); opacity: 0.9; }
          100% { transform: translate(-50%, -105vh) rotate(-10deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .fa-float { animation: none !important; }
        }
      `}</style>

      {items.map((it) => (
        <span
          key={it.id}
          className="fa-float absolute bottom-[-40px] will-change-transform will-change-opacity"
          style={{
            left: `${it.left}%`,
            fontSize: `${it.size}px`,
            color: it.color,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
            animation: `floatTiltFA ${it.dur}s linear infinite`,
            animationDelay: `${it.delay}s`,
            "--sway": `${it.swayAmt}px`,
          }}
          aria-hidden="true"
        >
          <FontAwesomeIcon icon={it.icon} />
        </span>
      ))}
    </div>
  );
}
