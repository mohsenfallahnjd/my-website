"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Size = "large" | "small" | "wide";

export default function ProjectCard({
  index,
  title,
  description,
  href,
  demo,
  technologies,
  size = "small",
}: {
  index: number;
  title: string;
  description: string;
  href?: string;
  demo?: string;
  technologies?: string[];
  size?: Size;
}) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");
  const isLarge = size === "large";
  const isWide = size === "wide";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={isLarge ? "bento-large" : isWide ? "bento-wide" : "bento-small"}
      style={{
        position: "relative",
        borderRadius: 20,
        padding: isLarge ? "36px 32px" : isWide ? "28px 32px" : "24px 22px",
        background: hovered ? "#0000ff" : "#f4f4f6",
        transition: "background 0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: isWide ? "space-between" : "space-between",
        alignItems: isWide ? "center" : "flex-start",
        gap: isWide ? 24 : 16,
        overflow: "hidden",
        cursor: "pointer",
        minHeight: isLarge ? 260 : isWide ? "auto" : 200,
      }}
    >
      {/* bg number watermark */}
      <span style={{
        position: "absolute",
        bottom: isWide ? "50%" : 12,
        right: 16,
        transform: isWide ? "translateY(50%)" : "none",
        fontSize: isLarge ? "7rem" : "4rem",
        fontWeight: 900,
        lineHeight: 1,
        color: hovered ? "rgba(255,255,255,0.06)" : "rgba(0,0,255,0.05)",
        userSelect: "none",
        pointerEvents: "none",
        transition: "color 0.3s",
      }}>
        {num}
      </span>

      {/* content */}
      <div style={{ display: "flex", flexDirection: "column", gap: isLarge ? 14 : 10, flex: 1, minWidth: 0 }}>
        <span style={{
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: hovered ? "rgba(255,255,255,0.5)" : "#0000ff",
          transition: "color 0.3s",
        }}>
          {num}
        </span>

        <h3 style={{
          margin: 0,
          fontSize: isLarge ? "clamp(1.3rem, 2vw, 1.7rem)" : isWide ? "1.2rem" : "1rem",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.2,
          color: hovered ? "#fff" : "#0a0a0a",
          transition: "color 0.3s",
        }}>
          {title}
        </h3>

        <p style={{
          margin: 0,
          fontSize: isLarge ? "0.88rem" : "0.82rem",
          color: hovered ? "rgba(255,255,255,0.7)" : "#666",
          lineHeight: 1.65,
          transition: "color 0.3s",
          maxWidth: isWide ? 480 : "none",
          display: "-webkit-box",
          WebkitLineClamp: isLarge ? 4 : isWide ? 2 : 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {description}
        </p>

        {technologies && technologies.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
            {technologies.slice(0, isLarge ? 5 : 3).map((t) => (
              <span key={t} style={{
                fontSize: "0.68rem",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: 999,
                background: hovered ? "rgba(255,255,255,0.15)" : "rgba(0,0,255,0.07)",
                color: hovered ? "#fff" : "#0000ff",
                letterSpacing: "0.04em",
                transition: "background 0.3s, color 0.3s",
              }}>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* actions */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
        {href && (
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: hovered ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.06)",
                color: hovered ? "#fff" : "#555",
                textDecoration: "none",
                transition: "background 0.3s, color 0.3s",
              }}
            >
              <Code2 size={15} strokeWidth={2} />
            </Link>
          </motion.div>
        )}
        {demo && (
          <motion.div
            animate={{ x: hovered ? 2 : 0, y: hovered ? -2 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: hovered ? "#fff" : "#0000ff",
                color: hovered ? "#0000ff" : "#fff",
                textDecoration: "none",
                transition: "background 0.3s, color 0.3s",
              }}
            >
              <ArrowUpRight size={16} strokeWidth={2.2} />
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
