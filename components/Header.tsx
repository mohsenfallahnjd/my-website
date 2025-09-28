"use client";

import { Stack } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Header() {
  const navVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.header initial="hidden" animate="visible" variants={navVariants}>
      <Stack component="nav" direction="row" justifyContent="space-between" alignItems="center" className="container">
        <Stack direction="row" spacing={2} alignItems="center">
          <motion.div variants={logoVariants}>
            <Logo size={40} />
          </motion.div>
          {/* <Typography className="brand">
            Hello, I'm Mohsen<span> 👋</span>
          </Typography> */}
        </Stack>
        <Stack className="actions" direction="row" spacing={2}>
          {[
            { href: "#projects", text: "Projects" },
            { href: "https://bitlyst.vercel.app/", text: "Blog", external: true },
            { href: "#contact", text: "Say hi" },
          ].map((link, index) => (
            <motion.div key={link.text} variants={linkVariants} custom={index} whileHover="hover">
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  transition: "color 0.2s ease",
                }}
              >
                {link.text}
              </Link>
            </motion.div>
          ))}
        </Stack>
      </Stack>
    </motion.header>
  );
}
