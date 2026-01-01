'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center size-10 rounded-full bg-background-4 cursor-pointer dark:bg-background-6 hover:bg-background-3 dark:hover:bg-background-5 transition-all duration-300 border border-stroke-1 dark:border-stroke-7"
      aria-label={`Passer au mode ${theme === 'light' ? 'sombre' : 'clair'}`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-secondary dark:text-accent" />
      ) : (
        <Sun className="w-5 h-5 text-secondary dark:text-accent" />
      )}
    </button>
  );
}
