import sharp from "sharp";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const IMG_DIR = join(__dirname, "..", "src", "assets", "imgs");

const W = 1200;
const H = 630;

const projects = [
  { name: "toko-store", label: "Toko Store", color1: "#7c3aed", color2: "#3b82f6" },
  { name: "toko-dashboard", label: "Toko Dashboard", color1: "#6d28d9", color2: "#2563eb" },
  { name: "studiofy", label: "Studiofy", color1: "#0891b2", color2: "#6366f1" },
  { name: "mediflow-booking", label: "MediFlow Booking", color1: "#059669", color2: "#3b82f6" },
  { name: "mediflow-admin", label: "MediFlow Admin", color1: "#0d9488", color2: "#2563eb" },
  { name: "mediflow-dashboard", label: "MediFlow Dashboard", color1: "#10b981", color2: "#6366f1" },
];

for (const p of projects) {
  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.color1}"/>
        <stop offset="100%" stop-color="${p.color2}"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <text x="50%" y="44%" text-anchor="middle" font-family="sans-serif"
          font-size="56" font-weight="700" fill="white" opacity="0.9">${p.label}</text>
    <text x="50%" y="58%" text-anchor="middle" font-family="sans-serif"
          font-size="24" fill="white" opacity="0.5">Screenshot coming soon</text>
  </svg>`;

  const dest = join(IMG_DIR, `${p.name}.webp`);
  await sharp(Buffer.from(svg)).webp({ quality: 85 }).toFile(dest);
  console.log(`  Created: ${p.name}.webp`);
}

console.log("Done!");
