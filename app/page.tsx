"use client";

import { Button, Stack, Typography } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import ExperienceIcon from "@/components/ExperienceIcon";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MagneticLink from "@/components/MagneticLink";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { ContactIcon, ExperiencesIcon, ProjectsIcon, SkillsIcon } from "@/components/SectionIcon";
import TypewriterBio from "@/components/TypewriterBio";
import { experiences } from "@/public/content/experiences";
import { projects } from "@/public/content/projects";
import { skills } from "@/public/content/skills";


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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.05 }}>
      <Stack component="main" gap={25}>
        <Header />

        <motion.div
          className="container hero"
          style={{ paddingTop: 40, paddingBottom: 24 }}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
        <Stack direction="column" spacing={2}>
          <motion.h1 variants={heroItemVariants}>
            Hello, I'm{" "}
            <motion.span
              style={{ display: "inline-flex", color: "#0000FF" }}
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } } }}
            >
              {"Mohsen".split("").map((char, i) => (
                <motion.span
                  key={i}
                  style={{ display: "inline-block" }}
                  variants={{
                    hidden: { opacity: 0, y: -20, rotate: -8 },
                    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 300, damping: 14 } },
                  }}
                  whileHover={{ scale: 1.3, rotate: 5, color: "#0000cc", transition: { duration: 0.15 } }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              style={{ display: "inline-block", originX: "70%", originY: "80%", cursor: "default" }}
              animate={{ rotate: [0, 20, -8, 20, -8, 0] }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.5 }}
            >
              {" "}
              👋
            </motion.span>
          </motion.h1>
          <motion.div variants={heroItemVariants}>
            <TypewriterBio />
          </motion.div>
          <motion.div style={{ display: "flex", gap: 12, marginTop: 16 }} variants={heroItemVariants}>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button href="#projects" variant="contained" color="secondary">
                See my work
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                href="/Mohammad-Mohsen-Fallahnejad-Resume-Jun2026.pdf"
                variant="outlined"
                target="_blank"
                rel="noreferrer"
                download="/Mohammad-Mohsen-Fallahnejad-Resume-Jun2026.pdf"
              >
                Resume
              </Button>
            </motion.div>
          </motion.div>
        </Stack>
        </motion.div>

        <Section title="I've worked with" icon={<SkillsIcon />}>
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

        <Section title="Experiences" icon={<ExperiencesIcon />}>
          <Stack direction="column" gap={5}>
            {experiences.map((e, index) => (
              <motion.div
                key={e.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04, delayChildren: index * 0.05 } } }}
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
                      <Typography variant="body2" fontWeight={300}>{e.startDate}</Typography>
                      <Typography variant="body2">-</Typography>
                      <Typography variant="body2" fontWeight={300}>{e.endDate}</Typography>
                    </Stack>
                  </motion.div>
                </Stack>
              </motion.div>
            ))}
          </Stack>
        </Section>

        <Section id="projects" title="Things I've built" icon={<ProjectsIcon />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <Stack direction="column" gap={6} mt={1}>
              {projects.map((p) => (
                <motion.div
                  key={p.name}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                >
                  <ProjectCard
                    index={projects.indexOf(p)}
                    title={p.name}
                    description={p.description}
                    href={p.repo}
                    demo={p.demo}
                    technologies={p.technologies}
                  />
                </motion.div>
              ))}
            </Stack>
          </motion.div>
        </Section>

        <Section id="contact" title="Say hi" icon={<ContactIcon />}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="muted">
              Find me on LinkedIn{" "}
              <MagneticLink href="https://www.linkedin.com/in/mohsenfallahnjd/">@mohsenfallahnjd</MagneticLink>
              {", "}X{" "}
              <MagneticLink href="https://x.com/themohsenme">@themohsenme</MagneticLink>
              {", or drop an email at "}
              <MagneticLink href="mailto:hi@themohsen.me">hi@themohsen.me</MagneticLink>
              .
            </p>
          </motion.div>
        </Section>

        <Footer />
      </Stack>
    </motion.div>
  );
}
