import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Card({ title, img, liveDemo, repo, description }) {
  return (
    <div
      className="group relative flex flex-col h-full rounded-2xl border border-white/10 
                 bg-white/5 backdrop-blur-md overflow-hidden 
                 shadow-[0_0_24px_rgba(59,130,246,0.08)] 
                 transition-all duration-300 hover:-translate-y-0.5 
                 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={`${title} preview`}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300" />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70 line-clamp-3">{description}</p>

        <div className="mt-auto flex items-center gap-4 pt-4">
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-200 hover:text-primary-50 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
          </a>
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
