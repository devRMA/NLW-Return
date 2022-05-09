import { MoonStars, Sun } from "phosphor-react";
import { useState } from "react";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(localStorage.theme === "dark");

    function handleThemeToggle() {
        setIsDark(!isDark);
        localStorage.theme = isDark ? "light" : "dark";
        if (isDark) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    }

    return (
        <button
            onClick={handleThemeToggle}
            type="button"
            className="my-auto w-8 h-8 mx-2 flex justify-center items-center rounded-lg focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-zinc-900 focus:ring-brand-500 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"
        >
            {isDark ? (
                <Sun weight="fill" className="w-6 h-6" />
            ) : (
                <MoonStars weight="fill" className="w-6 h-6" />
            )}
        </button>
    );
}
