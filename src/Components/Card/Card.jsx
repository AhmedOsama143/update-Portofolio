import React, { useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Card({ title, img, liveDemo, repo, description, tags }) {
  const cardRef = useRef(null);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const handleMouseMove = useCallback((e) => {
    if (prefersReducedMotion.current) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col h-full rounded-2xl border border-white/10 
                 bg-white/5 backdrop-blur-md overflow-hidden 
                 shadow-[0_0_24px_rgba(59,130,246,0.08)] 
                 transition-all duration-300 hover:-translate-y-0.5 
                 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]"
      style={{ transition: "transform 0.15s ease-out, box-shadow 0.3s, translate 0.3s" }}
    >
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={`${title} preview`}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300" />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70 line-clamp-3">{description}</p>

        {/* Tech Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary-500/15 border border-primary-400/20 px-2.5 py-0.5 text-[11px] font-medium text-primary-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center gap-4 pt-4">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-200 hover:text-primary-50 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
            </a>
          )}
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-400 hover:text-primary-200 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
