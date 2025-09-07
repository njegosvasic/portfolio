// src/components/Header.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 backdrop-blur border-b border-black/5 dark:border-white/10 transition-all",
        scrolled ? "bg-[var(--background)]/95 shadow-md" : "bg-[var(--background)]/90",
      ].join(" ")}
    >
      {/* Gornja traka */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 h-16 min-[1600px]:h-18 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            priority
            className="block h-10 w-10 min-[1600px]:h-12 min-[1600px]:w-12 object-contain"
          />
        </Link>

        {/* Desktop navigacija */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm lg:text-base min-[1600px]:text-lg hover:text-gray-900 dark:hover:text-gray-200">
            Home
          </Link>
          <Link href="/projects" className="text-sm lg:text-base min-[1600px]:text-lg hover:text-gray-900 dark:hover:text-gray-200">
            Work
          </Link>
          <Link href="/about" className="text-sm lg:text-base min-[1600px]:text-lg hover:text-gray-900 dark:hover:text-gray-200">
            About
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full text-sm lg:text-base min-[1600px]:text-lg min-[1600px]:px-5 min-[1600px]:py-2.5 hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile kontrole */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/30 dark:focus:ring-white/30"
          >
            <svg viewBox="0 0 24 24" className={`h-5 w-5 ${open ? "hidden" : "block"}`} fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg viewBox="0 0 24 24" className={`h-5 w-5 ${open ? "block" : "hidden"}`} fill="none">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile meni sa animacijom */}
      <div
        aria-hidden={!open}
        className={[
          "md:hidden overflow-hidden will-change-[max-height,opacity,transform]",
          "transition-[max-height,opacity,transform] duration-300 ease-out",
          open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1",
        ].join(" ")}
      >
        <nav className="px-4 pb-4">
          <div className="flex flex-col items-center gap-3">
            <Link href="/" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 w-fit">
              Home
            </Link>
            <Link href="/projects" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 w-fit">
              Work
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 w-fit">
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 w-fit"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
