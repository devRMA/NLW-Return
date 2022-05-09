import { useEffect } from "react";

import { ThemeToggle } from "./components/ThemeToggle";
import { Widget } from "./components/Widget";

export function App() {
    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    });

    return (
        <>
            <header className="w-full h-[72px] flex justify-center bg-zinc-100 dark:bg-zinc-800">
                <div className="w-40 h-10 rounded-lg my-auto bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>

                <nav className="my-auto mx-40 flex gap-6">
                    <div className="w-[99px] h-4 rounded-lg bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
                    <div className="w-[99px] h-4 rounded-lg bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
                    <div className="w-[99px] h-4 rounded-lg bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
                    <div className="w-[99px] h-4 rounded-lg bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
                </nav>

                <div className="my-auto w-8 h-8 mx-2 rounded-lg bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
                <ThemeToggle />

                <div className="my-auto mx-2 w-12 h-12 rounded-full bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
            </header>

            <main className="mt-8">
                <div className="mx-auto mt-4 w-[1120px]">
                    <div className="mb-8 h-[124px] flex flex-col justify-center bg-zinc-100 dark:bg-zinc-800">
                        <p className="ml-14 text-zinc-500 dark:text-zinc-400">
                            Experimente enviar um feedback de um bug na
                            aplicação 🐛
                        </p>
                    </div>

                    <div className="w-full flex flex-wrap gap-8">
                        <div className="w-[352px] h-[310px] bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg"></div>
                        <div className="w-[352px] h-[310px] bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg"></div>
                        <div className="w-[352px] h-[310px] bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg"></div>
                    </div>
                </div>
            </main>

            <Widget />
        </>
    );
}
