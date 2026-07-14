import fs from "node:fs";
import path from "node:path";

// Server-only: resolves a facility photo from /public/facilities/{slug}.{ext} at build time.
// Drop a file matching a facility's slug into that folder and it's picked up automatically —
// no code change needed. Returns null (never a broken <img>) when no file exists yet.

const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];
const FACILITIES_DIR = path.join(process.cwd(), "public", "facilities");

export function getFacilityImage(slug: string): string | null {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(FACILITIES_DIR, `${slug}.${ext}`))) {
      return `/facilities/${slug}.${ext}`;
    }
  }
  return null;
}
