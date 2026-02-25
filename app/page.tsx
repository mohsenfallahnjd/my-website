"use client";

import { Button, Stack, Typography } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { experiences } from "@/public/content/experiences";
import { projects } from "@/public/content/projects";
import { skills } from "@/public/content/skills";

export default function Home() {
  const _heroVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const heroItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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

  const skillsVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Stack component="main" gap={25}>
        <Header />

        <Stack className="container hero" style={{ paddingTop: 40, paddingBottom: 24 }} direction="column" spacing={2}>
          <motion.h1 variants={heroItemVariants}>
            Hello, I'm{" "}
            <motion.span
              style={{ color: "#0000FF" }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.2 }}
            >
              Mohsen
            </motion.span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              {" "}
              👋
            </motion.span>
          </motion.h1>
          <motion.p variants={heroItemVariants}>
            I'm a{" "}
            <motion.span style={{ color: "#0000FF" }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              Front-End
            </motion.span>{" "}
            Developer focused on React & Next.js. I like clean, fast, minimal UIs. Outside of code: games 🎮 , soccer
            ⚽, learning and building useful tools.
          </motion.p>
          <motion.div style={{ display: "flex", gap: 12, marginTop: 16 }} variants={heroItemVariants}>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button href="#projects" variant="contained" color="secondary">
                See my work
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                href="/Mohammad-Mohsen-Fallahnejad-Resume-Sep2025.pdf"
                variant="outlined"
                target="_blank"
                rel="noreferrer"
                download="/Mohammad-Mohsen-Fallahnejad-Resume-Sep2025.pdf"
              >
                Resume
              </Button>
            </motion.div>
          </motion.div>
        </Stack>

        <Section title="I've worked with">
          <motion.div
            className="icon-row"
            variants={skillsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skills.map((s, index) => (
              <motion.span key={s} className="icon" variants={skillVariants} whileHover="hover" custom={index}>
                {s}
              </motion.span>
            ))}
          </motion.div>
        </Section>

        <Section title="Experiences">
          <Stack direction="column" gap={5}>
            {experiences.map((e, index) => (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Stack direction={{ sm: "row" }} justifyContent="space-between" gap={2}>
                  <Stack gap={0.5}>
                    <Typography variant="h6" fontWeight={800}>
                      {e.company}
                    </Typography>
                    <Typography variant="body1">{e.description}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" fontWeight={300}>
                      {e.startDate}
                    </Typography>
                    <Typography variant="body2">-</Typography>
                    <Typography variant="body2" fontWeight={300}>
                      {e.endDate}
                    </Typography>
                  </Stack>
                </Stack>
              </motion.div>
            ))}
          </Stack>
        </Section>

        <Section id="projects" title="Things I've built">
          <Stack direction="column" gap={6} mt={1}>
            {projects.map((p, index) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProjectCard
                  title={p.name}
                  description={p.description}
                  href={p.repo}
                  demo={p.demo}
                  technologies={p.technologies}
                />
              </motion.div>
            ))}
          </Stack>
        </Section>

        <Section id="contact" title="Say hi">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="muted">
              Reach me on LinkedIn{" "}
              <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Link href="https://www.linkedin.com/in/mohsenfallahnjd/" target="_blank" rel="noreferrer">
                  @mohsenfallahnjd
                </Link>
              </motion.span>{" "}
              <br />
              or email me at{" "}
              <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Link href="mailto:mohsenfallahnjd@gmail.com" target="_blank" rel="noreferrer">
                  mohsenfallahnjd@gmail.com
                </Link>
              </motion.span>
            </p>
          </motion.div>
        </Section>

        <Footer />
      </Stack>
    </motion.div>
  );
}
