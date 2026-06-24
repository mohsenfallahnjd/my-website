"use client";

import { motion } from "framer-motion";
import { Layers, Mail, Rocket, Trophy } from "lucide-react";

const BLUE = "#0000ff";
const p = { size: 20, color: BLUE, strokeWidth: 1.5 };

export function SkillsIcon() {
  return (
    <motion.span
      style={{ display: "inline-flex" }}
      animate={{ y: [0, -3, 0], scale: [1, 1.12, 1] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
    >
      <Layers {...p} />
    </motion.span>
  );
}

export function ExperiencesIcon() {
  return (
    <motion.span
      style={{ display: "inline-flex" }}
      animate={{ rotate: [0, -8, 8, -4, 0], scale: [1, 1.15, 1] }}
      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
    >
      <Trophy {...p} />
    </motion.span>
  );
}

export function ProjectsIcon() {
  return (
    <motion.span
      style={{ display: "inline-flex" }}
      animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5, ease: "easeOut" }}
    >
      <Rocket {...p} />
    </motion.span>
  );
}

export function ContactIcon() {
  return (
    <motion.span
      style={{ display: "inline-flex" }}
      animate={{ scale: [1, 1.18, 1], rotate: [0, -6, 6, 0] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
    >
      <Mail {...p} />
    </motion.span>
  );
}
