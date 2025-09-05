import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle"; // 👈 dodato

export default function Header() {
  return (
    <header className="w-full px-20 py-4 flex justify-between items-center sticky top-0 z-50 bg-[var(--background)]">
      {/* Logo */}
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          width={48}
          height={48}
          className="cursor-pointer"
        />
      </Link>

      {/* Navigacija + toggle */}
      <div className="flex items-center space-x-6">
        <Link
          href="/"
          className="text-base md:text-lg hover:text-gray-900 dark:hover:text-gray-200"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="text-base md:text-lg hover:text-gray-900 dark:hover:text-gray-200"
        >
          Work
        </Link>
        <Link
          href="/about"
          className="text-base md:text-lg hover:text-gray-900 dark:hover:text-gray-200"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center bg-black text-white px-5 py-2 rounded-full text-base md:text-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Contact
        </Link>

        {/* Toggle dugme */}
        <ThemeToggle />
      </div>
    </header>
  );
}
