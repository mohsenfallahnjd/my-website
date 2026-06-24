"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Service = {
  id: string;
  name: string;
  problem: string;
  solution: string;
  href: string;
  cta: string;
  color: string;
  icon: string;
  tags: string[];
};

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={service.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 20,
        overflow: "hidden",
        textDecoration: "none",
        cursor: "pointer",
        background: "#0a0a0a",
        boxShadow: hovered ? "0 24px 64px rgba(0,0,0,0.2)" : "0 4px 20px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.3s",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
    >
      {/* top: label + icon */}
      <div style={{ padding: "22px 24px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{
          fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "#444",
        }}>
          THE PROBLEM
        </span>
        <motion.span
          style={{ fontSize: "1.5rem", lineHeight: 1 }}
          animate={hovered ? { rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.4 }}
        >
          {service.icon}
        </motion.span>
      </div>

      {/* problem — big bold */}
      <div style={{ padding: "12px 24px 24px", flexGrow: 1 }}>
        <p style={{
          margin: 0,
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.5,
          letterSpacing: "-0.01em",
        }}>
          {service.problem}
        </p>
      </div>

      {/* solution block */}
      <motion.div
        style={{
          background: hovered ? "#0000ff" : "#161616",
          transition: "background 0.3s",
          padding: "18px 24px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <span style={{
          fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.16em",
          textTransform: "uppercase", color: hovered ? "rgba(255,255,255,0.5)" : "#444",
          transition: "color 0.3s",
        }}>
          THE FIX
        </span>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div>
            <p style={{
              margin: "0 0 4px",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}>
              {service.name}
            </p>
            <p style={{
              margin: 0,
              fontSize: "0.8rem",
              color: hovered ? "rgba(255,255,255,0.75)" : "#666",
              lineHeight: 1.5,
              transition: "color 0.3s",
            }}>
              {service.solution}
            </p>
          </div>
          <motion.div
            animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              flexShrink: 0,
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: hovered ? "rgba(255,255,255,0.2)" : "#222",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.3s",
              marginTop: 2,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H6M12 2V8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.a>
  );
}
