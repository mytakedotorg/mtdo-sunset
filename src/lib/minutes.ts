import type { CollectionEntry } from "astro:content";

export interface MinuteMeta {
  slug: string;
  title: string;
  date: Date | null;
}

const TITLE_RE = /^#\s+(.+)$/m;
const DATE_RE = /_(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z)/;

export function parseMinute(entry: CollectionEntry<"minutes">): MinuteMeta {
  const titleMatch = entry.body.match(TITLE_RE);
  const dateMatch = entry.body.match(DATE_RE);
  return {
    slug: entry.slug,
    title: titleMatch ? titleMatch[1].trim() : entry.slug,
    date: dateMatch ? new Date(dateMatch[1]) : null,
  };
}

export function formatDate(d: Date | null): string {
  if (!d) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
