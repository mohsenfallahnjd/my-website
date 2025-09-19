"use client";

import { Stack } from "@mui/material";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header>
      <Stack component="nav" direction="row" justifyContent="space-between" alignItems="center" className="container">
        <Stack direction="row" spacing={2} alignItems="center">
          <Logo size={40} />
          {/* <Typography className="brand">
            Hello, I'm Mohsen<span> 👋</span>
          </Typography> */}
        </Stack>
        <Stack className="actions" direction="row" spacing={2}>
          <Link href="#projects">Projects</Link>
          <Link href="https://bitlyst.vercel.app/" target="_blank" rel="noreferrer">
            Blog
          </Link>
          <Link href="#contact">Say hi</Link>
        </Stack>
      </Stack>
    </header>
  );
}
