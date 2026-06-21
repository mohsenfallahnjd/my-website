"use client";

import { motion, useInView } from "framer-motion";
import { Crown, Dumbbell, Puzzle, Rocket, Sprout } from "lucide-react";
import { useRef } from "react";

const BLUE = "#0000ff";
const SIZE = 20;
const props = { size: SIZE, stroke: BLUE, strokeWidth: 1.6, color: BLUE };

function AnimatedCrown({ inView }: { inView: boolean }) {
  return (
    <motion.span style={{ display: "inline-flex" }}
      animate={inView ? { y: [0, -4, 0] } : {}}
      transition={{ delay: 0.5, duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.span style={{ display: "inline-flex" }}
        initial={{ scale: 0, rotate: -20 }} animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
      >
        <Crown {...props} />
      </motion.span>
    </motion.span>
  );
}

function AnimatedRocket({ inView }: { inView: boolean }) {
  return (
    <motion.span style={{ display: "inline-flex" }}
      animate={inView ? { y: [0, -5, 0], x: [0, 3, 0], rotate: [0, 3, 0, -3, 0] } : {}}
      transition={{ delay: 0.5, duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.span style={{ display: "inline-flex" }}
        initial={{ scale: 0, y: 10 }} animate={inView ? { scale: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
      >
        <Rocket {...props} />
      </motion.span>
    </motion.span>
  );
}

function AnimatedDumbbell({ inView }: { inView: boolean }) {
  return (
    <motion.span style={{ display: "inline-flex" }}
      animate={inView ? { rotate: [0, -12, 0] } : {}}
      transition={{ delay: 0.5, duration: 0.4, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
    >
      <motion.span style={{ display: "inline-flex" }}
        initial={{ scale: 0 }} animate={inView ? { scale: [0, 1.3, 1] } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Dumbbell {...props} />
      </motion.span>
    </motion.span>
  );
}

function AnimatedSprout({ inView }: { inView: boolean }) {
  return (
    <motion.span style={{ display: "inline-flex", originX: "50%", originY: "100%" }}
      animate={inView ? { rotate: [-4, 4, -4] } : {}}
      transition={{ delay: 0.5, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.span style={{ display: "inline-flex" }}
        initial={{ scale: 0, y: 6 }} animate={inView ? { scale: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 260, damping: 14 }}
      >
        <Sprout {...props} />
      </motion.span>
    </motion.span>
  );
}

function AnimatedPuzzle({ inView }: { inView: boolean }) {
  return (
    <motion.span style={{ display: "inline-flex" }}
      animate={inView ? { rotate: [0, 8, 0, -8, 0] } : {}}
      transition={{ delay: 0.5, duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
    >
      <motion.span style={{ display: "inline-flex" }}
        initial={{ scale: 0, rotate: 30 }} animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
      >
        <Puzzle {...props} />
      </motion.span>
    </motion.span>
  );
}

const icons: Record<string, React.FC<{ inView: boolean }>> = {
  crown: AnimatedCrown,
  rocket: AnimatedRocket,
  muscle: AnimatedDumbbell,
  sprout: AnimatedSprout,
  puzzle: AnimatedPuzzle,
};

export default function ExperienceIcon({ icon }: { icon: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const Icon = icons[icon];
  if (!Icon) { return null; }

  return (
    <span ref={ref} style={{ display: "inline-flex" }}>
      <Icon inView={inView} />
    </span>
  );
}
