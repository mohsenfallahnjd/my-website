"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { skills } from "@/public/content/skills";

const row1 = skills.slice(0, 8);
const row2 = skills.slice(8);

function Pill({ name, color }: { name: string; color: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ y: hovered ? -3 : 0 }}
      transition={{ duration: 0.15 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 18px",
        borderRadius: 999,
        border: `1.5px solid ${hovered ? color : "rgba(0,0,0,0.1)"}`,
        background: hovered ? `${color}12` : "#fff",
        fontSize: "0.85rem",
        fontWeight: 600,
        color: hovered ? color : "#333",
        whiteSpace: "nowrap",
        cursor: "default",
        transition: "border-color 0.2s, background 0.2s, color 0.2s",
        boxShadow: hovered ? `0 4px 20px ${color}25` : "none",
        userSelect: "none",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: color,
          display: "inline-block",
          flexShrink: 0,
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.2s",
        }}
      />
      {name}
    </motion.span>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof skills; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflowX: "clip", width: "100%" }}>
      <motion.div
        style={{ display: "flex", gap: 12, width: "max-content" }}
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((s, i) => (
          <Pill key={`${s.name}-${i}`} name={s.name} color={s.color} />
        ))}
      </motion.div>
    </div>
  );
}

export default function StackMarquee() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "8px 0" }}>
      <MarqueeRow items={row1} />
      <MarqueeRow items={row2} reverse />
    </div>
  );
}
