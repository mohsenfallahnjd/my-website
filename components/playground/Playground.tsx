"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import BugGame from "./BugGame";
import DevCardGenerator from "./DevCardGenerator";
import DevQuiz from "./DevQuiz";

const tabs = [
  { id: "card", label: "🪪 Dev Card", desc: "Generate your card" },
  { id: "bug", label: "🐛 Guess the Bug", desc: "Find bugs in code" },
  { id: "quiz", label: "🧠 Quiz", desc: "What dev are you?" },
];

export default function Playground() {
  const [active, setActive] = useState("card");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* tabs */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: "9px 18px", borderRadius: 999,
              border: `1.5px solid ${active === tab.id ? "#0000ff" : "rgba(0,0,0,0.1)"}`,
              background: active === tab.id ? "#0000ff" : "#fff",
              color: active === tab.id ? "#fff" : "#555",
              fontWeight: 600, fontSize: "0.85rem",
              cursor: "pointer", transition: "all 0.2s",
            }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* content */}
      <div style={{ background: "#f8f8f8", borderRadius: 20, padding: "32px 28px", minHeight: 300 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {active === "card" && <DevCardGenerator />}
            {active === "bug" && <BugGame />}
            {active === "quiz" && <DevQuiz />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
