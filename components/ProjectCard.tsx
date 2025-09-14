"use client";

import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { fontSecondary } from "@/theme/theme";

export default function ProjectCard({
  title,
  description,
  href,
  demo,
  technologies,
  pwa,
}: {
  title: string;
  description: string;
  href?: string;
  demo?: string;
  technologies?: string[];
  pwa?: boolean;
}) {
  return (
    <Stack direction="column" spacing={1}>
      <Typography variant="h6" fontFamily={fontSecondary.style.fontFamily}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" fontFamily={fontSecondary.style.fontFamily}>
        {description}
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        {href && (
          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "underline", color: "#0000ff", fontFamily: fontSecondary.style.fontFamily }}
          >
            Source: {href}
          </Link>
        )}
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body1" color="text.secondary" fontFamily={fontSecondary.style.fontFamily}>
          Technologies:{" "}
        </Typography>
        {technologies?.map((t) => (
          <Typography
            textTransform="capitalize"
            variant="body1"
            color="text.secondary"
            key={t}
            fontFamily={fontSecondary.style.fontFamily}
          >
            {t}
          </Typography>
        ))}
      </Stack>

      {demo && (
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          component={Link}
          href={demo}
          target="_blank"
          rel="noreferrer"
        >
          <svg
            style={{ width: 16, height: 16 }}
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>
          <span>Demo</span>
        </Stack>
      )}
    </Stack>
  );
}
