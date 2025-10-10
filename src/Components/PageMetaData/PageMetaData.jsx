import React from "react";
import img from "../../assets/imgs/portofolio.png";
export default function PageMetaData({
  title = "Ahmed Kholief - Frontend Developer",
  description = "Portfolio of Ahmed Kholief showcasing modern web development projects using React, TypeScript, and TailwindCSS.",
  keywords = "Ahmed Kholief, Frontend Developer, React, TypeScript, JavaScript, Portfolio, Web Development, UI, UX",
  author = "Ahmed Kholief",
  image = { img },
  url = "https://ahmedosama143.github.io/update-Portofolio/",
}) {
  return (
    <>
      <title>{title}</title>

      {/* Basic Meta */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
