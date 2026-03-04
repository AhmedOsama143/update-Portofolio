import sharp from "sharp";
import { readdir, unlink, stat } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const IMG_DIR = join(__dirname, "..", "src", "assets", "imgs");

// Images actually imported in components
const USED_IMAGES = new Set([
  "FreshCart.png",
  "spylt.png",
  "Fokkir.png",
  "devfoilo.png",
  "Daniels.png",
  "Weather.PNG",
  "Fashion.png",
  "Tomato.png",
  "Iphone.png",
  "Mealify.PNG",
  "simple E-Commerce.png",
  "AhmedKholiefIMG.jpg",
]);

// Unused leftover images from old FreshCart project
const UNUSED_IMAGES = [
  "work-3.jpg",
  "freshcartproject.PNG",
  "freshcart-logo.svg",
  "fokir.png",
  "portofolio.png",
  "mini-logo.png",
  "login-img.png",
  "E-Commerce.png",
  "Bookmarker.PNG",
  "SmartLogin.png",
  "review-author.png",
];

async function main() {
  // 1. Delete unused images
  console.log("\n--- Deleting unused images ---");
  for (const file of UNUSED_IMAGES) {
    try {
      await unlink(join(IMG_DIR, file));
      console.log(`  Deleted: ${file}`);
    } catch (e) {
      console.log(`  Skip (not found): ${file}`);
    }
  }

  // 2. Convert used images to WebP
  console.log("\n--- Converting to WebP ---");
  for (const file of USED_IMAGES) {
    const src = join(IMG_DIR, file);
    const name = basename(file, extname(file));
    const dest = join(IMG_DIR, `${name}.webp`);

    try {
      const before = (await stat(src)).size;
      await sharp(src).webp({ quality: 82 }).toFile(dest);
      const after = (await stat(dest)).size;
      const pct = ((1 - after / before) * 100).toFixed(0);
      console.log(
        `  ${file} → ${name}.webp  (${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB, -${pct}%)`
      );
    } catch (e) {
      console.error(`  FAIL: ${file} — ${e.message}`);
    }
  }

  // 3. Delete original files (now replaced by WebP)
  console.log("\n--- Removing original files ---");
  for (const file of USED_IMAGES) {
    try {
      await unlink(join(IMG_DIR, file));
      console.log(`  Removed: ${file}`);
    } catch (e) {
      console.log(`  Skip: ${file}`);
    }
  }

  console.log("\nDone! Update your imports to use .webp extensions.");
}

main();
