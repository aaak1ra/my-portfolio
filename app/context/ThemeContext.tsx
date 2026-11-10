"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always start as "dark" — this MUST match what the server renders,
  // or React throws a hydration error. We correct it right after mount.
  const [theme, setTheme] = useState<Theme>("dark");

  // Runs once, right after the page mounts in the browser.
  // This only restores a theme chosen during this visit; a new visit is always dark.
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("theme");
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem("theme", theme);
    } catch (e) {
      // ignore
    }
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme() must be used inside a <ThemeProvider>");
  }
  return ctx;
}