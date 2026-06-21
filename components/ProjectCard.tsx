"use client";

import { Divider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { Fragment } from "react";
import { fontSecondary } from "@/theme/theme";

export default function ProjectCard({
  index,
  title,
  description,
  href,
  demo,
  technologies,
}: {
  index: number;
  title: string;
  description: string;
  href?: string;
  demo?: string;
  technologies?: string[];
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div style={{ position: "relative" }}>
      <motion.span
        aria-hidden
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          top: -22,
          left: -6,
          fontSize: "4.5rem",
          fontWeight: 900,
          lineHeight: 1,
          color: "rgba(0, 0, 255, 0.06)",
          userSelect: "none",
          pointerEvents: "none",
          fontFamily: fontSecondary.style.fontFamily,
        }}
      >
        {num}
      </motion.span>

      {/* left border draw */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: -16,
          width: 2,
          height: "100%",
          background: "#0000ff",
          opacity: 0.25,
          transformOrigin: "top",
          borderRadius: 2,
        }}
      />

      <Stack direction="column" spacing={1} sx={{ pt: 1 }}>
        <Typography variant="h6" fontFamily={fontSecondary.style.fontFamily}>
          {title}
        </Typography>

        <Typography variant="body1" color="text.secondary" fontFamily={fontSecondary.style.fontFamily}>
          {description}
        </Typography>

        <Stack direction="row" gap={1} alignItems="center" flexWrap="wrap">
          {technologies?.map((t, i) => (
            <Fragment key={t}>
              <Typography
                variant="body2"
                color="text.secondary"
                fontFamily={fontSecondary.style.fontFamily}
                sx={{ textTransform: "capitalize" }}
              >
                {t}
              </Typography>
              {i !== technologies.length - 1 && (
                <Divider orientation="vertical" flexItem sx={{ height: 14, margin: 0.4 }} />
              )}
            </Fragment>
          ))}
        </Stack>

        {href && (
          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#0000ff",
              fontFamily: fontSecondary.style.fontFamily,
              wordBreak: "break-word",
            }}
          >
            Source: {href}
          </Link>
        )}

        {demo && (
          <motion.div whileHover="hover" initial="rest" animate="rest" style={{ display: "inline-flex" }}>
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              component={Link}
              href={demo}
              target="_blank"
              rel="noreferrer"
              sx={{ color: "GrayText", "&:hover": { color: "GrayText !important" } }}
            >
              <motion.svg
                style={{ width: 16, height: 16, color: "red" }}
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                variants={{
                  rest: { y: 0, x: 0, opacity: 1, scale: 1, rotate: 0 },
                  hover: {
                    x:      [0, -2,  2, -2,  2, -1,  1,  0,   6,  40],
                    y:      [0,  2, -2,  2, -2,  1, -1,  0,  -6, -40],
                    rotate: [0, -5,  5, -5,  5, -3,  3,  0, -15, -30],
                    scale:  [1, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.1, 1.2, 0.4],
                    opacity:[1,  1,   1,   1,   1,   1,   1,  1,   1,   0],
                    transition: { duration: 0.9, ease: "easeIn", times: [0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56, 0.75, 1] },
                  },
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </motion.svg>
              <motion.span
                variants={{
                  rest: { x: 0, y: 0 },
                  hover: {
                    x: [0, -1, 1, -1, 1, 0, 3],
                    y: [0,  1, -1,  1, -1, 0, 0],
                    transition: { duration: 0.9, ease: "easeOut", times: [0, 0.08, 0.16, 0.24, 0.32, 0.56, 1] },
                  },
                }}
              >
                Launch
              </motion.span>
            </Stack>
          </motion.div>
        )}
      </Stack>
    </div>
  );
}
