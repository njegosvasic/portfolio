"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme(); // koristi resolvedTheme
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isLight = resolvedTheme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={[
        "group p-2 rounded-full border transition-colors",
        isLight
          ? "bg-white border-gray-300 hover:bg-black"
          : "bg-black border-gray-600 hover:bg-white",
      ].join(" ")}
    >
      {isLight ? (
        <Sun
          size={20}
          className="text-black transition-colors group-hover:text-white"
        />
      ) : (
        <Moon
          size={20}
          className="text-white transition-colors group-hover:text-black"
        />
      )}
    </button>
  );
}
