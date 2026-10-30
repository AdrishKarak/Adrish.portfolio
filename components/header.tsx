"use client";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Close on route change
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Close when resizing to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width:768px)");
    const handler = () => { if (mq.matches) close(); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [close]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Focus the drawer when it opens
  useEffect(() => {
    if (open && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [open]);

  return (
    <>
      <header className="header">
        <nav className="nav" aria-label="Main navigation">
          <Link href="/" className="mark" aria-label="Adrish Karak home">
            {profile.initials}
          </Link>

          <div className="nav-right">
            <Link className="desktop-link" href="/">Home</Link>
            <a className="desktop-link" href="/#projects">Projects</a>
            <a className="desktop-link" href="/#experience">Experience</a>
            <span className="desktop-link">
              <a className="btn" href="/#contact">
                <Search size={14} />
                Contact
              </a>
            </span>
            <ThemeToggle />
            <button
              className="mobile-only btn mob-menu-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mob-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer overlay — always in DOM for CSS transition */}
      <div
        className={`mob-backdrop${open ? " mob-backdrop--visible" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <nav
        id="mob-drawer"
        ref={drawerRef}
        className={`mob-drawer${open ? " mob-drawer--open" : ""}`}
        role="dialog"
        aria-modal={open}
        aria-label="Navigation menu"
        tabIndex={-1}
      >
        <div className="mob-drawer-header">
          <Link href="/" className="mark" onClick={close}>
            {profile.initials}
          </Link>
          <button
            className="btn"
            aria-label="Close menu"
            onClick={close}
          >
            <X size={16} />
          </button>
        </div>
        <ul className="mob-nav-list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="mob-nav-link"
                onClick={close}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
