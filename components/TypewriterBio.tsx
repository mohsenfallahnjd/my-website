"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { fontSecondary } from "@/theme/theme";

const FULL_TEXT = "I'm a Front-End Developer focused on React & Next.js. I like clean, fast, minimal UIs. Outside of code: games 🎮 , soccer ⚽, learning and building useful tools.";
const EMOJIS = ["🎮", "⚽"];
const DELAY = 0.9; // seconds before typing starts (after hero entrance)
const SPEED = 28; // ms per character

function EmojiSpan({ emoji }: { emoji: string }) {
  return (
    <motion.span
      style={{ display: "inline-block" }}
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {emoji}
    </motion.span>
  );
}

export default function TypewriterBio() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(FULL_TEXT.slice(0, i));
        if (i >= FULL_TEXT.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, SPEED);
      return () => clearInterval(interval);
    }, DELAY * 1000);
    return () => clearTimeout(timer);
  }, []);

  // Render text with emoji components swapped in once reached
  const renderText = () => {
    let result: React.ReactNode[] = [];
    let cursor = 0;
    for (const emoji of EMOJIS) {
      const idx = FULL_TEXT.indexOf(emoji);
      if (displayed.length > idx) {
        // text before emoji
        result.push(<span key={`t-${cursor}`}>{displayed.slice(cursor, idx)}</span>);
        result.push(<EmojiSpan key={emoji} emoji={emoji} />);
        cursor = idx + emoji.length;
      }
    }
    result.push(<span key="tail">{displayed.slice(cursor)}</span>);
    return result;
  };

  return (
    <p
      ref={scope}
      style={{ fontFamily: fontSecondary.style.fontFamily, minHeight: "3em" }}
    >
      {renderText()}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          style={{ display: "inline-block", marginLeft: 1, fontWeight: 300 }}
        >
          |
        </motion.span>
      )}
    </p>
  );
}
