"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const questions = [
  {
    q: "It's 3am. Production is down. You:",
    options: ["Panic, then fix", "Already awake, was coding", "Check logs calmly", "Blame the intern"],
  },
  {
    q: "Your variable naming style:",
    options: ["x, y, z", "veryDescriptiveNames", "temp2, temp3", "// TODO: rename this"],
  },
  {
    q: "A PR needs review. You:",
    options: ["Approve immediately", "Leave 47 comments", "Suggest a full rewrite", "Ghost it"],
  },
  {
    q: "How do you feel about CSS?",
    options: ["Love it, it's art", "It works, don't touch it", "That's what Tailwind is for", "Why is this centered?"],
  },
  {
    q: "Your favorite debugging tool:",
    options: ["console.log everywhere", "Breakpoints like a pro", "Ask Stack Overflow", "Delete code until it works"],
  },
  {
    q: "Someone asks you to estimate a feature. You say:",
    options: ["2 days", "2 weeks", "Depends™", "Let me spike it first"],
  },
  {
    q: "Your relationship with documentation:",
    options: ["I write it religiously", "Code is the docs", "I read it never", "README.md with one line"],
  },
  {
    q: "Friday 5pm, urgent bug report. You:",
    options: ["Fix it right now", "Hotfix branch in 10min", "Create a ticket for Monday", "Disable the feature flag"],
  },
  {
    q: "You see spaghetti code in the codebase. You:",
    options: ["Refactor immediately", "Leave a TODO comment", "Add more spaghetti", "Cry, then ship around it"],
  },
  {
    q: "Meetings are:",
    options: ["Essential for alignment", "Could be an email", "My worst nightmare", "I mute and code"],
  },
];

const results = [
  { type: "The Perfectionist", emoji: "🎯", desc: "You write tests for your tests. Code reviews are your love language.", color: "#0000ff" },
  { type: "The Shipping Machine", emoji: "🚀", desc: "Done > perfect. You've pushed to main more than once today.", color: "#7c3aed" },
  { type: "The Night Owl", emoji: "🦉", desc: "Your best code ships at 2am. Morning standups are your nemesis.", color: "#0891b2" },
  { type: "The Chaos Agent", emoji: "🔥", desc: "\"It works on my machine.\" Your git history tells stories.", color: "#e55" },
  { type: "The Pragmatist", emoji: "⚖️", desc: "You pick the right tool, not the cool one. Tech debt is a budget line.", color: "#059669" },
  { type: "The Architect", emoji: "🏗️", desc: "You think in systems. Every PR ships with a diagram.", color: "#b45309" },
];

export default function DevQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  const answer = (i: number) => {
    const next = [...answers, i];
    setAnswers(next);
    if (step + 1 >= questions.length) {
      setDone(true);
    } else {
      setStep((s) => s + 1);
    }
  };

  const reset = () => { setStep(0); setAnswers([]); setDone(false); };

  const result = done ? results[answers.reduce((a, b) => a + b, 0) % results.length] : null;

  const share = async () => {
    if (!result) { return; }
    const text = `I'm "${result.type}" ${result.emoji}\n${result.desc}\n\nWhat dev are you? → themohsen.me`;
    if (navigator.share) {
      await navigator.share({ text, title: `I'm ${result.type}`, url: "https://themohsen.me" });
    } else {
      const tw = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
      window.open(tw, "_blank", "noopener");
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (done && result) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", maxWidth: 420, margin: "0 auto", padding: "20px 0" }}>
        <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5, delay: 0.2 }} style={{ fontSize: "3.5rem", marginBottom: 16 }}>{result.emoji}</motion.div>
        <p style={{ margin: "0 0 4px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa" }}>You are</p>
        <h3 style={{ margin: "0 0 12px", fontSize: "1.8rem", fontWeight: 900, letterSpacing: "-0.03em", color: result.color }}>{result.type}</h3>
        <p style={{ margin: "0 0 28px", fontSize: "0.92rem", color: "#666", lineHeight: 1.6 }}>{result.desc}</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <motion.button whileTap={{ scale: 0.97 }} onClick={share} style={{ padding: "10px 20px", borderRadius: 999, background: copied ? "#16a34a" : result.color, color: "#fff", fontWeight: 700, border: "none", cursor: "pointer", fontSize: "0.85rem", transition: "background 0.2s" }}>
            {copied ? "✓ Shared!" : "Share result 🔗"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.97 }} onClick={reset} style={{ padding: "10px 20px", borderRadius: 999, background: "rgba(0,0,0,0.06)", color: "#444", fontWeight: 700, border: "none", cursor: "pointer", fontSize: "0.85rem" }}>
            Retake
          </motion.button>
        </div>
      </motion.div>
    );
  }

  const q = questions[step];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 480 }}>
      <div style={{ display: "flex", gap: 6 }}>
        {questions.map((_, i) => (
          <div key={i} style={{ height: 3, flex: 1, borderRadius: 999, background: i <= step ? "#0000ff" : "rgba(0,0,0,0.08)", transition: "background 0.3s" }} />
        ))}
      </div>
      <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <p style={{ margin: "0 0 20px", fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", lineHeight: 1.4 }}>{q.q}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {q.options.map((opt, i) => (
            <motion.button
              key={i}
              onClick={() => answer(i)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: "12px 18px", borderRadius: 12, border: "1.5px solid rgba(0,0,0,0.1)",
                background: "#fff", textAlign: "left", fontSize: "0.88rem", fontWeight: 500,
                color: "#333", cursor: "pointer", transition: "border-color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#0000ff")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")}
            >
              {opt}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
