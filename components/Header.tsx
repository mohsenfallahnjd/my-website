"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const links = [
  { href: "#projects", text: "Work" },
  { href: "#products", text: "Products", external: false },
  { href: "#playground", text: "Playground" },
  { href: "https://bitlyst.vercel.app/", text: "Blog", external: true },
  { href: "#contact", text: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const handleLogoClick = async () => {
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (clickTimer.current) { clearTimeout(clickTimer.current); }
    clickTimer.current = setTimeout(() => setLogoClicks(0), 1500);
    if (next >= 5) {
      setLogoClicks(0);
      const confetti = (await import("canvas-confetti")).default;
      confetti({ particleCount: 180, spread: 80, origin: { y: 0.1 }, colors: ["#0000ff", "#fff", "#4ade80", "#000"] });
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        background: scrolled || menuOpen ? "rgba(255,255,255,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,0,255,0.08)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, paddingBottom: 16 }}
      >
        {/* logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ textDecoration: "none" }} onClick={handleLogoClick}>
            <motion.div style={{ display: "flex", alignItems: "baseline", gap: 3 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <span style={{ fontWeight: 900, fontSize: "1.1rem", color: "#0000ff", letterSpacing: "-0.03em" }}>MF</span>
              <motion.span
                style={{ width: 5, height: 5, borderRadius: "50%", background: "#0000ff", display: "inline-block", marginBottom: 2 }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </Link>
          <span style={{ fontSize: "0.6rem", color: "#bbb", letterSpacing: "0.04em", pointerEvents: "none" }}>
            psst… {5 - logoClicks > 0 ? 5 - logoClicks : 5}×
          </span>
        </div>

        {/* desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
          {links.map((link, i) => (
            <motion.div key={link.text} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}>
              <Link href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} style={{ textDecoration: "none" }}>
                <motion.span
                  style={{ display: "inline-block", padding: "6px 14px", borderRadius: 999, fontSize: "0.85rem", fontWeight: 500, color: "#333", cursor: "pointer" }}
                  whileHover={{ backgroundColor: "rgba(0,0,255,0.06)", color: "#0000ff" }}
                  transition={{ duration: 0.15 }}
                >
                  {link.text}
                  {link.external && (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{ marginLeft: 3, marginBottom: 1, display: "inline-block", verticalAlign: "middle", opacity: 0.45 }}>
                      <path d="M1.5 6.5L6.5 1.5M6.5 1.5H3M6.5 1.5V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </motion.span>
              </Link>
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.4, type: "spring", stiffness: 300 }} style={{ marginLeft: 8 }}>
            <Link href="mailto:hi@themohsen.me" style={{ textDecoration: "none" }}>
              <motion.span
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 16px", borderRadius: 999, fontSize: "0.85rem", fontWeight: 600, background: "#0000ff", color: "#fff", cursor: "pointer" }}
                whileHover={{ scale: 1.05, background: "#0000cc" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                <motion.span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
                Hire me
              </motion.span>
            </Link>
          </motion.div>
        </nav>

        {/* mobile: hire + burger */}
        <div className="mobile-nav" style={{ display: "none", alignItems: "center", gap: 10 }}>
          <Link href="mailto:hi@themohsen.me" style={{ textDecoration: "none" }}>
            <motion.span
              style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 14px", borderRadius: 999, fontSize: "0.8rem", fontWeight: 600, background: "#0000ff", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
              Hire me
            </motion.span>
          </Link>
          <motion.button
            onClick={() => setMenuOpen((v) => !v)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", flexDirection: "column", gap: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} style={{ display: "block", width: 22, height: 1.5, background: "#0000ff", borderRadius: 2 }} />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} style={{ display: "block", width: 22, height: 1.5, background: "#0000ff", borderRadius: 2 }} />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} style={{ display: "block", width: 22, height: 1.5, background: "#0000ff", borderRadius: 2 }} />
          </motion.button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="container" style={{ paddingBottom: 20, display: "flex", flexDirection: "column", gap: 4 }}>
              {links.map((link, i) => (
                <motion.div key={link.text} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    style={{ textDecoration: "none", display: "block", padding: "10px 0", fontSize: "1rem", fontWeight: 500, color: "#333", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.text}
                    {link.external && (
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{ marginLeft: 4, opacity: 0.4, display: "inline-block", verticalAlign: "middle" }}>
                        <path d="M1.5 6.5L6.5 1.5M6.5 1.5H3M6.5 1.5V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
