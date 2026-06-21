"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MagneticLink({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 20 });
  const sy = useSpring(y, { stiffness: 250, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
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
      style={{ x: sx, y: sy, display: "inline-block", textDecoration: "underline", textDecorationColor: "#0000ff" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ color: "#0000ff" }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.a>
  );
}
