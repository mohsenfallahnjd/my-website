"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function MagneticButton({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        x: sx,
        y: sy,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 28px",
        borderRadius: 999,
        border: "1.5px solid currentColor",
        color: "inherit",
        textDecoration: "none",
        fontSize: "0.95rem",
        fontWeight: 500,
        cursor: "pointer",
        userSelect: "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.06, backgroundColor: "rgba(0,0,255,0.05)", borderColor: "#0000ff", color: "#0000ff" }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span style={{ display: "inline-flex" }} whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }}>
        {icon}
      </motion.span>
      {label}
    </motion.a>
  );
}
