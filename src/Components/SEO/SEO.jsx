/**
 * SEO component using React 19's built-in <title> and <meta> hoisting.
 * React 19 automatically hoists these tags to <head>.
 */
export default function SEO({
  title = "Ahmed Kholief - Frontend Developer",
  description = "Frontend Developer specializing in React, Next.js, and modern web technologies. Building fast, accessible, and pixel-perfect interfaces.",
  url = "https://ahmedosama143.github.io/update-Portofolio/",
  image = "https://ahmedosama143.github.io/update-Portofolio/fav2.png",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Ahmed Kholief" />
      <meta
        name="keywords"
        content="Ahmed Kholief, Frontend Developer, React, Next.js, JavaScript, TypeScript, Portfolio, Web Developer, Egypt"
      />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ahmed Kholief Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#2563eb" />
    </>
  );
}
