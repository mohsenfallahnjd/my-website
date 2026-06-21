"use client";

import { motion } from "framer-motion";
import { Briefcase, Hammer, Send, Wrench } from "lucide-react";

const BLUE = "#0000ff";
const p = { size: 18, color: BLUE, strokeWidth: 1.6 };

export function SkillsIcon() {
  return (
    <motion.span style={{ display: "inline-flex" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
      <Wrench {...p} />
    </motion.span>
  );
}

export function ExperiencesIcon() {
  return (
    <motion.span style={{ display: "inline-flex" }}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <Briefcase {...p} />
    </motion.span>
  );
}

export function ProjectsIcon() {
  return (
    <motion.span
      style={{ display: "inline-flex", originX: "90%", originY: "90%" }}
      animate={{ rotate: [0, -30, 0] }}
      transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
    >
      <Hammer {...p} />
    </motion.span>
  );
}

export function ContactIcon() {
  return (
    <motion.span style={{ display: "inline-flex" }}
      animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
    >
      <Send {...p} />
    </motion.span>
  );
}
