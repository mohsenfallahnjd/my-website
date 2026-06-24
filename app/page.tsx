"use client";

import { Button, Stack, Typography } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import ExperienceIcon from "@/components/ExperienceIcon";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToast from "@/components/ScrollToast";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { ContactIcon, ExperiencesIcon, ProjectsIcon, SkillsIcon } from "@/components/SectionIcon";
import ServiceCard from "@/components/ServiceCard";
import Playground from "@/components/playground/Playground";
import StackMarquee from "@/components/StackMarquee";
import { experiences } from "@/public/content/experiences";
import { projects } from "@/public/content/projects";
import { services } from "@/public/content/services";

export default function Home() {
  const heroVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const heroItemVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.05 }}>
      <CustomCursor />
      <ScrollToast />
      <Stack component="main" gap={25}>
        <Header />

        <motion.div
          className="container hero"
          style={{ marginTop: "-120px" }}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <Stack direction="column" spacing={0}>
            {/* eyebrow + badge */}
            <motion.div
              variants={heroItemVariants}
              style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#0000ff",
                  opacity: 0.7,
                }}
              >
                Front-end Developer
              </p>
              <motion.a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 12px",
                  borderRadius: 999,
                  border: "1.5px solid #16a34a",
                  color: "#16a34a",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                whileHover={{ scale: 1.05, backgroundColor: "#16a34a", color: "#fff" }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a", display: "inline-block" }}
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                Open to work
              </motion.a>
            </motion.div>

            {/* display name */}
            <motion.div variants={heroItemVariants} style={{ overflow: "hidden", marginTop: 8 }}>
              <motion.span
                style={{
                  display: "inline-flex",
                  fontSize: "clamp(3.5rem, 12vw, 7.5rem)",
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "#0000ff",
                }}
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
              >
                {"Mohsen".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    style={{ display: "inline-block" }}
                    variants={{
                      hidden: { opacity: 0, y: 60 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.6rem)",
                  fontWeight: 300,
                  letterSpacing: "0.06em",
                  color: "#0000ff",
                  opacity: 0.45,
                  marginLeft: 16,
                  verticalAlign: "middle",
                }}
              >
                Fallahnejad
              </motion.span>
            </motion.div>

            {/* thin divider */}
            <motion.div
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
              }}
              style={{ height: 1.5, background: "rgba(0,0,255,0.15)", margin: "16px 0", transformOrigin: "left" }}
            />

            {/* one-liner */}
            <motion.p
              variants={heroItemVariants}
              style={{ margin: 0, fontSize: "1rem", color: "#555", lineHeight: 1.9, maxWidth: 520 }}
            >
              {"I obsess over "}
              <motion.span
                style={{ display: "inline-block", color: "#0000ff", fontWeight: 600 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3 }}
              >
                clean
              </motion.span>
              {", "}
              <motion.span
                style={{ display: "inline-block", color: "#0000ff", fontWeight: 600 }}
                animate={{ scaleX: [1, 1.18, 1] }}
                transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3.3 }}
              >
                fast
              </motion.span>
              {" interfaces — the kind users don't notice because they just work. Powered by "}
              <motion.span
                style={{ display: "inline-block" }}
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
              >
                ⚛️
              </motion.span>
              {" React & Next.js. Off the clock: "}
              <motion.span
                style={{ display: "inline-block" }}
                animate={{ rotate: [0, -20, 20, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2.5 }}
              >
                🎮
              </motion.span>
              {" games keep me sane, "}
              <motion.span
                style={{ display: "inline-block" }}
                animate={{ x: [0, 5, -5, 3, 0], rotate: [0, 12, -12, 6, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
              >
                ⚽
              </motion.span>
              {" soccer keeps me humble."}
            </motion.p>

            {/* CTAs */}
            <motion.div
              style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}
              variants={heroItemVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button href="#contact" variant="contained" color="secondary">
                  Let's work together
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button href="#projects" variant="outlined">
                  See my work
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  href="/Mohammad-Mohsen-Fallahnejad-Resume-Jun2026.pdf"
                  variant="text"
                  target="_blank"
                  rel="noreferrer"
                  download="/Mohammad-Mohsen-Fallahnejad-Resume-Jun2026.pdf"
                  sx={{ color: "text.secondary" }}
                >
                  Resume ↓
                </Button>
              </motion.div>
            </motion.div>

            {/* stats */}
            <motion.div
              variants={heroItemVariants}
              style={{ display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap" }}
            >
              {[
                { value: "8+", label: "Years exp." },
                { value: "20+", label: "Projects" },
                { value: "∞", label: "Coffee" },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ margin: 0, fontSize: "1.5rem", fontWeight: 800, color: "#0000ff", lineHeight: 1 }}>
                    {s.value}
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: "0.75rem",
                      color: "#888",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* scroll cue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 48, color: "#aaa" }}
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}
              >
                <span style={{ width: 1, height: 24, background: "#aaa", display: "block" }} />
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Scroll</span>
            </motion.div>
          </Stack>
        </motion.div>

        <Section title="My Stack" subtitle="Tools I reach for every day." icon={<SkillsIcon />}>
          <StackMarquee />
        </Section>

        <Section title="Where I've Been" subtitle="Companies and roles that shaped how I think and build." icon={<ExperiencesIcon />}>
          <Stack direction="column" gap={5}>
            {experiences.map((e, index) => (
              <motion.div
                key={e.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.04, delayChildren: index * 0.05 } },
                }}
              >
                <Stack direction={{ sm: "row" }} justifyContent="space-between" gap={2}>
                  <Stack gap={0.5}>
                    <Typography variant="h6" fontWeight={800} sx={{ display: "flex", flexWrap: "wrap" }}>
                      {e.company.split("").map((char, i) => (
                        <motion.span
                          key={i}
                          style={{ display: "inline-block", whiteSpace: "pre" }}
                          variants={{
                            hidden: { opacity: 0, y: 16 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </Typography>
                    <motion.div
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
                      }}
                    >
                      <Typography variant="body1">{e.description}</Typography>
                      <ExperienceIcon icon={e.icon} />
                    </motion.div>
                  </Stack>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.4, delay: 0.2 } },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="body2" fontWeight={300}>
                        {e.startDate}
                      </Typography>
                      <Typography variant="body2">-</Typography>
                      <Typography variant="body2" fontWeight={300}>
                        {e.endDate}
                      </Typography>
                    </Stack>
                  </motion.div>
                </Stack>
              </motion.div>
            ))}
          </Stack>
        </Section>

        <Section id="products" title="Live Products" subtitle="Real apps solving real problems — built and maintained by me." icon={<ProjectsIcon />}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </Section>

        <Section id="projects" title="What I Ship" subtitle="Open-source work, side projects, and things I'm proud of." icon={<ProjectsIcon />}>
          <style>{`
            .bento-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 4px; }
            .bento-grid .bento-large { grid-column: span 1; }
            .bento-grid .bento-wide  { grid-column: span 1; }
            .bento-grid .bento-small { grid-column: span 1; }
            @media (min-width: 640px) {
              .bento-grid { grid-template-columns: repeat(2, 1fr); }
              .bento-grid .bento-large { grid-column: span 2; }
            }
            @media (min-width: 960px) {
              .bento-grid { grid-template-columns: repeat(3, 1fr); }
              .bento-grid .bento-large { grid-column: span 2; }
              .bento-grid .bento-wide  { grid-column: span 3; }
            }
          `}</style>
          <div className="bento-grid">
            {projects.map((p, i) => {
              // rows: [2+1] [1+1+1] [2+1] [3] [1+1+1] [1+2] [3]
              const size =
                i === 0
                  ? "large"
                  : // row1: span2
                    i === 5
                    ? "large"
                    : // row3: span2
                      i === 7
                      ? "wide"
                      : // row4: span3
                        i === 12
                        ? "large"
                        : // row6: span2
                          i === 13
                          ? "wide"
                          : // row7: span3
                            "small";
              return (
                <ProjectCard
                  key={p.name}
                  index={i}
                  title={p.name}
                  description={p.description}
                  href={p.repo}
                  demo={p.demo}
                  technologies={p.technologies}
                  size={size}
                />
              );
            })}
          </div>
        </Section>

        <Section id="playground" title="Dev Playground" subtitle="Build your card, find bugs, or discover what kind of dev you are. Shareable.">
          <Playground />
        </Section>

        <Section
          id="contact"
          title="Let's Talk"
          subtitle="I reply fast. Let's figure out if we're a good fit."
          icon={<ContactIcon />}
          sx={{
            mb: "-170px",
          }}
        >
          <style>{`
            .contact-links a { flex: 1 1 auto; }
            @media (min-width: 600px) { .contact-links a { flex: 0 1 auto; } }
          `}</style>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            style={{ display: "flex", flexDirection: "column", gap: 40 }}
          >
            {/* big CTA */}
            <div>
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  color: "#0a0a0a",
                }}
              >
                Got a project in mind?
                <br />
                <span style={{ color: "#0000ff" }}>Let's build it.</span>
              </p>
              <p style={{ margin: 0, fontSize: "1rem", color: "#777", maxWidth: 420 }}>
                I'm open to full-time roles, freelance work, and interesting collaborations.
              </p>
            </div>

            {/* contact links */}
            <div className="contact-links" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                { label: "hi@themohsen.me", href: "mailto:hi@themohsen.me", icon: "✉" },
                { label: "@mohsenfallahnjd", href: "https://www.linkedin.com/in/mohsenfallahnjd/", icon: "in" },
                { label: "@themohsenme", href: "https://x.com/themohsenme", icon: "𝕏" },
              ].map(({ label, href, icon }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  whileHover={{ y: -3 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 20px",
                    borderRadius: 14,
                    border: "1.5px solid rgba(0,0,0,0.1)",
                    background: "#fff",
                    color: "#0a0a0a",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#0000ff";
                    e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  }}
                >
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      color: "#0000ff",
                      minWidth: 20,
                      textAlign: "center",
                    }}
                  >
                    {icon}
                  </span>
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </Section>

        <Footer />
      </Stack>
    </motion.div>
  );
}
