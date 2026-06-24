"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const bugs = [
  {
    code: [`function greet(name) {`, `  return "Hello, " + Name;`, `}`],
    bugLine: 1,
    hint: "`Name` should be `name` — JS is case-sensitive.",
  },
  {
    code: [`const nums = [1, 2, 3];`, `const doubled = nums.map(n => n * 3);`],
    bugLine: 1,
    hint: "Multiply by `2` not `3` to double.",
  },
  {
    code: [`async function fetchUser() {`, `  const res = await fetch('/api/user');`, `  return res.json;`, `}`],
    bugLine: 2,
    hint: "`res.json` is a method — needs `()` to call it.",
  },
  {
    code: [`const isAdult = (age) => {`, `  if (age > 18) return true;`, `  return false;`, `}`],
    bugLine: 1,
    hint: "Should be `>= 18` — 18-year-olds are adults too.",
  },
  {
    code: [`for (let i = 0; i <= arr.length; i++) {`, `  console.log(arr[i]);`, `}`],
    bugLine: 0,
    hint: "`<= arr.length` causes an off-by-one — use `< arr.length`.",
  },
  {
    code: [`const [count, setCount] = useState(0);`, `setCount(count + 1);`, `setCount(count + 1);`, `// expected: 2, got: 1`],
    bugLine: 1,
    hint: "Stale closure — use `setCount(c => c + 1)` for sequential updates.",
  },
  {
    code: [`useEffect(() => {`, `  fetchData();`, `}, [fetchData]);`, `// infinite loop`],
    bugLine: 2,
    hint: "`fetchData` recreates every render — wrap it in `useCallback` or move it inside the effect.",
  },
  {
    code: [`const obj = { a: 1 };`, `const copy = obj;`, `copy.a = 99;`, `console.log(obj.a); // 99`],
    bugLine: 1,
    hint: "`copy = obj` copies the reference, not the value. Use `{ ...obj }` or `Object.assign`.",
  },
  {
    code: [`async function load() {`, `  const data = fetch('/api/data');`, `  return data.json();`, `}`],
    bugLine: 1,
    hint: "Missing `await` before `fetch(...)` — `data` is a Promise, not a Response.",
  },
  {
    code: [`const arr = [3, 10, 2, 1];`, `arr.sort();`, `// expected [1, 2, 3, 10]`, `// got     [1, 10, 2, 3]`],
    bugLine: 1,
    hint: "`Array.sort()` sorts lexicographically by default. Use `arr.sort((a, b) => a - b)`.",
  },
  {
    code: [`if (user.role = "admin") {`, `  grantAccess();`, `}`],
    bugLine: 0,
    hint: "Single `=` is assignment, not comparison. Use `===`.",
  },
  {
    code: [`const val = null;`, `console.log(val.toString());`],
    bugLine: 1,
    hint: "Calling `.toString()` on `null` throws TypeError. Check `val != null` first.",
  },
];

const ROUND = 5;

function pickBugs() {
  const shuffled = [...bugs].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, ROUND);
}

export default function BugGame() {
  const [round] = useState(() => pickBugs());
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const bug = round[current];

  const guess = (line: number) => {
    if (selected !== null) { return; }
    setSelected(line);
    const correct = line === bug.bugLine;
    if (correct) { setScore((s) => s + 1); }
    setResults((r) => [...r, correct]);
  };

  const next = () => {
    if (current + 1 >= round.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const reset = () => {
    setCurrent(0); setSelected(null); setScore(0); setDone(false); setResults([]);
  };

  const shareScore = async (score: number) => {
    const emoji = score === ROUND ? "🏆" : score >= 3 ? "😎" : "😅";
    const scoreEmojis = results.map((r) => r ? "✅" : "❌").join("");
    const text = `${emoji} I found ${score}/5 bugs on themohsen.me!\n${scoreEmojis}\n\nCan you beat me? → themohsen.me`;
    if (navigator.share) {
      await navigator.share({ text, title: "Guess the Bug", url: "https://themohsen.me" });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    }
  };

  if (done) {
    const emoji = score === ROUND ? "🏆" : score >= 3 ? "😎" : "😅";
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{ fontSize: "3rem", marginBottom: 12 }}>{emoji}</div>
        <h3 style={{ margin: "0 0 8px", fontSize: "1.6rem", fontWeight: 900 }}>{score}/{ROUND} bugs found</h3>
        <p style={{ color: "#777", marginBottom: 24 }}>
          {score === ROUND ? "Perfect! You have the eyes of a debugger." : score >= 3 ? "Solid! You know your way around a codebase." : "Keep hunting — bugs are sneaky."}
        </p>
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 28 }}>
          {results.map((r, i) => <span key={i} style={{ fontSize: "1.2rem" }}>{r ? "✅" : "❌"}</span>)}
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          <motion.button whileTap={{ scale: 0.97 }} onClick={() => shareScore(score)} style={{ padding: "10px 20px", borderRadius: 999, background: "#0000ff", color: "#fff", fontWeight: 700, border: "none", cursor: "pointer", fontSize: "0.85rem" }}>
            Share score 🔗
          </motion.button>
          <motion.button whileTap={{ scale: 0.97 }} onClick={reset} style={{ padding: "10px 20px", borderRadius: 999, background: "rgba(0,0,0,0.06)", color: "#444", fontWeight: 700, border: "none", cursor: "pointer", fontSize: "0.85rem" }}>
            Play again
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Bug {current + 1} of {ROUND}
        </span>
        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0000ff" }}>Score: {score}</span>
      </div>

      <p style={{ margin: 0, fontSize: "0.9rem", color: "#444", fontWeight: 500 }}>
        Click the line with the bug 👇
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          style={{ background: "#0f0f0f", borderRadius: 14, overflow: "hidden" }}
        >
          {bug.code.map((line, i) => (
            <motion.div
              key={i}
              onClick={() => guess(i)}
              whileHover={selected === null ? { backgroundColor: "rgba(0,0,255,0.15)" } : {}}
              style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "10px 20px",
                cursor: selected === null ? "pointer" : "default",
                background: selected !== null
                  ? i === bug.bugLine ? "rgba(0,200,0,0.12)"
                  : selected === i ? "rgba(200,0,0,0.12)" : "transparent"
                  : "transparent",
                borderLeft: selected !== null && i === bug.bugLine ? "3px solid #16a34a"
                  : selected === i && i !== bug.bugLine ? "3px solid #e55" : "3px solid transparent",
                transition: "background 0.2s",
              }}
            >
              <span style={{ color: "#444", fontSize: "0.72rem", minWidth: 16, userSelect: "none" }}>{i + 1}</span>
              <code style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#e5e5e5" }}>{line}</code>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {selected !== null && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <p style={{ margin: 0, fontSize: "0.82rem", color: "#555", flex: 1 }}>
            💡 {bug.hint}
          </p>
          <motion.button whileTap={{ scale: 0.97 }} onClick={next} style={{ padding: "8px 20px", borderRadius: 999, background: "#0000ff", color: "#fff", fontWeight: 700, border: "none", cursor: "pointer", fontSize: "0.82rem", flexShrink: 0 }}>
            {current + 1 >= bugs.length ? "See results →" : "Next bug →"}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
