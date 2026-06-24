"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const ROLES = ["Frontend Dev", "Backend Dev", "Fullstack Dev", "UI/UX Designer", "DevOps Engineer", "Mobile Dev", "Tech Lead"];
const TECHS = ["React", "Next.js", "TypeScript", "Vue", "Node.js", "Python", "Docker", "Tailwind", "GraphQL", "Rust", "Go", "Swift"];

const ROLE_TAGS: Record<string, string[]> = {
  "Frontend Dev":   ["pixel perfectionist", "CSS whisperer", "animation nerd", "UI obsessed"],
  "Backend Dev":    ["database whisperer", "API architect", "latency slayer", "the server never lies"],
  "Fullstack Dev":  ["end-to-end enjoyer", "context switcher pro", "ships full products", "no blockers"],
  "UI/UX Designer": ["empathy-driven", "figma native", "user advocate", "whitespace master"],
  "DevOps Engineer":["yaml lord", "k8s tamer", "ships at 2am", "on-call survivor"],
  "Mobile Dev":     ["swipe genius", "offline-first", "gesture master", "plays the long game"],
  "Tech Lead":      ["unblocks teams", "docs evangelist", "mentors by doing", "sees 3 steps ahead"],
};

const FUN_LINES = [
  "ships clean code, ships fast.",
  "turns coffee into features.",
  "breaks things, then fixes them better.",
  "makes the complex look simple.",
  "writes code people actually enjoy reading.",
  "the kind of dev you want on the team.",
  "builds things that just work.",
  "leaves codebases better than found.",
];

function pickLine(name: string, role: string): string {
  const seed = (name.length + role.length) % FUN_LINES.length;
  return FUN_LINES[seed];
}

function pickTag(role: string, name: string): string {
  const tags = ROLE_TAGS[role] ?? ["ships great code"];
  return tags[(name.length) % tags.length];
}

export default function DevCardGenerator() {
  const [name, setName] = useState("");
  const [role, setRole] = useState(ROLES[0]);
  const [stack, setStack] = useState<string[]>(["React", "TypeScript"]);
  const [loading, setLoading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-60, 60], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-60, 60], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const toggleTech = (t: string) =>
    setStack((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : prev.length < 4 ? [...prev, t] : prev
    );

  const getImage = async (): Promise<string> => {
    const { toPng } = await import("html-to-image");
    return toPng(cardRef.current!, { pixelRatio: 2 });
  };

  const download = async () => {
    setLoading(true);
    const dataUrl = await getImage();
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `${(name || "dev-card").toLowerCase().replace(/\s+/g, "-")}.png`;
    a.click();
    setLoading(false);
  };

  const share = async () => {
    setLoading(true);
    try {
      const dataUrl = await getImage();
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], "dev-card.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: `${name || "My"} Dev Card`, text: "Generated at themohsen.me" });
      } else {
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = `${(name || "dev-card").toLowerCase().replace(/\s+/g, "-")}.png`;
        a.click();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", gap: 40, flexWrap: "wrap", alignItems: "flex-start" }}>
      {/* form */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1, minWidth: 240 }}>
        <div>
          <label style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: 6 }}>Your name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. John Doe"
            maxLength={24}
            style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid rgba(0,0,0,0.12)", fontSize: "0.9rem", outline: "none", fontFamily: "inherit" }}
          />
        </div>
        <div>
          <label style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: 6 }}>Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid rgba(0,0,0,0.12)", fontSize: "0.9rem", outline: "none", fontFamily: "inherit", background: "#fff" }}
          >
            {ROLES.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: 8 }}>
            Stack <span style={{ opacity: 0.5 }}>(pick up to 4)</span>
          </label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {TECHS.map((t) => (
              <motion.button
                key={t}
                onClick={() => toggleTech(t)}
                animate={{
                  background: stack.includes(t) ? "#0000ff" : "#fff",
                  borderColor: stack.includes(t) ? "#0000ff" : "rgba(0,0,0,0.12)",
                  color: stack.includes(t) ? "#fff" : "#555",
                  scale: stack.includes(t) ? 1.05 : 1,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.15 }}
                style={{
                  padding: "5px 12px", borderRadius: 999, fontSize: "0.78rem", fontWeight: 600,
                  border: "1.5px solid", cursor: "pointer",
                }}
              >{t}</motion.button>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <motion.button onClick={share} whileTap={{ scale: 0.97 }} disabled={loading}
            style={{ flex: 1, padding: "11px 16px", borderRadius: 999, background: "#0000ff", color: "#fff", fontWeight: 700, fontSize: "0.85rem", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
            {loading ? "…" : "Share 🔗"}
          </motion.button>
          <motion.button onClick={download} whileTap={{ scale: 0.97 }} disabled={loading}
            style={{ flex: 1, padding: "11px 16px", borderRadius: 999, background: "#0a0a0a", color: "#fff", fontWeight: 700, fontSize: "0.85rem", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
            {loading ? "…" : "Download ↓"}
          </motion.button>
        </div>
      </div>

      {/* card — no key, never remounts */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          flex: 1, minWidth: 260, maxWidth: 340,
          perspective: 800,
          rotateX, rotateY,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.02 }}
      >
        <div
          ref={cardRef}
          style={{
            background: "#0a0a0a", borderRadius: 20,
            padding: "32px 28px", color: "#fff",
            position: "relative", overflow: "hidden",
            boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
          }}
        >
          {/* breathing orb */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.12, 0.28, 0.12] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", top: -50, right: -50, width: 180, height: 180, borderRadius: "50%", background: "#0000ff", filter: "blur(50px)", pointerEvents: "none" }}
          />
          {/* second orb bottom-left */}
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.14, 0.06] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ position: "absolute", bottom: -30, left: -30, width: 120, height: 120, borderRadius: "50%", background: "#4f46e5", filter: "blur(40px)", pointerEvents: "none" }}
          />

          <div style={{ position: "relative" }}>
            {/* avatar */}
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
              style={{ width: 44, height: 44, borderRadius: 12, background: "#0000ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: 20, cursor: "default" }}
            >
              🧑‍💻
            </motion.div>

            {/* name — animates text change with a quick flash */}
            <motion.h3
              animate={{ opacity: [0.5, 1] }}
              transition={{ duration: 0.2 }}
              key={name}
              style={{ margin: "0 0 4px", fontSize: "1.4rem", fontWeight: 900, letterSpacing: "-0.03em" }}
            >
              {name || "Your Name"}
            </motion.h3>

            {/* role */}
            <motion.p
              animate={{ opacity: [0.4, 1], y: [4, 0] }}
              transition={{ duration: 0.2 }}
              key={role}
              style={{ margin: "0 0 20px", fontSize: "0.85rem", color: "#0055ff", fontWeight: 600 }}
            >{role}</motion.p>

            {/* stack tags with AnimatePresence for enter/exit */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28, minHeight: 28 }}>
              <AnimatePresence mode="popLayout">
                {stack.map((t) => (
                  <motion.span
                    key={t}
                    layout
                    initial={{ opacity: 0, scale: 0.6, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: -6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    style={{ padding: "4px 10px", borderRadius: 999, background: "rgba(255,255,255,0.08)", fontSize: "0.72rem", fontWeight: 600, border: "1px solid rgba(255,255,255,0.12)", display: "inline-block" }}
                  >{t}</motion.span>
                ))}
              </AnimatePresence>
            </div>

            {/* personality line + role tag */}
            <motion.div
              key={`${name}-${role}`}
              animate={{ opacity: [0.3, 1], y: [4, 0] }}
              transition={{ duration: 0.25 }}
              style={{ marginBottom: 16 }}
            >
              <span style={{
                display: "inline-block", padding: "3px 9px", borderRadius: 999,
                background: "rgba(0,0,255,0.25)", border: "1px solid rgba(0,0,255,0.4)",
                fontSize: "0.62rem", fontWeight: 700, color: "#7ba0ff",
                letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8,
              }}>
                {pickTag(role, name)}
              </span>
              <p style={{ margin: 0, fontSize: "0.78rem", color: "#aaa", lineHeight: 1.5, fontStyle: "italic" }}>
                &ldquo;{pickLine(name, role)}&rdquo;
              </p>
            </motion.div>

            <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 14 }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 18, height: 18, borderRadius: 5, background: "#0000ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", fontWeight: 900, color: "#fff" }}>M</div>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#fff", letterSpacing: "0.02em" }}>themohsen.me</span>
              </div>
              <span style={{ fontSize: "0.58rem", color: "#555", letterSpacing: "0.06em" }}>DEV CARD</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
