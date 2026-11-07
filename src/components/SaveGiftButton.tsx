"use client";

import { useEffect, useState } from "react";

const KEY = "wishly-store-saved-v1";
function readSaved(): string[] {
  try { const data = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(data) ? data.filter((x) => typeof x === "string") : []; }
  catch { return []; }
}

export default function SaveGiftButton({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => { setSaved(readSaved().includes(slug)); }, [slug]);
  function toggle() {
    const next = readSaved();
    const updated = next.includes(slug) ? next.filter((item) => item !== slug) : [...next, slug];
    localStorage.setItem(KEY, JSON.stringify(updated));
    setSaved(updated.includes(slug));
    window.dispatchEvent(new CustomEvent("wishly-store-saved-change", { detail: updated }));
  }
  return <button className={`save-gift${compact ? " is-compact" : ""}${saved ? " is-saved" : ""}`} type="button" onClick={toggle} aria-pressed={saved} aria-label={saved ? "Remove from saved gifts" : "Save this gift"} title={saved ? "Saved — click to remove" : "Save for later"}>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.1-8.8 10.2-8.8 10.2S3.2 13.9 3.2 8.8A4.4 4.4 0 0 1 12 6.5a4.4 4.4 0 0 1 8.8 2.3Z" /></svg>
    {!compact && <span>{saved ? "Saved" : "Save gift"}</span>}
  </button>;
}
