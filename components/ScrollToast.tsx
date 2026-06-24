"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToast() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v > 0.5 && !dismissed) setVisible(true);
      if (v < 0.3) setVisible(false);
    });
  }, [scrollYProgress, dismissed]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            bottom: 28,
            right: 24,
            zIndex: 1000,
            background: "#0a0a0a",
            borderRadius: 16,
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            gap: 14,
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            maxWidth: 320,
          }}
        >
          <motion.span
            animate={{ rotate: [0, 15, -10, 15, 0] }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontSize: "1.4rem", flexShrink: 0 }}
          >
            👋
          </motion.span>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
              Like what you see?
            </p>
            <p style={{ margin: "2px 0 10px", fontSize: "0.75rem", color: "#888", lineHeight: 1.4 }}>
              I'm open to work. Let's build something together.
            </p>
            <a
              href="mailto:hi@themohsen.me"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "6px 14px",
                borderRadius: 999,
                background: "#0000ff",
                color: "#fff",
                fontSize: "0.75rem",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Let's talk →
            </a>
          </div>
          <button
            onClick={dismiss}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#555", padding: 4, flexShrink: 0, alignSelf: "flex-start" }}
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
