"use client";

import { Box, Stack, type StackProps } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut", staggerChildren: 0.08 } },
};
const titleVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
};
const barVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.2, ease: "easeOut" } },
};
const contentVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", delay: 0.1 } },
};

export default function Section({
  id,
  title,
  subtitle,
  icon,
  children,
  ...props
}: StackProps & {
  id?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
      <Stack className="container" gap={4} flex={1} {...props}>
        <Box id={id} sx={{ scrollMarginTop: 100 }} />
        <motion.div variants={titleVariants}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* animated left bar */}
            <motion.div
              variants={barVariants}
              style={{
                width: 4,
                height: 40,
                background: "#0000ff",
                borderRadius: 2,
                transformOrigin: "top",
                flexShrink: 0,
              }}
            />
            <div>
              <p style={{ margin: 0, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0000ff", opacity: 0.5, marginBottom: 2 }}>
                {title.split(" ")[0]}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <h2 style={{ margin: 0, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: "#0a0a0a" }}>
                  {title.split(" ").slice(1).join(" ") || title}
                </h2>
                {icon && <span style={{ opacity: 0.7 }}>{icon}</span>}
              </div>
              {subtitle && (
                <p style={{ margin: "6px 0 0", fontSize: "0.88rem", color: "#888", lineHeight: 1.5 }}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </motion.div>
        <motion.div variants={contentVariants}>{children}</motion.div>
      </Stack>
    </motion.div>
  );
}
