import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { experiences } from "@/public/content/experiences";
import { projects } from "@/public/content/projects";
import { skills } from "@/public/content/skills";

export default function Home() {
  return (
    <Stack component="main" gap={25}>
      <Header />
      <Stack className="container hero" style={{ paddingTop: 40, paddingBottom: 24 }} direction="column" spacing={2}>
        <h1>
          Hello, I'm <span style={{ color: "#0000FF" }}>Mohsen</span>
          <span> 👋</span>
        </h1>
        <p>
          I’m a <span style={{ color: "#0000FF" }}>Front-End</span> Developer focused on React & Next.js. I like clean,
          fast, minimal UIs. Outside of code: games 🎮 , soccer ⚽, learning and building useful tools.
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

      <Section title="Experiences">
        <Stack direction="column" gap={5}>
          {experiences.map((e) => (
            <Stack key={e.company} direction={{ sm: "row" }} justifyContent="space-between" gap={2}>
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
          ))}
        </Stack>
      </Section>

      <Section id="projects" title="Things I've built">
        <Stack direction="column" spacing={8}>
          {projects.map((p) => (
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
          Reach me on LinkedIn{" "}
          <Link href="https://www.linkedin.com/in/mohsenfallahnejad/" target="_blank" rel="noreferrer">
            @mohsenfallahnjd
          </Link>{" "}
          <br />
          or email me at{" "}
          <Link href="mailto:mohsenfallahnejad@gmail.com" target="_blank" rel="noreferrer">
            mohsenfallahnejad@gmail.com
          </Link>
        </p>
      </Section>

      <Footer />
    </Stack>
  );
}
