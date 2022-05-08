export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>
            </header>

            <p>Hello World</p>

            <footer className="text-xl text-neutral-400">
                Feito com ❤ por{" "}
                <a
                    className="underline underline-offset-4"
                    href="https://github.com/devRMA"
                    target="_blank"
                >
                    {" "}
                    devRMA
                </a>
            </footer>
        </div>
    );
}
