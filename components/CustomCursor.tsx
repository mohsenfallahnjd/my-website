"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 500, damping: 40 });
  const y = useSpring(my, { stiffness: 500, damping: 40 });
  const dotX = useSpring(mx, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(my, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const enter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [role=button]"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", enter);
    };
  }, [mx, my]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* outer ring */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x, y,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 44 : clicking ? 20 : 36,
          height: hovering ? 44 : clicking ? 20 : 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(0,0,255,0.5)",
          background: hovering ? "rgba(0,0,255,0.08)" : "transparent",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition: "width 0.2s, height 0.2s, background 0.2s, border-color 0.2s",
          mixBlendMode: "normal",
        }}
      />
      {/* dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: clicking ? 3 : 5,
          height: clicking ? 3 : 5,
          borderRadius: "50%",
          background: "#0000ff",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition: "width 0.15s, height 0.15s",
        }}
      />
    </>
  );
}
