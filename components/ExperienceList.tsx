"use client";

import { Stack, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Experience = {
  company: string;
  description: string;
  startDate: string;
  endDate: string;
};

function parseYear(date: string): number | null {
  const m = date.match(/\d{4}/);
  return m ? parseInt(m[0]) : null;
}

function CountingYear({ value, trigger }: { value: string; trigger: boolean }) {
  const year = parseYear(value);
  const [display, setDisplay] = useState(year ? year - 4 : null);

  useEffect(() => {
    if (!trigger || !year) {
      return;
    }
    let current = year - 4;
    const step = () => {
      current += 1;
      setDisplay(current);
      if (current < year) {
        setTimeout(step, 40);
      }
    };
    step();
  }, [trigger, year]);

  if (!year) {
    return <>{value}</>;
  }
  return <>{display}</>;
}

function UnderlineDraw({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <span ref={ref} style={{ position: "relative", display: "inline-block" }}>
      {text}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        style={{
          position: "absolute",
          bottom: -2,
          left: 0,
          right: 0,
          height: 2,
          background: "#0000ff",
          transformOrigin: "left",
          borderRadius: 2,
          opacity: 0.4,
        }}
      />
    </span>
  );
}

function ExperienceItem({ e, index, timelineHeight }: { e: Experience; index: number; timelineHeight: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      style={{ position: "relative", paddingLeft: 24 }}
    >
      {/* dot */}
      <motion.span
        initial={{ scale: 0 }}
        animate={inView ? { scale: [0, 1.4, 1] } : {}}
        transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
        style={{
          position: "absolute",
          left: -5,
          top: 6,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#0000ff",
          opacity: 0.5,
        }}
      />

      <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" gap={1}>
        <Stack gap={0.5}>
          <Typography variant="h6" fontWeight={800}>
            <UnderlineDraw text={e.company} />
          </Typography>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08 + 0.3 }}
          >
            <Typography variant="body1">{e.description}</Typography>
          </motion.div>
        </Stack>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.08 + 0.35 }}
        >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ whiteSpace: "nowrap" }}>
            <Typography variant="body2" fontWeight={300}>
              <CountingYear value={e.startDate} trigger={inView} />
            </Typography>
            <Typography variant="body2">-</Typography>
            <Typography variant="body2" fontWeight={300}>
              {e.endDate === "Present" ? (
                <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  Present
                </motion.span>
              ) : (
                <CountingYear value={e.endDate} trigger={inView} />
              )}
            </Typography>
          </Stack>
        </motion.div>
      </Stack>
    </motion.div>
  );
}

export default function ExperienceList({ experiences }: { experiences: Experience[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-40px" });

  return (
    <div ref={containerRef} style={{ position: "relative", paddingLeft: 16 }}>
      {/* timeline vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: 0,
          top: 8,
          bottom: 8,
          width: 2,
          background: "rgba(0,0,255,0.15)",
          transformOrigin: "top",
          borderRadius: 2,
        }}
      />

      <Stack direction="column" gap={5}>
        {experiences.map((e, i) => (
          <ExperienceItem key={e.company} e={e} index={i} timelineHeight={0} />
        ))}
      </Stack>
    </div>
  );
}
