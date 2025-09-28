"use client";

import { Box, Stack, type StackProps, Typography } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fontSecondary } from "@/theme/theme";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

export default function Section({
  id,
  title,
  children,
  ...props
}: StackProps & {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Stack className="container" gap={2} flex={1} {...props}>
        <Box id={id} sx={{ scrollMarginTop: 100 }} />

        <Stack spacing={1}>
          <motion.div variants={titleVariants}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 300, fontFamily: fontSecondary.style.fontFamily, color: "#0000ff" }}
            >
              {title}
            </Typography>
          </motion.div>
          <motion.hr
            variants={lineVariants}
            style={{
              border: "none",
              height: "2px",
              background: "linear-gradient(90deg, #0000ff 0%, transparent 100%)",
              margin: 0,
            }}
          />
        </Stack>
        <motion.div variants={contentVariants}>{children}</motion.div>
      </Stack>
    </motion.div>
  );
}
