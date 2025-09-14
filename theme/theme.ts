"use client";

import { alpha, createTheme } from "@mui/material/styles";
import { Fredoka, Poppins } from "next/font/google";

export const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const fontSecondary = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
});

const fontFamily = [font.style.fontFamily, fontSecondary.style.fontFamily];

const BLUE = "#0000FF"; // HTML blue

const theme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#ffffff" },
    primary: { main: "#0f172a" }, // text emphasis (slate-900)
    secondary: { main: BLUE }, // darker HTML blue
    text: { primary: "#0f172a", secondary: "#475569" },
    divider: "#e5e7eb",
  },
  shape: { borderRadius: 10 },
  typography: { fontFamily: fontFamily.join(",") },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: "medium",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 5,
          textTransform: "none",
          paddingInline: 14,
          fontWeight: 700,
        }),
        textSecondary: ({ theme }) => ({
          color: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: alpha(theme.palette.secondary.main, 0.06),
          },
        }),
        outlined: ({ theme }) => ({
          borderColor: theme.palette.divider,
          "&:hover": {
            borderColor: theme.palette.secondary.main,
            backgroundColor: alpha(theme.palette.secondary.main, 0.04),
          },
        }),
        containedSecondary: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: "#0000e0",
          },
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.main,
        }),
      },
    },
  },
});

export default theme;
