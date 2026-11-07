"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  ["/", "Home"],
  ["/shop/", "Shop"],
  ["/categories/wishly-cards/", "Wishly Cards"],
  ["/categories/mystery-gifts/", "Mystery Gifts"],
  ["/about/", "About"]
] as const;

export default function StoreNavbar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const savedY = useRef(0);
  const restoreScrollAfterClose = useRef(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    // Lock scrolling on <html> only. Making <body> position:fixed moved the sticky header (and the menu
    // panel inside it) off-screen whenever the page was scrolled, so the hamburger looked dead.
    savedY.current = window.scrollY;
    document.documentElement.classList.add("store-menu-open");
    const first = panelRef.current?.querySelector<HTMLElement>("a[href]");
    requestAnimationFrame(() => first?.focus({ preventScroll: true }));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
      }
      if (event.key === "Tab" && panelRef.current) {
        const items = [...panelRef.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])')].filter((el) => el.offsetParent !== null);
        if (!items.length) return;
        const firstItem = items[0];
        const lastItem = items[items.length - 1];
        if (event.shiftKey && document.activeElement === firstItem) {
          event.preventDefault();
          lastItem.focus();
        } else if (!event.shiftKey && document.activeElement === lastItem) {
          event.preventDefault();
          firstItem.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.classList.remove("store-menu-open");
      if (restoreScrollAfterClose.current && Math.abs(window.scrollY - savedY.current) > 1) window.scrollTo(0, savedY.current);
      restoreScrollAfterClose.current = true;
    };
  }, [open]);

  function closeMenu(restoreFocus = false, restoreScroll = true) {
    restoreScrollAfterClose.current = restoreScroll;
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => toggleRef.current?.focus({ preventScroll: true }));
  }

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1050) setOpen(false); };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className={`store-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="store-nav-inner">
          <Link href="/" className="store-brand" aria-label="Wishly Store home" onClick={() => closeMenu(false, false)}>
            <span className="store-brand-mark">✦</span>
            <span className="store-brand-copy"><b>Wishly <i>Store</i></b><small>GIFTS WITH MEANING</small></span>
          </Link>

          <div className={`store-nav-panel${open ? " is-open" : ""}`} ref={panelRef} id="store-navigation">
            <nav className="store-nav-pill" aria-label="Main navigation">
              {links.map(([href, label]) => {
                const active = pathname === href || (href !== "/" && pathname.startsWith(href));
                return <Link key={href} href={href} aria-current={active ? "page" : undefined} onClick={() => closeMenu(false, false)}>{label}</Link>;
              })}
              <Link className="mobile-nav-link" href="/wishlist/" onClick={() => closeMenu(false, false)}>Saved gifts</Link>
              <a className="mobile-nav-visit" href="https://wishly.bd/" target="_blank" rel="noopener noreferrer" onClick={() => closeMenu()}>Visit Wishly ↗</a>
            </nav>
            <div className="store-nav-actions">
              <Link className="store-saved-link" href="/wishlist/" onClick={() => closeMenu(false, false)} aria-label="Saved gifts">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.1-8.8 10.2-8.8 10.2S3.2 13.9 3.2 8.8A4.4 4.4 0 0 1 12 6.5a4.4 4.4 0 0 1 8.8 2.3Z" /></svg>
                <span>Saved</span>
              </Link>
              <a className="store-visit-link" href="https://wishly.bd/" target="_blank" rel="noopener noreferrer">Visit Wishly <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <button ref={toggleRef} className="store-menu-toggle" type="button" aria-controls="store-navigation" aria-expanded={open} aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen((value) => !value)}>
            <span /><span /><span />
          </button>
        </div>
      </header>
      {open && <button className="store-nav-scrim" type="button" aria-label="Close navigation menu" onClick={() => closeMenu(true)} />}
    </>
  );
}
