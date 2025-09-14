import { Button, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import projects from "@/public/built.json";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "MUI",
  "Tailwind",
  "Figma",
  "MongoDB",
  "HTML",
  "CSS",
  "Sass",
  "Git",
  "Docker",
];

const experiences = [
  {
    company: "Pouya Housh",
    description: "Senior Front-end Developer",
    startDate: "November, 2022",
    endDate: "Present",
  },
  {
    company: "Speax.ai",
    description: "Senior Front-end Developer",
    startDate: "February, 2024",
    endDate: "August, 2025",
  },
  {
    company: "Yasna Team",
    description: "Front-end Developer",
    startDate: "June, 2020",
    endDate: "September, 2023",
  },
  {
    company: "Freelance",
    description: "Front-end Developer",
    startDate: "2017",
    endDate: "2019",
  },
];

export default function Home() {
  return (
    <Stack component="main" gap={10}>
      <Header />
      <Stack className="container hero" style={{ paddingTop: 40, paddingBottom: 24 }} direction="column" spacing={2}>
        <h1>
          Hello, I'm <span style={{ color: "#0000FF" }}>Mohsen</span>
          <span> 👋</span>
        </h1>
        <p>
          I’m a <span style={{ color: "#0000FF" }}>Front-End</span> Developer focused on React & Next.js. I like clean,
          fast, minimal UIs. Outside of code: games, football, learning and building useful tools.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <Button href="#projects" variant="contained" color="secondary">
            See my work
          </Button>
          <Button
            href="/Mohammad-Mohsen-Fallahnejad-Resume.pdf"
            variant="outlined"
            target="_blank"
            rel="noreferrer"
            download="/Mohammad-Mohsen-Fallahnejad-Resume.pdf"
          >
            Resume
          </Button>
        </div>
      </Stack>

      <Section title="I've worked with">
        <div className="icon-row">
          {skills.map((s) => (
            <span key={s} className="icon">
              {s}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Experiences" sx={{ gap: 3 }}>
        {experiences.map((e) => (
          <Stack key={e.company} direction="row" justifyContent="space-between" spacing={1}>
            <Stack gap={0.5}>
              <Typography variant="h6" fontWeight={800}>
                {e.company}
              </Typography>
              <Typography variant="body1">{e.description}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="body2" fontWeight={600}>
                {e.startDate}
              </Typography>
              <Typography variant="body2">-</Typography>
              <Typography variant="body2" fontWeight={600}>
                {e.endDate}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Section>

      <Section id="projects" title="Things I've built">
        <Stack direction="column" spacing={8}>
          {projects.items.map((p) => (
            <ProjectCard
              key={p.name}
              title={p.name}
              description={p.description}
              href={p.repo}
              demo={p.demo}
              technologies={p.technologies}
              pwa={p.pwa}
            />
          ))}
        </Stack>
      </Section>

      <Section id="contact" title="Say hi">
        <p className="muted">
          DM on X/Twitter{" "}
          <a href="https://twitter.com/mohsenfallahnjd" target="_blank" rel="noreferrer">
            @mohsenfallahnjd
          </a>{" "}
          <br />
          or email me at{" "}
          <a href="mailto:mohsenfallahnejad@gmail.com" target="_blank" rel="noreferrer">
            mohsenfallahnejad@gmail.com
          </a>
          .
        </p>
      </Section>

      <Footer />
    </Stack>
  );
}
