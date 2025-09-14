"use client";

import { Box, Stack, type StackProps, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { fontSecondary } from "@/theme/theme";

export default function Section({
  id,
  title,
  children,
  ...props
}: StackProps & {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Stack className="container" gap={2} flex={1} {...props}>
      <Box id={id} sx={{ scrollMarginTop: 100 }} />

      <Stack spacing={1}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ fontWeight: 300, fontFamily: fontSecondary.style.fontFamily, color: "#0000ff" }}
        >
          {title}
        </Typography>
        <hr />
      </Stack>
      {children}
    </Stack>
  );
}
