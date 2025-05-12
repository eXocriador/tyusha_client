import { useState, useEffect } from "react";
import AuthModal from "./components/AuthModal";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Tyusha Clean Build</h1>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
      >
        Toggle Theme
      </button>
      <AuthModal />
    </div>
  );
}
