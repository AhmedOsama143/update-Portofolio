import React from "react";

export default function PageMetaData({
  title = "Mahmoud Osman - Frontend Developer",
  description = "Portfolio of Mahmoud Osman showcasing modern web development projects using React, TypeScript, and TailwindCSS.",
  keywords = "Mahmoud Osman, Frontend Developer, React, TypeScript, JavaScript, Portfolio, Web Development, UI, UX",
  author = "Mahmoud Osman",
  image = "https://portfolio1993.netlify.app/previewimg.png",
  url = "https://portfolio1993.netlify.app/",
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
